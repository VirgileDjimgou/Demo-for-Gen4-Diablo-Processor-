/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myMessage1 = ["Do you want to know more about this codebase example?", 
    "Hover over a property to see what it means. More information, links, and learning tips will be added soon! "];
var myMessage2 = ["Click Me!", "Hide Me!"];
var slidePanel1ActiveFlag = false;

$(document).ready(function(){
    $("#panel").slideUp(1);
    modifySlidePanelMessages(slidePanel1ActiveFlag);
    
    $('[data-toggle="tooltip"]').tooltip();  
    
    $(".btn-slide").click(function(){
	$("#panel").slideToggle("slow");
        $(this).toggleClass("active"); 
        slidePanel1ActiveFlag = !slidePanel1ActiveFlag;
        modifySlidePanelMessages(slidePanel1ActiveFlag);        
    });	 
    
    
});


function modifySlidePanelMessages(flag){
    if(flag){        
        $("#slidePanelMessage1").html(myMessage1[1]);
        $("#slidePanelMessage2").html(myMessage2[1]);
    }
    else{
        $("#slidePanelMessage1").html(myMessage1[0]);
        $("#slidePanelMessage2").html(myMessage2[0]);
    }
}

