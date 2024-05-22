const tracks = [
  "Arctic Monkeys - I Bet You Look Good On The Dancefloor",
  "Avicci - Wake Me Up",
  "Backstreet Boys - Everybody",
  "Bastille - Pompeii",
  "Blink 182 - All The Small Things",
  "Bon Jovi - Livin' On A Prayer",
  "Bonnie Tyler - Holding Out For A Hero",
  "Bryan Adams - Summer Of 69",
  "Chaka Khan - Ain't Nobody",
  "Coldplay - Fix You",
  "Deep Blue Something -Breakfast At Tiffanys",
  "Don Henley - The Boys Of Summer",
  "Don Mclean - American Pie",
  "Ed Sheeran - Castle On The Hill",
  "George Ezra - Hold My Girl",
  "Green Day - Basket Case",
  "Green Day- Time Of Your Life",
  "Imagine Dragons - Radioactive",
  "James - Sit Down",
  "Kt Tunstall - Black Horse And The Cherry Tree",
  "Linkin Park - In The End",
  "London Grammar - Strong",
  "Miley Cyrus - Nothing Breaks Like A Heart",
  "Mumford And Sons - I Will Wait",
  "Mumford And Sons - The Cave",
  "Oasis - Don't Look Back In Anger",
  "Ocean Colour Scene - The River Boat Song",
  "Rag N Bone Man - Human",
  "Razorlight - Golden Touch",
  "Ricky Martin - Livin' La Vida Loca",
  "Robbie Williams - Angels",
  "Robbie Williams - Let Me Entertain You",
  "Scouting For Girls - She's So Lovely",
  "Taylor Swift - Trouble",
  "The Coral - Dreaming Of You",
  "The Divine Comedy -National Express",
  "The Killers - Mr Brightside",
  "The Proclaimers - I'm Gonna Be (500 Miles)",
  "The Rolling Stones - Paint It Black",
  "The Weekend - Blinded By The Lights",
  "Tina Turner - Proud Mary",
  "Tom Petty - Free Falling",
  "Van Morrison - Brown Eyed Girl",
  "Wheetus - Teenage Dirtbag",
];

var str = `
<h2>Set List</h2><ul class="row row-cols-1 row-cols-lg-3">`;

tracks.forEach(function (track) {
  str += `<li class="col">` + track + "</li>";
});

str += "</ul>";
document.getElementById("setList").innerHTML = str;
