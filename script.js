const slider = document.getElementById('pain-level');

async function submitData() {
    const name = document.getElementById('name').value;
    const painLevel = parseFloat(slider.value).toFixed(1); // Làm tròn đến 1 chữ số thập phân

    if (!name) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    // Hiển thị pop-up
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.innerHTML = `
        Cảm ơn bạn <strong>${name}</strong> đã tham gia đánh giá!<br>
        Mức độ đau của bạn là <strong>${painLevel}</strong>.<br>
        Hãy chăm sóc bản thân thật tốt và luôn vui khỏe nhé! 🌟
    `;
    popup.style.display = 'flex';

    // Đóng pop-up khi nhấn nút đóng hoặc nút OK và làm mới trang web
    document.getElementById('popup-close').onclick = () => {
        popup.style.display = 'none';
        location.reload(); // Làm mới trang web
    };

    document.getElementById('popup-ok').onclick = () => {
        popup.style.display = 'none';
        location.reload(); // Làm mới trang web
    };

    // Gửi dữ liệu đến Google Sheets
    const url = 'https://script.google.com/macros/s/AKfycby2Ku0jpN_C3NTeRAqKfVvl_mI2xKVIBuIlln0E0cy9JKXFX5EU6Y9hH8rKP89nr_127g/exec';
    const data = {
        name: name,
        painLevel: parseFloat(painLevel) // Đảm bảo là số
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
