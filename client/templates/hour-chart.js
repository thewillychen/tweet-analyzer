Template.hourChart.rendered = function() {

    var hourResults = Session.get('hourlyStats');
    var data = [];
    for (i = 0; i < hourResults.length; i++) {
      data.push([hourResults[i]._id.hour, hourResults[i].count]);
    }

    title = 'Tweets by Hour';
    chart = {
     target: 'chart1',
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

// Template.hourChart.rendered = function() {

//     hourlyCounts = Session.get('hourlyCounts');
//     title = 'Number of tweets by hour'

//     chart = {
//      target: 'chart1',
//      type: 'ColumnChart',
//      columns: [
//        ['timeofday', 'Hour of Day'],
//        ['number', 'Number of Tweets']
//      ],
//      rows: [
//        ['1 am', 3],
//        ['2 am', 1],
//        ['3 am', 1],
//        ['4 am', 1],
//        ['5 am', 2]
//      ],
//      options: {
//        'title':title,
//        'width':400,
//        'height':300
//      }
//    };

//    drawChart(chart);
// }