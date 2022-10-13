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