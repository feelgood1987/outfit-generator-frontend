FROM node:20-alpine
RUN npm install --location=global pnpm

WORKDIR /home/node
RUN chown -R node:node .
USER node

COPY pnpm-lock.yaml package.json ./
COPY . .
RUN pnpm install
CMD ["pnpm", "dev"]




# ENV SERVICE_NAME frontend

# COPY --chown=node:node ./ ./
# COPY package*.json ./
# COPY next.config.mjs ./

# RUN pnpm install 

# CMD [ "pnpm", "dev" ]
# CMD [ "pnpm", "run", "start" ]