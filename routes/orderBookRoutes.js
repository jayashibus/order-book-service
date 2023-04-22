const express = require("express");
const OrderBookService = require("../controller/orderBookService");

const router = express.Router();
const orderBookService = new OrderBookService();

// Open order book. IntrunmentID is 1 or Any other string can provided
router.post("/:instrumentId/open", (req, res) => {
  const instrumentId = req.params.instrumentId;
  try {
    orderBookService.openOrderBook(instrumentId);
    res.status(200).json({ message: "Order book opened successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Close order book
router.post("/:instrumentId/close", (req, res) => {
  const instrumentId = req.params.instrumentId;
  try {
    orderBookService.closeOrderBook(instrumentId);
    res.status(200).json({ message: "Order book closed successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add order
router.post("/:instrumentId/orders", (req, res) => {
  const instrumentId = req.params.instrumentId;
  const orderQuantity = req.body.orderQuantity;
  const entryDate = req.body.entryDate;
  const price = req.body.price;
  try {
    orderBookService.addOrder(instrumentId, orderQuantity, entryDate, price);
    res.status(200).json({ message: "Order added successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add execution
router.post("/:instrumentId/executions", (req, res) => {
  const instrumentId = req.params.instrumentId;
  const quantity = req.body.quantity;
  const price = req.body.price;
  try {
    orderBookService.addExecution(instrumentId, quantity, price);
    res.status(200).json({ message: "Execution added successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
