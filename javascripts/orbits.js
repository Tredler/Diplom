function OrbitLinks(ElemID){
var num=document.getElementById(ElemID);

	num.addEventListener("mousedown", function(){
		switch(ElemID){
			case "p1":
				document.location.href = "contacts.html";
				break;
			case "p2":
				document.location.href = "";
				break;
			case "p3":
				document.location.href = "wiki.html";
				break;
			case "cat":
				document.location.href = "Teleport.html";
				break;
			
		}
	});

};
	
OrbitLinks("p1");
OrbitLinks("p2");
OrbitLinks("p3");
OrbitLinks("cat");
