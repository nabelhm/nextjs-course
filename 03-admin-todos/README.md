# Development
Pasos para levantar la app en desarrollo


1. Levantar la base de datos
```
docker compose up -d
```

2. Renombrar .env.template a .env
3. Reemplazar variables de entorno

# Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```