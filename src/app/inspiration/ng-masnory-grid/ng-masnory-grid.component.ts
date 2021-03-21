import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-masnory-grid',
  templateUrl: './ng-masnory-grid.component.html',
  styleUrls: ['./ng-masnory-grid.component.less'],
})
export class NgMasnoryGridComponent implements OnInit {
  myImages = [];
  constructor(private fetch: FetchService) {}

  ngOnInit(): void {
    this.fetch.getImages().forEach((element) => {
      // this.myImages = ;
      this.myImages.push({
        path: element.img,
        width: 275,
        height: 100,
      });
    });
  }

  handleMasonryLayoutEvents(event: any) {}
}
