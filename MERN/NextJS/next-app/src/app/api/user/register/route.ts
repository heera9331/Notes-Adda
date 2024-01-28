import User from "../../models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../utils/db";

connectDB()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        let username = reqBody.username;
        let password = reqBody.password;
        console.log('body', reqBody);

        let tmpUser = await User.findOne({username: username});
        if(tmpUser) {
            return NextResponse.json({error: 'user already exist'});
        }
        
        let user = await User.insertMany([{username, password}]);
        console.log(user)
        return NextResponse.json({user});

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}