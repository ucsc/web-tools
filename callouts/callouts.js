var html1 = "<div class='callout-left ";
var html2 = "full'>";
var html3 = "<h3>Add your headline</h3>";
var html4 = "<img src='http://dummyimage.com/400x240/000/fff' height='400' width='235'>";
var html5 = "<p>Add your caption</p>";

$(document).ready(function(){
  var editor = new MediumEditor('.editable', {
    toolbar: {
      buttons: [
        'bold',
        'italic',
        'orderedlist',
        'unorderedlist'
      ]
    }
  });

  //Checks the value of the side radio and changes side
  $('input:radio[name=float]').change(function() {
    var side = "";
    if(this.value == "left") side = "left ";
    else if (this.value == "right") side = "right ";
    html1 = "<div class='callout-" + side;
    endHtml();
  });

  //Checks the value of the dropdown for size and changes the size
  $('#size').val('selectedvalue').change(function() {
    if(this.value == "full") html2 = "full'>";
    else if(this.value == "wide") html2 = "wide'>";
    else if(this.value == "narrow") html2 = "narrow'>";
    endHtml();
  });

  //Checks the headline input and changes the headline
  $('#headline').bind("keyup blur paste", function() {
    var temp = $(this).val();
    if (temp == '') temp = "Your headline";
    html3 = "<h3>" + temp + "</h3>";
    endHtml();
  });

  //Checks the value of the img radio and adds/removes the img tag
  $('#img').val('selectedvalue').change(function() {
    if(this.value == "landscape") html4 = "<img src='http://dummyimage.com/400x235/000/fff' height='400' width='235'>"; 
    else if(this.value == "portrait") html4 = "<img src='http://dummyimage.com/400x415/000/fff' height='400' width='415'>";
    else if (this.value == "false") html4 = "";
    endHtml();
  });

  //Checks the caption input and changes the caption
  editor.subscribe('editableInput', function (event, editable) {
    html5 = document.getElementById('caption').innerHTML;
    endHtml();
  });
});

//Puts all of the html together and updates the preview and result text
function endHtml() {
  var result = html1 + html2 + html3 + html4 + html5 + "</div>";
  $("#code").text(result);
  $("#preview").html(result);
}
