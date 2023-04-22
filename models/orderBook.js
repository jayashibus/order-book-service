class OrderBook {
  constructor(instrumentId) {
    this.instrumentId = instrumentId;
    this.orders = [];
    this.executions = [];
    this.isOpen = false;
  }

  //Open order
  open() {
    this.isOpen = true;
  }

  //close order
  close() {
    this.isOpen = false;
  }

  //Add Order
  addOrder(order) {
    if (!this.isOpen) {
      throw new Error("Order book is closed. Cannot add orders.");
    }
    this.orders.push(order);
  }

  //Execution
  addExecution(execution) {
    if (this.isOpen) {
      throw new Error("Order book is open. Cannot add executions.");
    }
    this.executions.push(execution);
  }
}

module.exports = OrderBook;
