var count = 1;

function eat(){
var image = document.getElementById('donut');

switch(count)
{
 case 1: image.src = "donut_logo2_eaten.png"
		 count = count+1;
		 break;
 case 2: image.src = "donut_logo2_eaten2.png"
		 count = count+1;
		 break;
 case 3: image.src = "donut_logo2_eaten3.png"
		 count = count+1;
		 break;
 case 4: image.src = "donut_logo2_eaten4.png"
		 count = count+1;
		 break;
 case 5: image.src = "donut_logo2_eaten5.png"
		 count = count+1;
		 break;
 case 6: image.src = "donut_logo2_eaten6.png"
		 count = count+1;
		 break;
 case 7: image.src = "donut_logo2_with_name.png"
		 count = 1;
		 break;
}

}