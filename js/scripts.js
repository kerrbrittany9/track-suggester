
$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
    event.preventDefault();
    var interests = $("select#interests").val();
    var work_environment = $("select#work_environment").val();
    var tech_interest = $("select#tech_interest").val();
    var app = $("select#app").val();
    var limited_app_interest = $("select#limited_app_interest").val();
//
// // console.log('test')
//     if (interests === 'math' && tech_interest === 'frontend') {
//       $('#CSS').show();
//       alert("Hey! How about learning CSS?");
//     } else {
//       $('#PHP').show();
//       alert('Get ready for a sweet career in C#!');
//     }
//       $("#PHP").click(function() {
//       $(this).remove();
//     });
  });
});
