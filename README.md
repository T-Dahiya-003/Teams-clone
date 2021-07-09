# Teams-clone

This project is based on building a Microsoft Teams Clone .It id done under Microsoft Engage Mentorship program'21. 

It is a Web Application through which one can do video meetings with multiple participants.


## Built With

* [Node Js](https://nodejs.org/en/) - For Backend
* [Peer JS](https://peerjs.com/) - PeerJS simplifies WebRTC peer-to-peer data, video, and audio calls.
* [SocketIo](https://socket.io/) - For realtime communications
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Heroku](https://heroku.com) - Used to Deploy Node.js applications


## Dependencies Used:
   * [Peerjs](https://peerjs.com/)
   * [Express](http://expressjs.com/)
   * [Passport](http://www.passportjs.org/docs/)
   * [Mongoose](https://mongoosejs.com/docs/)

## Key Features Include:
Video Conversation between multiple participants(more than 2)
   * Video toggle 
   * Audio toggle
   * Share meet link (Enables user to copy the link)
   * Present screen
   * Recording the meet
   * Chat feature(live chat)
   * Number of attendees
   * Waiting room(user joins the meet only after clicking join call button else stays in the waiting room)
   * Responsive website
   * Expand and contract screen feature for user video 
   * Cross platform (works on mobile and pc)
   * Enables cam change feature on mobile 


## Register Page
 * You have to first register on this site after that you will be able to access all services.
 
![](screenshots/Screenshot%20(75).png)

## Login Page
 
![](screenshots/Screenshot%20(76).png)

## Home page
 * You can create new meeting rooms as well as join existing rooms by entering link.
 
![](screenshots/Screenshot%20(77).png)

## loader page
 * After creating a new meeting or joining a meeting , a loader page shows up. 
 
![](screenshots/Screenshot%20(81).png)

## video meeting room(with multiple participants)
 * This app enables multiple users to have video meetings.
 
![](screenshots/Screenshot%20(78).png)

 ## share screen feature
 * You can present your full screen or a certain tab of your pc to other participants.
 
![](screenshots/Screenshot%20(79).png)

## chat feature
 * Live chat can be done between participants in which the name of the user and message time shows up along with the text.
 
![](screenshots/Screenshot%20(80).png)

## share meet link feature
 * You can share the meet link with others to join the meeting.
 
![](screenshots/Screenshot%20(82).png)

### Prerequisites

You have to install [Node.js](https://nodejs.org/en/) in your machine.



### Installing and running the app

After installing node clone the repo by using git

```
git clone https://github.com/T-Dahiya-003/Teams-clone
                     
```

Or you can download the zip file.

Then open cmd or git bash on the project folder to install some modules that I used to build this project

Install Once

```
npm install
```



* The above command will install all the required packages and dependencies required for the project 
* The final step is to run the following command

`npm run dev`

 After doing the above steps go to your browser and type localhost:3000.
 
 Before that you have to make a keys.js file in config folder which contain your database details like this:
 `module.exports = {
    MongoURI : 'mongodb+srv://<user>:password@cluster08451.am7f4.mongodb.net/<name of database>?retryWrites=true&w=majority'
}`


## Live Demo

For deploying the project I used [heroku](https://heroku.com)

https://teams-2.herokuapp.com

### This Web App was developed by Tanvi Dahiya


