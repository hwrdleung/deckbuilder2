(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"main-main-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-dialog></app-dialog>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-management/actions/userActions */ "./src/app/state-management/actions/userActions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Detect browser session
        if (sessionStorage.getItem('sessionData')) {
            var sessionData = sessionStorage.getItem('sessionData');
            sessionData = JSON.parse(sessionData);
            this.store.dispatch({ type: _state_management_actions_userActions__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], payload: sessionData });
            this.router.navigate(['dashboard']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _state_management_reducers_userReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state-management/reducers/userReducer */ "./src/app/state-management/reducers/userReducer.ts");
/* harmony import */ var _state_management_reducers_projectReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state-management/reducers/projectReducer */ "./src/app/state-management/reducers/projectReducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ userReducer: _state_management_reducers_userReducer__WEBPACK_IMPORTED_MODULE_11__["userReducer"], projectReducer: _state_management_reducers_projectReducer__WEBPACK_IMPORTED_MODULE_12__["projectReducer"] })
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/borderControl.ts":
/*!******************************************!*\
  !*** ./src/app/classes/borderControl.ts ***!
  \******************************************/
/*! exports provided: BorderControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderControl", function() { return BorderControl; });
var BorderControl = /** @class */ (function () {
    function BorderControl() {
        this.showFullBorder = false;
        this.showTopBorder = false;
        this.showRightBorder = false;
        this.showBottomBorder = false;
        this.showLeftBorder = false;
        this.borderStyles = [
            "Solid",
            "Dashed",
            "Dotted",
            "Groove",
            "Double"
        ];
        // Full border settings
        this.fullBorderWidth = 1;
        this.fullBorderColor = '#000';
        this.fullBorderStyle = 'solid';
        // Top border settings
        this.topBorderWidth = 1;
        this.topBorderColor = '#000';
        this.topBorderStyle = 'solid';
        // Bottom border settings
        this.bottomBorderWidth = 1;
        this.bottomBorderColor = '#000';
        this.bottomBorderStyle = 'solid';
        // Right border settings
        this.rightBorderWidth = 1;
        this.rightBorderColor = '#000';
        this.rightBorderStyle = 'solid';
        // Left border settings
        this.leftBorderWidth = 1;
        this.leftBorderColor = '#000';
        this.leftBorderStyle = 'solid';
        // Radius settings
        this.topLeftRadius = 0;
        this.topRightRadius = 0;
        this.bottomLeftRadius = 0;
        this.bottomRightRadius = 0;
    }
    BorderControl.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    BorderControl.prototype.getFullBorderCss = function () {
        var cssProperty = this.fullBorderWidth + 'px ' + this.fullBorderColor + ' ' + this.fullBorderStyle;
        return cssProperty;
    };
    BorderControl.prototype.getTopBorderCss = function () {
        var cssProperty = this.topBorderWidth + 'px ' + this.topBorderColor + ' ' + this.topBorderStyle;
        return cssProperty;
    };
    BorderControl.prototype.getRightBorderCss = function () {
        var cssProperty = this.rightBorderWidth + 'px ' + this.rightBorderColor + ' ' + this.rightBorderStyle;
        return cssProperty;
    };
    BorderControl.prototype.getBottomBorderCss = function () {
        var cssProperty = this.bottomBorderWidth + 'px ' + this.bottomBorderColor + ' ' + this.bottomBorderStyle;
        return cssProperty;
    };
    BorderControl.prototype.getLeftBorderCss = function () {
        var cssProperty = this.leftBorderWidth + 'px ' + this.leftBorderColor + ' ' + this.leftBorderStyle;
        return cssProperty;
    };
    BorderControl.prototype.getBorderRadiusCss = function () {
        var borderRadiusCss = '';
        borderRadiusCss += this.topLeftRadius + 'px ';
        borderRadiusCss += this.topRightRadius + 'px ';
        borderRadiusCss += this.bottomRightRadius + 'px ';
        borderRadiusCss += this.bottomLeftRadius + 'px';
        return borderRadiusCss;
    };
    // Getter, setter, toggler
    BorderControl.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    BorderControl.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    BorderControl.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    return BorderControl;
}());



/***/ }),

/***/ "./src/app/classes/documentSize.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/documentSize.ts ***!
  \*****************************************/
/*! exports provided: DocumentSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSize", function() { return DocumentSize; });
var DocumentSize = /** @class */ (function () {
    function DocumentSize(properties) {
        this.height = properties.height;
        this.width = properties.width;
        this.isCustom = properties.isCustom;
        this.jsPdfFormat = properties.jsPdfFormat;
        this.jsPdfOrientation = properties.jsPdfOrientation;
    }
    return DocumentSize;
}());



/***/ }),

/***/ "./src/app/classes/galleryImage.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/galleryImage.ts ***!
  \*****************************************/
/*! exports provided: GalleryImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImage", function() { return GalleryImage; });
var GalleryImage = /** @class */ (function () {
    function GalleryImage() {
        this.url = "";
        this.id = 0;
        this.fileName = '';
    }
    GalleryImage.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    GalleryImage.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    GalleryImage.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    return GalleryImage;
}());



/***/ }),

/***/ "./src/app/classes/imageObject.ts":
/*!****************************************!*\
  !*** ./src/app/classes/imageObject.ts ***!
  \****************************************/
/*! exports provided: ImageObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObject", function() { return ImageObject; });
/* harmony import */ var _slideObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideObject */ "./src/app/classes/slideObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageObject = /** @class */ (function (_super) {
    __extends(ImageObject, _super);
    function ImageObject() {
        var _this = _super.call(this) || this;
        _this.type = 'ImageObject';
        return _this;
    }
    ImageObject.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    // Setter, getter
    ImageObject.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    ImageObject.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    return ImageObject;
}(_slideObject__WEBPACK_IMPORTED_MODULE_0__["SlideObject"]));



/***/ }),

/***/ "./src/app/classes/imageStyle.ts":
/*!***************************************!*\
  !*** ./src/app/classes/imageStyle.ts ***!
  \***************************************/
/*! exports provided: ImageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStyle", function() { return ImageStyle; });
/* harmony import */ var _borderControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borderControl */ "./src/app/classes/borderControl.ts");

/*   Only include style settings that would be supported by CamanJS   */
var ImageStyle = /** @class */ (function () {
    function ImageStyle() {
        this.id = ImageStyle.imageStyleCounter++;
        this.name = 'ImageStyle' + this.id;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.type = 'ImageStyle';
        this.brightness = 0;
        this.contrast = 0;
        this.exposure = 0;
        this.gamma = 1;
        this.greyscale = false;
        this.hue = 0;
        this.invert = false;
        this.saturation = 0;
        this.sepia = 0;
        this.vibrance = 0;
        this.border = new _borderControl__WEBPACK_IMPORTED_MODULE_0__["BorderControl"]();
        this.padding = 0;
        this.isDefault = false;
    }
    ImageStyle.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
        this.border = new _borderControl__WEBPACK_IMPORTED_MODULE_0__["BorderControl"]();
        this.border.revive(obj.border);
    };
    ImageStyle.prototype.getCss = function () {
        var css = {
            'border-radius': this.border.getBorderRadiusCss(),
            // 'filter' : this.getFilters(),
            'padding': this.padding + 'px',
            'box-sizing': 'border-box'
        };
        if (this.border.getProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        }
        else if (!this.border.getProperty('showFullBorder')) {
            css['border-top'] = this.border.getProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
        }
        return css;
    };
    // getFilters(){
    //     let cssFilters: string = "";
    //     // Default values:
    //     let defaultOpacity = 1;
    //     let defaultGrayscale = 0;
    //     let defaultBlur = 0;
    //     let defaultBrightness = 1;
    //     let defaultContrast = 1;
    //     let defaultHueRotate = 0;
    //     let defaultInvert = 0;
    //     let defaultSaturate = 1;
    //     let defaultSepia = 0;
    //     if(this.opacity !== defaultOpacity){
    //         cssFilters += 'opacity(' + this.opacity/100 + ') ';
    //     }
    //     if(this.grayscale !== defaultGrayscale){
    //         cssFilters += 'grayscale(' + this.grayscale/100 + ') ';
    //     }
    //     if(this.blur !== defaultBlur){
    //         cssFilters += 'blur(' + this.blur + 'px) ';
    //     }
    //     if(this.brightness !== defaultBrightness){
    //         cssFilters += 'brightness(' + this.brightness/100 + ') ';
    //     }
    //     if(this.contrast !== defaultContrast){
    //         cssFilters += 'contrast(' + this.contrast/100 + ') ';
    //     }
    //     if(this.hueRotate !== defaultHueRotate){
    //         cssFilters += 'hue-rotate(' + this.hueRotate + 'deg) ';
    //     }
    //     if(this.invert !== defaultInvert){
    //         cssFilters += 'invert(' + this.invert/100 + ') ';
    //     }
    //     if(this.saturate !== defaultSaturate){
    //         cssFilters += 'saturate(' + this.saturate/100 + ') ';
    //     }
    //     if(this.sepia !== defaultSepia){
    //         cssFilters += 'sepia(' + this.sepia/100 + ') ';
    //     }
    //     cssFilters = cssFilters.substring(0, cssFilters.length-1);
    //     return cssFilters;
    // }
    // Setter, getter, toggler
    ImageStyle.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    ImageStyle.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    ImageStyle.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    ImageStyle.imageStyleCounter = 0;
    return ImageStyle;
}());



/***/ }),

/***/ "./src/app/classes/shadowControl.ts":
/*!******************************************!*\
  !*** ./src/app/classes/shadowControl.ts ***!
  \******************************************/
/*! exports provided: ShadowControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowControl", function() { return ShadowControl; });
var ShadowControl = /** @class */ (function () {
    function ShadowControl() {
        this.showShadow = false;
        this.xValue = 3;
        this.yValue = 3;
        this.blurValue = 3;
        this.color = '#000';
    }
    ShadowControl.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    ShadowControl.prototype.getShadowCss = function () {
        var cssProperty;
        if (this.showShadow) {
            cssProperty = this.xValue + 'px ' + this.yValue + 'px ' + this.blurValue + 'px ' + this.color;
        }
        else if (!this.showShadow) {
            cssProperty = 'none';
        }
        return cssProperty;
    };
    // Getter, setter, toggler
    ShadowControl.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    ShadowControl.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    ShadowControl.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    return ShadowControl;
}());



/***/ }),

/***/ "./src/app/classes/slide.ts":
/*!**********************************!*\
  !*** ./src/app/classes/slide.ts ***!
  \**********************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
var Slide = /** @class */ (function () {
    function Slide() {
        this.id = Slide.slideCounter++;
        this.backgroundColor = "#FFF";
        this.slideObjects = [];
        this.isDefault = false;
    }
    Slide.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    Slide.prototype.addSlideObject = function (slideObject) {
        this.slideObjects.push(slideObject);
    };
    // Getter, setter
    Slide.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    Slide.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    Slide.slideCounter = 0;
    return Slide;
}());



/***/ }),

/***/ "./src/app/classes/slideObject.ts":
/*!****************************************!*\
  !*** ./src/app/classes/slideObject.ts ***!
  \****************************************/
