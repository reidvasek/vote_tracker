$(function() {
var images;

 var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
     };
  saveToLocalStorage(images);

$.ajax({
	url:'https://api.imgur.com/3/album/R4Ct6.json',
	method:'GET',
	headers:{'Authorization':'Client-ID d613052d4330a4c'}
}).done(function(res){
	images = res.data.images;
	var kat1;
	var kat2;
	
	var randomCat = function(){
		var num = Math.floor(Math.random()*images.length);
		var num2 = Math.floor(Math.random()*images.length);
		while(num === num2){
			num2 = Math.floor(Math.random()*images.length);
		}
		kat1 = images[num];
		kat2 = images[num2];
		
	window.kat1 = kat1;
	window.kat2 = kat2;
	};

	var renderCat = function(){
		randomCat();

		$('#left').attr({src:kat1.link});
		$('#right').attr({src:kat2.link});
	};

	renderCat();

	$('#buttonleft').click(function(){
		chart.segments[1].value++;
		$('#left').css({
			'border':'10px solid blue',
			'width':'300px',
			'height':'300px',
		})
			$('#right').css({
			'border':'none',
			'width':'200px',
			'height':'200px',

		})
		chart.update();
		
	});
	$('#buttonright').click(function(){
		chart.segments[0].value++;
		$('#right').css({
			'border':'10px solid red',
			'width':'300px',
			'height':'300px',
		})
		$('#left').css({
			'border':'none',
			'width':'200px',
			'height':'200px',
		})

		chart.update();

	});
	$('#again').click(function(){//this is the refresh button
		chart.segments[1].value = 1;//refresh graph
		chart.segments[0].value = 1;
		chart.update();
		$('#left').css({
			'border':'none',
			'width':'200px',
			'height':'200px',})
		$('#right').css({
			'border':'none',
			'width':'200px',
			'height':'200px',})
		
		renderCat();//render pics
	});

var chartData= [
{
	value:1,
	color:"red",
	highlight:"yellow",
},
{
	value:1,
	color:"blue",
	highlight:"green",
 }
]
var newChart = document.getElementById('canvas1').getContext('2d');

var chart = new Chart(newChart).Doughnut(chartData);
console.log(chart);

}).fail(function(err) {
    console.log(err);
 });

});

