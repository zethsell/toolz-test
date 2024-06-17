<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\BaseRequest;

class SignUpRequest extends BaseRequest
{

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'email' => ['required', 'string', 'email', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
    }
}
