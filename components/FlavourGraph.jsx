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
  scaleSteps : 4,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 1,
  //Number - The centre starting value
  scaleStartValue : 0,
  //Boolean - Whether to show lines for each scale point
  scaleShowLine : true,
  //String - Colour of the scale line
  scaleLineColor : "#ccc",
  //Number - Pixel width of the scale line
  scaleLineWidth : 1,
  //Boolean - Whether to show labels on the scale
  scaleShowLabels : false,
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Arial'",
  //Number - Scale label font size in pixels
  scaleFontSize : 14,
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
  angleShowLineOut : false,
  //String - Colour of the angle line
  angleLineColor : "rgba(255,255,255,0.3)",
  //Number - Pixel width of the angle line
  angleLineWidth : 1,
  //String - Point label font declaration
  pointLabelFontFamily : "'Arial'",
  //String - Point label font weight
  pointLabelFontStyle : "normal",
  //Number - Point label font size in pixels
  pointLabelFontSize : 14,
  //String - Point label font colour
  pointLabelFontColor : "#555",
  //Boolean - Whether to show a dot for each point
  pointDot : true,
  //Number - Radius of each point dot in pixels
  pointDotRadius : 2,
  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,
  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 1,
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

  propTypes: {
    profile: React.PropTypes.object
  },

  render: function () {
    var profile = this.props.profile;

    // Radar Data
    var graphData = {
      labels: Object.keys(profile),
      datasets: [
        {
          fillColor : "rgba(234,241,245,0.7)",
          strokeColor : "rgba(151,187,205,0.8)",
          data : Object.keys(profile).map(function (key) {
            return this[key];
          }.bind(profile))
        }
      ]
    };

    if (typeof window !== 'undefined') {
      return (
        <ReactChart.Radar data={graphData} options={globalOptions} className="chart" height="350" />
      )
    } else {
      return (
        <p>{ graphData.datasets[0].data.join(', ') }</p>
      )
    }
  }

});

module.exports = FlavourGraph;