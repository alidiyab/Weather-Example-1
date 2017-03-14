var url = "https://api.wunderground.com/api/e2904fc31fabf039/conditions/q/CA/San_Francisco.json"

var baseUrl ="http://api.wunderground.com/api/"
var token = "e2904fc31fabf039"

const stateList = [
"AL",
"AK",
"AZ",
"AR",
"CA",
"CO",
"CT",
"DE",
"DC",
"FL",
"GA",
"HI",
"ID",
"IL",
"IN",
"IA",
"KS",
"KY",
"LA",
"ME",
"MD",
"MA",
"MI",
"MN",
"MS",
"MO",
"MT",
"NE",
"NV",
"NH",
"NJ",
"NM",
"NY",
"NC",
"ND",
"OH",
"OK",
"OR",
"PA",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VT",
"VA",
"WA",
"WV",
"WI",
"WY"
]



$(document).ready(function(){

  $.get(url, function(response) {
  	// debugger;
  	var temp = response["current_observation"]["temp_c"];
    $("#results").html(temp);
  });
});
