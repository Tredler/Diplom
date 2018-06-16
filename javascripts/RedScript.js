
function myFunction() {
    document.getElementById("bottle").style.animation = "bottle 10s ease forwards ";
    document.getElementById("detector").style.animation = "spin 7s ease forwards";
    document.getElementById("lamp").style.animation = "lampa .3s 4s steps(3) infinite alternate";
    p = document.getElementById('Wow');
    setTimeout(function () {
        p.play();
    }, 4000);
	function newpage(){
		document.location.href = "indexSL.html"
	}
	setTimeout(newpage, 9400);
};

function ToOrbits(){
	function orbit(){
		document.location.href = "index.html";
	}
	setTimeout(orbit, 700);
};

function card(){
	document.getElementById("hint").style.animation = "card 3s ease forwards";
	function c2(){
		document.getElementById("hint").style.animation = "card2 4s ease forwards";
	}
	setTimeout(c2,7000);
}

function SummonPage(){
	document.getElementById("Btnboard").style.animation = "SummonPages .5s ease-in-out forwards";
	function Page(){
		document.getElementById("Btnboard").style.display = "block";
	}
	setTimeout(Page,500);
}

function HidePage(){
	document.getElementById("Btnboard").style.animation = "SummonPagesRev .5s ease-in-out forwards";
	function PageNone(){
		document.getElementById("Btnboard").style.display="none";
	}
	setTimeout(PageNone,500);
	
}

counter=0;
function lightOnOff(){
		if(counter==0){
			document.getElementById("lightbtn").style.boxShadow = "0 0 0 99999px rgba(0, 0, 0, 0.9)";
			counter+=1;
		}else if(counter==1){
			document.getElementById("lightbtn").style.boxShadow = null;
			counter-=1;
		}
}

function toProfile(ElemID){
var num=document.getElementById(ElemID);

num.addEventListener("click", function(){
	switch(ElemID){
		case "con1":
			document.location.href = "https://www.instagram.com/shalopay13/";
			break;
		case "con2":
			document.location.href = "https://www.facebook.com/profile.php?id=100005266788247";
			break;
		case "con3":
			document.location.href = "https://t.me/tredler";
			break;
		case "con4":
			document.location.href = "https://www.instagram.com/izmarahd/";
			break;
		case "con5":
			document.location.href = "https://vk.com/id197047820";
			break;
		case "con6":
			document.location.href = "https://www.instagram.com/pasha_polyakov/";
			break;
		case "con7":
			document.location.href = "https://vk.com/blackatart"
			break;
		case "con8":
			document.location.href = "index.html"
			break;
		case "con9":
			document.location.href = "https://www.instagram.com/blackatart/"
			break;
	}
});

};
toProfile("con1");
toProfile("con2");
toProfile("con3");
toProfile("con4");
toProfile("con5");
toProfile("con6");
toProfile("con7");
toProfile("con8");
toProfile("con9");