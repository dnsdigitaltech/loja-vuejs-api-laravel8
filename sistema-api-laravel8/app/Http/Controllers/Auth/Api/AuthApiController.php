<?php

namespace App\Http\Controllers\Auth\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;
use Tymon\JWTAuth\JWTAuth as JWTAuthJWTAuth;
use App\Http\Controllers\Auth\Api\Traits\AuthTrait;

class AuthApiController extends Controller
{
    use AuthTrait;

    public function __construct()
    {
        //passar um middleware em todos os metodos auth API, exceto o authenticate
        $this->middleware('auth:api', ['except' => ['authenticate']]);
    }

    // somewhere in your controller
    public function getAuthenticatedUser()
    {
        $response = $this->getUser();
        if($response['status'] != 200)
            return response()->json($response['response'], $response['status']);
        
        $user = $response['response'];
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
    
    //refresh token
    public function refreshToken() {
        if(!$token = JWTAuth::getToken())
            return response()->json(['error' => 'token_not_send'],401);
        
        try{
            $token = JWTAuth::refresh();
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        }

        return response()->json(compact('token'));
    }
    
}
