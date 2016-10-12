const CapitalWords = require('./capitalwords');

// Put in your API key here
// If you don't have one, get one from http://services.sunlightlabs.com/accounts/register
const yourAPIKey = 'your_api_key_should_go_here';

const capitalWords = new CapitalWords(yourAPIKey);


// Find the popularity of the phrase 'Sunlight Foundation' over time
capitalWords.dates({ phrase: 'Sunlight Foundation' })
	.then(function(response) {
		console.log(response);
	})
	.catch(function(errorText) {
		console.log('Error: ', errorText);
	});


// Find the top phrases for the state of California, sorted by count descending
capitalWords.phrasesByEntity({ 
	entity_type: 'state',
	entity_value: 'CA',
	sort: 'count desc'
})
	.then(function(response) {
		console.log(response);
	})
	.catch(function(errorText) {
		console.log('Error: ', errorText);
	});


// Find the second page of top states for the phrase 'America'
capitalWords.entitiesByPhrase({ 
	entity: 'state',
	phrase: 'America',
	page: 2,
	per_page: 25
})
	.then(function(response) {
		console.log(response);
	})
	.catch(function(errorText) {
		console.log('Error: ', errorText);
	});


// Do a full-text search for all mentions of the phrase 'Sunlight Foundation' by Republican senators
capitalWords.text({ 
	phrase: 'Sunlight Foundation',
	party: 'R',
	chamber: 'senate'
})
	.then(function(response) {
		console.log(response);
	})
	.catch(function(errorText) {
		console.log('Error: ', errorText);
	});
