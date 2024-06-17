<?php

namespace App\Http\Helpers;

use Error;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Throwable;

class HttpResponse
{
    public static function ok($data, $message = 'success', $status = 200): JsonResponse
    {
        $success = true;
        return response()->json(compact('data', 'message', 'success'), $status);
    }

    public static function created($data, $message = 'created'): JsonResponse
    {
        $success = true;
        return response()->json(compact('data', 'message', 'success'), 201);
    }

    public static function noContent(): Response
    {
        return response()->noContent();
    }

    public static function forbidden(): JsonResponse
    {
        return response()->json(['error' => 'Access denied'], 403);
    }

    public static function badRequest(Error|Exception|Throwable $error, ?string $message = null): JsonResponse
    {
        $code = $error->getCode() !== 0 ? intval($error->getCode()) : 400;
        return response()->json(['error' => self::mountError($error, $message) ?? 'Bad Request'], $code);
    }

    public static function unauthorized($error = null): JsonResponse
    {
        return response()->json(['error' => self::mountError($error) ?? 'Unauthenticated'], 401);
    }

    public static function serverError($error = null): JsonResponse
    {
        return response()->json(['error' => self::mountError($error) ?? 'Server Error'], 500);
    }

    private static function mountError($error = null, ?string $message = null): array|null|string
    {
        if (gettype($error) === 'string') {
            return $error;
        }
        if (!$error?->getMessage()) {
            return null;
        }
        return [
            'message' => $message ?? $error->getMessage(),
            'errorMessage' => $error->getMessage(),
            'file' => $error->getFile(),
            'line' => $error->getLine(),
        ];
    }
}
