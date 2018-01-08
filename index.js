// defaults
var DEFAULT_NUM_MOVIES = 100;
var DEFAULT_ROLE = "director";

//global variables
var numOfMovies = DEFAULT_NUM_MOVIES;
var movieRole = DEFAULT_ROLE;
var canvasWidth = 600;
var canvasHeight = 400;

init(); //this will run when the website loads

function init() {
    //todo: need to implement. get all the data
    //example for HTTP GET REQUEST
    /*
    $.get("walla.com", function (response) {
        //do something with response
        console.log(response);
    });
    */
    //example for HTTP POST REQUEST with json body
    /*
    $.post("walla.com", {name: "John", time: "2pm"})
        .done(function (response) {
            console.log(response);
        });
    */
    //example how to parse json
    /*
    var obj = jQuery.parseJSON('{ "name": "John" }');
    */
    //now you can obj.name is "John"
}

//functions
function setNumberOfMovies(elem) {
    if (elem.value != "") {
        numOfMovies = elem.value;
    }
}

function setMovieRole(elem) {
    if (elem.value != "") {
        movieRole = elem.value;
    }
}

Chart.defaults.global.defaultFontFamily = "Arial";
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = 'gray';

//tutorial: https://code.tutsplus.com/tutorials/getting-started-with-chartjs-introduction--cms-28278
//build chart graph
function buildGraph() {

    var result = getProcessedData();

    //clear canvas and create new one
    var graphContainer = $("#graphContainer");
    graphContainer.empty();
    graphContainer.html("<canvas id='popChart' width='" + canvasWidth + "' height='" + canvasHeight + "'></canvas>")
    var popCanvas = $("#popChart");

    //build the chart
    var myChart = new Chart(popCanvas, {
        type: 'bar', //possible art types: line, bar, radar, polarArea, pie, doughnut, bubble
        data: {
            labels: ['', ''],
            datasets: [{
                label: 'Men %',
                data: [80, 0],
                backgroundColor: "rgba(153,255,51,0.4)"
            }, {
                label: 'Women %',
                data: [0, 20],
                backgroundColor: "rgba(255,153,0,0.4)"
            }]
        }
    });

}

function getProcessedData() {
    //todo: need to implement
}