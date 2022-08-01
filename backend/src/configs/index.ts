import 'dotenv/config';
import serverConfigs from './server.config';
import corsCofigs from './cors.config';
import typeormConfigs from './typeorm.config';

export = [serverConfigs, corsCofigs, typeormConfigs];
