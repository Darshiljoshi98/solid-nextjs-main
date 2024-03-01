
import {sendMail} from './mailService'
export async function POST(req,res) {
    const body = await req.json();
    console.log(body)
  try {
    await sendMail(
        body.username,
        body.email,
        body.phone,
        body.subject,
        body.message      
    );
    res.status(200).send("Success");
    } catch (error) {
    return Response.json({ error });
  }
}

