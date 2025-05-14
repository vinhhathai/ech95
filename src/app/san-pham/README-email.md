# Hướng dẫn thiết lập Formspree để gửi email từ phía client

Formspree là một dịch vụ cho phép bạn gửi dữ liệu từ form HTML trực tiếp đến email mà không cần viết bất kỳ mã backend nào. Đây là một giải pháp tốt khi bạn không có API gửi email.

## Các bước thiết lập Formspree

### 1. Đăng ký tài khoản Formspree
1. Truy cập [Formspree.io](https://formspree.io/)
2. Đăng ký tài khoản mới (có thể dùng GitHub, Google)
3. Xác nhận email đăng ký

### 2. Tạo form mới
1. Đăng nhập vào tài khoản Formspree
2. Nhấn nút "New Form"
3. Đặt tên form (ví dụ: "Ếch Giống 95 - Đăng ký báo giá")
4. Nhập email nhận thông báo (email của bạn hoặc email công ty)
5. Chọn gói Free (miễn phí, giới hạn 50 submissions/tháng) hoặc trả phí

### 3. Tích hợp với trang web

#### Phương pháp 1: Dùng form action trực tiếp (không cần JavaScript)
```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  <input type="hidden" name="_subject" value="Đăng ký nhận báo giá sản phẩm Ếch Giống 95" />
  <input type="email" name="email" placeholder="Nhập email của bạn..." required />
  <button type="submit">ĐĂNG KÝ</button>
</form>
```

#### Phương pháp 2: Sử dụng JavaScript/Fetch API (đã tích hợp trong code hiện tại)
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({ 
    email: email,
    subject: 'Đăng ký nhận báo giá sản phẩm Ếch Giống 95',
    message: `Khách hàng có email ${email} đã đăng ký nhận báo giá sản phẩm.`
  }),
});
```

### 4. Trích xuất Form ID
1. Sau khi tạo form, Formspree sẽ cung cấp cho bạn một Form ID dạng `xyyaabbcc`
2. Thay thế `YOUR_FORM_ID` trong code với ID này

## Tùy chỉnh thêm

### Tùy chỉnh email nhận được
1. Trong trang quản lý form, chọn tab "Settings"
2. Tùy chỉnh các thông tin như chủ đề email, định dạng email, v.v.

### Thêm CAPTCHA chống spam
1. Trong tab "Settings", bật tính năng reCAPTCHA
2. Làm theo hướng dẫn để tích hợp CAPTCHA vào form

### Tùy chỉnh trang cảm ơn
1. Bạn có thể tùy chỉnh trang "thank you" khi người dùng submit form thành công
2. Hoặc bạn có thể tắt redirect và chỉ xử lý phản hồi Ajax như trong code hiện tại

## Lưu ý
- Gói miễn phí của Formspree có giới hạn 50 submissions mỗi tháng
- Email gửi đi có thể bị đưa vào thư mục Spam, nên hãy cấu hình các tùy chọn chống spam
- Hãy thêm tên miền của bạn vào whitelist trong tài khoản Formspree để tăng tính bảo mật

## Các dịch vụ tương tự
Nếu Formspree không đáp ứng được nhu cầu, bạn có thể xem xét các dịch vụ tương tự:

1. [99inbound](https://www.99inbound.com/) - Có gói miễn phí
2. [FormKeep](https://formkeep.com/) - Nhiều tính năng cao cấp
3. [Netlify Forms](https://www.netlify.com/products/forms/) - Miễn phí nếu bạn host trang web trên Netlify
4. [Static Forms](https://www.staticforms.xyz/) - Đơn giản, có gói miễn phí 