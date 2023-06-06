import * as fs from 'fs';

import { spawn } from 'child_process';
import config from '../config';

const THEMES_AVAILABLE: any = [];
let times = 0;

async function gitFunc(args, cwd: string) {
  const [option, url] = args;

  if (option === 'clone') console.info('Cloning theme:', url);
  if (option === 'pull') console.info('Pulling latest theme:', url);

  return new Promise((resolve, reject) => {
    const process = spawn('git', args, { cwd });
    process.on('close', (status: any) => {
      if (status === 0) {
        resolve(true);
      } else {
        reject(status);
      }
    });
  });
}

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

const recursive = async (args, cwd) => {
  times += 1;
  try {
    await gitFunc(args, cwd);
    return true;
  } catch (error) {
    if (times < 5) {
      await sleep();
      await recursive(args, cwd);
    } else {
      throw error;
    }
  }
  return true;
};

async function git(args, cwd: string = config.theme.root) {
  return recursive(args, cwd);
}

async function checkThemePath() {
  fs.readdirSync(config.theme.root).forEach((file: string) => {
    const isDir = fs.lstatSync(`${config.theme.root}${file}`).isDirectory();
    if (isDir) {
      THEMES_AVAILABLE.push({
        name: file,
        path: `${config.theme.root}${file}`,
      });
    }
  });
}

export default async () => {
  checkThemePath();

  const theme = config.theme.url;
  const [themeName] = theme.split('/').slice(-1);
  const [themeExists] = THEMES_AVAILABLE.filter((x) => x.name === themeName);

  if (config.theme.path) {
    console.info('Loading theme from disk');
    console.info('Theme:', config.theme.path);
  }

  if (!config.theme.path) {
    if (themeExists) {
      console.info('Theme exist on disk');
      console.info('Theme:', theme);
      if (config.theme.latest) {
        console.info('Get latest = true');
        try {
          await git(['pull'], themeExists.path);
          console.info('Latest theme pulled');
          return true;
        } catch (err) {
          console.warn('Could not pull latest, error code:', err);
        }
      }
    } else {
      console.info('Theme does not exist on disk');
      console.info('Theme:', theme);
      try {
        await git(['clone', theme]);
        console.info('Theme cloned');
        return true;
      } catch (err) {
        console.warn('Could not clone theme, error code:', err);
        console.warn('Theme:', theme);
        return true;
      }
    }
  }
  return true;
};
