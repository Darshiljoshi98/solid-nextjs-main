import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/emailTemplate';
const resend = new Resend('re_eEhY7Qvh_28Wbe94KXoVEfzQV4m785aus');

export async function POST(req, res) {
console.log('call')
    try {    

        const body = await req.json();
        console.log(body)
        await dbConn();

        await Contact.create(body);
        try{
        // const data = await resend.emails.send({
        //     from: 'onboarding@resend.dev',
        //     to:'darshil2015@gmail.com',
        //     subject: 'Hello world',
        //     react: EmailTemplate({ firstName: body.username,phone:body.phone,subject:body.subject,email:body.email }),
        //   });
        }
        catch (e) {
            console.log(e)
            return NextResponse.json(
                { message: "Server error, please try again!" },
                { status: 500 }
            )
        }
        return NextResponse.json({
            message: "User add successfully!"
        }, {
            status: 200
        })
        

    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
