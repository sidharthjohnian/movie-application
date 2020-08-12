# Movie Application

## Functionalities
A simple web application that provides movie suggestions for a user based on their movie genre preference and obtain information about them.

1. API authorization via token
2. Operations like
    * User can view Comedy Movies suggestions
    * User can view Action Movies suggestions
    * User can view Animated Movies suggestions
    * User can view Action Movies suggestions
    * User can view Romance Movies suggestions
    * User can click on the move to see a description below which is served by an external API tmdb.

## Installation

Pre-requisites : Package Manager - NPM should be present.
1. Extract the 7-zip to a location 
2. Open the command prompt at that location and run `npm install`.
3. Go the folder location and run the command `node index.js` in the command prompt/terminal(this should run the server at a URL like: `http://localhost:8081/`).
4. Browse to public/index.html and run the file in the browser.

Note:- If it does not work run the below commands in the root folder which you copied.
npm install express


## Test API via Postman or other API tools
1. If not done already, go the folder location and run the command `node index.js` in the command prompt/terminal(this should run the server at a URL like: `http://localhost:8081/`).
2. Import the API collections from api_doc_collection folder into the API tester(Postman) and run the set examples.
3. You can also do POST/GET calls through any API tester tool using the below examples.
   Method - POST 
   URL- http://localhost:8081/login/testUser/testPassword

   Method - GET 
   URL- http://localhost:8081/getComedyMovies
   Header -
   'Authorization' - 'jwt <token you receive from login API>'

   Method - GET 
   URL- http://localhost:8081/getActionMovies
   Header -
   'Authorization' - 'jwt <token you receive from login API>'

   Method - GET 
   URL- http://localhost:8081/getAnimatedMovies
   Header -
   'Authorization' - 'jwt <token you receive from login API>'

   Method - GET 
   URL- http://localhost:8081/getRomanceMovies
   Header -
   'Authorization' - 'jwt <token you receive from login API>'

   Method - GET 
   URL- http://localhost:8081/getHorrorMovies
   Header -
   'Authorization' - 'jwt <token you receive from login API>'

