/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var ReactChart = require('../lib/chart');

var globalOptions = {
  //Boolean - If we show the scale above the chart data
  scaleOverlay : false,
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : true,
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : 5,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 1,
  scaleBeginAtZero: false,
  //Number - The centre starting value
  scaleStartValue : -1,
  //Boolean - Whether to show lines for each scale point
  scaleShowLine : true,
  //String - Colour of the scale line
  scaleLineColor : "rgba(136,136,136,0.5)",
  //Number - Pixel width of the scale line
  scaleLineWidth : 1,
  //Boolean - Whether to show labels on the scale
  scaleShowLabels : false,
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'adobe-caslon-pro'",
  //Number - Scale label font size in pixels
  scaleFontSize : 12,
  //String - Scale label font weight style
  scaleFontStyle : "normal",
  //String - Scale label font colour
  scaleFontColor : "#333",
  //Boolean - Show a backdrop to the scale label
  scaleShowLabelBackdrop : true,
  //String - The colour of the label backdrop
  scaleBackdropColor : "rgba(0,0,0,0.75)",
  //Number - The backdrop padding above & below the label in pixels
  scaleBackdropPaddingY : 2,
  //Number - The backdrop padding to the side of the label in pixels
  scaleBackdropPaddingX : 2,
  //Boolean - Whether we show the angle lines out of the radar
  angleShowLineOut : true,
  //String - Colour of the angle line
  angleLineColor : "rgba(221,221,221,0.5)",
  //Number - Pixel width of the angle line
  angleLineWidth : 1,
  //String - Point label font declaration
  pointLabelFontFamily : "'adobe-caslon-pro'",
  //String - Point label font weight
  pointLabelFontStyle : "normal",
  //Number - Point label font size in pixels
  // pointLabelFontSize : 16,
  //String - Point label font colour
  pointLabelFontColor : "#555",
  //Boolean - Whether to show a dot for each point
  pointDot : true,
  //Number - Radius of each point dot in pixels
  pointDotRadius : 3,
  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,
  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,
  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  //Boolean - Whether to animate the chart
  animation : true,
  //Number - Number of animation steps
  animationSteps : 60,
  //String - Animation easing effect
  animationEasing : "easeOutQuart",
  //Function - Fires when the animation is complete
  onAnimationComplete : function () {}
};

var FlavourGraph = React.createClass({

  render: function () {
    var primary = this.props.primary;
    var secondary = this.props.secondary;

    var datasets = [];

    if (primary) {
      datasets.push({
        fillColor : "rgba(234,241,245,0.7)",
        strokeColor : "rgba(151,187,205,0.8)",
        data : Object.keys(primary).map(function (key) {
          return this[key];
        }.bind(primary))
      });
    }

    if (secondary) {
      datasets.push({
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        data : Object.keys(secondary).map(function (key) {
          return this[key];
        }.bind(secondary))
      });
    }

    // Radar Data
    var graphData = {
      labels: Object.keys(primary),
      datasets: datasets
    };

    return (
      <div className="profile-chart-container">
        <ReactChart.Radar data={graphData} options={globalOptions} className="chart" width="500px" height="500px" />
      </div>
    )
  }

});

module.exports = FlavourGraph;