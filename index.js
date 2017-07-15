const App = require('actions-on-google).ApiAiApp;
exports.factsAboutGoogle = (request, response => {
	const app = new app({ request, response });
	function tellFact (app) {
	
	}
	const actionMap = new Map();
	actionMap.set('tell.fact', tellFact);
	app.handleRequest(actionMap);
	};
function tellFact (app) {
	let fact = DEFAULT_FACT;
	let factCategory =
		app.getArgument('fact-category');
	if (factCategory == 'history') {
		fact = getRandomHistroyFact();
		} else if (factCategory === 'headquarters') {
			fact = getRandomHQFact();
			}
	if(app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
		app.ask(app.buildRichResponse()
			.addSimpleResponse('Here\'s a fact for you. ' + fact + 
				' Which one do you want to hear about next, ' +
				' Google\'s history or headquarters')
			.addBasicCard(
				app.buildBasicCard(fact)
					.setImage(GOOGLE_IMG_SRC, IMG_ALT_TEXT)))
				.addSuggestions(['History', 'Headdquarters']));
	}	else	{
		app.ask('Here\'s a fact for you. ' + fact +
			' Which one do you want to hear about next, ' +
			' Google\'s history or headquarters');
			}
	}
