const slider = document.getElementById('pain-level');
const resultDisplay = document.getElementById('result');

// Hàm gửi dữ liệu
function submitData() {
    const name = document.getElementById('name').value;
    const painLevel = parseFloat(slider.value).toFixed(1); // Làm tròn đến 1 chữ số thập phân
    const time = new Date().toLocaleString();

    if (!name) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    // Hiển thị kết quả
    resultDisplay.textContent = `Kết quả: ${painLevel}`;
    resultDisplay.style.color = 'green';
}