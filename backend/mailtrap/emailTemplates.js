export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - Arogyam</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; padding: 0; background-color: #0f0f0f;">
  <div style="background: linear-gradient(135deg, #00bf63, #0e824a); padding: 30px 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Arogyam</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">Verify Your Email</p>
  </div>
  <div style="background-color: #1a1a1a; padding: 40px 30px; border-radius: 0 0 12px 12px;">
    <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px;">Hello,</p>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 30px;">Thank you for joining Arogyam! Your verification code is:</p>
    <div style="text-align: center; margin: 40px 0;">
      <div style="background: linear-gradient(135deg, #00bf63, #72c49c); padding: 20px; border-radius: 12px; display: inline-block;">
        <span style="font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #ffffff; font-family: 'Inter', monospace;">{verificationCode}</span>
      </div>
    </div>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 16px;">Enter this code on the verification page to complete your registration.</p>
    <p style="color: #72c49c; font-size: 14px; margin-bottom: 30px; font-weight: 500;">⏰ This code will expire in 24 hours for security reasons.</p>
    <p style="color: #b0b0b0; font-size: 14px; margin-bottom: 30px;">If you didn't create an account with us, please ignore this email.</p>
    <p style="color: #ffffff; font-size: 16px;">Best regards,<br><span style="color: #00bf63; font-weight: 600;">The Arogyam Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; padding: 20px;">
    <p style="color: #666666; font-size: 12px; margin: 0;">This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful - Arogyam</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; padding: 0; background-color: #0f0f0f;">
  <div style="background: linear-gradient(135deg, #00bf63, #0e824a); padding: 30px 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Arogyam</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">Password Reset Successful</p>
  </div>
  <div style="background-color: #1a1a1a; padding: 40px 30px; border-radius: 0 0 12px 12px;">
    <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px;">Hello,</p>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 30px;">We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 40px 0;">
      <div style="background: linear-gradient(135deg, #00bf63, #72c49c); color: white; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; display: inline-block; font-size: 40px; font-weight: 700;">
        ✓
      </div>
    </div>
    <div style="background-color: #242424; border-left: 4px solid #00bf63; padding: 20px; margin: 30px 0; border-radius: 8px;">
      <p style="color: #72c49c; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">⚠️ SECURITY NOTICE</p>
      <p style="color: #e5e5e5; font-size: 14px; margin: 0;">If you did not initiate this password reset, please contact our support team immediately.</p>
    </div>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 16px;">For security reasons, we recommend that you:</p>
    <ul style="color: #b0b0b0; font-size: 14px; margin: 20px 0; padding-left: 20px;">
      <li style="margin-bottom: 8px; color: #e5e5e5;">Use a strong, unique password</li>
      <li style="margin-bottom: 8px; color: #e5e5e5;">Enable two-factor authentication if available</li>
      <li style="margin-bottom: 8px; color: #e5e5e5;">Avoid using the same password across multiple sites</li>
    </ul>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 30px;">Thank you for helping us keep your account secure.</p>
    <p style="color: #ffffff; font-size: 16px;">Best regards,<br><span style="color: #00bf63; font-weight: 600;">The Arogyam Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; padding: 20px;">
    <p style="color: #666666; font-size: 12px; margin: 0;">This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - Arogyam</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; padding: 0; background-color: #0f0f0f;">
  <div style="background: linear-gradient(135deg, #00bf63, #0e824a); padding: 30px 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Arogyam</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">Password Reset Request</p>
  </div>
  <div style="background-color: #1a1a1a; padding: 40px 30px; border-radius: 0 0 12px 12px;">
    <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px;">Hello,</p>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 20px;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 30px;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 40px 0;">
      <a href="{resetURL}" style="background: linear-gradient(135deg, #00bf63, #0e824a); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; transition: all 0.2s ease;">Reset Password</a>
    </div>
    <div style="background-color: #242424; border-left: 4px solid #72c49c; padding: 20px; margin: 30px 0; border-radius: 8px;">
      <p style="color: #72c49c; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">⏰ TIME SENSITIVE</p>
      <p style="color: #e5e5e5; font-size: 14px; margin: 0;">This link will expire in 1 hour for security reasons.</p>
    </div>
    <p style="color: #b0b0b0; font-size: 14px; margin-bottom: 30px;">If the button doesn't work, copy and paste this link into your browser:<br>
    <span style="color: #72c49c; word-break: break-all;">{resetURL}</span></p>
    <p style="color: #ffffff; font-size: 16px;">Best regards,<br><span style="color: #00bf63; font-weight: 600;">The Arogyam Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; padding: 20px;">
    <p style="color: #666666; font-size: 12px; margin: 0;">This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Arogyam</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; padding: 0; background-color: #0f0f0f;">
  <div style="background: linear-gradient(135deg, #00bf63, #0e824a); padding: 30px 20px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Arogyam</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">Welcome to Safer Shopping</p>
  </div>
  <div style="background-color: #1a1a1a; padding: 40px 30px; border-radius: 0 0 12px 12px;">
    <p style="color: #ffffff; font-size: 18px; margin-bottom: 20px; font-weight: 600;">Hey {username}! 👋</p>
    
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 20px;">Welcome to Arogyam! We're so grateful that you want to use our software.</p>
    
    <div style="background-color: #242424; border-left: 4px solid #00bf63; padding: 24px; margin: 30px 0; border-radius: 8px;">
      <p style="color: #72c49c; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">💚 BUILT WITH YOU IN MIND</p>
      <p style="color: #e5e5e5; font-size: 16px; margin: 0; line-height: 1.6;">This software was built with you, the user, in mind. We want to help as many people as we can shop safer, and we truly hope that Arogyam is of great use to you.</p>
    </div>
    
    <p style="color: #e5e5e5; font-size: 16px; margin-bottom: 30px;">Your account is now verified and ready to go! Time to take control of your health and start identifying those hidden harmful ingredients.</p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://arogyam.health/dashboard" style="background: linear-gradient(135deg, #00bf63, #0e824a); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; transition: all 0.2s ease;">🚀 Go to Dashboard & Start Scanning</a>
    </div>
    
    <div style="background-color: #242424; padding: 20px; margin: 30px 0; border-radius: 8px; text-align: center;">
      <p style="color: #72c49c; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">✨ PRO TIP</p>
      <p style="color: #e5e5e5; font-size: 14px; margin: 0;">Don't wait - head over to your dashboard and start scanning now!</p>
    </div>
    
    <p style="color: #ffffff; font-size: 16px; margin-top: 30px;">Welcome to safer, smarter shopping!<br><span style="color: #00bf63; font-weight: 600;">The Arogyam Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; padding: 20px;">
    <p style="color: #666666; font-size: 12px; margin: 0;">You're receiving this because you just verified your Arogyam account.</p>
  </div>
</body>
</html>
`;