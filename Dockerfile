FROM registry.eu-gb.bluemix.net/ibmnode:latest

RUN mkdir -p devops-site

COPY dist devops-site/

WORKDIR devops-site

RUN npm install --production

ENV NODE_ENV prod

EXPOSE 5000

CMD node index.js

