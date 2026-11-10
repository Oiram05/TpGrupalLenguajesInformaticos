document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById('btn-modo');
    const videoFondo = document.getElementById('video-fondo');
    const sourceVideo = document.getElementById('source-video');
    
    if (!btnModo) return;

    const currentTheme = localStorage.getItem('btn');
    
    if (currentTheme) {
        document.documentElement.setAttribute("data-btn", currentTheme);
        updateButtonText(currentTheme);
        actualizarVideo(currentTheme); // Actualiza el video al cargar según la memoria
    }

    function updateButtonText(theme) {
        btnModo.innerHTML = theme === "dark" ? "☀️" : "🌙";
    }


    // CAMBIAR VIDEO DE BIENVENIDA DE DIA POR EL DE NOCHE
    function actualizarVideo(theme) {
        if (!sourceVideo || !videoFondo) return;

        if (theme === "dark") {
            sourceVideo.src = "Imagenes/MuestraNoche.mp4"; // Reemplaza con la ruta de tu video de noche
            sourceVideo.src = ""
        } else {
            sourceVideo.src = "Imagenes/MuestraDia.mp4"; // Tu video de día original
        }
        
        //recargo el video para que el navegador reproduzca el nuevo archivo
        videoFondo.load();
        videoFondo.play();
    }

    btnModo.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute("data-btn") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-btn", newTheme);
        localStorage.setItem("btn", newTheme);
        updateButtonText(newTheme);
        actualizarVideo(newTheme); // Llama a la función al hacer clic
    });
});