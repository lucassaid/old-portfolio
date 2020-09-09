---
title: 'Proyecto personal: Flash Meet'
date: '2020-09-06'
---

La motivación para este proyecto fue hacer una aplicación de videoconferencias fácil de usar. Mi objetivo es usar todas las ventajas de la web moderna para que nadie tenga que descargar nada. Solo la web.

Hay algunas otras aplicaciones que logran esto si el usuario entra con una computadora, pero no encontré una que funcione en dispositivos móviles sin tener que instalar una app. Igualmente, nada como aprender sufriendo, y hacer todo por mí mismo.

Acá muestro algunas de las características que quise agregar y cómo lo hice

<br>

## Sin login, pero seguro
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/flash-meet.mp4" type="video/mp4">
  </video>
</figure>

Mi idea innegociable era "Quiero que el usuario cree una sala de chat apenas entre, sin login previo". La solución fue autenticar anónimamente a los usuarios con Firebase. Para cada acción que se quiera realizar, un token de firebase es verificado en el servidor para asegurar que el usuario es quien dice ser.

<br>

## Videollamadas con WebRTC
<div style="display: flex; align-items:center;">
  <img src="/images/logos/webrtc.svg" style="width: 100px">
  <div style="margin: 0 20px; font-size: 2.5rem;">+</div>
  <img src="/images/logos/openvidu.png" style="width: 160px">
</div> 

Este probablemente es el gran desafío de la aplicación. [WebRTC](https://webrtc.org/) es un proyecto para dar a los navegadores comunicación en tiempo real. No tuve tiempo de aprender todo sobre el framework, así que usé un genial "wrapper" llamado [OpenVidu](https://openvidu.io/). Gracias a esto fui capaz de desarrollar la aplicación sin las complicaciones de usar WebRTC solo. OpenVidu también te ayuda a configurar un servidor multimedia a donde será procesado el tráfico de las llamadas. 

<br>

## Servidor personalizado y seguridad
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/flash-meet-security.mp4" type="video/mp4">
  </video>
</figure>

Mientras el servidor multimedia procesa las llamadas, Tuve que hacer un servidor propio para manejar la seguridad, los roles de usuarios, las acciones, etc. Lo hice con Node.js. Cada acción que un usuario quiere realizar, es verificada y autorizada en el servidor. También actualiza la base de datos (firestore) con la información de la sala, los usuarios y la configuración.

Toda la conexión con el frontend es a través de Socket.io, haciendo facil escuchar cambios y actualizar el estado en consecuencia.

<br>

## Más cosas por venir

Estoy trabajando en hacer la aplicación más estable y compatible, y en agregar características como encuestas, pantalla compartida y compartición de archivos.