# Auditor
>This is a web app with a user compiled database of classes offered at various universities that helps people audit/attend classes during the free time in their schedules

Just throw in a full list of where you are at what times during the day, and you can find classes that are open to the public along your route.

![Screenshot](https://cloud.githubusercontent.com/assets/5254722/26138956/17c7f9cc-3a9b-11e7-82f5-be57b7465fa6.png)

## Setup
First you need to install the docker-related tools if you don't have them already.

1. Check out the docker install directions for your particular operating system [here at the docker site.](https://docs.docker.com/engine/installation/#supported-platforms)
2. Docker-compose installation instructions can be found [here.](https://docs.docker.com/compose/install/)

## Running the app
```shell
git clone https://github.com/ananthamapod/Auditor
cd Auditor
docker-compose up
...
```
Aand we're off!

## Tools
- Node
- Express
- ElasticSearch
- MySQL
- Redis
- Docker
- React
- Redux
- Webpack
- Python
- SQLAlchemy
- and a ton of npm packages

## Implementation
*More detailed implementation document coming soon.*

* The client-side application is a React app with Redux
* With a webpack build and bundle process
* Front-facing web server is a Node/Express server
* Database is a MySQL container
* Database connections are mediated by a python microservice with SQLAlchemy for connecting to the the MySQL instance
* Redis is used to queue up searches
* Searches from redis go to a Node/Express search microservice
* Search microservice uses ElasticSearch for fuzzy keyword searches against the MySQL database to find classes

## Development
Running everything as containers and using docker-compose is not recommended for development. Run just the services that you're working on. Test against local database/redis/elasticsearch instance or a database/redis/elasticsearch container.
