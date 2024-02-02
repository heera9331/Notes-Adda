import User from "../../models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../utils/db";

connectDB()

export async function POST(request: NextRequest){
    try {
        console.log(request);
        const reqBody = await request.json();
        let username = reqBody.username;
        let password = reqBody.password;

        if(!username || !password) {
            return NextResponse.json({error: 'some fields are missing'});
        }

        let res = await User.findOne({username, password}).select('-_id -password');
        console.log(res);
        return NextResponse.json({user: res});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}