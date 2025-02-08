import { Schema, Types } from "mongoose";

const hospitalSchema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        contactNumber: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        totalBeds: { type: Number, required: true },
        occupiedBeds: { type: Number, required: true },
        availableBeds: { type: Number, required: true },
        subAdmins: [{ type: Types.ObjectId, ref: "SubAdmin" }],
    },
    { timestamps: true }
);

export default hospitalSchema;
