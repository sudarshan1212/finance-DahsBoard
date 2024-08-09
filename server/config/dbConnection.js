import mongoose from "mongoose";
import chalk from "chalk";
import KPI from "../models/KPI.js";
import { kpis, products, transactions } from "../data/data.js";
import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";
const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });

    const chocolate = chalk.hex("#c66b27");
    const almond = chalk.hex("#efdecd");

    console.log(
      chocolate(
        chalk.bold("CONNECTION:"),
        almond(
          chalk.bold(mongoose.connection.name.toUpperCase()),
          mongoose.connection.host
        )
      )
    );
    /*ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  } catch (error) {
    process.exit(1);
    console.log(chocolate(chalk.bold("CONNECTION FAILED")));
  }
};

export default dbConnection;
