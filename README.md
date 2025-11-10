# E-commerce Next.js App

A modern e-commerce application built with Next.js, TypeScript, TailwindCSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand.

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ ESLint
- ✅ TailwindCSS
- ✅ Better Auth for authentication
- ✅ Neon PostgreSQL database
- ✅ Drizzle ORM for database queries
- ✅ Zustand for state management
- ✅ Products table with sample Nike items

## Prerequisites

- Node.js 18+ installed
- A Neon PostgreSQL database (sign up at [neon.tech](https://neon.tech))

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
```

**Getting your Neon Database URL:**
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from the dashboard
4. Paste it as `DATABASE_URL` in your `.env.local` file

**Generating BETTER_AUTH_SECRET:**
You can generate a secure secret using:
```bash
openssl rand -base64 32
```

### 3. Set Up the Database

Generate and push the database schema:

```bash
npm run db:generate
npm run db:push
```

### 4. Seed the Database

Populate the database with sample Nike products:

```bash
npm run seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the products.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run seed` - Seed database with sample products

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/[...all]/route.ts  # Better Auth API routes
│   │   └── products/route.ts       # Products API endpoint
│   ├── page.tsx                     # Homepage with products
│   └── layout.tsx                   # Root layout
├── lib/
│   ├── db/
│   │   ├── index.ts                 # Database connection
│   │   ├── schema.ts                # Drizzle schema definitions
│   │   └── seed.ts                  # Database seed script
│   ├── auth.ts                      # Better Auth configuration
│   └── store.ts                     # Zustand store
├── drizzle.config.ts                # Drizzle configuration
└── .env.local                       # Environment variables (create this)
```

## Database Schema

The `products` table includes:
- `id` (text, primary key)
- `name` (text)
- `description` (text, optional)
- `price` (decimal)
- `imageUrl` (text, optional)
- `brand` (text)
- `category` (text, optional)
- `stock` (integer)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Better Auth** - Authentication
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Drizzle ORM** - TypeScript ORM
- **Zustand** - State management

## Next Steps

- Set up Better Auth tables (run migrations)
- Implement user authentication flows
- Add product detail pages
- Implement shopping cart functionality
- Add search and filtering
- Set up payment processing
