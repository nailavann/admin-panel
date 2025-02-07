<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class QuestionController extends Controller
{
    public function getAllQuestions(): JsonResponse|AnonymousResourceCollection
    {
        try {
            $questions = Question::query()->with('user')->paginate(20);
            return QuestionResource::collection($questions);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function getQuestion($id): JsonResponse|QuestionResource
    {
        try {
            $question = Question::query()->with('user')->find($id);
            throw_unless($question, \Exception::class, 'Soru bulunamadı.');
            return new QuestionResource($question);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
