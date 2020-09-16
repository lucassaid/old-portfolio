---
title: 'Amelie Julieta'
date: '2020-09-06'
---

This is my most recent job (still in progress) and I'm pretty proud of it ❤ I'm using React with [Ant Design](https://ant.design/), Next.js, [Redux Toolkit](https://redux-toolkit.js.org/), Firebase and [SWR](https://github.com/vercel/swr).

Julieta Amelie sells courses about marketing and social media. She asked me to make a platform where she can sell her courses, and where the students can watch them. Some of the technical tasks needed were:

- Make the needed pages such as landing, course overview, user, etc.
- Build the page where the student is going to watch the lessons, from the first to the last.
- Connect to a payment service provider ([MercadoPago](https://mercadopago.com.ar)).
- Connect to the Vimeo api.
- Build an admin to create and update courses, manage users, and change some configuration.

<br>

## Landing page
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-landing.mp4" type="video/mp4">
  </video>
</figure>
All the static content is statically rendered with Next.js for a fast load. Then I use SWR to fetch data from Firestore. This is actually the most boring part 💁‍♂️ let's skip to the next:
<br><br><br>

## Course creation and management
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-admin.mp4" type="video/mp4">
  </video>
</figure>
For the section where she adds the content of the courses, I wanted to make use of the horizontal space (only on desktop) so I made the interface you can see in the video: Lessons on the left, selected lesson on the right. I also think this is a quick and easy way to move between lessons and edit them.
<br><br>

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-lessons.mp4" type="video/mp4">
  </video>
</figure>

I also it found necessary to easily reorder the lessons, so I used a fantastic library called  [React Beautiful dnd](https://github.com/atlassian/react-beautiful-dnd). All left to do was update the Redux state every time the order of a lesson or section changes, and update the firestore database.
<br><br><br>

## State management with React Toolkit
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/juli-amelie-uploads.mp4" type="video/mp4">
  </video>
</figure>
The files that are going to be uploaded to the platform are probably heavy, so I thought it was a good idea to keep the state out of the components.

Using Redux Toolkit I was able to maintain the upload state all over the app, so if you want to go to another page, the files will still be uploaded. You can see the progress in the right drawer, as shown in the video.

I only use Redux for this part of the app. I think is better to use local state when possible.
<br><br><br>

## Security with Firebase + SWR
[SWR](https://github.com/vercel/swr) is a brand new library from [Vercel](https://vercel.com) creators, and they use it for their authentication system. I wanted to implement it since it looked like a [good approach](https://github.com/vercel/next.js/discussions/10724#discussioncomment-726).

After playing around a little I set it up like this: [Firebase Session Cookies](https://firebase.google.com/docs/auth/admin/manage-cookies) to manage the session in the backend, and SWR to easily keep it updated in the frontend. In the words of a Vercel developer (talking about SWR): "When building dashboards we found the approach we use for zeit.co/dashboard to hold the best performance and scaling characteristics, so I'd definitely use this approach in all cases of deployment."