import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dailychart',
  template: `
  <mat-card class="bar2">
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
})
export class DailyHoursChartCommponent implements OnInit {

  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
  public barChartType='bar';
  public barChartLegend =true;
  public barChartData = [
    {data: [1,4,4,7,10,44,3,44,67,89,20,21,22,24,25,26,45,31],label:''},
    
  ] 
  constructor() { }

  ngOnInit() {
  }

}