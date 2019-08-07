(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ngx-ui-loader></ngx-ui-loader>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n    <h1 class=\"text-center text-uppercase\">{{ title }}</h1>\r\n    <hr />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/image-carousel/image-carousel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/image-carousel/image-carousel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-carousel [animation]=\"'slide'\" [interval]=\"3000\">\r\n  <mdb-carousel-item *ngFor=\"let image of images\">\r\n    <img class=\"d-block w-100\" [src]=\"imagePath + image.file_path\" />\r\n  </mdb-carousel-item>\r\n</mdb-carousel>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/movie-card/movie-card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/movie-card/movie-card.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card class=\"mb-3\">\r\n  <div class=\"view rgba-white-slight waves-light\" mdbWavesEffect>\r\n    <mdb-card-img\r\n      [src]=\"imagePath + movie.poster_path\"\r\n      [alt]=\"movie.title\"\r\n    ></mdb-card-img>\r\n    <a [href]=\"'/movies/' + movie.id\">\r\n      <div class=\"mask\"></div>\r\n    </a>\r\n  </div>\r\n  <mdb-card-body>\r\n    <mdb-card-title>\r\n      <h6 [mdbTooltip]=\"movie.title\" placement=\"top\">\r\n        {{ movie.title | truncate: 20 }}\r\n      </h6>\r\n    </mdb-card-title>\r\n\r\n    <mdb-card-text>\r\n      {{ movie.overview | truncate: 75 }}\r\n    </mdb-card-text>\r\n\r\n    <a [href]=\"'/movies/' + movie.id\" color=\"stretched-link\">Read more</a>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/movie-carousel/movie-carousel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/movie-carousel/movie-carousel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\r\n  <mdb-carousel-item *ngFor=\"let movie of movies\">\r\n    <div class=\"view w-100\">\r\n      <img\r\n        class=\"d-block w-100\"\r\n        [src]=\"imagePath + movie.backdrop_path\"\r\n        [alt]=\"movie.title\"\r\n      />\r\n\r\n      <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\r\n    </div>\r\n    <div class=\"carousel-caption\">\r\n      <h3 class=\"h3-responsive\">\r\n        <a [href]=\"'/movies/' + movie.id\" class=\"text-white\">\r\n          {{ movie.title }}\r\n        </a>\r\n      </h3>\r\n      <p>Trending today</p>\r\n    </div>\r\n  </mdb-carousel-item>\r\n</mdb-carousel>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar\r\n  SideClass=\"navbar navbar-expand-lg navbar-dark blue-gradient sticky-top scrolling-navbar\"\r\n  [containerInside]=\"false\"\r\n>\r\n  <mdb-navbar-brand\r\n    ><a class=\"navbar-brand\" href=\"/\">\r\n      AboutMovie\r\n    </a>\r\n  </mdb-navbar-brand>\r\n\r\n  <links>\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a\r\n          dropdownToggle\r\n          mdbWavesEffect\r\n          type=\"button\"\r\n          class=\"nav-link dropdown-toggle waves-light\"\r\n          mdbWavesEffect\r\n        >\r\n          Categories<span class=\"caret\"></span\r\n        ></a>\r\n        <div\r\n          *dropdownMenu\r\n          class=\"dropdown-menu dropdown dropdown-primary\"\r\n          role=\"menu\"\r\n        >\r\n          <a\r\n            class=\"dropdown-item waves-light\"\r\n            mdbWavesEffect\r\n            *ngFor=\"let g of genres\"\r\n            [href]=\"'/movies/categories/' + g.id\"\r\n            >{{ g.name }}</a\r\n          >\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link waves-light\"\r\n          [href]=\"'/movies/categories/popular'\"\r\n          mdbWavesEffect\r\n          >Popular</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link waves-light\"\r\n          [href]=\"'/movies/categories/top_rated'\"\r\n          mdbWavesEffect\r\n          >Top rated</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link waves-light\"\r\n          [href]=\"'/movies/categories/upcoming'\"\r\n          mdbWavesEffect\r\n          >Upcoming</a\r\n        >\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"https://github.com/thpadelis\" target=\"_blank\">\r\n          <mdb-icon fab icon=\"github\"></mdb-icon>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          href=\"https://www.linkedin.com/in/padelis-theodosiou/\"\r\n          target=\"_blank\"\r\n        >\r\n          <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n</mdb-navbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/person-card/person-card.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/person-card/person-card.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view overlay zoom mb-3 rounded z-depth-1\">\r\n  <img\r\n    [src]=\"person.profile_path ? imagePath : '../../../../assets/actor.jpg'\"\r\n    class=\"img-fluid\"\r\n    [alt]=\"person.name\"\r\n  />\r\n  <div class=\"mask flex-center waves-effect waves-light rgba-black-strong\">\r\n    <a\r\n      [href]=\"'/persons/' + person.id\"\r\n      class=\"white-text stretched-link text-center\"\r\n      >{{ person.name }}\r\n      <span class=\"d-block\" *ngIf=\"person.job\">{{ person.job }}</span>\r\n      <span class=\"d-block\" *ngIf=\"person.character\">{{\r\n        person.character\r\n      }}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/rating/rating.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/rating/rating.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"d-inline-block\" [mdbTooltip]=\"rating\" placement=\"top\">\r\n  <mdb-icon\r\n    [ngClass]=\"{ 'text-warning': i < rating }\"\r\n    fas\r\n    icon=\"star\"\r\n    *ngFor=\"let i of 10 | numArray\"\r\n  ></mdb-icon>\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/upcoming/upcoming.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/upcoming/upcoming.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"card card-image mb-3\"\r\n  [ngStyle]=\"{\r\n    background:\r\n      'url(' + imagePath + movie.backdrop_path + ') no-repeat center center'\r\n  }\"\r\n>\r\n  <div\r\n    class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\"\r\n  >\r\n    <div>\r\n      <h3 class=\"card-title pt-2\">\r\n        <strong>{{ movie.title }}</strong>\r\n      </h3>\r\n      <p>\r\n        {{ movie.overview }}\r\n      </p>\r\n      <a [href]=\"'/movies/' + movie.id\" class=\"stretched-link text-primary\"\r\n        >Read more</a\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/movie/movie.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/movie/movie.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main *ngIf=\"movie\">\r\n  <!-- Gallery -->\r\n  <section class=\"py-0\">\r\n    <app-image-carousel [images]=\"backdrops\"></app-image-carousel>\r\n  </section>\r\n\r\n  <!-- Info & Trailer -->\r\n  <section class=\"container\">\r\n    <!-- Header -->\r\n    <app-header [title]=\"movie.title\"></app-header>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-6 col-xl-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3\">\r\n            <img\r\n              [src]=\"imagePath + movie.poster_path\"\r\n              [alt]=\"movie.title\"\r\n              class=\"d-block w-100\"\r\n            />\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3\">\r\n            <app-rating [rating]=\"movie.vote_average\"></app-rating>\r\n\r\n            <!-- Genre -->\r\n            <p class=\"font-weight-bold mb-1\">\r\n              Genre:\r\n              <span class=\"font-weight-normal\">{{ movie.genres[0].name }}</span>\r\n            </p>\r\n            <!-- Release date -->\r\n            <p class=\"font-weight-bold mb-1\">\r\n              Release date:\r\n              <span class=\"font-weight-normal\">{{\r\n                movie.release_date | date: shortDate\r\n              }}</span>\r\n            </p>\r\n            <!-- Running time -->\r\n            <p class=\"font-weight-bold mb-1\">\r\n              Running time:\r\n              <span class=\"font-weight-normal\">{{ movie.runtime }} mins</span>\r\n            </p>\r\n            <!-- Country -->\r\n            <p class=\"font-weight-bold mb-1\">\r\n              Country:\r\n              <span class=\"font-weight-normal\">{{\r\n                movie.production_countries[0].iso_3166_1\r\n              }}</span>\r\n            </p>\r\n            <!-- Overview -->\r\n            <p>{{ movie.overview }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-stretch\"\r\n      >\r\n        <!-- YouTube trailer -->\r\n        <iframe\r\n          *ngIf=\"videos\"\r\n          id=\"ytplayer\"\r\n          type=\"text/html\"\r\n          class=\"d-block w-100 h-100\"\r\n          [src]=\"videoUrl\"\r\n          frameborder=\"0\"\r\n        ></iframe>\r\n        <!-- <pre>{{ videos | json }}</!-->\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Actor cast -->\r\n  <section class=\"container\">\r\n    <app-header [title]=\"'actor cast'\"></app-header>\r\n\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex align-items-stretch\"\r\n        *ngFor=\"let c of cast\"\r\n      >\r\n        <app-person-card [person]=\"c\"></app-person-card>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Crew -->\r\n  <section class=\"container\">\r\n    <app-header [title]=\"'crew'\"></app-header>\r\n\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex align-items-stretch\"\r\n        *ngFor=\"let c of crew\"\r\n      >\r\n        <app-person-card [person]=\"c\"></app-person-card>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/movies/movies.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/movies/movies.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main>\r\n  <!-- Carousel -->\r\n  <app-movie-carousel [movies]=\"trending\" *ngIf=\"trending\"></app-movie-carousel>\r\n\r\n  <!-- Movies -->\r\n  <section class=\"container\">\r\n    <!-- Header -->\r\n    <app-header [title]=\"'watch movies online'\"></app-header>\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex align-items-stretch\"\r\n        *ngFor=\"let movie of movies\"\r\n      >\r\n        <app-movie-card [movie]=\"movie\"></app-movie-card>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Latest movie -->\r\n  <section class=\"container\">\r\n    <!-- Header -->\r\n    <app-header [title]=\"'comming soon'\"></app-header>\r\n\r\n    <div class=\"row\" *ngIf=\"upcoming\">\r\n      <div class=\"col-sm-12\">\r\n        <app-upcoming [movie]=\"upcoming\"></app-upcoming>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/person/person.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/person/person.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<main *ngIf=\"person\">\r\n  <!-- Info -->\r\n  <section class=\"container\">\r\n    <app-header [title]=\"person.name\"></app-header>\r\n\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-sm-12 col-md-3 col-lg-3 col-xl-3\">\r\n        <app-person-card [person]=\"person\"></app-person-card>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-7 col-lg-7 col-xl-7\">\r\n        <p>{{ person.biography }}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-8 col-lg-8 col-xl-8 offset-md-1 \">\r\n        <!-- Birthday -->\r\n        <p class=\"font-weight-bold\">\r\n          Born:\r\n          <span class=\"font-weight-normal\">{{\r\n            person.birthday | date: shortDate\r\n          }}</span>\r\n          in\r\n          <span class=\"font-weight-normal\">{{ person.place_of_birth }}</span>\r\n        </p>\r\n        <!-- Deathday -->\r\n        <p class=\"font-weight-bold\" *ngIf=\"person.deathday\">\r\n          Died:\r\n          <span class=\"font-weight-normal\">{{\r\n            person.deathday | date: shortDate\r\n          }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/movies/movies.component */ "./src/app/views/movies/movies.component.ts");
/* harmony import */ var _views_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/movie/movie.component */ "./src/app/views/movie/movie.component.ts");
/* harmony import */ var _views_person_person_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/person/person.component */ "./src/app/views/person/person.component.ts");






