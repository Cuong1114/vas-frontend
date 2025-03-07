const slider = document.getElementById('pain-level');
const resultDisplay = document.getElementById('result');

async function submitData() {
    const name = document.getElementById('name').value;
    const painLevel = parseFloat(slider.value).toFixed(1); // Làm tròn đến 1 chữ số thập phân

    if (!name) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    // Hiển thị kết quả
    resultDisplay.innerHTML = `
        Cảm ơn bạn <strong>${name}</strong> đã tham gia đánh giá!<br>
        Mức độ đau của bạn là <strong>${painLevel}</strong>.<br>
        Hãy chăm sóc bản thân thật tốt và luôn vui khỏe nhé! 🌟
    `;
    resultDisplay.style.color = 'green';

    // Gửi dữ liệu đến Google Sheets
    const url = 'https://script.google.com/macros/s/AKfycby2Ku0jpN_C3NTeRAqKfVvl_mI2xKVIBuIlln0E0cy9JKXFX5EU6Y9hH8rKP89nr_127g/exec';
    const data = {
        name: name,
        painLevel: painLevel
    };

    console.log('Dữ liệu gửi đi:', data);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors' // Thêm dòng này
        });

        console.log('Dữ liệu đã được gửi đi!');
    } catch (error) {
        console.error('Lỗi:', error);
    }
}