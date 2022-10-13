# Database Seeding
---

- Fetch data from an API using server-side JavaScript
- Write a data set to the filesystem using a Promise
- Define a model based on a few properties of the data set fetched from the API
- Seed data to a local MongoDB database

### Dependencies
---

- mongoose
- node-fetch

### Download From Api
---
Using download.js file
- <https://restaurantscountries.com/v3.1/all>


### Sample DL Format
---
```
import fetch from 'node-fetch'

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0])
  })
```

## Write Data to the Filesystem
---
- use fs module ()


Updated download.js to include fs
```
import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

fetch('https://restcountries.com/v3.1/all')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./countries.json", JSON.stringify(data)))

```

## Steps so Far
---
1. First we imported our node-fetch module as fetch.
2. Next we import the fs module. Note that we use import {promises as fsPromises} from 'fs' instead of import fs from 'fs'. The former lets us use fs with promises rather than the (older, messier) callback pattern.
3. Next we make our fetch request, then parse the JSON in the request body.
4. Finally, we change the data into a string with JSON.stringify(data) and write it to a file called data.json with fsPromises.writeFile().

## Summary so Far
---

this is basically how we can strip what we need from an API

1. fetch api and write it to a JSON file after stringifying it as a JSON
2. Create a Schema that you want to follow with the portions of the API data
3. Create a seed file in which you use the schema structure, import the data you wrote in step one
4. Map that data out into a new variable