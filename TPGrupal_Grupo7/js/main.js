document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById('btn-modo');
    const videoFondo = document.getElementById('video-fondo');
    const sourceVideo = document.getElementById('source-video');
    const videoDescripcion = document.getElementById('video-descripcion');
    const sourceDescripcion = document.getElementById('source-descripcion');

    // BOTON DE MODO OSCURO CON CAMBIO DE COLOR
    if (btnModo) {
        const currentTheme = localStorage.getItem('btn');

        if (currentTheme) {
            document.documentElement.setAttribute("data-btn", currentTheme);
            updateButtonText(currentTheme);
            actualizarVideo(currentTheme);
            actualizarVideoDescripcion(currentTheme);
        }

        function updateButtonText(theme) {
            btnModo.innerHTML = theme === "dark" ? "☀️" : "🌙";
        }

        // CAMBIAR VIDEO DE BIENVENIDA DE DIA POR EL DE NOCHE
        function actualizarVideo(theme) {
            if (!sourceVideo || !videoFondo) return;

            if (theme === "dark") {
                sourceVideo.src = "Imagenes/MuestraNoche.mp4";
            } else {
                sourceVideo.src = "Imagenes/MuestraDia.mp4";
            }

            videoFondo.load();
            videoFondo.play();
        }

        function actualizarVideoDescripcion(theme) {
            if (!sourceDescripcion || !videoDescripcion) return;

            if (theme === "dark") {
                sourceDescripcion.src = "Imagenes/DescripcionNoche.mp4";
            } else {
                sourceDescripcion.src = "Imagenes/Descripcion.mp4";
            }

            videoDescripcion.load();
            videoDescripcion.play();
        }

        // Cambiar el tema al hacer clic en el botón
        btnModo.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute("data-btn") || "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-btn", newTheme);
            localStorage.setItem("btn", newTheme);
            updateButtonText(newTheme);
            actualizarVideo(newTheme);
            actualizarVideoDescripcion(newTheme);
        });
    }

    // Mini menu desplegable :)
    const btnDatosExtra = document.getElementById('btn-datos-extra');
    const contenedorDatosExtra = document.getElementById('datos-extra-ciudad');

    if (btnDatosExtra && contenedorDatosExtra) {
        btnDatosExtra.addEventListener('click', () => {
            contenedorDatosExtra.classList.toggle('oculto');

            if (contenedorDatosExtra.classList.contains('oculto')) {
                btnDatosExtra.textContent = 'Ver más curiosidades ↓';
            } else {
                btnDatosExtra.textContent = 'Ocultar curiosidades ↑';
            }
        });
    }
});