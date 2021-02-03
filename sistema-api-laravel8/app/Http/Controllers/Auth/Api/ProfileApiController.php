<?php

namespace App\Http\Controllers\Auth\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Validator;
use App\Models\User;
use App\Http\Requests\StoreUpdateUserFormRequest;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;
use Tymon\JWTAuth\JWTAuth as JWTAuthJWTAuth;

use App\Http\Controllers\Auth\Api\Traits\AuthTrait;

class ProfileApiController extends Controller
{
    use AuthTrait;
    public function __construct()
    {
        //passar um middleware em todos os metodos auth API, exceto o authenticate
        $this->middleware('auth:api', ['except' => ['register']]);
    }
    public function register(StoreUpdateUserFormRequest $request, User $user) 
    {
  
        try{
            $data = $request->only(['name', 'email', 'password']);
        
            $data['password'] = bcrypt($data['password']); 
            $user->create($data);
            //registrar e autenticar o user
            return $this->authenticate();
    
        } catch(QueryException $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function update (StoreUpdateUserFormRequest $request)
    {
        $response = $this->getUser();
        if($response['status'] != 200)
            return response()->json($response['response'], $response['status']);

        $user = $response['response'];
        $user->update($request->all());
        return response()->json(compact('user'));
    }
}
