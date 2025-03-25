import { PortfolioModel } from "../models/portfolio_models.js";
import { contactValidator } from "../validators/portfolio_validator.js";
import { sendEmail } from "../utils/mailing.js";

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

      
    await sendEmail(
  value.email,
  "Message Recieved",
  `
  <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
    <h2 style="color: #6b21a8; margin-bottom: 10px;">Hello ${value.name},</h2>
    <p style="color: #111827; font-size: 15px;">
      Thanks for reaching out.
      I’ve received your message and will respond to you very soon.
    </p>
    <p style="color: #111827; font-size: 15px;">Have a great Day!!</p>
    
    <br/>

    <div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #d1d5db;">
      <p style="color: #6b21a8; font-weight: bold; margin: 0;">Gloria Larbi</p>
      <p style="color: #111827; margin: 2px 0;">Web Developer & DevOps Engineer</p>
      <a href="www.linkedin.com/in/glorialarbi" style="color: #6b21a8; text-decoration: none;">
        LinkedIn
      </a>
    </div>
  </div>
  `
);

    // 📨 Send notification to yourself
    await sendEmail(
      process.env.USER_GMAIL,
      "📩 New Portfolio Message",
      `
      <div style="font-family: Arial, sans-serif; color: #4b0082;">
        <h3 style="color: #6b21a8;">New Contact Submission</h3>
        <p><strong>Name:</strong> ${value.name}</p>
        <p><strong>Email:</strong> ${value.email}</p>
        <p><strong>Phone:</strong> ${value.phone || "N/A"}</p>
        <p><strong>Message:</strong> ${value.message}</p>
      </div>
      `
    );
    
        res.status(201).json({
          message: "Message submitted successfully",
          data: message
        });
    } catch (error) {
      next(error);
    }
    }
