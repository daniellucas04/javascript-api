# API Tasks - Documentation
This API is simple, contains methods to Create, Read, Update, Delete data from a database. The database `dbTodoList` contains only 1 table called `tasks`.

### Methods
to consume the API you need to access the URL using this structure for each method

#### [POST] - http://localhost:3333/tasks
With the method `POST` you need to pass a `request.body` with the `"title"` of the task, all other informations of the table are inserted automatically. Return the `insertId` on succeeded.

```bash
# Example
http://localhost:333/tasks

# Request Body
{
    "title": "Study backend"
}

# Response
{
    "insertId": 1
}
```

> The title field is required and validation can return a JSON message for the error that occurred if it is not entered or if it is empty.

#### [GET] - http://localhost:3333/tasks
With the method `GET` you need only to access the base URL, and will return all the data in the table `tasks`.

```bash
# Example
http://localhost:333/tasks

# Response
[
    {
        "id": 1,
        "title": "Study backend",
        "status": "pendente",
        "created_at": "2024-01-30T23:26:19.000Z"
    }
]
```

#### [PUT] - http://localhost:3333/tasks/:id
With the method `PUT` tou need to pass a `id` in the end of the URL **and** a `request.body` with **title** and **status** of the task. This method doesn't return message but return a status `204` on succeeded.

```bash
# Example
http://localhost:3333/tasks/1

# Request Body
{
    "title": "Study backend",
    "status": "em andamento"
}

# Response 
Status 204 (No message)
```

#### [DELETE] - http://localhost:3333/tasks/:id
With the method `DELETE` you need to pass a `id` in the end of the URL. This method doesn't return message but return a status `204` on succeeded.

```bash
# Example
http://localhost:3333/tasks/1

# Response 
Status 204 (No message)
```