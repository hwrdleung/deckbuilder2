(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-container {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 0;\r\n        -ms-grid-rows: auto 0 auto 0 1fr;\r\n        grid-template-rows: auto auto 1fr;\r\n        -ms-grid-columns: 275px 0 1fr 0 10px 0 1fr;\r\n        grid-template-columns: 275px 1fr 10px 1fr;\r\n        grid-template-areas:\r\n        \"toolbar toolbar toolbar toolbar\"\r\n        \"styler toolbar2 toolbar2 toolbar2\"\r\n        \"styler sandbox resizer editor\"\r\n}\r\n\r\n#toolbar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 7;\r\n    grid-area: toolbar;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#toolbar-secondary {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 5;\r\n    grid-area: toolbar2;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#styler {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-row-span: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: styler;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#sandbox {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 3;\r\n    grid-area: sandbox;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#slide-editor {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 7;\r\n    grid-area: editor;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#resizer {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 5;\r\n    grid-area: resizer;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: silver;\r\n}\r\n\r\n#resizer:hover {\r\n    cursor: col-resize;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\" #appContainer class=\"grayAccent01\">\r\n\r\n  \r\n  <div id=\"toolbar\" #toolbar>\r\n  <toolbar></toolbar>\r\n  </div>\r\n\r\n  <div id=\"toolbar-secondary\">\r\n  <toolbar-secondary ></toolbar-secondary>\r\n  </div>\r\n\r\n  <div id=\"styler\" #styler>\r\n  <styler></styler>\r\n  </div>\r\n\r\n  <div id=\"sandbox\" #sandbox>\r\n  <sandbox></sandbox>\r\n  </div>\r\n\r\n  <div id=\"resizer\" #resizer></div>\r\n  \r\n  <div id=\"slide-editor\" #slideEditor>\r\n  <slide-editor></slide-editor>\r\n</div>\r\n\r\n</div>\r\n<app-dialog></app-dialog>\r\n\r\n\r\n\r\n\r\n"

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
    function AppComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.enableResizer = function () {
            var startResize = function (e) {
                document.addEventListener('mousemove', _this.resizeGrid);
                document.addEventListener('mouseup', stopResize); // Stop resizer
            };
            var stopResize = function (e) {
                document.removeEventListener('mousemove', _this.resizeGrid);
                document.removeEventListener('mouseup', stopResize); // Stop resizer
            };
            _this.resizer.nativeElement.addEventListener('mousedown', startResize); // start resizer
        };
        this.resizeGrid = function (e) {
            var appContainer = _this.appContainer.nativeElement;
            var viewportWidth = document.documentElement.clientWidth;
            var styler = _this.styler.nativeElement;
            var resizer = _this.resizer.nativeElement;
            var sandboxWidth = e.pageX - styler.offsetWidth - resizer.offsetWidth / 2;
            var slideEditorWidth = viewportWidth - e.pageX - resizer.offsetWidth / 2;
            // Left boundary
            if (e.pageX <= styler.offsetWidth + resizer.offsetWidth) {
                sandboxWidth = 0;
            }
            // Right boundary
            if (e.pageX >= viewportWidth - resizer.offsetWidth) {
                slideEditorWidth = 0;
            }
            appContainer.style.gridTemplateColumns = styler.offsetWidth + "px " + sandboxWidth + "fr " + resizer.offsetWidth + "px " + slideEditorWidth + "fr";
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.enableResizer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "appContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('styler'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "styler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sandbox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "sandbox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideEditor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "slideEditor", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-font-picker */ "./node_modules/ngx-font-picker/dist/ngx-font-picker.es5.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _styler_styler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styler/styler.component */ "./src/app/styler/styler.component.ts");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "./src/app/sandbox/sandbox.component.ts");
/* harmony import */ var _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slide-editor/slide-editor.component */ "./src/app/slide-editor/slide-editor.component.ts");
/* harmony import */ var _text_style_card_text_style_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-style-card/text-style-card.component */ "./src/app/text-style-card/text-style-card.component.ts");
/* harmony import */ var _image_style_card_image_style_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-style-card/image-style-card.component */ "./src/app/image-style-card/image-style-card.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toolbar-app-logic.service */ "./src/app/toolbar-app-logic.service.ts");
/* harmony import */ var _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar2-app-logic.service */ "./src/app/toolbar2-app-logic.service.ts");
/* harmony import */ var _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styler-app-logic.service */ "./src/app/styler-app-logic.service.ts");
/* harmony import */ var _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sandbox-app-logic.service */ "./src/app/sandbox-app-logic.service.ts");
/* harmony import */ var _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slide-editor-app-logic.service */ "./src/app/slide-editor-app-logic.service.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _toolbar_secondary_toolbar_secondary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toolbar-secondary/toolbar-secondary.component */ "./src/app/toolbar-secondary/toolbar-secondary.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var DEFAULT_FONT_PICKER_CONFIG = {
    // Change this to your Google API key
    apiKey: 'AIzaSyAP146kdUvTjlnGzyoP-cFk6_ECHSWMMfw'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"],
                _styler_styler_component__WEBPACK_IMPORTED_MODULE_7__["StylerComponent"],
                _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_8__["SandboxComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_9__["SlideEditorComponent"],
                _text_style_card_text_style_card_component__WEBPACK_IMPORTED_MODULE_10__["TextStyleCardComponent"],
                _image_style_card_image_style_card_component__WEBPACK_IMPORTED_MODULE_11__["ImageStyleCardComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
                _toolbar_secondary_toolbar_secondary_component__WEBPACK_IMPORTED_MODULE_22__["ToolbarSecondaryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_19__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__["FontPickerModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_20__["AngularDraggableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"]
            ],
            providers: [_toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_14__["ToolbarAppLogicService"], _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_15__["Toolbar2AppLogicService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_16__["StylerAppLogicService"], _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_17__["SandboxAppLogicService"], _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_18__["SlideEditorAppLogicService"], _data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"], {
                    provide: ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__["FONT_PICKER_CONFIG"],
                    useValue: DEFAULT_FONT_PICKER_CONFIG
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
        return _super.call(this) || this;
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

var ImageStyle = /** @class */ (function () {
    function ImageStyle() {
        this.id = ImageStyle.imageStyleCounter++;
        this.name = 'ImageStyle' + this.id;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.opacity = 100;
        this.grayscale = 0;
        this.blur = 0;
        this.brightness = 100;
        this.contrast = 100;
        this.hueRotate = 0;
        this.invert = 0;
        this.saturate = 100;
        this.sepia = 0;
        this.border = new _borderControl__WEBPACK_IMPORTED_MODULE_0__["BorderControl"]();
        this.padding = 0;
        this.isDefault = false;
    }
    ImageStyle.prototype.revive = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    ImageStyle.prototype.getCss = function () {
        var css = {
            'border-radius': this.border.getBorderRadiusCss(),
            'filter': this.getFilters(),
            'box-sizing': 'border-box',
            'padding': this.padding + 'px'
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
    ImageStyle.prototype.getFilters = function () {
        var cssFilters = "";
        // Default values:
        var defaultOpacity = 1;
        var defaultGrayscale = 0;
        var defaultBlur = 0;
        var defaultBrightness = 1;
        var defaultContrast = 1;
        var defaultHueRotate = 0;
        var defaultInvert = 0;
        var defaultSaturate = 1;
        var defaultSepia = 0;
        if (this.opacity !== defaultOpacity) {
            cssFilters += 'opacity(' + this.opacity / 100 + ') ';
        }
        if (this.grayscale !== defaultGrayscale) {
            cssFilters += 'grayscale(' + this.grayscale / 100 + ') ';
        }
        if (this.blur !== defaultBlur) {
            cssFilters += 'blur(' + this.blur + 'px) ';
        }
        if (this.brightness !== defaultBrightness) {
            cssFilters += 'brightness(' + this.brightness / 100 + ') ';
        }
        if (this.contrast !== defaultContrast) {
            cssFilters += 'contrast(' + this.contrast / 100 + ') ';
        }
        if (this.hueRotate !== defaultHueRotate) {
            cssFilters += 'hue-rotate(' + this.hueRotate + 'deg) ';
        }
        if (this.invert !== defaultInvert) {
            cssFilters += 'invert(' + this.invert / 100 + ') ';
        }
        if (this.saturate !== defaultSaturate) {
            cssFilters += 'saturate(' + this.saturate / 100 + ') ';
        }
        if (this.sepia !== defaultSepia) {
            cssFilters += 'sepia(' + this.sepia / 100 + ') ';
        }
        cssFilters = cssFilters.substring(0, cssFilters.length - 1);
        return cssFilters;
    };
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

/***/ "./src/app/classes/project.ts":
/*!************************************!*\
  !*** ./src/app/classes/project.ts ***!
  \************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/app/classes/slide.ts");
/* harmony import */ var _textStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _imageStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var _textObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var _imageObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageObject */ "./src/app/classes/imageObject.ts");
/* harmony import */ var _borderControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./borderControl */ "./src/app/classes/borderControl.ts");
/* harmony import */ var _shadowControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadowControl */ "./src/app/classes/shadowControl.ts");
/* harmony import */ var _galleryImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./galleryImage */ "./src/app/classes/galleryImage.ts");








var Project = /** @class */ (function () {
    function Project() {
        this.title = 'New Project';
        this.slideObjectIdCounter = 0;
        this.styleIdCounter = 0;
        this.slideIdCounter = 0;
        this.slides = [new _slide__WEBPACK_IMPORTED_MODULE_0__["Slide"]()];
        this.textStyles = [this.createDefaultTextStyle()];
        this.imageStyles = [this.createDefaultImageStyle()];
        this.selectedTextStyleId = 0;
        this.selectedImageStyleId = 0;
        this.selectedShapeStyleId = 0;
        this.viewTextElements = true;
        this.viewImageElements = false;
        this.viewShapeElements = false;
        this.currentSlideIndex = 0;
        this.selectedSlideObjectId = 1;
        this.sandboxText = "Lorem ipsum";
        this.textNotes = "Add your notes here...";
        this.images = [];
        this.selectedImage = 0;
        this.documentSize = {
            height: 432,
            width: 768
        };
        this.slideRenderMagnification = 50;
    }
    Project.prototype.createDefaultTextStyle = function () {
        var textStyle = new _textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"]();
        textStyle.setProperty('name', 'Default Text Style');
        textStyle.setProperty('isDefault', true);
        return textStyle;
    };
    Project.prototype.createDefaultImageStyle = function () {
        var imageStyle = new _imageStyle__WEBPACK_IMPORTED_MODULE_2__["ImageStyle"]();
        imageStyle.setProperty('name', 'Default Image Style');
        imageStyle.setProperty('isDefault', true);
        return imageStyle;
    };
    Project.prototype.reviveFullProject = function (JSON) {
    };
    Project.prototype.revive = function (jsonData) {
        var savedProjectData = JSON.parse(jsonData);
        for (var key in savedProjectData) {
            this[key] = savedProjectData[key];
        }
        this.reviveGalleryImages(jsonData);
        this.reviveSlides(jsonData);
        this.reviveTextStyles(jsonData);
        this.reviveImageStyles(jsonData);
    };
    Project.prototype.reviveSlides = function (jsonData) {
        var savedProjectData = JSON.parse(jsonData);
        this.slides = [];
        for (var i = 0; i < savedProjectData.slides.length; i++) {
            var thisSlide = savedProjectData.slides[i];
            var slide = new _slide__WEBPACK_IMPORTED_MODULE_0__["Slide"]();
            slide.revive(thisSlide);
            var slideObjects = [];
            for (var j = 0; j < thisSlide.slideObjects.length; j++) {
                var thisSlideObject = thisSlide.slideObjects[j];
                if (thisSlideObject.hasOwnProperty('textValue')) {
                    // Revive text object
                    var textObject = new _textObject__WEBPACK_IMPORTED_MODULE_3__["TextObject"]();
                    textObject.revive(thisSlideObject);
                    slideObjects.push(textObject);
                }
                else if (thisSlideObject.hasOwnProperty('imagePath')) {
                    // Revive image object
                    var imageObject = new _imageObject__WEBPACK_IMPORTED_MODULE_4__["ImageObject"]();
                    imageObject.revive(thisSlideObject);
                    slideObjects.push(imageObject);
                }
                slide.setProperty('slideObjects', slideObjects);
            }
            this.slides.push(slide);
        }
    };
    Project.prototype.reviveTextStyles = function (jsonData) {
        var savedProjectData = JSON.parse(jsonData);
        this.textStyles = [];
        // Revive text styles
        for (var i = 0; i < savedProjectData.textStyles.length; i++) {
            var thisTextStyle = savedProjectData.textStyles[i];
            var textStyle = new _textStyle__WEBPACK_IMPORTED_MODULE_1__["TextStyle"]();
            textStyle.revive(thisTextStyle);
            // Revive borders
            var border = new _borderControl__WEBPACK_IMPORTED_MODULE_5__["BorderControl"]();
            border.revive(thisTextStyle.border);
            textStyle.setProperty('border', border);
            // Revive shadows
            var shadow = new _shadowControl__WEBPACK_IMPORTED_MODULE_6__["ShadowControl"]();
            shadow.revive(thisTextStyle.textShadow);
            textStyle.setProperty('textShadow', shadow);
            this.textStyles.push(textStyle);
        }
    };
    Project.prototype.reviveGalleryImages = function (jsonData) {
        var savedProjectData = JSON.parse(jsonData);
        this.images = [];
        for (var i = 0; i < savedProjectData.images.length; i++) {
            var thisImage = savedProjectData.images[i];
            var galleryImage = new _galleryImage__WEBPACK_IMPORTED_MODULE_7__["GalleryImage"];
            galleryImage.revive(thisImage);
            this.images.push(galleryImage);
        }
    };
    Project.prototype.reviveImageStyles = function (jsonData) {
        var savedProjectData = JSON.parse(jsonData);
        this.imageStyles = [];
        for (var i = 0; i < savedProjectData.imageStyles.length; i++) {
            var thisImageStyle = savedProjectData.imageStyles[i];
            var imageStyle = new _imageStyle__WEBPACK_IMPORTED_MODULE_2__["ImageStyle"]();
            imageStyle.revive(thisImageStyle);
            // Revive borders
            var border = new _borderControl__WEBPACK_IMPORTED_MODULE_5__["BorderControl"]();
            border.revive(thisImageStyle.border);
            imageStyle.setProperty('border', border);
            this.imageStyles.push(imageStyle);
        }
    };
    Project.prototype.addSlide = function (slide) {
        this.slides.push(slide);
    };
    Project.prototype.addTextStyle = function (textStyle) {
        this.textStyles.push(textStyle);
    };
    Project.prototype.addImageStyle = function (imageStyle) {
        this.imageStyles.push(imageStyle);
    };
    Project.prototype.getProperty = function (propertyName) {
        return this[propertyName];
    };
    Project.prototype.setProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    return Project;
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
            'position': 'absolute'
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
        _this.styleId = 0;
        _this.textValue = "Lorem Ipsum";
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
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.color = '#000';
        this.backgroundColor = 'none';
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
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/project */ "./src/app/classes/project.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
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
    function DataService(dialog) {
        var _this = this;
        this.dialog = dialog;
        // These variable define the state of the app
        this.currentProject = localStorage.getItem('deckbuilder2Data') ? this.getSavedProject(localStorage.getItem('deckbuilder2Data')) : new _classes_project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.slides = this.currentProject.getProperty('slides');
        this.textStyles = this.currentProject.getProperty('textStyles');
        this.imageStyles = this.currentProject.getProperty('imageStyles');
        // Toolbar variables
        this.selectedTextStyleId = this.currentProject.getProperty('selectedTextStyleId');
        this.selectedImageStyleId = this.currentProject.getProperty('selectedImageStyleId');
        // Slide editor variables
        this.currentSlideIndex = this.currentProject.getProperty('currentSlideIndex');
        this.selectedSlideObjectId = this.currentProject.getProperty('selectedSlideObjectId');
        // Sandbox variables
        this.sandboxText = this.currentProject.getProperty('sandboxText');
        this.textNotes = this.currentProject.getProperty('textNotes');
        this.images = this.currentProject.getProperty('images');
        this.selectedImage = this.currentProject.getProperty('selectedImage');
        // UI Logic variables
        this.viewTextElements = this.currentProject.getProperty('viewTextElements');
        this.viewImageElements = this.currentProject.getProperty('viewImageElements');
        this.viewShapeElements = this.currentProject.getProperty('viewShapeElements');
        this.documentSize = this.currentProject.getProperty('documentSize');
        this.slideRenderMagnification = this.currentProject.getProperty('slideRenderMagnification');
        this.isStyleInUse = function (style) {
            var id = style.getProperty('id');
            var styleType = style.constructor.name;
            // Iterate through all slideOjects in all slides
            // Return true if style is in use
            for (var i = 0; i < _this.slides.length; i++) {
                var thisSlideObjects = _this.slides[i].getProperty('slideObjects');
                for (var j = 0; j < thisSlideObjects.length; j++) {
                    var slideObjectStyleId = thisSlideObjects[j].getProperty('styleId');
                    var slideObjectType = thisSlideObjects[j].constructor.name;
                    if (slideObjectStyleId === id) {
                        switch (styleType) {
                            case 'TextStyle':
                                if (slideObjectType === "TextObject")
                                    return true;
                                break;
                            case 'ImageStyle':
                                if (slideObjectType === "ImageObject")
                                    return true;
                                break;
                        }
                    }
                }
            }
            return false;
        };
    }
    // FUNCTIONS USED BY ALL COMPONENTS
    // App view mode:  text || image || shape
    DataService.prototype.setMode = function (mode) {
        switch (mode) {
            case "text":
                this.viewTextElements = true;
                this.viewImageElements = false;
                this.viewShapeElements = false;
                break;
            case "image":
                this.viewTextElements = false;
                this.viewImageElements = true;
                this.viewShapeElements = false;
                break;
            case "shape":
                this.viewTextElements = false;
                this.viewImageElements = false;
                this.viewShapeElements = true;
                break;
        }
    };
    DataService.prototype.getTextStyleById = function (id) {
        for (var i = 0; i < this.textStyles.length; i++) {
            if (this.textStyles[i].getProperty('id') === id) {
                return this.textStyles[i];
            }
        }
    };
    DataService.prototype.getImageStyleById = function (id) {
        for (var i = 0; i < this.imageStyles.length; i++) {
            if (this.imageStyles[i].getProperty('id') === id) {
                return this.imageStyles[i];
            }
        }
    };
    DataService.prototype.getSavedProject = function (jsonData) {
        var project = new _classes_project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        project.revive(jsonData);
        return project;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
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
        if (this.callback) {
            this.callback();
        }
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

module.exports = "#overlay {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    z-index: 100;\r\n}\r\n\r\n#dialog-box {\r\n    width: 400px;\r\n    height: auto;\r\n    position: fixed;\r\n    left: 50%;\r\n    margin-left: -200px;\r\n    top: 30vh;\r\n    padding: 25px 25px 15px 25px;\r\n    border-radius: 8px;\r\n    background: #FFF;\r\n    z-index: 101;\r\n}\r\n\r\n#danger-icon, \r\n#success-icon {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n}\r\n\r\n#danger-icon{\r\n    color: red;\r\n}\r\n\r\n#success-icon {\r\n    color: green;\r\n}\r\n\r\n#message {\r\n    margin: 35px 25px;\r\n}\r\n\r\nbutton {\r\n    width: 100px;\r\n    height: 25px;\r\n    border: 0;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    background: rgb(146, 141, 141);\r\n    color: #FFF;\r\n}\r\n\r\nbutton:hover {\r\n    background: rgb(175, 170, 170);\r\n}\r\n\r\n#toast-container {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 50px;\r\n    height: auto;\r\n    width: auto;\r\n    padding: 15px;\r\n    background: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n#toast-container fa {\r\n    color: green;\r\n    font-size: 1rem;\r\n    padding-right: 10px;\r\n}"

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

/***/ "./src/app/image-style-card/image-style-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/image-style-card/image-style-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.style-card-container {\r\n    padding: 8px;\r\n    border-bottom: 3px #FFF solid;\r\n    margin-bottom: 4px;\r\n    height: auto;\r\n}\r\n\r\n.style-card-row {\r\n    width: 100%;\r\n    height: 25px;\r\n    margin: 3px auto;\r\n}\r\n\r\n.style-card-row h3 {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.style-card-row a,\r\n.style-card-row h4 {\r\n    font-size: 0.8rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.style-card-row \r\n.material-icons {\r\n    font-size: 1.2rem;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.style-card-row fa {\r\n    font-size: 0.8rem;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.style-card-row fa:hover,\r\n.style-card-row .material-icons:hover {\r\n    background:rgb(137, 150, 132);\r\n    cursor: pointer;\r\n}\r\n\r\n.style-card-row\r\ninput[type=\"number\"]{\r\n    width: 45px;\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #D6F9DD;\r\n    border: 1px #D6F9DD solid;\r\n    text-align: center;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    max-width: 125px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #D6F9DD;\r\n    border: 1px #D6F9DD solid;\r\n}\r\n\r\ninput[type=\"range\"]{\r\n    width: 70px;\r\n}\r\n\r\n.style-card-row\r\nselect {\r\n    border: 1px #D6F9DD solid;\r\n    box-sizing: border-box;\r\n    background: #D6F9DD;\r\n    color: black;\r\n    border: 1px #D6F9DD solid;\r\n}\r\n\r\n.selected {\r\n    background:rgb(137, 150, 132);\r\n    border: 1px white solid;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.md-color-selector {\r\n    width: 100px;\r\n    height: 10px;\r\n    border: 1px #D6F9DD solid;\r\n    outline: none;\r\n}\r\n\r\n.md-color-selector:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/image-style-card/image-style-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/image-style-card/image-style-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"style-card-container greenAccent01\">\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <div *ngIf=\"!imageStyle.editNameMode\" class=\"flex-row-between\">\r\n      <h3 *ngIf=\"!imageStyle.editNameMode\">{{imageStyle.name.substring(0, 20)}}</h3>\r\n      <fa *ngIf=\"!imageStyle.isDefault\" (click)=\"imageStyle.toggleProperty('editNameMode')\" name=\"edit\"></fa>\r\n    </div>\r\n\r\n    <div *ngIf=\"imageStyle.editNameMode\" class=\"flex-row-between\">\r\n      <input type=\"text\" [(ngModel)]=\"imageStyle.name\" placeholder=\"imageStyle.name\">\r\n      <fa name=\"save\" (click)=\"imageStyle.toggleProperty('editNameMode')\"></fa>\r\n    </div>\r\n\r\n    <a *ngIf=\"!imageStyle.isDefault\" (click)=\"this.styler.deleteStyle(imageStyle)\">\r\n      <fa name=\"trash\"></fa>\r\n    </a>\r\n  </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Padding:</h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.padding\">px&nbsp;&nbsp;</h4>\r\n    </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Opacity:</h4>\r\n\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.opacity\" min=\"0\" max=\"100\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.opacity\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Grayscale:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.grayscale\" min=\"0\" max=\"100\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.grayscale\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Blur:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.blur\" min=\"0\" max=\"25\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.blur\">px&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Brightness:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.brightness\" min=\"0\" max=\"200\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.brightness\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Contrast:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.contrast\" min=\"0\" max=\"200\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.contrast\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Invert:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.invert\" min=\"0\" max=\"200\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.invert\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Saturate:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.saturate\" min=\"0\" max=\"200\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.saturate\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Sepia:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.sepia\" min=\"0\" max=\"200\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.sepia\">%&nbsp;&nbsp;&nbsp;</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Hue rotate:</h4>\r\n    <h4>\r\n      <input type=\"range\" [(ngModel)]=\"imageStyle.hueRotate\" min=\"0\" max=\"360\">\r\n      <input type=\"number\" [(ngModel)]=\"imageStyle.hueRotate\">deg</h4>\r\n  </div>\r\n\r\n  <div class=\"flex-row-evenly style-card-row\">\r\n    <a (click)=\"imageStyle.toggleProperty('showExtraOptions')\" class=\"flex-row-evenly\" *ngIf=\"!imageStyle.showExtraOptions\">\r\n      <fa name=\"angle-double-down\"></fa>\r\n      <a>Show extra options</a>\r\n      <fa name=\"angle-double-down\"></fa>\r\n    </a>\r\n\r\n    <a (click)=\"imageStyle.toggleProperty('showExtraOptions')\" class=\"flex-row-evenly\" *ngIf=\"imageStyle.showExtraOptions\">\r\n      <fa name=\"angle-double-up\"></fa>\r\n      <a>Hide extra options</a>\r\n      <fa name=\"angle-double-up\"></fa>\r\n    </a>\r\n  </div>\r\n\r\n  <div *ngIf=\"imageStyle.showExtraOptions\">\r\n\r\n    <!--Border radius settings -->\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Border radius: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Top left radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.topLeftRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Top right radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.topRightRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Bottom right radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.bottomRightRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Bottom left radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.bottomLeftRadius\">px</h4>\r\n    </div>\r\n\r\n\r\n    <!-- Full border settings -->\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Borders: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <a (click)=\"imageStyle.border.toggleProperty('showFullBorder');\r\n          imageStyle.border.setProperty('showTopBorder', false);\r\n          imageStyle.border.setProperty('showRightBorder', false);\r\n          imageStyle.border.setProperty('showBottomBorder', false);\r\n          imageStyle.border.setProperty('showLeftBorder', false);\"\r\n        class=\"style-card-btn\" \r\n        [class.selected]=\"imageStyle.border.getProperty('showFullBorder')\">\r\n        <i class=\"material-icons\">border_outer</i>\r\n      </a>\r\n\r\n      <a (click)=\"imageStyle.border.toggleProperty('showLeftBorder');\r\n          imageStyle.border.setProperty('showFullBorder', false);\"\r\n        class=\"style-card-btn\" \r\n        [class.selected]=\"imageStyle.border.getProperty('showLeftBorder')\">\r\n        <i class=\"material-icons\">border_left</i>\r\n      </a>\r\n\r\n      <a (click)=\"imageStyle.border.toggleProperty('showTopBorder');\r\n          imageStyle.border.setProperty('showFullBorder', false);\"\r\n        class=\"style-card-btn\" \r\n        [class.selected]=\"imageStyle.border.getProperty('showTopBorder')\">\r\n        <i class=\"material-icons\">border_top</i>\r\n      </a>\r\n\r\n      <a (click)=\"imageStyle.border.toggleProperty('showRightBorder');\r\n          imageStyle.border.setProperty('showFullBorder', false);\"\r\n        class=\"style-card-btn\" \r\n        [class.selected]=\"imageStyle.border.getProperty('showRightBorder')\">\r\n        <i class=\"material-icons\">border_right</i>\r\n      </a>\r\n\r\n      <a (click)=\"imageStyle.border.toggleProperty('showBottomBorder');\r\n          imageStyle.border.setProperty('showFullBorder', false);\"\r\n        class=\"style-card-btn\" \r\n        [class.selected]=\"imageStyle.border.getProperty('showBottomBorder')\">\r\n        <i class=\"material-icons\">border_bottom</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Full border settings -->\r\n  <div *ngIf=\"imageStyle.border.showFullBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Full border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.fullBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"imageStyle.border.fullBorderColor\" [style.background]=\"imageStyle.border.fullBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"imageStyle.border.fullBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of imageStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- Top border settings -->\r\n  <div *ngIf=\"imageStyle.border.showTopBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Top border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.topBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"imageStyle.border.topBorderColor\" [style.background]=\"imageStyle.border.topBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"imageStyle.border.topBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of imageStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <!-- Right border settings -->\r\n  <div *ngIf=\"imageStyle.border.showRightBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Right border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.rightBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"imageStyle.border.rightBorderColor\" [style.background]=\"imageStyle.border.rightBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"imageStyle.border.rightBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of imageStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Bottom border settings -->\r\n  <div *ngIf=\"imageStyle.border.showBottomBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Bottom border: </h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.bottomBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"imageStyle.border.bottomBorderColor\" [style.background]=\"imageStyle.border.bottomBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"imageStyle.border.bottomBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of imageStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Left border settings -->\r\n  <div *ngIf=\"imageStyle.border.showLeftBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Left border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"imageStyle.border.leftBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"imageStyle.border.leftBorderColor\" [style.background]=\"imageStyle.border.leftBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"imageStyle.border.leftBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of imageStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/image-style-card/image-style-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/image-style-card/image-style-card.component.ts ***!
  \****************************************************************/
/*! exports provided: ImageStyleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStyleCardComponent", function() { return ImageStyleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_imageStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styler-app-logic.service */ "./src/app/styler-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageStyleCardComponent = /** @class */ (function () {
    function ImageStyleCardComponent(data, styler) {
        this.data = data;
        this.styler = styler;
    }
    ImageStyleCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_imageStyle__WEBPACK_IMPORTED_MODULE_1__["ImageStyle"])
    ], ImageStyleCardComponent.prototype, "imageStyle", void 0);
    ImageStyleCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-style-card',
            template: __webpack_require__(/*! ./image-style-card.component.html */ "./src/app/image-style-card/image-style-card.component.html"),
            styles: [__webpack_require__(/*! ./image-style-card.component.css */ "./src/app/image-style-card/image-style-card.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["StylerAppLogicService"]])
    ], ImageStyleCardComponent);
    return ImageStyleCardComponent;
}());



/***/ }),

/***/ "./src/app/sandbox-app-logic.service.ts":
/*!**********************************************!*\
  !*** ./src/app/sandbox-app-logic.service.ts ***!
  \**********************************************/
/*! exports provided: SandboxAppLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxAppLogicService", function() { return SandboxAppLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _classes_galleryImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/galleryImage */ "./src/app/classes/galleryImage.ts");
/* harmony import */ var _classes_textObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var _classes_imageObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/imageObject */ "./src/app/classes/imageObject.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SandboxAppLogicService = /** @class */ (function () {
    function SandboxAppLogicService(http, data, dialog) {
        this.http = http;
        this.data = data;
        this.dialog = dialog;
        this.imageSearchQuery = "";
    }
    SandboxAppLogicService.prototype.pixabayToGallery = function (url) {
        var image = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_3__["GalleryImage"]();
        image.setProperty('url', url);
        image.setProperty('id', this.data.images.length);
        this.data.images.push(image);
        this.dialog.toast('Added to gallery.');
    };
    SandboxAppLogicService.prototype.searchPixabay = function () {
        var _this = this;
        var url = 'https://pixabay.com/api/?';
        var apiKey = '7780146-3f3faea2d00a0e8da80a92f14';
        this.http.get(url + 'key=' + apiKey + '&q=' + this.imageSearchQuery).subscribe(function (res) {
            _this.imageSearchResults = res['hits'];
        });
    };
    SandboxAppLogicService.prototype.addTextObjectToSlide = function () {
        var currentSlide = this.data.slides[this.data.currentSlideIndex];
        var currentSlideObjects = currentSlide.getProperty('slideObjects');
        var newTextObject = new _classes_textObject__WEBPACK_IMPORTED_MODULE_4__["TextObject"]();
        newTextObject.setProperty('textValue', this.data.sandboxText);
        newTextObject.setProperty('styleId', this.data.selectedTextStyleId);
        // !important!  set z index after slideObject has been added to the project to ensure proper assignment of z index
        currentSlide.addSlideObject(newTextObject);
        newTextObject.setProperty('zIndex', currentSlideObjects.length - 1);
    };
    SandboxAppLogicService.prototype.addImageObjectToSlide = function () {
        // Create a new ImageObject using currently selected image and currently selected ImageStyle
        var currentSlide = this.data.slides[this.data.currentSlideIndex];
        var currentSlideObjects = currentSlide.getProperty('slideObjects');
        var newImageObject = new _classes_imageObject__WEBPACK_IMPORTED_MODULE_5__["ImageObject"]();
        var image = this.data.images[this.data.selectedImage].getProperty('url');
        // Check if image is larger than document size
        var imageElement = new Image;
        imageElement.src = image;
        var imageWidth;
        var imageHeight;
        // Scale down if larger than document size
        if (imageElement.width > this.data.documentSize.width) {
            var ratio = imageElement.width / imageElement.height;
            imageWidth = this.data.documentSize.width;
            imageHeight = imageWidth / ratio;
        }
        // Define properties for newImageObject
        newImageObject.setProperty('imagePath', image);
        newImageObject.setProperty('styleId', this.data.selectedImageStyleId);
        newImageObject.setProperty('height', imageHeight);
        newImageObject.setProperty('width', imageWidth);
        // imageElement is no longer needed
        imageElement = null;
        // Add to current slide
        currentSlide.addSlideObject(newImageObject);
        newImageObject.setProperty('zIndex', currentSlideObjects.length - 1);
    };
    SandboxAppLogicService.prototype.uploadImage = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var url = e.target.result;
            var image = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_3__["GalleryImage"]();
            image.setProperty('url', url);
            image.setProperty('id', _this.data.images.length);
            _this.data.images.push(image);
        };
    };
    SandboxAppLogicService.prototype.selectImage = function (index) {
        this.data.selectedImage = index;
    };
    SandboxAppLogicService.prototype.deleteImageById = function (imageId) {
        var _this = this;
        var callback = function () {
            for (var i = 0; i < _this.data.images.length; i++) {
                if (_this.data.images[i].getProperty('id') === imageId) {
                    _this.data.images.splice(i, 1);
                    _this.dialog.toast('Image has been deleted.');
                }
            }
        };
        this.dialog.alert("Are you sure you want to delete this image from your project?", 'danger', callback);
    };
    SandboxAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], SandboxAppLogicService);
    return SandboxAppLogicService;
}());



