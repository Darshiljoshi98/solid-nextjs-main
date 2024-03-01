
const axios = require('axios');
import { error } from "console";
import { NextResponse } from "next/server";
import { useState } from "react";

// Remove the import statement for 'error'
// import { error } from 'console';

export async function GET(req, res) {
    console.log('call');


    try {
     
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&limit=50&access_token=IGQWRNRlRYUWtOcnNsRXEyczRocHppaWtPVVktWGNKb3l2V1BuTl9QeWZAXa3ZA2WkVTckRlVW13X05yYjVkRlpwS0RfLWFZAc2xwTTViYWEzUnFNLTlrQ2xIdHBJNlA1cERic3Jmd2ZA1MmRmeHQ2bHhtRUZAUeVJGdjgZD',
        };

        let response = await axios.request(config);
        let responseData = JSON.stringify(response.data);


    
        console.log(response)
        if(response.data == undefined){
            return NextResponse.json(
                { message: "Server error, please try again!" },
                { status: 500 }
            );
        }
        return NextResponse.json({
            message: "call sucess",
            data: responseData
        }, {
            status: 200
        })

    } catch (e) {
        console.error(e); // Use console.error for errors
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}


