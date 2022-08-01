import 'dotenv/config';

import serverConfigs from './server.config';
import typeormConfigs from './typeorm.config';

export const configs = [serverConfigs, typeormConfigs];
