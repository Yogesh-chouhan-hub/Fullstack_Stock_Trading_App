require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { holdings, positions } = require("../Dashboard/src/data/data");
const app = express();
const PORT = process.env.PORT || 3010;
const uri = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      process.env.DASHBOARD_URL,
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected Successfully...!");
  })
  .catch((err) => {
    console.log(err);
  });

// async function reset() {
//   await HoldingModel.deleteMany({});
//   await PositionModel.deleteMany({});
//   await OrderModel.deleteMany({});
// }

// reset();

// app.get("/addHoldings", (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 4,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3120.5,
//       price: 3194.8,
//       net: "+2.38%",
//       day: "-0.25%",
//     },
//     {
//       name: "INFY",
//       qty: 5,
//       avg: 1490.75,
//       price: 1555.45,
//       net: "+4.34%",
//       day: "-1.60%",
//     },
//     {
//       name: "RELIANCE",
//       qty: 3,
//       avg: 2765.9,
//       price: 2898.75,
//       net: "+4.80%",
//       day: "+1.82%",
//     },
//     {
//       name: "SBIN",
//       qty: 8,
//       avg: 845.6,
//       price: 892.15,
//       net: "+5.50%",
//       day: "+2.18%",
//     },
//     {
//       name: "ITC",
//       qty: 10,
//       avg: 421.3,
//       price: 438.9,
//       net: "+4.18%",
//       day: "-0.48%",
//     },
//     {
//       name: "WIPRO",
//       qty: 6,
//       avg: 605.8,
//       price: 589.6,
//       net: "-2.67%",
//       day: "+1.24%",
//     },
//     {
//       name: "LT",
//       qty: 2,
//       avg: 3545.9,
//       price: 3689.25,
//       net: "+4.04%",
//       day: "+0.63%",
//     },
//     {
//       name: "MARUTI",
//       qty: 1,
//       avg: 12420.0,
//       price: 12875.4,
//       net: "+3.67%",
//       day: "+2.11%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("data saved success");
// });

// app.get("/addPositions", (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "TATASTEEL",
//       qty: 10,
//       avg: 162.45,
//       price: 165.8,
//       net: "+2.06%",
//       day: "+1.58%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "ONGC",
//       qty: 12,
//       avg: 118.2,
//       price: 116.8,
//       net: "-1.18%",
//       day: "-0.09%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "AXISBANK",
//       qty: 5,
//       avg: 1170.4,
//       price: 1185.3,
//       net: "+1.27%",
//       day: "+0.89%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "KPITTECH",
//       qty: 3,
//       avg: 252.15,
//       price: 266.45,
//       net: "+5.67%",
//       day: "+3.54%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "ASIANPAINT",
//       qty: 2,
//       avg: 3015.6,
//       price: 2986.75,
//       net: "-0.96%",
//       day: "-0.55%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "ICICIBANK",
//       qty: 6,
//       avg: 1205.2,
//       price: 1235.4,
//       net: "+2.51%",
//       day: "-0.72%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "HINDUNILVR",
//       qty: 2,
//       avg: 2455.8,
//       price: 2438.6,
//       net: "-0.70%",
//       day: "-0.33%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((items) => {
//     let newPosition = new PositionModel({
//       product: items.product,
//       name: items.name,
//       qty: items.qty,
//       avg: items.avg,
//       price: items.price,
//       net: items.net,
//       day: items.day,
//       isLoss: items.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("new position saved...!");
// });
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = req.body;

  try {
    // Save Order
    const order = new OrderModel(newOrder);
    await order.save();

    // Find existing holding
    const existHold = await HoldingModel.findOne({
      name: newOrder.name,
    });

    // ================= BUY =================

    if (newOrder.mode === "BUY") {
      if (existHold) {
        const totalQty = existHold.qty + newOrder.qty;

        const totalInvestment =
          existHold.qty * existHold.avg + newOrder.qty * newOrder.price;

        const newAvg = totalInvestment / totalQty;

        existHold.qty = totalQty;
        existHold.avg = newAvg;

        await existHold.save();
      } else {
        const holding = new HoldingModel({
          name: newOrder.name,
          qty: newOrder.qty,
          avg: newOrder.price,
          price: newOrder.price,
          net: "0.00%",
          day: "0.00%",
        });

        await holding.save();
      }

      return res.status(201).json({
        success: true,
        message: "Stock Purchased Successfully",
      });
    }

    // ================= SELL =================

    if (newOrder.mode === "SELL") {
      if (!existHold) {
        return res.status(404).json({
          success: false,
          message: "Stock not found in holdings.",
        });
      }

      if (existHold.qty < newOrder.qty) {
        return res.status(400).json({
          success: false,
          message: "Insufficient quantity to sell.",
        });
      }

      existHold.qty -= newOrder.qty;

      // If all shares sold, remove holding
      if (existHold.qty === 0) {
        await HoldingModel.deleteOne({ _id: existHold._id });
      } else {
        // Average price remains unchanged
        await existHold.save();
      }

      return res.status(201).json({
        success: true,
        message: "Stock Sold Successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid Order Type",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrderModel.find({});
    res.status(201).json(allOrders);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No orders found...!",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server listing on PORT " + PORT);
});
