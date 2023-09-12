<h1 align=center>Repository for Hng Tasks</h1>
<h3>Introduction</h3>
<p>This repository contains all the source code related to tasks assigned in the backend track of the hng program, The stage tasks are hosted on a single server, The repo contains a folder <em>'stage-tasks'</em> where the source code for each stage tasks can be found</p>
<p>Note:The 'routes' and 'controller' folder is futher distributed to accomodate codes from diffrent stages</p>

## Getting Started
<p>To get a local copy up and running follow these simple steps.</p>
<h6>Prerequisites</h6>
<p>Install the following runtime environment</p>
<ul>
    <li>NodeJS</li>
</ul>

## Installation
1. Clone the repository
    ```
    git clone https://github.com/praisejah-moses/hng-backend
    ```    
2. Change directory to <em>stage-tasks</em> and Install NPM packages
    ```
    npm install or npm i
    ```
3. Setup .env file
    ```
    MONGO_URL = mongodb connection string
    ```
4. Start server
   ```
   npm run dev
   ```
## Usage
The available API's can be accessed on http://localhost:3000 using a tool like curl or Postman with the appropriate URLs and JSON body
<h6>Stage One Endpoint</h6>
<p>Stage one api can ba accessed at <em>/stage-one/api</em></p>
<p>The endpoint takes two GET request query parameters(?slack_name=example&track=track) and returns specific information in JSON format</p>
<h6>Stage Two Endpoint</h6>
<p>Stage two api can ba accessed at <em>/api and /api/:user_id</em></p>
<p>The <em>/api</em> accepts a POST request with a JSON document passed in the request body</p>
<p>The <em>/api/:user_id</em> accepts a GET, DELETE and PATCH request, the PATCH request accepts a JSON document passed in the request body</p>
