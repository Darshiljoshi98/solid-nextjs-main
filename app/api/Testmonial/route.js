// app/api/testmonial/route.js (nextjs 13 route handling)
import dbConn from "@/utils/dbConn";
import Testimonial from "../../../models/testimonial";
import { NextResponse } from "next/server";

export async function GET() {
    // Prevent caching
    const res = NextResponse.json(
        { message: "Server error, please try again!" },
        { status: 500 }
    );

    res.headers.set('Cache-Control', 'no-store, max-age=0'); // Ensure no caching on client/server side

    try {
        await dbConn();
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        console.log('Fetched testimonials:', testimonials);
        
        return NextResponse.json({
            message: "Data fetched successfully!",
            data: testimonials
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Server error, please try again!"
        }, { status: 500 });
    }
}
