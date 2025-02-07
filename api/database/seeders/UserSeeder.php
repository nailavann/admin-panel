<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'nailavan',
            'email' => 'nailavanan@hotmail.com',
            'password' => bcrypt('123123123'),
        ]);

//        // For testing purposes, create 100 users
//        User::factory()->count(100)->create();
    }
}