const routes = [
    {
        path: "",
        component: _views_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]
    },
    {
        path: "movies/:id",
        component: _views_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"]
    },
    {
        path: "persons/:id",
        component: _views_person_person_component__WEBPACK_IMPORTED_MODULE_5__["PersonComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MovieDB';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_movies_movies_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/movies/movies.module */ "./src/app/views/movies/movies.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _views_movie_movie_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/movie/movie.module */ "./src/app/views/movie/movie.module.ts");
/* harmony import */ var _views_person_person_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/person/person.module */ "./src/app/views/person/person.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderModule"].forRoot({ fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["SPINNER"].foldingCube }),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _views_movies_movies_module__WEBPACK_IMPORTED_MODULE_7__["MoviesModule"],
            _views_movie_movie_module__WEBPACK_IMPORTED_MODULE_9__["MovieModule"],
            _views_person_person_module__WEBPACK_IMPORTED_MODULE_10__["PersonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap\");\nh1 {\n  font-family: \"Raleway\", sans-serif;\n}\nhr {\n  border: 0;\n  height: 1px;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL0M6XFxVc2Vyc1xcUGFkZWxpc1xcRG9jdW1lbnRzXFxHaXRIdWJcXEFib3V0LU1vdmllL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1GQUFBO0FBQ1I7RUFDRSxrQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9HQUFBO0VBT0EscUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmhyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICApO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjc1KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/shared/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/components/shared/header/header.component.ts");



