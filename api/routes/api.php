<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\StatsController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [UserController::class, 'getUser']);
    Route::get('all-users', [UserController::class, 'allUsers']);
    Route::get('user-by-id/{id}', [UserController::class, 'getUserById']);
    Route::get('stats', [StatsController::class, 'index']);
    Route::get('images', [ImageController::class, 'index']);
    Route::get('categories', [CategoryController::class, 'index']);
    Route::get('category-with-questions/{id}', [CategoryController::class, 'getCategoryWithQuestions']);
    Route::get('questions', [QuestionController::class, 'getAllQuestions']);
    Route::post('question', [QuestionController::class, 'createQuestion']);
    Route::get('question/{id}', [QuestionController::class, 'getQuestion']);

});

