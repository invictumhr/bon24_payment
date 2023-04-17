<?php

namespace App\Common\Helpers;

class Crypt
{
    /**
     * @param string $key
     * @param string $string
     * @return string
     */
    public static function encrypt($key, $string)
    {
        $key = hash('sha256', $key, true);
        $iv = random_bytes(16);
        $ciphertext = openssl_encrypt($string, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
        return base64_encode($iv . $ciphertext);
    }

    /**
     * @param string $key
     * @param string $string
     * @return string
     */
    public static function decrypt($key, $string)
    {
        $key = hash('sha256', $key, true);
        $ciphertext = base64_decode($string);
        $iv = substr($ciphertext, 0, 16);
        $ciphertext = substr($ciphertext, 16);
        return openssl_decrypt($ciphertext, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv);
    }
}