/***/ }),

/***/ "./src/app/sandbox/sandbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sandbox-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 500px 10px 1fr;\r\n        grid-template-rows: 500px 10px 1fr;\r\n        grid-template-areas:\r\n        \"top\"\r\n        \"middle\"\r\n        \"bottom\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n.sandbox-preview-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: top;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: 300px;\r\n    background: linear-gradient(to bottom right, rgb(179, 179, 179), rgb(241, 241, 241));\r\n    min-height: 200px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n#text-preview-container {\r\n    margin: 0 auto;\r\n    border: 3px dashed gray;\r\n    max-width: 90%;\r\n}\r\n\r\n#text-preview-container p {\r\n    display: inline-block !important;\r\n    max-width: 40vw !important;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    position: relative;\r\n}\r\n\r\n#image-preview {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#sandbox-resizer {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: middle;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: gray;\r\n    position: relative;\r\n}\r\n\r\n#sandbox-resizer:hover{\r\n    cursor:row-resize;\r\n}\r\n\r\n#text-input-container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: auto 1fr;\r\n        grid-template-rows: auto 1fr;\r\n        grid-template-areas:\r\n        \"textMiddlebar\"\r\n        \"notes\";\r\n    height: 100%;\r\n    width: 100%;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: bottom;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n#text-middle-bar { \r\n    -ms-grid-row: 1; \r\n    -ms-grid-column: 1; \r\n    grid-area: textMiddlebar;\r\n    box-sizing: border-box;\r\n    border-top: 3px rgb(65, 65, 65) solid;\r\n    border-bottom: 3px rgb(65, 65, 65) solid;\r\n    width: 100%;\r\n    height: 75px;\r\n    position: relative;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-columns: 1fr 100px;\r\n        grid-template-columns: 1fr 100px;\r\n        grid-template-areas: \r\n        \"input add\"\r\n}\r\n\r\n#image-input-container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 100px 1fr;\r\n        grid-template-rows: 100px 1fr;\r\n        grid-template-areas:\r\n        \"imageMiddlebar\"\r\n        \"gallery\";\r\n    height: 100%;\r\n    width: 100%;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: bottom;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n#sandbox-textarea{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: input;\r\n    flex-grow: 1;\r\n    height: 100%;\r\n    resize: none;\r\n    outline: none;\r\n    padding: 0;\r\n    font-family: 'Helvetica', sans-serif;\r\n    border: 0;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n#image-middle-bar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: imageMiddlebar;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-columns: 1fr 1fr 100px;\r\n        grid-template-columns: 1fr 1fr 100px;\r\n        -ms-grid-rows: 1fr 25px;\r\n        grid-template-rows: 1fr 25px;\r\n        grid-template-areas:\r\n        \"import search add\"\r\n        \"galleryTab searchTab add\";\r\n        font-size: 0.8rem;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(54, 54, 54);\r\n    color: #FFF;\r\n}\r\n\r\n.middlebar-menu-tab {\r\n    border: 0;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    background: silver;\r\n    width: 95%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: rgb(70, 70, 70);\r\n}\r\n\r\n.middlebar-menu-tab fa {\r\n    margin: 0 3px;\r\n}\r\n\r\n.tab-selected {\r\n    background: rgb(224, 224, 224);\r\n}\r\n\r\n.sandbox-add-btn-group {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 2;\r\n    -ms-grid-column: 3;\r\n    grid-area: add;\r\n    min-width: 100px;\r\n    width: 100px;\r\n    height: 100%;\r\n}\r\n\r\n.sandbox-add-btn-group:hover {\r\n    background: rgb(139, 139, 139);\r\n}\r\n\r\n.sandbox-add-btn-group fa {\r\n    font-size: 3vh;\r\n}\r\n\r\n.sandbox-add-btn-group p {\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    max-width: 80%;\r\n}\r\n\r\n#notes-textarea {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: notes;\r\n    min-width: 300px;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    font-family: 'Helvetica', sans-serif;\r\n    border: 0;\r\n    resize: none;\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    background: rgb(230, 230, 230);\r\n    position: relative;\r\n}\r\n\r\n#import-container {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: import;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    align-items: center !important;\r\n}\r\n\r\n#search-container {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: search;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#pixabay-logo {\r\n    height: 15px;\r\n    width: 100%;\r\n}\r\n\r\n#pixabay-logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#pixabay-logo path {\r\n    fill: #FFF;\r\n}\r\n\r\n#pixabay-credits {\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n}\r\n\r\n#search-results,\r\n#gallery {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: gallery;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgb(224, 224, 224);\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.gallery-img-container {\r\n    background: #000;\r\n    margin: 6px;\r\n    box-shadow: 3px 3px 3px gray;\r\n    height: 75px;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.gallery-img {\r\n    height: 100%;\r\n    opacity: 0.9;\r\n}\r\n\r\n.gallery-img:hover {\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-icon {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: #FFF;\r\n    border-radius: 50%;\r\n    height: 12px;\r\n    width: 12px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    border: 2px #FFF solid;\r\n    opacity: 0.6;\r\n    font-size: 0.8rem\r\n}\r\n\r\n.delete-icon:hover {\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    /* .sandbox-toolbar-btn-group p,\r\n    .sandbox-add-btn-group p {\r\n       font-size: 0.8rem;\r\n    } */\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.html":
/*!************************************************!*\
  !*** ./src/app/sandbox/sandbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Text sandbox -->\r\n<div #container id=\"sandbox-container\" class=\"grayAccent03\">\r\n  <div class=\"flex-col-evenly sandbox-preview-area accent05\" *ngIf=\"this.data.viewTextElements\">\r\n    <div id=\"text-preview-container\">\r\n      <p [ngStyle]=\"this.data.getTextStyleById(this.data.selectedTextStyleId).getCss()\">{{this.data.sandboxText}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-col-evenly sandbox-preview-area accent05\" *ngIf=\"this.data.viewImageElements\">\r\n    <img id=\"image-preview\" *ngIf=\"this.data.images[this.data.selectedImage]\" [src]=\"this.data.images[this.data.selectedImage].url\"\r\n      [ngStyle]=\"this.data.getImageStyleById(this.data.selectedImageStyleId).getCss()\">\r\n  </div>\r\n\r\n  <div #resizer id=\"sandbox-resizer\">\r\n\r\n  </div>\r\n\r\n  <div id=\"text-input-container\" *ngIf=\"this.data.viewTextElements\">\r\n    <div #middlebar id=\"text-middle-bar\">\r\n      <textarea id=\"sandbox-textarea\" [(ngModel)]=\"this.data.sandboxText\">\r\n\r\n    </textarea>\r\n\r\n      <a (click)=\"this.sandbox.addTextObjectToSlide()\" class=\"sandbox-add-btn-group grayAccent02 flex-col-evenly\">\r\n        <fa name=\"share\"></fa>\r\n        <p>Add text object <br> to slide</p>\r\n      </a>\r\n    </div>\r\n\r\n    <textarea id=\"notes-textarea\" [(ngModel)]=\"this.data.textNotes\">\r\n    {{this.data.textNotes}}\r\n  </textarea>\r\n  </div>\r\n\r\n  <div id=\"image-input-container\" *ngIf=\"this.data.viewImageElements\">\r\n    <div #middlebar id=\"image-middle-bar\" class=\"flex-row-between\">\r\n      <div class=\"flex-col-evenly\" id=\"import-container\">\r\n        <p>Import an image:</p>\r\n\r\n        <input type=\"file\" (change)=\"this.data.uploadImage($event)\">\r\n      </div>\r\n\r\n      <div class=\"flex-col-evenly\" id=\"search-container\">\r\n          <p>Search for an image:</p>\r\n\r\n          <div class=\"flex-row-center\">\r\n          <input type=\"text\" [(ngModel)]=\"this.sandbox.imageSearchQuery\">\r\n          <button type=\"submit\" (click)=\"this.showSearchResults(); this.sandbox.searchPixabay()\">Search</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <a class=\"middlebar-menu-tab flex-row-center\" (click)=\"this.showGallery()\" [class.tab-selected]=\"this.isGalleryMode\">Gallery<fa name=\"th-large\"></fa></a>\r\n\r\n      <div class=\"middlebar-menu-tab flex-row-center\" [class.tab-selected]=\"!this.isGalleryMode\">\r\n          <img id=\"pixabay-logo\" src=\"https://pixabay.com/static/img/logo.svg\" (click)=\"this.showSearchResults()\">\r\n        </div>\r\n\r\n      <a (click)=\"this.sandbox.addImageObjectToSlide()\" class=\"sandbox-add-btn-group grayAccent02 flex-col-evenly\">\r\n        <fa name=\"share\"></fa>\r\n        <p>Add image object to slide</p>\r\n      </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"this.isGalleryMode\" id=\"gallery\">\r\n      <div *ngFor=\"let image of this.data.images\" class=\"gallery-img-container\">\r\n        <img src=\"{{image.url}}\" (click)=\"this.sandbox.selectImage(image.id)\" class=\"clickable gallery-img\">\r\n        <fa name=\"trash\" class=\"delete-icon flex-row-evenly\" (click)=\"this.sandbox.deleteImageById(image.id)\"></fa>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"!this.isGalleryMode\" id=\"search-results\">\r\n      <div id=\"pixabay-credits\">\r\n      <h5>Image search powered by: <a href=\"https://pixabay.com/\" target=\"__blank\">Pixabay</a></h5>\r\n    </div>\r\n      \r\n      <div *ngFor=\"let image of this.sandbox.imageSearchResults\" class=\"gallery-img-container\">\r\n        <img src=\"{{image.previewURL}}\" class=\"gallery-img\">\r\n        <fa name=\"plus\" class=\"delete-icon flex-row-evenly\" (click)=\"this.sandbox.pixabayToGallery(image.largeImageURL)\"></fa>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.ts ***!
  \**********************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sandbox-app-logic.service */ "./src/app/sandbox-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SandboxComponent = /** @class */ (function () {
    function SandboxComponent(data, dialog, sandbox) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.sandbox = sandbox;
        this.isGalleryMode = true;
        this.resizeGrid = function (e) {
            var sandboxContainer = _this.container.nativeElement;
            var middlebar = _this.middlebar.nativeElement;
            var resizer = _this.resizer.nativeElement;
            var viewportHeight = document.documentElement.offsetHeight;
            var offset = viewportHeight - sandboxContainer.offsetHeight;
            var topHeight = e.pageY - offset - resizer.offsetHeight / 2;
            var bottomHeight = viewportHeight - e.pageY - resizer.offsetHeight / 2;
            sandboxContainer.style.gridTemplateRows = topHeight + 'fr ' + resizer.offsetHeight + 'px ' + bottomHeight + 'fr';
            // Upper boundary 
            if (e.pageY < offset + resizer.offsetHeight / 2) {
                sandboxContainer.style.gridTemplateRows = '0px ' + resizer.offsetHeight + 'px ' + '1fr';
            }
            // Lower boundary
            if (e.pageY >= viewportHeight - resizer.offsetHeight / 2 - middlebar.offsetHeight) {
                sandboxContainer.style.gridTemplateRows = '1fr ' + resizer.offsetHeight + 'px ' + middlebar.offsetHeight + 'px';
            }
        };
    }
    SandboxComponent.prototype.ngOnInit = function () {
        this.enableSandboxResizer();
    };
    SandboxComponent.prototype.showGallery = function () {
        this.isGalleryMode = true;
    };
    SandboxComponent.prototype.showSearchResults = function () {
        this.isGalleryMode = false;
    };
    SandboxComponent.prototype.enableSandboxResizer = function () {
        var _this = this;
        var startResize = function () {
            document.addEventListener('mousemove', _this.resizeGrid);
            document.addEventListener('mouseup', stopResize);
        };
        var stopResize = function () {
            document.removeEventListener('mousemove', _this.resizeGrid);
            document.removeEventListener('mouseup', stopResize);
        };
        var resizer = this.resizer.nativeElement;
        if (resizer) {
            // Resizer is rendered based on *ngIf condition
            // Wrapping in an IF statement prevents the following line
            // from running before the resizer has rendered.
            resizer.addEventListener('mousedown', startResize);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SandboxComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('middlebar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SandboxComponent.prototype, "middlebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SandboxComponent.prototype, "container", void 0);
    SandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sandbox',
            template: __webpack_require__(/*! ./sandbox.component.html */ "./src/app/sandbox/sandbox.component.html"),
            styles: [__webpack_require__(/*! ./sandbox.component.css */ "./src/app/sandbox/sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["SandboxAppLogicService"]])
    ], SandboxComponent);
    return SandboxComponent;
}());



/***/ }),

