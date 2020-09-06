---
title: 'My work in OkNube'
date: '2020-09-04'
---

In OkNube we target to make easy for all people to sell over the internet, and also bring the clients to them. Our goal is to set up a "marketplace" in some citys, and let the stores of that city sell and compite.

In this time working on the project I've learned a lot and grew up as a developer. Here I show a little of what we've done and we're doing currently:

<br>

## Store app
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-store.mp4" type="video/mp4">
  </video>
</figure>

Some of the tools used: [LitELement](https://lit-element.polymer-project.org/), Redux, Firebase, Node

LitElement was a great tool to make this frontend thanks to its easy use and seamless integration with redux. The use of redux with the [reselect](https://github.com/reduxjs/reselect) library was a life saver as long as it made it kind of easy to manage complex logic, such product options selection. As shown in the image above, the user can choose the color and the material of the product, and see the changes in the price and stock. You also can see what version of the product is out of stock.

I used [re-reselect](https://github.com/toomuchdesign/re-reselect) to reuse some selectors logic in some other points in the app. I've also made some works in the backend with Express and Socket.io.

<br>

## Payments app

<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-purchase.mp4" type="video/mp4">
  </video>
</figure>

Again, LitElement and redux made it easy to update and maintain the state of the entire app while the user is selecting shipping and payment options. I have to say that the section where the new card is added was heavily inspired in other platforms, but I wrote it all from scratch.

The app can add, update and remove the user's addresses and credit cards. It connects to a payment provider to get the needed installments and issuers data. 
<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/new-card.mp4" type="video/mp4">
  </video>
</figure>

<br>

## Admin app

<figure class="video_container" style="width: 100%; max-width: 450px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%">
    <source src="/videos/ok-nube-admin.mp4" type="video/mp4">
  </video>
</figure>

The admin was the first app we start to develop, it is made out of Polymer 2. 

Here you customize the store and set up the configuration needed for the business. You can add your products, manage orders, and interact with the customers by chating with them before and after the purchase. 

In this app I make most of the frontend work that is required. Despite it, I sometimes make backend APIs, or try to fix some to see where is that 500 error coming from 😅. In this project I learned backend things like Node with Express, Socket.io, Google Pub/Sub, and a few more.
