document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const musicToggleBtn = document.getElementById('musicToggle');
    const coverScreen = document.getElementById('coverScreen');
    const openButton = document.getElementById('openButton');
    const mainContent = document.getElementById('mainContent');
    let isPlaying = false;

    // Fungsi untuk memutar musik
    function playMusic() {
        music.play()
            .then(() => {
                isPlaying = true;
                musicToggleBtn.innerHTML = '&#9208;'; // Ikon Pause
            })
            .catch(error => {
                // Autoplay diblokir
                console.log("Autoplay diblokir: " + error);
                isPlaying = false;
                musicToggleBtn.innerHTML = '&#9835;'; // Ikon Play
            });
    }

    // Event listener saat tombol "Buka Undangan" diklik
    openButton.addEventListener('click', function() {
        // 1. Sembunyikan layar cover
        coverScreen.style.display = 'none';
        
        // 2. Tampilkan konten utama
        mainContent.style.display = 'block';
        
        // 3. Tampilkan tombol musik
        musicToggleBtn.classList.add('visible');

        // 4. Putar musik (otomatis setelah klik interaksi)
        playMusic();
    });
    
    // Fungsi untuk toggle musik
    musicToggleBtn.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicToggleBtn.innerHTML = '&#9835;'; // Ikon Play
        } else {
            music.play();
            musicToggleBtn.innerHTML = '&#9208;'; // Ikon Pause
        }
        isPlaying = !isPlaying;
    });
});