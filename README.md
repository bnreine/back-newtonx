# back-newtonx

This is a User resource RESTful API.  I built out three user stories for each of the three features requested (get all users, get user by id, and create user).  There is a Node/Express REST api back-end that's connected to a postgreSQL database and all calls return to a React front end user interface.  Please see root/project_architecture.png for a drawing of the project architecture I used as a project outline. The general data flow for each user story goes as follows: front-end request ---> express route --> controller --> database query interface ---> user model (sequelize interface) --> database --> return data back to client (if needed). 

Please follow these directions to test out the application on your local machine

1. Download "LTS" version of Node here --> (https://nodejs.org/en/).  You'll now have Node and npm (node package manager).  
2. Fork and Clone this entire repo.
3. Inside the root folder, run "npm i" from a command line.  This will install all dependencies for the back end node project listed in the package.json file.
4. Inside root/client folder, run "npm i" again to install all files in the package.json of the client folder.  
5. Download and install PostgreSQL here ---> (https://www.openscg.com/bigsql/postgresql/installers.jsp/)
6. On a command line type "createdb -U postgres -w back-newton-dev" which creates a database in postgreSQL with username = "postgres"
and database name = "back-newton-dev"
7. Run "pg_ctl -D C:/PostgreSQL/data/pg10 start" to start the database.  This command will vary for you depending on where you installed
postgreSQL locally.  My server starting execution file is located at ---> C:/PostgreSQL/data/pg10.  If it doesn't start, you may have to start and stop it a few times (use "stop" in place of "start" to stop the server).  
8. Then run the migrations by typing "sequelize db:migrate".  
9. Run the seeder files to add a few users to the Users relation by typing "sequelize db:seed:all"
10. Run the client/server at the project root level by typing "npm run dev" and navigate to "http://localhost:3000/"
11. Now on to the application.  Under "Get All Users", click the "Get All Users" button.  This will fetch all users in the database via the back-end REST api and display them all under "All Users".
12. Under "Get User By Id", type a number of a valid user id in the database.  There's only 1 and 2  to start with.  Click the "Get User (Enter ID)" button.  This will fetch the user with this user id from the database via the back-end api and display this user under "Current User".
13. Under "Enter New User Info", Enter the first and last name of a new user.  Then click "Add User" to add that user to the database.  This sends a fetch request with the firstName and lastName as a json payload to the back end api.  There, express routes the payload through the system until sequelize writes it to the database as a new user.  Then, express sends the newly created user back to the client and displays the result under "New User".
