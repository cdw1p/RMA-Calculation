import ccxt from 'ccxt'
import RMA from './index.js'

/**
 * Fetch historical data
 */
const exchange = new ccxt.binance()
const symbol = 'BTC/USDT'
const timeframe = '4h'
const limit = 1000
const historicalData = await exchange.fetchOHLCV(symbol, timeframe, undefined, limit)

/**
 * Calculate RMA (Recursive Moving Average) values
 */
const length = 10 // Number of periods
const analyzer = new RMA(historicalData, length)
const results = analyzer.calculate()
console.log({ results })