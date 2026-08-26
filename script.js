// Cuộn Header khi Scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Nút bấm Slider cho Phần Món Ăn Nổi Bật
const sliderWrapper = document.getElementById('sliderWrapper');
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

if (slideLeft && slideRight && sliderWrapper) {
    slideLeft.addEventListener('click', () => {
        sliderWrapper.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    slideRight.addEventListener('click', () => {
        sliderWrapper.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}

// Bật/tắt Menu Mobile (Có thể mở rộng sau nếu cần thả menu dọc)
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
    alert("Bạn có thể viết thêm logic thả thanh menu dọc ở đây cho Mobile nhé!");
});
