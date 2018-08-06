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

module.exports = ".app-container {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 100px 1fr;\r\n        grid-template-rows: 100px 1fr;\r\n        -ms-grid-columns: 300px 1fr 1fr;\r\n        grid-template-columns: 300px 1fr 1fr;\r\n    overflow: hidden;\r\n        grid-template-areas:\r\n        \"toolbar toolbar toolbar\"\r\n        \"styler sandbox editor\"\r\n\r\n}\r\n\r\n#toolbar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: toolbar;\r\n    overflow: hidden;\r\n}\r\n\r\n#styler {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: styler;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n#sandbox {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: sandbox;\r\n    overflow: hidden;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 75px 100%;\r\n        grid-template-rows: 75px 100%;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n}\r\n\r\n#slide-editor {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 3;\r\n    grid-area: editor;\r\n    overflow: hidden;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 75px 100%;\r\n        grid-template-rows: 75px 100%;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container grayAccent01\">\r\n\r\n  <toolbar id=\"toolbar\" class=\"grayAccent01 flex-row-between\"></toolbar>\r\n\r\n  <styler id=\"styler\" class=\"accent05 flex-col-start\"></styler>\r\n\r\n  <sandbox id=\"sandbox\" class=\"accent05\"></sandbox>\r\n\r\n  <slide-editor id=\"slide-editor\" class=\"accent05 flex-col-evenly\"></slide-editor>\r\n\r\n</div>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
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
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_9__["SlideEditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__["FontPickerModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_12__["AngularDraggableModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], {
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
        this.borderStyles = [
            'solid', 'dashed', 'dotted', 'double'
        ];
        this.showFullBorder = false;
        this.showTopBorder = false;
        this.showRightBorder = false;
        this.showBottomBorder = false;
        this.showLeftBorder = false;
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
        borderRadiusCss += this.topLeftRadius + 'pt ';
        borderRadiusCss += this.topRightRadius + 'pt ';
        borderRadiusCss += this.bottomRightRadius + 'pt ';
        borderRadiusCss += this.bottomLeftRadius + 'pt';
        return borderRadiusCss;
    };
    BorderControl.prototype.getBorderProperty = function (propertyName) {
        return this[propertyName];
    };
    BorderControl.prototype.setBorderProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    BorderControl.prototype.toggleBorderProperty = function (propertyName) {
        this[propertyName] = !this[propertyName];
    };
    return BorderControl;
}());



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
var ImageStyle = /** @class */ (function () {
    function ImageStyle() {
        this.id = ImageStyle.imageStyleCounter++;
        this.name = 'ImageStyle' + ImageStyle.imageStyleCounter;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.borderWidth = 0;
        this.borderStyle = 'none';
        this.borderColor = 'transparent';
        this.borderRadius = 0;
        this.opacity = 1;
        this.grayscale = 0;
        this.blur = 0;
        this.brightness = 1;
        this.contrast = 1;
        this.dropShadow = {
            'h-shadow': 0,
            'v-shadow': 0,
            'blur': 0,
            'spread': 0,
            'color': 'transparent'
        };
        this.hueRotate = 0;
        this.invert = 0;
        this.saturate = 1;
        this.sepia = 0;
    }
    ImageStyle.prototype.getCss = function () {
        var css = {
            'border-width': this.borderWidth + 'px',
            'border-style': this.borderStyle + 'px',
            'border-color': this.borderColor,
            'border-radius': this.borderRadius,
            'filter': this.getFilters(),
        };
        return css;
    };
    ImageStyle.prototype.getFilters = function () {
        var cssFilters;
        // Default values:
        var defaultOpacity = 1;
        var defaultGrayscale = 0;
        var defaultBlur = 0;
        var defaultBrightness = 1;
        var defaultContrast = 1;
        var defaultDropShadow = {
            'h-shadow': 0,
            'v-shadow': 0,
            'blur': 0,
            'spread': 0,
            'color': 'transparent'
        };
        var defaultHueRotate = 0;
        var defaultInvert = 0;
        var defaultSaturate = 1;
        var defaultSepia = 0;
        if (this.opacity !== defaultOpacity) {
            cssFilters += 'opacity(' + this.opacity + ') ';
        }
        if (this.grayscale !== defaultGrayscale) {
            cssFilters += 'grayscale(' + this.grayscale + ') ';
        }
        if (this.blur !== defaultBlur) {
            cssFilters += 'blur(' + this.blur + ') ';
        }
        if (this.brightness !== defaultBrightness) {
            cssFilters += 'brightness(' + this.brightness + ') ';
        }
        if (this.contrast !== defaultContrast) {
            cssFilters += 'contrast(' + this.contrast + ') ';
        }
        if (JSON.stringify(this.dropShadow) !== JSON.stringify(defaultDropShadow)) {
            cssFilters += 'dropShadow(' + this.dropShadow + ') ';
        }
        if (this.hueRotate !== defaultHueRotate) {
            cssFilters += 'hue-rotate(' + this.hueRotate + ') ';
        }
        if (this.invert !== defaultInvert) {
            cssFilters += 'invert(' + this.invert + ') ';
        }
        if (this.saturate !== defaultSaturate) {
            cssFilters += 'saturate(' + this.saturate + ') ';
        }
        if (this.sepia !== defaultSepia) {
            cssFilters += 'sepia(' + this.sepia + ') ';
        }
        return cssFilters;
    };
    ImageStyle.prototype.getStyleProperty = function (propertyName) {
        return this[propertyName];
    };
    ImageStyle.prototype.setStyleProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    ImageStyle.prototype.toggleEditNameMode = function () {
        this.editNameMode = !this.editNameMode;
    };
    ImageStyle.prototype.toggleExtraOptions = function () {
        this.showExtraOptions = !this.showExtraOptions;
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
var Project = /** @class */ (function () {
    function Project() {
        this.title = 'New Project';
        this.slideObjectIdCounter = 0;
        this.styleIdCounter = 0;
        this.slideIdCounter = 0;
        this.slides = [];
        this.textStyles = [];
        this.imageStyles = [];
        this.shapeStyles = [];
        this.selectedTextStyleId = 0;
        this.selectedImageStyleId = 0;
        this.selectedShapeStyleId = 0;
        this.currentSlideIndex = 0;
        this.selectedSlideObjectId = 1;
        this.sandboxText = "Lorem ipsum";
        this.textNotes = "Test";
        this.documentSize = {
            height: 432,
            width: 768
        };
    }
    Project.prototype.clearContents = function () {
        this.slides = [];
        this.textStyles = [];
        this.imageStyles = [];
        this.shapeStyles = [];
    };
    Project.prototype.addSlide = function (slide) {
        this.slides.push(slide);
    };
    Project.prototype.addTextStyle = function (textStyle) {
        this.textStyles.push(textStyle);
    };
    Project.prototype.getProjectProperty = function (propertyName) {
        return this[propertyName];
    };
    Project.prototype.setProjectProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    Project.prototype.save = function (project) {
        this.title = project.title;
        this.slideObjectIdCounter = project.slideObjectIdCounter;
        this.styleIdCounter = project.styleIdCounter;
        this.slideIdCounter = project.slideIdCounter;
        this.slides = project.slides;
        this.textStyles = project.textStyles;
        this.imageStyles = project.imageStyles;
        this.shapeStyles = project.shapeStyles;
        this.selectedTextStyleId = project.selectedTextStyleId;
        this.selectedImageStyleId = project.selectedImageStyleId;
        this.selectedShapeStyleId = project.selectedShapeStyleId;
        this.currentSlideIndex = project.currentSlideIndex;
        this.selectedSlideObjectId = project.selectedSlideObjectId;
        this.sandboxText = project.sandboxText;
        this.sandboxImage = project.sandboxImage;
        this.sandboxShape = project.sandboxShape;
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
    ShadowControl.prototype.getShadowProperty = function (propertyName) {
        return this[propertyName];
    };
    ShadowControl.prototype.setShadowProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    return ShadowControl;
}());



/***/ }),

/***/ "./src/app/classes/shapeStyle.ts":
/*!***************************************!*\
  !*** ./src/app/classes/shapeStyle.ts ***!
  \***************************************/
/*! exports provided: ShapeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeStyle", function() { return ShapeStyle; });
var ShapeStyle = /** @class */ (function () {
    function ShapeStyle() {
        this.id = ShapeStyle.shapeStyleCounter++;
        this.name = 'ShapeStyle' + ShapeStyle.shapeStyleCounter;
        this.editNameMode = false;
        this.showExtraOptions = false;
    }
    ShapeStyle.prototype.getStyleProperty = function (propertyName) {
        return this[propertyName];
    };
    ShapeStyle.prototype.setStyleProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    ShapeStyle.prototype.toggleEditNameMode = function () {
        this.editNameMode = !this.editNameMode;
    };
    ShapeStyle.prototype.toggleExtraOptions = function () {
        this.showExtraOptions = !this.showExtraOptions;
    };
    ShapeStyle.shapeStyleCounter = 0;
    return ShapeStyle;
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
        this.backgroundImage = "";
        this.backgroundColor = "#FFF";
        this.slideObjects = [];
    }
    Slide.prototype.getSlideProperty = function (propertyName) {
        return this[propertyName];
    };
    Slide.prototype.setSlideProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    Slide.prototype.addSlideObject = function (slideObject) {
        this.slideObjects.push(slideObject);
    };
    Slide.prototype.clearSlideObjects = function () {
        this.slideObjects = [];
    };
    Slide.prototype.deleteSlideObjectById = function (id) {
        for (var i = 0; i < this.slideObjects.length; i++) {
            if (this.slideObjects[i].getSlideObjectProperty('id') === id) {
                this.slideObjects.splice(i, 1);
            }
        }
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
        this.top = 0;
        this.left = 0;
        this.xTranslation = 0;
        this.yTranslation = 0;
        this.height = 75;
        this.width = 200;
        this.display = true;
        this.zIndex = 100;
    }
    SlideObject.prototype.toggleEditNameMode = function () {
        this.editNameMode = !this.editNameMode;
    };
    SlideObject.prototype.setZIndex = function (zIndex) {
        this.zIndex = zIndex;
    };
    // (rzStop) emits an event
    SlideObject.prototype.setSize = function (event) {
        // New sizes in raw pixels 
        var newHeightPixels = event.size.height;
        var newWidthPixels = event.size.width;
        var newTopPixels = event.position.top;
        var newLeftPixels = event.position.left;
        // // Convert to percentages and save
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
        var slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        var slideRenderWidth = document.querySelector('.slide-render').clientWidth;
        var css = {
            'height': this.height + 'px',
            'width': this.width + 'px',
            'top': this.top + 'px',
            'left': this.left + 'px',
            'z-index': this.zIndex,
            'display': this.display ? 'block' : 'none',
            'position': 'absolute'
        };
        return css;
    };
    SlideObject.prototype.toggleSlideObjectProperty = function (propertyName) {
        this[propertyName] = !this[propertyName];
    };
    SlideObject.prototype.getSlideObjectProperty = function (propertyName) {
        return this[propertyName];
    };
    SlideObject.prototype.setSlideObjectProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
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
        return _this;
    }
    TextObject.prototype.toggleEditTextMode = function () {
        this.editTextMode = !this.editTextMode;
    };
    TextObject.prototype.setTextvalue = function (textValue) {
        this.textValue = textValue;
    };
    TextObject.prototype.getTextValue = function () {
        return this.textValue;
    };
    TextObject.prototype.setStyleId = function (styleId) {
        this.styleId = styleId;
    };
    TextObject.prototype.setTextObjectProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    TextObject.prototype.getStyleId = function () {
        return this.styleId;
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
        this.name = 'TextStyle' + TextStyle.textStyleCounter;
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
        this.margin = 0;
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
    }
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
            'border-top': this.border.getBorderProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none',
            'border-right': this.border.getBorderProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none',
            'border-bottom': this.border.getBorderProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none',
            'border-left': this.border.getBorderProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none',
            'border': this.border.getBorderProperty('showFullBorder') ? this.border.getFullBorderCss() : 'none',
            'border-radius': this.border.getBorderRadiusCss(),
            'margin': this.margin + 'px',
            'padding': this.padding + 'px',
            'display': 'flex',
            'justify-content': this.convertAlignToFlex(this.hAlign),
            'align-items': this.convertAlignToFlex(this.vAlign),
            'text-shadow': this.textShadow.getShadowCss()
        };
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
        var textTransform = "";
        if (!this.uppercase && !this.lowercase) {
            return 'none';
        }
        if (this.uppercase) {
            return 'uppercase';
        }
        if (this.lowercase) {
            return 'lowercase';
        }
    };
    TextStyle.prototype.getTextDecoration = function () {
        var textDecoration = "";
        if (!this.underline && !this.overline && !this.lineThrough) {
            return 'none';
        }
        if (this.underline) {
            textDecoration += "underline";
        }
        if (this.overline) {
            textDecoration += "overline";
        }
        if (this.lineThrough) {
            textDecoration += "line-through";
        }
        return textDecoration;
    };
    // Getters, setters, togglers
    TextStyle.prototype.getStyleProperty = function (propertyName) {
        return this[propertyName];
    };
    TextStyle.prototype.setStyleProperty = function (propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    };
    TextStyle.prototype.toggleStyleProperty = function (propertyName) {
        this[propertyName] = !this[propertyName];
    };
    TextStyle.prototype.toggleEditNameMode = function () {
        this.editNameMode = !this.editNameMode;
    };
    TextStyle.prototype.toggleExtraOptions = function () {
        this.showExtraOptions = !this.showExtraOptions;
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
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _classes_imageStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/imageStyle */ "./src/app/classes/imageStyle.ts");
/* harmony import */ var _classes_shapeStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/shapeStyle */ "./src/app/classes/shapeStyle.ts");
/* harmony import */ var _classes_textObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);
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
    function DataService() {
        // Set default values
        this.slideRenderMagnification = 50;
    }
    DataService.prototype.test = function () {
        console.log("Test");
        console.log(this.slideRenderMagnification);
    };
    DataService.prototype.loadProject = function (project) {
        this.slides = project.getProjectProperty("slides");
        this.textStyles = project.getProjectProperty("textStyles");
        this.imageStyles = project.getProjectProperty("imageStyles");
        this.shapeStyles = project.getProjectProperty("shapeStyles");
        this.selectedTextStyleId = project.getProjectProperty("selectedTextStyleId");
        this.selectedImageStyleId = project.getProjectProperty("selectedImageStyleId");
        this.selectedShapeStyleId = project.getProjectProperty("selectedShapeStyleId");
        this.currentSlideIndex = project.getProjectProperty("currentSlideIndex");
        this.selectedSlideObjectId = project.getProjectProperty("selectedSlideObjectId");
        this.sandboxText = project.getProjectProperty("sandboxText");
        this.sandboxImage = project.getProjectProperty("sandboxImage");
        this.sandboxShape = project.getProjectProperty("sandboxShape");
        this.documentSize = project.getProjectProperty("documentSize");
        this.slideRenderMagnification = project.getProjectProperty('slideRenderMagnification');
        this.textNotes = project.getProjectProperty('textNotes');
        this.viewTextElements = true;
        this.viewImageElements = false;
        this.viewShapeElements = false;
    };
    // App view mode
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
    // TOOLBAR FUNCTIONS
    DataService.prototype.createTextStyle = function () {
        var newTextStyle = new _classes_textStyle__WEBPACK_IMPORTED_MODULE_2__["TextStyle"]();
        this.textStyles.push(newTextStyle);
    };
    DataService.prototype.createImageStyle = function () {
        var newImageStyle = new _classes_imageStyle__WEBPACK_IMPORTED_MODULE_3__["ImageStyle"]();
        this.imageStyles.push(newImageStyle);
    };
    DataService.prototype.createShapeStyle = function () {
        var newShapeStyle = new _classes_shapeStyle__WEBPACK_IMPORTED_MODULE_4__["ShapeStyle"]();
        this.shapeStyles.push(newShapeStyle);
    };
    // Delete styles
    DataService.prototype.deleteTextStyleById = function (id) {
        for (var i = 0; i < this.textStyles.length; i++) {
            if (this.textStyles[i].getStyleProperty('id') === id && this.textStyles.length > 1) {
                this.textStyles.splice(i, 1);
            }
        }
    };
    DataService.prototype.deleteImageStyleById = function (id) {
        for (var i = 0; i < this.imageStyles.length; i++) {
            if (this.imageStyles[i].getStyleProperty('id') === id && this.imageStyles.length > 1) {
                this.imageStyles.splice(i, 1);
            }
        }
    };
    DataService.prototype.deleteShapeStyleById = function (id) {
        for (var i = 0; i < this.shapeStyles.length; i++) {
            if (this.shapeStyles[i].getStyleProperty('id') === id && this.shapeStyles.length > 1) {
                this.shapeStyles.splice(i, 1);
            }
        }
    };
    DataService.prototype.selectStyle = function (type, id) {
        switch (type) {
            case 'text':
                this.selectedTextStyleId = id;
                break;
            case 'image':
                this.selectedImageStyleId = id;
                break;
            case 'shape':
                this.selectedShapeStyleId = id;
                break;
        }
    };
    // General functions
    DataService.prototype.getTextStyleById = function (id) {
        for (var i = 0; i < this.textStyles.length; i++) {
            if (this.textStyles[i].getStyleProperty('id') === id) {
                return this.textStyles[i];
            }
        }
    };
    DataService.prototype.getImageStyleById = function (id) {
        for (var i = 0; i < this.imageStyles.length; i++) {
            if (this.imageStyles[i].getStyleProperty('id') === id) {
                return this.imageStyles[i];
            }
        }
    };
    DataService.prototype.getShapeStyleById = function (id) {
        for (var i = 0; i < this.shapeStyles.length; i++) {
            if (this.shapeStyles[i].getStyleProperty('id') === id) {
                return this.shapeStyles[i];
            }
        }
    };
    DataService.prototype.saveAsPng = function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_7__(document.querySelector(".slide-render"), {
            height: 432,
            width: 768,
            scale: 2
        }).then(function (canvas) {
            var imgElement = document.createElement('a');
            var imgData = canvas.toDataURL("image/png");
            console.log(imgData);
            imgElement.href = imgData;
            imgElement.download = "slide.png";
            imgElement.click();
        });
    };
    DataService.prototype.exportAsPDF = function () {
        this.slideRenderMagnification = 100;
        setTimeout(function () {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__({
                orientation: "landscape",
                unit: "in",
                format: [16, 9]
            });
            var width = doc.internal.pageSize.width;
            var height = doc.internal.pageSize.height;
            // To make the img output size match the pdf size, make sure that:
            // canvas output size * scale factor === pdf document size converted to px
            html2canvas__WEBPACK_IMPORTED_MODULE_7__(document.querySelector(".slide-render"), {
                height: 432,
                width: 768,
                scale: 2
            }).then(function (canvas) {
                var imgData = canvas.toDataURL("image/png");
                doc.addImage(imgData, "PNG", 0, 0, width, height);
                doc.save("a4.pdf");
            });
        }, 3000);
    };
    DataService.prototype.saveSession = function () {
        console.log("Save session");
        var newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        newProject.setProjectProperty('slides', this.slides);
        newProject.setProjectProperty('textStyles', this.textStyles);
        newProject.setProjectProperty('imageStyles', this.imageStyles);
        newProject.setProjectProperty('shapeStyles', this.shapeStyles);
        newProject.setProjectProperty('selectedTextStyleId', this.selectedTextStyleId);
        newProject.setProjectProperty('selectedImageStyleId', this.selectedImageStyleId);
        newProject.setProjectProperty('selectedShapeStyleId', this.selectedShapeStyleId);
        newProject.setProjectProperty('currentSlideIndex', this.currentSlideIndex);
        newProject.setProjectProperty('selectedSlideObjectId', this.selectedSlideObjectId);
        newProject.setProjectProperty('sandboxText', this.sandboxText);
        newProject.setProjectProperty('sandboxImage', this.sandboxImage);
        newProject.setProjectProperty('sandboxShape', this.sandboxShape);
        newProject.setProjectProperty('documentSize', this.documentSize);
        newProject.setProjectProperty('slideRenderMagnification', this.slideRenderMagnification);
        newProject.setProjectProperty('textNotes', this.textNotes);
        var newProjectJSON = JSON.stringify(newProject);
        localStorage.setItem('deckbuilder2Data', newProjectJSON);
        alert('Your session has been saved');
    };
    // SANDBOX FUNCTIONS
    DataService.prototype.addTextObjectToSlide = function () {
        var currentSlide = this.slides[this.currentSlideIndex];
        var currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
        var newTextObject = new _classes_textObject__WEBPACK_IMPORTED_MODULE_5__["TextObject"]();
        newTextObject.setTextvalue(this.sandboxText);
        newTextObject.setStyleId(this.selectedTextStyleId);
        // !important!  set z index last to ensure proper assignment of z index
        currentSlide.addSlideObject(newTextObject);
        console.log(this.getTextStyleById(this.selectedTextStyleId).getCss());
        newTextObject.setZIndex(currentSlideObjects.length - 1);
    };
    DataService.prototype.increaseOneLayer = function (objectId) {
        // Locate object in currentSlideObjects
        var currentSlide = this.slides[this.currentSlideIndex];
        var currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].id === objectId) {
                if (currentSlideObjects[i].zIndex < currentSlideObjects.length - 1) {
                    currentSlideObjects[i].zIndex++; // Increment zIndex of currentSlideObjects[i]
                    currentSlideObjects[i + 1].zIndex--; // Derement zIndex of currentSlideObjects[i+1]
                    // Switch positions of [i] and [i+1]
                    var tempStorage = currentSlideObjects[i];
                    currentSlideObjects[i] = currentSlideObjects[i + 1];
                    currentSlideObjects[i + 1] = tempStorage;
                    i++; // Increment i to prevent the code from entering the if statement on the next iteration
                }
            }
        }
    };
    DataService.prototype.decreaseOneLayer = function (objectId) {
        // Locate object in currentSlideObjects
        var currentSlide = this.slides[this.currentSlideIndex];
        var currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].id === objectId) {
                if (currentSlideObjects[i].zIndex > 0) {
                    currentSlideObjects[i].zIndex--; // Increment zIndex of currentSlideObjects[i]
                    currentSlideObjects[i - 1].zIndex++; // Derement zIndex of currentSlideObjects[i+1]
                    // Switch positions of [i] and [i+1]
                    var tempStorage = currentSlideObjects[i];
                    currentSlideObjects[i] = currentSlideObjects[i - 1];
                    currentSlideObjects[i - 1] = tempStorage;
                }
            }
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/sandbox/sandbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#text-sandbox {\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr 100px 1fr;\r\n        grid-template-rows: 1fr 100px 1fr;\r\n}\r\n\r\ntextarea {\r\n    height: 100%;\r\n    width: 100%;\r\n    resize: none;\r\n    outline: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#text-preview-container {\r\n    height: auto;\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 85%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/sandbox/sandbox.component.html":
/*!************************************************!*\
  !*** ./src/app/sandbox/sandbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sandbox toolbar -->\r\n<div class=\"grayAccent02 flex-row-evenly\">\r\n  <a (click)=\"this.data.setMode('text')\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"font\" size=\"3x\" class=\"accent03 object-icon\"></fa>\r\n    <p>Create a new text object</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.setMode('image')\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"image\" size=\"3x\" class=\"accent03 object-icon\"></fa>\r\n    <p>Create a new image object</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.setMode('shape')\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"shapes\" size=\"3x\" class=\"accent03 object-icon\"></fa>\r\n    <p>Create a new shape object</p>\r\n  </a>\r\n</div>\r\n\r\n<!-- Text sandbox -->\r\n<div id=\"text-sandbox\" class=\"grayAccent03\" *ngIf=\"this.data.viewTextElements && this.data.textStyles.length > 0\">\r\n  <div id=\"text-preview-container\">\r\n    <div class=\"dotted-border\">\r\n      <p id=\"text-preview\" [ngStyle]=\"this.data.getTextStyleById(this.data.selectedTextStyleId).getCss()\">{{this.data.sandboxText}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-evenly\">\r\n    <textarea [(ngModel)]=\"this.data.sandboxText\">\r\n      \r\n    </textarea>\r\n    <a (click)=\"this.data.addTextObjectToSlide()\" class=\"lg-btn flex-col-evenly grayAccent02\">\r\n      <fa name=\"share\" size=\"3x\"></fa>\r\n      <p>Add text object to slide</p>\r\n    </a>\r\n  </div>\r\n\r\n  <textarea [(ngModel)]=\"this.data.textNotes\">\r\n    {{this.data.textNotes}}\r\n  </textarea>\r\n</div>\r\n\r\n<!-- Image sandbox -->\r\n<div id=\"image-sandbox\" class=\"grayAccent03\" *ngIf=\"this.data.viewImageElements && this.data.imageStyles.length > 0\">\r\n\r\n  <h1>Image sandbox</h1>\r\n\r\n</div>\r\n\r\n<!-- Shape sandbox -->\r\n<div id=\"shape-sandbox\" class=\"grayAccent03\" *ngIf=\"this.data.viewShapeElements && this.data.shapeStyles.length > 0\">\r\n\r\n    <h1>Shape sandbox</h1>\r\n  \r\n  </div>"

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
    function SandboxComponent(data) {
        this.data = data;
    }
    SandboxComponent.prototype.ngOnInit = function () {
    };
    SandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sandbox',
            template: __webpack_require__(/*! ./sandbox.component.html */ "./src/app/sandbox/sandbox.component.html"),
            styles: [__webpack_require__(/*! ./sandbox.component.css */ "./src/app/sandbox/sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SandboxComponent);
    return SandboxComponent;
}());



