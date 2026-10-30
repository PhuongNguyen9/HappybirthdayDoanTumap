# Birthday Quest 28 — The Golden Secret

## Chạy thử trên máy
1. Giải nén toàn bộ thư mục.
2. Mở `index.html` bằng trình duyệt.
3. Giữ nguyên cấu trúc `assets/`, `index.html`, `cake.html`, `script.js`, `style.css`, `cake.css`.

## Triển khai GitHub Pages
1. Đăng nhập GitHub và tạo repository tên `birthday-quest-28`.
2. Với GitHub Free, đặt repository ở chế độ **Public** để dùng GitHub Pages.
3. Upload toàn bộ nội dung bên trong thư mục website lên thư mục gốc repository (để `index.html` nằm ngay ở root, không nằm trong thư mục con).
4. Vào **Settings → Pages**.
5. Ở **Build and deployment**, chọn **Deploy from a branch**.
6. Chọn branch `main`, folder `/(root)`, nhấn **Save**.
7. Chờ GitHub hoàn tất deploy, sau đó mở URL được hiển thị trong phần Pages.

Tài liệu chính thức: https://docs.github.com/en/pages/quickstart

## Lưu ý riêng tư và mật khẩu — đọc trước khi chia sẻ QR
GitHub Pages là hosting website tĩnh và **không cung cấp password protection cho người xem**. Website đã xuất bản vẫn có thể truy cập công khai; đặt repository private không đồng nghĩa website Pages riêng tư. Vì vậy:
- Không đưa mật khẩu, thông tin nhạy cảm hoặc dữ liệu riêng tư thật vào mã nguồn.
- Một màn hình nhập mật khẩu viết bằng HTML/JavaScript chỉ là khóa giao diện, không bảo vệ được ảnh/video gốc.
- Nếu cần bảo vệ truy cập thực sự, nên dùng nền tảng có xác thực ở tầng máy chủ/edge (ví dụ Cloudflare Access trước một hostname được bảo vệ) và kiểm tra kỹ đường truy cập gốc `github.io` không còn là đường vòng. Với GitHub Pages tiêu chuẩn, không nên hứa hẹn điều này.
- Nếu chỉ muốn tạo một “cánh cửa bí mật” mang tính trải nghiệm sinh nhật, có thể thêm màn hình nhập mật khẩu ở giao diện, nhưng cần hiểu rằng nội dung vẫn công khai với người biết cách xem mã nguồn/tệp.

## Kiểm tra trên điện thoại trước khi gửi
- Mở URL bằng Safari (iPhone) và Chrome (Android).
- Chạm thử mọi nút, câu hỏi, puzzle, nút đóng video và nút phát nhạc.
- Trình duyệt điện thoại thường chặn autoplay âm thanh; người xem có thể cần chạm nút bật nhạc.
- Phát thử từng video qua Wi-Fi/4G; đợi tải xong nếu video lớn.
- Đi hết luồng đến Golden Treasure và xác nhận ảnh quà chỉ xuất hiện ở màn cuối.
- Sau khi URL hoạt động và đã kiểm tra xong, tạo QR từ đúng URL HTTPS đó.

## Ghi chú
Bản này giữ nguyên nội dung và asset hiện có, chỉ bổ sung các tinh chỉnh CSS ưu tiên mobile. Chưa thể xác nhận triển khai GitHub hoặc kiểm thử trên thiết bị thật từ đây.

## Màn hình nhập mật khẩu lãng mạn
- Website hiện có màn hình chào và nhập mật khẩu ở cả `index.html` lẫn `cake.html`; người xem không thể bỏ qua màn hình này bằng cách mở thẳng trang bánh.
- Mật khẩu mặc định: `bomap` (không phân biệt chữ hoa/chữ thường).
- Muốn đổi mật khẩu, mở `gate.js` và sửa giá trị `GATE_PASSWORD` ở đầu file trước khi upload.
- Sau khi nhập đúng, trạng thái mở khóa được giữ trong `sessionStorage` của tab hiện tại để chuyển qua lại giữa hai trang không phải nhập lại. Đóng tab/trình duyệt sẽ yêu cầu nhập lại.
- Đây chỉ là khóa giao diện phía trình duyệt; mật khẩu có thể đọc được trong mã nguồn và tệp ảnh/video vẫn có thể truy cập trực tiếp. Không dùng mật khẩu nhạy cảm hoặc xem đây là bảo mật thực sự.
