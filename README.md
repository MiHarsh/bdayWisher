
# BdayWisher

### Wish your friends in a unique style.

<p align ="center" ><img src="https://imgur.com/TAG4L3O.jpg" height="350px" alt="Homepage"/></p>
<p align ="center" ><a href="https://bdaywisher23.herokuapp.com/">Create New Event</a> | <a href="http://bdaywisher23.herokuapp.com/user/event?id=XuVAnuCKno7">Try a demo {pin - 12345}</a> | </p>



## Table of Contents 📕

- [About](#bdaywisher-1)
- [Features](#features-)
  	- [More Secured Events](#1-more-secured-events)
  	- [Scheduling](#2-scheduling)
  	- [Adding images](#3-adding-images)
  	- [Adding Audio](#4-adding-audio)
  	- [Adding text](#5-adding-text)
- [Future Work](#future-work)
- [Gallery](#gallery)
- [Contributions](#contributions)

# bdayWisher 
Are you tired of the so-called oneliner- **"Happy Birthday"** or thinking to make it memorable but stuck with no ideas in mind?

 Wait, Let me help you.

**This portal provides you with the easiest way** to create an incredible birthday surprise **without putting in a lot of effort**. Secured via *pin*, no one could ever know what the event was all about. The events' creation and destruction timing feature make this web app cooler than the other trivial methods.

So why wait? 
Upload your message, photos, and audios and get a **secured surprise** for your friends.


# Features :

## 1) More Secured Events
* Pin authentication, which will be verified to access the event i.e no unauthorised person could ever gain access to even basic data such as schedule details.


## 2) Scheduling
* Set start date and time
	* Timers would be run until the event scheduled time.
	* When the timer stops, event will start automatically.
* Set end date and time
	* Once the event ended, it cannot be accessed.

## 3) Adding Images
*  Image Caraousel feature, users can upload multiple photos.
	* Rendered on the birthday cards.

## 4) Adding Audio
* Users can add playback audios, which receivers could access when they are on the card section.
	* The audio file could be anything ranging from **"Happy Birthday"** song recorded in user's voice, letters or even any downloaded music.

## 5) Adding Text
* Users could also add texts, letters or anything which they want to be shown on the cards.

# Future Work
* Improving frontend.
* Real time audio recording support.
* Add more cards, options for users to switch between them.

# Gallery

## 1) Receiver End

| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="Enter pin" src="https://imgur.com/244ujSB.jpg">  Pin Authorization |  <img width="1604" alt="wait timer" src="https://imgur.com/37M1bRJ.jpg"> Wait Timer |<img width="1604" alt="Homepage" src="https://imgur.com/TAG4L3O.jpg"> Homepage|
|<img width="1604" alt="page1" src="https://imgur.com/TITLBf0.jpg"> intro-1 |  <img width="1604" alt="page2" src="https://imgur.com/y6kO140.jpg">intro-2|<img width="1604" alt="Page3" src="https://imgur.com/qan4ixm.jpg"> intro-3|
|<img width="1604" alt="page4" src="https://imgur.com/DfbA76P.jpg"> intro-4 |  <img width="1604" alt="card-closed" src="https://imgur.com/MohmvdA.jpg"> Card-Closed|<img width="1604" alt="card" src="https://imgur.com/3ZXXumu.jpg"> Card|
|<img width="1604" alt="page4" src="https://imgur.com/sGe0pxs.jpg"> Card-Opened |  


## 2) Creator End

| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="homepage" src="https://imgur.com/D3knN7j.jpg">  Homepage |  <img width="1604" alt="input name" src="https://imgur.com/FvaEw8e.jpg"> Input Name |<img width="1604" alt="set pin" src="https://imgur.com/EWVGE8U.jpg"> Set Pin|
|<img width="1604" alt="url generation" src="https://imgur.com/kRO8Llg.jpg"> url-generation |  <img width="1604" alt="upload images" src="https://imgur.com/3j8WYuj.jpg">upload-images|<img width="1604" alt="upload-audio" src="https://imgur.com/9ZQesdU.jpg"> upload-audio|
|<img width="1604" alt="create-text" src="https://imgur.com/zfuigqF.jpg"> upload-text |  <img width="1604" alt="date-time" src="https://imgur.com/2PI9fzw.jpg"> date-time|<img width="1604" alt="success" src="https://imgur.com/Zv5Wc76.jpg"> Event Created| 

# Contributions:
Contributions are welcome ❤️. For major changes, please open an issue first to discuss what you would like to change.

* To run "main" branch locally 
```
$ npm install
$ npm start
```

* To run "creator / receiver" branch
```
// first run the server on port 4000
$ git checkout server 
$ npm install
$ node app.js

// now
$ git checkout creator(or receiver)
$ npm install
$ npm start
```
```
// To build react code 
$ npm run build
// then rename the folders as build-receiver(or build-creator) 
and replace the ones present in "main" branch

```

Note - 
* when running creator/ receiver branch, proxy on port 4000, is being used. 
* "main" branch - Backend + builds of "creator" and "receiver" branches.
* "creator" branch  - react code for creator end.
* "receiver" branch - react code for receiver end.

Do Give a **Star** if you like it ❤️