/*! exports provided: SlideObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideObject", function() { return SlideObject; });
var SlideObject = /** @class */ (function () {
    function SlideObject() {
        this.id = SlideObject.slideObjectCounter++;
        this.name = 'SlideObject' + this.id;
        this.editNameMode = false;
        this.top = 0;
        this.left = 0;
        this.xTranslation = 0;
        this.yTranslation = 0;
        this.height = 'auto';
        this.width = 'auto';
        this.display = true;
        this.zIndex = 100;
        this.isResizing = false;
        this.isDragging = false;
    }
    SlideObject.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    // (rzStop) emits an event
    SlideObject.prototype.setSize = function (event) {
        // New sizes in raw pixels 
        var newHeightPixels = event.size.height;
        var newWidthPixels = event.size.width;
        var newTopPixels = event.position.top;
        var newLeftPixels = event.position.left;
        // Convert to percentages and save
        this.height = newHeightPixels;
        this.width = newWidthPixels;
        this.top = newTopPixels;
        this.left = newLeftPixels;
    };
    // This is formatted to be used with ngDraggable.
    SlideObject.prototype.setTranslation = function (event) {
        this.xTranslation = event.x;
        this.yTranslation = event.y;
    };
    SlideObject.prototype.getTranslation = function () {
        var translation = {
            x: this.xTranslation,
            y: this.yTranslation
        };
        return translation;
    };
    SlideObject.prototype.getCss = function () {
        var css = {
            'height': this.height + 'px',
            'width': this.width + 'px',
            'top': this.top + 'px',
            'left': this.left + 'px',
            'z-index': this.zIndex,
            'display': this.display ? 'block' : 'none',
            'position': 'absolute',
            'box-sizing': 'content-box'
        };
        if (this.isResizing || this.isDragging) {
            css['border'] = '2px gray dashed';
            css['background'] = 'rgba(0, 0, 0, 0.3)';
            css['margin-top'] = '-2px';
            css['margin-left'] = '-2px';
        }
        return css;
    };
    // Getter, setter, toggler
    SlideObject.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    SlideObject.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    SlideObject.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    SlideObject.slideObjectCounter = 0;
    return SlideObject;
}());



/***/ }),

/***/ "./src/app/classes/textObject.ts":
/*!***************************************!*\
  !*** ./src/app/classes/textObject.ts ***!
  \***************************************/
/*! exports provided: TextObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextObject", function() { return TextObject; });
/* harmony import */ var _slideObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideObject */ "./src/app/classes/slideObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextObject = /** @class */ (function (_super) {
    __extends(TextObject, _super);
    function TextObject() {
        var _this = _super.call(this) || this;
        _this.editTextMode = false;
        _this.textValue = "Lorem Ipsum";
        _this.type = 'TextObject';
        return _this;
    }
    TextObject.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    // Getter, setter, toggler
    TextObject.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    TextObject.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    TextObject.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    return TextObject;
}(_slideObject__WEBPACK_IMPORTED_MODULE_0__["SlideObject"]));



/***/ }),

/***/ "./src/app/classes/textStyle.ts":
/*!**************************************!*\
  !*** ./src/app/classes/textStyle.ts ***!
  \**************************************/
/*! exports provided: TextStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyle", function() { return TextStyle; });
/* harmony import */ var _borderControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borderControl */ "./src/app/classes/borderControl.ts");
/* harmony import */ var _shadowControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadowControl */ "./src/app/classes/shadowControl.ts");


