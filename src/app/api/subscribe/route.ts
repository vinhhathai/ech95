import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Simple validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Email không hợp lệ' }, { status: 400 });
    }

    // In a real-world scenario, you would:
    // 1. Add email to a database
    // 2. Send a confirmation email using a service like Nodemailer, SendGrid, etc.
    // 3. Maybe send an internal notification to the business
    
    // Here is a simulated email service response
    console.log(`Subscription request received for email: ${email}`);
    
    // Return success response
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