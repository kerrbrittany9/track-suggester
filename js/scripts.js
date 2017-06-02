
$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
    event.preventDefault();
    var interests = $("select#interests").val();
    var work_environment = $("select#work_environment").val();
    var tech_interest = $("select#tech_interest").val();
    var app = $("select#app").val();
    var indicator = $("select#indicator").val();
//
// // console.log('test')
//     if (interests === 'math' && tech_interest === 'frontend') {
//       $('#CSS').show();
//       alert("Hey! How about learning CSS?");
//     } else if (work_environment === 'big') {
//       $('#Csharp').show();
//       alert('Get ready for a sweet career in C#!');
//     }
//       $("#PHP").click(function() {
//       $(this).remove();
//     });
  });
});
