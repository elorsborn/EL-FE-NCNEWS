## El's NC-News

El's NC-News is a social news forum for Northcoders personnel to discuss things that interest them. To peruse it at your leisure please hit the following link.

http://el-nc-news-frontend.herokuapp.com/

The site is divided into topics and corresponding articles, the content of which can be navigated by a user. Using the API the user may vote on articles and comments posted by others. They can also post and delete comments.

**Making the App**

First off [clone the project](https://github.com/elorsborn/FE-FT-NC-News) and create a react app in node using the following commands:

```
npm init
npm i create-react-app
npm i react-router-dom
npm i react-materialize
```

Next `npm install Axios`, a Promise based HTTP client for browsers and node.js.

The following links provide documentation on each of these components:

- https://reactjs.org/docs/hello-world.html
- https://reacttraining.com/react-router/web/guides/quick-start
- https://react-materialize.github.io/#/
- https://github.com/axios/axios

The app can now be fed data by making asynchronous calls to the previously built [API](https://elliot-ncnews.herokuapp.com/api).

**UI**

The user has access to topic routes and the main page from the top navigation bar. This performs responsively on mobile and tablet devices and becomes a side nav. The logo also acts as a home route.

By clicking on articles the user is transferred to the article page. Here they may use buttons to vote and delete comments only they made. Currently the user posts as user **tickle122**.

**Deploying**

As with the API, this app is hosted to [Heroku](https://www.heroku.com/) so be sure to make an account. Once installed enter the following commands to create an application:

```
heroku login
heroku create
```

Rename it if you want and push the project to Heroku:

```
git remote rename heroku heroku-staging
git push heroku master
```

Nice one.

**Acknowledgements**

This project was created by Elliot Orsborn under the tuition of Northcoders staff and residents.
