# Setup

This project uses React on the frontend, NodeJS on the backend, and a MySQL database.

Programs necessary

1. VSCode
2. NodeJS
3. MySQL

You need to look online for the specific steps on how to install each program for your system.

<!-- **Important note about MySQL** - <br />Copy the .env.example file inside of the server folder and rename it to .env, then put your db info in there. <br /> After setup, you will have a prompt like `mysql> ` in the terminal. <br/> Once you get to the prompt type this:

1. `CREATE DATABASE UTDEvals;`
2. `USE UTDEvals;`
3. `CREATE TABLE TESTTABLE (ID INT AUTO_INCREMENT, NAME VARCHAR(20) NOT NULL, PRIMARY KEY (ID));`
3. `INSERT INTO TESTTABLE (NAME) VALUES (JOHN);`
4. `exit`
5. Go to the server directory in this project
6. `mysql -u putYouDBMSUsernameHere -p UTDEvals < utdevals_24_07_05.sql`

Once you get everything setup -

1. Ensure that MySQL is running
2. Clone is repository
3. There are two folders inside of UTDEvals folder you got after cloning: i. client and ii. server
4. Run `cd client && npm i && cd ../server && npm i`
5. Run `npm run dev`
6. Open another terminal and navigate to the UTDEvals folder in the terminal and run `cd client && npm run dev`
7. In the browser go to `http://localhost:5173`

To turn everything off -

1. In both the executing terminals run **Ctrl/Cmd + C**
2. Shutdown/Stop MySQL application -->

After installing necessary applications:

1. Clone this repository
2. Open it in VSCode
3. Find the `.env.example` file in the `server` directory inside the project
4. Make a copy of the `.env.example` file and rename it to `.env`
5. Fill out your MySQL details in the `.env`
6. Open a terminal and navigate to the `server` directory in this project
7. Start mysql here typically by `sudo mysql -u TypeYourUserNameHere -p`
8. When you see the `mysql>` prompt run these commands
   1. `CREATE DATABASE utdevals;`
   2. `USE utdevals;`
   3. `exit`
   4. `sudo mysql -u YourUserNameHere -p utdevals < utdevals_24_07_05.sql`
9. In this terminal run `npm i && npm run dev`
10. Open another terminal while you keep this one running
11. Navigate to the `client` folder
12. In the client folder run `npm i && npm run dev`
13. In your browser go to `http://localhost:5173`

To stop:
1. Ctrl/Cmd + C in both the terminals
2. Shutdown/Stop MySQL
