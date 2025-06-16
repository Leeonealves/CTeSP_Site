$(document).ready(function(){
	
	setAncoras();

});

function setAncoras()
{
	$("nav a").click(function(e) {
	
		e.preventDefault();/*impedir o salto automático*/
	
		var sectionID=e.currentTarget.id + "Section";
		
		$("html,body").animate({
			
			
			scrollTop:$("#" + sectionID).offset().top
			
		},1000)
	})
}