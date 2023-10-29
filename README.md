# File upload Node.js API

This repository contains a Node.js API that serves as a file uploading web app. The API provides routes and functionalities to handle user authentication, upload files,list files and delete files. which utilizes JWT (JSON Web Token) refresh and access tokens for user authentication. It is designed specifically for the purpose of supporting the [File uploading app](https://github.com/muhammed-sayeed/task-2.git) project.

## Features

The File uploading Node.js API includes the following features:

- User authentication using JWT refresh and access tokens.
- Endpoints to add, fetch and delete the files from S3 bucket.
- Routes to handle user registration and user login.


## Technologies Used

The Role based authentication Node.js API utilizes the following technologies:

- Node.js: A JavaScript runtime environment for building server-side applications.
- Express.js: A fast and minimalist web application framework for Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- Mongoose: An elegant MongoDB object modeling for Node.js.
- JWT (JSON Web Token): A secure method for transmitting user authentication information between parties.
- bcrypt: A library for hashing passwords and providing password security.
- S3 bucket:  It's a service provided by Amazon Web Services (AWS). which is like a digital storage container or a      folder where you can store files, data, and other information on the internet. 

## Installation

To run the Role based authentication Node.js API locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository to your local machine using the following command:

```
git clone https://github.com/muhammed-sayeed/task-2.git
```


3. Navigate to the project's root directory:

```
cd Task-2
```


4. Install the required dependencies using npm:

```
npm install
```


5. Create a `.env` file in the project's root directory and define the following environment variables:

```
PORT = 3000
database =your_mongodb_uri
access_secret = authsecretkey1
access_life = 15m
refresh_secret = authsecretkey2 
refresh_life = 60m
ACCES_KEY = S3accesskey
ACCES_SECRET = S3secretkey
REGION = S3region
BUCKET = S3name
```


Replace `authsecretkey1` and `authsecretkey2` with a secure secret key for JWT token encryption and `your_mongodb_uri` with the connection URI for your MongoDB database and `S3accesskey` with the  S3 access key, `S3secretkey` with the S3 secret key, `S3region` with your S3 bucket region and `S3name` with you S3 bucket name for to connect s3 bucket.

6. Start the Node.js server:
```
npm start
```

7. The API will be running on `http://localhost:3000`, and it is ready to be used by the product browsing web app.
