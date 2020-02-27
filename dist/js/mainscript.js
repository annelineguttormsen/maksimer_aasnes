//meny
//variabler for dropdown meny
$ddMenuBtn = $(".header__logo--menu");
$ddMenu = $(".dd-menu ul");

//når hamburger ikonet trykkes skal dd meny poppe fram
//sett fokus på dd meny
//fjern eventlistener på hamburger ikon
$ddMenuBtn.on("click",openMenu);

//skjul dd meny når fokuset fjernes
//legg tilbake event listener på hamburger ikon
$ddMenu.on("blur",closeMenu);

function openMenu() {
	$ddMenu.addClass("dd-menu--open");
	$ddMenu.focus();
	$ddMenuBtn.off();
}

function closeMenu() {
	$ddMenu.removeClass("dd-menu--open");
	$ddMenuBtn.on("click",openMenu);
}

//spoof søkefunksjon
//variabler med elementer fra siden
$searchIcon = $(".header__logo--search");
$form = $(".header__form");
$formInput = $(".header__form--input");

//når søkeikonet trykkes, skal input field vises
//input får fokus via addSearchBar, hvis fokus
//går bort, skal input field bli skjult
$searchIcon.on("click", addSearchBar);
$formInput.on("blur", hideSearchBar);


function addSearchBar() {
	//fjern eventlistener fra søkeikonet
	$searchIcon.off();
	$form.addClass("header__form--visible");
	let timeout = setTimeout(
		function(){
			$formInput.addClass("header__form--input--visible")
		},10);
	//setter fokus på input inni form elementet
	$formInput.focus();
}

function hideSearchBar() {
	//vent med å skjule form elementet så input field
	//får spilt ut sin transition
	let timeout = setTimeout(
		function() {
			$form.removeClass("header__form--visible");
			//legg tilbake eventlistener på søkeikonet
			$searchIcon.on("click", addSearchBar);
		}, 200
	);
	$formInput.removeClass("header__form--input--visible");
}


//enkelt slideshow

/*const images = 
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
}*/
/*
|￣￣￣￣￣ | 
|   BLESS  | 
|   THIS   | 
|   MESS   |
| ＿＿＿＿＿| 
(\__/) || 
(•ㅅ•) || 
/ 　 づ*/