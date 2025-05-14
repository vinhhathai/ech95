import React, { useState } from 'react';
import Button from '@/components/ui/Button';

/**
 * Đây là phiên bản SubscriptionBanner sử dụng Google Forms để thu thập email
 * Bạn có thể thay thế SubscriptionBanner trong file page.tsx bằng component này
 * - Lợi ích: Hoàn toàn miễn phí, không giới hạn số lượng submission
 * - Bước chuẩn bị: Tạo Google Form với 1 câu hỏi email, sau đó lấy form ID từ URL
 */
export default function SubscriptionBannerWithGoogleForms() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({
    type: null,
    message: '',
  });

  // Thay thế FORM_ID với ID từ Google Forms của bạn
  // URL của Google Form có dạng: https://docs.google.com/forms/d/e/FORM_ID/viewform
  const GOOGLE_FORM_ID = 'YOUR_GOOGLE_FORM_ID';
  
  // Thay thế ENTRY_ID với ID của trường email trong Google Form
  // Có thể tìm ENTRY_ID bằng cách inspect element trên form
  const GOOGLE_FORM_EMAIL_ENTRY_ID = 'entry.123456789';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status and set loading
    setStatus({ type: 'loading', message: 'Đang xử lý...' });
    
    try {
      // Gửi dữ liệu đến Google Forms
      const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
      
      // Sử dụng iframe ẩn để gửi form (tránh vấn đề CORS)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Tạo form để submit
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = '_blank'; // Để tránh redirect
      
      // Thêm input email
      const emailInput = document.createElement('input');
      emailInput.name = GOOGLE_FORM_EMAIL_ENTRY_ID;
      emailInput.value = email;
      form.appendChild(emailInput);
      
      // Thêm form vào iframe và submit
      if (iframe.contentDocument) {
        iframe.contentDocument.body.appendChild(form);
        form.submit();
      }
      
      // Dọn dẹp iframe sau 2 giây
      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      }, 2000);
      
      // Hiển thị thông báo thành công
      setStatus({
        type: 'success',
        message: 'Đăng ký thành công! Chúng tôi sẽ gửi báo giá cho bạn trong thời gian sớm nhất.'
      });
      setEmail(''); // Xóa form sau khi gửi thành công
      
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.' 
      });
    }
  };

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-lime-200/50 rounded-lg py-10 px-4 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2 text-center">ĐĂNG KÝ NHẬN BÁO GIÁ SẢN PHẨM</h2>
        <p className="text-gray-700 mb-4 text-center">Nhận bảng báo giá chi tiết và cập nhật mới nhất</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <Button 
            type="submit" 
            size="md" 
            disabled={status.type === 'loading'}
            className="rounded-full px-8 font-bold bg-green-700 text-white hover:bg-green-800 disabled:bg-gray-400"
          >
            {status.type === 'loading' ? 'ĐANG GỬI...' : 'ĐĂNG KÝ'}
          </Button>
        </form>
        
        {status.type && (
          <div className={`mt-4 px-4 py-2 rounded-md ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 
            status.type === 'error' ? 'bg-red-100 text-red-800' : 
            'bg-blue-100 text-blue-800'
          }`}>
            {status.message}
          </div>
        )}
        
        {/* Cách thứ hai: Link trực tiếp đến Google Form */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Hoặc{' '}
            <a 
              href={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              đăng ký trực tiếp tại đây
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 