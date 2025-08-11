import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from './emailTemplates.js'
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient, 
            subject: "Verify Your Email", 
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken), 
            category: "Email Verification"
        })

        console.log("Email sent successfully", response)
    } catch (error) {
        console.log("Error sending verification", error)
        throw new Error(`Error sending verification email: ${error}`)   
    }
}

export const sendWelcomeEmail = async (email, username) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient, 
            subject: "Welcome to Arogyam - Your account has been verified", 
            html: WELCOME_EMAIL_TEMPLATE.replace("{username}", username), 
            category: "Account Verification"
        })

        console.log("Email sent successfully", response)
    } catch (error) {
        console.log("Error sending welcome", error)
        throw new Error(`Error sending welcome email: ${error}`)   
    }

} 