<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index()
    {
        try {
            return Image::query()->with('imageable')->get();
        } catch (\Throwable $exception) {
            return $this->error($exception->getMessage());
        }
    }
}
