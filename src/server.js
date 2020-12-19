import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
   next();
}
const router = express.Router();
router.get('/me', (req, res) => {
  res.send({message: 'this is from router me'})
})
app.use('/api', router)

app.get('/', log,  (req, res) => {
  res.send({name: "beautiful Pragya", age: 'sweet 29'});
});
app.post('/', (req, res) => {
  console.log('req', req.body);
  res.send({message: `message is: ${req.body.name}`});
})
app.get('/data/:id', (req, res) => {
  console.log('req.body', req.body);
  res.send({name: `${req.body} is response`})
})



export const start = () => {
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
}
