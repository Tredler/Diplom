var page=document.getElementById("wikiPage");
var counter=0;

function toOrbits(){
	function timeout(){
	document.location.href = "index.html";
	}
	setTimeout(timeout,500);
}

function myFunction(){
	
		if(counter==0){
			page.style.animation = "rotatePages 1.5s ease-in-out forwards";
			counter+=1;
		}else if(counter==1){
			page.style.animation = "rotatePagesRev 1.5s ease-in-out forwards";
			counter-=1;
		}
}

document.addEventListener("click", function(e){
        e.preventDefault();
        if(e.target.hasAttribute("name")){
			document.getElementById("infoPage").style.display="block";
			document.getElementById("infoPage").style.animation = "SummonPages .5s ease-in-out forwards";
        }
    });

function HidePage(){
	document.getElementById("infoPage").style.animation = "SummonPagesRev .5s ease-in-out forwards";
	function PageNone(){
		document.getElementById("infoPage").style.display="none";
	}
	setTimeout(PageNone,500);
}
	
	