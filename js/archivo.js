 document.addEventListener('DOMContentLoaded', function() {
     const imagenes = ['img/meme2.jpg', 'img/meme3.jpg', 'img/meme4.png', 'img/meme5.jpg', 'img/meme6.jpg'];
     let imgActual = 0;

     function agregarBoton() {
         const botonCambiarImg = document.createElement('button');
         botonCambiarImg.innerHTML = 'Ver meme nuevo';

         botonCambiarImg.addEventListener('click', function() {
             cambiarImagen();
         });

         const contenedorImagen = document.getElementById('contenedorImagen');
         contenedorImagen.appendChild(botonCambiarImg);
     }

     agregarBoton();

     function cambiarImagen() {
         let miImagen = document.getElementById('miImagen');

         imgActual = (imgActual + 1) % imagenes.length;

         miImagen.src = imagenes[imgActual];
     }
 });


