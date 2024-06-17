<?php

namespace App\Http\DTOs;

use Illuminate\Support\Arr;

readonly class SignInInputDTO
{
    public mixed $email;
    public mixed $password;

    public function __construct(public array $data)
    {
        $this->email = Arr::get($data, 'email');
        $this->password = Arr::get($data, 'password');
    }
}