let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        imports: [],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/components/shared/image-carousel/image-carousel.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/image-carousel/image-carousel.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 75vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center center;\n     object-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaW1hZ2UtY2Fyb3VzZWwvQzpcXFVzZXJzXFxQYWRlbGlzXFxEb2N1bWVudHNcXEdpdEh1YlxcQWJvdXQtTW92aWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcaW1hZ2UtY2Fyb3VzZWxcXGltYWdlLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9pbWFnZS1jYXJvdXNlbC9pbWFnZS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlDQUFBO0tBQUEsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLWNhcm91c2VsL2ltYWdlLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/image-carousel/image-carousel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/image-carousel/image-carousel.component.ts ***!
  \******************************************************************************/
/*! exports provided: ImageCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselComponent", function() { return ImageCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageCarouselComponent = class ImageCarouselComponent {
    constructor() {
        this.imagePath = "https://image.tmdb.org/t/p/original";
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageCarouselComponent.prototype, "images", void 0);
ImageCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-image-carousel",
        template: __webpack_require__(/*! raw-loader!./image-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/image-carousel/image-carousel.component.html"),
        styles: [__webpack_require__(/*! ./image-carousel.component.scss */ "./src/app/components/shared/image-carousel/image-carousel.component.scss")]
    })
], ImageCarouselComponent);



