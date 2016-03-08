var clients = [
	{
		client: 'Going to concert',
		tops: [{
			img: '/shirt.jpg',
			rank: 50
		}],
		bottoms: [...],
		access: [...]
	},
	{...},
	{...}
];

var seen = [];

// 1. Count number of clients in array
// 2. Pick random less than number of clients
var client = clients[random()];
if (seen.indexOf(client) < 0) {
	var currentScore = 0;
	seen.push(client);
	// Run the game in here
	$('.story').text(client.story);
	client.tops.forEach(function(top) {
		$('element').append('<img data-rank="' + top.rank + '" src="' + top.img + '" />');
	});


	$('top').click(function(e) {
		e.preventDefault();

		var score = $(this).data('rank');
		currentScore += score;
	})
}