/***/ "./src/app/slide-editor-app-logic.service.ts":
/*!***************************************************!*\
  !*** ./src/app/slide-editor-app-logic.service.ts ***!
  \***************************************************/
/*! exports provided: SlideEditorAppLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideEditorAppLogicService", function() { return SlideEditorAppLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideEditorAppLogicService = /** @class */ (function () {
    function SlideEditorAppLogicService(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    SlideEditorAppLogicService.prototype.increaseOneLayer = function (objectId) {
        // Locate object in currentSlideObjects
        var currentSlide = this.data.slides[this.data.currentSlideIndex];
        var currentSlideObjects = currentSlide.getProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex < currentSlideObjects.length - 1) {
                currentSlideObjects[i].zIndex++; // Increment zIndex of currentSlideObjects[i]
                currentSlideObjects[i + 1].zIndex--; // Derement zIndex of currentSlideObjects[i+1]
                // Switch positions of [i] and [i+1]
                var tempStorage = currentSlideObjects[i];
                currentSlideObjects[i] = currentSlideObjects[i + 1];
                currentSlideObjects[i + 1] = tempStorage;
                i++; // Increment i to prevent the code from entering the if statement on the next iteration
            }
        }
    };
    SlideEditorAppLogicService.prototype.decreaseOneLayer = function (objectId) {
        // Locate object in currentSlideObjects
        var currentSlide = this.data.slides[this.data.currentSlideIndex];
        var currentSlideObjects = currentSlide.getProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex > 0) {
                currentSlideObjects[i].zIndex--; // Increment zIndex of currentSlideObjects[i]
                currentSlideObjects[i - 1].zIndex++; // Derement zIndex of currentSlideObjects[i+1]
                // Switch positions of [i] and [i+1]
                var tempStorage = currentSlideObjects[i];
                currentSlideObjects[i] = currentSlideObjects[i - 1];
                currentSlideObjects[i - 1] = tempStorage;
            }
        }
    };
    SlideEditorAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], SlideEditorAppLogicService);
    return SlideEditorAppLogicService;
}());



