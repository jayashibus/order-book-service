const OrderBook = require("../models/orderBook");

// Test case 1: Test the openOrderBook() method
test("Open Order Book", () => {
  const orderBook = new OrderBook("instrument1");
  orderBook.open();
  expect(orderBook.isOpen).toBe(true);
});

// Test case 2: Test the closeOrderBook() method
test("Close Order Book", () => {
  const orderBook = new OrderBook("instrument1");
  orderBook.close();
  expect(orderBook.isOpen).toBe(false);
});

// Test case 5: Test the addExecution() method
test("Add Execution", () => {
  const orderBook = new OrderBook("instrument1");
  const execution = { quantity: 5, price: 110 };
  orderBook.addExecution(execution);
  expect(orderBook.executions.length).toBe(1);
});
