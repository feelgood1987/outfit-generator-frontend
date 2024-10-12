FROM node:20-alpine
RUN npm install --location=global pnpm

WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm
COPY . .
RUN pnpm install
CMD ["pnpm", "dev"]

# WORKDIR /home/node
# RUN chown -R node:node .
# USER node

# ENV SERVICE_NAME frontend

# COPY --chown=node:node ./ ./
# COPY package*.json ./
# COPY next.config.mjs ./

# RUN pnpm install 

# CMD [ "pnpm", "dev" ]
# CMD [ "pnpm", "run", "start" ]