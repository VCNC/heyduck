import config from '../config';
import { pathExists, createPath } from './utils';

export default async () => {
  console.debug('Loaded ENVs for boot:');
  console.debug('=====================');
  console.debug('db_driver:', config.db.db_driver);

  console.debug('=====================');
  // check if database is file
  if (config.db.db_driver === 'file') {
    console.info('Database driver is file');

    // Check if path exists
    if (!pathExists(config.db.db_path)) {
      console.debug('Database path does not exists');

      // Create path
      if (createPath(config.db.db_path)) {
        console.debug('Database path created', config.db.db_path);
      } else {
        // Better error handle here, try to recreate to some default folder ?
        throw new Error('Could not create database path');
      }
    }
  }
  return true;
};
