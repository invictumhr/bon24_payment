<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AjaxSecurity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(stristr($request->headers->get('referer'), url('/')) === false
        && stristr(url('/'), $request->headers->get('referer')) === false
        ){
            return response()->json(['success' => false, 'error' => 'Invalid request'], 403);
        }

        if(!session()->has('user_session_set')) {
            return response()->json(['success' => false, 'error' => 'Invalid request'], 403);
        }

        return $next($request);
    }
}
