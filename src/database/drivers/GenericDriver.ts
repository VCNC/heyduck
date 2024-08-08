import Store from './Store';
import Driver from './Driver';
import Score from '../../types/Score.interface';
import { today } from '../../lib/utils';

function id() {
  // Cred => https://gist.github.com/gordonbrander/2230317
  const str: string = Math.random().toString(36).substr(2, 9);
  return `_${str}`;
}

interface Find {
  _id: string;
  to: string;
  from: string;
  value: number;
  given_at: Date;
}

interface Sum {
  _id?: string; // Username
  score?: number;
}

class GenericDriver extends Store implements Driver {
  constructor(public driver: string) {
    super(driver);
  }

  async give(to: string, from: string, date: any): Promise<any> {
    const score: Score = {
      _id: id(),
      to,
      from,
      value: 1,
      given_at: date,
    };
    await this.storeData(score);
    return Promise.resolve(true);
  }

  async takeAway(to: string, from: string, date: any): Promise<any> {
    const score: Score = {
      _id: id(),
      to,
      from,
      value: -1,
      given_at: date,
    };
    await this.storeData(score);
    return Promise.resolve(true);
  }

  async getScore(user: string, listType: string, num = false): Promise<number | Find[]> {
    this.syncData();
    const data: any = await this.getData();
    const filteredData = data.filter((item: any) => item[listType] === user);
    if (num) {
      const score: number = filteredData.reduce((a: number, item: any) => a + item.value, 0);
      return Promise.resolve(score);
    }
    return Promise.resolve(filteredData);
  }

  async findFromToday(user: string, listType: string): Promise<Find[]> {
    this.syncData();
    const data: any = await this.getData();
    const filteredData = data
      .filter((item) => {
        if (
          item[listType] === user &&
          item.given_at.getTime() < today().end.getTime() &&
          item.given_at.getTime() > today().start.getTime()
        ) {
          return item;
        }
        return undefined;
      })
      .filter((y) => y);
    return filteredData;
  }

  async getScoreBoard({ user, listType, isToday }): Promise<Sum[]> {
    this.syncData();
    const data: any = await this.getData();

    let listTypeSwitch: string;
    if (user) {
      listTypeSwitch = listType === 'from' ? 'to' : 'from';
    } else {
      listTypeSwitch = listType;
    }
    const selected = data
      .filter((item: any) => {
        if (isToday) {
          if (item.given_at.getTime() < today().end.getTime() && item.given_at.getTime() > today().start.getTime()) {
            if (user) {
              if (item[listTypeSwitch] === user) return item;
            } else {
              return item;
            }
          }
        } else if (user) {
          if (item[listTypeSwitch] === user) return item;
        } else {
          return item;
        }
        return undefined;
      })
      .filter((y: any) => y);
    return selected;
  }

  async getMonthlyScoreBoard({ user, listType, month, year }): Promise<Sum[]> {
    this.syncData();
    const data: any = await this.getData();

    let listTypeSwitch: string;
    if (user) {
      listTypeSwitch = listType === 'from' ? 'to' : 'from';
    } else {
      listTypeSwitch = listType;
    }
    const selected = data
      .filter((item: any) => {
        if (item.given_at.getMonth() + 1 == month && item.given_at.getFullYear() == year) {
          if (user) {
            if (item[listType] === user) return item;
          } else {
            return item;
          }
        }
        return undefined;
      })
      .filter((y: any) => y);
    return selected;
  }
}

export default GenericDriver;