/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slide-editor-workspace {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: 375px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 500px 10px 1fr;\r\n        grid-template-rows: 500px 10px 1fr;\r\n        grid-template-areas:\r\n        \"render\"\r\n        \"editorResizer\"\r\n        \"control\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n} \r\n\r\n#slide-render-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: render;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    background: linear-gradient(to bottom right, rgb(16, 16, 17), rgb(53, 53, 53));\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n} \r\n\r\n#slide-editor-resizer {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: editorResizer;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: gray;\r\n    position: relative;\r\n} \r\n\r\n#slide-editor-resizer:hover {\r\n    cursor: row-resize;\r\n} \r\n\r\n#slide-control {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: control;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: auto 1fr;\r\n        grid-template-rows: auto 1fr;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n} \r\n\r\n.slide-object {\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n} \r\n\r\n.slide-object img {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n} \r\n\r\n/*  Styling of slideObjects while being dragged or resized is controlled from within the SlideObjects class */ \r\n\r\n.slide-object:hover{\r\n    cursor: move;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    border: 2px dashed gray;\r\n    margin-top: -2px;\r\n    margin-left: -2px;\r\n} \r\n\r\n#slide-control-toolbar {\r\n    width: 100%;\r\n    padding: 5px;\r\n    background: rgb(46, 46, 46);\r\n    flex-wrap: wrap;\r\n} \r\n\r\n#slide-control-toolbar fa {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 0 5px;\r\n    cursor: pointer;\r\n} \r\n\r\n#slide-control-toolbar fa:hover {\r\n    background: rgb(87, 87, 87);\r\n} \r\n\r\n#slide-control-toolbar p {\r\n    font-size: 0.7rem;\r\n    margin: 0 5px;\r\n} \r\n\r\ninput[type=\"range\"]{\r\n    width: 5vw;\r\n} \r\n\r\ninput[type=\"number\"]{\r\n    width: 45px;\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #FFF;\r\n    border: 1px #FFF solid;\r\n    text-align: center;\r\n} \r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n} \r\n\r\ninput[type=\"text\"]{\r\n    width: 85%;\r\n} \r\n\r\n#heirarchy {\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    position: relative;\r\n} \r\n\r\n.heirarchy-control-group {\r\n    font-size: 0.7rem;\r\n    overflow: hidden;\r\n    padding: 2px 0;\r\n    font-weight: normal;\r\n    position: relative;\r\n} \r\n\r\n.heirarchy-control-group h5 {\r\n    font-weight: normal;\r\n} \r\n\r\n.heirarchy-control-group fa {\r\n    font-size: 0.75rem;\r\n    padding: 5px;\r\n} \r\n\r\n.heirarchy-control-group fa:hover {\r\n    background-color: rgb(100, 100, 100);\r\n    cursor: pointer;\r\n} \r\n\r\n#heirarchy\r\ninput[type=\"text\"]{\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #FFF;\r\n    border: 1px #FFF solid;\r\n} \r\n\r\n.heirarchy-name {\r\n    width: 100px;\r\n} \r\n\r\n.heirarchy-content {\r\n    width:100px;\r\n} \r\n\r\n.heirarchy-dim {\r\n    width: 250px;\r\n} \r\n\r\n.heirarchy-content-misc {\r\n    width: 150px;\r\n} \r\n\r\n.slide-control-row {\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n    padding: 2px 0;\r\n    border-bottom: 3px rgb(81, 133, 81) solid; \r\n    position: relative;\r\n} \r\n\r\n.md-color-selector {\r\n    width: 100px;\r\n    height: 10px;\r\n    border: 1px #D6F9DD solid;\r\n    outline: none;\r\n} \r\n\r\n.md-color-selector:hover {\r\n    cursor: pointer;\r\n} \r\n\r\n@media screen and (min-width: 1200px) {\r\n    .slide-editor-toolbar-btn-group p {\r\n       font-size: 0.8rem;\r\n    }\r\n\r\n    #slide-number {\r\n        font-size: 1.5rem;\r\n    }\r\n  }\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slide-editor-workspace\" #workspace>\r\n  <div *ngIf=\"this.data.slides.length > 0\" id=\"slide-render-area\">\r\n    <div id=\"slide-render\" [ngStyle]=\"this.getSlideRenderCss()\">\r\n      <div *ngFor=\"let slideObject of this.data.slides[this.data.currentSlideIndex].slideObjects\" \r\n      class=\"slide-object\"\r\n        [ngStyle]=\"slideObject.getCss()\" \r\n        (mousedown)=\"this.selectObject(slideObject.id)\" \r\n        ngResizable \r\n        [rzHandles]=\"'all'\"\r\n        (rzStart)=\"slideObject.setProperty('isResizing', true)\" \r\n        (rzStop)=\"slideObject.setSize($event); slideObject.setProperty('isResizing', false)\"\r\n        ngDraggable \r\n        (started)=\"slideObject.setProperty('isDragging', true)\" \r\n        (stopped)=\"slideObject.setProperty('isDragging', false)\"\r\n        (endOffset)=\"slideObject.setTranslation($event)\" \r\n        [position]=\"slideObject.getTranslation()\"\r\n        [rzAspectRatio]=\"slideObject.constructor.name==='ImageObject'? true: false\">\r\n\r\n        <p *ngIf=\"slideObject.constructor.name==='TextObject'\" [ngStyle]=\"this.data.getTextStyleById(slideObject.styleId).getCss()\">{{slideObject.textValue}}</p>\r\n        <img *ngIf=\"slideObject.constructor.name==='ImageObject'\" [ngStyle]=\"this.data.getImageStyleById(slideObject.styleId).getCss()\"\r\n          [src]=\"slideObject.imagePath\" crossOrigin=\"anonymous\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"slide-editor-resizer\" #resizer>\r\n    \r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"this.data.slides.length > 0\" id=\"slide-control\" class=\"grayAccent02\">\r\n\r\n    <div id=\"slide-control-toolbar\" #controlToolbar class=\"grayAccent02 flex-row-evenly\">\r\n      <div class=\"flex-row-evenly\">\r\n        <p>Set background color: </p>\r\n        <div class=\"md-color-selector\" [(colorPicker)]=\"this.data.slides[this.data.currentSlideIndex].backgroundColor\"\r\n          [style.background]=\"this.data.slides[this.data.currentSlideIndex].backgroundColor\"></div>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <fa name=\"search-minus\" class=\"flex-row-evenly\" (click)=\"this.zoom('out')\"></fa>\r\n\r\n        <input type='range' [(ngModel)]=\"this.data.slideRenderMagnification\" min=\"0\" max=\"200\" (ngModelChange)=\"this.renderZoomController()\">\r\n\r\n        <fa name=\"search-plus\" class=\"flex-row-evenly\" (click)=\"this.zoom('in')\"></fa>\r\n\r\n        <p>\r\n          <input type=\"number\" [(ngModel)]=\"this.data.slideRenderMagnification\">%</p>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <p>{{this.data.documentSize.width}}px X {{this.data.documentSize.height}}px</p>\r\n\r\n      <fa class=\"flex-row-evenly\" [name]=\"this.showRenderOverflow ? 'object-ungroup' : 'object-group'\" (click)=\"this.toggleRenderOverflow()\"></fa>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"heirarchy\">\r\n      <div *ngFor=\"let slideObject of this.data.slides[this.data.currentSlideIndex].slideObjects.reverse()\" class=\"slide-control-row flex-row-evenly grayAccent02\"\r\n        [style.background]=\"this.indexOfSelectedSlideObject===slideObject.id ? 'green' : null\">\r\n        <div class=\"flex-row-evenly heirarchy-control-group heirarchy-name\">\r\n          <div *ngIf=\"!slideObject.editNameMode\" class=\"flex-row-evenly\">\r\n            <h5>{{slideObject.name}}</h5>\r\n            <fa name=\"edit\" (click)=\"slideObject.toggleProperty('editNameMode')\"></fa>\r\n          </div>\r\n          <div *ngIf=\"slideObject.editNameMode\" class=\"flex-row-evenly\">\r\n            <input type=\"text\" [(ngModel)]=\"slideObject.name\" (placeholder)=\"slideObject.name\">\r\n            <fa name=\"save\" (click)=\"slideObject.toggleProperty('editNameMode')\"></fa>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.constructor.name==='TextObject'\" class=\"flex-row-evenly heirarchy-content heirarchy-control-group\">\r\n          <div *ngIf=\"!slideObject.editTextMode\" class=\"flex-row-evenly\">\r\n            <h5>{{slideObject.textValue.substring(0, 15) + '...'}}</h5>\r\n            <fa name=\"edit\" (click)=\"slideObject.toggleProperty('editTextMode')\"></fa>\r\n          </div>\r\n\r\n          <div *ngIf=\"slideObject.editTextMode\" class=\"flex-row-evenly\">\r\n            <input type=\"text\" [(ngModel)]=\"slideObject.textValue\" (placeholder)=\"slideObject.textValue\">\r\n            <fa name=\"save\" (click)=\"slideObject.toggleProperty('editTextMode')\"></fa>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.constructor.name==='ImageObject'\" class=\"flex-row-evenly heirarchy-control-group heirarchy-content\">\r\n          <h5>ImageObject</h5>\r\n        </div>\r\n\r\n        <div class=\"heirarchy-control-group heirarchy-content-misc flex-row-evenly\">\r\n          <fa (click)=\"this.slideEditor.increaseOneLayer(slideObject.id)\" name=\"arrow-up\"></fa>\r\n\r\n          <fa (click)=\"this.slideEditor.decreaseOneLayer(slideObject.id)\" name=\"arrow-down\"></fa>\r\n\r\n          <fa (click)=\"slideObject.toggleProperty('display')\" [name]=\"slideObject.display ? 'eye' : 'eye-slash'\"></fa>\r\n\r\n          <fa (click)=\"this.deleteSlideObjectById(slideObject.id)\" name=\"trash\"></fa>\r\n        </div>\r\n\r\n        <div class=\"heirarchy-control-group heirarchy-dim flex-row-evenly\">\r\n          <h5>X:</h5>\r\n          <input type=\"number\" [(ngModel)]=\"slideObject.xTranslation\">\r\n          <h5>Y:</h5>\r\n          <input type=\"number\" [(ngModel)]=\"slideObject.yTranslation\">\r\n\r\n          <h5>H:</h5>\r\n          <input type=\"number\" #heightInput [ngModel]=\"slideObject.height\" (change)=\"maintainRatio(slideObject, 'height', heightInput.value)\">\r\n\r\n          <h5>W:</h5>\r\n          <input type=\"number\" #widthInput [ngModel]=\"slideObject.width\" (change)=\"maintainRatio(slideObject, 'width', widthInput.value)\">\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.ts ***!
  \********************************************************/
/*! exports provided: SlideEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideEditorComponent", function() { return SlideEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slide-editor-app-logic.service */ "./src/app/slide-editor-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlideEditorComponent = /** @class */ (function () {
    function SlideEditorComponent(data, dialog, slideEditor) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.slideEditor = slideEditor;
        this.showRenderOverflow = false;
        this.resizeGrid = function (e) {
            var slideEditorWorkspace = _this.workspace.nativeElement;
            var resizer = _this.resizer.nativeElement;
            var controlToolbar = _this.controlToolbar.nativeElement;
            var viewportHeight = document.documentElement.offsetHeight;
            var offset = viewportHeight - slideEditorWorkspace.offsetHeight;
            var renderAreaHeight = e.pageY - offset - resizer.offsetHeight / 2;
            var slideControlHeight = viewportHeight - e.pageY - resizer.offsetHeight / 2;
            slideEditorWorkspace.style.gridTemplateRows = renderAreaHeight + 'fr ' + resizer.offsetHeight + 'px ' + slideControlHeight + 'fr';
            // Upper boundary
            if (e.pageY < offset + resizer.offsetHeight / 2) {
                slideEditorWorkspace.style.gridTemplateRows = '0px ' + resizer.offsetHeight + 'px ' + '1fr';
            }
            // Lower boundary
            if (e.pageY >= viewportHeight - controlToolbar.offsetHeight - resizer.offsetHeight / 2) {
                slideEditorWorkspace.style.gridTemplateRows = renderAreaHeight + 'fr ' + resizer.offsetHeight + 'px ' + controlToolbar.offsetHeight + 'px';
            }
        };
    }
    SlideEditorComponent.prototype.ngOnInit = function () {
        this.enableSlideEditorResizer();
    };
    SlideEditorComponent.prototype.enableSlideEditorResizer = function () {
        var _this = this;
        var startResize = function () {
            document.addEventListener('mousemove', _this.resizeGrid);
            document.addEventListener('mouseup', stopResize);
        };
        var stopResize = function () {
            document.removeEventListener('mousemove', _this.resizeGrid);
            document.removeEventListener('mouseup', stopResize);
        };
        var resizer = this.resizer.nativeElement;
        resizer.addEventListener('mousedown', startResize);
    };
    // Slide editor render functions
    SlideEditorComponent.prototype.toggleRenderOverflow = function () {
        this.showRenderOverflow = !this.showRenderOverflow;
    };
    SlideEditorComponent.prototype.renderZoomController = function () {
        var render = document.getElementById('slide-render');
        var renderHeight = render.offsetHeight * this.data.slideRenderMagnification / 100;
        var renderWidth = render.clientWidth * this.data.slideRenderMagnification / 100;
        var renderArea = document.getElementById('slide-render-area');
        var renderAreaHeight = renderArea.offsetHeight;
        var renderAreaWidth = renderArea.clientWidth;
        if (renderHeight >= renderAreaHeight) {
            renderArea.scrollTop = (renderHeight - renderAreaHeight) / 2;
        }
        if (renderWidth >= renderAreaWidth) {
            renderArea.scrollLeft = (renderWidth - renderAreaWidth) / 2;
        }
    };
    SlideEditorComponent.prototype.getSlideRenderCss = function () {
        var backgroundColor = this.data.slides[this.data.currentSlideIndex].getProperty('backgroundColor');
        var width = this.data.documentSize['width'];
        var height = this.data.documentSize['height'];
        var render = document.getElementById('slide-render');
        var renderHeight = render.offsetHeight * this.data.slideRenderMagnification / 100;
        var renderWidth = render.clientWidth * this.data.slideRenderMagnification / 100;
        var renderArea = document.getElementById('slide-render-area');
        var renderAreaHeight = renderArea.offsetHeight;
        var renderAreaWidth = renderArea.clientWidth;
        var css = {
            'background': backgroundColor,
            'height': height + 'px',
            'width': width + 'px',
            'transform-origin': '0 0',
            'transform': 'scale(' + this.data.slideRenderMagnification / 100 + ')',
            'position': 'absolute',
            'overflow': this.showRenderOverflow ? 'visible' : 'hidden'
        };
        if (renderHeight < renderAreaHeight) {
            css['top'] = (renderAreaHeight - renderHeight) / 2 + 'px';
        }
        if (renderWidth < renderAreaWidth) {
            css['left'] = (renderAreaWidth - renderWidth) / 2 + 'px';
        }
        return css;
    };
    // Slide editor control panel functions
    SlideEditorComponent.prototype.selectObject = function (objectId) {
        this.indexOfSelectedSlideObject = objectId;
    };
    // User clicks zoom in/out
    SlideEditorComponent.prototype.zoom = function (direction) {
        var magnification = this.data.slideRenderMagnification;
        var increment = 5;
        switch (direction) {
            case 'in':
                if (magnification > 200 - increment) {
                    magnification = 200;
                }
                else {
                    magnification += increment;
                }
                this.data.slideRenderMagnification = magnification;
                break;
            case 'out':
                if (magnification < increment) {
                    magnification = 0;
                }
                else {
                    magnification -= increment;
                }
                this.data.slideRenderMagnification = magnification;
                break;
        }
    };
    // This controls the image size when user inputs a value in the heirarchy
    SlideEditorComponent.prototype.maintainRatio = function (slideObject, dimension, value) {
        // Get original aspect ratio of this slide object
        var ratio;
        if (slideObject.width || slideObject.height === "auto") {
            // Get ratio by some other method
            var img_1 = new Image;
            img_1.src = slideObject.getProperty('imagePath');
            img_1.onload = function () {
                ratio = img_1.width / img_1.height;
                setImageSize();
                img_1 = null;
            };
        }
        else {
            ratio = slideObject.width / slideObject.height;
            setImageSize();
        }
        function setImageSize() {
            switch (dimension) {
                case 'width':
                    var newHeight = value / ratio;
                    slideObject.width = value;
                    slideObject.height = newHeight;
                    break;
                case 'height':
                    var newWidth = value * ratio;
                    slideObject.height = value;
                    slideObject.width = newWidth;
                    break;
            }
        }
    };
    SlideEditorComponent.prototype.deleteSlideObjectById = function (id) {
        var currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].getProperty('id') === id) {
                currentSlideObjects.splice(i, 1);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideEditorComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('workspace'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideEditorComponent.prototype, "workspace", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('controlToolbar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideEditorComponent.prototype, "controlToolbar", void 0);
    SlideEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-editor',
            template: __webpack_require__(/*! ./slide-editor.component.html */ "./src/app/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__(/*! ./slide-editor.component.css */ "./src/app/slide-editor/slide-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["SlideEditorAppLogicService"]])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}());



