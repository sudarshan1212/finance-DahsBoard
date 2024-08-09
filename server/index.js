import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import chalk from "chalk";
import dbConnection from "./config/dbConnection.js";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";
// CONFIFURATIONS
dotenv.config();
dbConnection();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/*ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

const aquaBlue = chalk.hex("#00FFFF");

app.listen(port, () =>
  console.log(
    aquaBlue(`THE SERVER IS RUNNING ON: ${chalk.hex("#FFC0CB").bold(port)} !`)
  )
);
 