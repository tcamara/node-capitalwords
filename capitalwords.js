const request = require('request');
const querystring = require('querystring');

const _rootURI = 'http://capitolwords.org/api/1';
const keyRegistrationURL = 'http://services.sunlightlabs.com/accounts/register';

// Constructor, requires an API key to be passed in
const CapitalWords = module.exports = function(apiKey) {
    if(!apiKey) {
        throw new Error(`Missing required API Key, one can be obtained at ${keyRegistrationURL}`);
    }

    this.apiKey = apiKey;
};

// Finds the popularity of a phrase over a period of time
// Available arguments: http://sunlightlabs.github.io/Capitol-Words/#methods/phrase-time-series
CapitalWords.prototype.dates = function(payload) {
    return _request('dates.json', payload, this.apiKey);
};

// Lists the top phrases by a facet
// Available arguments: http://sunlightlabs.github.io/Capitol-Words/#methods/top-phrases-by-entity
CapitalWords.prototype.phrasesByEntity = function(payload) {
    return _request('phrases.json', payload, this.apiKey);
};

// Lists the top entities for a phrase
// Available arguments: http://sunlightlabs.github.io/Capitol-Words/#methods/top-entities-by-phrase
CapitalWords.prototype.entitiesByPhrase = function(payload) {
    return _request(`phrases/${payload.entity}.json`, payload, this.apiKey);
};

// Full-text search
// Available arguments: http://sunlightlabs.github.io/Capitol-Words/#methods/text-search
CapitalWords.prototype.text = function(payload) {
    return _request('text.json', payload, this.apiKey);
};

// Gets the full request URL and creates a promise object around the request to that URL
function _request(endpoint, payload, apiKey) {
    const fullURL = _buildFullURL(endpoint, payload, apiKey);

    return new Promise((resolve, reject) => {
        request(fullURL, (error, response, body) => {
            if(!error && response.statusCode === 200) {
                resolve(body);
            }
            else {
                reject(body);
            }
        });
    });
}

// Given the endpoint, the user's API key, and the requested parameters (payload), creates the 
// full URL to which the request should be made
function _buildFullURL(endpoint, payload, apiKey) {
    const params = Object.assign({}, { apikey: apiKey }, payload);

    const paramString = querystring.stringify(params);

    return _rootURI + '/' + endpoint + '?' + paramString;
}
