const buttons = document.querySelectorAll(".tabLinks");
const underline = document.querySelector(".underline-appr");
const wrappContents =document.querySelectorAll(".wrapp");
function removeElement(element, string){
	for(let i=0;i<element.length;i++){		
	element[i].classList.remove(string);	
	}
}
buttons.forEach(element => {
	element.addEventListener("click", ()=>{
		removeElement(buttons,"active");
		element.classList.add("active");
		wrappContents.forEach((e)=>{
			if(e.id===element.id){
				e.style.display="block";
			}
			else{
			e.style.display="none";
			}
		})
	})
});


	


