google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
url =
  "https://docs.google.com/spreadsheets/d/1VVqsn59eJWT4wIIINatcV5EBVHHEQzxS9Xm2We9wC9c/gviz/tq?sheet=data1&headers=1&tq=";
url2 = "https://docs.google.com/spreadsheets/d/1VVqsn59eJWT4wIIINatcV5EBVHHEQzxS9Xm2We9wC9c/gviz/tq?sheet=data2&headers=1&tq=";
function drawChart() {
  var queryString = encodeURIComponent("select A,B");
  var query1 = new google.visualization.Query(url + queryString);
  query1.send(handleChart1Response);

  queryString = encodeURIComponent("select A, sum(B), C where C=2559 group by A, C order by sum(B) desc")
  var query2 = new google.visualization.Query(url2 + queryString);
  query2.send(handleChart2Response);
}

function errorAlert(res) {
  alert("Error in query: " + res.getMessage() + " " + res.getDetailedMessage());
}

function chart2Year59() {
  console.log(59);
  var queryString = encodeURIComponent("select A, sum(B), C where C=2559 group by A, C order by sum(B) desc")
  var query2 = new google.visualization.Query(url2 + queryString);
  query2.send(handleChart2Response);
}

function chart2Year60() {
  console.log(60);
  var queryString = encodeURIComponent("select A, sum(B), C where C=2560 group by A, C order by sum(B) desc")
  var query2 = new google.visualization.Query(url2 + queryString);
  query2.send(handleChart2Response);
}

function chart2Year61() {
  console.log(61);
  var queryString = encodeURIComponent("select A, sum(B), C where C=2561 group by A, C order by sum(B) desc")
  var query2 = new google.visualization.Query(url2 + queryString);
  query2.send(handleChart2Response);
}

function chart2Year62() {
  console.log(62);
  var queryString = encodeURIComponent("select A, sum(B), C where C=2562 group by A, C order by sum(B) desc")
  var query2 = new google.visualization.Query(url2 + queryString);
  query2.send(handleChart2Response);
}

function handleChart1Response(response) {
  if (response.isError()) {
    errorAlert(response);
    return;
  }

  var data = response.getDataTable();
  var options = {
    width: 800, 
    height: 300,
    curveType: "function",
    legend: { position: "bottom" }
  };
  var chart1 = new google.visualization.LineChart(
    document.getElementById("chart1")
  );
  chart1.draw(data, options);
}

function handleChart2Response(response) {
  if (response.isError()) {
    errorAlert(response);
    return;
  }

  var data = response.getDataTable();
  var options = {
    sort: true,
    width: 1000, 
    height: 500,
    sliceVisibilityThreshold: .04,
    legend: {position: "right"}
  };
  var chart1 = new google.visualization.PieChart(
    document.getElementById("chart2")
  );
  chart1.draw(data, options);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(
    document.getElementById("chart1")
  );
  chart.draw(data, { width: 400, height: 240 });
}
