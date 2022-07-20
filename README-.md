
# Bengaluru city live weather 

Creating a bengaluru city weather by using open weather map live website (https://api.openweathermap.org) and URL created using postman API generator software. 

# Steps involved in Getting API 

**Step-1:** 
API call
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

**Step-2:** login in to postman and create new API paste url in get block https://api.openweathermap.org/data/2.5/weather

**Step-3:** based on the API call enter the key and value in postman  
    - First key q and value city (ex: bengaluru)
    - Second key App_ID and value Getting from api.openweathermap.org  value copied key from the Api keys.  
    - Third key units and value metric. End so on….. 

**Step-4:** click on send then you can get the JSON Data and URL.

**Step-5:** copy URL from get block and paste in the chrome refresh it.

**Step-6:** Make extension of JSON viewer pro to create the tree or chart of JSON data. To get the path and parameters to minimizing the space and converting JSON tree to single string called stringify json objects.


## API Reference

#### Get all items

```http
  GET => https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=6c145019ec1e7349e309372ff8dfeddd&units=metric
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` |  bengaluru|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` |  6c145019ec1e7349e309372ff8dfeddd|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `units` | `string` | metric|

## Tech Stack

**Server:** Node, Express, APIs,


## Acknowledgements

 - [I acknowledge to Udemy and Angela Yu](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
