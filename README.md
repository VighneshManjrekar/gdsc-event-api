# gdsc-event-api

## Usage

Rename "config/.env.env" to "config/.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Demo

Extensive documentation with examples [here](https://documenter.getpostman.com/view/21091542/VUjSEi9D)

[Base URL](https://gdsc-event-api.herokuapp.com/)

## Endpoints

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [Delete event](#1-delete-event)
   1. [Delete event](#i-example-request-delete-event)
1. [Update event](#2-update-event)
   1. [Update event](#i-example-request-update-event)
1. [Get single event](#3-get-single-event)
   1. [Get single event](#i-example-request-get-single-event)
1. [Create Event](#4-create-event)
   1. [Create Event](#i-example-request-create-event)
1. [Get Events](#5-get-events)
   1. [Get all events](#i-example-request-get-all-events)
   1. [Get by category](#ii-example-request-get-by-category)
   1. [Get by place](#iii-example-request-get-by-place)
   1. [Get by place and category](#iv-example-request-get-by-place-and-category)
   1. [Sort and pagination](#v-example-request-sort-and-pagination)
   1. [Search by name](#vi-example-request-search-by-name)


--------



### 1. Delete event



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://gdsc-event-api.herokuapp.com/event/62f681a84afd9e6f625879ae
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***More example Requests/Responses:***


#### I. Example Request: Delete event


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body: None***



#### I. Example Response: Delete event
```js
{
    "success": true,
    "data": {
        "_id": "62f681a84afd9e6f625879ae",
        "name": "Web Development another event",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
        "category": "Mobile Development",
        "place": "Mumbai",
        "date": "2022-08-14T10:00:00.000Z",
        "createdAt": "2022-08-12T16:36:56.491Z",
        "updatedAt": "2022-08-12T16:37:06.386Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 2. Update event



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: https://gdsc-event-api.herokuapp.com/event/62f681a84afd9e6f625879ae
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "name":"Web Development another event"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update event


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "name":"Web Development another event"
}
```



#### I. Example Response: Update event
```js
{
    "success": true,
    "data": {
        "_id": "62f681a84afd9e6f625879ae",
        "name": "Web Development another event",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
        "category": "Mobile Development",
        "place": "Mumbai",
        "date": "2022-08-14T10:00:00.000Z",
        "createdAt": "2022-08-12T16:36:56.491Z",
        "updatedAt": "2022-08-12T16:37:06.386Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 3. Get single event



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://gdsc-event-api.herokuapp.com/event/62f6203d7aedf4a6fdb94b26
```



***More example Requests/Responses:***


#### I. Example Request: Get single event



***Body: None***



#### I. Example Response: Get single event
```js
{
    "success": true,
    "data": {
        "_id": "62f6203d7aedf4a6fdb94b26",
        "name": "Web Development Event",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
        "category": "Web Development",
        "place": "Delhi",
        "date": "2022-08-14T10:00:00.000Z",
        "createdAt": "2022-08-12T09:41:17.322Z",
        "updatedAt": "2022-08-12T09:41:17.322Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. Create Event


Create event with following rules:

*   name: required, unique, max length: 30
*   description: required, max length: 500
*   category: required, value must be anyone from following
    *   "Web Development"
    *   "Mobile Development"
    *   "UI/UX"
    *   "Data Science"
    *   "Business"
    *   "Blockchain"
    *   "AI/ML"
    *   "Other"
*   place: required
*   date: required, provide ISO date


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://gdsc-event-api.herokuapp.com/events
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "name": "Web Development Event 2",
    "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
    "category":"Mobile Development",
    "place":"Mumbai",
    "date":"2022-08-14T10:00:00+0000"
}
```



***More example Requests/Responses:***


#### I. Example Request: Create Event


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "name": "Web Development Event 2",
    "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
    "category":"Mobile Development",
    "place":"Mumbai",
    "date":"2022-08-14T10:00:00+0000"
}
```



#### I. Example Response: Create Event
```js
{
    "success": true,
    "data": {
        "name": "Web Development Event 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
        "category": "Mobile Development",
        "place": "Mumbai",
        "date": "2022-08-14T10:00:00.000Z",
        "_id": "62f62dad4458f4fa3525eb3f",
        "createdAt": "2022-08-12T10:38:37.638Z",
        "updatedAt": "2022-08-12T10:38:37.638Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



### 5. Get Events


Check examples for all filtering options


***Endpoint:***

```bash
Method: GET
Type: 
URL: https://gdsc-event-api.herokuapp.com/events
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| search | Web Development |  |



***More example Requests/Responses:***


#### I. Example Request: Get all events



***Body: None***



#### I. Example Response: Get all events
```js
{
    "success": true,
    "count": 4,
    "pagination": {
        "total": 4
    },
    "data": [
        {
            "_id": "62f620337aedf4a6fdb94b24",
            "name": "App Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:07.043Z",
            "updatedAt": "2022-08-12T09:41:07.043Z",
            "__v": 0
        },
        {
            "_id": "62f6203d7aedf4a6fdb94b26",
            "name": "Web Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Web Development",
            "place": "Delhi",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:17.322Z",
            "updatedAt": "2022-08-12T09:41:17.322Z",
            "__v": 0
        },
        {
            "_id": "62f620547aedf4a6fdb94b28",
            "name": "AI/ML Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "AI/ML",
            "place": "Kolkata",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:40.179Z",
            "updatedAt": "2022-08-12T09:41:40.179Z",
            "__v": 0
        },
        {
            "_id": "62f62dad4458f4fa3525eb3f",
            "name": "App Development Event 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T10:38:37.638Z",
            "updatedAt": "2022-08-12T10:38:37.638Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Get by category



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| category | Web Development,AI/ML |  |



***Body: None***



#### II. Example Response: Get by category
```js
{
    "success": true,
    "count": 2,
    "pagination": {
        "total": 2
    },
    "data": [
        {
            "_id": "62f6203d7aedf4a6fdb94b26",
            "name": "Web Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Web Development",
            "place": "Delhi",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:17.322Z",
            "updatedAt": "2022-08-12T09:41:17.322Z",
            "__v": 0
        },
        {
            "_id": "62f620547aedf4a6fdb94b28",
            "name": "AI/ML Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "AI/ML",
            "place": "Kolkata",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:40.179Z",
            "updatedAt": "2022-08-12T09:41:40.179Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



#### III. Example Request: Get by place



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| place | Mumbai,Delhi |  |



***Body: None***



#### III. Example Response: Get by place
```js
{
    "success": true,
    "count": 3,
    "pagination": {
        "total": 3
    },
    "data": [
        {
            "_id": "62f620337aedf4a6fdb94b24",
            "name": "App Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:07.043Z",
            "updatedAt": "2022-08-12T09:41:07.043Z",
            "__v": 0
        },
        {
            "_id": "62f6203d7aedf4a6fdb94b26",
            "name": "Web Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Web Development",
            "place": "Delhi",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:17.322Z",
            "updatedAt": "2022-08-12T09:41:17.322Z",
            "__v": 0
        },
        {
            "_id": "62f62dad4458f4fa3525eb3f",
            "name": "App Development Event 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T10:38:37.638Z",
            "updatedAt": "2022-08-12T10:38:37.638Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



#### IV. Example Request: Get by place and category



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| place | Mumbai,Delhi |  |
| category | Mobile Development,Web Development |  |



***Body: None***



#### IV. Example Response: Get by place and category
```js
{
    "success": true,
    "count": 3,
    "pagination": {
        "total": 3
    },
    "data": [
        {
            "_id": "62f620337aedf4a6fdb94b24",
            "name": "App Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:07.043Z",
            "updatedAt": "2022-08-12T09:41:07.043Z",
            "__v": 0
        },
        {
            "_id": "62f6203d7aedf4a6fdb94b26",
            "name": "Web Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Web Development",
            "place": "Delhi",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:17.322Z",
            "updatedAt": "2022-08-12T09:41:17.322Z",
            "__v": 0
        },
        {
            "_id": "62f62dad4458f4fa3525eb3f",
            "name": "App Development Event 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T10:38:37.638Z",
            "updatedAt": "2022-08-12T10:38:37.638Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



#### V. Example Request: Sort and pagination



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| sort | name |  |
| page | 2 |  |
| limit | 2 |  |



***Body: None***



#### V. Example Response: Sort and pagination
```js
{
    "success": true,
    "count": 2,
    "pagination": {
        "total": 4,
        "prev": 1,
        "limit": 2
    },
    "data": [
        {
            "_id": "62f62dad4458f4fa3525eb3f",
            "name": "App Development Event 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T10:38:37.638Z",
            "updatedAt": "2022-08-12T10:38:37.638Z",
            "__v": 0
        },
        {
            "_id": "62f6203d7aedf4a6fdb94b26",
            "name": "Web Development Event",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Web Development",
            "place": "Delhi",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T09:41:17.322Z",
            "updatedAt": "2022-08-12T09:41:17.322Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



#### VI. Example Request: Search by name



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| category | Mobile Development |  |
| page | 1 |  |
| search | 2 |  |



***Body: None***



#### VI. Example Response: Search by name
```js
{
    "success": true,
    "count": 1,
    "pagination": {
        "total": 1
    },
    "data": [
        {
            "_id": "62f62dad4458f4fa3525eb3f",
            "name": "App Development Event 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed beatae vero, corrupti earum sequi impedit dolorem inventore, tempora quaerat maxime! Totam, harum obcaecati! Eius, distinctio. Saepe ullam ipsa itaque?",
            "category": "Mobile Development",
            "place": "Mumbai",
            "date": "2022-08-14T10:00:00.000Z",
            "createdAt": "2022-08-12T10:38:37.638Z",
            "updatedAt": "2022-08-12T10:38:37.638Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

---
[Back to top](#gdsc-event-api)