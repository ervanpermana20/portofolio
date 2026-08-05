// EDIT: TANGGAL ACUAN AWAL BELAJAR (FORMAT: YYYY-MM-DD)
const START_DATE = "2026-08-01";

document.addEventListener("DOMContentLoaded", () => {
    initLearningCounter();
    initScrollAnimations();
});

// 1. HITUNG HARI BELAJAR OTOMATIS
function initLearningCounter() {
    const counterElement = document.getElementById("learningCounter");
    if (!counterElement) return;

    const startDate = new Date(START_DATE);
    const today = new Date();

    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    counterElement.innerHTML = `<span>⚡ Aktif Belajar: <strong>${diffDays} Hari</strong> (Sejak 1 Ags 2026)</span>`;
}

// 2. LOGIKA TAB UNTUK CATATAN
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// FUNGSI UNTUK MENGAKSES TAB DARI KOTAK NAVIGASI ATAS
function openTabDirect(tabName) {
    const targetBtn = document.getElementById("btn-" + tabName);
    if (targetBtn) {
        targetBtn.click();
    }
}

// 3. LOGIKA ACCORDION FAQ
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
}

// 4. ANIMASI MUNCUL SAAT DI-SCROLL
function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach((reveal) => {
        observer.observe(reveal);
    });
}