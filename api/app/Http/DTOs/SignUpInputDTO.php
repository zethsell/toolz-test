<?php

namespace App\Http\DTOs;

use Illuminate\Support\Arr;

readonly class SignUpInputDTO
{
    public string $email;
    public string $password;
    public string $name;

    public function __construct(public array $data)
    {
        $this->name = Arr::get($data, 'name');
        $this->email = Arr::get($data, 'email');
        $this->password = Arr::get($data, 'password');
    }
}
