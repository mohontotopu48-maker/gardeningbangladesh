# Hostinger Deployment Guide — Gardening Bangladesh

## Step 1: Create MySQL Database on Hostinger

1. Log in to **Hostinger hPanel**
2. Go to **Databases → MySQL Databases**
3. Create a new database:
   - Database name: `u123456789_gardening` (Hostinger format)
   - Username: `u123456789_gardening`
   - Password: (set a strong password)
4. Note the connection details:
   - **Host**: `127.0.0.1` or the provided hostname
   - **Port**: `3306`
   - **Database**: `u123456789_gardening`
   - **Username**: `u123456789_gardening`
   - **Password**: (your password)

## Step 2: Update Prisma Schema for MySQL

Edit `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

## Step 3: Set Environment Variables

In Hostinger File Manager or SSH, create `.env`:

```env
DATABASE_URL="mysql://USERNAME:PASSWORD@HOST:3306/DATABASE_NAME"
```

Example:
```env
DATABASE_URL="mysql://u123456789_gardening:YourPassword123@127.0.0.1:3306/u123456789_gardening"
```

## Step 4: Deploy & Initialize Database

```bash
# Install dependencies
bun install

# Generate Prisma client
bun run db:generate

# Push schema to MySQL database (creates tables)
bun run db:push

# Build the Next.js app
bun run build

# Start the production server
bun run start
```

## Step 5: Verify

- Visit your domain — the site should load
- Test: add product to cart → checkout → verify order in dashboard
- The database is now auto-connected via DATABASE_URL

## Auto-Connect Feature

The `src/lib/db.ts` file automatically:
- Detects the DATABASE_URL from environment
- Connects to whatever database type is configured (SQLite/MySQL/Postgres)
- Caches the Prisma client in development to prevent connection exhaustion
- Reduces logging in production for performance

## Alternative: Use as Next.js on Vercel

If deploying on Vercel instead of Hostinger:
1. Push code to GitHub
2. Import on Vercel
3. Set DATABASE_URL in Vercel env (use Vercel Postgres or Turso)
4. Change prisma provider to `postgresql` or `libsql`
5. Deploy

## Troubleshooting

- **Connection error**: Verify DATABASE_URL format and credentials
- **Schema mismatch**: Run `bun run db:push` after deploying
- **Tables not created**: Run `bun run db:push` on the server
- **Permission denied**: Ensure MySQL user has CREATE, INSERT, SELECT, UPDATE, DELETE permissions
