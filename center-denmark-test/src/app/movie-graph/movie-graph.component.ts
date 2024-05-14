import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-movie-graph',
  templateUrl: './movie-graph.component.html',
  styleUrls: ['./movie-graph.component.scss']
})
export class MovieGraphComponent implements OnInit{

  chartData = {
    xData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yData: [] as number[]
  };

  echartsInstance: any;

  ngOnInit(): void {

    this.generateRandomData();

    this.echartsInstance = echarts.init(document.getElementById('line-graph'));

    const option = {
      xAxis: {
        type: 'category',
        name: '2023',
        data: this.chartData.xData
      },
      yAxis: {
        type: 'value',
        name: 'No. streams (Millions)'
      },
      series: [{
        data: this.chartData.yData,
        type: 'line'
      }]
    };

    this.echartsInstance.setOption(option);
  }

  generateRandomData() {
    for (let i = 0; i < this.chartData.xData.length; i++) {
      // Generate random number between 500 and 2000
      this.chartData.yData.push(Math.floor(Math.random() * (2000 - 500 + 1)) + 500);
    }
  }

}
