//meny
//variabler for dropdown meny
const $ddMenuBtn = $(".header__logo--menu");
const $ddMenu = $(".dd-menu ul");

//når hamburger ikonet trykkes skal dd meny poppe fram
//sett fokus på dd meny
//fjern eventlistener på hamburger ikon
$ddMenuBtn.on("click",openMenu);

//skjul dd meny når fokuset fjernes
//legg tilbake event listener på hamburger ikon
$ddMenu.on("blur",closeMenu);

function openMenu() {
	$ddMenuBtn.off();
	$ddMenu.addClass("dd-menu--open");
	$ddMenu.focus();
}

function closeMenu() {
	$ddMenu.removeClass("dd-menu--open");
	$ddMenuBtn.on("click",openMenu);
}

//spoof søkefunksjon
//variabler med elementer fra siden
const $searchIcon = $(".header__logo--search");
const $form = $(".header__form");
const $formInput = $(".header__form__input");

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
			$formInput.addClass("header__form__input--visible")
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
	$formInput.removeClass("header__form__input--visible");
}


//enkelt slideshow

//lagre slideshow elementene og pips som skal
//vise hvor i slideshowet man er
const $slideShowImgs = $(".slideshow__image");
const $pips = $(".pip");

let slideShowInterval = setInterval(changeSlide,5000);

let slideIndex = 1;

function changeSlide() {
	if (slideIndex==3) {
		slideIndex = 0;
		$($slideShowImgs[1]).removeClass("slideshow__image--current");
		$($slideShowImgs[2]).removeClass("slideshow__image--current");
		$($pips[2]).removeClass("pip--current");
	}
	$($pips[slideIndex-1]).removeClass("pip--current");
	$($pips[slideIndex]).addClass("pip--current");
	$($slideShowImgs[slideIndex]).addClass("slideshow__image--current");
	slideIndex++;
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