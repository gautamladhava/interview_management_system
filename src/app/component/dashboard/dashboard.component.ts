import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
 
export class DashboardComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Technology",
    showInLegend: true,
    legendText: "{indexLabel}",
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
    
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "blue" },
		  { y: 28.2, name: "red" },
		  { y: 10.4, name: "Green" },
      { y: 4.00, name: "black" },
		  { y: 43.3, name: "yellow" }
		]
	  }]
	}	
  chartOptions1 = {
	  title: {
		  text: "Intreviewers"
	  },
	  animationEnabled: true,
	  axisY: {
		includeZero: true
	  },
	  data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
		dataPoints: [
			{ x: 10, y: 71 },
			{ x: 20, y: 55 },
      
			{ x: 50, y: 71 },
			{ x: 60, y: 92, indexLabel: "Highest\u2191" },
			
		]
	  }]
	}



  chartOptions2 = {
	  animationEnabled: true,
	  title:{
		text: "Upcoming Interviewers"
	  }, 
	  axisY: {
		title: "Interviwers",
		valueFormatString: "#0,,.",
		suffix: "N"
	  },
	  data: [{
		type: "splineArea",
		color: "rgba(54,158,173,.5)",
		xValueFormatString: "YYYY",
		dataPoints: [
		  {x: new Date(2004,0), y: 2506000},     
		  {x: new Date(2005,0), y: 2798000},     
		  {x: new Date(2006,0), y: 3386000},     
		  {x: new Date(2007,0), y: 6944000},     
		  {x: new Date(2008,0), y: 6026000},     
		  {x: new Date(2009,0), y: 2394000},     
		  {x: new Date(2010,0), y: 1872000},     
		  {x: new Date(2011,0), y: 2140000},     
		      
		  {x: new Date(2018,0), y: 2821000},     
		  {x: new Date(2019,0), y: 2000000},     
		  {x: new Date(2020,0), y: 1397000}    
		]
	  }]
	}	



  chartOptions3 = {
	  theme: "dark2",
	  animationEnabled: true,
	  exportEnabled: true,
	  title:{
		text: "Interview count",
	  },
	  axisY: {
		title: "number",
		valueFormatString: "#0.##°F",
		crosshair: {
		  enabled: true,
		  valueFormatString: "#0.0°F"
		}
	  },     
	  axisX: {
		valueFormatString: "MMM",
		crosshair: {
		  enabled: true,
		  snapToDataPoint: true
		}
	  },
	  toolTip: {
		shared: true,		
	  },
	  data: [
		{
		  type: "rangeColumn",
		  bevelEnabled: true,
		  yValueFormatString: "#0.##°F",
		  name: "New York",
		  showInLegend: true,
		  dataPoints: [   
			{ x: new Date(2021, 0, 1), y: [28, 40] },
			{ x: new Date(2021, 1, 1), y: [30, 42] },
			{ x: new Date(2021, 2, 1), y: [36, 50] },
			{ x: new Date(2021, 3, 1), y: [46, 62] },
			{ x: new Date(2021, 4, 1), y: [55, 71] },
			{ x: new Date(2021, 5, 1), y: [64, 80] },
			{ x: new Date(2021, 6, 1), y: [70, 85] },
			{ x: new Date(2021, 7, 1), y: [69, 83] },
			{ x: new Date(2021, 8, 1), y: [62, 76] },
			{ x: new Date(2021, 9, 1), y: [51, 65] },
			{ x: new Date(2021, 10, 1), y: [42, 54] },
			{ x: new Date(2021, 11, 1), y: [34, 44] }
		  ]
		}, {
		  type: "rangeColumn",
		  bevelEnabled: true,
		  showInLegend: true,
		  name: "London",
		  yValueFormatString: "#0.##°F",
		  dataPoints: [   
			{ x: new Date(2021, 0, 1), y: [37, 47] },
			{ x: new Date(2021, 1, 1), y: [37, 48] },
			{ x: new Date(2021, 2, 1), y: [39, 53] },
			{ x: new Date(2021, 3, 1), y: [43, 59] },
			{ x: new Date(2021, 4, 1), y: [48, 65] },
			
			{ x: new Date(2021, 9, 1), y: [48, 60] },
			{ x: new Date(2021, 10, 1), y: [41, 53] },
			{ x: new Date(2021, 11, 1), y: [38, 48] }
		  ]
		}]
	}	

  chartOptions4 = {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Today interview count"
    },
    data: [{
      type: "pyramid",
      indexLabelFontSize: 18,
      showInLegend: true,
      legendText: "{indexLabel}",
      toolTipContent: "{indexLabel}: {y}%",
      dataPoints: [
        { y: 32, indexLabel: "Research and Design" },
        { y: 28, indexLabel: "Manufacturing" },
        { y: 15, indexLabel: "Marketing" },
        { y: 13, indexLabel: "Shipping" },
        { y: 12, indexLabel: "Retail" }
      ]
    }]
  }	
}
