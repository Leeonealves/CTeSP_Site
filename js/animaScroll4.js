$(document).ready(function(){
	
	$("a[href='#homeSection']").addClass("active");/* This will highlight Home when your page will be loaded first*/
	setAncoras();
    
    // Bind to scroll
    $(window).scroll(setScroll);

});

 
function setAncoras()
{
    
	$("nav a").click(function(e) {
	
		//e.preventDefault();/*impedir o salto automático*/
	
		//var sectionID=e.currentTarget.id + "Section";
        		
        
		/*$("html,body").animate({
			
			
			scrollTop:$("#" + sectionID).offset().top
			
		},1000)
       */
     
        $("nav a.active").removeClass("active");
        /*adicionar a classe active ao link onde clicou*/
        $(this).addClass("active");
        
	})
 
}
                     


function setScroll()
{
   
   var scrollPosition = $(window).scrollTop();
   /*console.log("scrollPosition "+ scrollPosition);*/
    
    
    var $navigationLinks = $("#menu a");
	var $sections = $(".section");
	var $sectionsReversed = $($(".section").get().reverse());
   
	var sectionIdTonavigationLink = {};
    $sections.each(function() {
        var id=$(this).attr('id');
		sectionIdTonavigationLink[id] = $("#menu a[href='#" + id + "']");

    });


		$sectionsReversed.each(function() {
		    var currentSection = $(this);
            var sectionTop = currentSection.offset().top;
            
            if (scrollPosition >= sectionTop) {
		        var id = currentSection.attr('id');
                /*console.log("id atual: " + id);*/
                
	            var $navigationLink = sectionIdTonavigationLink[id];
		        if (!$navigationLink.hasClass('active')) { /* se o link onde clicou não tem a classe active, remove a classe do link anterior e associa a classe ao link atual*/
		          $navigationLinks.removeClass('active');
		            $navigationLink.addClass('active');
                  
		        }
               
		        return false;
		    }
		});
    
}

