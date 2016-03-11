//-------------CLIENTS ARRAY---------------------

var clients = [
	{
    client: 'Music Festival',
    story: "Im 21 and headed to a music festival in California. I am going with 15 of my BFFs so I HAVE to look insta-ready. It will be warm out and Im super hot so I definitely want to show off some skin. Music festivals are all about a boho, free-spirited lifestyle and I have to stand out for all the right reasons. Show me what you got!",
    tops: [
      {rank: 15, img: 'pictures/music-fest-top-15.jpg'},
      {rank: 5, img: 'pictures/music-fest-top-5.jpg'},
      {rank: 0, img: 'pictures/music-fest-top-0.jpg'}
    ],
    bottoms: [
      {rank: 5, img: 'pictures/music-fest-bottom-5.jpg'},
			{rank: 15, img: 'pictures/music-fest-bottom-15.jpg'},
      {rank: 0, img: 'pictures/music-fest-bottom-0.jpg'}
    ],
    accessories: [
      {rank: 0, img: 'pictures/music-fest-accessory-0.jpg'},
			{rank: 15, img: 'pictures/music-fest-accessory-15.jpg'},
      {rank: 5, img: 'pictures/music-fest-accessory-5.jpg'}
    ]
  },
  {
    client: 'Rock Concert',
    story: "I’m a rocker chick and i’m going to see my favorite band at the Rivinia. It is a “sling back some beers and mosh around” kind of time but I can’t look like just another band groupie. I don’t want to look over the top either! Not to sound like a stereotype but I like leather, zippers and all things black and grey. Help me look good while rocking out!",
    tops: [
      {rank: 5, img: 'pictures/rock-concert-top-5.jpg'},
      {rank: 0, img: 'pictures/rock-concert-top-0.jpg'},
			{rank: 15, img: 'pictures/rock-concert-top-15.jpg'}
    ],
    bottoms: [
      {rank: 15, img: 'pictures/rock-concert-bottom-15.jpg'},
      {rank: 5, img: 'pictures/rock-concert-bottom-5.jpg'},
      {rank: 0, img: 'pictures/rock-concert-bottom-0.jpg'}
    ],
    accessories: [
      {rank: 0, img: 'pictures/rock-concert-accessory-0.jpg'}
      {rank: 5, img: 'pictures/rock-concert-accessory-5.jpg'}
			{rank: 15, img: 'pictures/rock-concert-accessory-15.jpg'}

    ]
  },
  {
    client: 'Business Meeting',
    story: "I just got my first job out of college and my first day is next week! They said it’s business casual….but what does that even mean??? I want to be able to appear professional but not dress like my grandma. I need to demand respect and look damn good doing it. My new boss said “just a nice top and bottom”…hope she gives better direction on the job! Can you steer me in the right direction???",
    tops: [
      {rank: 15, img: 'pictures/business-top-15.jpg'}
			{rank: 0, img: 'pictures/business-top-0.jpg'}
      {rank: 5, img: 'pictures/business-top-5.jpg'},
    ],
    bottoms: [
      {rank: 15, img: 'pictures/business-bottom-15.jpg'}
      {rank: 5, img: 'pictures/business-bottom-5.jpg'}
      {rank: 0, img: 'pictures/business-bottom-0.jpg'}
    ],
    accessories: [
      {rank: 15, img: 'pictures/business-accessory-15.jpg'},
			{rank: 0, img: 'pictures/business-accessory-0.jpg'},
      {rank: 5, img: 'pictures/business-accessory-5.jpg'}

    ]
  },
  {
    client: 'Pool Party',
    story: "My frenemy is having a pool party to celebrate the start of summer and I want to steal the spotlight. I want to look hot both in the pool and out. Something to throw on over an adorable bathing suit is a must. Plus you can’t forget the accessories….What can I wear to make sure all the guys are looking at me, just enough to piss off the host?",
    tops: [
      {rank: 5, img: 'pictures/pool-top-5.jpg'},
			{rank: 15, img: 'pictures/pool-top-15.jpg'},
      {rank: 0, img: 'pictures/pool-top-0.jpg'}
    ],
    bottoms: [
			{rank: 0, img: 'pictures/pool-bottom-0.jpg'},
			{rank: 15, img: 'pictures/pool-bottom-15.jpg'},
			{rank: 5, img: 'pictures/pool-bottom-5.jpg'}
    ],
    accessories: [

      {rank: 5, img: 'pictures/pool-accessory-5.jpg'},
      {rank: 0, img: 'pictures/pool-accessory-0.jpg'},
			{rank: 15, img: 'pictures/pool-accessory-15.jpg'}
    ]
  },
  {
    client: 'Hiking',
    story: "I’m going hiking with my college friends and want to make sure I’m not wearing another sweaty sorority t-shirt and gym shorts. I want to be able to look cute but also be able to scale any path I want to take! It’s supposed to be cool so I want to make sure I am warm but don’t make me look dumpy!!! Any ideas?",
    tops:[
      {rank: 5, img: 'pictures/hike-top-5.jpg'},
      {rank: 0, img: 'pictures/hike-top-0.jpg'},
			{rank: 15, img: 'pictures/hike-top-15.jpg'}
    ],
    bottoms: [
      {rank: 5, img: 'pictures/hike-bottoms-5.jpg'},
      {rank: 0, img: 'pictures/music-fest-bottom-0.jpg'},
			{rank: 15, img: 'pictures/hike-bottoms-15.jpg'}
    ],
    accessories: [
			{rank: 0, img: 'pictures/hike-accessory-0.jpg'},
			{rank: 15, img: 'pictures/hike-accessory-15.jpg'},
      {rank: 5, img: 'pictures/hike-accessory-5.jpg'}

    ]
  }
]

