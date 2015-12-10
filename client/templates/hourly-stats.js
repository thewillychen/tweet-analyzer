Meteor.call('getTweetsByHour', function(err, result){
  Session.set('hourlyStats', result);
});

Template.hourlyStats.helpers({
	'hourlyCounts': function(){
		var hourlyCounts = Session.get('hourlyStats');
		if(hourlyCounts == null)
			return null;
		hourResults = new Mongo.Collection(null);
		
		for (i = 0; i <hourlyCounts.length; ++i){
			hourResults.insert({hour: hourlyCounts[i]._id.hour, count: hourlyCounts[i].count});
		}		
		return hourResults.find({}, {sort: {hour:1}});
	}
});

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
