/**********************************************************************
 * File name: search.js
 * Current date: 16th April, 2020
 * Author: Someone else's name goes here
 * About this file: This file stores every card name so you can search, 
 * and draw cards. The class below includes both functions that you can 
 * use
 *
***********************************************************************/

/* 
 * For the purpose of picking a tarot, each name is assigned an array 
 * number that has nothing to do with the tarot-number eg 1 for mage, 
 * 0 for fool etc
 */
// make sure at the start of the script, every tarot is assigned 
// some kind of number. 

class Searcher {
	constructor(items) {
		this.itemNumber = [];
		let i = 0;
		for (let tarotName in items) {
			this.itemNumber.push(tarotName);
			//console.log("Searcher: " + `${tarotName}, ${this.itemNumber[i]}`);
			i++;
		}		
	}

	/* 
	 * startSearch() - do the searching and display the result onto the screen
	 * Arguments: 
	 * - txtArea - the text box where the input is entered
	 * - items - the object that contains all tarot items 
	 */
	startSearch(txtArea, items, displaySearchResult) {
		let searchValue = txtArea.value;
		searchValue = searchValue.trim(); // trim any leading/trailing space
		searchValue = searchValue.toLowerCase(); // turn all letters to lower case

		// capitalize the first letter of the search entered
		//let ch = searchValue.charAt(0).toUpperCase();
		//let chTheRest = searchValue.slice(1);
		//searchValue = ch + chTheRest;
		
		let printThis = {}; // the end result in its object form
		
		console.log(`startSearch() search item: ${searchValue}`);
		
		// start searching here
		for (let tarot in items) {
			let temp = tarot.toLowerCase();
			//console.log(temp);
			if (temp.includes(searchValue)) {
				console.log(`Search: ${searchValue}, Found: ${tarot}`);
				// use the value in 'tarot' variable as the key
				printThis[`${tarot}`] = items[tarot];
			}
		}
		
		// call to specified display function
		displaySearchResult(printThis);
	}
	

	// returns string values *only* for drawn cards
	drawCards(howMany, repeatSameCard) {
		if (howMany == undefined) howMany = 2;
		let currentResult = []; // result represented in int, directly from rng
		let finalResult = []; // result in string/card-name form
		let strForRepeat = " ";

		if (howMany > this.itemNumber.length) {
			alert("Hey there, unless you can repeat the same card more than once, you can" + 
				" only pick the max amount of cards in one deck");
			return null;
		}

		// start picking cards
		let i = 0;
		while(i < howMany) {
			// pick a random integer depending on amount of cards
			let pick = Math.random() * this.itemNumber.length;
			pick = parseInt(pick);

			if (this.isRepeatedCards(pick, currentResult) && !repeatSameCard) {
				// treat as if not picked anything, and prevent counter from incrementing
				continue; 
			}

			// from here on, either a different card is picked, or the same card is picked 
			// with repeatSameCard = true
			currentResult.push(pick); // insert the value anyways
			finalResult.push(this.itemNumber[pick]);

			// card successfully picked, increase count for card picked
			i++;
		} 
		return finalResult;
	}
	// helper function for drawCards
	// comparasion done for array number
	isRepeatedCards(pick, currentResult) {
		for (let i = 0; i < currentResult.length; i++) {
			if (pick == currentResult[i]) return true;
		}
		return false;
	}
}


