import config from '../config';
import drivers from './drivers';

const driverName = config.db.db_driver;
const driver = (drivers as any)[driverName];
export default driver();
