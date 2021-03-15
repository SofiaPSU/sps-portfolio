google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(dessertChart);

/** Creates a chart and adds it to the page. */
function dessertChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Dessert');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Cake', 15],
          ['Pie', 5],
          ['Cookies', 30]
        ]);

  const options = {
    'title': 'Favorite College Student Desserts',
    'width':400,
    'height':300
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('dessert-container'));
  chart.draw(data, options);
}