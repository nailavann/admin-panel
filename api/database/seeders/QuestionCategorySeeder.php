<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\QuestionCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Moda',
            'Elektronik',
            'Yaşam',
            'Ev Aletleri',
            'Kültür',
            'Sağlık',
            'Eğitim',
            'Spor',
            'Dış Ticaret',
        ];
        foreach ($categories as $category) {
            Category::query()->create([
                'name' => $category,
            ]);
        }
    }
}
