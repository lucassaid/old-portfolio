---
title: 'Amelie Julieta'
date: '2020-09-05'
---

This is my most recent job (still in progress) and I'm pretty proud of it <3 I'm using React with Antd, Next.js, Redux Toolkit and Firebase. 

Julieta Amelie sells courses about marketing and social media. She asked me to make a platform where she can sell her courses, and where the students can watch them. Some of the technical tasks needed were:

- Make the needed pages such as landing, course overview, user, etc.
- Build the page where the student is going to watch the lessons, from the first to the last.
- Connect to a payments provider (mercadopago).
- Connect it to the Vimeo api.
- Build an admin to create and update courses, manage users, and change some configuration.

<br>

## Langin page
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-landing.mp4" type="video/mp4">
  </video>
</figure>
Actually the most boring part, lets skip to the next:
<br><br><br>

## Course creation and managment
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-admin.mp4" type="video/mp4">
  </video>
</figure>
For the section where she adds the content of her courses, I wanted to make use of the horizontal space (only on desktop) so I made the interface you can see in the video: Lessons on the left, selected lesson on the right. I also think this is a quick and easy way to move between lessons and edit them.

The admin in general is a work in progress, I'm using all the next.js features to try to make a good work. I'm currently working on security.
<br><br><br>

## Reordering things
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-lessons.mp4" type="video/mp4">
  </video>
</figure>
I found a fantastic library called React Beautiful dnd, and with some quick tutorials I had it working. All left to do was update the Redux state every time the order of a lesson or section changes, and update the firestore database.
<br><br><br>

## Uploading files
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-uploads.mp4" type="video/mp4">
  </video>
</figure>
The files that are going to be uploaded to the platform are probably heavy, so I though it was a good idea to keep the state out of the components.

Using Redux Toolkit I was able to mantain the uploads state all over the app, so if you want to go to another page, the files will be still being uploaded. You can see the progress in the right drawer, as shown in the video.