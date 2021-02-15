module.exports = {
  totalPrice(parent) {
    if(parent.discount) {
      return parent.price * (1 - parent.discount);
    } else {
      return parent.price;
    }
  }
};
