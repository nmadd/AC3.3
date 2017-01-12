# Deployment
Deployment is the process of publishing your app to the web so it's  viewable by anyone with an internet connection.

There are many different ways to deploy an app, but the most common process is to use some software that downloads your source code to a remote server then runs your app so the server is accessible. Additionally, deployment software will typically create a runtime environment suited for your app on the remote server (for example, for our apps we will create Node.js runtime environments...but you can also create environments for Ruby, Python, Java, etc.) and provide a public URL for accessing your app.

- [MDN docs on publishing a website](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website)

Let's take a look at some of different types of deployment software availabel for Node.js apps:

## now js
now js is simple deployment software made by the creator of socket.io

pros: instant, simple, doesn't require git
cons: only 20 free deploys per month (so use them wisely), no custom domains for free tier

- [now js docs](https://zeit.co/now#)

### Setup
- [Installl now desktop](https://zeit.co/desktop#)
- open up the now desktop app, and install the now binary (aka command line tool)

### package.json
Add the following fields to your `package.json` file:
- `now-build` this should contain a `webpack` command (you don't need to do a `webpack --watch`, you only need `--watch` during development) and any other build process commands you need
- `now-start` this should contain `node server.js` (similarly, you don't need `nodemon` during deployment)

### Build process
now will then basically download your code to one of its servers and create a virtual environment to mimic the `node` environment you have on your computer. it will then run the following commands:
- `npm install`
- `npm run now-build`
- `npm run now-start`

## heroku
heroku is also simple deployment software

pros: simple, custom domains on free tier
cons: free tier sleeps after 30 minutes of inactivity

- [heroku node.js docs](https://devcenter.heroku.com/categories/nodejs)

### setup
- [Heroku Sequelize Docs](http://docs.sequelizejs.com/en/1.7.0/articles/heroku/)
- download the heroku [command line interface](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- once installed, create a heroku account on [heroku.com](https://www.heroku.com/home)
- after you've created an account, login on your command line by running `heroku login`

### package.json
add the following to your package.json file:
- this will let Heroku know that you want to create a Node.js environment:
```js
"engines": {
  "node": "7.4.0"
}
```
- you can also add a `"heroku-postbuild"` field which will get run after `npm install`. Here you can add things like `webpack` or run `seed` files - basically anything you'd want to run before `npm start`


### server.js
In your `server.js` make the following changes:
- change you `app.listen` to include `process.env.PORT || 3000` (replace '3000' with whatever your port number is). You need to include `process.env.PORT` because Heroku uses this to dynamically assign a port number:
```js
app.listen(process.env.PORT || '9999', () => console.log('Listening on port 9999'));
```

### database setup
- Similarly, change your Sequelize database connection to the following:
```js
let sequelizeConnection = process.env.NODE_ENV === 'production' ? new Sequelize(process.env.DATABASE_URL) : new Sequelize('postgres://natemaddrey@localhost:5432/music-db');
```
- Then, from the command line run `heroku addons:add heroku-postgresql:hobby-dev`. This will create a new database instance for your deployed app.

### deployment
- to deploy your app, `cd` into your app's directory and run `heroku create`
- to deploy new code, run `git push heroku master`
- then open the URL that heroku gives you in your browser (it can sometimes take up to 30 minutes to go live)
