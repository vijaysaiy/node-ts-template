import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        logger.debug('debug log', {});
        app.listen(PORT, () =>
            logger.info('Auth service started and listening at port ' + PORT),
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error('Error starting Auth service:', error.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};

startServer();
