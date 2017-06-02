$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
    event.preventDefault();
    var interests = $("select#interests").val();
    var work_environment = $("select#work_environment").val();
    var tech_interest = $("select#tech_interest").val();
    var app = $("select#app").val();
    var indicator = $("select#indicator").val();

    if (tech_interest === 'frontend' ||interests === 'math') { debugger;
      $('#CSS').show();
      alert("Hey! How about learning CSS?");
    } else if (work_environment === 'big' || indicator ===  'windows') {
      $('#Csharp').show();
      alert('Get ready for a sweet career in C#!');
    } else {
      $('#Ruby').show();
      alert("Don't blush too much about learning Ruby!");
    }
      $("#CSS").click(function() {
      $(this).remove();
    });
      $("#Csharp").click(function() {
        $(this).remove();
    });
      $("#Ruby").click(function() {
      $(this).remove();
    });
  });
});
