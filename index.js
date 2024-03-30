/**
 * Represents a RMA Calculation object.
 */
class RMA {
  constructor(data, length) {
    this.data = data
    this.length = length
  }

  /**
   * Calculates the RMA (Recursive Moving Average) values based on the data.
   * @returns {number[]} An array of RMA values.
   */
  calculate() {
    let sum = 0
    let rmaValues = []
    for (let i = 0; i < this.length; i++) {
      sum += parseFloat(this.data[i][4])
    }
    for (let i = this.length; i < this.data.length; i++) {
      const closePrice = parseFloat(this.data[i][4])
      sum = (sum * (this.length - 1) + closePrice) / this.length
      rmaValues.push(sum)
    }
    return rmaValues
  }
}

/**
 * Represents a RMA Calculation object.
 */
export default RMA