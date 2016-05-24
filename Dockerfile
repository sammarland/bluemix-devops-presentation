FROM registry.eu-gb.bluemix.net/ibmnode:latest

RUN mkdir -p devops-site

COPY dist devops-site/

WORKDIR devops-site

RUN npm install --production

CMD node index.js

