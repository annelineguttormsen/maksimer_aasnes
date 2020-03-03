//meny
//variabler for dropdown meny og hamburger ikon
const $ddMenu = $(".dd-menu");
const $ddMenuBtn = $(".header__logo--menu");

//når hamburger ikonet trykkes skal dd meny poppe fram
//sett fokus på dd meny
//fjern eventlistener på hamburger ikon
$ddMenuBtn.on("mouseup",openMenu);

//skjul dd meny når fokuset fjernes
//legg tilbake event listener på hamburger ikon
$ddMenu.on("blur",closeMenu);

function openMenu() {
	//i tilfelle meny er åpent og hamburger ikon
	//har eventlistener, bare lukk menyen om
	//den har --open klasse
	if($ddMenu.hasClass("dd-menu--open")) {
		closeMenu();
	} else {
		$ddMenu.addClass("dd-menu--open");
		//fjern eventlistener fra hamburger ikonet
		//sett fokus på menyen slik at blur funksjonen kan brukes
		$ddMenuBtn.off();
		$ddMenu.focus();
	}
}

function closeMenu() {
	$ddMenu.removeClass("dd-menu--open");
	//blur funksjonen aktiveres med en gang
	//hamburger ikonet blir trykket, og dette 
	//fører til "blinking", så vi venter 300 millisekunder
	//på å sette tilbake eventlistener på knappen
	let timeout = setTimeout(function(){
		$ddMenuBtn.on("mouseup",openMenu);
	},300);
}

//spoof søkefunksjon
//variabler med elementer for søkeikon og form elementer
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

let slideIndex = 1;

//sett opp interval for å endre slideshow bilde
let slideShowInterval = setInterval(function() {
	changeSlide(slideIndex)
},5000);

function changeSlide(i) {
	slideIndex = i;
	//fjern klasser fra pips og slides
	$slideShowImgs.removeClass("slideshow__image--current");
	$pips.removeClass("pip--current");
	//legg til klasse på riktig pip og slide
	$($pips[slideIndex]).addClass("pip--current");
	$($slideShowImgs[slideIndex]).addClass("slideshow__image--current");
	//bruk modulo for å resette slideIndex til 0 om det går over slides length
	slideIndex = ++slideIndex % $slideShowImgs.length;
}

function pipChangeSlide(i) {
	//stopp interval som endrer slide
	clearInterval(slideShowInterval);
	changeSlide(i);
	//vent litt før interval startes på nytt
	setTimeout(function() {
		slideShowInterval = setInterval(function() {
			changeSlide(slideIndex)
		},5000);
	},3000);
}