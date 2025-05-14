# Hướng dẫn thiết lập Google Forms để thu thập email đăng ký

Google Forms là giải pháp hoàn toàn miễn phí và không giới hạn số lượng đăng ký, được hỗ trợ bởi Google.

## Bước 1: Tạo Google Form mới

1. Truy cập [Google Forms](https://docs.google.com/forms/) và đăng nhập với tài khoản Google của bạn
2. Nhấp vào "Blank" (Trống) để tạo form mới
3. Đặt tên form là "Đăng ký nhận báo giá sản phẩm Ếch Giống 95"
4. (Tùy chọn) Thêm mô tả: "Vui lòng nhập email để nhận báo giá chi tiết về sản phẩm"

## Bước 2: Tạo trường Email

1. Nhấp vào "Untitled Question" (Câu hỏi chưa có tiêu đề)
2. Nhập "Email" trong trường "Question" (Câu hỏi)
3. Chọn loại câu hỏi là "Short answer" (Câu trả lời ngắn)
4. Bật tùy chọn "Required" (Bắt buộc)
5. Nhấp vào tab "Response validation" (Xác thực câu trả lời)
6. Chọn "Regular expression" (Biểu thức chính quy) và nhập mẫu: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
7. Nhập "Vui lòng nhập đúng định dạng email" trong trường "Custom error text" (Văn bản lỗi tùy chỉnh)

## Bước 3: Tùy chỉnh cài đặt form

1. Nhấp vào biểu tượng bánh răng (⚙️) ở góc trên bên phải
2. Chuyển đến tab "Presentation" (Trình bày)
3. Bật "Show link to submit another response" (Hiển thị liên kết để gửi phản hồi khác)
4. Tùy chỉnh "Confirmation message" (Thông báo xác nhận) thành "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi báo giá sớm nhất có thể."
5. Nhấp vào "Save" (Lưu)

## Bước 4: Thiết lập thông báo qua email

1. Nhấp vào biểu tượng ba chấm (⋮) ở góc trên bên phải
2. Chọn "Add-ons" (Tiện ích bổ sung)
3. Tìm và cài đặt "Form Notifications" hoặc "Email Notifications for Forms"
4. Làm theo hướng dẫn để thiết lập thông báo email khi có người đăng ký mới

## Bước 5: Lấy Form ID và Entry ID

### Lấy Form ID:
1. Nhấp vào "Send" (Gửi) ở góc trên bên phải
2. Chọn tab liên kết (🔗)
3. Sao chép URL, có dạng: `https://docs.google.com/forms/d/e/1FAIpQLSc...LYcKw/viewform`
4. Form ID là phần giữa `/e/` và `/viewform`: `1FAIpQLSc...LYcKw`

### Lấy Entry ID:
1. Nhấp chuột phải vào trường email và chọn "Inspect" (Kiểm tra) hoặc "Inspect Element" (Kiểm tra phần tử)
2. Tìm thẻ `<input>` có thuộc tính `name` bắt đầu bằng "entry."
3. Giá trị sẽ có dạng: `entry.123456789`

## Bước 6: Tích hợp vào website

Cập nhật các biến trong file `email-with-google-forms.tsx`:

```javascript
// Thay YOUR_GOOGLE_FORM_ID bằng Form ID bạn vừa lấy được
const GOOGLE_FORM_ID = '1FAIpQLSc...LYcKw';

// Thay bằng Entry ID bạn vừa lấy được
const GOOGLE_FORM_EMAIL_ENTRY_ID = 'entry.123456789';
```

## Bước 7: Xem và quản lý đăng ký

1. Trở lại Google Form của bạn
2. Nhấp vào tab "Responses" (Phản hồi) ở phía trên
3. Tại đây bạn có thể:
   - Xem tất cả email đã đăng ký
   - Tải xuống dưới dạng bảng tính Excel hoặc CSV
   - Thiết lập để tự động lưu phản hồi vào Google Sheets

## Ưu điểm của giải pháp Google Forms

1. Hoàn toàn miễn phí, không giới hạn số lượng đăng ký
2. Dễ dàng quản lý với giao diện quen thuộc của Google
3. Tích hợp với Google Sheets để theo dõi và phân tích dữ liệu
4. Hỗ trợ nhiều ngôn ngữ và tùy chỉnh giao diện
5. Không cần backend hoặc API riêng

## Nhược điểm cần lưu ý

1. Trải nghiệm người dùng không liền mạch bằng API tùy chỉnh
2. Có thể gặp vấn đề CORS khi gửi form bằng JavaScript
3. Không có tính năng gửi email tự động cho người đăng ký (cần add-on hoặc giải pháp khác) 