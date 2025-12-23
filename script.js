document.addEventListener("mousemove", (e) => {
    // Lấy vị trí chuột
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Duyệt qua tất cả các lớp ảnh
    document.querySelectorAll(".layer").forEach(layer => {
        // Lấy tốc độ gán ở HTML
        let speed = layer.getAttribute("data-speed");

        // Tính toán khoảng cách di chuyển (tâm màn hình là gốc 0)
        // Chia cho 100 để giảm biên độ di chuyển
        let x = (window.innerWidth / 2 - mouseX) * speed / 100;
        let y = (window.innerHeight / 2 - mouseY) * speed / 100;

        // Cập nhật vị trí bằng Transform để tối ưu hiệu năng (GPU)
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});