'use strict';

var expect = require('chai').expect;
var request = require('request');

var url = 'http://bluemix-devops-digital.eu-gb.mybluemix.net';
//var url = 'http://localhost:8000';

describe('GET /home', function() {
    it('expect website to be up ie 200', function(done) {
        request.get(url, function (err, data) {
            if (err) return done(err);
            //console.log(data.headers);
            expect(data.statusCode).to.equal(200);
            done();
        })
    });
    it('expect website have a body', function(done) {
        request.get(url, function (err, data) {
            if (err) return done(err);
            //console.log(data.headers);
            expect(data.body).to.exist;
            done();
        })
    });
    it('expect website to have content type html headers ', function(done) {
        request.get(url, function (err, data) {
            if (err) return done(err);
            expect(data.headers['content-type']).to.equal('text/html; charset=UTF-8');
            done();
        })
    });
});

describe('GET /some-non-existant-route', function() {
    it('expect website return 404', function(done) {
        request.get(url+'/some-non-existant-route', function (err, data) {
            if (err) return done(err);
            //console.log(data.headers);
            expect(data.statusCode).to.equal(404);
            done();
        })
    });
});

describe('GET /#/9', function() {
    it('expect website to contain newly added emails', function(done) {
        request.get(url+'/#/9', function (err, data) {
            if (err) return done(err);
            //console.log(data.headers);
            expect(data.body).to.contain('sam@uk.ibm.com');
            expect(data.body).to.contain('donal@uk.ibm.com');
            done();
        })
    });
});