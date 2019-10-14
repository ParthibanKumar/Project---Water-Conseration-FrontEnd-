import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barchart',
  template: `
  
   <mat-card class="mat2">
  <h4>Chart</h4>
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

</mat-card>

  `
  ,styleUrls: ['./bar.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels=['Today','Monthly'];
  public barChartType='bar';
  public barChartLegend =true;
  public barChartData = [
    {data: [65,75],label:'Community Average Consumption'},
    {data: [28,48],label:'Your Consumption'} 
  ] 
  constructor() { }

  ngOnInit() {
  }

}
