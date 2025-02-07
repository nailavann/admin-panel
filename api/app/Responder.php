<?php

namespace App;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

trait Responder
{

    /**
     * Return a success JSON response.
     *
     * @param array|object|null $data
     * @param int $code
     * @return JsonResponse
     */
    protected function success(string $message, $data = null, int $code = ResponseAlias::HTTP_OK): JsonResponse
    {
        $response = [
            'status' => $code,
            'message' => $message,
            'success' => true,
        ];
        if ($data instanceof AnonymousResourceCollection) {
            return $data->additional(array_merge($data->additional, $response))->toResponse(request());
        }
        return response()->json(array_merge($response, ['data' => $data]), $code);
    }

    /**
     * Return an error JSON response.
     *
     * @param string $message
     * @param int $code
     * @param null $data
     * @return JsonResponse
     */
    protected function error(string $message, int $code = ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, $data = null): JsonResponse
    {
        return response()->json([
            'status' => $code,
            'success' => false,
            'error' => [
                'code' => $code,
                'message' => $message,
            ],
            'data' => $data
        ], $code);
    }

}
