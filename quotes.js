 $(document).ready(function () {
 	var randomQuote;
 	var randomNum;
 	var author;
 	getQuote();

 	function getQuote() {
 		var quotes = ["Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!",
                  "How you doin'?!", "We were on a break!", "Pivot! Pivot! Pivot! Pivot. Pivot. Pivot.",
                  "I'm not so good with the advice... Can I interest you in a sarcastic comment?",
                 "Yeah, it's like a cow's opinion. It just doesn't matter. It's moo.", "Joey doesn't share food!",
                 "Oh… my… God!",
                 "Welcome to the real world. It sucks. You’re gonna love it!"];
 		var authorName = ["-Rachel", "- Joey", "-Ross", "- Ross", "- Chandler", "- Joey", "- Joey", "- Janice", "- Monica"];
 		randomNum = Math.floor(Math.random() * quotes.length);
 		randomQuote = quotes[randomNum];
 		author = authorName[randomNum];

 		$(".quote").text(randomQuote);
 		$(".author").text(author);
 	}

 	$("#tweet-quote").on("click", function () {
 		window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + author);
 	});

 	$("#new-quote").on("click", function () {
 		getQuote();
 	});


 });