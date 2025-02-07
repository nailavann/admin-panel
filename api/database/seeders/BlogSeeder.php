<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
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
                $blog = $user->blogs()->create([
                    'title' => $faker->sentence(6),
                    'description' => $faker->paragraph(3),
                ]);

                $blog->image()->create([
                    'path' => 'pathhhhhh'
                ]);
            }
        }
    }
}
