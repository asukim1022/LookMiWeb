$(document).ready(function(){
console.log("ready");


		var rolling;
		var time=3000;
		var current = 0;	
		var targetL;			
		var quick = 0;	
		var targetQ;




    $(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', '10thPage', '11thPage'],
				menu:"#menu",
				scrollingSpeed: 700,
				
				slidesNavigation: true,
				afterLoad:function($page){
					switch ($page) {
						
						case 'firstPage':
							
							//about  device  instructions  service  team
							//.dot .dot_wrap #dot1
							
							$("#about_2").css({"background-color" : "#ffd6bf"});
							$("#dot_device").css({"background-color" : "#ffd6bf"});
							$("#device_1").css({"background-color" : "#ffd6bf"});
							$("#device_2").css({"background-color" : "#ffd6bf"});
							$("#device_3").css({"background-color" : "#ffd6bf"});
							$("#dot_instructions").css({"background-color" : "#ffd6bf"});
							$("#instructions_1").css({"background-color" : "#ffd6bf"});
							$("#instructions_2").css({"background-color" : "#ffd6bf"});
							$("#instructions_3").css({"background-color" : "#ffd6bf"});
							$("#dot_service").css({"background-color" : "#ffd6bf"});
							$("#service_1").css({"background-color" : "#ffd6bf"});
							$("#service_2").css({"background-color" : "#ffd6bf"});
							$("#service_1").css({"background-color" : "#ffd6bf"});
							$("#dot_team").css({"background-color" : "#ffd6bf"});
							
							$("#dot_about").css({"background-color" : "#fff"});
							$("#about_1").css({"background-color" : "#fff"});
							
							
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;
							
						case 'secondPage':
							
							//about  device  instructions  service  team
							$("#about_1").css({"background-color" : "#ffd6bf"});
							$("#dot_device").css({"background-color" : "#ffd6bf"});
							$("#device_1").css({"background-color" : "#ffd6bf"});
							$("#device_2").css({"background-color" : "#ffd6bf"});
							$("#device_3").css({"background-color" : "#ffd6bf"});
							$("#dot_instructions").css({"background-color" : "#ffd6bf"});
							$("#instructions_1").css({"background-color" : "#ffd6bf"});
							$("#instructions_2").css({"background-color" : "#ffd6bf"});
							$("#instructions_3").css({"background-color" : "#ffd6bf"});
							$("#dot_service").css({"background-color" : "#ffd6bf"});
							$("#service_1").css({"background-color" : "#ffd6bf"});
							$("#service_2").css({"background-color" : "#ffd6bf"});
							$("#service_1").css({"background-color" : "#ffd6bf"});
							$("#dot_team").css({"background-color" : "#ffd6bf"});
							
							$("#dot_about").css({"background-color" : "#fff"});
							$("#about_2").css({"background-color" : "#fff"});
							
							
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;
							
						
							case '3rdPage':
							
							//about  device  instructions  service  team
						
							$("#about_1").css({"background-color" : "#b7bcc3"});
							$("#dot_about").css({"background-color" : "#b7bcc3"});
							$("#device_1").css({"background-color" : "#b7bcc3"});
							$("#about_2").css({"background-color" : "#b7bcc3"});
							$("#device_2").css({"background-color" : "#b7bcc3"});
							$("#dot_device").css({"background-color" : "#b7bcc3"});
							$("#device_3").css({"background-color" : "#b7bcc3"});
							$("#instructions_2").css({"background-color" : "#b7bcc3"});
							$("#instructions_3").css({"background-color" : "#b7bcc3"});
							$("#dot_service").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#service_2").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#dot_team").css({"background-color" : "#b7bcc3"});
							
							$("#dot_instructions").css({"background-color" : "#36465d"});
							$("#instructions_1").css({"background-color" : "#36465d"});
							
						
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;
							
							case '4thPage':
							
							//about  device  instructions  service  team
						
							$("#about_1").css({"background-color" : "#b7bcc3"});
							$("#dot_about").css({"background-color" : "#b7bcc3"});
							$("#device_1").css({"background-color" : "#b7bcc3"});
							$("#about_2").css({"background-color" : "#b7bcc3"});
							$("#device_2").css({"background-color" : "#b7bcc3"});
							$("#dot_device").css({"background-color" : "#b7bcc3"});
							$("#device_3").css({"background-color" : "#b7bcc3"});
							$("#instructions_1").css({"background-color" : "#b7bcc3"});
							$("#instructions_3").css({"background-color" : "#b7bcc3"});
							$("#dot_service").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#service_2").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#dot_team").css({"background-color" : "#b7bcc3"});
							
							$("#dot_instructions").css({"background-color" : "#36465d"});
							$("#instructions_2").css({"background-color" : "#36465d"});
						
						
						
						
						
						
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;
							
							case '5thPage':
							
							//about  device  instructions  service  team
							
							
							$("#about_1").css({"background-color" : "#b7bcc3"});
							$("#dot_about").css({"background-color" : "#b7bcc3"});
							$("#device_1").css({"background-color" : "#b7bcc3"});
							$("#about_2").css({"background-color" : "#b7bcc3"});
							$("#device_2").css({"background-color" : "#b7bcc3"});
							$("#dot_device").css({"background-color" : "#b7bcc3"});
							$("#device_3").css({"background-color" : "#b7bcc3"});
							$("#instructions_1").css({"background-color" : "#b7bcc3"});
							$("#instructions_2").css({"background-color" : "#b7bcc3"});
							$("#dot_service").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#service_2").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#dot_team").css({"background-color" : "#b7bcc3"});
							
							$("#dot_instructions").css({"background-color" : "#36465d"});
							$("#instructions_3").css({"background-color" : "#36465d"});
							
							
							
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;
							
							
							
							
							case '6thPage':
						
							//about  device  instructions  service  team
						
							$("#about_1").css({"background-color" : "#848e9c"});
							$("#dot_about").css({"background-color" : "#848e9c"});
							$("#device_2").css({"background-color" : "#848e9c"});
							$("#about_2").css({"background-color" : "#848e9c"});
							$("#device_3").css({"background-color" : "#848e9c"});
							$("#dot_instructions").css({"background-color" : "#848e9c"});
							$("#instructions_1").css({"background-color" : "#848e9c"});
							$("#instructions_2").css({"background-color" : "#848e9c"});
							$("#instructions_3").css({"background-color" : "#848e9c"});
							$("#dot_service").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#service_2").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#dot_team").css({"background-color" : "#848e9c"});
							
							$("#dot_device").css({"background-color" : "#fff"});
							$("#device_1").css({"background-color" : "#fff"});
						
						
						
						
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#fff"});
							$(".nav h2").css({"color" : "#fff"});
							
							break;
							
							
							
						case '7thPage':
							
							//about  device  instructions  service  team
						
							
							$("#about_1").css({"background-color" : "#848e9c"});
							$("#dot_about").css({"background-color" : "#848e9c"});
							$("#device_1").css({"background-color" : "#848e9c"});
							$("#about_2").css({"background-color" : "#848e9c"});
							$("#device_3").css({"background-color" : "#848e9c"});
							$("#dot_instructions").css({"background-color" : "#848e9c"});
							$("#instructions_1").css({"background-color" : "#848e9c"});
							$("#instructions_2").css({"background-color" : "#848e9c"});
							$("#instructions_3").css({"background-color" : "#848e9c"});
							$("#dot_service").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#service_2").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#dot_team").css({"background-color" : "#848e9c"});
							
							$("#dot_device").css({"background-color" : "#fff"});
							$("#device_2").css({"background-color" : "#fff"});
						
						
						
						
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#fff"});
							$(".nav h2").css({"color" : "#fff"});
							
							break;
							
							
						case '8thPage':
							
							//about  device  instructions  service  team

							
							$("#about_1").css({"background-color" : "#848e9c"});
							$("#dot_about").css({"background-color" : "#848e9c"});
							$("#device_1").css({"background-color" : "#848e9c"});
							$("#about_2").css({"background-color" : "#848e9c"});
							$("#device_2").css({"background-color" : "#848e9c"});
							$("#dot_instructions").css({"background-color" : "#848e9c"});
							$("#instructions_1").css({"background-color" : "#848e9c"});
							$("#instructions_2").css({"background-color" : "#848e9c"});
							$("#instructions_3").css({"background-color" : "#848e9c"});
							$("#dot_service").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#service_2").css({"background-color" : "#848e9c"});
							$("#service_1").css({"background-color" : "#848e9c"});
							$("#dot_team").css({"background-color" : "#848e9c"});
							
							$("#dot_device").css({"background-color" : "#fff"});
							$("#device_3").css({"background-color" : "#fff"});
							
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#fff"});
							$(".nav h2").css({"color" : "#fff"});
							
							break;
	
							
							case '9thPage':
							
							//about  device  instructions  service  team
							
							
							$("#about_1").css({"background-color" : "#fda593"});
							$("#dot_about").css({"background-color" : "#fda593"});
							$("#device_1").css({"background-color" : "#fda593"});
							$("#about_2").css({"background-color" : "#fda593"});
							$("#device_2").css({"background-color" : "#fda593"});
							$("#dot_device").css({"background-color" : "#fda593"});
							$("#device_3").css({"background-color" : "#fda593"});
							$("#instructions_1").css({"background-color" : "#fda593"});
							$("#instructions_2").css({"background-color" : "#fda593"});
							$("#dot_instructions").css({"background-color" : "#fda593"});
							$("#instructions_3").css({"background-color" : "#fda593"});
							$("#service_2").css({"background-color" : "#fda593"});
							$("#dot_team").css({"background-color" : "#fda593"});
							
							$("#dot_service").css({"background-color" : "#fff"});
							$("#service_1").css({"background-color" : "#fff"});
							
							
							
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#fff"});
							$(".nav h2").css({"color" : "#fff"});
							
							break;
							
							case '10thPage':		
							
							//about  device  instructions  service  team
							
							$("#about_1").css({"background-color" : "#fda593"});
							$("#dot_about").css({"background-color" : "#fda593"});
							$("#device_1").css({"background-color" : "#fda593"});
							$("#about_2").css({"background-color" : "#fda593"});
							$("#device_2").css({"background-color" : "#fda593"});
							$("#dot_device").css({"background-color" : "#fda593"});
							$("#device_3").css({"background-color" : "#fda593"});
							$("#instructions_1").css({"background-color" : "#fda593"});
							$("#instructions_2").css({"background-color" : "#fda593"});
							$("#dot_instructions").css({"background-color" : "#fda593"});
							$("#instructions_3").css({"background-color" : "#fda593"});
							$("#service_2").css({"background-color" : "#fda593"});
							$("#dot_service").css({"background-color" : "#fda593"});
							
							$("#dot_team").css({"background-color" : "#fff"});
							
							
							
							
							$("#about_1").css({"background-color" : "#fda593"});
							$("#dot_about").css({"background-color" : "#fda593"});
							$("#device_1").css({"background-color" : "#fda593"});
							$("#about_2").css({"background-color" : "#fda593"});
							$("#device_2").css({"background-color" : "#fda593"});
							$("#dot_device").css({"background-color" : "#fda593"});
							$("#device_3").css({"background-color" : "#fda593"});
							$("#instructions_1").css({"background-color" : "#fda593"});
							$("#instructions_2").css({"background-color" : "#fda593"});
							$("#dot_instructions").css({"background-color" : "#fda593"});
							$("#instructions_3").css({"background-color" : "#fda593"});
							
							$("#service_1").css({"background-color" : "#fda593"});
							$("#dot_team").css({"background-color" : "#fda593"});
							
							$("#dot_service").css({"background-color" : "#fff"});
							$("#service_2").css({"background-color" : "#fff"});
							
							
							
						
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#fff"});
							$(".nav h2").css({"color" : "#fff"});
							
							break;
							
							case '11thPage':		//팀
							
							//about  device  instructions  service  team
						
						
							$("#about_1").css({"background-color" : "#b7bcc3"});
							$("#dot_about").css({"background-color" : "#b7bcc3"});
							$("#device_1").css({"background-color" : "#b7bcc3"});
							$("#about_2").css({"background-color" : "#b7bcc3"});
							$("#device_2").css({"background-color" : "#b7bcc3"});
							$("#dot_device").css({"background-color" : "#b7bcc3"});
							$("#device_3").css({"background-color" : "#b7bcc3"});
							$("#instructions_1").css({"background-color" : "#b7bcc3"});
							$("#instructions_2").css({"background-color" : "#b7bcc3"});
							$("#dot_instructions").css({"background-color" : "#b7bcc3"});
							$("#instructions_3").css({"background-color" : "#b7bcc3"});
							$("#service_2").css({"background-color" : "#b7bcc3"});
							$("#service_1").css({"background-color" : "#b7bcc3"});
							$("#dot_service").css({"background-color" : "#b7bcc3"});
							
							$("#dot_team").css({"background-color" : "#36465d"});
							
						
						
						
						
						
							$(".nav .nav_nav ul > li > a > #service").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #instructions").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #device").css({"font-weight" : "normal"});
							$(".nav .nav_nav ul > li > a > #about").css({"font-weight" : "normal"});
							
							$(".nav .nav_nav ul > li > a > #team").css({"font-weight" : "bold"});
							
							$(".nav .nav_nav ul > li > a").css({"color" : "#303030"});
							$(".nav h2").css({"color" : "#303030"});
							
							break;

					}
				}
				
			});
		});
    
	
	
	



	
	
	
	
	
	
	
	

   
   


	
	

	
   var rolling;
   var time = 3000;
   var current = 0;
   var targetL;
   var currentQ = 0;
   var targetT;
  

   
   //화살표 클릭시 animate지정
   $(".brandList .btnBox > a").click(function(){
      if($(this).index() == 0){
         //이전
         if(current > 0){
            current--;
            targetL = -865 * current;
            $(".brandList .wrapBox > ul").stop().animate({left : targetL + "px"}, 500);
         
         };
      }else{
         //다음
         if(current < $(".brandList .wrapBox > ul > li").length - 1){
            current++;
            targetL = -865 * current;
            console.log(current);
            
            $(".brandList .wrapBox > ul").stop().animate({left : targetL + "px"}, 500, function(){
                  if(current == $(".brandList .wrapBox > ul > li"). length -1){
                     current = 0;
                     $(".brandList .wrapBox > ul").css("left",0);
                };
            
            });

         }
      
      };
   });
   
   

	
	
	
	
	

	
	
	
	
	

	
	
	
	
});

