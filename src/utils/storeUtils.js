/**
 * Lấy một mục từ LocalStorage và parse JSON.
 * @param {string} key - Khóa của mục cần lấy.
 * @returns {any | null} Giá trị đã được parse hoặc null nếu không tìm thấy hoặc lỗi parse.
 */

export function getStoredItem(key) {
  try {
    const item = localStorage.getItem(key);

    if (item == null || item === "undefined") {
      return null;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error(`Lỗi khi lấy mục từ LocalStorage với khóa "${key}":`, error);
    return null;
  }
}
/**
 * Lưu một mục vào LocalStorage (tự động chuyển thành JSON string).
 * @param {string} key - Khóa của mục cần lưu.
 * @param {any} value - Giá trị cần lưu (có thể là object, array, string, number...).
 */

export function setStoredItem(key, value) {
  try {
    //chuyen doi thanh chuoi json
    const stringifiedValue = JSON.stringify(value);
    //luu vao localStorage
    localStorage.setItem(key, stringifiedValue);
  } catch (error) {
    console.error(`Lỗi khi lưu mục vào LocalStorage với khóa "${key}":`, error);
  }
}
/**
 * Xóa một mục khỏi LocalStorage.
 * @param {string} key - Khóa của mục cần xóa.
 */

export function removeStoredItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Lỗi khi xóa mục khỏi LocalStorage với khóa "${key}":`,
      error
    );
  }
}
// Hủy diệt
export function clearStoredItems() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Lỗi khi xóa tất cả mục khỏi LocalStorage:", error);
  }
}