/***/ }),

/***/ "./src/app/styler-app-logic.service.ts":
/*!*********************************************!*\
  !*** ./src/app/styler-app-logic.service.ts ***!
  \*********************************************/
/*! exports provided: StylerAppLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerAppLogicService", function() { return StylerAppLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylerAppLogicService = /** @class */ (function () {
    function StylerAppLogicService(data, dialog) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.revertObjectsToDefaultStyle = function (style) {
            var id = style.getProperty('id');
            var styleType = style.constructor.name;
            for (var i = 0; i < _this.data.slides.length; i++) {
                var thisSlideObjects = _this.data.slides[i].getProperty('slideObjects');
                for (var j = 0; j < thisSlideObjects.length; j++) {
                    var slideObjectStyleId = thisSlideObjects[j].getProperty('styleId');
                    var slideObjectType = thisSlideObjects[j].constructor.name;
                    switch (styleType) {
                        case 'TextStyle':
                            if (slideObjectType === "TextObject" && slideObjectStyleId === id) {
                                thisSlideObjects[j].setProperty('styleId', 0);
                            }
                            break;
                        case 'ImageStyle':
                            if (slideObjectType === "ImageObject" && slideObjectStyleId === id) {
                                thisSlideObjects[j].setProperty('styleId', 0);
                            }
                            break;
                    }
                }
            }
        };
        this.confirmedDelete = function (style) {
            var id = style.getProperty('id');
            var styleType = style.constructor.name;
            if (styleType === "TextStyle") {
                for (var i = 0; i < _this.data.textStyles.length; i++) {
                    var thisId = _this.data.textStyles[i].getProperty('id');
                    if (_this.data.selectedTextStyleId === id)
                        _this.data.selectedTextStyleId = 0;
                    if (thisId === id)
                        _this.data.textStyles.splice(i, 1);
                }
            }
            else if (styleType === "ImageStyle") {
                for (var i = 0; i < _this.data.imageStyles.length; i++) {
                    var thisId = _this.data.imageStyles[i].getProperty('id');
                    if (_this.data.selectedImageStyleId === id)
                        _this.data.selectedImageStyleId = 0;
                    if (thisId === id)
                        _this.data.imageStyles.splice(i, 1);
                }
            }
        };
    }
    StylerAppLogicService.prototype.deleteStyle = function (style) {
        var _this = this;
        var styleName = style.getProperty('name');
        var styleType = style.constructor.name;
        switch (this.data.isStyleInUse(style)) {
            case true:
                // Prevent delete and display alert message
                var message = styleName + " is currently in use.  " + (styleType === 'TextStyle' ? 'Text objects' : 'Image objects') + " that use this style will be reverted to the default style.  Do you wish to proceed?";
                this.dialog.alert(message, 'danger', function () {
                    _this.revertObjectsToDefaultStyle(style);
                    _this.confirmedDelete(style);
                });
                break;
            case false:
                this.dialog.alert("Delete " + styleName + "?", 'danger', function () {
                    _this.confirmedDelete(style);
                });
                break;
        }
    };
    StylerAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], StylerAppLogicService);
    return StylerAppLogicService;
}());



