import QRCode from 'qrcode';

let remainingPages = 100;  // Số trang còn lại
const pricePer10Pages = 5000; // Giá mỗi 10 trang (VND)

// Lấy các phần tử trong HTML
const remainingPagesInput = document.getElementById('remaining-pages') as HTMLInputElement;
const pagesToBuyInput = document.getElementById('pages-to-buy') as HTMLInputElement;
const totalPriceInput = document.getElementById('total-price') as HTMLInputElement;
const warningMessage = document.getElementById('warning-message') as HTMLDivElement;
const payNowButton = document.getElementById('pay-now-btn') as HTMLButtonElement;
const paymentConfirmation = document.getElementById('payment-confirmation') as HTMLDivElement;
const paymentSuccess = document.getElementById('payment-success') as HTMLDivElement;
const qrCodeDiv = document.getElementById('qr-code') as HTMLDivElement;
const confirmationMessage = document.getElementById('confirmation-message') as HTMLParagraphElement;
const totalConfirmation = document.getElementById('total-confirmation') as HTMLParagraphElement;
const paymentMethodConfirmation = document.getElementById('payment-method-confirmation') as HTMLParagraphElement;
const pagesBoughtSpan = document.getElementById('pages-bought') as HTMLSpanElement;
const totalPaidSpan = document.getElementById('total-paid') as HTMLSpanElement;
const paymentMethodDetails = document.getElementById('payment-method-details') as HTMLSpanElement;
const totalPagesSpan = document.getElementById('total-pages') as HTMLSpanElement;

// Cập nhật tổng tiền khi người dùng nhập số trang cần mua
function updateTotalPrice() {
  const pagesToBuy = parseInt(pagesToBuyInput.value);
  if (pagesToBuy % 10 === 0) {
    warningMessage.textContent = '';  // Xóa cảnh báo
    const totalPrice = (pagesToBuy / 10) * pricePer10Pages;
    totalPriceInput.value = `${totalPrice} VND`;
  } else {
    warningMessage.textContent = 'Số trang phải là bội số của 10';
  }
}

// Khi nhấn nút thanh toán
payNowButton.addEventListener('click', () => {
  const pagesToBuy = parseInt(pagesToBuyInput.value);
  if (pagesToBuy % 10 === 0) {
    // Hiển thị trang xác nhận thanh toán
    paymentConfirmation.classList.remove('hidden');
    confirmationMessage.textContent = `Bạn mua thêm ${pagesToBuy} trang A4`;
    totalConfirmation.textContent = `Tổng tiền: ${(pagesToBuy / 10) * pricePer10Pages} VND`;
    paymentMethodConfirmation.textContent = 'Phương thức thanh toán: BKPay';
    
    // Tạo mã QR
    QRCode.toCanvas(qrCodeDiv, 'Thanh toán ' + (pagesToBuy / 10) * pricePer10Pages + ' VND', function (error) {
      if (error) console.error(error);
      console.log('QR code created!');
    });
  } else {
    warningMessage.textContent = 'Số trang phải là bội số của 10';
  }
});

// Sau khi quét mã QR
qrCodeDiv.addEventListener('click', () => {
  // Hiển thị trang thanh toán thành công
  const pagesToBuy = parseInt(pagesToBuyInput.value);
  const totalPrice = (pagesToBuy / 10) * pricePer10Pages;

  paymentSuccess.classList.remove('hidden');
  pagesBoughtSpan.textContent = pagesToBuy.toString();
  totalPaidSpan.textContent = `${totalPrice} VND`;
  paymentMethodDetails.textContent = 'BKPay';
  totalPagesSpan.textContent = (remainingPages + pagesToBuy).toString();
});

pagesToBuyInput.addEventListener('input', updateTotalPrice);

// Ban đầu hiển thị số trang còn lại
remainingPagesInput.value = remainingPages.toString();