var TextStyle = /** @class */ (function () {
    function TextStyle() {
        this.id = TextStyle.textStyleCounter++;
        this.name = 'TextStyle' + this.id;
        this.type = 'TextStyle';
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.color = '#000';
        this.backgroundColor = 'transparent';
        this.underline = false;
        this.overline = false;
        this.lineThrough = false;
        this.hAlign = 'left';
        this.vAlign = 'top';
        this.uppercase = false;
        this.lowercase = false;
        this.lineHeight = 1;
        this.padding = 0;
        this.wordSpacing = 0;
        this.letterSpacing = 0;
        this.breakWord = false;
        this.border = new _borderControl__WEBPACK_IMPORTED_MODULE_0__["BorderControl"]();
        this.textShadow = new _shadowControl__WEBPACK_IMPORTED_MODULE_1__["ShadowControl"]();
        this.fontPickerData = {
            family: 'Helvetica',
            style: 'regular',
            size: '25px'
        };
        this.isDefault = false;
    }
    TextStyle.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
        this.border = new _borderControl__WEBPACK_IMPORTED_MODULE_0__["BorderControl"]();
        this.border.revive(obj.border);
        this.textShadow = new _shadowControl__WEBPACK_IMPORTED_MODULE_1__["ShadowControl"]();
        this.textShadow.revive(obj.textShadow);
    };
    TextStyle.prototype.getCss = function () {
        var css = {
            'height': '100%',
            'width': '100%',
            'font-family': this.fontPickerData['family'],
            'font-style': this.fontPickerData['style'],
            'color': this.color,
            'background-color': this.backgroundColor,
            'font-size': this.fontPickerData['size'],
            'text-decoration': this.getTextDecoration(),
            'text-transform': this.getTextTransform(),
            'line-height': this.lineHeight,
            'word-spacing': this.wordSpacing + 'px',
            'letter-spacing': this.letterSpacing + 'px',
            'word-break': this.breakWord ? 'break-all' : 'normal',
            'border-radius': this.border.getBorderRadiusCss(),
            'padding': this.padding + 'px',
            'display': 'flex',
            'justify-content': this.convertAlignToFlex(this.hAlign),
            'align-items': this.convertAlignToFlex(this.vAlign),
            'text-shadow': this.textShadow.getShadowCss(),
            'box-sizing': 'border-box'
        };
        // Border styles had to be seperated because in some UI configurations, 'border:none' would negate the other border styles
        if (this.border.getProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        }
        else if (!this.border.getProperty('showFullBorder')) {
            css['border-top'] = this.border.getProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
        }
        return css;
    };
    // CSS helper functions
    TextStyle.prototype.convertAlignToFlex = function (align) {
        var flexAlignment = "";
        switch (align) {
            case 'left':
                flexAlignment = 'flex-start';
                break;
            case 'right':
                flexAlignment = 'flex-end';
                break;
            case 'center':
                flexAlignment = 'center';
                break;
            case 'top':
                flexAlignment = 'flex-start';
                break;
            case 'bottom':
                flexAlignment = 'flex-end';
                break;
        }
        return flexAlignment;
    };
    TextStyle.prototype.getTextTransform = function () {
        if (this.uppercase) {
            return 'uppercase';
        }
        else if (this.lowercase) {
            return 'lowercase';
        }
        else {
            return 'none';
        }
    };
    TextStyle.prototype.getTextDecoration = function () {
        var textDecoration = "";
        if (this.underline) {
            textDecoration += "underline ";
        }
        if (this.overline) {
            textDecoration += "overline ";
        }
        if (this.lineThrough) {
            textDecoration += "line-through ";
        }
        return textDecoration ? textDecoration : 'none';
    };
    // Getter, setter, toggler
    TextStyle.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    TextStyle.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    TextStyle.prototype.toggleProperty = function (propertyName) {
        if (typeof this[propertyName] === 'boolean')
            this[propertyName] = !this[propertyName];
    };
    TextStyle.textStyleCounter = 0;
    return TextStyle;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-columns: auto 1fr;\r\n        grid-template-columns: auto 1fr;\r\n        -ms-grid-rows: 100vh;\r\n        grid-template-rows: 100vh;\r\n        grid-template-areas: \"nav content\";\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n}\r\n\r\n/*  Dashboard left navigation bar */\r\n\r\n#dashboard-nav {\r\n    width: 225px;\r\n    height: 100%;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: nav;\r\n}\r\n\r\n#mobile-nav-toggle-btn {\r\n    display: none;\r\n    font-size: 20px;\r\n    z-index: 101;\r\n    position: fixed;\r\n    top: 15px;\r\n    left: 15px;\r\n}\r\n\r\n#dashboard-nav-mobile {\r\n    width: 60vw;\r\n    height: 100%;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.dashboard-nav-link {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.dashboard-nav-link:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.selected {\r\n    background: rgb(71, 78, 69);\r\n}\r\n\r\n/*  Dashboard right content */\r\n\r\n.dashboard-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: content;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n}\r\n\r\n.dashboard-content > * {\r\n    margin: 25px auto;\r\n}\r\n\r\n#mobile-message {\r\n    display: none;\r\n}\r\n\r\n#no-projects {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 75px auto;\r\n}\r\n\r\n/* Dashboard PROJECTS view */\r\n\r\n#create-project-btn {\r\n    width: 300px;\r\n    min-height: 50px;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n#projects-container {\r\n    width: 90%;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.project-card {\r\n    width: 200px;\r\n    height: auto;\r\n    margin: 20px;\r\n    padding: 0 15px 15px 15px;\r\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.project-card-title {\r\n    text-align: center;\r\n    margin: 10px auto 5px auto;\r\n}\r\n\r\n.project-card-img-container{\r\n    width: 175px;\r\n    height: 100px;\r\n    margin: 5px auto;\r\n}\r\n\r\n.project-card img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.project-card p {\r\n    margin: 5px 0 0 0;\r\n    font-size: 0.8rem;\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n\r\n.project-card button {\r\n    width: 75px;\r\n    padding: 5px 0;\r\n    margin: 10px 5px 0 5px;\r\n}\r\n\r\n/*  Project creator  */\r\n\r\n.popup-form-overlay {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.popup-form {\r\n    width: 500px;\r\n    height: auto;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    max-width: 95vw;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.popup-form p {\r\n    font-size: 0.8rem;\r\n    margin: 3px 3px 0 3px;\r\n}\r\n\r\n.popup-form > * {\r\n    margin: 15px auto;\r\n}\r\n\r\n.popup-form input[type=\"password\"],\r\n.popup-form input[type=\"text\"] {\r\n    width: 100%;\r\n    height: 40px;\r\n    font-size: 1.2rem;\r\n    padding: 0 10px;\r\n    border: 1px silver solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n.popup-form button {\r\n    padding: 10px 25px;\r\n    margin: 5px;\r\n    font-size: 1rem;\r\n    width: 200px;\r\n}\r\n\r\n#doc-sizes {\r\n    width: 100%;\r\n}\r\n\r\n.form-alert {\r\n    font-size: 0.7rem;\r\n    color: red;\r\n    margin: 3px auto 0 auto;\r\n}\r\n\r\n.popup-form input[type=\"number\"] {\r\n    width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.popup-form\r\n.material-icons {\r\n    font-size: 48px;\r\n}\r\n\r\n/*  Dashboard SETTINGS view */\r\n\r\nhr {\r\n    margin: 20px auto;\r\n}\r\n\r\n#settings-container {\r\n    width: 90%;\r\n    max-width: 700px;\r\n}\r\n\r\n#settings-container > div {\r\n    margin: 20px auto;\r\n}\r\n\r\n#settings-container button {\r\n    width: 175px;\r\n    padding: 10px 0;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\r\n    #mobile-message{\r\n        max-width: 90vw;\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    #create-project-btn {\r\n        display: none;\r\n    }\r\n\r\n    #projects-container {\r\n        justify-content: center;\r\n    }\r\n\r\n    #dashboard-nav {\r\n        display: none;\r\n    }\r\n\r\n    #mobile-nav-toggle-btn {\r\n        display: flex;\r\n    }\r\n\r\n    #dashboard-nav-mobile {\r\n        display: flex;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\" id=\"dashboard-container\" *ngIf=\"userState.isLoggedIn\">\r\n\r\n  <div id=\"dashboard-nav\" class=\"flex-col-center greenAccent01\">\r\n    <a class=\"dashboard-nav-link\" (click)=\"showContent('projects')\" [class.selected]=\"showProjects\">Projects</a>\r\n    <a class=\"dashboard-nav-link\" (click)=\"showContent('settings')\" [class.selected]=\"showSettings\">Settings</a>\r\n    <a class=\"dashboard-nav-link\" (click)=\"this.data.logout()\">Sign Out</a>\r\n  </div>\r\n\r\n  <fa name=\"bars\" id=\"mobile-nav-toggle-btn\" (click)=\"toggleMobileNav()\"></fa>\r\n  <div *ngIf=\"openMobileNav\" id=\"dashboard-nav-mobile\" class=\"flex-col-center greenAccent01\">\r\n    <a class=\"dashboard-nav-link\" (click)=\"showContent('projects'); toggleMobileNav()\" [class.selected]=\"showProjects\">Projects</a>\r\n    <a class=\"dashboard-nav-link\" (click)=\"showContent('settings'); toggleMobileNav()\" [class.selected]=\"showSettings\">Settings</a>\r\n    <a class=\"dashboard-nav-link\" (click)=\"this.data.logout()\">Sign Out</a>\r\n  </div>\r\n\r\n  <div id=\"dashboard-projects\" class=\"dashboard-content flex-col-start\" *ngIf=\"showProjects\">\r\n    <h1>PROJECTS</h1>\r\n    <button id=\"create-project-btn\" class=\"success-btn\" (click)=\"popup('project creator', true)\">Create a new project!</button>\r\n    <p id=\"mobile-message\">** Only preview mode is available for mobile devices.  Please log in on a desktop to create and edit your projects.</p>\r\n\r\n    <fa *ngIf=\"!projectsData\" name=\"cog\" class=\"loader\"></fa>\r\n\r\n    <div id=\"projects-container\" *ngIf=\"projectsData\">\r\n      <h3 *ngIf=\"projectsData.length === 0\" id=\"no-projects\">You don't have any projects yet.</h3>\r\n      <div class=\"project-card flex-col-evenly grayAccent02\" *ngFor=\"let project of projectsData\">\r\n        <h3 class=\"project-card-title\">{{project.name}}</h3>\r\n        <div class=\"project-card-img-container flex-col-center\">\r\n        <img src=\"{{project.thumbnailUrl}}\">\r\n      </div>\r\n\r\n        <p>Created: {{project.created | date: 'short'}}</p>\r\n        <p>Last saved: {{project.lastSaved | date: 'short'}}</p>\r\n\r\n        <div class=\"flex-row-evenly\">\r\n          <button class=\"success-btn\" (click)=\"openProject(project)\">Open</button>\r\n          <button class=\"danger-btn\" (click)=\"deleteProject(project.name)\">Delete</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"dashboard-settings\" class=\"dashboard-content flex-col-start\" *ngIf=\"showSettings\">\r\n    <h1>SETTINGS</h1>\r\n\r\n    <fa *ngIf=\"!settingsData\" name=\"cog\" class=\"loader\"></fa>\r\n\r\n    <div *ngIf=\"userState.isLoggedIn\" id=\"settings-container\">\r\n      <hr>\r\n      <div *ngFor=\"let item of settingsData | keyvalue\" class=\"flex-row-between\">\r\n        <h3>{{ item.key }}:</h3>\r\n        <h3>{{ item.value }}</h3>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between\">\r\n        <h3>Password:</h3>\r\n        <button class=\"success-btn\" (click)=\"popup('change password', true)\">Change My Password</button>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between\">\r\n        <div></div>\r\n        <button class=\"danger-btn\" (click)=\"popup('delete account', true)\">Delete My Account</button>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"flex-col-evenly popup-form-overlay\" *ngIf=\"showProjectCreator\">\r\n  <form [formGroup]=\"projectCreatorForm\" class=\"flex-col-evenly popup-form\" (ngSubmit)=\"createProject(projectCreatorForm.value)\">\r\n\r\n    <label class=\"flex-col-evenly\">Choose a name for your project:\r\n      <input type=\"text\" formControlName=\"projectName\">\r\n\r\n      <div class=\"form-alert\" *ngIf=\"projectCreatorForm.controls['projectName'].errors?.required && projectCreatorForm.controls['projectName'].touched\">{{\r\n        requiredAlert }}</div>\r\n\r\n      <div class=\"form-alert\" *ngIf=\"projectCreatorForm.controls['projectName'].errors?.nameTaken && projectCreatorForm.controls['projectName'].touched\">{{\r\n        nameTakenAlert }}</div>\r\n    </label>\r\n\r\n    <label class=\"flex-col-evenly\">Select a document size:</label>\r\n    <div class=\"flex-row-evenly\" id=\"doc-sizes\">\r\n      <div class=\"flex-col-center\">\r\n        <i class=\"material-icons\">tv</i>\r\n        <input type=\"radio\" formControlName=\"documentSize\" value=\"1536px x 864px Presentation\">\r\n        <p>Presentation</p>\r\n        <p>1536px x 864px</p>\r\n      </div>\r\n\r\n      <div class=\"flex-col-center\">\r\n        <i class=\"material-icons\">crop_portrait</i>\r\n        <input type=\"radio\" formControlName=\"documentSize\" value=\"816px x 1056px A4 Document\">\r\n        <p>A4 Document</p>\r\n        <p>816px x 1056px</p>\r\n      </div>\r\n\r\n      <div class=\"flex-col-center\">\r\n        <i class=\"material-icons\">photo_size_select_small</i>\r\n        <input type=\"radio\" formControlName=\"documentSize\" value=\"custom\">\r\n        <p>Custom size</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-col-center\" *ngIf=\"projectCreatorForm.controls['documentSize'].value==='custom'\">\r\n      <div class=\"flex-row-center\">\r\n        <p>H:</p><input type=\"number\" formControlName=\"customHeight\" min=\"1\" max=\"3000\">\r\n        <p>px</p>\r\n        <p>W:</p><input type=\"number\" formControlName=\"customWidth\" min=\"1\" max=\"3000\">\r\n        <p>px</p>\r\n      </div>\r\n\r\n      <div class=\"form-alert\" *ngIf=\"projectCreatorForm.controls['customHeight'].errors?.required && projectCreatorForm.controls['customHeight'].touched\">{{\r\n        customHeightAlert }}</div>\r\n      <div class=\"form-alert\" *ngIf=\"projectCreatorForm.controls['customWidth'].errors?.required && projectCreatorForm.controls['customWidth'].touched\">{{customWidthAlert\r\n        }}</div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-center wrap\">\r\n        <button class=\"success-btn\" type=\"submit\" [disabled]=\"!projectCreatorForm.valid\">Get Started!</button>\r\n      <button class=\"danger-btn\" (click)=\"popup('project creator', false)\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"flex-col-evenly popup-form-overlay\" *ngIf=\"this.data.showChangePasswordForm\">\r\n  <form [formGroup]=\"changePasswordForm\" class=\"flex-col-evenly popup-form\" (ngSubmit)=\"this.data.changePassword(changePasswordForm.value)\">\r\n    <label class=\"flex-col-evenly\">Please enter your current password:\r\n      <input type=\"password\" formControlName=\"oldPassword\">\r\n\r\n      <div class=\"form-alert\" *ngIf=\"changePasswordForm.controls['oldPassword'].errors?.required && changePasswordForm.controls['oldPassword'].touched\">{{\r\n        requiredAlert }}</div>\r\n    </label>\r\n\r\n    <label class=\"flex-col-evenly\">Please choose a new password:\r\n      <input type=\"password\" formControlName=\"newPassword\">\r\n\r\n      <div class=\"form-alert\" *ngIf=\"changePasswordForm.controls['newPassword'].errors?.required && changePasswordForm.controls['newPassword'].touched\">{{\r\n        requiredAlert }}</div>\r\n    </label>\r\n\r\n    <label class=\"flex-col-evenly\">Please re-enter your new password:\r\n      <input type=\"password\" formControlName=\"newPassword2\">\r\n\r\n      <div class=\"form-alert\" *ngIf=\"changePasswordForm.controls['newPassword2'].errors?.required && changePasswordForm.controls['newPassword2'].touched\">{{\r\n        requiredAlert }}</div>\r\n\r\n      <div class=\"form-alert\" *ngIf=\"changePasswordForm.controls['newPassword2'].errors?.mismatch && changePasswordForm.controls['newPassword2'].touched\">{{\r\n        passwordMismatchAlert }}</div>\r\n    </label>\r\n\r\n    <div class=\"form-alert\" *ngIf=\"this.data.serverMsg\">{{this.data.serverMsg}}</div>\r\n\r\n    <div class=\"flex-row-center wrap\">\r\n      <button class=\"success-btn\" type=\"submit\" [disabled]=\"!changePasswordForm.valid\">Change password</button>\r\n      <button class=\"danger-btn\" (click)=\"popup('change password', false)\">Cancel</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"flex-col-evenly popup-form-overlay\" *ngIf=\"this.data.showDeleteAccountForm\">\r\n  <form [formGroup]=\"deleteAccountForm\" class=\"flex-col-evenly popup-form\" (ngSubmit)=\"this.data.deleteAccount(deleteAccountForm.value)\">\r\n    <label class=\"flex-col-evenly\">You are about to delete your account. This is irreversible and you will lose all of\r\n      your projects and data. <br><br>\r\n      If you wish to proceed, please enter your password:\r\n      <input type=\"password\" formControlName=\"password\">\r\n\r\n      <div class=\"form-alert\" *ngIf=\"deleteAccountForm.controls['password'].errors?.required && deleteAccountForm.controls['password'].touched\">{{\r\n        requiredAlert }}</div>\r\n    </label>\r\n\r\n    <div class=\"form-alert\" *ngIf=\"this.data.serverMsg\">{{this.data.serverMsg}}</div>\r\n\r\n    <div class=\"flex-row-center wrap\">\r\n      <button class=\"success-btn\" type=\"submit\" [disabled]=\"!deleteAccountForm.valid\">Delete my account</button>\r\n      <button class=\"danger-btn\" (click)=\"popup('delete account', false)\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
/* harmony import */ var _classes_documentSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../classes/documentSize */ "./src/app/classes/documentSize.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, http, fb, data, dialog, store) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.store = store;
        this.openMobileNav = false;
        /*  UI VARIABLES */
        this.showProjects = true;
        this.showSettings = false;
        this.showProjectCreator = false;
        this.requiredAlert = 'Required';
        this.nameTakenAlert = 'You already have a project with this name!';
        this.customHeightAlert = 'You must specify a height';
        this.customWidthAlert = 'You must specify a width';
        this.passwordMismatchAlert = 'Password do not match';
        this.passwordMatchValidator = function (control) {
            var newPasswordControl = control.get('newPassword');
            var newPassword2Control = control.get('newPassword2');
            if (newPasswordControl.value !== newPassword2Control.value)
                return newPassword2Control.setErrors({ 'mismatch': true });
            return null;
        };
        this.projectNamevalidator = function (control) {
            // This validator marks the projectName form control as "invalid" if its value matches
            // another project's name
            var projectNameControl = control.get('projectName');
            if (_this.projectsData) {
                _this.projectsData.forEach(function (project) {
                    if (project.name === projectNameControl.value) {
                        return projectNameControl.setErrors({ 'nameTaken': true });
                    }
                });
            }
            return null;
        };
        this.projectCreatorForm = fb.group({
            'projectName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'documentSize': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'customHeight': [null],
            'customWidth': [null],
        }, { validator: [this.projectNamevalidator] });
        this.changePasswordForm = fb.group({
            'oldPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'newPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'newPassword2': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: [this.passwordMatchValidator] });
        this.deleteAccountForm = fb.group({
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    DashboardComponent.prototype.projectCreatorConditionalValidation = function () {
        // This function subscribes to the documentSize form control
        // and sets the appropriate validations based on the user's documentSize selection.
        var documentSizeChanges = this.projectCreatorForm.controls.documentSize.valueChanges;
        var customHeightControl = this.projectCreatorForm.controls.customHeight;
        var customWidthControl = this.projectCreatorForm.controls.customWidth;
        documentSizeChanges.subscribe(function (documentSize) {
            if (documentSize === 'custom') {
                customHeightControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                customHeightControl.updateValueAndValidity();
                customWidthControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                customWidthControl.updateValueAndValidity();
            }
            if (documentSize !== 'custom') {
                customHeightControl.setValidators(null);
                customHeightControl.updateValueAndValidity();
                customWidthControl.setValidators(null);
                customWidthControl.updateValueAndValidity();
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to projectCreatorForm's value changes to enable conditional validations
        this.userStateSubscription = this.store.select('userReducer').subscribe(function (userState) {
            _this.userState = userState;
            _this.getSettingsData();
            _this.getProjectsData();
        });
        this.projectCreatorConditionalValidation();
    };
    /* POPULATE DATA VARIABLES */
    DashboardComponent.prototype.getProjectsData = function () {
        var _this = this;
        // This function makes a call to the back-end to get project data for the dashboard.
        // The "projects" property that is returned by the back-end does not contain full project data.
        //  It only consists of the minimal data required for the template's project cards.
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('token', this.userState.token);
        this.http.get(this.data.apiEndpoint + '/get-user-dashboard', { headers: headers })
            .subscribe(function (res) {
            if (res['success'])
                _this.projectsData = res['body'].projects;
        });
    };
    DashboardComponent.prototype.getSettingsData = function () {
        // This function populates the settingsData variable with the data from userState.
        // settingsData is used in the template's "settings" view.
        this.settingsData = {
            'First name': this.userState.first,
            'Last name': this.userState.last,
            'Username': this.userState.username,
            'Email address': this.userState.email
        };
    };
    DashboardComponent.prototype.showContent = function (view) {
        // This function serves as the UI controller for the dashboard's left vertical nav bar.
        switch (view) {
            case 'projects':
                this.showProjects = true;
                this.showSettings = false;
                break;
            case 'settings':
                this.showProjects = false;
                this.showSettings = true;
                break;
        }
    };
    DashboardComponent.prototype.toggleMobileNav = function () {
        // This function serves as the UI controller for displaying the vertical mobile nav menu
        this.openMobileNav = !this.openMobileNav;
    };
    DashboardComponent.prototype.popup = function (form, bool) {
        // This function serves as the UI controller for the displaying of popup forms 
        // in the dashboard's "settings" view.
        switch (form) {
            case 'project creator':
                this.showProjectCreator = bool;
                break;
            case 'delete account':
                this.data.showDeleteAccountForm = bool;
                break;
            case 'change password':
                this.data.showChangePasswordForm = bool;
                break;
        }
    };
    DashboardComponent.prototype.openProject = function (project) {
        var _this = this;
        // When user "opens" a project, this function makes a call to the back-end to fetch 
        // full data for the selected project, loads it into the store, and routes to the main.
        this.dialog.toast("Opening project: " + project.name);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('token', this.userState.token);
        headers = headers.append('project-name', project.name);
        this.http.get(this.data.apiEndpoint + '/get-project', { headers: headers })
            .subscribe(function (res) {
            var projectData = res['body'];
            projectData = _this.data.reviveProject(projectData);
            _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["LOAD_PROJECT"], payload: { projectData: projectData } });
            _this.router.navigate(['main']);
        });
    };
    DashboardComponent.prototype.deleteProject = function (projectName) {
        var _this = this;
        // This function prompts user for confirmation to delete a project,
        // and sends a delete request to the back-end if user chooses to proceed.
        var confirmedDelete = function () {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            headers = headers.append('token', _this.userState.token);
            headers = headers.append('project-name', projectName);
            _this.http.delete(_this.data.apiEndpoint + '/delete-project', { headers: headers })
                .subscribe(function () {
                _this.getProjectsData();
                _this.dialog.toast("Project: " + projectName + " has been deleted");
            });
        };
        var message = "Are you sure you want to delete project: " + projectName + "?";
        this.dialog.alert(message, 'danger', confirmedDelete);
    };
    DashboardComponent.prototype.createProject = function (formData) {
        // This function handles the ngSubmit for the projectCreatorForm
        var projectName = formData.projectName;
        var options = {};
        switch (formData.documentSize) {
            case '1536px x 864px Presentation':
                options.height = 864;
                options.width = 1536;
                options.isCustom = false;
                options.jsPdfOrientation = 'landscape';
                options.jsPdfFormat = [16, 9];
                break;
            case '816px x 1056px A4 Document':
                options.height = 1056;
                options.width = 816;
                options.isCustom = false;
                options.jsPdfOrientation = 'portrait';
                options.jsPdfFormat = [8.5, 11];
                break;
            case 'custom':
                options.height = formData.customHeight;
                options.width = formData.customWidth;
                options.isCustom = true;
                options.jsPdfOrientation = options.height > options.width ? 'portrait' : 'landscape';
                options.jsPdfFormat = options.jsPdfOrientation === 'portrait' ? [8.5, 11] : [16, 9];
                break;
        }
        var documentSize = new _classes_documentSize__WEBPACK_IMPORTED_MODULE_8__["DocumentSize"](options);
        var payload = {
            'name': projectName,
            'documentSize': documentSize
        };
        // Create and save new project.  Route to main.
        this.dialog.toast("Creating new project: " + projectName);
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["NEW_PROJECT"], payload: payload });
        this.router.navigate(['main']);
        // Saving of the project is handled at the time that user navigates away from main
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // data.serverMsg is shared with the login and registration components.
        // Clearing it onDestroy prevents the displaying the wrong serverMsg on the wrong form
        this.data.serverMsg = null;
        this.userStateSubscription.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_userActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-management/actions/userActions */ "./src/app/state-management/actions/userActions.ts");
/* harmony import */ var _classes_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/slide */ "./src/app/classes/slide.ts");
/* harmony import */ var _classes_textObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var _classes_imageObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/imageObject */ "./src/app/classes/imageObject.ts");
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _classes_galleryImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/galleryImage */ "./src/app/classes/galleryImage.ts");
/* harmony import */ var _classes_imageStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./classes/imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DataService = /** @class */ (function () {
    function DataService(dialog, http, router, store) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.router = router;
        this.store = store;
        /* SERVER VARIABLES */
        this.apiEndpoint = 'https://deckbuilder2.herokuapp.com';
        // apiEndpoint: string = "http://localhost:3000";
        this.serverMsg = "";
        /*  UI VARIABLES */
        this.showChangePasswordForm = false;
        this.showDeleteAccountForm = false;
        this.isSlideRenderLoading = false;
        this.uploadDataUrlToFirebase = function (token, dataUrl, fileName) {
            // This function makes a call to the backend to upload dataUrl to firebase
            // and returns a promise containing the server response.
            return new Promise(function (resolve, reject) {
                var body = {
                    token: token,
                    dataUrl: dataUrl,
                    fileName: fileName
                };
                _this.http.post(_this.apiEndpoint + "/upload-image", body)
                    .subscribe(function (res) { return resolve(res); });
            });
        };
        this.deleteFromFirebase = function (fileNames) {
            _this.getUserState().then(function (userState) {
                var body = {
                    fileNames: fileNames,
                    token: userState['token']
                };
                _this.http.post(_this.apiEndpoint + '/delete-image', body).subscribe(function (res) {
                    if (!res['success'])
                        console.log(res);
                });
            }).catch(function (error) { return console.log(error); });
        };
        this.useAsGuest = function () {
            // Reset projectState and route to main
            _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_13__["NEW_PROJECT"] });
            _this.router.navigate(['main']);
        };
        this.getProjectState = function () {
            // This function subscribes to the store's projectState and returns it in a promise.
            return new Promise(function (resolve, reject) {
                _this.store.select("projectReducer").subscribe(function (projectState) {
                    resolve(projectState);
                });
            });
        };
        this.getUserState = function () {
            // This function subscribes to the store's userState and returns it in a promise.
            return new Promise(function (resolve, reject) {
                _this.store.select("userReducer").subscribe(function (userState) {
                    resolve(userState);
                });
            });
        };
        // Storage for canvasPrep()
        this.SRA_ORIGINAL_OVERFLOW = "";
        this.SR_ORIGINAL_OVERFLOW = "";
        this.SR_ORIGINAL_TRANSFORM = "";
    }
    DataService.prototype.displayServerMessage = function (message) {
        var _this = this;
        // this.serverMsg is used in all forms (login, registration, change PW, del account, etc.)
        this.serverMsg = message;
        setTimeout(function () {
            _this.serverMsg = null;
        }, 5000);
    };
    // User registration
    DataService.prototype.register = function (formData) {
        var _this = this;
        // This function handles ngSubmit for the reigstration form
        formData.first = this.capitalize(formData.first);
        formData.last = this.capitalize(formData.last);
        // Make API call to the back-end for user registration
        this.http
            .post(this.apiEndpoint + "/new-account", formData)
            .subscribe(function (res) {
            _this.displayServerMessage(res["message"]);
            if (res["success"]) {
                // Login to the app
                _this.login({
                    username: formData.username,
                    password: formData.password
                });
                var welcomeMessage = "Registration successful.  Welcome!  To get started, click on \"Create a new project!\"";
                _this.dialog.alert(welcomeMessage, "success");
            }
        });
    };
    DataService.prototype.capitalize = function (str) {
        //This is a helper function for formatting strings from the registration form data
        var strArr = str.split(" ");
        for (var i = 0; i < strArr.length; i++) {
            strArr[i] =
                strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
        }
        return strArr.join(" ");
    };
    ;
    // User login
    DataService.prototype.login = function (formData) {
        var _this = this;
        // This function handles ngSubmit for the login form
        this.http.post(this.apiEndpoint + "/auth", formData).subscribe(function (res) {
            _this.displayServerMessage(res["message"]);
            if (res["success"]) {
                var payload = {
                    isLoggedIn: true,
                    first: res["body"]["first"],
                    last: res["body"]["last"],
                    email: res["body"]["email"],
                    username: res["body"]["username"],
                    token: res["body"]["token"]
                };
                // Store session data to session storage
                // Update the store's userState
                // Route to dashboard
                sessionStorage.setItem("sessionData", JSON.stringify(payload));
                _this.store.dispatch({ type: _state_management_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["LOGIN"], payload: payload });
                _this.router.navigate(["dashboard"]);
                // Subscribe to userState
                _this.store.select("userReducer").subscribe(function (userState) {
                    _this.userState = userState;
                });
            }
        });
    };
    DataService.prototype.logout = function () {
        // Clear session storage, clear the store's userState, and route to '/'
        sessionStorage.removeItem("sessionData");
        this.store.dispatch({ type: _state_management_actions_userActions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"] });
        this.router.navigate(["/"]);
    };
    DataService.prototype.deleteAccount = function (formData) {
        var _this = this;
        // This function handles ngSubmit for the 'delete account form' in the dashboard's 'settings' view.
        // Confirmation is handled by form validations in dashboard.ts, requiring the user's password.
        // Make API call to delete user from database and display server message on failure, logout on success
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.getUserState().then(function (userState) {
            headers = headers.append("password", formData.password);
            headers = headers.append("username", userState['username']);
            return _this.http.delete(_this.apiEndpoint + "/delete-account", { headers: headers }).subscribe(function (res) {
                _this.displayServerMessage(res["message"]);
                if (res["success"]) {
                    _this.showDeleteAccountForm = false;
                    _this.logout();
                }
            });
        });
    };
    DataService.prototype.changePassword = function (formData) {
        var _this = this;
        // This function handles ngSubmit of the 'change password form' in the dashboard's 'settings' view.
        // Confirmation is handled by form validaions in dashboard.ts, requiring the user to enter their current password.
        // Make API call to back-end to change the user's password.
        this.getUserState().then(function (userState) {
            var payload = {
                username: userState["username"],
                password: formData.oldPassword,
                newPassword: formData.newPassword
            };
            return _this.http.post(_this.apiEndpoint + "/change-password", payload)
                .subscribe(function (res) {
                _this.displayServerMessage(res["message"]);
                if (res["success"]) {
                    _this.showChangePasswordForm = false;
                    _this.dialog.alert("Your new password has been saved.", "success");
                }
            });
        });
    };
    DataService.prototype.reviveProject = function (projectData) {
        // This function takes in a projectState object in JSON format and restores its prototypes
        this.reviveGalleryImages(projectData);
        this.reviveTextStyles(projectData);
        this.reviveImageStyles(projectData);
        this.reviveSlides(projectData);
        this.reviveSlideObjectStyles(projectData);
        return projectData;
    };
    DataService.prototype.reviveSlideObjectStyles = function (projectData) {
        // Helper function for reviveProject()
        projectData.slides.forEach(function (slide) {
            slide.slideObjects.forEach(function (slideObject) {
                switch (slideObject.type) {
                    case "TextObject":
                        for (var i = 0; i < projectData.textStyles.length; i++) {
                            if (projectData.textStyles[i].id === slideObject.style.id) {
                                slideObject.style = projectData.textStyles[i];
                                break;
                            }
                        }
                        break;
                    case "ImageObject":
                        for (var i = 0; i < projectData.imageStyles.length; i++) {
                            if (projectData.imageStyles[i].id === slideObject.style.id) {
                                slideObject.style = projectData.imageStyles[i];
                                break;
                            }
                        }
                        break;
                }
            });
        });
    };
    DataService.prototype.reviveSlides = function (projectData) {
        // Helper function for reviveProject()
        var slides = [];
        projectData.slides.forEach(function (slide) {
            var newSlide = new _classes_slide__WEBPACK_IMPORTED_MODULE_7__["Slide"]();
            newSlide.revive(slide);
            for (var i = 0; i < slide.slideObjects.length; i++) {
                // textObjects
                if (slide.slideObjects[i].hasOwnProperty("textValue")) {
                    var textObject = new _classes_textObject__WEBPACK_IMPORTED_MODULE_8__["TextObject"]();
                    textObject.revive(slide.slideObjects[i]);
                    newSlide.slideObjects[i] = textObject;
                }
                // imagObjects
                if (slide.slideObjects[i].hasOwnProperty("imagePath")) {
                    var imageObject = new _classes_imageObject__WEBPACK_IMPORTED_MODULE_9__["ImageObject"]();
                    imageObject.revive(slide.slideObjects[i]);
                    newSlide.slideObjects[i] = imageObject;
                }
            }
            slides.push(newSlide);
        });
        projectData.slides = slides;
    };
    DataService.prototype.reviveTextStyles = function (projectData) {
        // Helper function for reviveProject()
        // Revive selectedTextStyle and textStyles
        var textStyles = [];
        for (var i = 0; i < projectData.textStyles.length; i++) {
            var thisTextStyle = projectData.textStyles[i];
            var textStyle = new _classes_textStyle__WEBPACK_IMPORTED_MODULE_10__["TextStyle"]();
            textStyle.revive(thisTextStyle);
            textStyles.push(textStyle);
        }
        projectData.textStyles = textStyles;
        projectData.selectedTextStyle = projectData.textStyles[0];
    };
    DataService.prototype.reviveGalleryImages = function (projectData) {
        // Helper function for reviveProject()
        // Revive selectedImage
        var selectedImage = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_11__["GalleryImage"]();
        selectedImage.revive(projectData.selectedImage);
        projectData.selectedImage = selectedImage;
        // Revive images
        var images = [];
        for (var i = 0; i < projectData.images.length; i++) {
            var galleryImage = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_11__["GalleryImage"]();
            galleryImage.revive(projectData.images[i]);
            images.push(galleryImage);
        }
        projectData.images = images;
        projectData.selectedImage = null;
    };
    DataService.prototype.reviveImageStyles = function (projectData) {
        // Helper function for reviveProject()
        // Revive selectedImageStyle
        var selectedImageStyle = new _classes_imageStyle__WEBPACK_IMPORTED_MODULE_12__["ImageStyle"]();
        selectedImageStyle.revive(projectData.selectedImageStyle);
        projectData.selectedImageStyle = selectedImageStyle;
        // Revive imageStyles
        var imageStyles = [];
        for (var i = 0; i < projectData.imageStyles.length; i++) {
            var thisImageStyle = projectData.imageStyles[i];
            var imageStyle = new _classes_imageStyle__WEBPACK_IMPORTED_MODULE_12__["ImageStyle"]();
            imageStyle.revive(thisImageStyle);
            imageStyles.push(imageStyle);
        }
        projectData.imageStyles = imageStyles;
        projectData.selectedImageStyle = projectData.imageStyles[0];
    };
    DataService.prototype.canvasPrep = function (task) {
        // This function makes changes to DOM style values necessary for HTML2CANVAS to work properly.
        // This funcion is shared between dataService and ToolbarController
        var slideRender = document.getElementById("slide-render");
        var slideRenderArea = document.getElementById("slide-render-area");
        switch (task) {
            case "start":
                // Save original style values before changing them
                this.SRA_ORIGINAL_OVERFLOW = slideRenderArea.style.overflow;
                this.SR_ORIGINAL_OVERFLOW = slideRender.style.overflow;
                this.SR_ORIGINAL_TRANSFORM = slideRender.style.transform;
                // Set required css style values for HTML2CANVAS to work properly
                slideRender.style.transform = "scale(1)";
                slideRender.style.overflow = "visible";
                slideRenderArea.style.overflow = "visible";
                break;
            case "complete":
                slideRender.style.transform = this.SR_ORIGINAL_TRANSFORM;
                slideRender.style.overflow = this.SR_ORIGINAL_OVERFLOW;
                slideRenderArea.style.overflow = this.SRA_ORIGINAL_OVERFLOW;
                break;
        }
    };
    DataService.prototype.getThumbnail = function () {
        var _this = this;
        // This function returns a promise containing a downsized snapshot of the slide render
        // at the time this function is called.  (when saving project)
        return new Promise(function (resolve, reject) {
            // Show loader screen
            var slideRender = document.getElementById("slide-render");
            _this.canvasPrep("start");
            _this.isSlideRenderLoading = true;
            // Get project state for doc height and width
            var projectState;
            var getProjectState = _this.store
                .select("projectReducer")
                .subscribe(function (data) {
                projectState = data;
            });
            html2canvas__WEBPACK_IMPORTED_MODULE_3__(slideRender, {
                height: projectState.documentSize.height,
                width: projectState.documentSize.width,
                scale: 200 / projectState.documentSize.height,
                allowTaint: false,
                useCORS: true,
                logging: false
            })
                .then(function (canvas) {
                var imgData = canvas.toDataURL("image/png");
                _this.canvasPrep("complete");
                getProjectState.unsubscribe();
                _this.isSlideRenderLoading = false;
                resolve(imgData);
            })
                .catch(function (error) { return console.log(error); });
        });
    };
    DataService.prototype.saveProject = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            /*
                1.  Detect user session.  This feature is only available to registered users.
                2.  Get thumbnail
                3.  Get projectState, and update 'lastSaved' and 'thumbnail'.  Convert to JSON.
                4.  Get token from userState.  Create payload with token and project state.
                5.  Make API call to backend to save this project's changes to the database.
                6.  Display dialog message
            */
            var sessionData = sessionStorage.getItem("sessionData");
            if (!sessionData) {
                reject("User is not signed in.");
            }
            else if (sessionData) {
                var projectState_1;
                var userState_1;
                _this.getProjectState().then(function (data) {
                    projectState_1 = data;
                    // Update projectState values
                    projectState_1.lastSaved = new Date();
                    return _this.getUserState();
                })
                    .then(function (data) {
                    userState_1 = data;
                    return _this.getThumbnail();
                })
                    .then(function (data) {
                    var fileName = userState_1['username'] + "/" + projectState_1.name + "/thumbnail";
                    return _this.uploadDataUrlToFirebase(userState_1['token'], data, fileName);
                })
                    .then(function (res) {
                    var uploadData = res;
                    projectState_1.thumbnailUrl = uploadData.body.url;
                    projectState_1.thumbnailFileName = uploadData.body.fileName;
                    // Clear selectedImagePreview -- it does not need to be saved in the database
                    // and it causes issues with file size being too large when sending payload to backend
                    projectState_1.selectedImagePreview = '';
                    // Create payload for http POST request
                    var payload = {
                        token: userState_1['token'],
                        project: JSON.stringify(projectState_1)
                    };
                    // Send projectState to backend to be saved to DB
                    _this.http.post(_this.apiEndpoint + "/save-project", payload).subscribe(function (res) { return resolve(res); });
                }).catch(function (error) { return console.log(error); });
            }
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogService = /** @class */ (function () {
    function DialogService() {
        this.message = "";
        this.showDialog = false;
        this.showToast = false;
        this.type = 'success' || 'danger';
    }
    DialogService.prototype.alert = function (message, type, callback) {
        this.message = message;
        this.showDialog = true;
        this.type = type;
        if (callback) {
            this.callback = callback;
        }
        if (!callback) {
            this.callback = null;
        }
    };
    DialogService.prototype.ok = function () {
        if (this.callback)
            this.callback();
        this.close();
    };
    DialogService.prototype.close = function () {
        this.showDialog = false;
    };
    DialogService.prototype.toast = function (message) {
        var _this = this;
        this.message = message;
        this.showToast = true;
        setTimeout(function () {
            _this.showToast = false;
        }, 1250);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toastContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DialogService.prototype, "toastContainer", void 0);
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#overlay {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    z-index: 100;\r\n}\r\n\r\n#dialog-box {\r\n    width: 400px;\r\n    height: auto;\r\n    position: fixed;\r\n    left: 50%;\r\n    margin-left: -200px;\r\n    top: 30vh;\r\n    padding: 25px 25px 15px 25px;\r\n    border-radius: 8px;\r\n    background: #FFF;\r\n    z-index: 101;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#danger-icon, \r\n#success-icon {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n#danger-icon{\r\n    color: red;\r\n}\r\n\r\n#success-icon {\r\n    color: green;\r\n}\r\n\r\n#message {\r\n    margin: 25px;\r\n    font-size: 0.9rem;\r\n    line-height: 1.25;\r\n}\r\n\r\nbutton {\r\n    width: 100px;\r\n    height: 25px;\r\n    border: 0;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    background: rgb(146, 141, 141);\r\n    color: #FFF;\r\n}\r\n\r\nbutton:hover {\r\n    background: rgb(175, 170, 170);\r\n}\r\n\r\n#toast-container {\r\n    position: fixed;\r\n    bottom: 25px;\r\n    right: 25px;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 15px 20px;\r\n    background: white;\r\n    border-radius: 7px;\r\n    font-size: 0.9rem;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#toast-container fa {\r\n    color: green;\r\n    font-size: 1rem;\r\n    padding-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\" *ngIf=\"this.dialog.showDialog\">\r\n  <div id=\"dialog-box\" class=\"flex-col-evenly\">\r\n    <fa name=\"check-circle\" *ngIf=\"this.dialog.type === 'success'\" id=\"success-icon\"></fa>\r\n    <fa name=\"exclamation-triangle\" *ngIf=\"this.dialog.type === 'danger'\" id=\"danger-icon\"></fa>\r\n\r\n    <p id=\"message\">{{this.dialog.message}}</p>\r\n\r\n    <div class=\"flex-row-center\">\r\n        <button (click)=\"this.dialog.ok()\">Ok</button>\r\n        <button *ngIf=\"this.dialog.callback\" (click)=\"this.dialog.close()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div #toastContainer id=\"toast-container\" *ngIf=\"this.dialog.showToast\" class=\"flex-row-evenly\">\r\n    <fa name=\"check-circle\"></fa>\r\n  <p>{{ this.dialog.message }}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.component-container {\r\n    padding: 75px 0;\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app-theme {\r\n    border: 0;\r\n    background: #FFF;\r\n    color: rgb(37, 44, 38);\r\n    border-radius: 10px;\r\n}\r\n\r\n#app-brand {\r\n    font-family: 'Oleo Script Swash Caps', cursive;\r\n    font-size: 4rem;\r\n}\r\n\r\n#app-desc {\r\n    max-width: 90vw;\r\n    margin: 25px auto;\r\n}\r\n\r\n#desc-container {\r\n    align-self: flex-start;\r\n}\r\n\r\n#decription-list {\r\n    width: 500px;\r\n    max-width: 85vw;\r\n}\r\n\r\n#description-list li {\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    line-height: 30px;\r\n    display: -ms-grid;\r\n    display: grid; \r\n    -ms-grid-columns: 35px 1fr; \r\n        grid-template-columns: 35px 1fr;\r\n}\r\n\r\n#description-list li fa {\r\n    margin: 0 15px;\r\n    color: rgb(0, 155, 0);\r\n}\r\n\r\n#description-list li p {\r\n    margin: auto 15px;\r\n}\r\n\r\n.cta-btn {\r\n    padding: 10px 25px;\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n    background: rgb(72, 72, 252);\r\n    border: 0;\r\n    border-radius: 5px;\r\n    color: #FFF;\r\n    margin: 25px auto;\r\n}\r\n\r\n.cta-btn:hover {\r\n    background: rgb(90, 192, 255);\r\n}\r\n\r\n#forms-container {\r\n    width: 300px;\r\n    margin: 0 25px;\r\n    overflow: hidden;\r\n    box-shadow: 2px 2px 5px black;\r\n    align-self: flex-start;\r\n}\r\n\r\n#forms-container-nav {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    grid-gap: 1px;\r\n    background: silver;\r\n    border-bottom: 1px silver inset;\r\n}\r\n\r\n#forms-container-nav button {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 0 auto;\r\n    padding: 12px 0;\r\n    font-size: 1rem;\r\n    background: white;\r\n    border: 0;\r\n    color: rgb(49, 49, 49);\r\n    transition: background 0.25s;\r\n    outline: none;\r\n}\r\n\r\n#forms-container-nav button:hover {\r\n    background: silver;\r\n    transition: background 0.25s;\r\n}\r\n\r\n#splash {\r\n    box-shadow: 0px 0px 10px rgba(59, 59, 59, 0.4);\r\n    border: 1px rgba(54, 54, 54, 0.5) solid;\r\n    width: 600px;\r\n    height: auto;\r\n    max-width: 90vw;\r\n    margin: 20px auto;\r\n    position: relative;\r\n}\r\n\r\n#mobile-links-container {\r\n    display: none;\r\n}\r\n\r\n#mobile-links-container a {\r\n    color: rgb(202, 202, 202);\r\n    text-decoration: none;\r\n    margin: 0 15px;\r\n    font-size: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 975px){\r\n    #forms-container {\r\n        display: none;\r\n    }\r\n\r\n    #mobile-links-container {\r\n        display: flex;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px){\r\n    .cta-btn {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 450px){\r\n    #app-brand {\r\n        font-size: 14.25vw;\r\n    }\r\n\r\n    p {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    #forms-container {\r\n        display: none;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\r\n\r\n  <div class=\"flex-row-center wrap\">\r\n    <div id=\"desc-container\" class=\"flex-col-start\">\r\n      <h1 id=\"app-brand\">CreativeStudio</h1>\r\n\r\n      <div id=\"mobile-links-container\" class=\"flex-row-center\">\r\n          <a [routerLink]=\"['login']\">Login</a>|\r\n          <a [routerLink]=\"['registration']\">Register</a>\r\n        </div>\r\n      \r\n\r\n      <p id=\"app-desc\">Produce beautiful creative content right in your web browser. No installations required!</p>\r\n      <ul id=\"description-list\">\r\n        <li>\r\n          <fa name=\"check\"></fa><p>Create presentation slideshows</p>\r\n        </li>\r\n        <li>\r\n          <fa name=\"check\"></fa><p>Draft web design templates</p>\r\n        </li>\r\n        <li>\r\n          <fa name=\"check\"></fa><p>Generate PDF Documents</p>\r\n        </li>\r\n        <li>\r\n          <fa name=\"check\"></fa><p>Image editing</p>\r\n        </li>\r\n        <li>\r\n          <fa name=\"check\"></fa><p>Google Fonts library and Pixabay image search, all in one place.</p>\r\n        </li>\r\n      </ul>\r\n\r\n      <button (click)=\"this.data.useAsGuest()\" class=\"cta-btn\">Use as guest</button>\r\n\r\n      <img id=\"splash\" src=\"../../assets/splash.jpg\">\r\n\r\n    </div>\r\n\r\n    <div class=\"app-theme\" id=\"forms-container\">\r\n      <div id=\"forms-container-nav\" class=\"flex-row-evenly\">\r\n        <button (click)=\"showForm('login')\">Login</button>\r\n        <button (click)=\"showForm('registration')\">Register</button>\r\n      </div>\r\n      <login embedded=\"true\" *ngIf=\"showLogin\"></login>\r\n      <registration embedded=\"true\" *ngIf=\"showRegistration\"></registration>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"flex-row-center\">\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, store, data) {
        this.router = router;
        this.store = store;
        this.data = data;
        /*  UI LAYOUT VARIABLES  */
        this.showLogin = true;
        this.showRegistration = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showForm = function (form) {
        // This function serves as the controller for the displaying of login and registration forms
        switch (form) {
            case 'login':
                this.showLogin = true;
                this.showRegistration = false;
                break;
            case 'registration':
                this.showLogin = false;
                this.showRegistration = true;
                break;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-brand {\r\n    font-family: 'Oleo Script Swash Caps', cursive;\r\n    font-size: 4rem;\r\n    margin: 50px auto 25px auto;\r\n}\r\n\r\n#form{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nform > * {\r\n    width: 85%;\r\n}\r\n\r\nlabel {\r\n    margin-top: 20px;\r\n    margin-bottom: 3px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\ninput[type=\"password\"],\r\ninput[type=\"text\"] {\r\n    height: 35px;\r\n    border: 1px silver solid;\r\n    border-radius: 5px;\r\n    line-height: 25px;\r\n    font-size: 1.2rem;\r\n    padding: 0 10px;\r\n    font-weight: normal;\r\n}\r\n\r\nbutton {\r\n    height: 50px;\r\n    background: rgb(101, 168, 101);\r\n    border: 0;\r\n    margin: 20px;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: #FFF;\r\n}\r\n\r\nbutton:hover {\r\n    background: rgb(125, 209, 125);\r\n}\r\n\r\n.server-alert {\r\n    font-size: 0.7rem;\r\n    color: red;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 450px){\r\n    #app-brand {\r\n        font-size: 14.25vw;\r\n    }\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"!embedded\" class=\"flex-col-center\">\r\n      <h1 id=\"app-brand\">CreativeStudio</h1>\r\n  </div>\r\n  \r\n  <form class=\"flex-col-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"this.data.login(loginForm.value)\">\r\n    <label>\r\n      Username:\r\n    </label>\r\n    <input type=\"text\" formControlName=\"username\">\r\n\r\n    <label>\r\n      Password:\r\n    </label>\r\n    <input type=\"password\" formControlName=\"password\">\r\n\r\n    <div class=\"server-alert\" *ngIf=\"this.data.serverMsg\">{{\r\n      this.data.serverMsg }}</div>\r\n\r\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, data) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.data = data;
        this.embedded = false;
        this.loginForm = fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // this.data.serverMsg is shared with the home component.
        // Clearing it prevents the wrong serverMsg from being displayed on dashboard forms after user signs in.
        this.data.serverMsg = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "embedded", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-brand {\r\n    font-family: 'Oleo Script Swash Caps', cursive;\r\n    font-size: 4rem;\r\n    margin: 50px auto 25px auto;\r\n}\r\n\r\nform > * {\r\n    width: 85%;\r\n}\r\n\r\nlabel {\r\n    margin-top: 20px;\r\n    margin-bottom: 3px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\ninput[type=\"password\"],\r\ninput[type=\"text\"] {\r\n    height: 35px;\r\n    border: 1px silver solid;\r\n    border-radius: 5px;\r\n    line-height: 25px;\r\n    font-size: 1.2rem;\r\n    padding: 0 10px;\r\n    font-weight: normal;\r\n}\r\n\r\nbutton {\r\n    height: 50px;\r\n    background: rgb(101, 168, 101);\r\n    border: 0;\r\n    margin: 20px;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: #FFF;\r\n}\r\n\r\nbutton:hover {\r\n    background: rgb(125, 209, 125);\r\n}\r\n\r\n/*  Reactive forms */\r\n\r\n.form-alert {\r\n    font-size: 0.7rem;\r\n    color: red;\r\n    margin-top: 2px;\r\n}\r\n\r\n.server-alert {\r\n    font-size: 0.7rem;\r\n    color: red;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!embedded\" class=\"flex-col-center\">\r\n    <h1 id=\"app-brand\">CreativeStudio</h1>\r\n</div>\r\n\r\n<form class=\"flex-col-center\" [formGroup]=\"rForm\" (ngSubmit)=\"this.data.register(rForm.value)\">\r\n  <label>\r\n    First name:\r\n  </label>\r\n  <input type=\"text\" formControlName=\"first\">\r\n  <div class=\"form-alert\" *ngIf=\"rForm.controls['first'].errors?.required && rForm.controls['first'].touched\">{{\r\n    requiredAlert }}</div>\r\n\r\n  <label>\r\n    Last name:\r\n  </label>\r\n  <input type=\"text\" formControlName=\"last\">\r\n  <div class=\"form-alert\" *ngIf=\"rForm.controls['last'].errors?.required && rForm.controls['last'].touched\">{{\r\n    requiredAlert }}</div>\r\n\r\n  <label>\r\n    Email address:\r\n  </label>\r\n  <input type=\"text\" formControlName=\"email\">\r\n  <div *ngIf=\"rForm.controls['email'].touched\">\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['email'].errors?.required\">{{ requiredAlert }}</div>\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['email'].errors?.email\">{{ emailAlert }}</div>\r\n  </div>\r\n\r\n  <label>\r\n    Choose a username:\r\n  </label>\r\n  <input type=\"text\" formControlName=\"username\">\r\n  <div *ngIf=\"rForm.controls['username'].touched\">\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['username'].errors?.required\">{{ requiredAlert }}</div>\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['username'].errors?.minlength\">{{ requiredLengthAlert +\r\n      rForm.controls['username'].errors.minlength.requiredLength }}</div>\r\n  </div>\r\n\r\n  <label>\r\n    Choose a password:\r\n  </label>\r\n  <input type=\"password\" formControlName=\"password\">\r\n  <div *ngIf=\"rForm.controls['password'].touched\">\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['password'].errors?.required\">{{ requiredAlert }}</div>\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['password'].errors?.minlength\">{{ requiredLengthAlert +\r\n      rForm.controls['password'].errors.minlength.requiredLength }}</div>\r\n  </div>\r\n\r\n  <label>\r\n    Re-type your password:\r\n  </label>\r\n  <input type=\"password\" formControlName=\"password2\">\r\n  <div *ngIf=\"rForm.controls['password2'].touched\">\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['password2'].errors?.required\">{{ requiredAlert }}</div>\r\n    <div class=\"form-alert\" *ngIf=\"rForm.controls['password2'].errors?.passwordMismatch\">{{ passwordMismatchAlert }}</div>\r\n  </div>\r\n\r\n  <div class=\"server-alert\" *ngIf=\"this.data.serverMsg\">{{\r\n      this.data.serverMsg }}</div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!rForm.valid\">Register</button>\r\n</form>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(data, fb, http, router) {
        this.data = data;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.embedded = false;
        this.requiredAlert = 'Required';
        this.passwordMismatchAlert = 'Passwords do not match';
        this.emailAlert = 'Invalid email address';
        this.requiredLengthAlert = 'Minimum length: ';
        this.rForm = fb.group({
            'first': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'last': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])],
            'password2': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.passwordMatchValidator = function (control) {
        // This validator makes sure that the passwords match
        return control.get('password').value === control.get('password2').value ? null : control.get('password2').setErrors({ 'passwordMismatch': true });
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        // data.serverMsg is shared with dashboard.
        // Clearing it prevents the wrong serverMsg from being displayed in the dashboard.
        this.data.serverMsg = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistrationComponent.prototype, "embedded", void 0);
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/state-management/actions/projectActions.ts":
/*!************************************************************!*\
  !*** ./src/app/state-management/actions/projectActions.ts ***!
  \************************************************************/
/*! exports provided: NEW_PROJECT, LOAD_PROJECT, ADD_SLIDE, DEL_SLIDE, NEXT_SLIDE, PREV_SLIDE, ADD_IMAGEOBJECT, ADD_TEXTOBJECT, DEL_SLIDEOBJECT, SET_TEXTVALUE, ADD_TEXTSTYLE, DEL_TEXTSTYLE, ADD_IMAGESTYLE, DEL_IMAGESTYLE, ADD_IMAGE, DEL_IMAGE, SET_SANDBOXTEXT, SET_MODE, SET_SELECTED_IMAGE_PREVIEW, SELECT_TEXTSTYLE, SELECT_IMAGESTYLE, SELECT_GALLERY_IMAGE, SELECT_SLIDEOBJECT, SLIDEOBJECT_LAYER_UP, SLIDEOBJECT_LAYER_DOWN, SAVE_NOTES, NewProject, LoadProject, AddTextObject, SetTextValue, AddImageObject, DelSlideObject, DelTextStyle, DelImageStyle, AddImage, DelImage, SetSandboxText, SetMode, SetSelectedImagePreview, SelectTextStyle, SelectImageStyle, SelectGalleryImage, SlideObjectLayerUp, SlideObjectLayerDown, SaveNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_PROJECT", function() { return NEW_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PROJECT", function() { return LOAD_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SLIDE", function() { return ADD_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_SLIDE", function() { return DEL_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_SLIDE", function() { return NEXT_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV_SLIDE", function() { return PREV_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGEOBJECT", function() { return ADD_IMAGEOBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEXTOBJECT", function() { return ADD_TEXTOBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_SLIDEOBJECT", function() { return DEL_SLIDEOBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TEXTVALUE", function() { return SET_TEXTVALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEXTSTYLE", function() { return ADD_TEXTSTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_TEXTSTYLE", function() { return DEL_TEXTSTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGESTYLE", function() { return ADD_IMAGESTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_IMAGESTYLE", function() { return DEL_IMAGESTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGE", function() { return ADD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL_IMAGE", function() { return DEL_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SANDBOXTEXT", function() { return SET_SANDBOXTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MODE", function() { return SET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_IMAGE_PREVIEW", function() { return SET_SELECTED_IMAGE_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_TEXTSTYLE", function() { return SELECT_TEXTSTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_IMAGESTYLE", function() { return SELECT_IMAGESTYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_GALLERY_IMAGE", function() { return SELECT_GALLERY_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_SLIDEOBJECT", function() { return SELECT_SLIDEOBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDEOBJECT_LAYER_UP", function() { return SLIDEOBJECT_LAYER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDEOBJECT_LAYER_DOWN", function() { return SLIDEOBJECT_LAYER_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_NOTES", function() { return SAVE_NOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProject", function() { return NewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProject", function() { return LoadProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTextObject", function() { return AddTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTextValue", function() { return SetTextValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageObject", function() { return AddImageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelSlideObject", function() { return DelSlideObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelTextStyle", function() { return DelTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelImageStyle", function() { return DelImageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImage", function() { return AddImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelImage", function() { return DelImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSandboxText", function() { return SetSandboxText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMode", function() { return SetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedImagePreview", function() { return SetSelectedImagePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTextStyle", function() { return SelectTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectImageStyle", function() { return SelectImageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGalleryImage", function() { return SelectGalleryImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideObjectLayerUp", function() { return SlideObjectLayerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideObjectLayerDown", function() { return SlideObjectLayerDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveNotes", function() { return SaveNotes; });
// UserState actions
var NEW_PROJECT = "NEW_PROJECT";
var LOAD_PROJECT = "LOAD_PROJECT";
var ADD_SLIDE = "ADD_SLIDE";
var DEL_SLIDE = "DEL_SLIDE";
var NEXT_SLIDE = "NEXT_SLIDE";
var PREV_SLIDE = "PREV_SLIDE";
var ADD_IMAGEOBJECT = "ADD_IMAGEOBJECT";
var ADD_TEXTOBJECT = "ADD_TEXTOBJECT";
var DEL_SLIDEOBJECT = "DEL_SLIDEOBJECT";
var SET_TEXTVALUE = "SET_TEXTVALUE";
var ADD_TEXTSTYLE = "ADD_TEXTSTYLE";
var DEL_TEXTSTYLE = "DEL_TEXTSTYLE";
var ADD_IMAGESTYLE = "ADD_IMAGESTYLE";
var DEL_IMAGESTYLE = "DEL_IMAGESTYLE";
var ADD_IMAGE = "ADD_IMAGE";
var DEL_IMAGE = "DEL_IMAGE";
var SET_SANDBOXTEXT = "SET_SANDBOXTEXT";
var SET_MODE = "SET_MODE";
var SET_SELECTED_IMAGE_PREVIEW = 'SET_SELECTED_IMAGE_PREVIEW';
var SELECT_TEXTSTYLE = "SELECT_TEXTSTYLE";
var SELECT_IMAGESTYLE = "SELECT_IMAGESTYLE";
var SELECT_GALLERY_IMAGE = "SELECT_GALLERY_IMAGE";
var SELECT_SLIDEOBJECT = "SELECT_SLIDEOBJECT";
var SLIDEOBJECT_LAYER_UP = 'SLIDEOBJECT_LAYER_UP';
var SLIDEOBJECT_LAYER_DOWN = 'SLIDEOBJECT_LAYER_DOWN';
var SAVE_NOTES = "SAVE_NOTES";
var NewProject = /** @class */ (function () {
    function NewProject(payload) {
        this.payload = payload;
        this.type = NEW_PROJECT;
    }
    return NewProject;
}());

var LoadProject = /** @class */ (function () {
    function LoadProject(payload) {
        this.payload = payload;
        this.type = LOAD_PROJECT;
    }
    return LoadProject;
}());

var AddTextObject = /** @class */ (function () {
    function AddTextObject(payload) {
        this.payload = payload;
        this.type = ADD_TEXTOBJECT;
    }
    return AddTextObject;
}());

var SetTextValue = /** @class */ (function () {
    function SetTextValue(payload) {
        this.payload = payload;
        this.type = SET_TEXTVALUE;
    }
    return SetTextValue;
}());

var AddImageObject = /** @class */ (function () {
    function AddImageObject(payload) {
        this.payload = payload;
        this.type = ADD_IMAGEOBJECT;
    }
    return AddImageObject;
}());

var DelSlideObject = /** @class */ (function () {
    function DelSlideObject(payload) {
        this.payload = payload;
        this.type = DEL_SLIDEOBJECT;
    }
    return DelSlideObject;
}());

var DelTextStyle = /** @class */ (function () {
    function DelTextStyle(payload) {
        this.payload = payload;
        this.type = DEL_TEXTSTYLE;
    }
    return DelTextStyle;
}());

var DelImageStyle = /** @class */ (function () {
    function DelImageStyle(payload) {
        this.payload = payload;
        this.type = DEL_IMAGESTYLE;
    }
    return DelImageStyle;
}());

var AddImage = /** @class */ (function () {
    function AddImage(payload) {
        this.payload = payload;
        this.type = ADD_IMAGE;
    }
    return AddImage;
}());

var DelImage = /** @class */ (function () {
    function DelImage(payload) {
        this.payload = payload;
        this.type = DEL_IMAGE;
    }
    return DelImage;
}());

var SetSandboxText = /** @class */ (function () {
    function SetSandboxText(payload) {
        this.payload = payload;
        this.type = SET_SANDBOXTEXT;
    }
    return SetSandboxText;
}());

var SetMode = /** @class */ (function () {
    function SetMode(payload) {
        this.payload = payload;
        this.type = SET_MODE;
    }
    return SetMode;
}());

var SetSelectedImagePreview = /** @class */ (function () {
    function SetSelectedImagePreview(payload) {
        this.payload = payload;
        this.type = SET_SELECTED_IMAGE_PREVIEW;
    }
    return SetSelectedImagePreview;
}());

var SelectTextStyle = /** @class */ (function () {
    function SelectTextStyle(payload) {
        this.payload = payload;
        this.type = SELECT_TEXTSTYLE;
    }
    return SelectTextStyle;
}());

var SelectImageStyle = /** @class */ (function () {
    function SelectImageStyle(payload) {
        this.payload = payload;
        this.type = SELECT_IMAGESTYLE;
    }
    return SelectImageStyle;
}());

var SelectGalleryImage = /** @class */ (function () {
    function SelectGalleryImage(payload) {
        this.payload = payload;
        this.type = SELECT_GALLERY_IMAGE;
    }
    return SelectGalleryImage;
}());

var SlideObjectLayerUp = /** @class */ (function () {
    function SlideObjectLayerUp(payload) {
        this.payload = payload;
        this.type = SLIDEOBJECT_LAYER_UP;
    }
    return SlideObjectLayerUp;
}());

var SlideObjectLayerDown = /** @class */ (function () {
    function SlideObjectLayerDown(payload) {
        this.payload = payload;
        this.type = SLIDEOBJECT_LAYER_DOWN;
    }
    return SlideObjectLayerDown;
}());

var SaveNotes = /** @class */ (function () {
    function SaveNotes(payload) {
        this.payload = payload;
        this.type = SAVE_NOTES;
    }
    return SaveNotes;
}());



/***/ }),

/***/ "./src/app/state-management/actions/userActions.ts":
/*!*********************************************************!*\
  !*** ./src/app/state-management/actions/userActions.ts ***!
  \*********************************************************/
/*! exports provided: LOGIN, LOGOUT, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
// UserState actions
var LOGIN = "LOGIN";
var LOGOUT = "LOGOUT";
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/state-management/reducers/projectReducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/state-management/reducers/projectReducer.ts ***!
  \*************************************************************/
/*! exports provided: projectReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectReducer", function() { return projectReducer; });
/* harmony import */ var _state_projectState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/projectState */ "./src/app/state-management/state/projectState.ts");
/* harmony import */ var src_app_classes_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/slide */ "./src/app/classes/slide.ts");
/* harmony import */ var src_app_classes_imageObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/imageObject */ "./src/app/classes/imageObject.ts");
/* harmony import */ var src_app_classes_textObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var src_app_classes_textStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var src_app_classes_imageStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var src_app_classes_documentSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/documentSize */ "./src/app/classes/documentSize.ts");
/* harmony import */ var _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








function projectReducer(state, action) {
    if (state === void 0) { state = _state_projectState__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    /* PROJECT REDUCER HANDLES A LARGE BULK OF APP LOGIC */
    var newState = __assign({}, state);
    var defaultDocSize = new src_app_classes_documentSize__WEBPACK_IMPORTED_MODULE_6__["DocumentSize"]({
        height: 864,
        width: 1536,
        isCustom: false,
        jsPdfOrientation: 'landscape'
    });
    switch (action.type) {
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["NEW_PROJECT"]:
            // Return all state variables to initial states for new project
            // (Had issues cloning an instance of intial state)
            newState.name = action.payload ? action.payload.name : 'New Project';
            newState.documentSize = action.payload ? action.payload.documentSize : defaultDocSize;
            newState.created = new Date();
            newState.lastSaved = new Date();
            var defaultSlide = new src_app_classes_slide__WEBPACK_IMPORTED_MODULE_1__["Slide"]();
            defaultSlide.isDefault = true;
            newState.slides = [defaultSlide];
            var defaultTextStyle = new src_app_classes_textStyle__WEBPACK_IMPORTED_MODULE_4__["TextStyle"]();
            defaultTextStyle.isDefault = true;
            newState.textStyles = [defaultTextStyle];
            newState.selectedTextStyle = newState.textStyles[0];
            var defaultImageStyle = new src_app_classes_imageStyle__WEBPACK_IMPORTED_MODULE_5__["ImageStyle"]();
            defaultImageStyle.isDefault = true;
            newState.imageStyles = [defaultImageStyle];
            newState.selectedImageStyle = newState.imageStyles[0];
            newState.selectedImagePreview = '',
                newState.currentSlideIndex = 0;
            newState.images = [];
            newState.selectedImage = null;
            newState.viewTextElements = true;
            newState.viewImageElements = false;
            newState.sandboxText = "Lorem Ipsum";
            newState.textNotes = "Notes...";
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["LOAD_PROJECT"]:
            // Populate state variables with data from payload
            return action.payload.projectData;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_SLIDE"]:
            // Add a new slide to the project
            newState.slides.push(new src_app_classes_slide__WEBPACK_IMPORTED_MODULE_1__["Slide"]());
            newState.currentSlideIndex = newState.slides.length - 1;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["DEL_SLIDE"]:
            // Delete the current slide
            if (newState.slides.length > 0)
                newState.slides.splice(newState.currentSlideIndex, 1);
            if (newState.currentSlideIndex > 0)
                newState.currentSlideIndex--;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["NEXT_SLIDE"]:
            // Slide navigation
            if (newState.currentSlideIndex < newState.slides.length - 1) {
                newState.currentSlideIndex++;
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["PREV_SLIDE"]:
            // Slide navigation
            if (newState.currentSlideIndex > 0) {
                newState.currentSlideIndex--;
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_IMAGEOBJECT"]:
            // Create a new ImageObject with selected image selected image style
            // and add it to the current slide.
            var imageObject_1 = new src_app_classes_imageObject__WEBPACK_IMPORTED_MODULE_2__["ImageObject"]();
            imageObject_1.imagePath = action.payload.url;
            imageObject_1.fileName = action.payload.fileName;
            imageObject_1.style = newState.selectedImageStyle;
            // Scale down images that are larger than doc size
            var img_1 = new Image();
            img_1.src = imageObject_1.imagePath;
            img_1.onload = function () {
                // Set imageObject height and width
                if (img_1.width <= newState.documentSize["width"]) {
                    imageObject_1.height = img_1.height;
                    imageObject_1.width = img_1.width;
                }
                else if (img_1.width > newState.documentSize["width"]) {
                    var ratio = img_1.width / img_1.height;
                    imageObject_1.width = newState.documentSize["width"];
                    imageObject_1.height = newState.documentSize["width"] / ratio;
                }
                img_1 = null;
                // Add imageObject to slide
                newState.slides[newState.currentSlideIndex].slideObjects.push(imageObject_1);
            };
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_TEXTOBJECT"]:
            // Create a new textObject with sandboxText and selectedTextStyle
            // and add it to the current slide.
            var textObject = new src_app_classes_textObject__WEBPACK_IMPORTED_MODULE_3__["TextObject"]();
            textObject.style = newState.selectedTextStyle;
            textObject.textValue = newState.sandboxText;
            newState.slides[newState.currentSlideIndex].slideObjects.push(textObject);
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["DEL_SLIDEOBJECT"]:
            // If imageOjbect, delete image from firestorage
            newState.slides.forEach(function (slide) {
                for (var i = 0; i < slide.slideObjects.length; i++) {
                    if (slide.slideObjects[i] === action.payload.slideObject)
                        slide.slideObjects.splice(i, 1);
                }
            });
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_TEXTSTYLE"]:
            // Add a new textStyle to the project.
            var textStyle = new src_app_classes_textStyle__WEBPACK_IMPORTED_MODULE_4__["TextStyle"]();
            newState.textStyles.push(textStyle);
            newState.selectedTextStyle = textStyle;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["DEL_TEXTSTYLE"]:
            // Confirmation has been handled by the component.
            // Delete the textStyle specified in the payload.
            for (var i = 0; i < newState.textStyles.length; i++) {
                if (newState.textStyles[i] === action.payload.textStyle) {
                    newState.textStyles.splice(i, 1);
                    break;
                }
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_IMAGESTYLE"]:
            // Add a new imageStyle to the project.
            var imageStyle = new src_app_classes_imageStyle__WEBPACK_IMPORTED_MODULE_5__["ImageStyle"]();
            newState.imageStyles.push(imageStyle);
            newState.selectedImageStyle = imageStyle;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["DEL_IMAGESTYLE"]:
            // Confirmation has been handled by the component.
            // Delete the imageStyle specified in the payload.
            for (var i = 0; i < newState.imageStyles.length; i++) {
                if (newState.imageStyles[i] === action.payload.imageStyle) {
                    newState.imageStyles.splice(i, 1);
                    break;
                }
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["ADD_IMAGE"]:
            // Add a the galleryImage in the payload to the project
            newState.images.push(action.payload.galleryImage);
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["DEL_IMAGE"]:
            // Confirmation has been handled by the component.
            // Delete the image specified in the payload.
            // Remove image from firestorage
            for (var i = 0; i < newState.images.length; i++) {
                if (newState.images[i] === action.payload.galleryImage) {
                    if (newState.selectedImage === action.payload.galleryImage)
                        newState.selectedImage = null;
                    newState.images.splice(i, 1);
                    break;
                }
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SET_SANDBOXTEXT"]:
            // Update the project's sandboxText with the data in the payload.
            // This is triggered by the change event in the text sandbox text input
            newState.sandboxText = action.payload.sandboxText;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SET_MODE"]:
            // Switch between 'text' mode and 'image' mode for styler, toolbar, and sandbox components
            if (action.payload.mode === "text") {
                newState.viewImageElements = false;
                newState.viewTextElements = true;
            }
            if (action.payload.mode === "image") {
                newState.viewImageElements = true;
                newState.viewTextElements = false;
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SET_SELECTED_IMAGE_PREVIEW"]:
            // Set the selectedImagePreview to the dataURL provided in the payload
            newState.selectedImagePreview = action.payload.selectedImagePreview;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SELECT_TEXTSTYLE"]:
            // Set the project's selected textStyle to the one that is specified in the payload
            newState.selectedTextStyle = action.payload.textStyle;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SELECT_IMAGESTYLE"]:
            // Set the project's selected imageStyle to the one that is specified in the payload
            newState.selectedImageStyle = action.payload.imageStyle;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SELECT_GALLERY_IMAGE"]:
            // Set the project's selected image to the one that is specified in the payload
            newState.selectedImage = action.payload.galleryImage;
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SELECT_SLIDEOBJECT"]:
            // Set the project's selected slide object to the one that is specified in the payload
            var thisSlide = newState.slides[newState.currentSlideIndex];
            for (var i = 0; i < thisSlide.slideObjects.length; i++) {
                if (thisSlide.slideObjects[i] === action.payload.slideObject) {
                    newState.selectedSlideObjectId = action.payload.slideObject.id;
                    break;
                }
            }
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SLIDEOBJECT_LAYER_DOWN"]:
            // Find the slide object specified in the payload and switch its place with
            // the slide object in the previous index
            newState.slides.forEach(function (slide) {
                for (var i = 0; i < slide.slideObjects.length; i++) {
                    if (slide.slideObjects[i] === action.payload.slideObject) {
                        if (i > 0) {
                            var temp = slide.slideObjects[i];
                            slide.slideObjects[i] = slide.slideObjects[i - 1];
                            slide.slideObjects[i - 1] = temp;
                            break;
                        }
                    }
                }
            });
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SLIDEOBJECT_LAYER_UP"]:
            // Find the slide object specified in the payload and switch its place with
            // the slide object in the next index
            newState.slides.forEach(function (slide) {
                for (var i = 0; i < slide.slideObjects.length; i++) {
                    if (slide.slideObjects[i] === action.payload.slideObject) {
                        if (i < slide.slideObjects.length - 1) {
                            var temp = slide.slideObjects[i];
                            slide.slideObjects[i] = slide.slideObjects[i + 1];
                            slide.slideObjects[i + 1] = temp;
                            break;
                        }
                    }
                }
            });
            return newState;
        case _actions_projectActions__WEBPACK_IMPORTED_MODULE_7__["SAVE_NOTES"]:
            newState.textNotes = action.payload.textNotes;
            return newState;
        default: {
            return newState;
        }
    }
}
;


/***/ }),

/***/ "./src/app/state-management/reducers/userReducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/state-management/reducers/userReducer.ts ***!
  \**********************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _state_userState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/userState */ "./src/app/state-management/state/userState.ts");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/userActions */ "./src/app/state-management/actions/userActions.ts");


function userReducer(state, action) {
    if (state === void 0) { state = _state_userState__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
            // Populate userState variables with the data in the payload
            return {
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token,
                first: action.payload.first,
                last: action.payload.last,
                email: action.payload.email,
                username: action.payload.username
            };
        case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
            // Clear userState
            return {
                isLoggedIn: false,
                token: '',
                first: '',
                last: '',
                email: '',
                username: ''
            };
        default: {
            return state;
        }
    }
}
;


/***/ }),

/***/ "./src/app/state-management/state/projectState.ts":
/*!********************************************************!*\
  !*** ./src/app/state-management/state/projectState.ts ***!
  \********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _classes_imageStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var _classes_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/slide */ "./src/app/classes/slide.ts");
/* harmony import */ var src_app_classes_documentSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/documentSize */ "./src/app/classes/documentSize.ts");




