/*
 *
 *
 *
 *
 */
'use strict';

const fs = require('fs');
const request = require('request-promise-native');

class Cacher {

	constructor(url, filename) {
		this.url = url;
		this.filename = filename;
	}

	fetch() {
		console.log(`Saving ${this.url} to ${this.filename}`)
		return request({
			uri:this.url,
			json: true
		})
		.then(body => {
			fs.writeFile(this.filename, JSON.stringify(body), (err) => {
				if (err) throw err;
				console.log("File saved.");
			})
		})
		.catch((err) => {
			console.log("Request error", err);
		})
	}

}

module.exports = Cacher;