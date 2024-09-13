import express from 'express';
import { client, port } from '../config/enviroment.js';
import mailRouter from './mail/mail.routes.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  exposedHeaders: 'Content-Type, Auth-Token, Content-Length',
  origin: client ?? '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite estos métodos
  credentials: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use('/', mailRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});