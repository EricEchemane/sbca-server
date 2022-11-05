import mongoose, { InferSchemaType } from "mongoose";

const GuestSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Your name is required"],
        minLength: [2, "name must be at least 2 characters"]
    },
    pusposeOfVisit: {
        type: String,
        required: [true, "Please specify a purpose of visit"],
    },
    timeIn: {
        type: Date,
        default: Date.now
    }
});

export type IGuest = InferSchemaType<typeof GuestSchema>;

const Guest = mongoose.model("Guest", GuestSchema);

export default Guest;