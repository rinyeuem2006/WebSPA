import { formatCurrency } from "../../../utils/formatUtils.js";
import { qs, qsa } from "../../../utils/domUtils.js";
import {
  loadUserData,
  saveUserData,
  deleteUserData,
} from "../../../services/UserService.js";
const USER_DATA_KEY = "userData";

// --- Hàm render Sidebar ---
function renderSidebar(activeHash) {
  return `
        <aside class="profile-sidebar">
            <nav>
                <div class="sidebar-section">
                    <h4 class="section-title">Chung</h4>
                    <ul>
                        <li class="${
                          activeHash === "#/profile" ? "active" : ""
                        }">
                           <a href="#/profile"><i class="ri-user-line"></i> Chi tiết tài khoản</a>
                        </li>
                        <li class="${
                          activeHash === "#/profile/billing" ? "active" : ""
                        }">
                           <a href="#/profile/billing"><i class="ri-bill-line"></i> Thanh toán</a>
                        </li>
                        <li class="${
                          activeHash === "#/profile/subscriptions"
                            ? "active"
                            : ""
                        }">
                           <a href="#/profile/subscriptions"><i class="ri-vip-crown-line"></i> Gói đăng ký <span class="badge pro">Pro</span></a>
                        </li>
                    </ul>
                </div>
                <div class="sidebar-section">
                     <h4 class="section-title">Khác</h4>
                     <ul>
                        <li class="${
                          activeHash === "#/profile/collections" ? "active" : ""
                        }">
                           <a href="#/profile/collections"><i class="ri-gallery-line"></i> Bộ sưu tập</a>
                        </li>
                        <li class="${
                          activeHash === "#/profile/downloads" ? "active" : ""
                        }">
                           <a href="#/profile/downloads"><i class="ri-download-2-line"></i> Đã tải xuống</a>
                        </li>
                        <li class="${
                          activeHash === "#/profile/referrals" ? "active" : ""
                        }">
                           <a href="#/profile/referrals"><i class="ri-share-line"></i> Giới thiệu <span class="badge beta">Beta</span></a>
                        </li>
                     </ul>
                </div>
            </nav>
        </aside>
    `;
}

function renderBillingsContent() {
  /* Nội dung Thanh toán */
}
function renderSubscriptionsContent() {
  /* Nội dung Gói đăng ký */
}
function renderCollectionsContent() {
  /* Nội dung Bộ sưu tập */
}
function renderDownloadsContent() {
  /* Nội dung Đã tải xuống */
}
function renderReferralsContent() {
  /* Nội dung Giới thiệu */
}
function renderChangePasswordForm() {
  /* Form đổi mật khẩu */
}

// --- Hàm render nội dung chính dựa vào Hash ---
function renderProfileContent() {
  const contentContainer = qs(".profile-content");
  if (!contentContainer) return;
  const hash = window.location.hash || "#/profile";
  const sidebarContainer = qs(".profile-sidebar");
  if (sidebarContainer) {
    sidebarContainer.outerHTML = renderSidebar(hash); // Render lại sidebar để cập nhật 'active'
  }

  let contentHtml = "";
  switch (hash) {
    case "#/profile/billing":
      contentHtml = renderBillingsContent();
      break;
    case "#/profile/subscriptions":
      contentHtml = renderSubscriptionsContent();
      break;
    case "#/profile/collections":
      contentHtml = renderCollectionsContent();
      break;
    case "#/profile/downloads":
      contentHtml = renderDownloadsContent();
      break;
    case "#/profile/referrals":
      contentHtml = renderReferralsContent();
      break;
    case "#/profile/change-password":
      contentHtml = renderChangePasswordForm();
      break;
    case "#/profile":
    default:
      contentHtml = renderAccountDetailsForm();
      break;
  }
  contentContainer.innerHTML = contentHtml;
  addFormEventListeners(); // Gắn lại sự kiện cho nội dung mới
}

// --- Hàm gắn sự kiện cho Form và các nút ---
function addFormEventListeners() {
  const accountForm = qs("#account-details-form");
  if (accountForm) {
    accountForm.addEventListener("submit", handleUpdateProfile);
  }
  const deleteBtn = qs(".btn-delete-account");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", handleDeleteAccount);
  }
  // Thêm listener cho form đổi mật khẩu nếu cần
  const passwordForm = qs("#change-password-form");
  if (passwordForm) {
    passwordForm.addEventListener("submit", handleChangePassword);
  }
}

// --- Hàm xử lý cập nhật Profile ---
function handleUpdateProfile(event) {
  event.preventDefault();
  const messageDiv = qs("#profile-update-message");
  try {
    const updatedData = {
      firstName: qs("#first-name").value,
      lastName: qs("#last-name").value,
      email: qs("#email-address").value,
      title: qs("#title-select").value,
      avatarUrl: loadUserData().avatarUrl, // Giữ avatar cũ, xử lý upload riêng
    };
    saveUserData(updatedData); // Lưu vào LocalStorage qua storeUtils
    messageDiv.textContent = "Cập nhật thông tin thành công!";
    messageDiv.className = "form-message success";
  } catch (error) {
    messageDiv.textContent = "Có lỗi xảy ra khi cập nhật!";
    messageDiv.className = "form-message error";
    console.error("Lỗi cập nhật profile:", error);
  }
}

// --- Hàm xử lý xóa tài khoản ---
function handleDeleteAccount() {
  if (
    confirm(
      "Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác."
    )
  ) {
    removeStoreItem(USER_DATA_KEY); // Xóa khỏi LocalStorage qua storeUtils
    alert("Tài khoản đã được xóa.");
    window.location.hash = "#/home"; // Chuyển về trang chủ
  }
}

// --- Hàm xử lý đổi mật khẩu ---
function handleChangePassword(event) {
  event.preventDefault();
  console.log("Xử lý đổi mật khẩu...");
  // Lấy mật khẩu cũ, mới, xác nhận
  // Kiểm tra tính hợp lệ
  // (Lưu ý: Không lưu mật khẩu vào LocalStorage)
  // Hiển thị thông báo
}

// --- Hàm gắn sự kiện cho Sidebar (chỉ chạy 1 lần) ---
function addSidebarEventListeners() {
  window.addEventListener("hashchange", renderProfileContent);
}

// --- Hàm chính được Router gọi ---
export function ProfilePage() {
  const initialHash = window.location.hash || "#/profile";
  // Render layout ban đầu
  const layoutHtml = `
        <div class="profile-page-layout">
            ${renderSidebar(initialHash)}
            <section class="profile-content"></section>
        </div>
    `;
  qs("#app").innerHTML = layoutHtml;

  // Render nội dung đầu tiên
  renderProfileContent();

  // Gắn listener hashchange nếu chưa có
  if (!window.profileSidebarListenersAttached) {
    addSidebarEventListeners();
    window.profileSidebarListenersAttached = true;
  }
}
