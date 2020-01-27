import * as bodyParser from 'body-parser'
import * as bunyan from 'bunyan'
import * as bformat from 'bunyan-format'
import * as colors from 'colors'
import * as express from 'express'
import * as morgan from 'morgan'

// setup logger
const logger = bunyan.createLogger({
  name: 'server',
  stream: new bformat({ outputMode: 'short' }),
  namespace: 'app',
  level: 'info'
})

const app = express()

// parse body json data
app.use(bodyParser.json())

// use bunyan for express logs
app.use(
  morgan('dev', {
    stream: {
      write: logger.info.bind(logger)
    }
  })
)

const apiPort = 3010

// start the server
app.listen(apiPort, '0.0.0.0', (err: any) => {
  if (err) {
    logger.error('Error when starting the server.')

    if (err.stack) {
      logger.debug(err.stack)
    }

    return
  }

  logger.info(
    `Server is listening on ${colors.bold.underline(`0.0.0.0:${apiPort}`)}.`
  )
})
