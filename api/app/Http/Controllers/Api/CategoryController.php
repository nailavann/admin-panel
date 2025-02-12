<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\QuestionResource;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Js;

class CategoryController extends Controller
{
    public function index(): AnonymousResourceCollection|JsonResponse
    {
        try {
            return CategoryResource::collection(Category::all());
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function getCategoryWithQuestions($id): JsonResponse|AnonymousResourceCollection
    {
        try {
            $category = Category::query()->find($id);
            return QuestionResource::collection($category->questions);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
