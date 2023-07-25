import { BaseCache } from "@service/redis/base.cache";

export class userCache extends BaseCache {
    constructor() {
        super('userCache');
    }
}