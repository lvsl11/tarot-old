/********************************************************************
 * File name: cards.js
 * Date done: 16th April, 2020
 * Updated: 6th June, 2020
 * Author: Someone Else's name goes here
 * About this file: This file contains all the image locations of 
 * each tarot card, as well as other variables to support it
 *
*********************************************************************/

/* cards: keeps all directory location of the cards 
 * - s - directory seperator
 * - directoryPath 
 *   - directory of where all tarot images are stored, refer to 
 * - major - directory where the major arcana is stored
 * - wand/cups/swords/pents 
 *   - directory where each minor arcana suit is stored
 *
 */
let cards = {}; // this is just the start of the card "object"
cards.s = "/"; // eg: the / in 'major-webp-mid/your-file-goes-here.webp'

// same as any html directory listing. If you are familiar with how to 
// change directory (cd directoryName) in a command line prompt,  
// that's even better
// ../ is back one directory, eg "../thoth-tarot/image.jpg"
// ../../ is back two directories
// ./ is current directory
// / is root directory
// leaving it blank is current directory
cards.directoryPath = ""; 

// listing the location/directories of all the tarot images
cards.major = cards.directoryPath + "major-webp-mid" + cards.s; // major arcana
cards.wands = cards.directoryPath + "wands" + cards.s; 
cards.cups = cards.directoryPath + "cups" + cards.s; 
cards.swords = cards.directoryPath + "swords" + cards.s;
cards.pentacles = cards.directoryPath + "pents" + cards.s;


/* 
 * Functions you want to add goes here, when it comes to anything about the cards 
 * directly, when it comes to defining them.
 *
 * There is already one that I have added, as I am lazy when it comes to typing 
 * or cut-n-pasting the same css code every single time
 * 
 * - addButton() - adds a button onto the screen that links to the specified site
 * - sampleFunction() - adds a hyperlink onto the screen
 * - addInlineimage() - adds an inline image (square) that will scale with the text
 */
let tags = {
	p: "<p>",
	endp: "</p>"
};
let funcToAdd = {
	// addButton('url-goes-here', 'Full entry/anything else') 
	// - Note: This is not an actual <button> html tag. It just looks like a button, 
	//   and works like one
	addButton: function(url, buttonText) {
		let cssColors = "";
		let className = "";
		// default text for the button
		if (buttonText == undefined) buttonText = "Full entry";

		let css = "font-size:100%;border:3px solid #c6e2ff;border-radius:40px;" + 
			"padding:8px 20px 8px 20px;text-align:center;" + cssColors;

		return `<br><span style="${css}" class="${className}" onclick="window.open('${url}')"  ` + 
			`>${buttonText}</a></span>`;
	},

	// addInlineImage('image-url')
	// give the url of the image, then the image will scale with the text size without 
	// needing to worry about its fixed width, height, or even how big the image is
	addInlineImage: function(url, idName, noInvert, numOfSpaces) {
		if (noInvert == undefined) noInvert = false;
		if (idName == undefined) idName = 'inline-image';

		// return spaces and put them in the document. Number of spaces determine 
		// the width of the background image
		let setSpaces = function() {
			let oneSpace = '&nbsp;';
			let spaces = '';
			if (numOfSpaces == undefined || isNaN(numOfSpaces)) {
				numOfSpaces = 4;
			}
			for (let i = 0; i < numOfSpaces; i++) {
				spaces = spaces + oneSpace;
			}
			return spaces;
		} // return amount of spaces

		return `<style>
				#${idName} {
					display:inline;
					height:auto;
					background-size:100%;
					background-repeat:no-repeat;
					background-image:url('${url}');
					${!noInvert ? 'filter:invert(50%); ' : ''}
				}
				</style>` + 
				`<span id="${idName}">${setSpaces()}</span>`;
		// the below image does not expand/contract with the text. 
		// the mobile displayed the image very tiny as a result
		//`<img src="" width="15" height="15" style="display:inline;filter:invert(50%)"> `
	},

	// example: 
	// funcToAdd.sampleFunction(`javascript:alert('Sample alert');`, `Sample alert`, `_blank`) 
	// funcToAdd.sampleFunction(`javascript:alert('Sample alert');`, `Sample alert2`)
	addLink: function(url, linkText, target, color) {
		let css = `<style>
			#hyperlink {
				font-size:110%; 
				text-decoration:none; 
				color:${color};
			}
			#hyperlink:hover {
				text-decoration:underline;
			}
			</style>`;
				
		if (linkText == undefined) linkText = `Click here`;
		if (target == undefined) {
			target = ``;
		} else {
			target = `target="${target}"`;
		}
		
		return `${css}<a id="hyperlink" href="${url}" ${target}>${linkText}</a>`;
	}
	
};


