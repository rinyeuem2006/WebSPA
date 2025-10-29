import {
  getStoredItem,
  setStoredItem,
  removeStoredItem,
} from "../utils/storeUtils.js";

const USER_DATA_KEY = "userData";
/**
 * Lấy dữ liệu người dùng từ LocalStorage.
 * Nếu không có, trả về một đối tượng mặc định.
 * @returns {object} Dữ liệu người dùng
 */
export function loadUserData() {
  const data = getStoredItem(USER_DATA_KEY);
  return (
    data || {
      firstName: "Người dùng",
      lastName: "Mới",
      email: "",
      title: "Other",
      avatarUrl: "/assets/img/user-avatar-placeholder.png",
    }
  );
}
/**
 * Lưu đối tượng dữ liệu người dùng vào LocalStorage.
 * @param {object} userData - Đối tượng chứa thông tin người dùng cần lưu.
 */
export function saveUserData(userData) {
  setStoreItem(USER_DATA_KEY, userData);
}

/**
 * Xóa dữ liệu người dùng khỏi LocalStorage (cho chức năng xóa tài khoản).
 */
export function deleteUserData() {
  removeStoreItem(USER_DATA_KEY);
}

/**
 * Lấy tên đầy đủ của người dùng.
 * @returns {string} Tên đầy đủ (ví dụ: "Người dùng Mới")
 */
export function getUserFullName() {
  const user = loadUserData();
  return `${user.firstName} ${user.lastName}`;
}
/**
 * Lấy URL avatar của người dùng.
 * @returns {string} URL của ảnh avatar
 */
export function getUserAvatar() {
  return loadUserData().avatarUrl;
}
/**
 * Cập nhật một phần thông tin người dùng.
 * @param {object} partialData - Đối tượng chứa các trường cần cập nhật.
 */
export function updateUserData(partialData) {
  const currentUserData = loadUserData();

  // Trộn (merge) dữ liệu cũ với dữ liệu mới
  const newUserData = {
    ...currentUserData,
    ...partialData,
  };

  saveUserData(newUserData);
}
