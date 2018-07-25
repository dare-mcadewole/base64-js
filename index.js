import { createLogger } from 'logger'
import Base64 from './base64'
const logger = createLogger()

logger.log(Base64.encode('fellowship'))

export default Base64