/***/ }),

/***/ "./src/app/components/shared/image-carousel/image-carousel.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/image-carousel/image-carousel.module.ts ***!
  \***************************************************************************/
/*! exports provided: ImageCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselModule", function() { return ImageCarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-carousel.component */ "./src/app/components/shared/image-carousel/image-carousel.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ImageCarouselModule = class ImageCarouselModule {
};
ImageCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ImageCarouselComponent"]],
        imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        exports: [_image_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ImageCarouselComponent"]]
    })
], ImageCarouselModule);



/***/ }),

/***/ "./src/app/components/shared/movie-card/movie-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/movie-card/movie-card.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL21vdmllLWNhcmQvbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/movie-card/movie-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/movie-card/movie-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieCardComponent = class MovieCardComponent {
    constructor() {
        this.imagePath = "https://image.tmdb.org/t/p/w500";
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieCardComponent.prototype, "movie", void 0);
MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movie-card",
        template: __webpack_require__(/*! raw-loader!./movie-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/movie-card/movie-card.component.html"),
        styles: [__webpack_require__(/*! ./movie-card.component.scss */ "./src/app/components/shared/movie-card/movie-card.component.scss")]
    })
], MovieCardComponent);



/***/ }),

/***/ "./src/app/components/shared/movie-card/movie-card.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/movie-card/movie-card.module.ts ***!
  \*******************************************************************/
/*! exports provided: MovieCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardModule", function() { return MovieCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-card.component */ "./src/app/components/shared/movie-card/movie-card.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");





let MovieCardModule = class MovieCardModule {
};
MovieCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"]],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsFreeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]
        ],
        exports: [_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"]]
    })
], MovieCardModule);



/***/ }),

