<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        $users = User::all();

        foreach ($users as $user) {
            $rnd = rand(1, 5);
            for ($i = 1; $i <= $rnd; $i++) {
                $question = $user->questions()->create([
                    'title' => $faker->sentence(6),
                    'description' => $faker->paragraph(3),
                ]);

                $question->image()->create([
                   'path' => 'pathhhhhh'
                ]);
            }
        }

    }
}
