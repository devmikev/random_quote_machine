const myList = [
	["You can do anything, but not everything.", "David Allen"],
	["Perfection is achieved, not when there is nothing …add, but when there is nothing left to take away.", "Antoine de Saint-Exupéry"],
	["The richest man is not he who has the most, but he who needs the least.", "Unknown Author"],
	["You miss 100 percent of the shots you never take.", "Wayne Gretzky"],
	["Courage is not the absence of fear, but rather the… that something else is more important than fear.", "Ambrose Redmoon"],
	["You must be the change you wish to see in the world.", "Gandhi"],
	["When hungry, eat your rice; when tired, close your… laugh at me, but wise men will know what I mean.", "Lin-Chi"],
	["The third-rate mind is only happy when it is think…irst-rate mind is only happy when it is thinking.", "A. A. Milne"],
	["To the man who only has a hammer, everything he encounters begins to look like a nail.", "Abraham Maslow"],
	["We are what we repeatedly do; excellence, then, is not an act but a habit.", "Aristotle"],
	["A wise man gets more use from his enemies than a fool from his friends.", "Baltasar Gracian"],
	["Do not seek to follow in the footsteps of the men of old; seek what they sought.", "Basho"],
	["Watch your thoughts; they become words.↵Watch your…r.↵Watch your character; it becomes your destiny.", "Lao-Tze"],
	["Everyone is a genius at least once a year. The rea…s simply have their bright ideas closer together.", "Georg Christoph Lichtenberg"],
	["What we think, or what we know, or what we believe… consequence. The only consequence is what we do.", "John Ruskin"],
	["The real voyage of discovery consists not in seeking new lands but seeing with new eyes.", "Marcel Proust"],
	["Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching", "Unknown Author"],
	["Try a thing you haven’t done three times. Once, to…d time, to figure out whether you like it or not.", "Virgil Garnett Thomson"],
	["Even if you’re on the right track, you’ll get run over if you just sit there.", "Will Rogers"],
	["People often say that motivation doesn’t last. Wel… does bathing – that’s why we recommend it daily.", "Zig Ziglar"],
	["Before I got married I had six theories about brin…hildren; now I have six children and no theories.", "John Wilmot"],
	["What the world needs is more geniuses with humility, there are so few of us left.", "Oscar Levant"],
	["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"],
	["I’ve gone into hundreds of [fortune-teller’s parlo… I was a policewoman getting ready to arrest her.", "New York City detective"],
	["When you go into court you are putting your fate i…who weren’t smart enough to get out of jury duty.", "Norm Crosby"],
	["Those who believe in telekinetics, raise my hand.", "Kurt Vonnegut"],
	["Just the fact that some geniuses were laughed at d…rothers. But they also laughed at Bozo the Clown.", "Carl Sagan"],
	["My pessimism extends to the point of even suspecting the sincerity of the pessimists.", "Jean Rostand"],
	["Sometimes I worry about being a success in a mediocre world.", "Lily Tomlin"],
	["I quit therapy because my analyst was trying to help me behind my back.", "Richard Lewis"],
	["We’ve heard that a million monkeys at a million ke…thanks to the Internet, we know that is not true.", "Robert Wilensky"],
	["If there are no stupid questions, then what kind o… Do they get smart just in time to ask questions?", "Scott Adams"],
	["If the lessons of history teach us anything it is …obody learns the lessons that history teaches us.", "Anon"],
	["When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.", "Clarence Darrow"],
	["Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.", "Cullen Hightower"],
	["There are many who dare not kill themselves for fear of what the neighbors will say.", "Cyril Connolly"],
	["There’s so much comedy on television. Does that cause comedy in the streets?", "Dick Cavett"],
	["All men are frauds. The only difference between them is that some admit it. I myself deny it.", "H. L. Mencken"],
	["I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.", "Victor Hugo"],
	["I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.", "Woody Allen"],
	["The person who reads too much and uses his brain too little will fall into lazy habits of thinking.", "Albert Einstein"],
	["Believe those who are seeking the truth. Doubt those who find it.", "André Gide"],
	["It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Aristotle"],
	["I’d rather live with a good question than a bad answer.", "Aryeh Frimer"],
	["We learn something every day, and lots of times it’s that what we learned the day before was wrong.", "Bill Vaughan"],
	["I have made this letter longer than usual because I lack the time to make it shorter.", "Blaise Pascal"],
	["Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.", "Cale Yarborough"],
	["An inventor is simply a fellow who doesn’t take his education too seriously.", "Charles F. Kettering"],
	["Asking a working writer what he thinks about criti…s like asking a lamppost how it feels about dogs.", "Christopher Hampton"],
	["Better to write for yourself and have no public, than to write for the public and have no self.", "Cyril Connolly"],
	["Never be afraid to laugh at yourself, after all, y… could be missing out on the joke of the century.", "Dame Edna Everage"],
	["I am patient with stupidity but not with those who are proud of it.", "Edith Sitwell"],
	["Normal is getting dressed in clothes that you buy …e vacant all day so you can afford to live in it.", "Ellen Goodman"],
	["The cure for boredom is curiosity. There is no cure for curiosity.", "Ellen Parr"],
	["Advice is what we ask for when we already know the answer but wish we didn’t.", "Erica Jong"],
	["Some people like my advice so much that they frame it upon the wall instead of using it.", "Gordon R. Dickson"],
	["The trouble with the rat race is that even if you win, you’re still a rat.", "Lily Tomlin"],
	["Never ascribe to malice, that which can be explained by incompetence.", "Napoleon (Hanlon’s Razor)"],
	["Imagination was given to man to compensate him for…humor was provided to console him for what he is.", "Oscar Wilde"],
  ["When a person can no longer laugh at himself, it is time for others to laugh at him.", "Thomas Szasz"]
];

const ranNumGen = (num) => Math.floor(Math.random() * num);

const newColor = () => {
	let r = ranNumGen(256);
	let g = ranNumGen(256);
	let b = ranNumGen(256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
};

const changeColor = () => {
	let sameColor = newColor();
	$("body").css("background", sameColor);
	$("body").css("color", sameColor);
	$("button").css("background", sameColor);
};

const changeQuote = () => {
	let index = ranNumGen(myList.length);
	$("#text").text(myList[index][0]);
	$("#author").text(myList[index][1]);
};


$("#new-quote").on("click", ()=> {
	changeQuote();
	changeColor();
});

$(document).ready(() => {
	changeQuote();
	changeColor();
});

$(".twitter-share-button").on("click", () => {
	let quote = $("#text").text();
	let author = $("#author").text();
	let tweetString = quote + ' ' + author;
	let tweetHtml = '"';
	for (let i = 0; i < tweetString.length; i++){
		if(tweetString[i] === " ") {
			tweetHtml+= "%20";
		} else {
			tweetHtml+= tweetString[i]
		}
	}
	tweetHtml+= '"';
	tweetHtml = "https://twitter.com/intent/tweet?text=" + tweetHtml;
	$("a").attr("href", tweetHtml);

});