class ParkingLot {
  constructor(size) {
    this.slots = new Array(size).fill(null);
  }

  park(carId) {
    const nextAvailable = this.slots.indexOf(null);
    if (nextAvailable === -1) return false;

    //Else
    this.slots[nextAvailable] = carId;
    return true;
  }

  unpark(carId) {
    const toUnpark = this.slots.indexOf(carId);
    if (toUnpark === -1) return false;

    // Else
    this.slots[toUnpark] = null;
    return true;
  }

  getSlots() {
    return this.slots;
  }
}