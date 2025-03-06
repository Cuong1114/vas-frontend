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

    // Hiển thị kết quả thành 3 dòng
    resultDisplay.innerHTML = `
        Cảm ơn bạn <strong>${name}</strong> đã tham gia đánh giá!<br>
        Mức độ đau của bạn là <strong>${painLevel}</strong>.<br>
        Hãy chăm sóc bản thân thật tốt và luôn vui khỏe nhé! 🌟
    `;
    resultDisplay.style.color = 'green';
}