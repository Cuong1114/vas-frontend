const slider = document.getElementById('pain-level');
const valueDisplay = document.querySelector('.value');
const resultDisplay = document.getElementById('result');

// Cập nhật giá trị khi kéo thanh trượt
slider.addEventListener('input', () => {
    valueDisplay.textContent = slider.value;
});

// Hàm gửi dữ liệu
function submitData() {
    const name = document.getElementById('name').value;
    const painLevel = slider.value;
    const time = new Date().toLocaleString();

    if (!name) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    // Hiển thị kết quả
    resultDisplay.textContent = `Tên: ${name}, Thời gian: ${time}, Mức độ đau: ${painLevel}`;

    // (Tùy chọn) Gửi dữ liệu lên server nếu có backend
    // fetch('/api/save-pain-level', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, time, painLevel }),
    // });
}