<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\BaseRequest;

class SignInRequest extends BaseRequest
{


    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }
}
