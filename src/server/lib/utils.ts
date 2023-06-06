import fs from 'fs';
import path from 'path';
import UserInterface from '../types/User.interface';

const root: string = path.normalize(`${__dirname}/../../`);
const themeRootPath = `${root}www/themes/`;
const defaultTheme = 'https://github.com/chralp/heyburrito-theme';

const time = () => {
  const start = new Date();
  const end = new Date();
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  return {
    start,
    end,
  };
};

const sort = (input: UserInterface[], sortType = 'desc'): UserInterface[] => {
  const sorted = input.sort((a, b) => {
    const aScore = a.score ?? 0;
    const aScoreInc = a.scoreinc ?? 0;
    const bScore = b.score ?? 0;
    const bScoreInc = b.scoreinc ?? 0;
    if (aScore) {
      if (sortType === 'desc') return bScore - aScore;
      return aScore - bScore;
    }
    if (sortType === 'desc') return bScoreInc - aScoreInc;
    return aScoreInc - bScoreInc;
  });
  return sorted;
};

const fixPath = (p: string): string => {
  if (!p.startsWith('/')) return `/${p}`;
  if (!p.endsWith('/')) return `${p}/`;
  return p;
};

const pathExists = (inPath: string): boolean => {
  try {
    console.debug('Checking if path exists', inPath);
    return fs.lstatSync(inPath).isDirectory();
  } catch (e) {
    return false;
  }
};

const createPath = (inPath: string): boolean => {
  try {
    console.debug(`Trying to create path ${inPath}`);
    fs.mkdirSync(inPath);
    const exists = pathExists(inPath);
    if (exists) return true;
    throw new Error('Neit');
  } catch (e) {
    console.debug(`Could not create path ${inPath}`);
    return false;
  }
};

const mustHave = (key: string): string => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
    return process.env[key]!;
  if (!process.env[key]) throw new Error(`Missing ENV ${key}`);
  return process.env[key]!;
};

const getThemeName = () => {
  if (process.env.THEME_PATH) {
    const themePath = process.env.THEME_PATH;
    const [themeName] = themePath.split('/').slice(-1);
    return themeName;
  }
  const theme = process.env.THEME_URL || defaultTheme;
  const [themeName] = theme.split('/').slice(-1);
  return themeName;
};

const getThemePath = () => {
  if (process.env.THEME_PATH) {
    const themePath = process.env.THEME_PATH;
    if (themePath.endsWith('/')) return themePath;
    return `${themePath}/`;
  }

  const themeName = getThemeName();
  return `${themeRootPath}${themeName}/`;
};

export {
  time,
  sort,
  mustHave,
  fixPath,
  pathExists,
  createPath,
  themeRootPath,
  defaultTheme,
  root,
  getThemePath,
  getThemeName,
};