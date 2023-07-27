import Logger from 'bunyan';
import { BaseCache } from '@service/redis/base.cache';
import { config } from '@root.config';

const log: Logger = config.createLogger('redisConnection');

class RedisConnection extends BaseCache {
  constructor() {
    super('redisConnection');
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await this.client.ping();
    } catch (error) {
      log.error(error);
    }
  }
}

export const redisConnection: RedisConnection = new RedisConnection();
