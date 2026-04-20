<img width="946" height="2047" alt="23810310258_08_order" src="https://github.com/user-attachments/assets/f210f750-d5f4-4ff4-8aeb-f7d107ddba80" />
## Thông tin sinh viên
Nguyễn Xuân Đạo - 23810310258

## Mô tả chức năng

Ứng dụng thương mại điện tử được xây dựng bằng React Native với các tính năng chính:

###  Authentication & Storage
- Đăng nhập với AsyncStorage để lưu trữ token và thông tin user
- Tự động đăng xuất sau 30 giây không hoạt động
- Lưu trữ persistent cho giỏ hàng và đơn hàng

###  Giỏ hàng & Đặt hàng
- Thêm/xóa sản phẩm vào giỏ hàng
- Lưu giỏ hàng vào AsyncStorage
- Quy trình checkout và xác nhận đơn hàng
- Lịch sử đơn hàng

###  Tài khoản người dùng
- Màn hình profile với thông tin cá nhân
- Điều hướng bottom menu
- Đăng xuất

###  Giao diện
- UI/UX hiện đại với các popup và modal
- Responsive design
- Icons và hình ảnh minh họa

## Hướng dẫn chạy app

### Yêu cầu hệ thống
- Node.js >= 14
- npm hoặc yarn
- Expo CLI
- Android Studio (cho Android) hoặc Xcode (cho iOS)

### Cài đặt và chạy

1. **Clone repository:**
   ```bash
   git clone https://github.com/dao05/bth20-04-26.git
   cd bth20-04-26
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy app:**
   ```bash
   npm start
   # hoặc
   npx expo start
   ```

4. **Chạy trên thiết bị:**
   - Quét QR code bằng Expo Go app trên điện thoại
   - Hoặc chạy trên simulator/emulator

### Các tính năng chính
- Đăng nhập → Màn hình chính với sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Checkout → Xác nhận đơn hàng
- Xem lịch sử đơn hàng trong Account
- Tự động đăng xuất sau 30 giây không hoạt động

## Ảnh Demo
<img width="946" height="2047" alt="23810310258_01_login" src="https://github.com/user-attachments/assets/4aa84cf6-8e2d-4dd6-afe3-ceaf1e24839c" />
<img width="946" height="2047" alt="23810310258_02_autologin" src="https://github.com/user-attachments/assets/25db7ca0-b207-43bb-80b9-0df16780b4e6" />
<img width="946" height="2047" alt="23810310258_03_logout" src="https://github.com/user-attachments/assets/92bfb0ae-1b02-40e7-b9c8-8b3687b5f3d7" />
<img width="946" height="2047" alt="23810310258_04_addtocart" src="https://github.com/user-attachments/assets/98ee02d4-bdc1-4b59-bc5f-2ebdec7c23cf" />
<img width="946" height="2047" alt="23810310258_05_reloadcart" src="https://github.com/user-attachments/assets/d53c0ce6-9b1f-43b6-b1fa-99080b31f288" />
<img width="946" height="2047" alt="23810310258_06_addquantity" src="https://github.com/user-attachments/assets/60d76089-4cee-441e-9a30-ee87b3099302" />
<img width="946" height="2047" alt="23810310258_07_succes" src="https://github.com/user-attachments/assets/b7fa78ee-2f0f-45d6-8d92-784b856d63f2" />
<img width="946" height="2047" alt="23810310258_08_order" src="https://github.com/user-attachments/assets/5b959c00-89e0-4d1d-a4d5-4ff5e472adcc" />
<img width="946" height="2047" alt="23810310258_09_reloadorder" src="https://github.com/user-attachments/assets/e2188b70-1b19-40ee-9325-6353c3d378f1" />

Video demo:
https://github.com/user-attachments/assets/cfc4f92b-0f40-458a-afda-6ef7ab78184f





