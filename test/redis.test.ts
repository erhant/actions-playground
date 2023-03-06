import {createClient} from 'redis';
import {globals} from '../jest.config.cjs';

describe('redis', () => {
  let client: ReturnType<typeof createClient>;

  const redisUrl = globals.__REDIS_URL__;
  const key = 'some-key';
  const value = (0x34322).toString();

  beforeAll(async () => {
    if (!redisUrl) {
      throw new Error('Redis URL not in env.');
    }

    client = createClient({
      url: redisUrl,
    });
    await client.connect();
  });

  it('should set a key', async () => {
    await client.SET(key, value);
  });

  it('should get a key', async () => {
    expect(await client.GET(key)).toEqual(value);
  });

  afterAll(async () => {
    await client.disconnect();
  });
});
