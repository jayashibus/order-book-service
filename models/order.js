class Order {
  constructor(orderQuantity, entryDate, instrumentId, price) {
    this.orderQuantity = orderQuantity;
    this.entryDate = entryDate;
    this.instrumentId = instrumentId;
    this.price = price;
  }
}

module.exports = Order;
