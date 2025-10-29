export function ProductCard(product) {
  return `
    <div class="product-card" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price.toLocaleString("vi-VN")} đ</p>
      <button class="btn-add-to-cart" data-product-id="${product.id}">
        Thêm vào giỏ
      </button>
    </div>
    `;
}
