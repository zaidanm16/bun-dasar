import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.Console()],
});

logger.info("Goodbye World!");
logger.warn("Goodbye World!");
logger.error("Goodbye World!");