/* 
 * Use: stores everything about the tarot images
 * How to use: 
 * 
 * let allCardItems = {
 * 	"Tarot name goes here": {
 *		"normal": directoryPath + "name of image", // your normal version of the card
 *		"inverted": directoryPath + "name of image", // altered/inverted form of the same card
 *		"description": `This card is about blah blah blah (html like hyperlinks, buttons, formatting etc can be used. like <br> for new line)`

 * 	}, // *****remember the comma!!!!!!!!!!!!*****

 *  "Second Tarot Name": {

 *  } // no comma for the last item
 *
 */
let items = {
	"Fool": {
		"normal":"https://lvslprogramming.files.wordpress.com/2023/10/fool.webp",
		"inverted": cards.major + "fool-invert.jpg",
		"description": `Every human or animal starts in this world without any concept as to what a perception is, 3D, distances etc. To think about it, just a little deeper, we either cannot remember how we precieved things at all before we became a human. Some might even say, that without a body, and a brain that gives us conscious, we will not be able to think at the first place.<br><br>` + 
			`Just as us standing in front of our surroundings that became part of our definitions of the world, when we are thrown into a world or place without that environment. All definitions will dissapear, as there is no longer anything out there that funds our existence. What we think as to who we are dissapears, just as how our perception dissapears too.<br><br>` + 
			`This is how and why The Fool is surrounded by things in the card, yet he knew nothing about them nor got any idea what the surroundings mean to him. Pretty much how we live our life blinded, yet thought we aren’t.<br><br>` + 
			funcToAdd.addButton("https://solidbackup.wordpress.com/2020/05/30/fool/")
			
	},
	"Magus/Magician": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/magus.webp",
		"inverted": cards.major + `magus-invert.jpg`,
		"description": `There is a practice nowadays that religions do not like, as a way to accumulate *real* knowledge, that people call it meditating. Through it, you travel to the Universe, with questions and confusions in mind, accept to challenge your old knowledge, that the “knowledge” of all-in-one unfit to any individual, are being challenged and broken down, for new knowledge to get through<br><br> The Magician is everything. The Magician contains everything. Creativity was always about malice. Anything that twists a certain lined-up concept hits people’s eyes as a result, and the magnificence of the Juggler (Mage) therefore, manifests in its true form in perfection<br><br>` + 
			funcToAdd.addButton("https://solidbackup.wordpress.com/2020/05/17/magician-magus-in-progress/")
	},
	"Priestess/High Priestess": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/priestess.webp",
		"inverted": cards.major + "priestess-invert.jpg",
		"description": `It seems in not-long ancient times, people associate the innate femine instinct that a human or even animals, to something that is godly and to be worshipped. This will in turn means that they worship the life-bringing ability that a female already has, and they treat every being being borned into the human world a deep blessing from the Gods.<br><br>` +
			`And perhaps that was why the figure mentioned in the card was called a Goddess. Something that while being a human instinct, a very mundane and onto-ground approach to what a person needs as a whole. This is where humans are given life and live in Earth, and fulfill spiritual desires by being at the moment.<br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/05/30/high-priestess/')

	},
	"Empress": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/empress.webp" ,
		"inverted": cards.major + "empress-invert.jpg",
		"description": `The Empress herself is a state of Mastery of the surrounding space, therefore, being able to use the world at its fullest and dominate the surroundings that she is in. And in a major way, a domination not by brute force, but rather by blending into her surroundings instead.<br><br>` + 
			`By doing so, that gives us power to cope with our physical and mainly challenges that comes from deep in who we are. This is the instinct that brings along with how we think, what we are doing and even why we make a certain decision. It is our Astral representation that we put in action, therefore penetrating what Nature is really about from the Astral, up to the mundane.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/05/31/empress/')

	},
	"Emperor": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/emperor.webp",
		"inverted": cards.major + "emperor-invert.jpg",
		"description": `There are two ways to conquer the world. One is to blend with the surroundings, and take advantage directly of what is around you, such as acknowledging and manipulating various forms of energy. Another way is to do that by brute force and change the environment to fit to ourselves.<br><br>` + 
			`The Emperor is about the later. He who overcomes the limitation and the uncontrollable part of his Instinct, makes him able to have the power to tame beasts and animals to submit to him. This also means that he can go beyond what his urge and his environment has to offer, and achieve feats that other animals nor humans can achieve. Therefore, he is the representation of the establishment of a government body, where his control is at the centre, and it is the centre that gives him power to bend any rules.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/01/emperor/')
	},
	"Hierophant": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/hierophant.webp",
		"inverted": cards.major + "hierophant-invert.jpg",
		"description": `Once something is deemed Superior and Divine, the type of Authority comes from it means that no old knowledge can be challenged. People within it had been wandering on and on to the same puddle they have formed either by themselves, or the Angel of Authority that supports such ideal. Mainly for their own interest only.<br><br>` +
			`One’s Fall is always the same. It is because they lose the ability to doubt and destroy. Something in their heart became petrified, and the stone became so hard that even touching it will open wounds that are deep within if there is any, and directly wound the person if there wasn’t at the first place. There is something to hold on that cannot be let go, and that can take the form of an <strong style="font-weight='900';text-decoration:underline;">established religion</strong>.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/02/hierophant/')
	},
	"Lovers": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/lovers.webp",
		"inverted": cards.major + "lovers-invert.jpg",
		"description": `The Real Almighty which many people simply called God, did not create life with the mind of being alone nor having life living alone. Therefore, the Universe is scattered with countless pieces of His Creations. This is part of what ${funcToAdd.addLink('https://miriadic.fandom.com/wiki/Solve_et_coagula', 'Solve et congula', '_blank', 'rgb(226, 94, 183)')} ${funcToAdd.addInlineImage('https://solidbackup.files.wordpress.com/2020/05/open-new-window-1.png', 'offsite-icon')} means — something like Him that has to be broken down to pieces in order to be able to build up something that is even greater and grander.<br><br>` + 
			`Love is life. Love promotes freedom. Love takes the form of everything that is going like a roller coaster that never stops, never fail to participate in life, and never cease in walking forward. With these, anyone can accept everything and anything and is always prone to everlasting change, making “ongoing-ness” becomes a reality – this stable reality will, in the Love of God and real life, will not die out. This is exactly why we call ongoing changes as “stable”, as the relationship between love and change will always remain the same.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/04/lovers/')
	},
	"Chariot": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/chariot.webp",
		"inverted": cards.major + "chariot-invert.jpg",
		"description": `The Chariot is a Master, but also a servant. You can say that he does serve under His Master too, but such description is far from accurate. Rather say, he serves his own purpose within his own existence, and he is the one who sets things in motion all on his own, therefore a strong existence of what willpower really is.<br><br>` + 
			`Under him are statues that represents the existence of what a lot of people would call the “ultimate Authority”, which in turn things they look up upon with both fear and reverence. They are the predators of the old times that had once ruled the world, and that does include the Human species themselves.<br><br>` + 
			`The purpose of goals in various ways requires more and more willpower. The purpose of a even Stronger goal requires even more willpower. It also means that the more willpower, the stronger the obstacles may be. Yet the more successful, more profound, and more major the achievement will come.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/05/chariot/')
	},
	"Adjustment/Justice": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/adjustment.webp",
		"inverted": cards.major + "adjustment-invert.jpg",
		"description": `Unless we have the ability to permanently freeze time, several Judgements *must* be passed within us and many conclusions have to be made. At the same time, this is also about life and nature in general. Freezing time is not an option to us nor to people with life, although in other parts of the Universe, dead and stable things do live in harmony. But that cannot at all be called living!<br><br>` + 
			`Once we link our thoughts and actions together, that ongoing process of how we grow up and correct our mistakes etc, is an act of the ancient word Justice, therefore the modern word Adjustment. There were never anyone in the card that Judges anybody.<br><br>` + 
			`You are your final Judge after all when it comes to Adjustment.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/05/adjustment-old-name-justice/')
	},
	"Hermit": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/hermit.webp",
		"inverted": cards.major + "hermit-invert.jpg",
		"description": `While people might have messages and internet posts, or even books they have written you can buy, anything that involves pondering and deep thinking must be done alone. However, the Hermit’s extent of reach does not only involve that, but also involves the extent of somebody being *truly* on their own. Otherwise, even with time alone at home studying, but at the same time being with other people at day time, that cannot be called truly alone.<br><br>` + 
			`Therefore not only the Hermit ponders and walk alone, but his mind *and* his thoughts are alone, free from the influences from people nor the crowd. He is truly a figure that not only thinks alone but lives alone, enablng him to be truly independent to the physical and spiritual influences that comes from a group. As a result, preventing himself and excluding himself from anything that distracts him to “go with the flow” of any type of group that others strive to find and belong.<br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/06/hermit/')
	},
	"Fortune (Wheel of Fortune)": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/fortune.webp",
		"inverted": cards.major + "fortune-invert.jpg",
		"description": `While this card is something as physical as dirt, this card, being numbered 10, has the meaning that has to do with its number. The Tree of Life goes from 1-10, with zero being *Nothingness* in short, and 10 being something that is completed. However, being in the middle of the Major Arcana Tarot Deck, this means that it can be looked as a transition from one stage to the other. When such transition happens, naturally, therefore, everything is possible. This card therefore is callled Fortune/Wheel of Fortune because such transition is impossible to pinpoint <strong style="text-decoration:underline">Astrally</strong> as to what will happen at all. This is not about finite possibility. It is about an *infinite* amount of possibilities, otherwise that won’t be called, random nor unpredictable.<br><br>` + 
			`This is a card with a *very* mundane nature, yet since the scene is happened in a place that is very Astral-like of who we are, even that who-we-will-be is not predictable. Anyone who is manifestating something that is the utmost inner to him/her will have no exception, but to face a thing that is common to every one of us – we call that Choice.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/07/fortune/')

	},
	"Lust (Strength)": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/lust.webp",
		"inverted": cards.major + "lust-invert.jpg",
		"description": `The very depth of simply Lust is almost like a deep hole of joy that even Crowley found it hard to comprehend. He knew what it is, but he cannot explain it concisely without using too much words and analogies in his Book of Thoth. But this is understandable, as the depth of Lust is like falling into a Rabbit hole. Once you have decided to chase the Rabbit to the point that you went into that hole, there is no turning back to the former.<br><br>` + 
			`Lust also shares a property that makes it a state of <strong style="text-decoration:underline">absolution</strong>. This is the property of something that is pure and raw. With such purity, can enable one to break through the chains being placed by the gods and the Divine and have the person finally able to obtain Free Will alone. The Leader of Lust is to give people the power to do the same as She did, and set an example on how one’s life can be lived the fullest and richest.<br><br>` + 
			`This state is also called the Order under Chaos.<br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/07/lust/')
	},
	"Hanged Man": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/hanged.webp",
		"inverted": cards.major + "hanged-invert.jpg",
		"description": `Alot of us has established Dogmas that we refuse to *Hang Them Up* and to give space to something new. Not even scientists nor researchers. This is, for example, consider how hard Eienstien tried to convince the public about his theory of relativity in front of the age-old Newton’s theory, that a lot of scientists treat with absolute faith that it cannot be wrong.<br><br>` + 
			`So from this point on, the card’s spiritual meaning means the challenge of new knowledge vs the old established dogma, especially at the part where two parts fight each other. In this case, specifically as The Hanged Man, the new knowledge won the battle. This knowledge is not only a great concern of one’s self,  but holds an inseparable part in us that hinders everything else that challenges it. <br><br>` + 
			`The purpose of The Hanged Man is specifically “Hang to Death” these scenarios that has become our Faith to let new Faith and new Life to come to play. When something new comes in, the old “knowledge” is then build up with the new one, resulting in what we call “using the new to accompany the old experience “, for the old becoming the past, and for the new to blossom.<br><br>` + 
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/08/hanged-man/')
	},
	"Death": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/death.webp" ,
		"inverted": cards.major + `death-invert.jpg`,
		"description": `To survive really is to embrace Death. This is the Death that comes from something that is completely expired and got no use anymore. This means that our every day life is full of such imagery, and many things that demonstrate such decay. This is what the Death card is about.<br><br>` + 
			`Death is something to be celebrated as the previous two cards done their job in igniting a new fire. Fire, as in flames that brings life and motivation, joy and anger. The Water Aspect of the card is something that is emphasised with the fluidy of the Mercury, where Mercury represents thoughts that actually Flow like a river. When a river stops flowing or polluted bey something foul, things in it eventually die out due to them excreting rubbish that they do not want such as toilet waste.<br><br>` + 
			`This means that <strong style="text-decoration:underline;">whatever used to function cannot function anymore</strong>, and they must be discarded as waste no matter who they are or what they were used to.<br><br>` +
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/06/09/death/`)
	},
	"Art/Temperance": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/art.webp",
		"inverted": cards.major + `art-invert.jpg`,
		"description": `Temperance, the original name of this card, here is more like an exchange of both state and materials. Both forces got both the ability to limit the other, as well as enriching each other. This is also why the exchange itself is rich in nature.<br><br>` + 
			`When each other give part to each other, a new flame is ignited. This flame is the flame of new life, bearing all available state like the rainbow of the sky, from firey, neutral, to calmness. Moreover, the rainhow alone, having seven colors, bears a meaning on its own. The meaning of the rainbow is different from any one color alone. But once combined in a random way, the lack of color will be taking place. It is the division of either white or black that gives life at the first place. This makes life itself, also having two distinct polars in nature, as in what we call, Nature.<br><br>` + 
			`The card, because of its mixing nature and its ability to create something alive from the inanimate, is called not the old name, but changed its name to Art. Something very distinct is produced when two originally "pure" something is mixed.<br><br>` + 
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/06/08/art-temperance/`)
	},
	"Devil": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/devil.webp",
		"inverted": cards.major + "devil-invert.jpg",
		"description": `Devil, is like when your mind sank to the Abyss, when everything breaks apart, when all the environments that are either real or fabricated dissolves, we expose ourselves into a high state that we got the most profound experience, free from every rule and bondages. This is also called the Highest Point of Magick. This can be, in shallow terms, be associated by the "high" when a priest in a church speaks to the public, an energy high of those who are influential can affect thousands of people at once, giving them a false sense of peace and comfort.<br><br>` + 
			`The Devil acts as a portal that destroys any existing barrier between the Creator and His Creation, including imposed dogmas and believes that exist within the world and deep in everyone's Heart. This kind of High and Relieve, therefore, exceeds any of those who came to implant false peaces, as it breaks that from the root and for all good. its Magickal High is not to be compared from the fakes that exist just about in every place and every religion. <br><br>` + 
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/06/08/devil/`)
	},
	"Tower": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/tower.webp",
		"inverted": cards.major + `tower-invert.jpg`,
		"description": `The Astral and the Physical lays the veil between the Astral Truth and the Mundane World, and the analogy is, that they should not intercept. When it does, the Astral Eye that falls into the physical world means that the barrier is thinned, and Truth about everything about our true goals in being Human, whether God exists or not, especially in the field of *religion*, is totally exposed. As a result, there goes some that resist it from spreading. Also, in real life, the Fallen Angels of the previous wars are closing by and are even trying to communicate with us, making the spiritual Astral barrier even thinner. And even more fake info roaming around — when these Being mess with the physical with established lifestyles, disaster happens.<br><br>` + 
			`Therefore in the card, the mouth is spitting bunches of Fire to burn down what they call “Falling Tower of Babel”, which means Men’s attempt to (NOT in the Bible interpretation!!!) <strong style="text-decoration:underline">devalue their Creator by creating one on their own.</strong> Such feat is doomed to fail miserably and with sheer pain and intense screams from Fallens who planned such feat, bringing humans that have fallen with them, totally torn apart from the physical to the spiritual. Note the shape of the human figures. (Yes. That part of the Bible is not interpreted correctly by the Christians)<br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/05/19/tower/')
	},
	"Star": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/star.webp" ,
		"inverted": cards.major + `star-invert.jpg`,
		"description": `When one set out the journey to the Earth, it is said that whatever they in the Astral wanted to put into, as either a proof, or just theories turning into concepts, are said to have huge possibilities. These possibilities are said to be anything that surpasses anything that souls have already died or are not allowed to reincarnate can do. This is not the direct power of hope. Instead, this is a a divine power of how much and how deep it can even offer.<br><br>` + 
			`At the same time, the blossom of the blood of life, as well as the inside bread and butter, is a promise that we’ve made with the Universe when we were given a life to live, be it in Astral or in Mundane. The Astral is a place where conceptual reality exists, and the Mundane is where it turns to Solid. When we move on from one stage to the other, we are going more and more closer to the Earth. This is, Earth as the Soil, as well as Earth as a planet, but the first one is more important than the second. This is because what we are talking here is a life that represents divinity, that flows like a river, from up from the Stars, to the grounds in the Earth, penetrating any soil on the ground for plants and animals to grow.<br><br>` + 
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/05/22/star/`)
	},
	"Moon": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/moon.webp",
		"inverted": cards.major + `moon-invert.jpg`,
		"description": ` The Wilds bite the hardest when it is in the middle of the night. The shadows of the most sinister creatures almost always appear when humans are in its weakest and most loneliest.<br><br>` + 
			`In the deepest of a forest of wandering lies a path to the forbidden realm. This is where every fear of humans as well as animals were hept. The Moon shines as a symbol of those who wandered too far from their partial fall along with the Fallens that possessed them, and a place where dark dreams are kept within. Once they entered that area are are let in, there is absolutely no turning back for that soul, and their bodies will be totally taken over by that Fallen.<br><br>` + 
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/05/28/moon/`)
	},
	"Sun": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/sun.webp",
		"inverted": cards.major + `sun-invert.jpg`,
		"description": `The common interpretation in here is relatively straightforward. This picture is the spiritual and victory being represented right in the Physical Realm, as the Earth is where the picture will be taking place. Or perhaps, sometimes, in the middle of the Universe. The Goddess of the Sun suspends in the middle of the sky, the centre where the Earth orbits along the track around the Sun, with each sunrise divided by the twelve zodiac. The zodiacs represents a specific period of the month, like what we commonly called, the four seasons – Spring, Summer, Autumn and Winter. Or say, date divided by a year’s orbit of the Earth around the Sun.<br><br>` +
			`Each sunrise marks the end of a certain period, as in in general terms, and also in common terms, marks a brand new day. This “brand new day” therefore is a beginning of something good. This is a fulfillment that is generally about every imagined victory being achieved after a lot of effort being put into conquering any obstacles. Which unfortunately, is something we cannot help to agree upon anyways. Despite that the sunrise happens every day in Earth, if we want a spiritual physical and mental renewal, we knew we have to <strong style="text-decoration:underline;">work for it.</strong><br><br>` + 
			funcToAdd.addButton(`https://solidbackup.wordpress.com/2020/05/28/sun/`)
	},
	"Aeon (old - Judgement)": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/aeon.webp",
		"inverted": cards.major + `aeon-invert.jpg`,
		"description": `Instead of us having a final Judge that will determine our actions in our past to be anything “suitable”. Rather, to the new era, the new Ruler of the Universe, which is a representation of such new and condensation of the old concept, is what should be put emphasis. All new things bear something outdated and unusable that we threw away. As a result of something that we do so, something completely new is borned from that.<br><br>` + 
			`This is the reborn of not only certain individual, and neither this is the final state of the Universe. This is the reborn of a new Universe, being represented by a figure called The Aeon. Each Aeon has exactly two sides, and that is what polarity is about – when a Wand points up, the other end points down. If you put power in both ends, the Force of it is something that can be reckoned, and that force is in its Fullness.<br><br>` +
			` It is also correct to day that such Truth is also a two ended Sword that both builds and destroy, but always for the better and grander.<br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/07/aeon-judgement/')
	},
	"Universe": {
		"normal": "https://lvslprogramming.files.wordpress.com/2023/10/universe.webp",
		"inverted": cards.major + `universe-invert.jpg`,
		"description": `Time has passed by. But does it at all matter how much time has passed by? When we look at our clocks, or maybe watches. It is all there solely for our convinient. It really does not mean much outside when it comes to principles like how we should live, our goals and aims as to why we exist, or maybe the color of the Ass of God His almighty.<br><br>` + 
			`Questions above do not decay, do not age, and are applicable for all ages, at all times, and in all levels, including the mundane and the spiritual alike. The question about “how you should live” became two distinctively different question when it applies to the Astral or the Mundane, as the idea of limitation is imposed in the physical whereas in the Astral, this does not really exist, and had never do so in the past nor will be so in the present.<br><br>` + 
			`Inside the limit weaved by the Universe, the Creation dances. Something that has both the power to create and be created. Things had matured to the point that things had truly be manifested, bringing the whole thing back to the start in a way reminds of the number Zero, which is The Fool. <br><br>` +
			funcToAdd.addButton('https://solidbackup.wordpress.com/2020/06/18/universe/')
	}

};


// for test purpose 
let itemsForTest = {
	"Ace of Wands": {
		normal: '../wands-webp-lossless/ace-of-wands.webp',
		description: 'Test description: Fire that thrust and demolishes to enlighten the new world'
	},
	
	"Two of Wands (dominion)": {
		normal: '../wands-webp-lossless/two-of-wands-dominion.webp',
		description: 'Test description: sample description that isn\'t ready'
	},
	"Three of wands (virtue)": {
		normal: '../wands-webp-lossless/three-of-wands-virtue.webp',
		description: 'Test description: sample description that isn\'t ready'
	},
	"Four of wands (completion)": {
		normal: '../wands-webp-lossless/four-of-wands-completion.webp',
		description: 'Test description: sample description that isn\'t ready'
	}

};
