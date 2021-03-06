(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maratib/iwork/upwork/HomesNZ/the-angular-masonry-gird/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D3G2":
/*!**************************************************************************!*\
  !*** ./src/app/inspiration/ng-masnory-grid/ng-masnory-grid.component.ts ***!
  \**************************************************************************/
/*! exports provided: NgMasnoryGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMasnoryGridComponent", function() { return NgMasnoryGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../fetch.service */ "ltpT");



class NgMasnoryGridComponent {
    constructor(fetch) {
        this.fetch = fetch;
        this.myImages = [];
    }
    ngOnInit() {
        this.fetch.getImages().forEach((element) => {
            // this.myImages = ;
            this.myImages.push({
                path: element.img,
                width: 275,
                height: 100,
            });
        });
    }
    handleMasonryLayoutEvents(event) { }
}
NgMasnoryGridComponent.??fac = function NgMasnoryGridComponent_Factory(t) { return new (t || NgMasnoryGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"])); };
NgMasnoryGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgMasnoryGridComponent, selectors: [["app-ng-masnory-grid"]], decls: 2, vars: 0, template: function NgMasnoryGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "ng-masnory-grid works 123!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZy1tYXNub3J5LWdyaWQuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgMasnoryGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-masnory-grid',
                templateUrl: './ng-masnory-grid.component.html',
                styleUrls: ['./ng-masnory-grid.component.less'],
            }]
    }], function () { return [{ type: _fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"] }]; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inspiration_masonry_grid_masonry_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inspiration/masonry-grid/masonry-grid.component */ "Xy+j");



class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.??fac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 1, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-masonry-grid");
    } }, directives: [_inspiration_masonry_grid_masonry_grid_component__WEBPACK_IMPORTED_MODULE_1__["MasonryGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KCuo":
/*!****************************************************!*\
  !*** ./src/app/directives/my-directives.module.ts ***!
  \****************************************************/
/*! exports provided: MyDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDirectivesModule", function() { return MyDirectivesModule; });
/* harmony import */ var _broken_image_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broken-image.directive */ "L/tS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lazy_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-img.directive */ "sdP2");





class MyDirectivesModule {
}
MyDirectivesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: MyDirectivesModule });
MyDirectivesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function MyDirectivesModule_Factory(t) { return new (t || MyDirectivesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](MyDirectivesModule, { declarations: [_broken_image_directive__WEBPACK_IMPORTED_MODULE_0__["BrokenImageDirective"], _lazy_img_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_broken_image_directive__WEBPACK_IMPORTED_MODULE_0__["BrokenImageDirective"], _lazy_img_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MyDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_broken_image_directive__WEBPACK_IMPORTED_MODULE_0__["BrokenImageDirective"], _lazy_img_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [_broken_image_directive__WEBPACK_IMPORTED_MODULE_0__["BrokenImageDirective"], _lazy_img_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "L/tS":
/*!******************************************************!*\
  !*** ./src/app/directives/broken-image.directive.ts ***!
  \******************************************************/
/*! exports provided: BrokenImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokenImageDirective", function() { return BrokenImageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BrokenImageDirective {
    updateUrl() {
        if (!this.default) {
            this.src = 'assets/images/no-image.jpg';
        }
        else {
            this.src = this.default;
        }
    }
    load() {
        this.className = 'image-loaded';
    }
}
BrokenImageDirective.??fac = function BrokenImageDirective_Factory(t) { return new (t || BrokenImageDirective)(); };
BrokenImageDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: BrokenImageDirective, selectors: [["img"]], hostVars: 3, hostBindings: function BrokenImageDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("error", function BrokenImageDirective_error_HostBindingHandler() { return ctx.updateUrl(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????hostProperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.className);
    } }, inputs: { src: "src", default: "default" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BrokenImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img',
                host: {
                    '(error)': 'updateUrl()',
                    '[src]': 'src',
                },
            }]
    }], null, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], default: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-masonry';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["routerLink", "/"], ["routerLink", "/second"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "Xy+j":
/*!********************************************************************!*\
  !*** ./src/app/inspiration/masonry-grid/masonry-grid.component.ts ***!
  \********************************************************************/
/*! exports provided: MasonryGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonryGridComponent", function() { return MasonryGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../fetch.service */ "ltpT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_broken_image_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/broken-image.directive */ "L/tS");
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/lazy-img.directive */ "sdP2");









function MasonryGridComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class MasonryGridComponent {
    constructor(fetch) {
        this.fetch = fetch;
        // masonryItems: any[] = [];
        this.gridItems = [];
        this.masonryOptions = {
            gutter: 20,
            percentPosition: true,
            columnWidth: 275,
            animations: {
                show: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ],
                hide: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '*' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                ],
            },
        };
        // for (let index = 0; index < 100; index++) {
        //   const element = {
        //     img:
        //       'https://s3-ap-southeast-2.amazonaws.com/homes-photo-uploads-ketu/801082683.jpg',
        //   };
        // }
    }
    ngOnInit() {
        this.gridItems = this.fetch.getImages();
    }
    refreshLayout(event) {
        // this.masonry.reloadItems();
        if (this.masonry)
            this.masonry.layout();
    }
}
MasonryGridComponent.??fac = function MasonryGridComponent_Factory(t) { return new (t || MasonryGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"])); };
MasonryGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MasonryGridComponent, selectors: [["app-masonry-grid"]], viewQuery: function MasonryGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.masonry = _t.first);
    } }, decls: 4, vars: 2, consts: [[3, "options", "layoutComplete"], ["ngxMasonryItem", "", "class", "masonry-item", 4, "ngFor", "ngForOf"], ["ngxMasonryItem", "", 1, "masonry-item"], [1, "masonry-card"], ["masonryLazy", "", "loading", "lazy", 3, "src"]], template: function MasonryGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Masnory Grid Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ngx-masonry", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("layoutComplete", function MasonryGridComponent_Template_ngx_masonry_layoutComplete_2_listener($event) { return ctx.refreshLayout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MasonryGridComponent_div_3_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.masonryOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.gridItems);
    } }, directives: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryDirective"], _directives_broken_image_directive__WEBPACK_IMPORTED_MODULE_5__["BrokenImageDirective"], _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"]], styles: [".masonry-item[_ngcontent-%COMP%] {\n  transition: top 0.4s ease-in-out, left 0.4s ease-in-out;\n}\n.masonry-item[_ngcontent-%COMP%]   .masonry-card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  max-width: 560px;\n  min-height: 100px;\n  height: auto;\n  padding: 0;\n}\n.masonry-item[_ngcontent-%COMP%]   .masonry-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 10px;\n}\n@media only screen and (max-width: 500px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    margin: 10px auto !important;\n  }\n  .masonry-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 100% !important;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc29ucnktZ3JpZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLHVEQUFBO0FBREY7QUFGQTtFQU9JLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUhKO0FBVkE7RUF1Qk0sV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZOO0FBZUE7RUFDRTtJQUNFLDRCQUFBO0VBYkY7RUFZQTtJQUdJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBWko7QUFDRiIsImZpbGUiOiJtYXNvbnJ5LWdyaWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzb25yeS1pdGVtIHtcbiAgLy8gbWluLWhlaWdodDogMjA1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogOHB4O1xuICB0cmFuc2l0aW9uOiB0b3AgMC40cyBlYXNlLWluLW91dCwgbGVmdCAwLjRzIGVhc2UtaW4tb3V0O1xuICAubWFzb25yeS1jYXJkIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZDtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgICAvLyBtaW4td2lkdGg6IDI3NXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgaW1nIHtcbiAgICAgIC8vIG1heC13aWR0aDogMjcwcHg7XG4gICAgICAvLyBoZWlnaHQ6IDIwMHB4O1xuICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xuICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAvLyBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1hc29ucnktaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MasonryGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-masonry-grid',
                templateUrl: './masonry-grid.component.html',
                styleUrls: ['./masonry-grid.component.less'],
            }]
    }], function () { return [{ type: _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"] }]; }, { masonry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"]]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _inspiration_masonry_grid_masonry_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inspiration/masonry-grid/masonry-grid.component */ "Xy+j");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _directives_my_directives_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/my-directives.module */ "KCuo");
