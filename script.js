

const typingText = "Sayangg, aku minta maaf sudaa bikin kamu bete, marah dan kesal sama aku. akuu tauu aku salah aku minta maf yaa sayang kuu. Semoga habis liat website ini hati mu langsung luluh dan maafin akuu. hehehehe sorry yaa sayangg";
const textArea = document.getElementById('typing-text-area');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const resultArea = document.getElementById('happy-result');
const buttonArea = document.getElementById('button-area');
const cryingCharArea = document.getElementById('crying-char-area');

// 1. Fungsi Efek Mengetik
let i = 0;
function typeWriter() {
    if (i < typingText.length) {
        textArea.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 60); // Kecepatan mengetik
    } else {
        buttonArea.style.display = 'flex'; // Tampilkan tombol setelah teks selesai
        buttonArea.style.justifyContent = 'center';
    }
}

// 2. Logika Tombol 'Tidak Mau Maafin' (Kabur-Kaburan)
noButton.addEventListener('mouseover', function() {
    // Tombol akan kabur jika kursor mendekat
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Posisi acak baru, memastikan tombol tidak keluar dari viewport
    const newX = Math.floor(Math.random() * (containerWidth - 200)); 
    const newY = Math.floor(Math.random() * (containerHeight - 150)); 
    
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
    noButton.textContent = "❌ Tidak Mau Maafin"; 
    noButton.style.zIndex = 999; // Pastikan tombol selalu di atas
});

// Reset posisi tombol jika diklik (meskipun sulit)
noButton.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default
    alert("Kamu tidak bisa menekan tombol ini! Coba lagi tombol satunya. 😉");
});

// 3. Logika Tombol 'Maafin' (Sukses)
yesButton.addEventListener('click', function() {
    // Sembunyikan semua elemen awal
    cryingCharArea.style.display = 'none';
    textArea.style.display = 'none';
    buttonArea.style.display = 'none';
    document.getElementById('container').style.boxShadow = 'none';
    document.body.style.backgroundColor = '#d1c4e9'; // Ganti latar belakang

    // Tampilkan hasil akhir
    resultArea.style.display = 'flex'; 
});

// Mulai mengetik saat halaman dimuat
document.addEventListener('DOMContentLoaded', typeWriter);