/***/ "./src/app/components/shared/movie-carousel/movie-carousel.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/movie-carousel/movie-carousel.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 75vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center top;\n     object-position: center top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbW92aWUtY2Fyb3VzZWwvQzpcXFVzZXJzXFxQYWRlbGlzXFxEb2N1bWVudHNcXEdpdEh1YlxcQWJvdXQtTW92aWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcbW92aWUtY2Fyb3VzZWxcXG1vdmllLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9tb3ZpZS1jYXJvdXNlbC9tb3ZpZS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO0tBQUEsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL21vdmllLWNhcm91c2VsL21vdmllLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/movie-carousel/movie-carousel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/movie-carousel/movie-carousel.component.ts ***!
  \******************************************************************************/
/*! exports provided: MovieCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCarouselComponent", function() { return MovieCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieCarouselComponent = class MovieCarouselComponent {
    constructor() {
        this.imagePath = "https://image.tmdb.org/t/p/original";
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieCarouselComponent.prototype, "movies", void 0);
MovieCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movie-carousel",
        template: __webpack_require__(/*! raw-loader!./movie-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/movie-carousel/movie-carousel.component.html"),
        styles: [__webpack_require__(/*! ./movie-carousel.component.scss */ "./src/app/components/shared/movie-carousel/movie-carousel.component.scss")]
    })
], MovieCarouselComponent);



/***/ }),

/***/ "./src/app/components/shared/movie-carousel/movie-carousel.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/movie-carousel/movie-carousel.module.ts ***!
  \***************************************************************************/
/*! exports provided: MovieCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCarouselModule", function() { return MovieCarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-carousel.component */ "./src/app/components/shared/movie-carousel/movie-carousel.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let MovieCarouselModule = class MovieCarouselModule {
};
MovieCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_movie_carousel_component__WEBPACK_IMPORTED_MODULE_2__["MovieCarouselComponent"]],
        imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [_movie_carousel_component__WEBPACK_IMPORTED_MODULE_2__["MovieCarouselComponent"]]
    })
], MovieCarouselModule);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movieService.getGenres().subscribe(g => (this.genres = g.genres));
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.module.ts ***!
  \***********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
    })
], NavigationModule);



/***/ }),

/***/ "./src/app/components/shared/person-card/person-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/person-card/person-card.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BlcnNvbi1jYXJkL3BlcnNvbi1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shared/person-card/person-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/person-card/person-card.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardComponent", function() { return PersonCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let PersonCardComponent = class PersonCardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.basePath = "https://image.tmdb.org/t/p/original";
    }
    ngOnInit() {
        this.imagePath = this.sanitizer.bypassSecurityTrustUrl(`${this.basePath}${this.person.profile_path}`);
    }
};
PersonCardComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonCardComponent.prototype, "person", void 0);
PersonCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-person-card",
        template: __webpack_require__(/*! raw-loader!./person-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/person-card/person-card.component.html"),
        styles: [__webpack_require__(/*! ./person-card.component.scss */ "./src/app/components/shared/person-card/person-card.component.scss")]
    })
], PersonCardComponent);



/***/ }),

/***/ "./src/app/components/shared/person-card/person-card.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shared/person-card/person-card.module.ts ***!
  \*********************************************************************/
/*! exports provided: PersonCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardModule", function() { return PersonCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _person_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person-card.component */ "./src/app/components/shared/person-card/person-card.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let PersonCardModule = class PersonCardModule {
};
PersonCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_person_card_component__WEBPACK_IMPORTED_MODULE_2__["PersonCardComponent"]],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsFreeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ],
        exports: [_person_card_component__WEBPACK_IMPORTED_MODULE_2__["PersonCardComponent"]]
    })
], PersonCardModule);



/***/ }),

/***/ "./src/app/components/shared/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/rating/rating.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RatingComponent.prototype, "rating", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rating",
        template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/rating/rating.component.html"),
        styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/components/shared/rating/rating.component.scss")]
    })
], RatingComponent);



/***/ }),

/***/ "./src/app/components/shared/rating/rating.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/shared/rating/rating.module.ts ***!
  \***********************************************************/
/*! exports provided: RatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component */ "./src/app/components/shared/rating/rating.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");






