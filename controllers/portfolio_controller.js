import { PortfolioModel } from "../models/portfolio_models.js";
import { contactValidator } from "../validators/portfolio_validator.js";

export const addForm = async(req, res, next) => {
    try {
        const {error, value} = contactValidator.validate(
          req.body,
          {abortEarly: false}  
        );
        if (error){
            return res.status(400).json({
            errors: error.details.map(err => err.message)
          });
        }
        const message = await PortfolioModel.create(value);
    
        res.status(201).json({
          message: "Message submitted successfully",
          data: message
        });
    } catch (error) {
      next(error);
    }
    }
