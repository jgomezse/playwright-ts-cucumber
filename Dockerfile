FROM mcr.microsoft.com/playwright:v1.61.0-jammy

WORKDIR /app

RUN npm install -g pnpm

COPY . .

CMD ["pnpm", "run", "setup:test"]
