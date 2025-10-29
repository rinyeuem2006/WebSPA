/**
 * Định dạng một số thành chuỗi tiền tệ Việt Nam Đồng (VNĐ).
 * Ví dụ: 1000000 => "1.000.000đ"
 * @param {number} number - Số tiền cần định dạng.
 * @param {string} [currencySymbol='đ'] - Ký hiệu tiền tệ (mặc định là 'đ').
 * @returns {string} Chuỗi tiền tệ đã được định dạng.
 */
export function formatCurrency(number, currencySymbol = "đ") {
  //kiem tra
  if (isNaN(number) || number == null) {
    console.warn("Giá trị không hợp lệ để định dạng tiền tệ:", number);
    return "0" + currencySymbol; // co the tra ve chuoi rong
  }
  // lam tron so nguyen
  const numStr = Math.round(number).toString();

  // them dau phan cach hang nghin

  const formattedNumber = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // tra ket qua
  return formattedNumber + currencySymbol;
}

/**
 * (Ví dụ) Định dạng ngày tháng thành chuỗi DD/MM/YYYY.
 * @param {Date | string | number} dateInput - Đầu vào có thể là Date object, timestamp, hoặc chuỗi ngày tháng hợp lệ.
 * @returns {string} Chuỗi ngày tháng dạng DD/MM/YYYY hoặc chuỗi rỗng nếu lỗi.
 */

export function formatDate(dateInput) {
  try {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("formatDate: Invalid date input:", dateInput, error);
    return "";
  }
}
