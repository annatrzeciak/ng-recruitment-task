import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  showSpinner: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.showSpinner = false;
  }
  goToHome() {
    this.showSpinner = true;
    this.router.navigate(['/info']);
  }
}
