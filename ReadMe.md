# Node Asset Select Dropdown

## Dependency

First of all you will have to setup a local MongoDB on your system. And start the Mongo server with command  `sudo systemctl restart mongodb`

Then check the status: `sudo systemctl status mongodb`

## .env

After setting up the MongoDB locally and running the mongo server 

Create a .env file in the root folder of the app and then write the mongo server connection url and specify the port you want to run this node app on. Eg:

`
DATABASE_URL="mongodb://localhost:27017/assets"
PORT=3000
`

## Development server

After you have successfully completed the steps mentioned above then you can start the development server.

But first you should run ` npm install ` and then run `npm start`

Boom, your backend service is up. Now you can navigate to `localhost:4200` to enjoy using the asset select app
