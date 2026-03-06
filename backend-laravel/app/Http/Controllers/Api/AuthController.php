<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required|string',
            ]);

            // Node.js: SELECT * FROM admins WHERE username = ?
            $admin = Admin::where('username', $request->username)->first();

            if (!$admin || !Hash::check($request->password, $admin->password)) {
                return response()->json(['message' => 'Kullanıcı adı veya şifre hatalı'], 401);
            }

            // Laravel Sanctum ile Token Oluşturma (generateToken karşılığı)
            $token = $admin->createToken('admin-token')->plainTextToken;

            return response()->json([
                'message' => 'Giriş başarılı',
                'token' => $token
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Sunucu hatası', 'error' => $e->getMessage()], 500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Başarıyla çıkış yapıldı']);
    }
}
