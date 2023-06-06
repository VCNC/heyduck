import config from '../config';
import { pathExists, createPath } from './utils';
import themeHandler from './themeHandler';

export default async () => {
  console.level(config.misc.log_level);
  console.debug('Loaded ENVs for boot:');
  console.debug('=====================');
  console.debug('db_driver:', config.db.db_driver);
  console.debug('themeName', config.theme.themeName);

  if (config.theme.path) {
    console.debug('themePath:', config.theme.themePath);
  } else {
    console.debug('themeUrl:', config.theme.url);
  }
  console.debug('=====================');
  await themeHandler();
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
