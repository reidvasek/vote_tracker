(function(){
	var kitty_array = ['catpics/7ykJ1xis.jpg', 'catpics/9Fg6CZSs.jpg', 'catpics/60maZWts.jpg',
						 'catpics/aGJW6lSs.jpg', 'catpics/blancocat.jpg', 'catpics/bootcat.jpg', 
						 'catpics/crazycat.jpg', 'catpics/handcat.jpg', 'catpics/LDiTFeQs.jpg', 
						 'catpics/n91EiPds.jpg', 'catpics/QBZjjMes.jpg', 'catpics/rkO8XVXs.jpg',
						 'catpics/u9wzm0fs.jpg','catpics/vyz8MGPs.jpg', 'catpics/XA0PRs2s.jpg']
//array with cat pics
	getRandomImage(kitty_array);
	function getRandomImage(imgAr){
	var num = Math.floor(Math.random()*imgAr.length);//this new variable contains a randomly generate variable which is directly correlated to a pictrure in the array
	var num2 = Math.floor(Math.random()*imgAr.length);

	while(num === num2){
		num2 = Math.floor(Math.random()*imgAr.length);
	}
	var img = document.createElement('img');
	var img2 = document.createElement('img');
	img.src = imgAr[num];
	img2.src = imgAr[num2];

	document.getElementById('left').appendChild(img);// refers to a section element with the id of left
	document.getElementById('right').appendChild(img2);
};
})();

window kitty_array=kitty_array;

I used some of the concepts from http://www.dyn-web.com/code/basics/random_image/random_img_js.php
