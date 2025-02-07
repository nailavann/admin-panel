<?php

namespace App\Services;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthenticationService
{

    /**
     * @throws Exception
     */
    public function attemptLogin(array $credentials): array
    {
        $user = $this->findUserByEmail($credentials['email']);
        $this->validatePassword($user, $credentials['password']);

        return [
            'user' => $user,
            'token' => $this->createAuthToken($user)
        ];
    }

    /**
     * @throws Exception
     */
    private function findUserByEmail(string $email): User
    {
        /** @var User $user */
        $user = User::query()->where('email', $email)->first();

        if (!$user) {
            throw new Exception('Girdiğiniz bir email bulunamadı.');
        }

        if ($user->type !== 'admin') {
            throw new Exception('Bu hesap yetkisine sahip değil.');
        }

        return $user;
    }

    /**
     * @throws Exception
     */
    private function validatePassword(User $user, string $password): void
    {
        if (!Hash::check($password, $user->password)) {
            throw new Exception('Parola yanlış.');
        }
    }

    private function createAuthToken(User $user): string
    {
        return $user->createToken('auth')->plainTextToken;
    }
}

