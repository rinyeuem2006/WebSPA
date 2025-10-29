// src/utils/modalHandler.js
import { qs, qsa } from "./domUtils.js"; // Import hàm tiện ích DOM

/**
 * Khởi tạo trình xử lý đóng/mở modal.
 */
function initializeModalHandling() {
  const modalContainer = qs("#modal-container"); // Container chính cho login/signup modals
  const cartModalContainer = qs("#cart-modal-section"); // Container riêng cho cart modal (nếu có)
  const allModalContents = qsa(".modal-content"); // Tất cả nội dung modal cụ thể

  // Hàm để mở modal
  function openModal(targetId) {
    const targetModal = qs(`#${targetId}`); // Tìm modal content cụ thể
    // Xác định container cha của modal mục tiêu
    const parentContainer = targetModal?.closest(".modal-container");

    if (targetModal && parentContainer) {
      parentContainer.classList.add("active"); // Hiển thị container (overlay)
      targetModal.classList.add("active"); // Hiển thị modal content cụ thể
    } else {
      console.warn(`Modal với target ID "${targetId}" không tìm thấy.`);
    }
  }

  // Hàm để đóng tất cả modals trong một container
  function closeModal(container) {
    if (container) {
      container.classList.remove("active"); // Ẩn container (overlay)
      // Ẩn tất cả modal content bên trong container đó
      qsa(".modal-content", container).forEach((modal) => {
        modal.classList.remove("active");
      });
    }
  }

  // Lắng nghe sự kiện click trên toàn bộ body (Event Delegation)
  document.body.addEventListener("click", (event) => {
    const targetElement = event.target;

    // Tìm phần tử có data-action gần nhất (kể cả chính nó)
    const actionElement = targetElement.closest("[data-action]");

    if (!actionElement) return; // Không làm gì nếu không click vào phần tử có data-action

    const action = actionElement.dataset.action;
    const targetId = actionElement.dataset.target; // Lấy target modal ID (cho open-modal)

    if (action === "open-modal" && targetId) {
      event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
      openModal(targetId);
    } else if (action === "close-modal") {
      // Tìm container cha gần nhất của nút đóng hoặc overlay
      const parentContainer = actionElement.closest(".modal-container");
      closeModal(parentContainer);
    }
  });

  // (Tùy chọn) Đóng modal khi nhấn phím Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Đóng cả hai loại container nếu chúng đang active
      if (modalContainer?.classList.contains("active")) {
        closeModal(modalContainer);
      }
      if (cartModalContainer?.classList.contains("active")) {
        closeModal(cartModalContainer);
      }
    }
  });

  console.log("Modal handler initialized."); // Ghi log để biết script đã chạy
}

// Chạy hàm khởi tạo khi script được tải
initializeModalHandling();