let RatingModule = class RatingModule {
};
RatingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]],
        imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"]],
        exports: [_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]]
    })
], RatingModule);



/***/ }),

/***/ "./src/app/components/shared/upcoming/upcoming.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/upcoming/upcoming.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3VwY29taW5nL3VwY29taW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shared/upcoming/upcoming.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/upcoming/upcoming.component.ts ***!
  \******************************************************************/
/*! exports provided: UpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingComponent", function() { return UpcomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpcomingComponent = class UpcomingComponent {
    constructor() {
        this.imagePath = "https://image.tmdb.org/t/p/original";
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpcomingComponent.prototype, "movie", void 0);
UpcomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-upcoming",
        template: __webpack_require__(/*! raw-loader!./upcoming.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/upcoming/upcoming.component.html"),
        styles: [__webpack_require__(/*! ./upcoming.component.scss */ "./src/app/components/shared/upcoming/upcoming.component.scss")]
    })
], UpcomingComponent);



/***/ }),

/***/ "./src/app/components/shared/upcoming/upcoming.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/upcoming/upcoming.module.ts ***!
  \***************************************************************/
/*! exports provided: UpcomingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingModule", function() { return UpcomingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upcoming_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming.component */ "./src/app/components/shared/upcoming/upcoming.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let UpcomingModule = class UpcomingModule {
};
UpcomingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_upcoming_component__WEBPACK_IMPORTED_MODULE_2__["UpcomingComponent"]],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsFreeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        exports: [_upcoming_component__WEBPACK_IMPORTED_MODULE_2__["UpcomingComponent"]]
    })
], UpcomingModule);



/***/ }),

/***/ "./src/app/models/endpoints.ts":
/*!*************************************!*\
  !*** ./src/app/models/endpoints.ts ***!
  \*************************************/
/*! exports provided: Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
const Endpoints = {
    popular: "/movie/popular",
    topRated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    latest: "/movie/latest",
    trendingMovie: "/trending/movie/day",
    genresMovie: "/genre/movie/list"
};


/***/ }),

/***/ "./src/app/pipes/numArray.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/numArray.pipe.ts ***!
  \****************************************/
/*! exports provided: NumArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumArrayPipe", function() { return NumArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumArrayPipe = class NumArrayPipe {
    transform(value) {
        const rating = Math.trunc(value);
        const numbers = [];
        for (let i = 1; i <= rating; i++) {
            numbers.push(i);
        }
        return numbers;
    }
};
NumArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "numArray"
    })
], NumArrayPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _numArray_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numArray.pipe */ "./src/app/pipes/numArray.pipe.ts");





let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncatePipe"], _numArray_pipe__WEBPACK_IMPORTED_MODULE_4__["NumArrayPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncatePipe"], _numArray_pipe__WEBPACK_IMPORTED_MODULE_4__["NumArrayPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TruncatePipe = class TruncatePipe {
    transform(text, length, extension = "...") {
        if (text.length >= length) {
            return text.slice(0, length) + extension;
        }
        else {
            return text;
        }
    }
};
TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "truncate"
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/endpoints */ "./src/app/models/endpoints.ts");





let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.params = { params: { api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey } };
        this.baseUrl = "https://api.themoviedb.org/3";
    }
    getPopular() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].popular, this.params);
    }
    getTopRated() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].topRated, this.params);
    }
    getUpcoming() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].upcoming, this.params);
    }
    getLatest() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].latest, this.params);
    }
    getTrending() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].trendingMovie, this.params);
    }
    getGenres() {
        return this.http.get(this.baseUrl + _models_endpoints__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].genresMovie, this.params);
    }
    getMovie(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}`, this.params);
    }
    getVideos(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}/videos`, this.params);
    }
    getImages(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}/images`, this.params);
    }
    getCredits(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}/credits`, this.params);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
    })
], MovieService);



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PersonService = class PersonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.themoviedb.org/3";
        this.params = { params: { api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey } };
    }
    getDetails(id) {
        return this.http.get(`${this.baseUrl}/person/${id}`, this.params);
    }
};
PersonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PersonService);



