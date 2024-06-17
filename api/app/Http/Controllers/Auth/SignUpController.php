<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\DTOs\SignUpInputDTO;
use App\Http\Helpers\HttpResponse;
use App\Http\Requests\Auth\SignUpRequest;
use App\Http\Services\Auth\SignUpService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Throwable;

class SignUpController extends Controller
{
    public function __construct(private readonly SignUpService $service)
    {
    }

    public function __invoke(SignUpRequest $request): Response|JsonResponse
    {
        try {
            $this->service->execute(new SignUpInputDTO($request->validated()));
            return HttpResponse::noContent();
        } catch (Throwable $exception) {
            return HttpResponse::unauthorized($exception);
        }
    }
}
