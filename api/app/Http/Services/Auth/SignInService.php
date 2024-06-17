<?php

namespace App\Http\Services\Auth;

use App\Exceptions\InvalidCredentialsException;
use App\Http\DTOs\SignInInputDTO;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SignInService
{
    /**
     * @throws InvalidCredentialsException
     */
    public function execute(SignInInputDTO $input): array
    {
        $email = strtolower($input->email);
        $password = $input->password;

        if (!Auth::attempt(['email' => $email, 'password' => $password])) {
            throw new InvalidCredentialsException();
        }

        $user = User::whereId(Auth::user()['id'])->first();
        $user->tokens()->delete();

        $token = $user->createToken('auth_token')->plainTextToken;
        $user->token = $token;

        return compact('user');
    }
}
