import { Schema, model } from "mongoose";
import normalize from  "normalize-mongoose";

const portfolioSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number},
    message: {type: String, required: true}
}, {
    timestamps: true
})

portfolioSchema.plugin(normalize)
//Use this schema to create a collection named portfolios and call it PortfolioModel so I can use it elsewhere in my app
export const PortfolioModel = model('Portfolio', portfolioSchema);

