# IBM Bluemix and DevOps

This is a present was created for a welcome event for exc.io colleagues.

It's written in Reveal.js and can be run by using 

    node index.js
    

## To run this on Bluemix DevOps Services
1. Create a `build` stage on DevOps services. On the JOBS tab; set the Builder type to `Grunt` and use the following commands    
    `export PATH=/opt/IBM/node-v4.2/bin:$PATH`    
    `npm install`    
    `grunt package`    
    Set the Build Archive Directory to `dist` and save the config.

2. Create a `Deploy` stage. Set the Input Type to this phase as Build Artifacts. Select the `Build` stage. The template config for the deploy phase should be enough to deploy teh application

3. Create a `Test` stage. Again, the Input Type is is the build phase. For the Job type select test. Add the following cmds to the test block
    `npm install`     
    `npm run-script test-ci`    

    Enable test reporting and set the file pattern to `test/TEST-*.xml`    
