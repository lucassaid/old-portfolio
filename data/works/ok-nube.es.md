---
title: 'Mi trabajo en OkNube'
date: '2020-09-06'
---

En OkNube trabajamos para hacer que sea fácil para todos vender en internet. Nuestro objetivo es poner un "marketplace" en algunas ciudades, y permitir que las tiendas vendan sus productos.

En este tiempo trabajando en el proyecto aprendí muchísimo y crecí como desarrollador. Acá muestro un poco de lo que hicimos y hacemos:

<br>

## Tienda Online
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-store.mp4" type="video/mp4">
  </video>
</figure>

Algunas herramientas usadas: [LitELement](https://lit-element.polymer-project.org/), Redux, Firebase, Node

LitElement fue una genial herramienta para hacer este frontend gracias a su fácil uso y su integración con Redux. El uso de Redux con mi amada librería [reselect](https://github.com/reduxjs/reselect) fué un salvavidas porque hizo bastante fácil manejar lógica compleja (como seleccionar opciones de un producto variable) con código legible, performante y mantenible. Como se muestra en el vídeo, el usuario puede elegir el color y el material del producto, y ver los cambios en el precio y el stock. También puede ver qué versión del producto está sin stock.

En otros puntos de la app usé [re-reselect](https://github.com/toomuchdesign/re-reselect) para reutilizar la lógica de algunos selectores. También hice algunos trabajos en el backend con Express y Socket.io.

<br>

## Aplicación de Pagos

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-purchase.mp4" type="video/mp4">
  </video>
</figure>

Otra vez, LitElement y Redux hicieron fácil la tarea de actualizar y mantener el estado de la aplicación mientras el usuario elige las opciones de pago y envío. Tengo que decir que la sección donde se agrega una nueva tarjeta fue fuertemente inspirada en otras plataformas, pero todo el código lo escribí desde 0.

La aplicación puede agregar, actualizar y eliminar las direcciones y las tarjetas de crédito del usuario. También se conecta con un proveedor de servicio de pago para obtener datos relacionados con cuotas y bancos.
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/new-card.mp4" type="video/mp4">
  </video>
</figure>

<br>

## Administrador

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-admin.mp4" type="video/mp4">
  </video>
</figure>

El admin fue la primera aplicación que desarrollamos. Está hecho con Polymer 2

Acá los vendedores personalizan la tienda y configuración lo necesario para su negocio. Pueden agregar sus productos, ver las últimas órdenes, e interactuar con los clientes chateando con ellos antes y después de la compra.

En esta aplicación hice y hago una buena parte del trabajo de frontend que se requiere. A veces también hago APIs en el backend, o intento arreglar alguna para ver de dónde viene ese error 500 😅.

En este proyecto aprendí tecnologías de backend como Node con Express, Socket.io, Google Pub/Sub, y algunas más.
