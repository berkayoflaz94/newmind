const { createLogger, format, transports } = require('winston')

const DailyRotateFile = require('winston-daily-rotate-file')

const logger = createLogger({
    level: 'info',
    format:format.combine(
        format.timestamp(),
        format.printf(({ timestamp,level,message }) => `${timestamp} ${level}: ${message}`)
    ),
    transports:[
        new transports.Console(),
        new DailyRotateFile({
            filename: 'application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive:true,
            maxSize:'20m'
        })
    ]
})

module.exports = logger