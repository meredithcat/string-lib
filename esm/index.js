// Assign a new method to String.prototype
String.prototype.allCaps = function () {
    return this.toUpperCase();
};

const randomRange = (low, hi) => {
  return Math.floor(Math.random() * (hi - low)) + low;
};

export { randomRange };