/***/ }),

/***/ "./src/app/styler/styler.component.css":
/*!*********************************************!*\
  !*** ./src/app/styler/styler.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-card-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n    padding-bottom: 300px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/styler/styler.component.html":
/*!**********************************************!*\
  !*** ./src/app/styler/styler.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"style-card-container accent05\" *ngIf=\"this.data.viewTextElements\">\r\n  <text-style-card [textStyle]=\"textStyle\" *ngFor=\"let textStyle of this.data.textStyles\"></text-style-card>\r\n</div>\r\n\r\n<div class=\"style-card-container accent05\" *ngIf=\"this.data.viewImageElements\">\r\n  <image-style-card [imageStyle]=\"imageStyle\" *ngFor=\"let imageStyle of this.data.imageStyles\"></image-style-card>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "./src/app/styler/styler.component.ts":
/*!********************************************!*\
  !*** ./src/app/styler/styler.component.ts ***!
  \********************************************/
/*! exports provided: StylerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylerComponent", function() { return StylerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styler-app-logic.service */ "./src/app/styler-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylerComponent = /** @class */ (function () {
    function StylerComponent(data, styler) {
        this.data = data;
        this.styler = styler;
        this.textStyles = this.data.textStyles;
    }
    StylerComponent.prototype.ngOnInit = function () {
    };
    StylerComponent.prototype.getCpPosition = function () {
        return "right";
    };
    StylerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styler',
            template: __webpack_require__(/*! ./styler.component.html */ "./src/app/styler/styler.component.html"),
            styles: [__webpack_require__(/*! ./styler.component.css */ "./src/app/styler/styler.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_2__["StylerAppLogicService"]])
    ], StylerComponent);
    return StylerComponent;
}());



/***/ }),

