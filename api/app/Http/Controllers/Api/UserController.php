<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    public function getUser()
    {
        try {
            /** @var User $user */
            $user = auth()->user();

            return UserResource::make($user);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function allUsers(): JsonResponse|AnonymousResourceCollection
    {
        try {
            $users = User::query()->paginate(20);
            return UserResource::collection($users);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }

    public function getUserById($id): UserResource|JsonResponse
    {
        try {
            $user = User::query()->find($id);
            throw_unless($user, \Exception::class, 'Kullanıcı bulunamadı.');
            return new UserResource($user);
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
