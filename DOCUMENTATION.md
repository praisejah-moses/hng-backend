## Hng Stage One Task
An API that takes two GET request query parameters(?slack_name=example&track=track) and returns specific information in JSON format

# API Endpoints
- **Description:** This endpoint takes two GET request query parameters(?slack_name=example&track=track) and returns specific information in JSON format.
- **URL:** `/stage-one/api`
- **HTTP Method:** GET
- 
**Response Format (Success - Status Code: 200):**

```json
      {
          "slack_name":req.query.slack_name,
          "current_day":day,
          "utc_time":utc_time,
          "track":req.query.track,
          "github_file_url":"file_url",
          "github_repo_url":"repo_track",
          "staus_code":200,
       }
```

## Hng Stage Two Task
A Restful API that can perfom CRUD operations an a Person resource.

# API Endpoints

### Endpoint 1: Create a Person

- **Description:** This endpoint allows you to add a new person to the database.
- **URL:** `/api/person`
- **HTTP Method:** POST

**Request Format:**
```json
{
  "userId": "1",  // Required & Unique field. Should be a string and cannot be blank.
  "slack_name": "joe_boy",  // Required & Unique field. Should be a string and cannot be blank.
  "track": "backend",  // Required field. Should be a string and cannot be blank.
  "currentStage": "2",  // Required field. Should be a string and cannot be blank
}
```

**Response Format (Success - Status Code: 201):**

```json
{
  "userId": "1",
  "slackName": "joe_boy",
  "track": "backend",
  "currentStage": "2",
  "_id": "ObjectId",
  "createdAt": "UTC time",
  "updatedAt": "UTC time",
  "__v": 0
}
```


### Endpoint 2: Get a Person by ID

- **Description:** This endpoint allows you to retrieve a person's information by their ID.
- **URL:** `/api/:user_id`
- **HTTP Method:** GET

**Request Parameters:**

- `:user_id` (string): The userId or slackName of the person to retrieve. Required.

**Response Format (Success - Status Code: 200):**

```json
{
  "userId": "1",
  "slackName": "joe_boy",
  "track": "backend",
  "currentStage": "2",
  "_id": "ObjectId",
  "createdAt": "UTC time",
  "updatedAt": "UTC time",
  "__v": 0
}
```


### Endpoint 3: Update a Person by ID

- **Description:** This endpoint allows you to update a person's information by their userId or slackName.
- **URL:** `/api/:user_id`
- **HTTP Method:** PATCH

**Request Parameters:**

- `:user_id` (string): The userId or slackName of the person to retrieve. Required.

  
**Request Format:**

```json
{
  "slackName":newName,
  "currentStage":newStage
}
```
**Response Format (Success - Status Code: 200):**

```json
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```

### Endpoint 4: Delete a Person by their userId or slackName

- **Description:** This endpoint allows you to delete a person's information by their userId or slackName.
- **URL:** `/api/person/:user_id`
- **HTTP Method:** DELETE

**Request Parameters:**

- `:user_id` (string): The userId or slackName of the person to delete. Required.

**Response Format (Success - Status Code: 204):**

```json
{
  status: 'deleted user with id ${userId}'
}
```

## Error Handling 
All API's respond with a **Response Format (Error - Status Code: 500):**

```json
{
  message: error message
}
```

when proplems occur on the server end.
