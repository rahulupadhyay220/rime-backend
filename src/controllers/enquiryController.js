import enquiryModel from "../models/enquiryModel.js";

export const enquiryForm = async(req,res) => {
    try {
        const newData = new enquiryModel(req.body);
        const saveEnquiry = await newData.save();

        res.status(201).json(saveEnquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}