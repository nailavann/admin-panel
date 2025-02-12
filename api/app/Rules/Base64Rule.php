<?php

namespace App\Rules;

use Closure;
use Exception;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;

class Base64Rule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param Closure(string): PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        try {
            $image = urldecode($value);
            $image = str_replace(' ', '+', $image);

            $image = explode('base64,', $image)[1];
            $data = base64_decode($image);
            throw_if(($data === false), Exception::class, 'Base64 decode edilemedi.');
            throw_unless((imagecreatefromstring($data) !== false), Exception::class, 'Resim oluşturulamadı.');

            $imageType = getimagesizefromstring($data);
            throw_if(($imageType === false), Exception::class, 'Resim hatalı.');
            throw_unless(($imageType['mime'] == 'image/jpeg' ||$imageType['mime'] == 'image/png'), Exception::class, 'Mime hatalı.');
        } catch (\Throwable $e) {
            $fail($e->getMessage());
        }

    }

}
