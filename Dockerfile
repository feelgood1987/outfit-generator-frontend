FROM node:20-alpine
RUN npm install --location=global pnpm
WORKDIR /home/node
RUN chown -R node:node .
USER node

ENV SERVICE_NAME frontend

COPY --chown=node:node ./.next ./
COPY package*.json ./
COPY next.config.mjs ./

RUN pnpm install 

CMD ['ls']
CMD [ "pnpm", "dev" ]
# CMD [ "pnpm", "run", "start" ]