import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Auto-detect database environment:
// - Local dev: SQLite (file:./db/custom.db)
// - Hostinger: MySQL (mysql://...)
// - Vercel: Postgres/Turso (postgresql://... | libsql://...)
// Just set DATABASE_URL in .env / Hostinger environment variables

const logLevel = process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn']

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: logLevel as any,
  })

// Cache Prisma client globally in development to prevent hot-reload connection exhaustion
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
