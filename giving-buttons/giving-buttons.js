$(document).ready(function(){
   $("#url").bind("keyup blur paste", function() {
    var codeUrl = $(this).val();
    if (codeUrl === '') {
       codeUrl = "https://securelb.imodules.com/s/1069/index.aspx?sid=1069&gid=1&pgid=761&cid=1722";
    }
    var linkStr = "<a href='" + codeUrl + "'><img class='btn no-border' src='http://www.ucsc.edu/images/make-a-gift.png' alt='Make a Gift' /></a>";
   $("#code").text(linkStr);
   $(".preview").html(linkStr);
 });
}); 
