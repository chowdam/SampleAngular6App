import { Component,  OnInit } from '@angular/core';
import { LoggerService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-test';

  constructor(logger: LoggerService) {
    logger.log('hello angular - from logging lib');
  }
}
