import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barchart',
  template: `
  <div class=container>
  <mat-card class="mat1">
  <doughnut></doughnut>
  <dailychart></dailychart>
  </mat-card>
  <mat-card class="mat2">
  
  <div>
    <div style="display:block">
    <canvas baseChart
    [datasets]="barChartData"
    [labels]="barChartLabels"
    [options]="barChartOptions"
    [legend]="barChartLegend"
    [chartType]="barChartType"></canvas>   
</div>
</div>  
<piechart></piechart>
</mat-card>
</div>
  `
  ,styleUrls: ['./bar.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels=['2006','2007','2008'];
  public barChartType='bar';
  public barChartLegend =true;
  public barChartData = [
    {data: [65,75,85],label:'Series A'},
    {data: [28,48,58],label:'Series B'} 
  ] 
  constructor() { }

  ngOnInit() {
  }

}