/***/ "./src/app/text-style-card/text-style-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/text-style-card/text-style-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.style-card-container {\r\n    padding: 8px;\r\n    border-bottom: 3px #FFF solid;\r\n    margin-bottom: 4px;\r\n    height: auto;\r\n}\r\n\r\n.style-card-row {\r\n    width: 100%;\r\n    min-height: 25px; \r\n    margin: 3px auto;\r\n}\r\n\r\n.style-card-row h3 {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.style-card-row a,\r\n.style-card-row h4 {\r\n    font-size: 0.8rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.style-card-row \r\n.material-icons {\r\n    font-size: 1.2rem;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.style-card-row fa {\r\n    font-size: 0.8rem;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.style-card-row fa:hover,\r\n.style-card-row .material-icons:hover {\r\n    background:rgb(137, 150, 132);\r\n    cursor: pointer;\r\n}\r\n\r\n.style-card-row\r\ninput[type=\"number\"]{\r\n    width: 45px;\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #D6F9DD;\r\n    border: 1px #D6F9DD solid;\r\n    text-align: center;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    max-width: 125px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #D6F9DD;\r\n    border: 1px #D6F9DD solid;\r\n}\r\n\r\n.style-card-row\r\nselect {\r\n    border: 1px #D6F9DD solid;\r\n    box-sizing: border-box;\r\n    background: #D6F9DD;\r\n    color: black;\r\n    border: 1px #D6F9DD solid;\r\n}\r\n\r\n.selected {\r\n    background:rgb(137, 150, 132);\r\n    border: 1px white solid;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.icon-group {\r\n    width: 100px;\r\n}\r\n\r\n.google-font-name {\r\n    font-size: 0.7rem;\r\n    border: 1px #D6F9DD solid;\r\n    padding: 2px 4px;\r\n    cursor: pointer;\r\n    line-height: 1;\r\n}\r\n\r\n.md-color-selector {\r\n    width: 100px;\r\n    height: 10px;\r\n    border: 1px #D6F9DD solid;\r\n    outline: none;\r\n}\r\n\r\n.md-color-selector:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/text-style-card/text-style-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/text-style-card/text-style-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"style-card-container greenAccent01\">\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <div *ngIf=\"!textStyle.editNameMode\" class=\"flex-row-between\">\r\n      <h3>{{textStyle.name.substring(0, 20)}}</h3>\r\n      <fa *ngIf=\"!textStyle.isDefault\" name=\"edit\" (click)=\"textStyle.toggleProperty('editNameMode')\"></fa>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"textStyle.editNameMode\" class=\"flex-row-between\">\r\n      <input type=\"text\" [(ngModel)]=\"textStyle.name\" placeholder=\"textStyle.name\">\r\n      <fa name=\"save\" (click)=\"textStyle.toggleProperty('editNameMode')\"></fa>\r\n    </div>\r\n\r\n    <fa *ngIf=\"!textStyle.isDefault\" name=\"trash\" (click)=\"this.styler.deleteStyle(textStyle)\"></fa>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Font family:</h4>\r\n    <div style=\"flex: 1\">\r\n      <!--This spacer prevents fontPicker from repositioning the next div-->\r\n    </div>\r\n    <div [(fontPicker)]=\"textStyle.fontPickerData\" [fpWidth]=\"'320px'\" [fpPosition]=\"'right'\" [fpSizeSelect]=\"true\"\r\n      [fpStyleSelect]=\"true\">\r\n      <p class=\"google-font-name\">{{textStyle.fontPickerData['family']}} {{textStyle.fontPickerData['style']}}\r\n        {{textStyle.fontPickerData['size']}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Font color:</h4>\r\n    <div style=\"flex: 1\">\r\n      <!--This spacer prevents colorPicker from repositioning the next div-->\r\n    </div>\r\n    <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.color\" [style.background]=\"textStyle.color\"\r\n      cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <h4>Background color:</h4>\r\n    <div style=\"flex: 1\">\r\n      <!--This spacer prevents colorPicker from repositioning the next div-->\r\n    </div>\r\n    <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.backgroundColor\" [style.background]=\"textStyle.backgroundColor\"\r\n      cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <div class=\"flex-row-evenly icon-group\">\r\n      <i (click)=\"textStyle.setProperty('hAlign', 'left')\" class=\"material-icons\" [class.selected]=\"textStyle.hAlign === 'left'\">format_align_left</i>\r\n      <i (click)=\"textStyle.setProperty('hAlign', 'center')\" class=\"material-icons\" [class.selected]=\"textStyle.hAlign === 'center'\">format_align_center</i>\r\n      <i (click)=\"textStyle.setProperty('hAlign', 'right')\" class=\"material-icons\" [class.selected]=\"textStyle.hAlign === 'right'\">format_align_right</i>\r\n    </div>\r\n\r\n    <div class=\"flex-row-evenly icon-group\">\r\n      <i (click)=\"textStyle.setProperty('vAlign', 'top')\" class=\"material-icons\" [class.selected]=\"textStyle.vAlign === 'top'\">vertical_align_top</i>\r\n      <i (click)=\"textStyle.setProperty('vAlign', 'center')\" class=\"material-icons\" [class.selected]=\"textStyle.vAlign === 'center'\">vertical_align_center</i>\r\n      <i (click)=\"textStyle.setProperty('vAlign', 'bottom')\" class=\"material-icons\" [class.selected]=\"textStyle.vAlign === 'bottom'\">vertical_align_bottom</i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-between style-card-row\">\r\n    <div class=\"flex-row-evenly icon-group\">\r\n      <fa (click)=\"textStyle.toggleProperty('underline')\" name=\"underline\" [class.selected]=\"textStyle.underline\"></fa>\r\n      <fa (click)=\"textStyle.toggleProperty('lineThrough')\" name=\"strikethrough\" [class.selected]=\"textStyle.lineThrough\"></fa>\r\n      <h4 (click)=\"textStyle.toggleProperty('overline')\" style=\"text-decoration: overline; font-family: Arial; font-size: 1rem;\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.overline\">O</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-evenly icon-group\">\r\n      <i (click)=\"textStyle.toggleProperty('breakWord')\" class=\"material-icons\" [class.selected]=\"textStyle.breakWord\">wrap_text</i>\r\n      <i (click)=\"textStyle.toggleProperty('uppercase'); textStyle.setProperty('lowercase', false)\" class=\"material-icons\"\r\n        [class.selected]=\"textStyle.uppercase\">format_size</i>\r\n      <i (click)=\"textStyle.toggleProperty('lowercase'); textStyle.setProperty('uppercase', false)\" class=\"material-icons\"\r\n        [class.selected]=\"textStyle.lowercase\">text_fields</i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-evenly style-card-row\">\r\n    <a (click)=\"textStyle.toggleProperty('showExtraOptions')\" class=\"flex-row-evenly\" *ngIf=\"!textStyle.showExtraOptions\">\r\n      <fa name=\"angle-double-down\"></fa>\r\n      Show extra options\r\n      <fa name=\"angle-double-down\"></fa>\r\n    </a>\r\n\r\n    <a (click)=\"textStyle.toggleProperty('showExtraOptions')\" class=\"flex-row-evenly\" *ngIf=\"textStyle.showExtraOptions\">\r\n      <fa name=\"angle-double-up\"></fa>\r\n      Hide extra options\r\n      <fa name=\"angle-double-up\"></fa>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- EXTRA TEXT STYLE OPTIONS -->\r\n  <div *ngIf=\"textStyle.showExtraOptions\">\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Padding:</h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.padding\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Word spacing:</h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.wordSpacing\">px\r\n      </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Line height:</h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.lineHeight\">x&nbsp;&nbsp;\r\n      </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Letter spacing:</h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.letterSpacing\">px\r\n      </h4>\r\n    </div>\r\n\r\n    <!-- Text shadow settings -->\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Text shadow: </h4>\r\n      <input type=\"checkbox\" [(ngModel)]=\"textStyle.textShadow.showShadow\">\r\n    </div>\r\n\r\n    <div *ngIf=\"textStyle.textShadow.showShadow\">\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Shadow color: </h4>\r\n        <div style=\"flex: 1\">\r\n          <!--This spacer prevents colorPicker from repositioning the next div-->\r\n        </div>\r\n        <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.textShadow.color\" [style.background]=\"textStyle.textShadow.color\"\r\n          cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>H-shadow: </h4>\r\n        <h4>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.xValue\"> px</h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>V-hadow: </h4>\r\n        <h4>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.yValue\"> px</h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Blur: </h4>\r\n        <h4>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.blurValue\"> px</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Border Radius: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Top left radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.topLeftRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Top right radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.topRightRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Bottom right radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomRightRadius\">px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Bottom left radius: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomLeftRadius\">px</h4>\r\n    </div>\r\n\r\n    <!-- BORDER OPTIONS -->\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Borders: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <i (click)=\"textStyle.border.toggleProperty('showFullBorder');\r\n        textStyle.border.setProperty('showTopBorder', false);\r\n        textStyle.border.setProperty('showRightBorder', false);\r\n        textStyle.border.setProperty('showBottomBorder', false);\r\n        textStyle.border.setProperty('showLeftBorder', false);\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.border.getProperty('showFullBorder')\">border_outer</i>\r\n\r\n      <i (click)=\"textStyle.border.setProperty('showFullBorder', false); textStyle.border.toggleProperty('showLeftBorder');\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.border.getProperty('showLeftBorder')\">border_left</i>\r\n\r\n      <i (click)=\"textStyle.border.setProperty('showFullBorder', false); textStyle.border.toggleProperty('showTopBorder');\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.border.getProperty('showTopBorder')\">border_top</i>\r\n\r\n      <i (click)=\"textStyle.border.setProperty('showFullBorder', false); textStyle.border.toggleProperty('showRightBorder');\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.border.getProperty('showRightBorder')\">border_right</i>\r\n\r\n      <i (click)=\"textStyle.border.setProperty('showFullBorder', false); textStyle.border.toggleProperty('showBottomBorder');\"\r\n        class=\"material-icons\" [class.selected]=\"textStyle.border.getProperty('showBottomBorder')\">border_bottom</i>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Full border settings -->\r\n    <div *ngIf=\"textStyle.border.showFullBorder\">\r\n      <div class=\"flex-row-evenly style-card-row\">\r\n        <h4>Full Border: </h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Width: </h4>\r\n        <h4>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.border.fullBorderWidth\"> px</h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Color: </h4>\r\n        <div style=\"flex: 1\">\r\n          <!--This spacer prevents colorPicker from repositioning the next div-->\r\n        </div>\r\n        <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.fullBorderColor\" [style.background]=\"textStyle.border.fullBorderColor\"\r\n          cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Style: </h4>\r\n        <select [(ngModel)]=\"textStyle.border.fullBorderStyle\">\r\n          <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--Border radius settings -->\r\n\r\n\r\n\r\n  <!-- Top border settings -->\r\n  <div *ngIf=\"textStyle.border.showTopBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Top Border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.topBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.topBorderColor\" [style.background]=\"textStyle.border.topBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"textStyle.border.topBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <!-- Right border settings -->\r\n  <div *ngIf=\"textStyle.border.showRightBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Right Border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.rightBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.rightBorderColor\" [style.background]=\"textStyle.border.rightBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"textStyle.border.rightBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Bottom border settings -->\r\n  <div *ngIf=\"textStyle.border.showBottomBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Bottom Border: </h4>\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n        <!--This spacer prevents colorPicker from repositioning the next div-->\r\n      </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.bottomBorderColor\" [style.background]=\"textStyle.border.bottomBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"textStyle.border.bottomBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Left border settings -->\r\n  <div *ngIf=\"textStyle.border.showLeftBorder\">\r\n    <div class=\"flex-row-evenly style-card-row\">\r\n      <h4>Left Border: </h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Width: </h4>\r\n      <h4>\r\n        <input type=\"number\" [(ngModel)]=\"textStyle.border.leftBorderWidth\"> px</h4>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Color: </h4>\r\n      <div style=\"flex: 1\">\r\n          <!--This spacer prevents colorPicker from repositioning the next div-->\r\n        </div>\r\n      <div class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.leftBorderColor\" [style.background]=\"textStyle.border.leftBorderColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Style: </h4>\r\n      <select [(ngModel)]=\"textStyle.border.leftBorderStyle\">\r\n        <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/text-style-card/text-style-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/text-style-card/text-style-card.component.ts ***!
  \**************************************************************/
/*! exports provided: TextStyleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStyleCardComponent", function() { return TextStyleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styler-app-logic.service */ "./src/app/styler-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextStyleCardComponent = /** @class */ (function () {
    function TextStyleCardComponent(data, styler) {
        this.data = data;
        this.styler = styler;
    }
    TextStyleCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_textStyle__WEBPACK_IMPORTED_MODULE_2__["TextStyle"])
    ], TextStyleCardComponent.prototype, "textStyle", void 0);
    TextStyleCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-style-card',
            template: __webpack_require__(/*! ./text-style-card.component.html */ "./src/app/text-style-card/text-style-card.component.html"),
            styles: [__webpack_require__(/*! ./text-style-card.component.css */ "./src/app/text-style-card/text-style-card.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["StylerAppLogicService"]])
    ], TextStyleCardComponent);
    return TextStyleCardComponent;
}());



/***/ }),

/***/ "./src/app/toolbar-app-logic.service.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar-app-logic.service.ts ***!
  \**********************************************/
/*! exports provided: ToolbarAppLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAppLogicService", function() { return ToolbarAppLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _classes_imageStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/imageStyle */ "./src/app/classes/imageStyle.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolbarAppLogicService = /** @class */ (function () {
    function ToolbarAppLogicService(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    ToolbarAppLogicService.prototype.createTextStyle = function () {
        var newTextStyle = new _classes_textStyle__WEBPACK_IMPORTED_MODULE_5__["TextStyle"]();
        this.data.textStyles.push(newTextStyle);
    };
    ToolbarAppLogicService.prototype.createImageStyle = function () {
        var newImageStyle = new _classes_imageStyle__WEBPACK_IMPORTED_MODULE_6__["ImageStyle"]();
        this.data.imageStyles.push(newImageStyle);
    };
    ToolbarAppLogicService.prototype.selectStyle = function (type, id) {
        switch (type) {
            case 'text':
                this.data.selectedTextStyleId = id;
                break;
            case 'image':
                this.data.selectedImageStyleId = id;
                break;
        }
    };
    ToolbarAppLogicService.prototype.saveAsPng = function () {
        // Parent container must be set to overflow: visible to capture entire canvas
        var slideEditor = document.getElementById('slide-editor');
        slideEditor.style.overflow = "visible";
        html2canvas__WEBPACK_IMPORTED_MODULE_4__(document.getElementById("slide-render"), {
            height: this.data.documentSize.height,
            width: this.data.documentSize.width,
            scale: 2,
            allowTaint: true
        }).then(function (canvas) {
            var imgElement = document.createElement('a');
            var imgData = canvas.toDataURL("image/png");
            imgElement.href = imgData;
            imgElement.download = "slide.png";
            imgElement.click();
            // Change styleEditor overflow back to original value
            slideEditor.style.overflow = "hidden";
        });
    };
    ToolbarAppLogicService.prototype.exportAsPDF = function () {
        var _this = this;
        this.data.slideRenderMagnification = 100;
        this.data.currentSlideIndex = 0;
        var slideRender = document.getElementById('slide-render');
        var originalOverflowSR = slideRender.style.overflow;
        slideRender.style.overflow = "visible";
        // Parent container must be set to overflow: visible to capture entire canvas
        var slideRenderArea = document.getElementById('slide-render-area');
        var originalWidth = slideRenderArea.style.width;
        var originalOverflowSRA = slideRenderArea.style.overflow;
        slideRenderArea.style.width = "auto";
        slideRenderArea.style.overflow = "visible";
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__({
            orientation: "landscape",
            unit: "in",
            format: [16, 9]
        });
        var pdfWidth = doc.internal.pageSize.width;
        var pdfHeight = doc.internal.pageSize.height;
        // To make the img output size match the pdf size, make sure that:
        // canvas output size * scale factor === pdf document size converted to px
        var addSlides = function () {
            // Adds slides to jsPdf document recursively and saves when last slide has been added
            setTimeout(function () {
                if (_this.data.currentSlideIndex === _this.data.slides.length) {
                    _this.data.currentSlideIndex = 0;
                    doc.save("a4.pdf");
                    // Change styleEditor overflow back to original value
                    slideRenderArea.style.width = originalWidth;
                    slideRenderArea.style.overflow = originalOverflowSRA;
                    slideRender.style.overflow = originalOverflowSR;
                    return;
                }
                else {
                    html2canvas__WEBPACK_IMPORTED_MODULE_4__(slideRender, {
                        height: _this.data.documentSize.height,
                        width: _this.data.documentSize.width,
                        scale: 2,
                        allowTaint: false,
                        useCORS: true
                    }).then(function (canvas) {
                        var imgData = canvas.toDataURL("image/png");
                        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                        _this.data.currentSlideIndex += 1;
                        if (_this.data.currentSlideIndex < _this.data.slides.length) {
                            doc.addPage();
                        }
                        addSlides();
                    });
                }
            }, 1000);
        };
        addSlides();
    };
    ToolbarAppLogicService.prototype.saveSession = function () {
        this.data.currentProject.setProperty('slides', this.data.slides);
        this.data.currentProject.setProperty('textStyles', this.data.textStyles);
        this.data.currentProject.setProperty('imageStyles', this.data.imageStyles);
        this.data.currentProject.setProperty('selectedTextStyleId', this.data.selectedTextStyleId);
        this.data.currentProject.setProperty('selectedImageStyleId', this.data.selectedImageStyleId);
        this.data.currentProject.setProperty('currentSlideIndex', this.data.currentSlideIndex);
        this.data.currentProject.setProperty('selectedSlideObjectId', this.data.selectedSlideObjectId);
        this.data.currentProject.setProperty('sandboxText', this.data.sandboxText);
        this.data.currentProject.setProperty('documentSize', this.data.documentSize);
        this.data.currentProject.setProperty('slideRenderMagnification', this.data.slideRenderMagnification);
        this.data.currentProject.setProperty('textNotes', this.data.textNotes);
        this.data.currentProject.setProperty('images', this.data.images);
        localStorage.setItem('deckbuilder2Data', JSON.stringify(this.data.currentProject));
        // Send to server and save to database when backend is set up
        this.dialog.alert('Your session has been saved!', 'success');
    };
    ToolbarAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ToolbarAppLogicService);
    return ToolbarAppLogicService;
}());



