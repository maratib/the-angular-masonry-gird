import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxMasonryModule } from 'ngx-masonry';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MasonryGridComponent } from './inspiration/masonry-grid/masonry-grid.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyDirectivesModule } from './directives/my-directives.module';

@NgModule({
  declarations: [AppComponent, MasonryGridComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    NgxMasonryModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MyDirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
