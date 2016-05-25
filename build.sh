
export PATH=/opt/IBM/node-v4.2/bin:$PATH
export USE_CACHED_LAYERS=true

npm install
grunt package
cp Dockerfile dist 
cd dist

$$$$$$$$$$$$$$$$$$

