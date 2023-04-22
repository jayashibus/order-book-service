const OrderBook = require("../models/orderBook");
const Order = require("../models/order");
const Execution = require("../models/execution");

class OrderBookService {
  constructor() {
    this.orderBooks = new Map();
  }

  //open order
  openOrderBook(instrumentId) {
    if (this.orderBooks.has(instrumentId)) {
      throw new Error("Order book already exists for the given instrument id.");
    }
    const orderBook = new OrderBook(instrumentId);
    this.orderBooks.set(instrumentId, orderBook);
  }

  //close order
  closeOrderBook(instrumentId) {
    const orderBook = this.orderBooks.get(instrumentId);
    if (!orderBook) {
      throw new Error("Order book does not exist for the given instrument id.");
    }
    orderBook.close();
    this.orderBooks.delete(instrumentId);
  }

  //Add order
  addOrder(instrumentId, orderQuantity, entryDate, price) {
    const orderBook = this.orderBooks.get(instrumentId);
    if (!orderBook) {
      throw new Error("Order book does not exist for the given instrument id.");
    }
    const order = new Order(orderQuantity, entryDate, instrumentId, price);
    orderBook.addOrder(order);
  }

  //Execute order
  addExecution(instrumentId, quantity, price) {
    const orderBook = this.orderBooks.get(instrumentId);
    if (!orderBook) {
      throw new Error("Order book does not exist for the given instrument id.");
    }
    const execution = new Execution(quantity, price);
    orderBook.addExecution(execution);
  }
}

module.exports = OrderBookService;
