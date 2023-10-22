/* 
	 * openImage() - display the image the user wants directly on the webpage 
	 * without needing to refresh nor reload the webpage, but note the image
	 * itself will take some time to load
	 *
	 * Arguments: 
	 * - imageUrl-- the path of the image to be displayed
	 * - size-- 3 is large, 2 is medium, 1 is small, null to specify on
	 *   your own via css, or go with the original width and height of 
	 *   whatever its original width and height is
	 * - default width and height is 180x277
	 * - css - custom css or "brighter" for increased brightness
	 *   if this is not your option, you can type your own css instead
	 * - isTesting - set it to true if you want the image output code to
	 *   be returned, so that you can output it directly in the console.
	 *   Otherwise this one is optional and is not needed
	 */

	function openImage(imageUrl, size, css, returnHtmlValue) {
		// default width if no valid size is given
		// width / height ~ 0.65
		let width = 180; 
		let height = 277;
		
		// -- The below is only some default you can set. If you don't want you can just 
		//    specify any css on your own, which I did so anyways.		
		// add brightness when "brighter" is typed into the custom css
		//if (css == "brighter") css = "filter:brightness(138%) grayscale(10%);border-radius:13px;";
		// if inverted, the image will appear "darker"
		//if (css == "darker") css = "filter:brightness(120%) grayscale(27%);border-radius:13px;";
		//if (css == "invert-picture") css = "filter:brightness(120%) grayscale(27%) invert(100%);";
		// the option to leave it blank (undefined), or null if you want to 
		// not use css at all
		if (css == undefined || css == null) css = "";

		// if you want to try using css to specify the width/height, set 
		// size to null
		if (size == null) {width = ""; height = "";}

		// adjust width of the same image and therefore the height as well
		if (size == 3) {width = 600; height = 924;} // large 
		if (size == 2) {width = 400; height = 615;} // medium
		if (size == 1) {width = 250; height = 385;} // small

		let returnResult = `<image src="${imageUrl}" width="${width}" height="${height}"` +
			` style="${css}">`;

		// directly plug that into the id element specified in this document
		if (!returnHtmlValue) cardToDisplay.innerHTML = returnResult;

		// for testing purpose, you can type document.write(openImage(your-arguments))
		// - to do so, make sure isTesting is set to true
		// - eg: document.write(openImage(imageUrl, null, yourOwnCss, true))
		// in the console to test out the css you've used or specified
		if(returnHtmlValue) return returnResult;
	}