export function ContactPage() {
  return `
    <div class="content-box contact-page"> 
      <h2>Liên hệ với Xtray</h2>
      <p>
        Chúng tôi luôn sẵn lòng lắng nghe ý kiến đóng góp và giải đáp mọi thắc mắc của bạn. 
        Vui lòng liên hệ với chúng tôi qua thông tin dưới đây hoặc sử dụng biểu mẫu liên hệ.
      </p>

      <div class="contact-info">
        <h3>Thông tin liên hệ</h3>
        <p>
          <i class="ri-map-pin-line"></i> 
          <strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, TP. HCM
        </p>
        <p>
          <i class="ri-phone-line"></i> 
          <strong>Điện thoại:</strong> 1900 1234
        </p>
        <p>
          <i class="ri-mail-line"></i> 
          <strong>Email:</strong> xtray@gmail.com
        </p>
        <p>
          <i class="ri-time-line"></i> 
          <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 7, 8:00 - 18:00
        </p>
      </div>

      <div class="contact-form-container">
        <h3>Gửi tin nhắn cho chúng tôi</h3>
        <form id="contact-form" class="contact-form">
          <div class="form-group">
            <label for="contact-name">Họ và tên:</label>
            <input type="text" id="contact-name" name="name" required>
          </div>
          <div class="form-group">
            <label for="contact-email">Email:</label>
            <input type="email" id="contact-email" name="email" required>
          </div>
          <div class="form-group">
            <label for="contact-subject">Tiêu đề:</label>
            <input type="text" id="contact-subject" name="subject">
          </div>
          <div class="form-group">
            <label for="contact-message">Nội dung:</label>
            <textarea id="contact-message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Gửi tin nhắn</button>
        </form>
        <div id="form-message" class="form-message" style="margin-top: 15px;"></div> 
      </div>
      
      </div>
  `;
}
