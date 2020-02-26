//enkelt slideshow

const images = 
	["https://www.apple.com/newsroom/images/product/apps/lifestyle/Apple-Watch-records-ski-workouts-02282018_big.jpg.large.jpg",
	"https://images.interactives.dk/kvinde-ski-MwwN38y8QHj49z0kfKo1FQ.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=113%2C4%2C5534%2C3831&w=430",
	"media/img/AI_image.jpg"];
let imgPip = 0;
const animation = setInterval(changeBackground,3000);

function changeBackground() {
	let n = imgPip%3;
	imgPip++;
	if (n == 2) {
		$(".slideshow").css({"background":"url(" + images[n] + ")no-repeat center center","background-size":"auto 100%"});

	}else {
		$(".slideshow").css({"background":"url(" + images[n] + ")no-repeat center center","background-size":"100%"});
	}
	console.log("bakgrunnsbildet er nå " + images[n]);
}
/*
|￣￣￣￣￣ | 
|   BLESS  | 
|   THIS   | 
|   MESS   |
| ＿＿＿＿＿| 
(\__/) || 
(•ㅅ•) || 
/ 　 づ*/