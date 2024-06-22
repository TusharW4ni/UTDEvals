# Setup

This project uses React on the frontend, NodeJS on the backend, and a MySQL database.

Programs necessary

1. VSCode
2. NodeJS
3. MySQL

You need to look online for the specific steps on how to install each program for your system.

**Important note about MySQL** - <br />When you are setting up the password for the root user during installation, set the password to `Mysqlpass@123`. <br /> After setup, you will have a prompt like `mysql> ` in the terminal. <br/> Once you get to the prompt type this:

1. `CREATE DATABASE UTDEvals;`
2. `USE UTDEvals;`
3. `CREATE TABLE TESTTABLE (ID INT AUTO_INCREMENT, NAME VARCHAR(20) NOT NULL, PRIMARY KEY (ID));`
4. `INSERT INTO TESTTABLE (NAME) VALUES (JOHN);`

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
2. Shutdown/Stop MySQL application