//ha valamelyik toredeket mar tartalmazza akkor nem adja hozza a linket
var linkToredekek = ['e-a-rubix',
'ube3x',
'xtfa',
'VeeFwwAz7n',
'biks-cu'
];

var linkOpciokENG = ['<p>Convert <a href="https://textfancy.com/">text to unicode characters</a> and create fancy styles in your documents.</p>','<p>Convert <a href="https://textfancy.com/">text to unicode characters</a> and create fancy styles in your documents.</p>','<p>The online <a href="https://textfancy.com/">FancyText generator</a> will make your words stand out when posting on social media.</p>','<p>The <a href="https://textfancy.com/">fancy text generator</a> will make your words stand out when posting on social media.</p>','<p>Visit <a href="https://textfancy.com/">TextFancy.com</a> to make your strings more stylish. Pick emojis and other characters, generate ascii art and more.</p>','<p><a href="https://textfancy.com/">textfancy.com</a> makes your text more stylish. Pick emojis and other characters, generate ascii art and more.</p>','<p>Browse the <a href="https://textfancy.com/">fancy text converter</a> collection to highlight what is important in your documents.</p>','<p>Browse <a href="https://textfancy.com/">the fancy text converter</a> collection to highlight what is important in your documents.</p>','<p>Create <a href="https://textfancy.com/">bold facebook comments</a> with TextFancy.com, convert and browse unicode characters. Generate ascii art and play with text.</p>','<p>Learn <a href="https://textfancy.com/">how to write bold Facebook comments</a>. TextFancy makes this task and other text conversions really simple.</p>','<p>Browse the <a href="https://textfancy.com/emoji/">emoji picker</a> to find the best characters easily. Sort by category or search by name.</p>','<p>The <a href="https://textfancy.com/emoji/">best emoji picker</a> will help you add small colored character images to your text.</p>','<p>Search <a href="https://textfancy.com/emoji/">emojis</a> and add them to your documents. Copy paste them as normal text characters.</p>','<p>Look for <a href="https://textfancy.com/emoji/">emojis or emoticons</a> in the online gallery and express yourself in a more fancy way.</p>','<p><a href="https://textfancy.com/text-faces/">Text faces</a> are small strings of characters that can describe emotions and make your text stand out. Browse them in the gallery.</p>','<p><a href="https://textfancy.com/text-faces/">Lenny faces</a> are short character strings that describe emotions and make your text stand out.</p>','<p><a href="https://textfancy.com/text-faces/">Text faces or Lenny faces</a> describe emotions just like emojis. Browse these unicode character strings in the gallery.</p>','<p><a href="https://textfancy.com/ascii-art/">Ascii art</a> is not a thing of the past. You can use them to describe emotions and to create drawings using characters.</p>','<p>The <a href="https://textfancy.com/ascii-art/">online ascii art generator</a> can convert text to multiline text boxes. Try it now.</p>','<p>The online <a href="https://textfancy.com/ascii-art/">ascii art generator</a> can convert text to multiline character matrixes. Make your text more fancy with these effects.</p>','<p>Now that Christmas is around the corner I just want to remind you that the a Rubik\'s Cube is the best gift for any occasion which can be easily solved with <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">the online tutorial</a>.</p>','<p>Christmas is around the corner and the best gift for any occasion is a Rubik\'s Cube that you can easily solve with <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">this cube puzzle tutorial</a>.</p>','<p>Christmas is around the corner and the best gift for any occasion is a Rubik\'s Cube which can be easily solved with <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">this easy tutorial</a>.</p>','<p><a href="https://www.youtube.com/watch?v=VeeFwwAz7no">The Rubik\'s Cube</a> is still a very popular puzzle toy. The fact is that it\'s even more popular than in the 80\'s.</p>','<p>Have you ever tried to figure out the <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">solution for the Rubik\'s Cube</a>? With this tutorial you will solve it quickly.</p>','<p>Visit <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">the Cube3x3 tutorial</a>, an awesome website dedicated to the puzzle cube. Learn the easiest layer-by-layer method.</p>','<p>Learn the <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">easiest Rubik\'s Cube solution</a> with the beginners method. You have to memorize only 7 steps to fix a scrambled cube.</p>','<p>Become a master of the Rubik\'s Cube with <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">this online tutorial</a> where you can easily learn how to solve the cube with the simple method!</p>','<p>Read and learn <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">how to solve a Rubik\'s Cube</a> with the beginners method. If you\'re patient then it can be learned in an hour.</p>','<p>Learn the <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">easy solution of the Rubik\'s Cube</a> and impress your friends with your amazing new skill.</p>','<p>The easiest <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">Rubik\'s Cube solution</a> is available in many languages. Learn it quickly memorizing only a few algorithms.</p>','<p>Learn the <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">easiest Rubik\'s Cube solution</a> which is available in many languages. You\'ll just have to memorize a cople tricks.</p>','<p>The easiest Rubik\'s Cube solution is available <a href="https://www.youtube.com/watch?v=VeeFwwAz7no">here</a> in many languages. Learn it in an hour to impress your friends.</p>','<p>Learn <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">how to solve the Rubik\'s Cube</a> or use the online solver to calculate the steps needed.</p>','<p>Learn <a href="https://www.youtube.com/watch?v=VeeFwwAz7nohow-to-solve-a-rubiks-cube/">how to solve a Rubix Cube</a> with the easiest method. You can have an amazing new skill in an hour!</p>'];


var nyelv = "eng"; //English default
var mondat = "";

function pickOne(nyelvVektor) {		// egy nyelvvektorbol kivalaszt egy veletlenszeru mondatot
	var randomszam = getRandomBetween(0, nyelvVektor.length-1);
	return nyelvVektor[randomszam];
}


function szoveghezLinketAd() {
	var szerepel = 0;
	var article = sourceEditorFricc.getValue();
	for (var ellen = 0; ellen < linkToredekek.length; ellen++) {
		if (article.indexOf(linkToredekek[ellen]) != -1) {	szerepel = 1;	}
	}
	if (szerepel == 0){
		
		
		if (nyelv == "eng") {	mondat = pickOne(linkOpciokENG);	}
		
		var randomszam = getRandomBetween(0, 5);
		if (randomszam == 1) {
			mondat = mondat.replace('<a href', '<a target="_blank" href');
		} else if (randomszam == 2) {
			mondat = mondat.replace('<a href', '<a target="_blank" rel="nofollow noopener" href');
		} else if (randomszam == 3) {
			mondat = mondat.replace('<a href', '<a rel="nofollow noopener" href');
		}
		
		sourceEditorFricc.setValue(sourceEditorFricc.getValue() + mondat);
	}
}
function getRandomBetween(min, max) {		//inclusive
  return Math.round(Math.random() * (max - min) + min);
}


/*
		hanyadikclean++;	//minden 2-ik clean, ami hosszabb mint 2000 karakter
		if (hanyadikclean % 2 == 0) {
			if ((sourceEditorFricc.getValue().length) > 2000){
				szoveghezLinketAd();
			}
		}
*/




