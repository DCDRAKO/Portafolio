document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con la clase "lista__item"
    var imagenes = document.querySelectorAll(".lista__item");

    // Obtén el div "muestra"
    var muestra = document.querySelector(".muestra__imagen");
    var muestraIframe=document.querySelector(".muestra__iframe");

    // Agrega un evento de escucha a cada elemento con la clase "lista__item"
    imagenes.forEach(function (imagen) {
        imagen.addEventListener("click", function () {
            // Obtén la URL de la imagen o iframe dentro del elemento actual
            var mediaElement = imagen.querySelector("img, iframe");
            
            if (mediaElement) {
                var mediaUrl = mediaElement.src;

                // Cambia la imagen o iframe en el div "muestra" con el elemento actual
                if (mediaElement.tagName === 'IMG') {
                    muestra.src = mediaUrl;
                    muestraIframe.src = "";
                } else if (mediaElement.tagName === 'IFRAME') {
                    muestraIframe.src = mediaUrl;         
                    muestra.src="";
                }
            }
        });
    });
});