/***/ }),

/***/ "./src/app/toolbar-secondary/toolbar-secondary.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/toolbar-secondary/toolbar-secondary.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#toolbar2 {\r\n    height: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.toolbar2-btn-group {\r\n    height: 100%;\r\n    width: auto;\r\n    padding: 10px 15px;\r\n}\r\n\r\n#slide-nav-group fa:hover,\r\n.toolbar2-btn-group:hover {\r\n    background: rgb(100, 100, 100);\r\n}\r\n\r\n.toolbar2-btn-group fa {\r\n    font-size: 1.2rem;\r\n    margin: 0;\r\n    padding: 2px 4px;\r\n}\r\n\r\n.dashed-border {\r\n    border: 2px dashed;\r\n    border-radius: 2px;\r\n}\r\n\r\n.toolbar2-btn-group p {\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    margin: 0 10px;\r\n    white-space: nowrap;\r\n}\r\n\r\n#slide-nav-group fa {\r\n    font-size:1.2rem;\r\n    padding: 15px;\r\n}\r\n\r\n#slide-number {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) {\r\n    .toolbar2-btn-group {\r\n        flex-direction: column;\r\n        padding: 7px;\r\n    }\r\n\r\n    .toolbar2-btn-group p {\r\n        padding-top: 5px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 999px) {\r\n    .toolbar2-btn-group p {\r\n        display: none;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/toolbar-secondary/toolbar-secondary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/toolbar-secondary/toolbar-secondary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"toolbar2\" class=\"grayAccent02 flex-row-evenly\">\r\n    <a (click)=\"this.data.setMode('text')\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"font\" class=\"dashed-border\"></fa>\r\n      <p>New text object</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.data.setMode('image')\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"image\" class=\"dashed-border\"></fa>\r\n      <p>New image object</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar2.createNewSlide()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"plus-square\"></fa>\r\n      <p>New slide</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar2.preview()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"play\"></fa>\r\n      <p>Preview</p>\r\n    </a>\r\n\r\n    <div class=\"flex-row-evenly\" id=\"slide-nav-group\">\r\n    <a (click)=\"this.toolbar2.previousSlide()\" class=\"flex-row-evenly\">\r\n      <fa name=\"step-backward\"></fa>\r\n    </a>\r\n\r\n    <div>\r\n      <h1 style=\"padding: 10px;\" (click)=\"this.dialog.toast('toast works')\" id=\"slide-number\">{{this.data.currentSlideIndex+1}}/{{this.data.slides.length}}</h1>\r\n    </div>\r\n\r\n    <a (click)=\"this.toolbar2.nextSlide()\" class=\"flex-row-evenly\">\r\n      <fa name=\"step-forward\"></fa>\r\n    </a>\r\n  </div>\r\n\r\n    <a (click)=\"this.toolbar2.deleteCurrentSlide()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"trash\"></fa>\r\n      <p>Delete slide</p>\r\n    </a>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/toolbar-secondary/toolbar-secondary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/toolbar-secondary/toolbar-secondary.component.ts ***!
  \******************************************************************/
/*! exports provided: ToolbarSecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSecondaryComponent", function() { return ToolbarSecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toolbar2-app-logic.service */ "./src/app/toolbar2-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarSecondaryComponent = /** @class */ (function () {
    function ToolbarSecondaryComponent(data, dialog, toolbar2) {
        this.data = data;
        this.dialog = dialog;
        this.toolbar2 = toolbar2;
    }
    ToolbarSecondaryComponent.prototype.ngOnInit = function () {
    };
    ToolbarSecondaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar-secondary',
            template: __webpack_require__(/*! ./toolbar-secondary.component.html */ "./src/app/toolbar-secondary/toolbar-secondary.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-secondary.component.css */ "./src/app/toolbar-secondary/toolbar-secondary.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["Toolbar2AppLogicService"]])
    ], ToolbarSecondaryComponent);
    return ToolbarSecondaryComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbar-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows:  minmax(50px, 7vh);\r\n        grid-template-rows:  minmax(50px, 7vh);\r\n    -ms-grid-columns: 1fr 50vw 1fr;\r\n        grid-template-columns: 1fr 50vw 1fr;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.toolbar-button-group-container {\r\n    width: 100%;\r\n}\r\n\r\n.toolbar-btn-group {\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n}\r\n\r\n.toolbar-btn-group:hover {\r\n    background: rgb(80, 80, 80);\r\n}\r\n\r\n.toolbar-btn-group fa {\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.toolbar-btn-group p {\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    margin: 3px auto 0 auto;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n#toolbar-style-selector {\r\n    box-sizing: border-box;\r\n    height: 90%;\r\n    width: auto;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    padding: 5px;\r\n    flex-grow: 1;\r\n    margin: 0 5px;\r\n}\r\n\r\n.toolbar-style-btn {\r\n    text-decoration: none;\r\n    width: 125px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    margin-right: 7px;\r\n    margin-bottom: 7px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    font-size: 0.7rem;\r\n    border: 2px transparent solid;\r\n    outline: none;\r\n}\r\n\r\n.toolbar-style-btn:hover {\r\n    background: rgb(156, 172, 149);\r\n}\r\n\r\n.selected {\r\n    background: rgb(156, 172, 149);\r\n    border: 2px white solid;\r\n}\r\n\r\n@media only screen and (max-width: 999px) {\r\n    .toolbar-btn-group p {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbar-container\">\r\n\r\n  <div class=\"flex-row-evenly toolbar-button-group-container\">\r\n    <a (click)=\"this.toolbar.createTextStyle(); this.data.setMode('text')\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"font\"></fa>\r\n      <p>New text style</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.createImageStyle(); this.data.setMode('image')\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"image\"></fa>\r\n      <p>New image style</p>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"toolbar-style-selector\" class=\"greenAccent02\">\r\n    <!-- Text styles -->\r\n    <div *ngIf=\"this.data.viewTextElements\">\r\n      <button *ngFor=\"let textStyle of this.data.textStyles\" (click)=\"this.toolbar.selectStyle('text', textStyle.id);\"\r\n        class=\"greenAccent01 toolbar-style-btn\" [class.selected]=\"isSelected(textStyle)\"><p>{{textStyle.name.substring(0,\r\n        20)}}</p></button>\r\n    </div>\r\n\r\n    <!-- Image styles -->\r\n    <div *ngIf=\"this.data.viewImageElements\">\r\n      <button *ngFor=\"let imageStyle of this.data.imageStyles\" (click)=\"this.toolbar.selectStyle('image', imageStyle.id);\"\r\n        class=\"greenAccent01 toolbar-style-btn\" [class.selected]=\"isSelected(imageStyle)\"><p>{{imageStyle.name.substring(0,\r\n        20)}}</p></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-evenly toolbar-button-group-container\">\r\n    <a (click)=\"this.toolbar.saveAsPng()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"file-image\"></fa>\r\n      <p>Save As PNG</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.exportAsPDF()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"file-pdf\"></fa>\r\n      <p>Export to PDF</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.saveSession()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"save\"></fa>\r\n      <p>Save Session</p>\r\n    </a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toolbar-app-logic.service */ "./src/app/toolbar-app-logic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(data, toolbar) {
        this.data = data;
        this.toolbar = toolbar;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.isSelected = function (style) {
        var type = style.constructor.name;
        var response;
        switch (type) {
            case 'ImageStyle':
                if (style.id === this.data.selectedImageStyleId) {
                    response = true;
                }
                else {
                    response = false;
                }
                break;
            case 'TextStyle':
                if (style.id === this.data.selectedTextStyleId) {
                    response = true;
                }
                else {
                    response = false;
                }
                break;
        }
        return response;
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarAppLogicService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/toolbar2-app-logic.service.ts":
/*!***********************************************!*\
  !*** ./src/app/toolbar2-app-logic.service.ts ***!
  \***********************************************/
/*! exports provided: Toolbar2AppLogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar2AppLogicService", function() { return Toolbar2AppLogicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _classes_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/slide */ "./src/app/classes/slide.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Toolbar2AppLogicService = /** @class */ (function () {
    function Toolbar2AppLogicService(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    Toolbar2AppLogicService.prototype.createNewSlide = function () {
        this.data.slides.push(new _classes_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"]());
        this.data.currentSlideIndex = this.data.slides.length - 1;
    };
    Toolbar2AppLogicService.prototype.preview = function () {
        var context = this;
        // The 'click' eventListener causes mouseControl to increment currentSlideIndex.
        // Initializing to -1 allows the slideshow to start at currentSlideIndex = 0
        this.data.currentSlideIndex = -1;
        // Create HTML elements to be displayed in fullscreen mode:
        // Slideshow contents
        var slideRender = document.getElementById('slide-render');
        var copy;
        // Foreground fullscreen transparent overlay to disable draggable contents in fullscreen mode
        var overlay = document.createElement('div');
        overlay.style.cssText = "\n      background: transparent;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0 ;\n      left: 0;\n      z-index: 100;\n    ";
        // Fullscreen container 
        // Putting fullscreen contents in a container allows control over the sizing 
        // and positioning of elements displayed in fullscreen mode
        var fullscreenContainer = document.createElement('div');
        fullscreenContainer.style.cssText = "\n      background\" #000;\n    ";
        // Add elements to DOM
        document.body.appendChild(fullscreenContainer);
        refreshPreview();
        launchIntoFullscreen(fullscreenContainer);
        // Enable slideshow navgation
        document.addEventListener('keyup', keyboardControl);
        document.addEventListener('click', mouseControl);
        // Exit preview mode - Remove fullscreen elements and event listeners from DOM
        document.addEventListener("fullscreenchange", exitPreviewMode);
        document.addEventListener("mozfullscreenchange", exitPreviewMode);
        document.addEventListener("webkitfullscreenchange", exitPreviewMode);
        document.addEventListener("msfullscreenchange", exitPreviewMode);
        function exitPreviewMode(event) {
            if (document.fullscreenElement || document.webkitFullscreenElement === null) {
                document.body.removeChild(fullscreenContainer);
                // Disable keyboard and mouse navigation
                document.removeEventListener('keyup', keyboardControl);
                document.removeEventListener('click', mouseControl);
            }
        }
        function launchIntoFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
            else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            element.requestPointerLock();
        }
        function mouseControl(event) {
            switch (event.button) {
                case 2:// Right click
                    context.previousSlide();
                    refreshPreview();
                    break;
                case 0:// Left click
                    context.nextSlide();
                    refreshPreview();
                    break;
            }
        }
        function keyboardControl(event) {
            switch (event.key) {
                case 'ArrowLeft':
                    context.previousSlide();
                    refreshPreview();
                    break;
                case 'ArrowRight':
                    context.nextSlide();
                    refreshPreview();
                    break;
            }
        }
        function refreshPreview() {
            setTimeout(function () {
                copy = slideRender.cloneNode(true);
                copy.appendChild(overlay);
                fullscreenContainer.appendChild(copy);
                // Scale elements to full screen size while maintaining aspect ratio
                var scaleX = screen.width / copy.clientWidth;
                var scaleY = screen.height / copy.clientHeight;
                var scaleFactor = Math.min(scaleX, scaleY).toFixed(1);
                copy.style.transform = "scale(" + scaleFactor.toString() + ", " + scaleFactor.toString() + ")";
                copy.style.position = "absolute";
                copy.style.transformOrigin = "left top";
                copy.style.top = "0";
                copy.style.left = "0";
                copy.style.overflow = "hidden";
            }, 300);
        }
    };
    Toolbar2AppLogicService.prototype.previousSlide = function () {
        if (this.data.currentSlideIndex > 0) {
            this.data.currentSlideIndex--;
        }
    };
    Toolbar2AppLogicService.prototype.nextSlide = function () {
        if (this.data.currentSlideIndex < this.data.slides.length - 1) {
            this.data.currentSlideIndex++;
        }
    };
    Toolbar2AppLogicService.prototype.deleteCurrentSlide = function () {
        var _this = this;
        var callback = function () {
            _this.data.slides.splice(_this.data.currentSlideIndex, 1);
            if (_this.data.currentSlideIndex >= _this.data.slides.length) {
                _this.data.currentSlideIndex--;
            }
        };
        this.dialog.alert("Are you sure you want to delete this slide from your project?", 'danger', callback);
    };
    Toolbar2AppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], Toolbar2AppLogicService);
    return Toolbar2AppLogicService;
}());



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