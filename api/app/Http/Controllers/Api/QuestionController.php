<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AddQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    public function getAllQuestions(): JsonResponse|AnonymousResourceCollection
    {
        try {
            $questions = Question::query()->with(['user', 'image', 'categories'])->latest()->paginate(20);
            return QuestionResource::collection($questions);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function getQuestion($id): JsonResponse|QuestionResource
    {
        try {
            $question = Question::query()->with(['user', 'image'])->find($id);
            throw_unless($question, \Exception::class, 'Soru bulunamadı.');
            $question->increment('view_count');
            return new QuestionResource($question);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function createQuestion(AddQuestionRequest $request)
    {
        try {
            $attributes = $request->validated();

            /** @var User $user */
            $user = auth()->user();

            return DB::transaction(function () use ($user, $attributes) {
                $question = $user->questions()->create([
                    'title' => $attributes['title'],
                    'description' => $attributes['description']
                ]);
                throw_unless($question, \Exception::class, 'Soru oluşturulamadı.');

                $question->categories()->attach($attributes['categories']);
                $imagePath = (new ImageHelper)->uploadImage($attributes['image'], 'questions');
                $question->image()->create(['path' => $imagePath]);

                return $this->success('Soru başarıyla oluşturuldu');
            });
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

}
