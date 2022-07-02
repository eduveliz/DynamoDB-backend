# DynamoDB-backend

## Content 

This project is a connection with DynamoDB, using some simple data (songs) it seeks to use the basic functions of dynamos such as reading, writing, data ordering.

Assets:
- [Node.js](https://nodejs.org/es/)
- [express.js](https://expressjs.com/es/)
- [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

## Required Software

- [Nodejs](https://nodejs.org/es/download/) v16.4.0.
- IDE Ex. [VS Code](https://code.visualstudio.com/download)
- [PostMan](https://www.postman.com/downloads/). (Optional)
- [Git](https://git-scm.com/downloads)

## Clone

```bash
cd existing_folder
git clone https://github.com/eduveliz/DynamoDB-backend.git

```

## Install

```bash
npm install

```

### Run on LocalHost:

- Set the AWS key on this file [Dynamo.ts](/src/Services/Dynamo.ts )

after update the keys is possible to start the proyect

```bash
npm start
```

### Endpoints

```bash
[GET]
/create

```
This endpoint create the data table on AWS is possible to verify after using on dynamo page


```bash
[GET]
/loadSongs
```
This endpoint load a file with information in the database, this action is necessary the first time.


```bash
[GET]
/songs
```
This endpoint return all the data in the table.


```bash
[GET]
/song
```
This endpoint return only one song 


```bash
[GET]
/artist
```
This endpoint return songs by artist
  

### Autor

Developed by por [Eduardo Veliz](https://github.com/eduveliz)