// ---------------------------START THE CODE----------------------------


//------GLOBAL VARIABLES--------
var currentScore = 0;
var clickCount = 0;
var round = 0;
var dropCount = 0;





// ---------------clears board--------------------------------
var emptyBoard = function(){
		$('.story').empty();
		$('.tops').empty();
		$('.bottoms').empty();
		$('.accessories').empty();
		$('header').empty();
		$('.clientTitle').empty();
		$('.submit').remove();
}

//--------------SET NEW ROUND FOR DRAG AND DROP -------------------------------
var setNewRound = function(){
		$('.clientTitle').append(clients[round].client);
    $('.story').append('"'+ clients[round].story + '"');
    for (var x = 0; x<clients[round].tops.length; x++){
        $('.tops').append("<img src='" + clients[round].tops[x].img + "'class='" + clients[round].tops[x].rank + "' draggable='true' ondragover='event.preventDefault()'/>")
      };
		$('.tops').append("<div class='dropzoneTop'><div class='wordsTop'>Place Top Here</div></div>");
    for (var y = 0; y<clients[round].bottoms.length; y++){
        $('.bottoms').append("<img src='" + clients[round].bottoms[y].img + "'class='" + clients[round].bottoms[y].rank + "' draggable='true' ondragover='event.preventDefault()'/>")
      };
		$('.bottoms').append("<div class='dropzoneBottom'><div class='wordsBottom'>Place Bottom Here</div></div>");
    for (var z = 0; z<clients[round].accessories.length; z++){
        $('.accessories').append("<img src='" + clients[round].accessories[z].img + "'class='" + clients[round].accessories[z].rank + "' draggable='true' ondragover='event.preventDefault()'/>")
    	};
		$('.accessories').append("<div class='dropzoneAccessory'><div class='wordsAccessory'>Place Accessory Here</div></div>");
	};


//--------------END FUNCTION----------------------------------
var endFunction = function(){
		emptyBoard();
		$('.endingInfo').toggle();
		$('.endingInfo .score').append('<div>Your score is ' + currentScore + '!')
		if(currentScore <= 60){
			$('.endingInfo .score').append('<div>Hmmmm maybe study up on this seasons trends and try again!</div>')
		}else if( currentScore > 60 && currentScore < 150){
			$('.endingInfo .score').append('<div>Not too shabby! A few more tweeks and you are ready to style Hollywood Royalty!')
		}else if(currentScore >= 150){
			$('.endingInfo .score').append('<div>Rachel Zoe, is that you??? You are a true fashionista!!!</div>')
		};
	console.log('ENDING')
};



