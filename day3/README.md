# Day 3

We have two servers (server1.js and server2.js) and client parts in this example.

From the first server we serve html file to client. The html file has two tables: drivers and cars. 
The data of the tables are being retrived from the first server, whereas the first server gets the data of cars from the second
server.

##Geting started
- Download the [node](https://nodejs.org/en/) and install it in your computer
- Install [git](https://git-scm.com/downloads) if you are in Windows
- After succesfull installation clone this repo by typing in git bash the following command
`git clone git@github.com:kmanaseryan/mandarin.git`
- Redirect to day3 folder by typeing `cd /mandarin/day3`
- Type in your console `npm install` to download required dependences (after this operation you will have node_modules folder)
- Run the second server `node server2.js` then in another console but in the same directory run first server `node server1.js` and go to your browser and type `localhost:3000`


Server ports
- First server (server1.js) listens on 3000 port
- Second server (server2.js) listens on 3002 port

Clients side libs
- Bootstrap - Used for styling tables
- jQuery - Used for manipulating DOM and making AJAX requests to the server 

Server side libs or actually node modules
- express - Used for creating servers and defining requests routes
- request - Used for making request to the second server 