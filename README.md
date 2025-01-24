This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Store images in cloudinary

> [!WARNING]
> Using next-cloudinary library to use their widget to upload images. Need a cloudinary account, also need several env vars.

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""  
NEXT_PUBLIC_CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_URL=""

Check ImageUpload.tsx component. Must to use the Preset name, you will need to create in cloudinary dashboard before use it
Example: uploadPreset="nextfastfood"

# Database POSTGRESQL on Render

Create POSTGRESQL database via render and use the env vars in your project
https://render.com/

ORM to manage DB is Prisma, check documentation
https://www.prisma.io/docs/orm/overview/databases/prisma-postgres

Generate migration

```
npx prisma migrate dev
```

DB UI app (free only in localhost)

```
npx prisma studio
```

Check Seeding Prisma doc for fill database registers. When you have the seed file (prisma/seed.ts) you can execute this command

```
npx prisma db seed
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