//----------------DROPSWITCH FUNCTION----------------

var dropSwitch = function(){
	if (dropCount % 3 === 0){
			$('.submitSection').append("<button class='submit'>Like this look?</button>");
			round++;
	};
};

$('.submitSection').on('click', '.submit', function(e) {
	console.log(currentScore + '   ' + round + '   ' + clients.length)
	if (round === clients.length){
		endFunction();
	}else{
		emptyBoard();
		setNewRound();
	}
});


//--------------DRAG AND DROP START------------------------------

var dragged;

document.addEventListener('drag', function(e) {
  e.target.style.opacity = 0.5;
}, false);

document.addEventListener('dragstart', function(e) {
  dragged = e.target;
  e.target.style.opacity = 0.5;
}, false);

document.addEventListener('dragend', function(e) {
  e.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function(e) {
  e.preventDefault();
}, false);

document.addEventListener('dragenter', function(e) {
  if(e.target.className === "dropzoneTop") {
    e.target.style.background = "rgba(205, 52, 167, 0.42)";
  }else if(e.target.className === "dropzoneBottom") {
    e.target.style.background = "rgba(205, 52, 167, 0.42)";
  }else if(e.target.className === "dropzoneAccessory") {
    e.target.style.background = "rgba(205, 52, 167, 0.42)";
  }
}, false);

document.addEventListener('dragleave', function(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "";
  }
}, false);

document.addEventListener('drop', function(e) {
  e.preventDefault();
  if(e.target.className === "dropzoneTop") {
    e.target.style.background = "";
		currentScore += +$(dragged).prop('class');
    e.target.appendChild(dragged);
		$(dragged).css('margin','0');
		$('.wordsTop').html('')
		dropCount++;
		dropSwitch();
	};
	if(e.target.className === "dropzoneBottom") {
    e.target.style.background = "";
		currentScore += +$(dragged).prop('class');
    e.target.appendChild(dragged);
		$(dragged).css('margin','0');
		$('.wordsBottom').html('')
		dropCount++;
		dropSwitch();
	};
	if(e.target.className === "dropzoneAccessory") {
    e.target.style.background = "";
		currentScore += +$(dragged).prop('class');
    e.target.appendChild(dragged);
		$(dragged).css('margin','0');
		$('.wordsAccessory').html('')
		dropCount++;
		dropSwitch();
	};
}, false);



//--------------SET NEW ROUND FOR BUTTON CLICKS WITH SOME APPENDING WEIRDNESS----------
// var setNewRound = function(){
// 		$('.clientTitle').append(clients[round].client);
//     $('.story').append('"'+ clients[round].story + '"');
//     for (var x = 0; x<clients[round].tops.length; x++){
//         $('.tops').append("<button type='button' class='" + clients[round].tops[x].rank + "' draggable='true' ondragstart='event.dataTransfer.setData('image/png', null)'><img src='" + clients[round].tops[x].img + "'></button>")
//       };
// 		$('.tops').append("<div class='dropzone'>PLACE TOP HERE</div>");
//     for (var y = 0; y<clients[round].bottoms.length; y++){
//         $('.bottoms').append("<button type='button' class='" + clients[round].bottoms[y].rank + "'><img src='" + clients[round].bottoms[y].img + "'></button>")
//       };
// 		$('.tops').append("<div class='dropHere'>PLACE BOTTOM HERE</div>");
//     for (var z = 0; z<clients[round].accessories.length; z++){
//         $('.accessories').append("<button type='button' class='" + clients[round].accessories[z].rank + "'><img src='"+clients[round].accessories[z].img + "'></button>").draggable()
//     	};
// 		$('.tops').append("<div class='dropHere'>PLACE ACCESSORY HERE</div>");
// 	};

