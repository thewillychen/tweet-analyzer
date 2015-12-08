Template.hourChart.rendered = function() {

    var hourResults = Session.get('hourlyStats');
    var data = [];
    for (i = 0; i < hourResults.length; i++) {
      data.push([hourResults[i]._id.hour, hourResults[i].count]);
    }

    title = 'Tweets by Hour';
    chart = {
     target: 'hrchart',
     type: 'ColumnChart',
     columns: [
       ['number', 'Hour of Day'],
       ['number', 'Number of Tweets']       
     ],
     rows: data,
     options: {
       'title': title,
       'width': 400,
       'height': 300
     }
   };

   drawChart(chart);
}
