import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'piechart',
  template: `<div style="display: block">
  <canvas baseChart
  [data]="pieChartData"
  [labels]="pieChartLabels"
  [chartType]="pieChartType"></canvas>
  <div>
   
  
  `

})
export class LineComponent implements OnInit{
  public pieChartLabels = ['jan','Feb','Mar','April','may'];
  public pieChartData = [120,150,180,90];
  public pieChartType='pie';


    constructor(){}
ngOnInit(){}  
}