/***/ }),

/***/ "./src/app/services/seo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SeoService = class SeoService {
    constructor(meta, titleService) {
        this.meta = meta;
        this.titleService = titleService;
    }
    setTitle(pageTitle) {
        this.titleService.setTitle(`${pageTitle} | About Movie`);
    }
    addMetaTags() {
        this.meta.addTags([
            { name: "description", content: "About Movie is a website that " },
            { name: "robots", content: "INDEX, FOLLOW" },
            { name: "author", content: "Padelis Theodosiou" },
            { name: "keywords", content: "TypeScript, Angular, JavaScript" },
            { httpEquiv: "Content-Type", content: "text/html" },
            { charset: "UTF-8" }
        ], true);
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SeoService);



/***/ }),

/***/ "./src/app/views/movie/movie.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/movie/movie.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vdmllL21vdmllLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/movie/movie.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/movie/movie.component.ts ***!
  \************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/seo.service */ "./src/app/services/seo.service.ts");







let MovieComponent = class MovieComponent {
    constructor(movieService, ngxService, router, sanitizer, seoService) {
        this.movieService = movieService;
        this.ngxService = ngxService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.seoService = seoService;
        this.imagePath = "https://image.tmdb.org/t/p/original";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxService.start();
            yield this.movieService
                .getMovie(Number(this.router.snapshot.paramMap.get("id")))
                .subscribe(m => {
                this.movie = m;
                this.seoService.setTitle(m.title);
            });
            yield this.movieService
                .getVideos(Number(this.router.snapshot.paramMap.get("id")))
                .subscribe(v => {
                this.videos = v.results;
                this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${v.results[0].key}?controls=0`);
            });
            yield this.movieService
                .getImages(Number(this.router.snapshot.paramMap.get("id")))
                .subscribe(images => {
                this.backdrops = images.backdrops;
                this.posters = images.posters;
            });
            yield this.movieService
                .getCredits(Number(this.router.snapshot.paramMap.get("id")))
                .subscribe(p => {
                this.cast = p.cast;
                this.crew = p.crew;
            });
            this.ngxService.stop();
        });
    }
};
MovieComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"] }
];
MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movie",
        template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/movie/movie.component.html"),
        styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/views/movie/movie.component.scss")]
    })
], MovieComponent);



/***/ }),

/***/ "./src/app/views/movie/movie.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/movie/movie.module.ts ***!
  \*********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.component */ "./src/app/views/movie/movie.component.ts");
/* harmony import */ var src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/shared/navbar/navbar.module */ "./src/app/components/shared/navbar/navbar.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/header/header.module */ "./src/app/components/shared/header/header.module.ts");
/* harmony import */ var src_app_components_shared_image_carousel_image_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/image-carousel/image-carousel.module */ "./src/app/components/shared/image-carousel/image-carousel.module.ts");
/* harmony import */ var src_app_components_shared_rating_rating_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/rating/rating.module */ "./src/app/components/shared/rating/rating.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_components_shared_person_card_person_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shared/person-card/person-card.module */ "./src/app/components/shared/person-card/person-card.module.ts");










let MovieModule = class MovieModule {
};
MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]],
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
            src_app_components_shared_image_carousel_image_carousel_module__WEBPACK_IMPORTED_MODULE_6__["ImageCarouselModule"],
            src_app_components_shared_rating_rating_module__WEBPACK_IMPORTED_MODULE_7__["RatingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_app_components_shared_person_card_person_card_module__WEBPACK_IMPORTED_MODULE_9__["PersonCardModule"]
        ],
        exports: [_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"]]
    })
], MovieModule);



/***/ }),

/***/ "./src/app/views/movies/movies.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/movies/movies.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/movies/movies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/movies/movies.component.ts ***!
  \**************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo.service */ "./src/app/services/seo.service.ts");





let MoviesComponent = class MoviesComponent {
    constructor(movieService, ngxService, seoService) {
        this.movieService = movieService;
        this.ngxService = ngxService;
        this.seoService = seoService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.seoService.setTitle("Home");
            this.seoService.addMetaTags();
            this.ngxService.start();
            yield this.movieService
                .getPopular()
                .subscribe(m => (this.movies = m.results));
            yield this.movieService
                .getUpcoming()
                .subscribe(m => (this.upcoming = m.results[this.randomInt(0, 20)]));
            yield this.movieService
                .getTrending()
                .subscribe(m => (this.trending = m.results.slice(0, 4)));
            this.ngxService.stop();
        });
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
};
MoviesComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] },
    { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-movies",
        template: __webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/movies/movies.component.html"),
        styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/views/movies/movies.component.scss")]
    })
], MoviesComponent);



/***/ }),

/***/ "./src/app/views/movies/movies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/movies/movies.module.ts ***!
  \***********************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.component */ "./src/app/views/movies/movies.component.ts");
/* harmony import */ var src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/navbar/navbar.module */ "./src/app/components/shared/navbar/navbar.module.ts");
/* harmony import */ var src_app_components_shared_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/movie-card/movie-card.module */ "./src/app/components/shared/movie-card/movie-card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/header/header.module */ "./src/app/components/shared/header/header.module.ts");
/* harmony import */ var src_app_components_shared_upcoming_upcoming_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/shared/upcoming/upcoming.module */ "./src/app/components/shared/upcoming/upcoming.module.ts");
/* harmony import */ var src_app_components_shared_movie_carousel_movie_carousel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shared/movie-carousel/movie-carousel.module */ "./src/app/components/shared/movie-carousel/movie-carousel.module.ts");










let MoviesModule = class MoviesModule {
};
MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]],
        imports: [
            src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            src_app_components_shared_movie_card_movie_card_module__WEBPACK_IMPORTED_MODULE_5__["MovieCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            src_app_components_shared_upcoming_upcoming_module__WEBPACK_IMPORTED_MODULE_8__["UpcomingModule"],
            src_app_components_shared_movie_carousel_movie_carousel_module__WEBPACK_IMPORTED_MODULE_9__["MovieCarouselModule"]
        ],
        exports: [_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]]
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/views/person/person.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/person/person.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/person/person.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/person/person.component.ts ***!
  \**************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/seo.service */ "./src/app/services/seo.service.ts");






let PersonComponent = class PersonComponent {
    constructor(personService, ngxService, router, seoSercive) {
        this.personService = personService;
        this.ngxService = ngxService;
        this.router = router;
        this.seoSercive = seoSercive;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxService.start();
            yield this.personService
                .getDetails(Number(this.router.snapshot.paramMap.get("id")))
                .subscribe(p => {
                this.person = p;
                this.seoSercive.setTitle(p.name);
            });
            this.ngxService.stop();
        });
    }
};
PersonComponent.ctorParameters = () => [
    { type: src_app_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"] }
];
PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-person",
        template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/person/person.component.html"),
        styles: [__webpack_require__(/*! ./person.component.scss */ "./src/app/views/person/person.component.scss")]
    })
], PersonComponent);



/***/ }),

/***/ "./src/app/views/person/person.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/person/person.module.ts ***!
  \***********************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.component */ "./src/app/views/person/person.component.ts");
/* harmony import */ var src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/navbar/navbar.module */ "./src/app/components/shared/navbar/navbar.module.ts");
/* harmony import */ var src_app_components_shared_person_card_person_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared/person-card/person-card.module */ "./src/app/components/shared/person-card/person-card.module.ts");
/* harmony import */ var src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/header/header.module */ "./src/app/components/shared/header/header.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let PersonModule = class PersonModule {
};
PersonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]],
        imports: [
            src_app_components_shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            src_app_components_shared_person_card_person_card_module__WEBPACK_IMPORTED_MODULE_5__["PersonCardModule"],
            src_app_components_shared_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]]
    })
], PersonModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiKey: "c73ee3a91855be06a53cfffe329cfe0b"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Padelis\Documents\GitHub\About-Movie\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map