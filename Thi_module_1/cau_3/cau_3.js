class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTen, cmnd, ngayMo, soTien) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.cmnd = cmnd;
        this.ngayMo = ngayMo;
        this.soTien = soTien;
    }
}
let danhSach = [];

function themSoTietKiem() {
    const maSo = document.getElementById('maSo').value.trim();
    const loaiTietKiem = document.getElementById('loaiTietKiem').value.trim();
    const hoTen = document.getElementById('hoTen').value.trim();
    const cmnd = document.getElementById('cmnd').value.trim();
    const ngayMo = document.getElementById('ngayMo').value.trim();
    const soTien = document.getElementById('soTien').value.trim();
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = "";

    if (maSo === "" || maSo.length > 5) {
        errorDiv.innerText = "Mã sổ không hợp lệ (tối đa 5 ký tự)";
        return;
    }
    if (loaiTietKiem === "" || loaiTietKiem.length > 10) {
        errorDiv.innerText = "Loại tiết kiệm không hợp lệ (tối đa 10 ký tự)";
        return;
    }

    if (hoTen === "" || hoTen.length > 30) {
        errorDiv.innerText = "Họ tên không hợp lệ (tối đa 30 ký tự)";
        return;
    }
    if (isNaN(cmnd) || cmnd.length < 5) {
        errorDiv.innerText = "CMND không hợp lệ";
        return;
    }
    if (ngayMo === "") {
        errorDiv.innerText = "Ngày mở không hợp lệ";
        return;
    }
    if (isNaN(soTien) || soTien <= 0) {
        errorDiv.innerText = "Số tiền không hợp lệ";
        return;
    }
}