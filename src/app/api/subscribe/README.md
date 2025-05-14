# Email Subscription API

This API endpoint handles email subscriptions for product price quotes on the Ếch Giống 95 website.

## Current Implementation

Currently, this is a mock implementation that:
1. Receives an email address
2. Validates the email format
3. Returns a success response

## How to Implement Real Email Functionality

To set up real email sending functionality, you'll need to:

1. **Choose an Email Service Provider**:
   - [SendGrid](https://sendgrid.com/)
   - [Mailchimp](https://mailchimp.com/)
   - [Amazon SES](https://aws.amazon.com/ses/)
   - [Nodemailer](https://nodemailer.com/) (for SMTP integration)

2. **Install Required Packages**:
   ```bash
   npm install nodemailer # or your chosen email service SDK
   ```

3. **Environment Variables**:
   Add these to your `.env.local` file:
   ```
   EMAIL_HOST=smtp.yourservice.com
   EMAIL_PORT=587
   EMAIL_USER=your-username
   EMAIL_PASS=your-password
   ADMIN_EMAIL=admin@yourcompany.com
   ```

4. **Update the API Route**:

   ```typescript
   import { NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: Request) {
     try {
       const { email } = await request.json();

       // Simple validation
       if (!email || !email.includes('@')) {
         return NextResponse.json({ success: false, message: 'Email không hợp lệ' }, { status: 400 });
       }

       // Create a transporter
       const transporter = nodemailer.createTransport({
         host: process.env.EMAIL_HOST,
         port: Number(process.env.EMAIL_PORT),
         secure: process.env.EMAIL_PORT === '465',
         auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS,
         },
       });

       // Email to customer
       await transporter.sendMail({
         from: `"Ếch Giống 95" <${process.env.EMAIL_USER}>`,
         to: email,
         subject: 'Báo giá sản phẩm từ Ếch Giống 95',
         html: `
           <h1>Cảm ơn bạn đã đăng ký nhận báo giá từ Ếch Giống 95!</h1>
           <p>Chúng tôi sẽ gửi bảng báo giá chi tiết sớm nhất có thể.</p>
           <p>Nếu bạn có câu hỏi, vui lòng liên hệ chúng tôi qua:</p>
           <p>Điện thoại: 0977 210 006</p>
           <p>Địa chỉ: 209 Ấp Mĩ 1, Hoả Lựu, Vị Thanh, Hậu Giang</p>
         `,
       });

       // Email to admin
       await transporter.sendMail({
         from: `"Website Ếch Giống 95" <${process.env.EMAIL_USER}>`,
         to: process.env.ADMIN_EMAIL,
         subject: 'Có người đăng ký nhận báo giá mới',
         html: `
           <h1>Thông báo đăng ký nhận báo giá mới</h1>
           <p>Email khách hàng: ${email}</p>
           <p>Thời gian: ${new Date().toLocaleString('vi-VN')}</p>
         `,
       });

       // Store in database (optional)
       // const result = await db.collection('subscribers').insertOne({ email, date: new Date() });
      
       return NextResponse.json({ 
         success: true, 
         message: 'Đăng ký thành công! Chúng tôi sẽ gửi báo giá tới email của bạn ngay.' 
       });
      
     } catch (error) {
       console.error('Subscription error:', error);
       return NextResponse.json({ 
         success: false, 
         message: 'Có lỗi xảy ra, vui lòng thử lại sau' 
       }, { status: 500 });
     }
   }
   ```

5. **Template Customization**:
   - Update the HTML templates for emails to match your brand
   - Consider using a template system for more complex emails

6. **Testing**:
   - Use a service like [Mailtrap](https://mailtrap.io/) for development testing
   - Create tests to ensure emails are sent correctly

7. **Spam Protection**:
   - Consider adding CAPTCHA to your form
   - Implement rate limiting to prevent abuse

## Database Storage (Optional)

For keeping a record of subscribers:

1. Set up a database connection (MongoDB, PostgreSQL, etc.)
2. Create a schema for subscribers
3. Add database operations to the API route to store and manage subscribers 