import { GridItem } from './../interfaces';
import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrls: ['./masonry-grid.component.less'],
})
export class MasonryGridComponent implements OnInit {
  // masonryItems: any[] = [];
  gridItems = [] as any;

  constructor(private fetch: FetchService) {
    // for (let index = 0; index < 100; index++) {
    //   const element = {
    //     img:
    //       'https://s3-ap-southeast-2.amazonaws.com/homes-photo-uploads-ketu/801082683.jpg',
    //   };
    // }
  }

  ngOnInit(): void {
    this.gridItems = this.fetch.getImages();
  }
}
