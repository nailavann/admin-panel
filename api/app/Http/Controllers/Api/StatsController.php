<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class StatsController extends Controller
{
    public function index()
    {
        $data = Cache::remember('dashboard_counts', now()->addMinutes(10), function () {
            return [
                'questions' => Question::query()->count(),
                'blogs' => Blog::query()->count(),
                'users' => User::query()->count(),
            ];
        });

        return $this->success('İşlem başarılı.', $data);
    }
}