//-------------NAVIGATING THROUGH PAGES THROUGH CLICKING-----------------------------

	// var clickFunction = function(){
	// 		if (clickCount % 3 === 0){
	// 				round++;
	// 				if (round === 5){
	// 					emptyBoard();
	// 					$('.endingInfo').toggle();
	// 					$('.endingInfo .score').append('<div>Your score is ' + currentScore + '! Congratulations you fashionista!')
	// 					console.log('ENDING')
	//
	// 				}else {
	// 				emptyBoard();
	// 				setNewRound();
	// 				console.log('THIS SHOULD SWITCH')
	// 				};
	// 		};
	// };

//----------FOR LOOP TO LOOP THROUGH ARRAY IF NEEDED IN FUTURE-------------------------------
//
// for (var i = 0; i<clients.length; i++){
//   $('header').append(clients[i].story);
//   var thisClient = clients[i];
//   for (var x = 0; x<clients[i].tops.length; x++){
//     $('.tops').append("<button type='button' class='"+thisClient.tops[x].rank+"'><img src='"+thisClient.tops[x].img+"'></button>")
//   };
//   for (var y = 0; y<clients[i].bottoms.length; y++){
//     $('.bottoms').append("<button type='button' class='"+thisClient.bottoms[y].rank+"'><img src='"+thisClient.bottoms[y].img+"'></button>")
//   };
//   for (var z = 0; z<clients[i].accessories.length; z++){
//     $('.accessories').append("<button type='button' class='"+thisClient.accessories[z].rank+"'><img src='"+thisClient.accessories[z].img+"'></button>")
//   };
//
//
// --TO CHECK TO CONFIRM EACH INDIVIDUAL LOOP WORKS------------
//
//
//  alert('THIS CLIENTS GREAT!')
//
// };

// ------------SET UP PAGE--------------------------------
$(document).ready(function(evt){
	$('.start').click(function(e){
    e.preventDefault();

		// -----OPTION TO EMPTY BEFORE TOGGLE IDEA----
    // $('header').empty();
    // $('.start').remove();
    // $('div').empty();

		//-------TOGGLE INITIAL INFO-----------------

		$('.initialInfo').toggle();
    setNewRound();
    console.log('hey')
  });

// ------------NAVIGATING THROUGH CLIENTS--------------------------------

// ---------------BUTTON CLICK SCORING------------------------------------
//  $('.tops').on('click', 'button', function(e) {
//   e.preventDefault();
// 	clickCount++;
// 	currentScore += +$(this).prop('class');
// 	console.log(clickCount + ' ' + round + ' ' + clients.length);
// 	clickFunction();
// });
//
//  $('.bottoms').on('click', 'button', function(e) {
//   e.preventDefault();
// 	clickCount++;
//   currentScore += +$(this).prop('class');
// 	console.log(clickCount + ' ' + round + ' ' + clients.length);
// 	clickFunction();
// });
//
//
//
// $('.accessories').on('click', 'button', function(e) {
//   e.preventDefault();
// 	clickCount++;
//   currentScore += +$(this).prop('class');
// 	console.log(clickCount + ' ' + round + ' ' + clients.length);
// 	clickFunction();
// });


// ---------------PLAY AGAIN BUTTON---------------------------------------
$('.endingInfo').on('click', '#playAgain', function(e) {
	e.preventDefault();
	console.log('WORK');
	$('.endingInfo').toggle();
	$('.endingInfo .score').empty();
	$('.initialInfo').toggle();
	round = 0;
	clickCount = 0;
	currentScore = 0;

	// --------USED BEFORE TOGGLE-------------------
	// $('header').empty();
	// $('.story').empty();
	// $('header').html('So You Think You Can Style?');
	// $('div').append("<div class='rules'>Clients will come in and describes an event for which they need an outfit<br> it’s your job to pick from a list of 12 items (3 tops, 3 bottoms, 3 accessories).	<br> Pair the best top, bottom and accessory together and see what the client thinks!	<br>Where will you stand after styling 10 clients?	<br>Will you end up looking SO last season or finish being a true fashionista?<br>	<br>Try your luck with<br>So You Think You Can Style?</div>");
	// $('#playingField').append('<button type="button" class="start">Start styling!</button>');
});



});
