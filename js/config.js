/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*  Leaked by ♏α⊥⊥ḯṧḯṧм  */

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "GalaticGaming";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/0 (1).jpg",
	"backgrounds/images/0.jpg",
	"backgrounds/images/betraying_you_is_too_much_fun_by_dvan7-d7pn7w6.jpg",
	"backgrounds/images/images (1).jpg",
	"backgrounds/images/images (2).jpg",
	"backgrounds/images/images (3).jpg",
	"backgrounds/images/images (4).jpg",
	"backgrounds/images/images.jpg",
	"backgrounds/images/maxresdefault (1).jpg",
	"backgrounds/images/maxresdefault (2).jpg",
	"backgrounds/images/maxresdefault (3).jpg",
	"backgrounds/images/maxresdefault (4).jpg",
	"backgrounds/images/maxresdefault (5).jpg",
	"backgrounds/images/maxresdefault.jpg",
	"backgrounds/images/steamworkshop_webupload_previewfile_373725233_preview.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "U06jlgpMtQs", name: "USSR"},
    {youtube: "wQTInhga9OI", name: "Apollo 3 - Superhelden"},
	{youtube: "mNR2hWyFrAs", name: "Apollo 3 - Startschuss"},
	{youtube: "0PH72d26KTI", name: "Soviet Techno Anthem Remix"},
	{youtube: "BEm0AjTbsac", name: "The Misty Mountains Cold - The Hobbit"},
	{youtube: "_MmoFJddZjU", name: "Sean & Bobo - Drop the bass low (Original Mix)"},
	{youtube: "3YV14KjbRIA", name: "Cascada - Everytime We Touch lyrics"},
	{youtube: "vt1Pwfnh5pc", name: "Johnny Cash - Hurt"},
	{youtube: "708mjaHTwKc", name: "KSI - Lamborghini (Explicit) ft. P Money"},
	{youtube: "hr40osuGgZ4", name: "Midnight Riders - Save Me Some Sugar (This Won't Take Long)"},
	{youtube: "psuRGfAaju4", name: "Owl City - Fireflies"},
	{youtube: "SHnTocdD7sk", name: "Weird Al- Yankovic - Trapped In The Drive-Thru"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Welcome to GalaticGaming",
"Type in !donate To Purchase Custom Classes, Vip And Just To Support The Server",
"This Server is Being Heavyly Modfied Right now!",
"Thanks For Joining Us!",
"Enjoy the server"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;