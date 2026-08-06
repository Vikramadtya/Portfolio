import { Redis } from "@upstash/redis";

// This expects VERCEL_KV_REST_API_URL and VERCEL_KV_REST_API_TOKEN in .env
// If they are missing (e.g. locally before setup), we create a mock redis to prevent crashes
const isRedisConfigured = process.env.VERCEL_KV_REST_API_URL && process.env.VERCEL_KV_REST_API_TOKEN;

export const redis = isRedisConfigured
  ? new Redis({
      url: process.env.VERCEL_KV_REST_API_URL,
      token: process.env.VERCEL_KV_REST_API_TOKEN,
    })
  : {
      get: async () => 0,
      incr: async () => 0,
      lpush: async () => 0,
      lrange: async () => [],
    };
