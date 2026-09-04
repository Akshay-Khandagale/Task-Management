import express from 'express'
import router from './routes/taskRoute.js'
import addUserRouter from './routes/addUserRoute.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public/css'));

app.get('/', (req, res) => {
    res.send("Hi every one..");
});

app.use('/api/assignTask', router);

app.use('/api/User', addUserRouter);

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
});