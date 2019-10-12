import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'homepage',
  template: 
  
  ` 
  <mat-sidenav-container class="sidenav-container">
    <mat-sidenav #drawer class="sidenav" fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false">
      <mat-toolbar style="background-color: blueviolet">Menu</mat-toolbar>
      <mat-nav-list>
        <a mat-list-item routerLink="/dashboard">DashBoard</a>
        <a mat-list-item routerLink="/abouut">About Us Page</a>
        <a mat-list-item routerLink="/userprofile">User Profile Page</a>
        <a mat-list-item routerLink="/home/dashboard">Water Saing tips</a>
        <a mat-list-item routerLink="/home/login">Feedback</a>
      </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content>
      <mat-toolbar color="primary">
        <button
          type="button"
          aria-label="Toggle sidenav"
          mat-icon-button
          (click)="drawer.toggle()"
          *ngIf="isHandset$ | async">
          <mat-icon aria-label="Side nav toggle icon"></mat-icon>
        </button>
        <span><h1 >Waater Conservation Project</h1></span>
      </mat-toolbar>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
</mat-sidenav-container>  
<barchart></barchart>
  `,
  styleUrls: ['./app.component.css']
})
export class HomePageComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
  
}

