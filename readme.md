# Sunlight Foundation Capital Words API Wrapper

A node.js wrapper around the [Sunlight Foundation](http://sunlightfoundation.com/)'s [Capital Words API](http://sunlightlabs.github.io/Capitol-Words/) that utilizes promises for easy chaining and asynchronous code.

## Installing

	npm install node-capitalwords

## Configuration

You will need a Sunlight Foundation API key to use the underlying API.  This can be obtained [here](http://services.sunlightlabs.com/accounts/register).

## Usage

	const CapitalWords = require('./capitalwords');

	const capitalWords = new CapitalWords('yourAPIKey');

	capitalWords.dates({ phrase: 'Sunlight Foundation' })
		.then(function(response) {
			console.log(response);
		})
		.catch(function(errorText) {
			console.log('Error: ', errorText);
		});

Check out the included examples.js for more examples

## License

MIT