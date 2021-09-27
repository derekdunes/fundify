# Fundify

> Fundify is a simple web form application for collection and confirmation of Donations made by donors. Guide to set up application is found below

<!-- [START getstarted] -->

## Getting Started

### Installation

To run fundify locally, clone the project, run:

```bash
git clone https://github.com/derekdunes/fundify.git

cd fundify

#install dependencies 
npm install

```

The next step is to create the .env config file

```bash
echo " " >> .env

```
and paste the below configurations in the new created file
#PORT=5000
#USER=root
#PASSWORD=root
#DATABASE=fundify
#HOST=localhost


Afterwards, download xampp server and import the fundify.sql database schema
See [video](https://www.youtube.com/watch?v=7WUw9J3Xs8Q) on how to import database schemas on xampp server.


Now head back to the terminal and start the app

```bash
#run tests
npm test

#start app
node app

```

lastly open the fundify/client/index.html on your web browser