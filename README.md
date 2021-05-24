## Blog
Rails and React app that get posts form differente sources.

### Dependencies
- docker
- docker-compose

You can check how to install them [here](https://docs.docker.com/compose/install/)
Also create an account for Gnews.io in order to get the api key used in the installation

### Installation & Setup
After you install docker and clone this repo, you have opena a terminal and go to the project folder. 
Then run the next commands:

```bash
$ docker-compose build
$ docker-compose up
```
These commands are going to install all packages and dependencies need it for the project.
However, to install the packages for the frontend you have to get into the container and run `npm install` or execute the next command:

```bash
$ docker exec -it rails-react-blog_app_1 npm install
```

Then, update the credentials with your `Gnew` api key by using this command:

```bash
docker exec -it  rails-react-blog_app_1 EDITOR=vim bundle exec rails credentials:edit -e development
```
Finally, go to `http:127.0.0.1:3000`

### Tests

```bash
$ docker exec -it  rails-react-blog_app_1 bundle exec rspec spec
$ docker exec -it  rails-react-blog_app_1 npm run test
```

