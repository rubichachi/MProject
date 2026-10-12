document.addEventListener('DOMContentLoaded', function(){
    
    // Lista única de tus archivos de imagen. 
    // ¡Añadir una nueva imagen aquí o cambiar su nombre actualizará la web automáticamente!
    const archivosImágenes = [
        "Collserola Canvas 1.jpg",
        "Collserola Canvas 2.jpg",
        "Collserola Canvas 3.jpg",
        "Collserola Canvas 4.jpg",
        "Collserola Canvas 5.jpg",
        "Decentralizing Banksy 1.jpg",
        "Hand in Hand 1.jpg",
        "Peiskos 1.jpg",
        "Peiskos 2.gif",
        "Peiskos 3.jpg",
        "Peiskos 4.jpg",
        "Peiskos 5.jpg",
        "R-C Chair 1.jpg",
        "R-C Chair 2.jpg",       
        "R-C Chair 3.jpg",       
        "R-C Chair 4.jpg",       
        "R-C Chair 5.jpg",       
        "R-C Chair 6.jpg",       
        "R-C Chair 7.jpg",       
        "River's voice 1.jpg",
        "River's voice 2.jpg",
        "River's voice 3.jpg",
        "Sea duality 1.jpg",
        "Sea duality 2.jpg",
        "Sea duality 3.jpg",
        "Sea duality 4.jpg",
        "Sea duality 5.jpg",
        "Senseless 1.jpg",
        "Senseless 2.jpg",
        "Senseless 3.jpg",
        "Senseless 4.jpg",
        "Senseless 5.jpg",
        "Senseless 6.jpg",
        "Senseless 7.jpg",
        "Swell 1.jpg",
        "Swell 2.jpg",
        "Swell 3.jpeg",
        "Swell 4.jpg",
        "The Textile Ecoliving 1.jpg",
        "The Textile Ecoliving 2.jpg",
        "The Textile Ecoliving 3.gif",
        "The Textile Ecoliving 3.jpg",
        "The Textile Ecoliving 4.jpg",
        "The Textile Ecoliving 5.jpg",
        "The Textile Ecoliving 6.jpg",
        "The Textile Ecoliving 7.jpg",
        "The Textile Ecoliving 8.jpg",
        "The Textile Ecoliving 9.jpg",
        "The Textile Ecoliving 10.jpg",
        "The Textile Ecoliving 11.jpg",
        "The Textile Ecoliving 12.jpg",
        "The Textile Ecoliving 13.gif",
        "The Textile Ecoliving 14.jpg",
        "The Textile Ecoliving 15.jpg",
        "The Textile Ecoliving 16.jpg",
        "The Textile Ecoliving 17.gif",
        "Threshold Connections 1.jpg",
        "Threshold Connections 2.jpg",
        "Threshold Connections 3.jpg",
        "Timelines 1.jpg",
        "Timelines 2.jpg",
        "Timelines 3.jpg",
        "Timelines 4.jpg",
        "Timelines 5.jpg",
        "Timelines 6.jpg",
        "Timelines 7.jpg",
        "Timelines 8.jpg",
        "Timelines 9.jpg",
        "Timelines 10.jpg",
        "Timelines 11.jpg",
        "Walking the Void 1.jpg",
        "Walking the Void 2.jpg",
        "Walking the Void 3.jpg",
        "Walking the Void 4.jpg",
        "Walking the Void 5.jpg",
        "Walking the Void 6.jpg",
        "Walking the Void 7.jpg",
        "Walking the Void 8.jpg",
        "Walking the Void 9.JPG",
        "Walking the Void 10.JPG",
        "Walking the Void 11.JPG",
        "Walking the Void 12.JPG"
    ];

    // Función inteligente que extrae el nombre del proyecto automáticamente del archivo.
    // Ejemplo: "Collserola Canvas 3.jpg" -> "Collserola Canvas"
    function extraerNombreProyecto(nombreArchivo) {
        // Elimina la extensión (.jpg, .png, .gif, etc.) y los números/espacios finales
        let sinExtension = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('.')) || nombreArchivo;
        return sinExtension.replace(/\s+\d+$/, '').trim();
    }

    // Construimos los arrays de datos automáticamente a partir de los nombres de archivo
    let imagenes = archivosImágenes.map(archivo => ({
        img: `images/Archive/${archivo}`
    }));

    let nameimg = archivosImágenes.map(archivo => extraerNombreProyecto(archivo));

    // --- Renderizado dinámico de la galería en el HTML ---
    const masonryContainer = document.querySelector('.masonry-container');
    let htmlContent = '';

    imagenes.forEach((item, index) => {
        htmlContent += `
            <figure class="masonry-item">
                <img src="${item.img}" alt="${nameimg[index]}" data-img-mostrar="${index}"/>
            </figure>
        `;
    });

    masonryContainer.innerHTML = htmlContent;
    // ----------------------------------------------------

    let contador = 0;
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const img_slideshow = document.querySelector('.slideshow img');
        
    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target;
            
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img;
                contador--;
            } else {
                img.src = imagenes[imagenes.length - 1].img;
                contador = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img;
                contador++;
            } else {
                img.src = imagenes[0].img;
                contador = 0;
            }
        }
        document.getElementById("nameslideshow").innerHTML = nameimg[contador];
    });

    // Activación de clics en las imágenes de la galería generada
    document.querySelectorAll('.masonry-container img').forEach(img =>{
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar;
            img_slideshow.src = imagenes[imagen_seleccionada].img;
            contador = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
            document.getElementById("nameslideshow").innerHTML = nameimg[imagen_seleccionada];
        });
    });

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    });
});

// Comportamiento del scroll de la cabecera
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('hero').style.top = '0';
    } else {
        document.getElementById('hero').style.top = '-200px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
};
