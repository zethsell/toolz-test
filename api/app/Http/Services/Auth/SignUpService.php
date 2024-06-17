<?php

namespace App\Http\Services\Auth;

use App\Http\DTOs\SignUpInputDTO;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignUpService
{
    public function execute(SignUpInputDTO $input): void
    {
        $user = new User();
        $user->name = $input->name;
        $user->email = strtolower($input->email);
        $user->password = Hash::make($input->password);
        $user->save();
    }
}
