import User from "../../models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../utils/db";
import jws from "jws";

connectDB();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        let username = reqBody.username;
        let password = reqBody.password;
        console.log(username);
        console.log(password);

        if(!username || !password) {
            return NextResponse.json({error: 'some fields are missing'});
        }

        let res = await User.findOne({username, password}).select('-_id -password');
        if(!res) {
            return NextResponse.json({error: "User not found"});
        }
         
        // token
        let singature = jws.createSign({
            header: { alg: 'RS256' },
            privateKey: process.env.KEY,
            payload: username,
        });

        let token = singature;
        console.log('token', token);    
        
        if(!token) {
            console.log('token', token);    
            return NextResponse.json({error: "token generation error", msg: token.message});
        }
        let response = NextResponse.json({msg: "login success"});
        response.cookies.set("token", token, {httpOnly: true});
        return response;
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}