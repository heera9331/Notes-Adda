import User from "../../models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../utils/db";

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
            
        
         
        let response = NextResponse.json({msg: "login success"});
        // response.cookies.set("token", token, {httpOnly: true});
        return response;
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}