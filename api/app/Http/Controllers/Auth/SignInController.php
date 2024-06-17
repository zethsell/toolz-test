<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\DTOs\SignInInputDTO;
use App\Http\Helpers\HttpResponse;
use App\Http\Requests\Auth\SignInRequest;
use App\Http\Services\Auth\SignInService;
use Illuminate\Http\JsonResponse;
use Throwable;

class SignInController extends Controller
{

    public function __construct(private readonly SignInService $service)
    {
    }

    public function __invoke(SignInRequest $request): JsonResponse
    {
        try {
            $result = $this->service->execute(new SignInInputDTO($request->validated()));
            return HttpResponse::ok($result);
        } catch (Throwable $exception) {
            return HttpResponse::unauthorized($exception);
        }
    }
}