/* harmony import */ var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "w6Pf");
/* harmony import */ var _inspiration_ng_masnory_grid_ng_masnory_grid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inspiration/ng-masnory-grid/ng-masnory-grid.component */ "D3G2");




















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_9__["NgxMasonryModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _directives_my_directives_module__WEBPACK_IMPORTED_MODULE_16__["MyDirectivesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _inspiration_masonry_grid_masonry_grid_component__WEBPACK_IMPORTED_MODULE_14__["MasonryGridComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
        _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_17__["SecondPageComponent"],
        _inspiration_ng_masnory_grid_ng_masnory_grid_component__WEBPACK_IMPORTED_MODULE_18__["NgMasnoryGridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        ngx_masonry__WEBPACK_IMPORTED_MODULE_9__["NgxMasonryModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _directives_my_directives_module__WEBPACK_IMPORTED_MODULE_16__["MyDirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _inspiration_masonry_grid_masonry_grid_component__WEBPACK_IMPORTED_MODULE_14__["MasonryGridComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
                    _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_17__["SecondPageComponent"],
                    _inspiration_ng_masnory_grid_ng_masnory_grid_component__WEBPACK_IMPORTED_MODULE_18__["NgMasnoryGridComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    ngx_masonry__WEBPACK_IMPORTED_MODULE_9__["NgxMasonryModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _directives_my_directives_module__WEBPACK_IMPORTED_MODULE_16__["MyDirectivesModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ltpT":
/*!**********************************************!*\
  !*** ./src/app/inspiration/fetch.service.ts ***!
  \**********************************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';



class FetchService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        this.bathroomImgItems = [];
        this.allImages = [];
        this.http.get('assets/json/data.json').subscribe((res) => {
            this.jsonDataResult = res;
            // this.jsonDataResult.bathroom.forEach((element) => {
            //   const img =
            //     'https://imageserver.homes.co.nz/scale/350/0/' + element.images[0];
            //   console.log(img);
            //   this.allImages.push({ img });
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
    loadImages(cat) {
        cat.forEach((element) => {
            const img = 'https://imageserver.homes.co.nz/fill/275/180/' + element.images[0];
            // const img = element.images[0];
            console.log(img);
            this.allImages.push({ img });
        });
    }
    getImages() {
        return this.allImages;
    }
}
FetchService.??fac = function FetchService_Factory(t) { return new (t || FetchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: FetchService, factory: FetchService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FetchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sdP2":
/*!**************************************************!*\
  !*** ./src/app/directives/lazy-img.directive.ts ***!
  \**************************************************/
/*! exports provided: LazyImgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImgDirective", function() { return LazyImgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LazyImgDirective {
    constructor({ nativeElement }) {
        const supports = 'loading' in HTMLImageElement.prototype;
        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
        else {
            // fallback to IntersectionObserver
        }
    }
}
LazyImgDirective.??fac = function LazyImgDirective_Factory(t) { return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyImgDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: LazyImgDirective, selectors: [["img"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LazyImgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'img' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "w6Pf");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'second', component: _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_0__["SecondPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "w6Pf":
/*!************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.ts ***!
  \************************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SecondPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondPageComponent.??fac = function SecondPageComponent_Factory(t) { return new (t || SecondPageComponent)(); };
SecondPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SecondPageComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function SecondPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Second Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecondPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './second-page.component.html',
                styleUrls: ['./second-page.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map