// Create defaults
var defaultTextStyle = new _classes_textStyle__WEBPACK_IMPORTED_MODULE_0__["TextStyle"];
defaultTextStyle.isDefault = true;
defaultTextStyle.name = "Default Text Style";
var defaultImageStyle = new _classes_imageStyle__WEBPACK_IMPORTED_MODULE_1__["ImageStyle"];
defaultImageStyle.isDefault = true;
defaultImageStyle.name = "Default Image Style";
var defaultSlide = new _classes_slide__WEBPACK_IMPORTED_MODULE_2__["Slide"];
defaultSlide.isDefault = true;
var initialState = {
    name: 'New Project',
    created: new Date(),
    lastSaved: new Date(),
    thumbnailUrl: 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg',
    thumbnailFileName: '',
    slides: [defaultSlide],
    textStyles: [defaultTextStyle],
    imageStyles: [defaultImageStyle],
    selectedTextStyle: defaultTextStyle,
    selectedImageStyle: defaultImageStyle,
    currentSlideIndex: 0,
    selectedSlideObjectId: 0,
    images: [],
    sandboxText: 'Lorem Ipsum',
    selectedImage: null,
    selectedImagePreview: '',
    viewTextElements: true,
    viewImageElements: false,
    textNotes: 'Notes...',
    documentSize: new src_app_classes_documentSize__WEBPACK_IMPORTED_MODULE_3__["DocumentSize"]({
        height: 864,
        width: 1536,
        jsPdfFormat: [16, 9],
        orientation: 'landscape'
    }),
};


/***/ }),

/***/ "./src/app/state-management/state/userState.ts":
/*!*****************************************************!*\
  !*** ./src/app/state-management/state/userState.ts ***!
  \*****************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    isLoggedIn: false,
    token: '',
    first: '',
    last: '',
    email: '',
    username: ''
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\deckbuilder2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map