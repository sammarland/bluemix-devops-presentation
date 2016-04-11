var assert = require('assert');

var url = 'http://localhost:8000';
//var url = 'bluemix-devops-presentation.eu-gb.mybluemix.net';

describe('bluemix-devops-presentation app ', function() {
    it('should have the right title', function () {
        browser.url(url);
        var title = browser.getTitle();
        assert.equal(title, 'IBM Bluemix and DevOps Services');
    });
    //
    //it('should have sams email on the page', function () {
    //    browser.url(url);
    //    browser.getText('#email-sam*=sam').then(function(text) {
    //        console.log(text);
    //    });
    //});
    //
    //it('should have donals email on the page', function () {
    //    browser.url(url);
    //    browser.getText('#email-donal').then(function(text) {
    //        console.log(text);
    //        // outputs the following:
    //        // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"
    //    });
    //});
});