---
title: 'Amelie Julieta'
date: '2020-09-06'
---

Este es el último trabajo (todavía en progreso) y estoy bastante orgulloso de él ❤ Estoy usando React con [Ant Design](https://ant.design/), Next.js, [Redux Toolkit](https://redux-toolkit.js.org/) y Firebase.

Julieta Amelie vende cursos sobre marketing y redes sociales. Me contactó para hacer una plataforma donde ella pudiera vender sus cursos, y sus estudiantes pudieran verlos. Algunas de las tareas técnicas requeridas fueron:

- Crear las páginas de landing, resumen del curso, usuario, etc.
- Crear la página donde el estudiante verá las lecciones, de la primera a la última.
- Conectarse a un proveedor de servicio de pago ([MercadoPago](https://mercadopago.com.ar)).
- Conectarse a la API de Vimeo.
- Desarrollar el admin donde se crean y actualizan los cursos, se manejan los usuarios, y se cambia alguna configuración.

<br>

## Landing
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-landing.mp4" type="video/mp4">
  </video>
</figure>
La parte mas aburrida, pasemos a la siguiente 😅
<br><br><br>

## Creación y edición de cursos
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-admin.mp4" type="video/mp4">
  </video>
</figure>
Para la sección donde se agrega el contenido de los cursos, quería hacer uso del espacio horizontal, así que hice la interfaz como se ve en el vídeo: Lecciones a la izquierda, lección seleccionada a la derecha. También creo que es una forma rápida y fácil de moverse entre las lecciones y editarlas.
<br><br>

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-lessons.mp4" type="video/mp4">
  </video>
</figure>

También consideré necesario reordenar fácilmente las lecciones, así que usé una librería genial llamada [React Beautiful dnd](https://github.com/atlassian/react-beautiful-dnd). Lo único que faltaba era actualizar el estado de Redux cada vez que cambia el orden de una leccion o sección, y actualizar firestore.

El admin en general es un trabajo en progreso, estoy usando todas las funciones de Next.js para intentar hacer un buen trabajo. Actualmente estoy trabajando en la seguridad.
<br><br><br>

## Uploading files
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-uploads.mp4" type="video/mp4">
  </video>
</figure>
Los archivos que se van a subir probablemente sean pesados, así que pensé que sería una buena idea mantener el estado separado de los componentes.

Con Redux Toolkit fui capaz de mantener el estado de la subida de archivos en toda la app, de forma que si te vas a cualquier otra página del admin, los archivos van a seguir subiéndose, y el estado seguirá actualizado. Como se muestra en el video, se puede ver el progreso en una barra lateral.