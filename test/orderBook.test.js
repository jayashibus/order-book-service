// orderBook.test.js

const OrderBook = require("./orderBook");

describe("OrderBook", () => {
  let orderBook;

  beforeEach(() => {
    orderBook = new OrderBook("AAPL");
  });

  afterEach(() => {
    orderBook = null;
  });

  test("should open an order book", () => {
    orderBook.openOrderBook();
    expect(orderBook.isOpen).toBe(true);
  });

  test("should close an order book", () => {
    orderBook.openOrderBook();
    orderBook.closeOrderBook();
    expect(orderBook.isOpen).toBe(false);
  });

  test("should add a market order", () => {
    orderBook.openOrderBook();
    orderBook.addOrder({ type: "market", quantity: 10 });
    expect(orderBook.orders.length).toBe(1);
  });

  test("should add a limit order", () => {
    orderBook.openOrderBook();
    orderBook.addOrder({ type: "limit", quantity: 10, price: 100 });
    expect(orderBook.orders.length).toBe(1);
  });

  test("should add an execution", () => {
    orderBook.openOrderBook();
    orderBook.addExecution({ quantity: 5, price: 110 });
    expect(orderBook.executions.length).toBe(1);
  });

  test("should not add an order to a closed order book", () => {
    orderBook.closeOrderBook();
    expect(() => {
      orderBook.addOrder({ type: "market", quantity: 10 });
    }).toThrow("Order book is closed");
  });

  test("should not add an execution to an open order book", () => {
    expect(() => {
      orderBook.addExecution({ quantity: 5, price: 110 });
    }).toThrow("No executions allowed in open order book");
  });
});