/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slide-editor-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 50% 50%;\r\n        grid-template-rows: 50% 50%;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n}\r\n\r\n#slide-render-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    background: linear-gradient(to bottom right, rgb(16, 16, 17), rgb(53, 53, 53));\r\n}\r\n\r\n#slide-control-panel {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.slide-render {\r\n    background: #FFF;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.slide-control-row {\r\n    width: 100%;\r\n    border-bottom: 3px rgb(81, 133, 81) solid;\r\n    \r\n}\r\n\r\n#slide-settings {\r\n    height: 50px;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: 40px;\r\n    margin: 0 3px;\r\n}\r\n\r\n.slide-object {\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.slide-object p {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.slide-object:hover{\r\n    cursor: move;\r\n    border: 1px silver dashed;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slide-editor-toolbar\" class=\"grayAccent02 flex-row-evenly\">\r\n  <a (click)=\"this.createNewSlide()\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"plus-square\" size=\"3x\"></fa>\r\n    <p>Create a new slide</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.preview()\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"play\" size=\"3x\"></fa>\r\n    <p>Preview</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.previousSlide()\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"step-backward\" size=\"3x\"></fa>\r\n  </a>\r\n\r\n  <div>\r\n    <h1>{{this.data.currentSlideIndex+1}}/{{this.data.slides.length}}</h1>\r\n  </div>\r\n\r\n  <a (click)=\"this.nextSlide()\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"step-forward\" size=\"3x\"></fa>\r\n  </a>\r\n\r\n  <a (click)=\"this.deleteCurrentSlide()\" class=\"flex-row-evenly md-btn\">\r\n    <fa name=\"trash\" size=\"3x\"></fa>\r\n    <p>Delete this slide</p>\r\n  </a>\r\n</div>\r\n\r\n<div id=\"slide-editor-container\" class=\"accent04\">\r\n  <div *ngIf=\"this.data.slides.length > 0\" id=\"slide-render-container\" class=\"flex-col-evenly accent01\">\r\n\r\n    \r\n    <div class=\"slide-render\" [ngStyle]=\"this.getSlideRenderCss()\">\r\n      <!-- Render slide objects here -->\r\n      <div *ngFor=\"let slideObject of this.data.slides[this.data.currentSlideIndex].slideObjects\" \r\n      class=\"slide-object\" \r\n      [ngStyle]=\"slideObject.getCss()\"\r\n      (mousedown)=\"this.selectObject(slideObject.id)\"\r\n      \r\n      ngResizable\r\n        [rzHandles]=\"'n,e,s,w,se,sw,ne,nw'\"\r\n        (rzStop)=\"slideObject.setSize($event)\"\r\n        \r\n        ngDraggable \r\n        (endOffset)=\"slideObject.setTranslation($event)\"\r\n        [position]=\"slideObject.getTranslation()\">\r\n        <p *ngIf=\"slideObject.constructor.name==='TextObject'\" [ngStyle]=\"this.data.getTextStyleById(slideObject.styleId).getCss()\"\r\n        >{{slideObject.textValue}}</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div  *ngIf=\"this.data.slides.length > 0\" id=\"slide-control-panel\" class=\"grayAccent02\">\r\n\r\n\r\n    <div id=\"slide-settings\" class=\"grayAccent02 flex-row-evenly\">\r\n      <!-- <fa name=\"palette\" size=\"2x\"></fa> -->\r\n      <div class=\"flex-col-evenly sm-btn\">\r\n        <p>Set background color</p>\r\n        <input class=\"md-color-selector\" [(colorPicker)]=\"this.data.slides[this.data.currentSlideIndex].backgroundColor\" [style.background]=\"this.data.slides[this.data.currentSlideIndex].backgroundColor\"\r\n        />\r\n      </div>\r\n      <!-- \r\n      <a (click)=\"this.data.test()\" class=\"sm-btn flex-row-evenly\">\r\n        <fa name=\"palette\" size=\"2x\"></fa>\r\n        <p>Set default background color</p>\r\n      </a> -->\r\n\r\n      <a (click)=\"this.data.test()\" class=\"sm-btn flex-row-evenly\">\r\n        <fa name=\"image\" size=\"2x\"></fa>\r\n        <p>Set background image</p>\r\n      </a>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n          <fa (click)=\"this.data.test()\" name=\"search-minus\" size=\"1x\"></fa>\r\n\r\n        <input type='range' [(ngModel)]=\"this.data.slideRenderMagnification\" min=\"0\" max=\"200\">\r\n\r\n          <fa name=\"search-plus\" size=\"1x\"></fa>\r\n\r\n        <p><input type=\"number\" [(ngModel)]=\"this.data.slideRenderMagnification\">%</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngFor=\"let slideObject of this.data.slides[this.data.currentSlideIndex].slideObjects.reverse()\" \r\n    class=\"slide-control-row flex-row-between wrap\"\r\n    [style.background]=\"this.indexOfSelectedSlideObject===slideObject.id ? 'green' : null\">\r\n      <div class=\"flex-row-evenly\">\r\n\r\n        <div *ngIf=\"!slideObject.editNameMode\" class=\"sm-btn flex-row-evenly\">\r\n          <h5>{{slideObject.name}}</h5>\r\n          <fa name=\"edit\" (click)=\"slideObject.toggleEditNameMode()\"></fa>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.editNameMode\" class=\"sm-btn flex-row-evenly\">\r\n          <input type=\"text\" [(ngModel)]=\"slideObject.name\" (placeholder)=\"slideObject.name\">\r\n          <fa name=\"save\" (click)=\"slideObject.toggleEditNameMode()\"></fa>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <div *ngIf=\"!slideObject.editTextMode\" class=\"sm-btn flex-row-evenly\">\r\n          <h5>{{slideObject.textValue.substring(0, 15) + '...'}}</h5>\r\n          <fa name=\"edit\" (click)=\"slideObject.toggleEditTextMode()\"></fa>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.editTextMode\" class=\"sm-btn flex-row-evenly\">\r\n          <input type=\"text\" [(ngModel)]=\"slideObject.textValue\" (placeholder)=\"slideObject.textValue\">\r\n          <fa name=\"save\" (click)=\"slideObject.toggleEditTextMode()\"></fa>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <h5>X:</h5>\r\n        <input type=\"number\" [(ngModel)]=\"slideObject.xTranslation\">\r\n        <h5>Y:</h5>\r\n        <input type=\"number\" [(ngModel)]=\"slideObject.yTranslation\">\r\n\r\n        <h5>H:</h5>\r\n        <input type=\"number\" [(ngModel)]=\"slideObject.height\">\r\n\r\n        <h5>W:</h5>\r\n        <input type=\"number\"[(ngModel)]=\"slideObject.width\">\r\n\r\n        <!-- <h5>R:</h5>\r\n        <input type=\"number\" [(ngModel)]=\"slideObject.rotation\"> -->\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <a (click)=\"this.data.increaseOneLayer(slideObject.id)\" class=\"sm-btn flex-row-evenly\">\r\n          <fa name=\"arrow-up\"></fa>\r\n        </a>\r\n        <a (click)=\"this.data.decreaseOneLayer(slideObject.id)\" class=\"sm-btn flex-row-evenly\">\r\n          <fa name=\"arrow-down\"></fa>\r\n        </a>\r\n        <a (click)=\"slideObject.toggleSlideObjectProperty('display')\" class=\"sm-btn flex-row-evenly\">\r\n          <fa name=\"eye\"></fa>\r\n        </a>\r\n      </div>\r\n\r\n      <a (click)=\"this.deleteSlideObjectById(slideObject.id)\" class=\"sm-btn flex-row-evenly\">\r\n        <fa name=\"trash\"></fa>Delete</a>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _classes_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/slide */ "./src/app/classes/slide.ts");
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
    function SlideEditorComponent(data) {
        this.data = data;
    }
    SlideEditorComponent.prototype.ngOnInit = function () {
    };
    SlideEditorComponent.prototype.test = function () {
        console.log(this.data.slideRenderMagnification);
    };
    // Slide editor Toolbar functions
    SlideEditorComponent.prototype.createNewSlide = function () {
        var newSlide = new _classes_slide__WEBPACK_IMPORTED_MODULE_2__["Slide"]();
        this.data.slides.push(newSlide);
        this.data.currentSlideIndex = this.data.slides.length - 1;
    };
    SlideEditorComponent.prototype.preview = function () {
        console.log('Enter preview mode');
    };
    SlideEditorComponent.prototype.previousSlide = function () {
        if (this.data.currentSlideIndex > 0) {
            this.data.currentSlideIndex--;
        }
    };
    SlideEditorComponent.prototype.nextSlide = function () {
        if (this.data.currentSlideIndex < this.data.slides.length - 1) {
            this.data.currentSlideIndex++;
        }
    };
    SlideEditorComponent.prototype.deleteCurrentSlide = function () {
        this.data.slides.splice(this.data.currentSlideIndex, 1);
        if (this.data.currentSlideIndex >= this.data.slides.length) {
            this.data.currentSlideIndex--;
        }
    };
    SlideEditorComponent.prototype.deleteSlideObjectById = function (id) {
        var currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getSlideProperty('slideObjects');
        for (var i = 0; i < currentSlideObjects.length; i++) {
            if (currentSlideObjects[i].getSlideObjectProperty('id') === id) {
                currentSlideObjects.splice(i, 1);
            }
        }
    };
    // Slide editor render functions
    SlideEditorComponent.prototype.getSlideRenderCss = function () {
        var backgroundColor = this.data.slides[this.data.currentSlideIndex].getSlideProperty('backgroundColor');
        var slideRenderWidth = this.data.documentSize['width'];
        var slideRenderHeight = this.data.documentSize['height'];
        var renderContainerWidth = document.querySelector('#slide-render-container').clientWidth;
        var translationX;
        if (slideRenderWidth > renderContainerWidth) {
            translationX = '-' + (slideRenderWidth - renderContainerWidth) / 2 + 'px';
        }
        else {
            translationX = '0px';
        }
        var css = {
            'background': backgroundColor,
            'height': slideRenderHeight + 'px',
            'width': slideRenderWidth + 'px',
            'transform': 'translate(' + translationX + ') scale(' + this.data.slideRenderMagnification / 100 + ')',
            'z-index': '0',
            'position': 'relative'
        };
        return css;
    };
    // Slide editor control panel functions
    SlideEditorComponent.prototype.selectObject = function (objectId) {
        this.indexOfSelectedSlideObject = objectId;
    };
    SlideEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-editor',
            template: __webpack_require__(/*! ./slide-editor.component.html */ "./src/app/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__(/*! ./slide-editor.component.css */ "./src/app/slide-editor/slide-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SlideEditorComponent);
    return SlideEditorComponent;
}());



