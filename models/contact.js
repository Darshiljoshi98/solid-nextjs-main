import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    })

const Contact = mongoose.models.clientInqury ?? mongoose.model('clientInqury', contactSchema)

export default  Contact;