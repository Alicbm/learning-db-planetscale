import express from 'express'
import db from './config/db.js'
import indexRouter from './routes/index.route.js';

const app = express();
app.set('port', process.env.PORT || 3000)

//middleware
app.use(express.json())

app.use("/", indexRouter)
app.use("*", (req, res) => {
  res.send("This route doesn't exist")
})

app.listen(app.get('port'), () => console.log("server is running on port", app.get('port')))

db.connect().then(() => {
  console.log('connected to database')
}).catch((err) => {
  console.log("ERROR" + err)
})