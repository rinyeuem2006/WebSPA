// # VD: hàm querySelector, tạo element và thêm class cho element
/**
 * Viết tắt cho document.querySelector.
 * Tìm phần tử ĐẦU TIÊN khớp với một CSS selector.
 * @param {string} selector - CSS selector để tìm kiếm (ví dụ: '#myId', '.myClass', 'button').
 * @param {Element} [parent=document] - (Tùy chọn) Phần tử cha để tìm kiếm bên trong (mặc định là toàn bộ document).
 * @returns {Element | null} Phần tử khớp đầu tiên hoặc null nếu không tìm thấy.
 */

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Viết tắt cho document.querySelectorAll.
 * Tìm TẤT CẢ phần tử khớp với một CSS selector.
 * @param {string} selector - CSS selector để tìm kiếm (ví dụ: '.nav-item', 'input[type="checkbox"]').
 * @param {Element} [parent=document] - (Tùy chọn) Phần tử cha để tìm kiếm bên trong (mặc định là toàn bộ document).
 * @returns {NodeList} Một danh sách (có thể rỗng) các phần tử khớp. Bạn có thể lặp qua nó hoặc chuyển thành Array.
 */
export function qsa(selector, parent = document) {
  return parent.querySelectorAll(selector);
}
/**
 * (Tùy chọn) Viết tắt để thêm một trình lắng nghe sự kiện.
 * @param {Element} element - Phần tử cần gắn trình lắng nghe.
 * @param {string} eventType - Loại sự kiện (ví dụ: 'click', 'change').
 * @param {Function} callback - Hàm sẽ chạy khi sự kiện xảy ra.
 */
export function on(element, eventType, callback) {
  if (element) {
    // Chỉ thêm nếu phần tử tồn tại
    element.addEventListener(eventType, callback);
  } else {
    console.warn(
      `Đã cố gắng thêm trình lắng nghe vào phần tử không tồn tại cho sự kiện: ${eventType}`
    );
  }
}
JavaScript;

// src/utils/domUtils.js

/**
 * Viết tắt cho document.querySelector.
 * Tìm phần tử ĐẦU TIÊN khớp với một CSS selector.
 * @param {string} selector - CSS selector để tìm kiếm (ví dụ: '#myId', '.myClass', 'button').
 * @param {Element} [parent=document] - (Tùy chọn) Phần tử cha để tìm kiếm bên trong (mặc định là toàn bộ document).
 * @returns {Element | null} Phần tử khớp đầu tiên hoặc null nếu không tìm thấy.
 */
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Viết tắt cho document.querySelectorAll.
 * Tìm TẤT CẢ phần tử khớp với một CSS selector.
 * @param {string} selector - CSS selector để tìm kiếm (ví dụ: '.nav-item', 'input[type="checkbox"]').
 * @param {Element} [parent=document] - (Tùy chọn) Phần tử cha để tìm kiếm bên trong (mặc định là toàn bộ document).
 * @returns {NodeList} Một danh sách (có thể rỗng) các phần tử khớp. Bạn có thể lặp qua nó hoặc chuyển thành Array.
 */
export function qsa(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

/**
 * (Tùy chọn) Viết tắt để thêm một trình lắng nghe sự kiện.
 * @param {Element} element - Phần tử cần gắn trình lắng nghe.
 * @param {string} eventType - Loại sự kiện (ví dụ: 'click', 'change').
 * @param {Function} callback - Hàm sẽ chạy khi sự kiện xảy ra.
 */
export function on(element, eventType, callback) {
  if (element) {
    // Chỉ thêm nếu phần tử tồn tại
    element.addEventListener(eventType, callback);
  } else {
    console.warn(
      `Đã cố gắng thêm trình lắng nghe vào phần tử không tồn tại cho sự kiện: ${eventType}`
    );
  }
}

/**
 * Tạo một phần tử HTML mới với các tùy chọn.
 * @param {string} tagName - Tên thẻ HTML cần tạo (ví dụ: 'div', 'button', 'a').
 * @param {object} [options={}] - Các tùy chọn để thiết lập cho phần tử.
 * @param {string} [options.className] - Các lớp CSS cách nhau bởi dấu cách.
 * @param {object} [options.attributes] - Các thuộc tính HTML khác (ví dụ: { href: '#', 'data-id': 123 }).
 * @param {string} [options.textContent] - Nội dung text bên trong phần tử.
 * @returns {Element} Phần tử HTML vừa được tạo.
 * @example
 * const myButton = create('button', { className: 'btn btn-primary', textContent: 'Click Me' });
 * const myLink = create('a', { attributes: { href: '#/home', target: '_blank' }, textContent: 'Home' });
 */
export function create(tagName, options = {}) {
  const element = document.createElement(tagName);

  // Thêm class
  if (options.className) {
    // Tách các class bằng khoảng trắng và thêm từng class một
    options.className.split(" ").forEach((cls) => {
      if (cls.trim()) {
        // Bỏ qua khoảng trắng thừa
        element.classList.add(cls.trim());
      }
    });
  }

  // Thêm attributes
  if (options.attributes) {
    for (const key in options.attributes) {
      // Đảm bảo chỉ set thuộc tính của chính object, không phải từ prototype
      if (Object.hasOwnProperty.call(options.attributes, key)) {
        element.setAttribute(key, options.attributes[key]);
      }
    }
  }

  // Thêm text content
  if (options.textContent) {
    element.textContent = options.textContent;
  }

  return element;
}
