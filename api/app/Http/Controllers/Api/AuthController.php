<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthenticationService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthenticationService $authService
    )
    {
    }

    public function login(LoginRequest $request): JsonResponse
    {
        try {
            $credentials = $request->validated();
            $result = $this->authService->attemptLogin($credentials);

            return $this->success(
                'Giriş başarılı',
                [
                    'access_token' => $result['token'],
                    'user' => UserResource::make($result['user'])
                ]
            );
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }

    }

    public function logout()
    {
        try {
            $user = auth()->user();
            $user->currentAccessToken()->delete();
            return $this->success('Çıkış yapıldı');
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
