import { RootObject, Bathroom, GridItem, Base } from './interfaces';
import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  jsonDataResult: RootObject | undefined;
  bathroomImgItems: GridItem[] = [];
  allImages: GridItem[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/json/data.json').subscribe((res) => {
      this.jsonDataResult = <RootObject>res;

      // this.jsonDataResult.bathroom.forEach((element) => {
      //   this.allImages.push({ img: element.images[0] });
      // });

      // this.loadImages(this.jsonDataResult.bathroom);
      // this.loadImages(this.jsonDataResult.bedroom);
      // this.loadImages(this.jsonDataResult.kitchen);
      // this.loadImages(this.jsonDataResult.living);

      for (let index = 1; index < 58; index++) {
        // const img = 'http://gallery.tst/' + index + '.png';
        const img = 'https://json.softsons.com/gallery/' + index + '.png';
        console.log(img);

        this.allImages.push({ img });
      }
    });
  }

  private loadImages(cat: Base[]) {
    cat.forEach((element: Base) => {
      const img =
        'https://imageserver.homes.co.nz/scale/350/0/' + element.images[0];
      console.log(img);

      this.allImages.push({ img });
    });
  }

  getImages() {
    return this.allImages;
  }

  // getAll() {
  //   return this.jsonDataResult;
  // }

  //  public getAll(): Observable<ApiResponse[]> {
  //   return this.http.get<ApiResponse[]>('https://gateway.ketu.homes-test.com/inspiration?categories=bedroom,kitchen,living,bathroom&page=1&city=&suburbs=')
  //     .pipe(
  //       tap(data => console.log('Data retrieved!')),
  //       catchError(this.handleError<ApiResponse[]>('Get Data', []))
  //     );
  //  }

  //  private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error);
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
