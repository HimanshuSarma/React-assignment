interface LRUCacheType {
  maxSize: number,
  cache: Map<string | number, any>,
  totalAdded: number,
  getLRUItem: Function,
  doesKeyExist: Function,
  get: Function,
  set: Function,
  delete: Function,
  getCacheSize: Function,
  sort: Function
};

class LRUCache {
  maxSize;
  cache;
  totalAdded = 0;
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  getLRUItem = function(this: LRUCacheType) {
    return this.cache.keys().next().value;
  };

  doesKeyExist = function(this: LRUCacheType, key: string | number) {
    return this.cache.has(key);
  };

  get = function(this: LRUCacheType, key: string) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return undefined;
  };

  set = function(this: LRUCacheType, key: string | number, value: any) {
    let evictedItem;
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      evictedItem = this.cache.keys().next().value;
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
    this.totalAdded++;
    return evictedItem;
  };

  delete = function(this: LRUCacheType, key: string | number) {
    this.cache.delete(key);
  };

  getCacheSize = function(this: LRUCacheType) {
    return this.cache.size;
  };

  sort = function(this: LRUCacheType, key: number, sortOrder: 'asc' | 'desc', sortCriteria: string) {
    this.cache.get(key).sort((a: any, b: any) => {
      if (sortOrder === 'asc') {
        if (a?.[sortCriteria] < b?.[sortCriteria]) {
          return -1;
        }

        if (a?.[sortCriteria] > b?.[sortCriteria]) {
          return 1;
        }

        return 0;
      } else {
        if (a?.[sortCriteria] < b?.[sortCriteria]) {
          return 1;
        }

        if (a?.[sortCriteria] > b?.[sortCriteria]) {
          return -1;
        }

        return 0;
      }
    });

    return this;
  }
}

export default LRUCache;
export type { LRUCacheType }
