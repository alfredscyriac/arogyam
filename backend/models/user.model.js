import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    name: {
        type: String, 
        required: true
    }, 
    lastLogin: {
        type: Date, 
        deafault: Date.now
    }, 
    isVerified: {
        type: Boolean,
        default: false
    }, 
    avoidanceList: {
        type: [String], 
        default: []
    },
    unsafeProducts: {
        type: [{
            productName: String, 
            barcode: String, 
            imageUrl: String, 
            matchedIngredients: [String], 
            safetyScore: Number, 
            scannedAt: {
                type: Date, 
                default: Date.now
            }
        }], 
        default: []
    },
    resetPasswordToken: String, 
    resetPasswordExpiresAt: Date, 
    verificationToken: String, 
    verificationTokenExpiresAt: Date, 
},{timestamps:true});


export const User = mongoose.model('User', userSchema);

