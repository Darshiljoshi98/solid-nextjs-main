import dbConn from "@/utils/dbConn";
import Testimonial from "../../../models/testimonial";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    try {
        await dbConn();
        const ContactData = await Testimonial.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
            message: "Data Get successfully!",
            data: ContactData
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
