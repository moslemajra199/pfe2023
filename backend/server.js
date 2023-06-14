import express from 'express';
import colors from 'colors';
import cors from 'cors';
import 'express-async-errors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}...`
      .yellow.bold
  );
});
