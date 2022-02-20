Project Title : Image Processing App

Project Description :

- I created an Api which we can use to resize an image using the Sharp Module,

- this Api is checking if the resized image exists in our folder or not ,
  if it exists it get it from the disk and return it as response ,
  if it doesn't exist then a new one is created using the Sharp Module as i said.

How to install Everything you need:

- first you should go to our terminal and write npm install ,
  to install all the dependencies we will be using through our project

what commands should you write to test our project:

- npm run build >> to compile typescript into javascript
- npm run lint >> to apply eslint
- npm run prettier >> to apply prettier and format the code
- npm run test >> to build and run jasmine for testing all the tests implemented
- npm run start >> to start our server and the project to be running to test

what should you do on the browser to test our Project:

- before opening the browser you should start the server by typing in the terminal npm run start

- open your browser and type http://localhost:3000/api/images?filename=santamonica&width=200&height=200

- you will see that a new image is created in the thumb folder with new dimensions 200 , 200
- if you refreshed the page again you will not see a duplicate image in the thumb folder as the image already has been created

- take into consideration some scenarios if you type another filename it will tell you that it is an invalid filename and if you enter different width and height from 200 , 200 there will be no problem in case you enter positive numbers not string or anything else