/***/ }),

/***/ "./src/app/styler/styler.component.css":
/*!*********************************************!*\
  !*** ./src/app/styler/styler.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-card {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 15px 0;\r\n    border-bottom: 10px solid rgb(117, 156, 122);\r\n}\r\n\r\n.style-card-row {\r\n    width: 85%;\r\n    height: auto;\r\n    margin: 10px auto;\r\n}\r\n\r\n.style-cards-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.style-card-btn {\r\n    padding: 3px 5px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.style-card-btn:hover {\r\n    background: rgb(86, 116, 107);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/styler/styler.component.html":
/*!**********************************************!*\
  !*** ./src/app/styler/styler.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SHAPE STYLE CARD -->\r\n<div class=\"style-cards-container\" *ngIf=\"this.data.viewShapeElements && this.data.shapeStyles.length > 0\">\r\n  <div class=\"style-card greenAccent01\" *ngFor=\"let shapeStyle of this.data.shapeStyles.reverse()\">\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h3>{{shapeStyle.name}}\r\n        <fa name=\"edit\"></fa>\r\n      </h3>\r\n      <a (click)=\"this.data.test()\">\r\n        <fa name=\"trash\"></fa>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- IMAGE STYLE CARD -->\r\n<div class=\"style-cards-container\" *ngIf=\"this.data.viewImageElements && this.data.imageStyles.length > 0\">\r\n  <div class=\"style-card greenAccent01\" *ngFor=\"let imageStyle of this.data.imageStyles.reverse()\">\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h3>{{imageStyle.name}}\r\n        <fa name=\"edit\"></fa>\r\n      </h3>\r\n      <a (click)=\"this.data.test()\">\r\n        <fa name=\"trash\"></fa>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Opacity: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Grayscale: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Blur: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Brightness: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Contrast: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Invert: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Saturate: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Sepia: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h5>Hue rotate: </h5>\r\n      <input type=\"number\" value=\"1\">\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <a (click)=\"imageStyle.toggleExtraOptions()\" class=\"xs-btn flex-row-evenly\" *ngIf=\"!imageStyle.showExtraOptions\">\r\n        <fa name=\"angle-double-down\"></fa>\r\n        <p>Show extra options</p>\r\n        <fa name=\"angle-double-down\"></fa>\r\n      </a>\r\n\r\n      <a (click)=\"imageStyle.toggleExtraOptions()\" class=\"xs-btn flex-row-evenly\" *ngIf=\"imageStyle.showExtraOptions\">\r\n        <fa name=\"angle-double-down\"></fa>\r\n        <p>Hide extra options</p>\r\n        <fa name=\"angle-double-down\"></fa>\r\n      </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"imageStyle.showExtraOptions\">\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <a (click)=\"this.data.test()\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_outer</i>\r\n        </a>\r\n\r\n        <a (click)=\"this.data.test()\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_left</i>\r\n        </a>\r\n\r\n        <a (click)=\"this.data.test()\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_top</i>\r\n        </a>\r\n\r\n        <a (click)=\"this.data.test()\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_right</i>\r\n        </a>\r\n\r\n        <a (click)=\"this.data.test()\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_bottom</i>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Full border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Border: </h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Width: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Color: </h5>\r\n        <h5>Color picker</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Style: </h5>\r\n        <select>\r\n          <option>Solid</option>\r\n          <option>Dashed</option>\r\n          <option>Dotted</option>\r\n        </select>\r\n      </div>\r\n\r\n      <!-- Top border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Top Border: </h4>\r\n      </div>\r\n\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Width: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Color: </h5>\r\n        <h5>Color picker</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Style: </h5>\r\n        <select>\r\n          <option>Solid</option>\r\n          <option>Dashed</option>\r\n          <option>Dotted</option>\r\n        </select>\r\n      </div>\r\n\r\n      <!-- Right border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Right Border: </h4>\r\n      </div>\r\n\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Width: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Color: </h5>\r\n        <h5>Color picker</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Style: </h5>\r\n        <select>\r\n          <option>Solid</option>\r\n          <option>Dashed</option>\r\n          <option>Dotted</option>\r\n        </select>\r\n      </div>\r\n\r\n      <!-- Bottom border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Bottom Border: </h4>\r\n      </div>\r\n\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Width: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Color: </h5>\r\n        <h5>Color picker</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Style: </h5>\r\n        <select>\r\n          <option>Solid</option>\r\n          <option>Dashed</option>\r\n          <option>Dotted</option>\r\n        </select>\r\n      </div>\r\n\r\n      <!-- Left border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Left Border: </h4>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Width: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Color: </h5>\r\n        <h5>Color picker</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Style: </h5>\r\n        <select>\r\n          <option>Solid</option>\r\n          <option>Dashed</option>\r\n          <option>Dotted</option>\r\n        </select>\r\n      </div>\r\n\r\n      <!-- Full border settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Border Radius: </h4>\r\n      </div>\r\n\r\n      <!--Border radius settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Full border radius: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Top left border radius: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Top right border radius: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Bottom left border radius: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Bottom right border radius: </h5>\r\n        <h5>\r\n          <input type=\"number\" value=\"1\"> px</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- TEXT STYLE CARD -->\r\n<div class=\"style-cards-container\" *ngIf=\"this.data.viewTextElements && this.data.textStyles.length > 0\">\r\n  <div class=\"style-card greenAccent01\" *ngFor=\"let textStyle of this.data.textStyles.reverse()\">\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h3 *ngIf=\"!textStyle.editNameMode\">{{textStyle.name}}\r\n        <fa name=\"edit\" (click)=\"textStyle.toggleEditNameMode()\"></fa>\r\n      </h3>\r\n\r\n      <div *ngIf=\"textStyle.editNameMode\">\r\n        <input type=\"text\" [(ngModel)]=\"textStyle.name\" placeholder=\"textStyle.name\">\r\n        <fa name=\"save\" (click)=\"textStyle.toggleEditNameMode()\"></fa>\r\n      </div>\r\n\r\n      <a (click)=\"this.data.deleteTextStyleById(textStyle.id)\">\r\n        <fa name=\"trash\"></fa>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Font family:</h4>\r\n      <div [(fontPicker)]=\"textStyle.fontPickerData\" [fpWidth]=\"'320px'\" [fpPosition]=\"'bottom'\" [fpSizeSelect]=\"true\" [fpStyleSelect]=\"true\">\r\n        <p>{{textStyle.fontPickerData['family']}} {{textStyle.fontPickerData['style']}} {{textStyle.fontPickerData['size']}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Font color:</h4>\r\n      <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.color\" [style.background]=\"textStyle.color\" cpOutputFormat=\"rgba\"\r\n        cpAlphaChannel=\"enabled\"/>\r\n    </div>\r\n\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <h4>Background color:</h4>\r\n      <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.backgroundColor\" [style.background]=\"textStyle.backgroundColor\"\r\n        cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\" />\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <div class=\"flex-row-evenly\">\r\n        <a (click)=\"textStyle.setStyleProperty('hAlign', 'left')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">format_align_left</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.setStyleProperty('hAlign', 'center')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">format_align_center</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.setStyleProperty('hAlign', 'right')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">format_align_right</i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <a (click)=\"textStyle.setStyleProperty('vAlign', 'top')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">vertical_align_top</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.setStyleProperty('vAlign', 'center')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">vertical_align_center</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.setStyleProperty('vAlign', 'bottom')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">vertical_align_bottom</i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <div class=\"flex-row-evenly\">\r\n        <a (click)=\"textStyle.toggleStyleProperty('underline')\" class=\"style-card-btn\">\r\n          <fa name=\"underline\"></fa>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.toggleStyleProperty('lineThrough')\" class=\"style-card-btn\">\r\n          <fa name=\"strikethrough\"></fa>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.toggleStyleProperty('overline')\" class=\"style-card-btn\" >\r\n          <h4 style=\"text-decoration: overline; font-family: Arial\">O</h4>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <a (click)=\"textStyle.toggleStyleProperty('breakWord')\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">wrap_text</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.toggleStyleProperty('uppercase'); textStyle.setStyleProperty('lowercase', false)\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">format_size</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.toggleStyleProperty('lowercase'); textStyle.setStyleProperty('uppercase', false)\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">text_fields</i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"flex-row-between style-card-row\">\r\n      <a (click)=\"textStyle.toggleExtraOptions()\" class=\"xs-btn flex-row-evenly\" *ngIf=\"!textStyle.showExtraOptions\">\r\n        <fa name=\"angle-double-down\"></fa>\r\n        <p>Show extra options</p>\r\n        <fa name=\"angle-double-down\"></fa>\r\n      </a>\r\n\r\n      <a (click)=\"textStyle.toggleExtraOptions()\" class=\"xs-btn flex-row-evenly\" *ngIf=\"textStyle.showExtraOptions\">\r\n        <fa name=\"angle-double-down\"></fa>\r\n        <p>Hide extra options</p>\r\n        <fa name=\"angle-double-down\"></fa>\r\n      </a>\r\n    </div>\r\n\r\n    <!-- EXTRA TEXT STYLE OPTIONS -->\r\n    <div *ngIf=\"textStyle.showExtraOptions\">\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Margin:</h5>\r\n        <h5>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.margin\">px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Padding:</h5>\r\n        <h5>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.padding\">px</h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Word spacing:</h5>\r\n        <h5>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.wordSpacing\">px\r\n        </h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Line height:</h5>\r\n        <h5>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.lineHeight\">x\r\n        </h5>\r\n      </div>\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h5>Letter spacing:</h5>\r\n        <h5>\r\n          <input type=\"number\" [(ngModel)]=\"textStyle.letterSpacing\">px\r\n        </h5>\r\n      </div>\r\n\r\n      <!-- Text shadow settings -->\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <h4>Text shadow: </h4>\r\n        <input type=\"checkbox\" [(ngModel)]=\"textStyle.textShadow.showShadow\">\r\n      </div>\r\n\r\n      <div *ngIf=\"textStyle.textShadow.showShadow\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.textShadow.color\" [style.background]=\"textStyle.textShadow.color\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"/>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Horizontal shadow: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.xValue\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Vertical shadow: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.yValue\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Blur: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.textShadow.blurValue\"> px</h5>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- BORDER OPTIONS -->\r\n\r\n      <div class=\"flex-row-between style-card-row\">\r\n        <a (click)=\"textStyle.border.toggleBorderProperty('showFullBorder');\r\n        textStyle.border.setBorderProperty('showTopBorder', false);\r\n        textStyle.border.setBorderProperty('showRightBorder', false);\r\n        textStyle.border.setBorderProperty('showBottomBorder', false);\r\n        textStyle.border.setBorderProperty('showLeftBorder', false);\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_outer</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.border.toggleBorderProperty('showLeftBorder');\r\n        textStyle.border.setBorderProperty('showFullBorder', false);\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_left</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.border.toggleBorderProperty('showTopBorder');\r\n        textStyle.border.setBorderProperty('showFullBorder', false);\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_top</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.border.toggleBorderProperty('showRightBorder');\r\n        textStyle.border.setBorderProperty('showFullBorder', false);\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_right</i>\r\n        </a>\r\n\r\n        <a (click)=\"textStyle.border.toggleBorderProperty('showBottomBorder');\r\n        textStyle.border.setBorderProperty('showFullBorder', false);\" class=\"style-card-btn\">\r\n          <i class=\"material-icons\">border_bottom</i>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Full border settings -->\r\n      <div *ngIf=\"textStyle.border.showFullBorder\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Border: </h4>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Width: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.fullBorderWidth\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.fullBorderColor\" [style.background]=\"textStyle.border.fullBorderColor\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\" />\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Style: </h5>\r\n          <select [(ngModel)]=\"textStyle.border.fullBorderStyle\">\r\n            <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <!--Border radius settings -->\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Border Radius: </h4>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Top left border radius: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.topLeftRadius\">px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Top right border radius: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.topRightRadius\">px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Bottom right border radius: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomRightRadius\">px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Bottom left border radius: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomLeftRadius\">px</h5>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Top border settings -->\r\n      <div *ngIf=\"textStyle.border.showTopBorder\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Top Border: </h4>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Width: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.topBorderWidth\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.topBorderColor\" [style.background]=\"textStyle.border.topBorderColor\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"/>\r\n\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Style: </h5>\r\n          <select [(ngModel)]=\"textStyle.border.topBorderStyle\">\r\n            <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- Right border settings -->\r\n      <div *ngIf=\"textStyle.border.showRightBorder\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Right Border: </h4>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Width: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.rightBorderWidth\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.rightBorderColor\" [style.background]=\"textStyle.border.rightBorderColor\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\" />\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Style: </h5>\r\n          <select [(ngModel)]=\"textStyle.border.rightBorderStyle\">\r\n            <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Bottom border settings -->\r\n      <div *ngIf=\"textStyle.border.showBottomBorder\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Bottom Border: </h4>\r\n        </div>\r\n\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Width: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.bottomBorderWidth\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.bottomBorderColor\" [style.background]=\"textStyle.border.bottomBorderColor\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\" />\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Style: </h5>\r\n          <select [(ngModel)]=\"textStyle.border.bottomBorderStyle\">\r\n            <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Left border settings -->\r\n      <div *ngIf=\"textStyle.border.showLeftBorder\">\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h4>Left Border: </h4>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Width: </h5>\r\n          <h5>\r\n            <input type=\"number\" [(ngModel)]=\"textStyle.border.leftBorderWidth\"> px</h5>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Color: </h5>\r\n          <input class=\"md-color-selector\" [(colorPicker)]=\"textStyle.border.leftBorderColor\" [style.background]=\"textStyle.border.leftBorderColor\"\r\n            cpOutputFormat=\"rgba\" cpAlphaChannel=\"enabled\"/>\r\n        </div>\r\n\r\n        <div class=\"flex-row-between style-card-row\">\r\n          <h5>Style: </h5>\r\n          <select [(ngModel)]=\"textStyle.border.leftBorderStyle\">\r\n            <option *ngFor=\"let borderStyle of textStyle.border.borderStyles\" [value]=\"borderStyle\">{{borderStyle}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
    function StylerComponent(data) {
        this.data = data;
    }
    StylerComponent.prototype.ngOnInit = function () {
    };
    StylerComponent.prototype.getCpPosition = function () {
        // 
        return "right";
    };
    StylerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styler',
            template: __webpack_require__(/*! ./styler.component.html */ "./src/app/styler/styler.component.html"),
            styles: [__webpack_require__(/*! ./styler.component.css */ "./src/app/styler/styler.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], StylerComponent);
    return StylerComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#style-selector {\r\n    height: 90%;\r\n    width: 60%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.style-btn {\r\n    text-decoration: none;\r\n    padding: 5px;\r\n    width: 125px;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.style-btn:hover {\r\n    background: rgb(202, 228, 191);\r\n}"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-row-evenly\">\r\n\r\n  <a (click)=\"this.data.createTextStyle(); this.data.setMode('text')\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"font\" size=\"4x\"></fa>\r\n    <p>Create a new text style</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.createImageStyle(); this.data.setMode('image')\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"image\" size=\"4x\"></fa>\r\n    <p>Create a new image style</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.createShapeStyle(); this.data.setMode('shape')\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"shapes\" size=\"4x\"></fa>\r\n    <p>Create a new shape style</p>\r\n  </a>\r\n</div>\r\n\r\n<div id=\"style-selector\" class=\"greenAccent02\">\r\n\r\n  <!-- Text styles -->\r\n  <div *ngIf=\"this.data.viewTextElements\">\r\n    <a *ngFor=\"let textStyle of this.data.textStyles\" (click)=\"this.data.selectStyle('text', textStyle.id); this.data.setMode('text')\" class=\"greenAccent01 style-btn\">{{textStyle.name}}</a>\r\n  </div>\r\n\r\n  <!-- Image styles -->\r\n  <div *ngIf=\"this.data.viewImageElements\">\r\n    <a *ngFor=\"let imageStyle of this.data.imageStyles\" (click)=\"this.data.selectStyle('image', imageStyle.id); this.data.setMode('image')\" class=\"greenAccent01 style-btn\">{{imageStyle.name}}</a>\r\n  </div>\r\n\r\n  <!-- Shape styles -->\r\n  <div *ngIf=\"this.data.viewShapeElements\">\r\n    <a *ngFor=\"let shapeStyle of this.data.shapeStyles\" (click)=\"this.data.selectStyle('shape', shapeStyle.id); this.data.setMode('shape')\" class=\"greenAccent01 style-btn\">{{shapeStyle.name}}</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"flex-row-evenly\">\r\n  <a (click)=\"this.data.saveAsPng()\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"file-image\" size=\"4x\"></fa>\r\n    <p>Save As PNG</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.exportAsPDF()\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"file-pdf\" size=\"4x\"></fa>\r\n    <p>Export to PDF</p>\r\n  </a>\r\n\r\n  <a (click)=\"this.data.saveSession()\" class=\"flex-col-evenly lg-btn\">\r\n    <fa name=\"save\" size=\"4x\"></fa>\r\n    <p>Save Session</p>\r\n  </a>\r\n</div>"

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
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/project */ "./src/app/classes/project.ts");
/* harmony import */ var _classes_textObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/textObject */ "./src/app/classes/textObject.ts");
/* harmony import */ var _classes_textStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/textStyle */ "./src/app/classes/textStyle.ts");
/* harmony import */ var _classes_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/slide */ "./src/app/classes/slide.ts");
/* harmony import */ var _classes_borderControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/borderControl */ "./src/app/classes/borderControl.ts");
/* harmony import */ var _classes_shadowControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/shadowControl */ "./src/app/classes/shadowControl.ts");
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
    function ToolbarComponent(data) {
        this.data = data;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.checkLocalStorage();
    };
    ToolbarComponent.prototype.checkLocalStorage = function () {
        // Check local storage for data from previous session
        var deckbuilder2Data = JSON.parse(localStorage.getItem('deckbuilder2Data'));
        if (deckbuilder2Data) {
            // load
            var project = new _classes_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            project.clearContents();
            // Create image styles based on deckbuilder2Data JSON object
            for (var i = 0; i < deckbuilder2Data.textStyles.length; i++) {
                var newTextStyle = new _classes_textStyle__WEBPACK_IMPORTED_MODULE_4__["TextStyle"]();
                // Populate this textStyle's variables with data from deckbuilder2Data.textStyles[i]
                for (var key in deckbuilder2Data.textStyles[i]) {
                    newTextStyle.setStyleProperty(key, deckbuilder2Data.textStyles[i][key]);
                }
                // Load borders
                newTextStyle.setStyleProperty('border', new _classes_borderControl__WEBPACK_IMPORTED_MODULE_6__["BorderControl"]());
                var newTextStyleBorder = newTextStyle.getStyleProperty('border');
                for (var key in deckbuilder2Data.textStyles[i].border) {
                    newTextStyleBorder.setBorderProperty(key, deckbuilder2Data.textStyles[i].border[key]);
                }
                // Load shadows
                newTextStyle.setStyleProperty('textShadow', new _classes_shadowControl__WEBPACK_IMPORTED_MODULE_7__["ShadowControl"]());
                var newTextStyleShadow = newTextStyle.getStyleProperty('textShadow');
                for (var key in deckbuilder2Data.textStyles[i].textShadow) {
                    newTextStyleShadow.setShadowProperty(key, deckbuilder2Data.textStyles[i].textShadow[key]);
                }
                project.addTextStyle(newTextStyle);
            }
            // Create slides based on deckbuilder2Data JSON object
            for (var i = 0; i < deckbuilder2Data.slides.length; i++) {
                var newSlide = new _classes_slide__WEBPACK_IMPORTED_MODULE_5__["Slide"]();
                for (var key in deckbuilder2Data.slides[i]) {
                    newSlide.setSlideProperty(key, deckbuilder2Data.slides[i][key]);
                }
                // Create all slide objects for this slide based on deckbuilder2Data JSON object
                newSlide.clearSlideObjects();
                for (var j = 0; j < deckbuilder2Data.slides[i].slideObjects.length; j++) {
                    var newTextObject = new _classes_textObject__WEBPACK_IMPORTED_MODULE_3__["TextObject"]();
                    for (var key in deckbuilder2Data.slides[i].slideObjects[j]) {
                        newTextObject.setTextObjectProperty(key, deckbuilder2Data.slides[i].slideObjects[j][key]);
                    }
                    newSlide.addSlideObject(newTextObject);
                }
                project.addSlide(newSlide);
            }
            this.data.loadProject(project);
        }
        else if (!deckbuilder2Data) {
            // Load a new project
            this.data.loadProject(new _classes_project__WEBPACK_IMPORTED_MODULE_2__["Project"]());
        }
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
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