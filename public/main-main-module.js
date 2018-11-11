(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular2-draggable/fesm5/angular2-draggable.js ***!
  \*********************************************************************/
/*! exports provided: AngularDraggableDirective, AngularResizableDirective, AngularDraggableModule, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDraggableDirective", function() { return AngularDraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularResizableDirective", function() { return AngularResizableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDraggableModule", function() { return AngularDraggableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    Position.fromEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e instanceof MouseEvent) {
            return new Position(e.clientX, e.clientY);
        }
        else {
            return new Position(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Position.isIPosition = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return !!obj && ('x' in obj) && ('y' in obj);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Position.getCurrent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ pos = new Position(0, 0);
        if (window) {
            var /** @type {?} */ computed = window.getComputedStyle(el);
            if (computed) {
                pos.x = parseInt(computed.getPropertyValue('left'), 10);
                pos.y = parseInt(computed.getPropertyValue('top'), 10);
            }
            return pos;
        }
        else {
            console.error('Not Supported!');
            return null;
        }
    };
    /**
     * @param {?} p
     * @return {?}
     */
    Position.copy = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        return new Position(0, 0).set(p);
    };
    /**
     * @param {?} p
     * @return {?}
     */
    Position.prototype.add = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    Position.prototype.subtract = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    };
    /**
     * @return {?}
     */
    Position.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.x = 0;
        this.y = 0;
        return this;
    };
    /**
     * @param {?} p
     * @return {?}
     */
    Position.prototype.set = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        this.x = p.x;
        this.y = p.y;
        return this;
    };
    return Position;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularDraggableDirective = /** @class */ (function () {
    function AngularDraggableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.allowDrag = true;
        this.moving = false;
        this.orignal = null;
        this.oldTrans = new Position(0, 0);
        this.tempTrans = new Position(0, 0);
        this.oldZIndex = '';
        this.oldPosition = '';
        this._zIndex = '';
        this.needTransform = false;
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * List of allowed out of bounds edges *
         */
        this.outOfBounds = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        /**
         * Round the position to nearest grid
         */
        this.gridSize = 1;
        /**
         * Whether to limit the element stay in the bounds
         */
        this.inBounds = false;
        /**
         * Whether the element should use it's previous drag position on a new drag event.
         */
        this.trackPosition = true;
        /**
         * Input css scale transform of element so translations are correct
         */
        this.scale = 1;
        /**
         * Whether to prevent default event
         */
        this.preventDefaultEvent = false;
        /**
         * Set initial position by offsets
         */
        this.position = { x: 0, y: 0 };
        /**
         * Emit position offsets when moving
         */
        this.movingOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emit position offsets when put back
         */
        this.endOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AngularDraggableDirective.prototype, "zIndex", {
        /** Set z-index when not dragging */
        set: /**
         * Set z-index when not dragging
         * @param {?} setting
         * @return {?}
         */
        function (setting) {
            this.renderer.setStyle(this.el.nativeElement, 'z-index', setting);
            this._zIndex = setting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularDraggableDirective.prototype, "ngDraggable", {
        set: /**
         * @param {?} setting
         * @return {?}
         */
        function (setting) {
            if (setting !== undefined && setting !== null && setting !== '') {
                this.allowDrag = !!setting;
                var /** @type {?} */ element = this.handle ? this.handle : this.el.nativeElement;
                if (this.allowDrag) {
                    this.renderer.addClass(element, 'ng-draggable');
                }
                else {
                    this.renderer.removeClass(element, 'ng-draggable');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.allowDrag) {
            var /** @type {?} */ element = this.handle ? this.handle : this.el.nativeElement;
            this.renderer.addClass(element, 'ng-draggable');
        }
        this.resetPosition();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularDraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['position'] && !changes['position'].isFirstChange()) {
            var /** @type {?} */ p = changes['position'].currentValue;
            if (!this.moving) {
                if (Position.isIPosition(p)) {
                    this.oldTrans.set(p);
                }
                else {
                    this.oldTrans.reset();
                }
                this.transform();
            }
            else {
                this.needTransform = true;
            }
        }
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.resetPosition = /**
     * @return {?}
     */
    function () {
        if (Position.isIPosition(this.position)) {
            this.oldTrans.set(this.position);
        }
        else {
            this.oldTrans.reset();
        }
        this.tempTrans.reset();
        this.transform();
    };
    /**
     * @param {?} p
     * @return {?}
     */
    AngularDraggableDirective.prototype.moveTo = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        if (this.orignal) {
            p.subtract(this.orignal);
            this.tempTrans.set(p);
            this.transform();
            if (this.bounds) {
                this.edge.emit(this.boundsCheck());
            }
            this.movingOffset.emit({
                x: this.tempTrans.x + this.oldTrans.x,
                y: this.tempTrans.y + this.oldTrans.y
            });
        }
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.transform = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ translateX = this.tempTrans.x + this.oldTrans.x;
        var /** @type {?} */ translateY = this.tempTrans.y + this.oldTrans.y;
        // Snap to grid: by grid size
        if (this.gridSize > 1) {
            translateX = Math.round(translateX / this.gridSize) * this.gridSize;
            translateY = Math.round(translateY / this.gridSize) * this.gridSize;
        }
        var /** @type {?} */ value = "translate(" + translateX + "px, " + translateY + "px)";
        if (this.scale !== 1) {
            value += " scale(" + this.scale + ")";
        }
        this.renderer.setStyle(this.el.nativeElement, 'transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', value);
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', value);
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.pickUp = /**
     * @return {?}
     */
    function () {
        // get old z-index:
        this.oldZIndex = this.el.nativeElement.style.zIndex ? this.el.nativeElement.style.zIndex : '';
        if (window) {
            this.oldZIndex = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('z-index');
        }
        if (this.zIndexMoving) {
            this.renderer.setStyle(this.el.nativeElement, 'z-index', this.zIndexMoving);
        }
        if (!this.moving) {
            this.started.emit(this.el.nativeElement);
            this.moving = true;
        }
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.boundsCheck = /**
     * @return {?}
     */
    function () {
        if (this.bounds) {
            var /** @type {?} */ boundary = this.bounds.getBoundingClientRect();
            var /** @type {?} */ elem = this.el.nativeElement.getBoundingClientRect();
            var /** @type {?} */ result = {
                'top': this.outOfBounds.top ? true : boundary.top < elem.top,
                'right': this.outOfBounds.right ? true : boundary.right > elem.right,
                'bottom': this.outOfBounds.bottom ? true : boundary.bottom > elem.bottom,
                'left': this.outOfBounds.left ? true : boundary.left < elem.left
            };
            if (this.inBounds) {
                if (!result.top) {
                    this.tempTrans.y -= elem.top - boundary.top;
                }
                if (!result.bottom) {
                    this.tempTrans.y -= elem.bottom - boundary.bottom;
                }
                if (!result.right) {
                    this.tempTrans.x -= elem.right - boundary.right;
                }
                if (!result.left) {
                    this.tempTrans.x -= elem.left - boundary.left;
                }
                this.transform();
            }
            return result;
        }
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.putBack = /**
     * @return {?}
     */
    function () {
        if (this._zIndex) {
            this.renderer.setStyle(this.el.nativeElement, 'z-index', this._zIndex);
        }
        else if (this.zIndexMoving) {
            if (this.oldZIndex) {
                this.renderer.setStyle(this.el.nativeElement, 'z-index', this.oldZIndex);
            }
            else {
                this.el.nativeElement.style.removeProperty('z-index');
            }
        }
        if (this.moving) {
            this.stopped.emit(this.el.nativeElement);
            if (this.needTransform) {
                if (Position.isIPosition(this.position)) {
                    this.oldTrans.set(this.position);
                }
                else {
                    this.oldTrans.reset();
                }
                this.transform();
                this.needTransform = false;
            }
            if (this.bounds) {
                this.edge.emit(this.boundsCheck());
            }
            this.moving = false;
            this.endOffset.emit({
                x: this.tempTrans.x + this.oldTrans.x,
                y: this.tempTrans.y + this.oldTrans.y
            });
            if (this.trackPosition) {
                this.oldTrans.add(this.tempTrans);
            }
            this.tempTrans.reset();
            if (!this.trackPosition) {
                this.transform();
            }
        }
    };
    /**
     * @param {?} target
     * @param {?} element
     * @return {?}
     */
    AngularDraggableDirective.prototype.checkHandleTarget = /**
     * @param {?} target
     * @param {?} element
     * @return {?}
     */
    function (target, element) {
        // Checks if the target is the element clicked, then checks each child element of element as well
        // Ignores button clicks
        // Ignore elements of type button
        if (element.tagName === 'BUTTON') {
            return false;
        }
        // If the target was found, return true (handle was found)
        if (element === target) {
            return true;
        }
        // Recursively iterate this elements children
        for (var /** @type {?} */ child in element.children) {
            if (element.children.hasOwnProperty(child)) {
                if (this.checkHandleTarget(target, element.children[child])) {
                    return true;
                }
            }
        }
        // Handle was not found in this lineage
        // Note: return false is ignore unless it is the parent element
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularDraggableDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // 1. skip right click;
        if (event instanceof MouseEvent && event.button === 2) {
            return;
        }
        // 2. if handle is set, the element can only be moved by handle
        var /** @type {?} */ target = event.target || event.srcElement;
        if (this.handle !== undefined && !this.checkHandleTarget(target, this.handle)) {
            return;
        }
        if (this.preventDefaultEvent) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.orignal = Position.fromEvent(event);
        this.pickUp();
    };
    /**
     * @return {?}
     */
    AngularDraggableDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.putBack();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularDraggableDirective.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moving && this.allowDrag) {
            if (this.preventDefaultEvent) {
                event.stopPropagation();
                event.preventDefault();
            }
            this.moveTo(Position.fromEvent(event));
        }
    };
    AngularDraggableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngDraggable]',
                    exportAs: 'ngDraggable'
                },] },
    ];
    /** @nocollapse */
    AngularDraggableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    AngularDraggableDirective.propDecorators = {
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        stopped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        edge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outOfBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        gridSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zIndexMoving: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trackPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        preventDefaultEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        movingOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        endOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ngDraggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchcancel',] }],
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }]
    };
    return AngularDraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResizeHandle = /** @class */ (function () {
    function ResizeHandle(parent, renderer, type, css, onMouseDown) {
        var _this = this;
        this.parent = parent;
        this.renderer = renderer;
        this.type = type;
        this.css = css;
        this.onMouseDown = onMouseDown;
        // generate handle div
        var /** @type {?} */ handle = renderer.createElement('div');
        renderer.addClass(handle, 'ng-resizable-handle');
        renderer.addClass(handle, css);
        // add default diagonal for se handle
        if (type === 'se') {
            renderer.addClass(handle, 'ng-resizable-diagonal');
        }
        // append div to parent
        if (this.parent) {
            parent.appendChild(handle);
        }
        // create and register event listener
        this._onResize = function (event) { onMouseDown(event, _this); };
        handle.addEventListener('mousedown', this._onResize);
        handle.addEventListener('touchstart', this._onResize);
        // done
        this._handle = handle;
    }
    /**
     * @return {?}
     */
    ResizeHandle.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._handle.removeEventListener('mousedown', this._onResize);
        this._handle.removeEventListener('touchstart', this._onResize);
        if (this.parent) {
            this.parent.removeChild(this._handle);
        }
        this._handle = null;
        this._onResize = null;
    };
    Object.defineProperty(ResizeHandle.prototype, "el", {
        get: /**
         * @return {?}
         */
        function () {
            return this._handle;
        },
        enumerable: true,
        configurable: true
    });
    return ResizeHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    Size.getCurrent = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ size = new Size(0, 0);
        if (window) {
            var /** @type {?} */ computed = window.getComputedStyle(el);
            if (computed) {
                size.width = parseInt(computed.getPropertyValue('width'), 10);
                size.height = parseInt(computed.getPropertyValue('height'), 10);
            }
            return size;
        }
        else {
            console.error('Not Supported!');
            return null;
        }
    };
    /**
     * @param {?} s
     * @return {?}
     */
    Size.copy = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        return new Size(0, 0).set(s);
    };
    /**
     * @param {?} s
     * @return {?}
     */
    Size.prototype.set = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        this.width = s.width;
        this.height = s.height;
        return this;
    };
    return Size;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularResizableDirective = /** @class */ (function () {
    function AngularResizableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._resizable = true;
        this._handles = {};
        this._handleType = [];
        this._handleResizing = null;
        this._aspectRatio = 0;
        this._containment = null;
        this._origMousePos = null;
        /**
         * Original Size and Position
         */
        this._origSize = null;
        this._origPos = null;
        /**
         * Current Size and Position
         */
        this._currSize = null;
        this._currPos = null;
        /**
         * Initial Size and Position
         */
        this._initSize = null;
        this._initPos = null;
        this._bounding = null;
        /**
         * Which handles can be used for resizing.
         * \@example
         * [rzHandles] = "'n,e,s,w,se,ne,sw,nw'"
         * equals to: [rzHandles] = "'all'"
         *
         *
         */
        this.rzHandles = 'e,s,se';
        /**
         * Whether the element should be constrained to a specific aspect ratio.
         *  Multiple types supported:
         *  boolean: When set to true, the element will maintain its original aspect ratio.
         *  number: Force the element to maintain a specific aspect ratio during resizing.
         */
        this.rzAspectRatio = false;
        /**
         * Constrains resizing to within the bounds of the specified element or region.
         *  Multiple types supported:
         *  Selector: The resizable element will be contained to the bounding box of the first element found by the selector.
         *            If no element is found, no containment will be set.
         *  Element: The resizable element will be contained to the bounding box of this element.
         *  String: Possible values: "parent".
         */
        this.rzContainment = null;
        /**
         * emitted when start resizing
         */
        this.rzStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emitted when start resizing
         */
        this.rzResizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emitted when stop resizing
         */
        this.rzStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AngularResizableDirective.prototype, "ngResizable", {
        /** Disables the resizable if set to false. */
        set: /**
         * Disables the resizable if set to false.
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== undefined && v !== null && v !== '') {
                this._resizable = !!v;
                this.updateResizable();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularResizableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['rzHandles'] && !changes['rzHandles'].isFirstChange()) {
            this.updateResizable();
        }
        if (changes['rzAspectRatio'] && !changes['rzAspectRatio'].isFirstChange()) {
            this.updateAspectRatio();
        }
        if (changes['rzContainment'] && !changes['rzContainment'].isFirstChange()) {
            this.updateContainment();
        }
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateResizable();
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeHandles();
        this._containment = null;
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elm = this.el.nativeElement;
        this._initSize = Size.getCurrent(elm);
        this._initPos = Position.getCurrent(elm);
        this._currSize = Size.copy(this._initSize);
        this._currPos = Position.copy(this._initPos);
        this.updateAspectRatio();
        this.updateContainment();
    };
    /**
     * A method to reset size
     * @return {?}
     */
    AngularResizableDirective.prototype.resetSize = /**
     * A method to reset size
     * @return {?}
     */
    function () {
        this._currSize = Size.copy(this._initSize);
        this._currPos = Position.copy(this._initPos);
        this.doResize();
    };
    /**
     * A method to get current status
     * @return {?}
     */
    AngularResizableDirective.prototype.getStatus = /**
     * A method to get current status
     * @return {?}
     */
    function () {
        if (!this._currPos || !this._currSize) {
            return null;
        }
        return {
            size: {
                width: this._currSize.width,
                height: this._currSize.height
            },
            position: {
                top: this._currPos.y,
                left: this._currPos.x
            }
        };
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.updateResizable = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this.el.nativeElement;
        // clear handles:
        this.renderer.removeClass(element, 'ng-resizable');
        this.removeHandles();
        // create new ones:
        if (this._resizable) {
            this.renderer.addClass(element, 'ng-resizable');
            this.createHandles();
        }
    };
    /**
     * Use it to update aspect
     * @return {?}
     */
    AngularResizableDirective.prototype.updateAspectRatio = /**
     * Use it to update aspect
     * @return {?}
     */
    function () {
        if (typeof this.rzAspectRatio === 'boolean') {
            if (this.rzAspectRatio && this._currSize.height) {
                this._aspectRatio = (this._currSize.width / this._currSize.height);
            }
            else {
                this._aspectRatio = 0;
            }
        }
        else {
            var /** @type {?} */ r = Number(this.rzAspectRatio);
            this._aspectRatio = isNaN(r) ? 0 : r;
        }
    };
    /**
     * Use it to update containment
     * @return {?}
     */
    AngularResizableDirective.prototype.updateContainment = /**
     * Use it to update containment
     * @return {?}
     */
    function () {
        if (!this.rzContainment) {
            this._containment = null;
            return;
        }
        if (typeof this.rzContainment === 'string') {
            if (this.rzContainment === 'parent') {
                this._containment = this.el.nativeElement.parentElement;
            }
            else {
                this._containment = document.querySelector(this.rzContainment);
            }
        }
        else {
            this._containment = this.rzContainment;
        }
    };
    /**
     * Use it to create handle divs
     * @return {?}
     */
    AngularResizableDirective.prototype.createHandles = /**
     * Use it to create handle divs
     * @return {?}
     */
    function () {
        if (!this.rzHandles) {
            return;
        }
        var /** @type {?} */ tmpHandleTypes;
        if (typeof this.rzHandles === 'string') {
            if (this.rzHandles === 'all') {
                tmpHandleTypes = ['n', 'e', 's', 'w', 'ne', 'se', 'nw', 'sw'];
            }
            else {
                tmpHandleTypes = this.rzHandles.replace(/ /g, '').toLowerCase().split(',');
            }
            try {
                for (var tmpHandleTypes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(tmpHandleTypes), tmpHandleTypes_1_1 = tmpHandleTypes_1.next(); !tmpHandleTypes_1_1.done; tmpHandleTypes_1_1 = tmpHandleTypes_1.next()) {
                    var type = tmpHandleTypes_1_1.value;
                    // default handle theme: ng-resizable-$type.
                    var /** @type {?} */ handle = this.createHandleByType(type, "ng-resizable-" + type);
                    if (handle) {
                        this._handleType.push(type);
                        this._handles[type] = handle;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tmpHandleTypes_1_1 && !tmpHandleTypes_1_1.done && (_a = tmpHandleTypes_1.return)) _a.call(tmpHandleTypes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            tmpHandleTypes = Object.keys(this.rzHandles);
            try {
                for (var tmpHandleTypes_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(tmpHandleTypes), tmpHandleTypes_2_1 = tmpHandleTypes_2.next(); !tmpHandleTypes_2_1.done; tmpHandleTypes_2_1 = tmpHandleTypes_2.next()) {
                    var type = tmpHandleTypes_2_1.value;
                    // custom handle theme.
                    var /** @type {?} */ handle = this.createHandleByType(type, this.rzHandles[type]);
                    if (handle) {
                        this._handleType.push(type);
                        this._handles[type] = handle;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (tmpHandleTypes_2_1 && !tmpHandleTypes_2_1.done && (_b = tmpHandleTypes_2.return)) _b.call(tmpHandleTypes_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var e_1, _a, e_2, _b;
    };
    /**
     * Use it to create a handle
     * @param {?} type
     * @param {?} css
     * @return {?}
     */
    AngularResizableDirective.prototype.createHandleByType = /**
     * Use it to create a handle
     * @param {?} type
     * @param {?} css
     * @return {?}
     */
    function (type, css) {
        var /** @type {?} */ _el = this.el.nativeElement;
        if (!type.match(/^(se|sw|ne|nw|n|e|s|w)$/)) {
            console.error('Invalid handle type:', type);
            return null;
        }
        return new ResizeHandle(_el, this.renderer, type, css, this.onMouseDown.bind(this));
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.removeHandles = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this._handleType), _b = _a.next(); !_b.done; _b = _a.next()) {
                var type = _b.value;
                this._handles[type].dispose();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this._handleType = [];
        this._handles = {};
        var e_3, _c;
    };
    /**
     * @param {?} event
     * @param {?} handle
     * @return {?}
     */
    AngularResizableDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @param {?} handle
     * @return {?}
     */
    function (event, handle) {
        // skip right click;
        if (event instanceof MouseEvent && event.button === 2) {
            return;
        }
        // prevent default events
        event.stopPropagation();
        event.preventDefault();
        if (!this._handleResizing) {
            var /** @type {?} */ elm = this.el.nativeElement;
            this._origMousePos = Position.fromEvent(event);
            this._origSize = Size.getCurrent(elm);
            this._origPos = Position.getCurrent(elm); // x: left, y: top
            this._currSize = Size.copy(this._origSize);
            this._currPos = Position.copy(this._origPos);
            if (this._containment) {
                this.getBounding();
            }
            this.startResize(handle);
        }
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this._handleResizing) {
            this.stopResize();
            this._origMousePos = null;
            this._origSize = null;
            this._origPos = null;
            if (this._containment) {
                this.resetBounding();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularResizableDirective.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._handleResizing && this._resizable && this._origMousePos && this._origPos && this._origSize) {
            this.resizeTo(Position.fromEvent(event));
            this.onResizing();
        }
    };
    /**
     * @param {?} handle
     * @return {?}
     */
    AngularResizableDirective.prototype.startResize = /**
     * @param {?} handle
     * @return {?}
     */
    function (handle) {
        this._handleResizing = handle;
        this.rzStart.emit(this.getResizingEvent());
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.stopResize = /**
     * @return {?}
     */
    function () {
        this.rzStop.emit(this.getResizingEvent());
        this._handleResizing = null;
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.onResizing = /**
     * @return {?}
     */
    function () {
        this.rzResizing.emit(this.getResizingEvent());
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.getResizingEvent = /**
     * @return {?}
     */
    function () {
        return {
            host: this.el.nativeElement,
            handle: this._handleResizing ? this._handleResizing.el : null,
            size: {
                width: this._currSize.width,
                height: this._currSize.height
            },
            position: {
                top: this._currPos.y,
                left: this._currPos.x
            }
        };
    };
    /**
     * @param {?} p
     * @return {?}
     */
    AngularResizableDirective.prototype.resizeTo = /**
     * @param {?} p
     * @return {?}
     */
    function (p) {
        p.subtract(this._origMousePos);
        if (this._handleResizing.type.match(/n/)) {
            // n, ne, nw
            this._currPos.y = this._origPos.y + p.y;
            this._currSize.height = this._origSize.height - p.y;
            // check bounds
            if (this._containment) {
                if (this._currPos.y < 0) {
                    this._currPos.y = 0;
                    this._currSize.height = this._origSize.height + this._origPos.y;
                }
            }
            if (this._currSize.height < 1) {
                this._currSize.height = 1;
                this._currPos.y = this._origPos.y + (this._origSize.height - 1);
            }
            // aspect ratio
            this.adjustByRatio('h');
        }
        else if (this._handleResizing.type.match(/s/)) {
            // s, se, sw
            this._currSize.height = this._origSize.height + p.y;
            // aspect ratio
            this.adjustByRatio('h');
        }
        if (this._handleResizing.type.match(/e/)) {
            // e, ne, se
            this._currSize.width = this._origSize.width + p.x;
            // aspect ratio
            this.adjustByRatio('w');
        }
        else if (this._handleResizing.type.match(/w/)) {
            // w, nw, sw
            this._currSize.width = this._origSize.width - p.x;
            this._currPos.x = this._origPos.x + p.x;
            // check bounds
            if (this._containment) {
                if (this._currPos.x < 0) {
                    this._currPos.x = 0;
                    this._currSize.width = this._origSize.width + this._origPos.x;
                }
            }
            if (this._currSize.width < 1) {
                this._currSize.width = 1;
                this._currPos.x = this._origPos.x + (this._origSize.width - 1);
            }
            // aspect ratio
            this.adjustByRatio('w');
        }
        this.checkBounds();
        this.doResize();
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.doResize = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = this.el.nativeElement;
        this.renderer.setStyle(container, 'height', this._currSize.height + 'px');
        this.renderer.setStyle(container, 'width', this._currSize.width + 'px');
        this.renderer.setStyle(container, 'left', this._currPos.x + 'px');
        this.renderer.setStyle(container, 'top', this._currPos.y + 'px');
    };
    /**
     * @param {?} d
     * @return {?}
     */
    AngularResizableDirective.prototype.adjustByRatio = /**
     * @param {?} d
     * @return {?}
     */
    function (d) {
        if (this._aspectRatio) {
            if (d === 'w') {
                this._currSize.height = this._currSize.width / this._aspectRatio;
            }
            else {
                this._currSize.width = this._aspectRatio * this._currSize.height;
            }
        }
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.checkBounds = /**
     * @return {?}
     */
    function () {
        if (this._containment) {
            var /** @type {?} */ container = this._containment;
            var /** @type {?} */ maxWidth = this._bounding.width - this._bounding.pr - this.el.nativeElement.offsetLeft;
            var /** @type {?} */ maxHeight = this._bounding.height - this._bounding.pb - this.el.nativeElement.offsetTop;
            if (this._currSize.width > maxWidth) {
                this._currSize.width = maxWidth;
            }
            if (this._currSize.height > maxHeight) {
                this._currSize.height = maxHeight;
            }
        }
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.getBounding = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ el = this._containment;
        var /** @type {?} */ computed = window.getComputedStyle(el);
        if (computed) {
            var /** @type {?} */ p = computed.getPropertyValue('position');
            this._bounding = {};
            this._bounding.width = el.clientWidth;
            this._bounding.height = el.clientHeight;
            this._bounding.pr = parseInt(computed.getPropertyValue('padding-right'), 10);
            this._bounding.pb = parseInt(computed.getPropertyValue('padding-bottom'), 10);
            this._bounding.position = computed.getPropertyValue('position');
            if (p === 'static') {
                this.renderer.setStyle(el, 'position', 'relative');
            }
        }
    };
    /**
     * @return {?}
     */
    AngularResizableDirective.prototype.resetBounding = /**
     * @return {?}
     */
    function () {
        if (this._bounding && this._bounding.position === 'static') {
            this.renderer.setStyle(this._containment, 'position', 'relative');
        }
        this._bounding = null;
    };
    AngularResizableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngResizable]',
                    exportAs: 'ngResizable'
                },] },
    ];
    /** @nocollapse */
    AngularResizableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    AngularResizableDirective.propDecorators = {
        ngResizable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rzHandles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rzAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rzContainment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rzStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rzResizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rzStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchcancel',] }],
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }]
    };
    return AngularResizableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularDraggableModule = /** @class */ (function () {
    function AngularDraggableModule() {
    }
    AngularDraggableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        AngularDraggableDirective,
                        AngularResizableDirective
                    ],
                    exports: [
                        AngularDraggableDirective,
                        AngularResizableDirective
                    ]
                },] },
    ];
    return AngularDraggableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItZHJhZ2dhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyMi1kcmFnZ2FibGUvbGliL21vZGVscy9wb3NpdGlvbi50cyIsIm5nOi8vYW5ndWxhcjItZHJhZ2dhYmxlL2xpYi9hbmd1bGFyLWRyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXIyLWRyYWdnYWJsZS9saWIvd2lkZ2V0cy9yZXNpemUtaGFuZGxlLnRzIiwibmc6Ly9hbmd1bGFyMi1kcmFnZ2FibGUvbGliL21vZGVscy9zaXplLnRzIiwibmc6Ly9hbmd1bGFyMi1kcmFnZ2FibGUvbGliL2FuZ3VsYXItcmVzaXphYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhcjItZHJhZ2dhYmxlL2xpYi9hbmd1bGFyLWRyYWdnYWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJUG9zaXRpb24ge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiBpbXBsZW1lbnRzIElQb3NpdGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikgeyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRXZlbnQoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzSVBvc2l0aW9uKG9iaik6IG9iaiBpcyBJUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuICEhb2JqICYmICgneCcgaW4gb2JqKSAmJiAoJ3knIGluIG9iaik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q3VycmVudChlbDogRWxlbWVudCkge1xyXG4gICAgbGV0IHBvcyA9IG5ldyBQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgICBpZiAoY29tcHV0ZWQpIHtcclxuICAgICAgICBwb3MueCA9IHBhcnNlSW50KGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoJ2xlZnQnKSwgMTApO1xyXG4gICAgICAgIHBvcy55ID0gcGFyc2VJbnQoY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJyksIDEwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTm90IFN1cHBvcnRlZCEnKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29weShwOiBQb3NpdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBQb3NpdGlvbigwLCAwKS5zZXQocCk7XHJcbiAgfVxyXG5cclxuICBhZGQocDogSVBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLnggKz0gcC54O1xyXG4gICAgdGhpcy55ICs9IHAueTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3VidHJhY3QocDogSVBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLnggLT0gcC54O1xyXG4gICAgdGhpcy55IC09IHAueTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0KHA6IElQb3NpdGlvbikge1xyXG4gICAgdGhpcy54ID0gcC54O1xyXG4gICAgdGhpcy55ID0gcC55O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsXHJcbiAgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsXHJcbiAgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElQb3NpdGlvbiwgUG9zaXRpb24gfSBmcm9tICcuL21vZGVscy9wb3NpdGlvbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ0RyYWdnYWJsZV0nLFxyXG4gIGV4cG9ydEFzOiAnbmdEcmFnZ2FibGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgYWxsb3dEcmFnID0gdHJ1ZTtcclxuICBwcml2YXRlIG1vdmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgb3JpZ25hbDogUG9zaXRpb24gPSBudWxsO1xyXG4gIHByaXZhdGUgb2xkVHJhbnMgPSBuZXcgUG9zaXRpb24oMCwgMCk7XHJcbiAgcHJpdmF0ZSB0ZW1wVHJhbnMgPSBuZXcgUG9zaXRpb24oMCwgMCk7XHJcbiAgcHJpdmF0ZSBvbGRaSW5kZXggPSAnJztcclxuICBwcml2YXRlIG9sZFBvc2l0aW9uID0gJyc7XHJcbiAgcHJpdmF0ZSBfekluZGV4ID0gJyc7XHJcbiAgcHJpdmF0ZSBuZWVkVHJhbnNmb3JtID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBzdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHN0b3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZWRnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogTWFrZSB0aGUgaGFuZGxlIEhUTUxFbGVtZW50IGRyYWdnYWJsZSAqL1xyXG4gIEBJbnB1dCgpIGhhbmRsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBTZXQgdGhlIGJvdW5kcyBIVE1MRWxlbWVudCAqL1xyXG4gIEBJbnB1dCgpIGJvdW5kczogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBMaXN0IG9mIGFsbG93ZWQgb3V0IG9mIGJvdW5kcyBlZGdlcyAqKi9cclxuICBASW5wdXQoKSBvdXRPZkJvdW5kcyA9IHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBib3R0b206IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2VcclxuICB9O1xyXG5cclxuICAvKiogUm91bmQgdGhlIHBvc2l0aW9uIHRvIG5lYXJlc3QgZ3JpZCAqL1xyXG4gIEBJbnB1dCgpIGdyaWRTaXplID0gMTtcclxuXHJcbiAgLyoqIFNldCB6LWluZGV4IHdoZW4gZHJhZ2dpbmcgKi9cclxuICBASW5wdXQoKSB6SW5kZXhNb3Zpbmc6IHN0cmluZztcclxuXHJcbiAgLyoqIFNldCB6LWluZGV4IHdoZW4gbm90IGRyYWdnaW5nICovXHJcbiAgQElucHV0KCkgc2V0IHpJbmRleChzZXR0aW5nOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIHNldHRpbmcpO1xyXG4gICAgdGhpcy5fekluZGV4ID0gc2V0dGluZztcclxuICB9XHJcbiAgLyoqIFdoZXRoZXIgdG8gbGltaXQgdGhlIGVsZW1lbnQgc3RheSBpbiB0aGUgYm91bmRzICovXHJcbiAgQElucHV0KCkgaW5Cb3VuZHMgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIHVzZSBpdCdzIHByZXZpb3VzIGRyYWcgcG9zaXRpb24gb24gYSBuZXcgZHJhZyBldmVudC4gKi9cclxuICBASW5wdXQoKSB0cmFja1Bvc2l0aW9uID0gdHJ1ZTtcclxuXHJcbiAgLyoqIElucHV0IGNzcyBzY2FsZSB0cmFuc2Zvcm0gb2YgZWxlbWVudCBzbyB0cmFuc2xhdGlvbnMgYXJlIGNvcnJlY3QgKi9cclxuICBASW5wdXQoKSBzY2FsZSA9IDE7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIHByZXZlbnQgZGVmYXVsdCBldmVudCAqL1xyXG4gIEBJbnB1dCgpIHByZXZlbnREZWZhdWx0RXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFNldCBpbml0aWFsIHBvc2l0aW9uIGJ5IG9mZnNldHMgKi9cclxuICBASW5wdXQoKSBwb3NpdGlvbjogSVBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gIC8qKiBFbWl0IHBvc2l0aW9uIG9mZnNldHMgd2hlbiBtb3ZpbmcgKi9cclxuICBAT3V0cHV0KCkgbW92aW5nT2Zmc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjxJUG9zaXRpb24+KCk7XHJcblxyXG4gIC8qKiBFbWl0IHBvc2l0aW9uIG9mZnNldHMgd2hlbiBwdXQgYmFjayAqL1xyXG4gIEBPdXRwdXQoKSBlbmRPZmZzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPElQb3NpdGlvbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdEcmFnZ2FibGUoc2V0dGluZzogYW55KSB7XHJcbiAgICBpZiAoc2V0dGluZyAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmcgIT09IG51bGwgJiYgc2V0dGluZyAhPT0gJycpIHtcclxuICAgICAgdGhpcy5hbGxvd0RyYWcgPSAhIXNldHRpbmc7XHJcblxyXG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuaGFuZGxlID8gdGhpcy5oYW5kbGUgOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5hbGxvd0RyYWcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICduZy1kcmFnZ2FibGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsICduZy1kcmFnZ2FibGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxvd0RyYWcpIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmhhbmRsZSA/IHRoaXMuaGFuZGxlIDogdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICduZy1kcmFnZ2FibGUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzWydwb3NpdGlvbiddICYmICFjaGFuZ2VzWydwb3NpdGlvbiddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICBsZXQgcCA9IGNoYW5nZXNbJ3Bvc2l0aW9uJ10uY3VycmVudFZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgIGlmIChQb3NpdGlvbi5pc0lQb3NpdGlvbihwKSkge1xyXG4gICAgICAgICAgdGhpcy5vbGRUcmFucy5zZXQocCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub2xkVHJhbnMucmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uZWVkVHJhbnNmb3JtID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRQb3NpdGlvbigpIHtcclxuICAgIGlmIChQb3NpdGlvbi5pc0lQb3NpdGlvbih0aGlzLnBvc2l0aW9uKSkge1xyXG4gICAgICB0aGlzLm9sZFRyYW5zLnNldCh0aGlzLnBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub2xkVHJhbnMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGVtcFRyYW5zLnJlc2V0KCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG8ocDogUG9zaXRpb24pIHtcclxuICAgIGlmICh0aGlzLm9yaWduYWwpIHtcclxuICAgICAgcC5zdWJ0cmFjdCh0aGlzLm9yaWduYWwpO1xyXG4gICAgICB0aGlzLnRlbXBUcmFucy5zZXQocCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5ib3VuZHMpIHtcclxuICAgICAgICB0aGlzLmVkZ2UuZW1pdCh0aGlzLmJvdW5kc0NoZWNrKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1vdmluZ09mZnNldC5lbWl0KHtcclxuICAgICAgICB4OiB0aGlzLnRlbXBUcmFucy54ICsgdGhpcy5vbGRUcmFucy54LFxyXG4gICAgICAgIHk6IHRoaXMudGVtcFRyYW5zLnkgKyB0aGlzLm9sZFRyYW5zLnlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zZm9ybSgpIHtcclxuXHJcbiAgICBsZXQgdHJhbnNsYXRlWCA9IHRoaXMudGVtcFRyYW5zLnggKyB0aGlzLm9sZFRyYW5zLng7XHJcbiAgICBsZXQgdHJhbnNsYXRlWSA9IHRoaXMudGVtcFRyYW5zLnkgKyB0aGlzLm9sZFRyYW5zLnk7XHJcblxyXG4gICAgLy8gU25hcCB0byBncmlkOiBieSBncmlkIHNpemVcclxuICAgIGlmICh0aGlzLmdyaWRTaXplID4gMSkge1xyXG4gICAgICB0cmFuc2xhdGVYID0gTWF0aC5yb3VuZCh0cmFuc2xhdGVYIC8gdGhpcy5ncmlkU2l6ZSkgKiB0aGlzLmdyaWRTaXplO1xyXG4gICAgICB0cmFuc2xhdGVZID0gTWF0aC5yb3VuZCh0cmFuc2xhdGVZIC8gdGhpcy5ncmlkU2l6ZSkgKiB0aGlzLmdyaWRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpYDtcclxuXHJcbiAgICBpZiAodGhpcy5zY2FsZSAhPT0gMSkge1xyXG4gICAgICB2YWx1ZSArPSBgIHNjYWxlKCR7dGhpcy5zY2FsZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHZhbHVlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC10cmFuc2Zvcm0nLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy1tcy10cmFuc2Zvcm0nLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy1tb3otdHJhbnNmb3JtJywgdmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICctby10cmFuc2Zvcm0nLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBpY2tVcCgpIHtcclxuICAgIC8vIGdldCBvbGQgei1pbmRleDpcclxuICAgIHRoaXMub2xkWkluZGV4ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggOiAnJztcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHRoaXMub2xkWkluZGV4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuekluZGV4TW92aW5nKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIHRoaXMuekluZGV4TW92aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRlZC5lbWl0KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJvdW5kc0NoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgIGxldCBib3VuZGFyeSA9IHRoaXMuYm91bmRzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAndG9wJzogdGhpcy5vdXRPZkJvdW5kcy50b3AgPyB0cnVlIDogYm91bmRhcnkudG9wIDwgZWxlbS50b3AsXHJcbiAgICAgICAgJ3JpZ2h0JzogdGhpcy5vdXRPZkJvdW5kcy5yaWdodCA/IHRydWUgOiBib3VuZGFyeS5yaWdodCA+IGVsZW0ucmlnaHQsXHJcbiAgICAgICAgJ2JvdHRvbSc6IHRoaXMub3V0T2ZCb3VuZHMuYm90dG9tID8gdHJ1ZSA6IGJvdW5kYXJ5LmJvdHRvbSA+IGVsZW0uYm90dG9tLFxyXG4gICAgICAgICdsZWZ0JzogdGhpcy5vdXRPZkJvdW5kcy5sZWZ0ID8gdHJ1ZSA6IGJvdW5kYXJ5LmxlZnQgPCBlbGVtLmxlZnRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmluQm91bmRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudG9wKSB7XHJcbiAgICAgICAgICB0aGlzLnRlbXBUcmFucy55IC09IGVsZW0udG9wIC0gYm91bmRhcnkudG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuYm90dG9tKSB7XHJcbiAgICAgICAgICB0aGlzLnRlbXBUcmFucy55IC09IGVsZW0uYm90dG9tIC0gYm91bmRhcnkuYm90dG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQucmlnaHQpIHtcclxuICAgICAgICAgIHRoaXMudGVtcFRyYW5zLnggLT0gZWxlbS5yaWdodCAtIGJvdW5kYXJ5LnJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQubGVmdCkge1xyXG4gICAgICAgICAgdGhpcy50ZW1wVHJhbnMueCAtPSBlbGVtLmxlZnQgLSBib3VuZGFyeS5sZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHV0QmFjaygpIHtcclxuICAgIGlmICh0aGlzLl96SW5kZXgpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgdGhpcy5fekluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy56SW5kZXhNb3ZpbmcpIHtcclxuICAgICAgaWYgKHRoaXMub2xkWkluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgdGhpcy5vbGRaSW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuc3RvcHBlZC5lbWl0KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5uZWVkVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgaWYgKFBvc2l0aW9uLmlzSVBvc2l0aW9uKHRoaXMucG9zaXRpb24pKSB7XHJcbiAgICAgICAgICB0aGlzLm9sZFRyYW5zLnNldCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vbGRUcmFucy5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICB0aGlzLm5lZWRUcmFuc2Zvcm0gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgdGhpcy5lZGdlLmVtaXQodGhpcy5ib3VuZHNDaGVjaygpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQuZW1pdCh7XHJcbiAgICAgICAgeDogdGhpcy50ZW1wVHJhbnMueCArIHRoaXMub2xkVHJhbnMueCxcclxuICAgICAgICB5OiB0aGlzLnRlbXBUcmFucy55ICsgdGhpcy5vbGRUcmFucy55XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMudHJhY2tQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMub2xkVHJhbnMuYWRkKHRoaXMudGVtcFRyYW5zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50ZW1wVHJhbnMucmVzZXQoKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy50cmFja1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tIYW5kbGVUYXJnZXQodGFyZ2V0OiBFdmVudFRhcmdldCwgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgY2xpY2tlZCwgdGhlbiBjaGVja3MgZWFjaCBjaGlsZCBlbGVtZW50IG9mIGVsZW1lbnQgYXMgd2VsbFxyXG4gICAgLy8gSWdub3JlcyBidXR0b24gY2xpY2tzXHJcblxyXG4gICAgLy8gSWdub3JlIGVsZW1lbnRzIG9mIHR5cGUgYnV0dG9uXHJcbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIHRhcmdldCB3YXMgZm91bmQsIHJldHVybiB0cnVlIChoYW5kbGUgd2FzIGZvdW5kKVxyXG4gICAgaWYgKGVsZW1lbnQgPT09IHRhcmdldCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWN1cnNpdmVseSBpdGVyYXRlIHRoaXMgZWxlbWVudHMgY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGNoaWxkIGluIGVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4uaGFzT3duUHJvcGVydHkoY2hpbGQpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tIYW5kbGVUYXJnZXQodGFyZ2V0LCBlbGVtZW50LmNoaWxkcmVuW2NoaWxkXSkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSB3YXMgbm90IGZvdW5kIGluIHRoaXMgbGluZWFnZVxyXG4gICAgLy8gTm90ZTogcmV0dXJuIGZhbHNlIGlzIGlnbm9yZSB1bmxlc3MgaXQgaXMgdGhlIHBhcmVudCBlbGVtZW50XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xyXG4gICAgLy8gMS4gc2tpcCByaWdodCBjbGljaztcclxuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZXZlbnQuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIDIuIGlmIGhhbmRsZSBpcyBzZXQsIHRoZSBlbGVtZW50IGNhbiBvbmx5IGJlIG1vdmVkIGJ5IGhhbmRsZVxyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuY2hlY2tIYW5kbGVUYXJnZXQodGFyZ2V0LCB0aGlzLmhhbmRsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByZXZlbnREZWZhdWx0RXZlbnQpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmlnbmFsID0gUG9zaXRpb24uZnJvbUV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMucGlja1VwKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJylcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWxlYXZlJylcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGVuZCcpXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hjYW5jZWwnKVxyXG4gIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMucHV0QmFjaygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaG1vdmUnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nICYmIHRoaXMuYWxsb3dEcmFnKSB7XHJcbiAgICAgIGlmICh0aGlzLnByZXZlbnREZWZhdWx0RXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1vdmVUbyhQb3NpdGlvbi5mcm9tRXZlbnQoZXZlbnQpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzaXplSGFuZGxlIHtcclxuICBwcm90ZWN0ZWQgX2hhbmRsZTogRWxlbWVudDtcclxuICBwcml2YXRlIF9vblJlc2l6ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBFbGVtZW50LFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGNzczogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBvbk1vdXNlRG93bjogYW55XHJcbiAgKSB7XHJcbiAgICAvLyBnZW5lcmF0ZSBoYW5kbGUgZGl2XHJcbiAgICBsZXQgaGFuZGxlID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhoYW5kbGUsICduZy1yZXNpemFibGUtaGFuZGxlJyk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhoYW5kbGUsIGNzcyk7XHJcblxyXG4gICAgLy8gYWRkIGRlZmF1bHQgZGlhZ29uYWwgZm9yIHNlIGhhbmRsZVxyXG4gICAgaWYgKHR5cGUgPT09ICdzZScpIHtcclxuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoaGFuZGxlLCAnbmctcmVzaXphYmxlLWRpYWdvbmFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXBwZW5kIGRpdiB0byBwYXJlbnRcclxuICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgYW5kIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyXHJcbiAgICB0aGlzLl9vblJlc2l6ZSA9IChldmVudCkgPT4geyBvbk1vdXNlRG93bihldmVudCwgdGhpcyk7IH07XHJcbiAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fb25SZXNpemUpO1xyXG4gICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblJlc2l6ZSk7XHJcblxyXG4gICAgLy8gZG9uZVxyXG4gICAgdGhpcy5faGFuZGxlID0gaGFuZGxlO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMuX2hhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vblJlc2l6ZSk7XHJcbiAgICB0aGlzLl9oYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uUmVzaXplKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5faGFuZGxlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hhbmRsZSA9IG51bGw7XHJcbiAgICB0aGlzLl9vblJlc2l6ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElTaXplIHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2l6ZSBpbXBsZW1lbnRzIElTaXplIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIGhlaWdodDogbnVtYmVyKSB7IH1cclxuXHJcbiAgc3RhdGljIGdldEN1cnJlbnQoZWw6IEVsZW1lbnQpIHtcclxuICAgIGxldCBzaXplID0gbmV3IFNpemUoMCwgMCk7XHJcblxyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgaWYgKGNvbXB1dGVkKSB7XHJcbiAgICAgICAgc2l6ZS53aWR0aCA9IHBhcnNlSW50KGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyksIDEwKTtcclxuICAgICAgICBzaXplLmhlaWdodCA9IHBhcnNlSW50KGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLCAxMCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdOb3QgU3VwcG9ydGVkIScpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb3B5KHM6IFNpemUpIHtcclxuICAgIHJldHVybiBuZXcgU2l6ZSgwLCAwKS5zZXQocyk7XHJcbiAgfVxyXG5cclxuICBzZXQoczogSVNpemUpIHtcclxuICAgIHRoaXMud2lkdGggPSBzLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBzLmhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLFxyXG4gIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVzaXplSGFuZGxlIH0gZnJvbSAnLi93aWRnZXRzL3Jlc2l6ZS1oYW5kbGUnO1xyXG5pbXBvcnQgeyBSZXNpemVIYW5kbGVUeXBlIH0gZnJvbSAnLi9tb2RlbHMvcmVzaXplLWhhbmRsZS10eXBlJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL21vZGVscy9wb3NpdGlvbic7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuL21vZGVscy9zaXplJztcclxuaW1wb3J0IHsgSVJlc2l6ZUV2ZW50IH0gZnJvbSAnLi9tb2RlbHMvcmVzaXplLWV2ZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nUmVzaXphYmxlXScsXHJcbiAgZXhwb3J0QXM6ICduZ1Jlc2l6YWJsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIF9yZXNpemFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2hhbmRsZXM6IHsgW2tleTogc3RyaW5nXTogUmVzaXplSGFuZGxlIH0gPSB7fTtcclxuICBwcml2YXRlIF9oYW5kbGVUeXBlOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2hhbmRsZVJlc2l6aW5nOiBSZXNpemVIYW5kbGUgPSBudWxsO1xyXG4gIHByaXZhdGUgX2FzcGVjdFJhdGlvID0gMDtcclxuICBwcml2YXRlIF9jb250YWlubWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIHByaXZhdGUgX29yaWdNb3VzZVBvczogUG9zaXRpb24gPSBudWxsO1xyXG5cclxuICAvKiogT3JpZ2luYWwgU2l6ZSBhbmQgUG9zaXRpb24gKi9cclxuICBwcml2YXRlIF9vcmlnU2l6ZTogU2l6ZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfb3JpZ1BvczogUG9zaXRpb24gPSBudWxsO1xyXG5cclxuICAvKiogQ3VycmVudCBTaXplIGFuZCBQb3NpdGlvbiAqL1xyXG4gIHByaXZhdGUgX2N1cnJTaXplOiBTaXplID0gbnVsbDtcclxuICBwcml2YXRlIF9jdXJyUG9zOiBQb3NpdGlvbiA9IG51bGw7XHJcblxyXG4gIC8qKiBJbml0aWFsIFNpemUgYW5kIFBvc2l0aW9uICovXHJcbiAgcHJpdmF0ZSBfaW5pdFNpemU6IFNpemUgPSBudWxsO1xyXG4gIHByaXZhdGUgX2luaXRQb3M6IFBvc2l0aW9uID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfYm91bmRpbmc6IGFueSA9IG51bGw7XHJcblxyXG4gIC8qKiBEaXNhYmxlcyB0aGUgcmVzaXphYmxlIGlmIHNldCB0byBmYWxzZS4gKi9cclxuICBASW5wdXQoKSBzZXQgbmdSZXNpemFibGUodjogYW55KSB7XHJcbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwgJiYgdiAhPT0gJycpIHtcclxuICAgICAgdGhpcy5fcmVzaXphYmxlID0gISF2O1xyXG4gICAgICB0aGlzLnVwZGF0ZVJlc2l6YWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hpY2ggaGFuZGxlcyBjYW4gYmUgdXNlZCBmb3IgcmVzaXppbmcuXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBbcnpIYW5kbGVzXSA9IFwiJ24sZSxzLHcsc2UsbmUsc3csbncnXCJcclxuICAgKiBlcXVhbHMgdG86IFtyekhhbmRsZXNdID0gXCInYWxsJ1wiXHJcbiAgICpcclxuICAgKiAqL1xyXG4gIEBJbnB1dCgpIHJ6SGFuZGxlczogUmVzaXplSGFuZGxlVHlwZSA9ICdlLHMsc2UnO1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSBjb25zdHJhaW5lZCB0byBhIHNwZWNpZmljIGFzcGVjdCByYXRpby5cclxuICAgKiAgTXVsdGlwbGUgdHlwZXMgc3VwcG9ydGVkOlxyXG4gICAqICBib29sZWFuOiBXaGVuIHNldCB0byB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIG1haW50YWluIGl0cyBvcmlnaW5hbCBhc3BlY3QgcmF0aW8uXHJcbiAgICogIG51bWJlcjogRm9yY2UgdGhlIGVsZW1lbnQgdG8gbWFpbnRhaW4gYSBzcGVjaWZpYyBhc3BlY3QgcmF0aW8gZHVyaW5nIHJlc2l6aW5nLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJ6QXNwZWN0UmF0aW86IGJvb2xlYW4gfCBudW1iZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RyYWlucyByZXNpemluZyB0byB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgb3IgcmVnaW9uLlxyXG4gICAqICBNdWx0aXBsZSB0eXBlcyBzdXBwb3J0ZWQ6XHJcbiAgICogIFNlbGVjdG9yOiBUaGUgcmVzaXphYmxlIGVsZW1lbnQgd2lsbCBiZSBjb250YWluZWQgdG8gdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgZmlyc3QgZWxlbWVudCBmb3VuZCBieSB0aGUgc2VsZWN0b3IuXHJcbiAgICogICAgICAgICAgICBJZiBubyBlbGVtZW50IGlzIGZvdW5kLCBubyBjb250YWlubWVudCB3aWxsIGJlIHNldC5cclxuICAgKiAgRWxlbWVudDogVGhlIHJlc2l6YWJsZSBlbGVtZW50IHdpbGwgYmUgY29udGFpbmVkIHRvIHRoZSBib3VuZGluZyBib3ggb2YgdGhpcyBlbGVtZW50LlxyXG4gICAqICBTdHJpbmc6IFBvc3NpYmxlIHZhbHVlczogXCJwYXJlbnRcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSByekNvbnRhaW5tZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIC8qKiBlbWl0dGVkIHdoZW4gc3RhcnQgcmVzaXppbmcgKi9cclxuICBAT3V0cHV0KCkgcnpTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SVJlc2l6ZUV2ZW50PigpO1xyXG5cclxuICAvKiogZW1pdHRlZCB3aGVuIHN0YXJ0IHJlc2l6aW5nICovXHJcbiAgQE91dHB1dCgpIHJ6UmVzaXppbmcgPSBuZXcgRXZlbnRFbWl0dGVyPElSZXNpemVFdmVudD4oKTtcclxuXHJcbiAgLyoqIGVtaXR0ZWQgd2hlbiBzdG9wIHJlc2l6aW5nICovXHJcbiAgQE91dHB1dCgpIHJ6U3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8SVJlc2l6ZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXNbJ3J6SGFuZGxlcyddICYmICFjaGFuZ2VzWydyekhhbmRsZXMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy51cGRhdGVSZXNpemFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlc1sncnpBc3BlY3RSYXRpbyddICYmICFjaGFuZ2VzWydyekFzcGVjdFJhdGlvJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXNwZWN0UmF0aW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlc1sncnpDb250YWlubWVudCddICYmICFjaGFuZ2VzWydyekNvbnRhaW5tZW50J10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29udGFpbm1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVSZXNpemFibGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVIYW5kbGVzKCk7XHJcbiAgICB0aGlzLl9jb250YWlubWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBlbG0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbml0U2l6ZSA9IFNpemUuZ2V0Q3VycmVudChlbG0pO1xyXG4gICAgdGhpcy5faW5pdFBvcyA9IFBvc2l0aW9uLmdldEN1cnJlbnQoZWxtKTtcclxuICAgIHRoaXMuX2N1cnJTaXplID0gU2l6ZS5jb3B5KHRoaXMuX2luaXRTaXplKTtcclxuICAgIHRoaXMuX2N1cnJQb3MgPSBQb3NpdGlvbi5jb3B5KHRoaXMuX2luaXRQb3MpO1xyXG4gICAgdGhpcy51cGRhdGVBc3BlY3RSYXRpbygpO1xyXG4gICAgdGhpcy51cGRhdGVDb250YWlubWVudCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgbWV0aG9kIHRvIHJlc2V0IHNpemUgKi9cclxuICBwdWJsaWMgcmVzZXRTaXplKCkge1xyXG4gICAgdGhpcy5fY3VyclNpemUgPSBTaXplLmNvcHkodGhpcy5faW5pdFNpemUpO1xyXG4gICAgdGhpcy5fY3VyclBvcyA9IFBvc2l0aW9uLmNvcHkodGhpcy5faW5pdFBvcyk7XHJcbiAgICB0aGlzLmRvUmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQSBtZXRob2QgdG8gZ2V0IGN1cnJlbnQgc3RhdHVzICovXHJcbiAgcHVibGljIGdldFN0YXR1cygpIHtcclxuICAgIGlmICghdGhpcy5fY3VyclBvcyB8fCAhdGhpcy5fY3VyclNpemUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLl9jdXJyU2l6ZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuX2N1cnJTaXplLmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHRvcDogdGhpcy5fY3VyclBvcy55LFxyXG4gICAgICAgIGxlZnQ6IHRoaXMuX2N1cnJQb3MueFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSZXNpemFibGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIC8vIGNsZWFyIGhhbmRsZXM6XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsICduZy1yZXNpemFibGUnKTtcclxuICAgIHRoaXMucmVtb3ZlSGFuZGxlcygpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuZXcgb25lczpcclxuICAgIGlmICh0aGlzLl9yZXNpemFibGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCAnbmctcmVzaXphYmxlJyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlSGFuZGxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFVzZSBpdCB0byB1cGRhdGUgYXNwZWN0ICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVBc3BlY3RSYXRpbygpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5yekFzcGVjdFJhdGlvID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgaWYgKHRoaXMucnpBc3BlY3RSYXRpbyAmJiB0aGlzLl9jdXJyU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9ICh0aGlzLl9jdXJyU2l6ZS53aWR0aCAvIHRoaXMuX2N1cnJTaXplLmhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYXNwZWN0UmF0aW8gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgciA9IE51bWJlcih0aGlzLnJ6QXNwZWN0UmF0aW8pO1xyXG4gICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IGlzTmFOKHIpID8gMCA6IHI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVXNlIGl0IHRvIHVwZGF0ZSBjb250YWlubWVudCAqL1xyXG4gIHByaXZhdGUgdXBkYXRlQ29udGFpbm1lbnQoKSB7XHJcbiAgICBpZiAoIXRoaXMucnpDb250YWlubWVudCkge1xyXG4gICAgICB0aGlzLl9jb250YWlubWVudCA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMucnpDb250YWlubWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKHRoaXMucnpDb250YWlubWVudCA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgICB0aGlzLl9jb250YWlubWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4odGhpcy5yekNvbnRhaW5tZW50KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29udGFpbm1lbnQgPSB0aGlzLnJ6Q29udGFpbm1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVXNlIGl0IHRvIGNyZWF0ZSBoYW5kbGUgZGl2cyAqL1xyXG4gIHByaXZhdGUgY3JlYXRlSGFuZGxlcygpIHtcclxuICAgIGlmICghdGhpcy5yekhhbmRsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bXBIYW5kbGVUeXBlczogc3RyaW5nW107XHJcbiAgICBpZiAodHlwZW9mIHRoaXMucnpIYW5kbGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAodGhpcy5yekhhbmRsZXMgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgdG1wSGFuZGxlVHlwZXMgPSBbJ24nLCAnZScsICdzJywgJ3cnLCAnbmUnLCAnc2UnLCAnbncnLCAnc3cnXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0bXBIYW5kbGVUeXBlcyA9IHRoaXMucnpIYW5kbGVzLnJlcGxhY2UoLyAvZywgJycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgdHlwZSBvZiB0bXBIYW5kbGVUeXBlcykge1xyXG4gICAgICAgIC8vIGRlZmF1bHQgaGFuZGxlIHRoZW1lOiBuZy1yZXNpemFibGUtJHR5cGUuXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IHRoaXMuY3JlYXRlSGFuZGxlQnlUeXBlKHR5cGUsIGBuZy1yZXNpemFibGUtJHt0eXBlfWApO1xyXG4gICAgICAgIGlmIChoYW5kbGUpIHtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZVR5cGUucHVzaCh0eXBlKTtcclxuICAgICAgICAgIHRoaXMuX2hhbmRsZXNbdHlwZV0gPSBoYW5kbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0bXBIYW5kbGVUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMucnpIYW5kbGVzKTtcclxuICAgICAgZm9yIChsZXQgdHlwZSBvZiB0bXBIYW5kbGVUeXBlcykge1xyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGUgdGhlbWUuXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IHRoaXMuY3JlYXRlSGFuZGxlQnlUeXBlKHR5cGUsIHRoaXMucnpIYW5kbGVzW3R5cGVdKTtcclxuICAgICAgICBpZiAoaGFuZGxlKSB7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVUeXBlLnB1c2godHlwZSk7XHJcbiAgICAgICAgICB0aGlzLl9oYW5kbGVzW3R5cGVdID0gaGFuZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKiBVc2UgaXQgdG8gY3JlYXRlIGEgaGFuZGxlICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVIYW5kbGVCeVR5cGUodHlwZTogc3RyaW5nLCBjc3M6IHN0cmluZyk6IFJlc2l6ZUhhbmRsZSB7XHJcbiAgICBjb25zdCBfZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCF0eXBlLm1hdGNoKC9eKHNlfHN3fG5lfG53fG58ZXxzfHcpJC8pKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgaGFuZGxlIHR5cGU6JywgdHlwZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUmVzaXplSGFuZGxlKF9lbCwgdGhpcy5yZW5kZXJlciwgdHlwZSwgY3NzLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVIYW5kbGVzKCkge1xyXG4gICAgZm9yIChsZXQgdHlwZSBvZiB0aGlzLl9oYW5kbGVUeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZXNbdHlwZV0uZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2hhbmRsZVR5cGUgPSBbXTtcclxuICAgIHRoaXMuX2hhbmRsZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgaGFuZGxlOiBSZXNpemVIYW5kbGUpIHtcclxuICAgIC8vIHNraXAgcmlnaHQgY2xpY2s7XHJcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJldmVudCBkZWZhdWx0IGV2ZW50c1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5faGFuZGxlUmVzaXppbmcpIHtcclxuICAgICAgY29uc3QgZWxtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9vcmlnTW91c2VQb3MgPSBQb3NpdGlvbi5mcm9tRXZlbnQoZXZlbnQpO1xyXG4gICAgICB0aGlzLl9vcmlnU2l6ZSA9IFNpemUuZ2V0Q3VycmVudChlbG0pO1xyXG4gICAgICB0aGlzLl9vcmlnUG9zID0gUG9zaXRpb24uZ2V0Q3VycmVudChlbG0pOyAvLyB4OiBsZWZ0LCB5OiB0b3BcclxuICAgICAgdGhpcy5fY3VyclNpemUgPSBTaXplLmNvcHkodGhpcy5fb3JpZ1NpemUpO1xyXG4gICAgICB0aGlzLl9jdXJyUG9zID0gUG9zaXRpb24uY29weSh0aGlzLl9vcmlnUG9zKTtcclxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5tZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXRCb3VuZGluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhcnRSZXNpemUoaGFuZGxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbGVhdmUnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoZW5kJylcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGNhbmNlbCcpXHJcbiAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhbmRsZVJlc2l6aW5nKSB7XHJcbiAgICAgIHRoaXMuc3RvcFJlc2l6ZSgpO1xyXG4gICAgICB0aGlzLl9vcmlnTW91c2VQb3MgPSBudWxsO1xyXG4gICAgICB0aGlzLl9vcmlnU2l6ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX29yaWdQb3MgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5fY29udGFpbm1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlc2V0Qm91bmRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaG1vdmUnLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX2hhbmRsZVJlc2l6aW5nICYmIHRoaXMuX3Jlc2l6YWJsZSAmJiB0aGlzLl9vcmlnTW91c2VQb3MgJiYgdGhpcy5fb3JpZ1BvcyAmJiB0aGlzLl9vcmlnU2l6ZSkge1xyXG4gICAgICB0aGlzLnJlc2l6ZVRvKFBvc2l0aW9uLmZyb21FdmVudChldmVudCkpO1xyXG4gICAgICB0aGlzLm9uUmVzaXppbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRSZXNpemUoaGFuZGxlOiBSZXNpemVIYW5kbGUpIHtcclxuICAgIHRoaXMuX2hhbmRsZVJlc2l6aW5nID0gaGFuZGxlO1xyXG4gICAgdGhpcy5yelN0YXJ0LmVtaXQodGhpcy5nZXRSZXNpemluZ0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wUmVzaXplKCkge1xyXG4gICAgdGhpcy5yelN0b3AuZW1pdCh0aGlzLmdldFJlc2l6aW5nRXZlbnQoKSk7XHJcbiAgICB0aGlzLl9oYW5kbGVSZXNpemluZyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVzaXppbmcoKSB7XHJcbiAgICB0aGlzLnJ6UmVzaXppbmcuZW1pdCh0aGlzLmdldFJlc2l6aW5nRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlc2l6aW5nRXZlbnQoKTogSVJlc2l6ZUV2ZW50IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhvc3Q6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgaGFuZGxlOiB0aGlzLl9oYW5kbGVSZXNpemluZyA/IHRoaXMuX2hhbmRsZVJlc2l6aW5nLmVsIDogbnVsbCxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLl9jdXJyU2l6ZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuX2N1cnJTaXplLmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHRvcDogdGhpcy5fY3VyclBvcy55LFxyXG4gICAgICAgIGxlZnQ6IHRoaXMuX2N1cnJQb3MueFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNpemVUbyhwOiBQb3NpdGlvbikge1xyXG4gICAgcC5zdWJ0cmFjdCh0aGlzLl9vcmlnTW91c2VQb3MpO1xyXG5cclxuICAgIGlmICh0aGlzLl9oYW5kbGVSZXNpemluZy50eXBlLm1hdGNoKC9uLykpIHtcclxuICAgICAgLy8gbiwgbmUsIG53XHJcbiAgICAgIHRoaXMuX2N1cnJQb3MueSA9IHRoaXMuX29yaWdQb3MueSArIHAueTtcclxuICAgICAgdGhpcy5fY3VyclNpemUuaGVpZ2h0ID0gdGhpcy5fb3JpZ1NpemUuaGVpZ2h0IC0gcC55O1xyXG5cclxuICAgICAgLy8gY2hlY2sgYm91bmRzXHJcbiAgICAgIGlmICh0aGlzLl9jb250YWlubWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyUG9zLnkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9jdXJyUG9zLnkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fY3VyclNpemUuaGVpZ2h0ID0gdGhpcy5fb3JpZ1NpemUuaGVpZ2h0ICsgdGhpcy5fb3JpZ1Bvcy55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2N1cnJTaXplLmhlaWdodCA8IDEpIHtcclxuICAgICAgICB0aGlzLl9jdXJyU2l6ZS5oZWlnaHQgPSAxO1xyXG4gICAgICAgIHRoaXMuX2N1cnJQb3MueSA9IHRoaXMuX29yaWdQb3MueSArICh0aGlzLl9vcmlnU2l6ZS5oZWlnaHQgLSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXNwZWN0IHJhdGlvXHJcbiAgICAgIHRoaXMuYWRqdXN0QnlSYXRpbygnaCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYW5kbGVSZXNpemluZy50eXBlLm1hdGNoKC9zLykpIHtcclxuICAgICAgLy8gcywgc2UsIHN3XHJcbiAgICAgIHRoaXMuX2N1cnJTaXplLmhlaWdodCA9IHRoaXMuX29yaWdTaXplLmhlaWdodCArIHAueTtcclxuXHJcbiAgICAgIC8vIGFzcGVjdCByYXRpb1xyXG4gICAgICB0aGlzLmFkanVzdEJ5UmF0aW8oJ2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5faGFuZGxlUmVzaXppbmcudHlwZS5tYXRjaCgvZS8pKSB7XHJcbiAgICAgIC8vIGUsIG5lLCBzZVxyXG4gICAgICB0aGlzLl9jdXJyU2l6ZS53aWR0aCA9IHRoaXMuX29yaWdTaXplLndpZHRoICsgcC54O1xyXG5cclxuICAgICAgLy8gYXNwZWN0IHJhdGlvXHJcbiAgICAgIHRoaXMuYWRqdXN0QnlSYXRpbygndycpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9oYW5kbGVSZXNpemluZy50eXBlLm1hdGNoKC93LykpIHtcclxuICAgICAgLy8gdywgbncsIHN3XHJcbiAgICAgIHRoaXMuX2N1cnJTaXplLndpZHRoID0gdGhpcy5fb3JpZ1NpemUud2lkdGggLSBwLng7XHJcbiAgICAgIHRoaXMuX2N1cnJQb3MueCA9IHRoaXMuX29yaWdQb3MueCArIHAueDtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGJvdW5kc1xyXG4gICAgICBpZiAodGhpcy5fY29udGFpbm1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VyclBvcy54IDwgMCkge1xyXG4gICAgICAgICAgdGhpcy5fY3VyclBvcy54ID0gMDtcclxuICAgICAgICAgIHRoaXMuX2N1cnJTaXplLndpZHRoID0gdGhpcy5fb3JpZ1NpemUud2lkdGggKyB0aGlzLl9vcmlnUG9zLng7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3VyclNpemUud2lkdGggPCAxKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyclNpemUud2lkdGggPSAxO1xyXG4gICAgICAgIHRoaXMuX2N1cnJQb3MueCA9IHRoaXMuX29yaWdQb3MueCArICh0aGlzLl9vcmlnU2l6ZS53aWR0aCAtIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3BlY3QgcmF0aW9cclxuICAgICAgdGhpcy5hZGp1c3RCeVJhdGlvKCd3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0JvdW5kcygpO1xyXG4gICAgdGhpcy5kb1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1Jlc2l6ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnaGVpZ2h0JywgdGhpcy5fY3VyclNpemUuaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgdGhpcy5fY3VyclNpemUud2lkdGggKyAncHgnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnbGVmdCcsIHRoaXMuX2N1cnJQb3MueCArICdweCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXIsICd0b3AnLCB0aGlzLl9jdXJyUG9zLnkgKyAncHgnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRqdXN0QnlSYXRpbyhkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9hc3BlY3RSYXRpbykge1xyXG4gICAgICBpZiAoZCA9PT0gJ3cnKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyclNpemUuaGVpZ2h0ID0gdGhpcy5fY3VyclNpemUud2lkdGggLyB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jdXJyU2l6ZS53aWR0aCA9IHRoaXMuX2FzcGVjdFJhdGlvICogdGhpcy5fY3VyclNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQm91bmRzKCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5tZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5tZW50O1xyXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuX2JvdW5kaW5nLndpZHRoIC0gdGhpcy5fYm91bmRpbmcucHIgLSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5fYm91bmRpbmcuaGVpZ2h0IC0gdGhpcy5fYm91bmRpbmcucGIgLSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2N1cnJTaXplLndpZHRoID4gbWF4V2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9jdXJyU2l6ZS53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fY3VyclNpemUuaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fY3VyclNpemUuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJvdW5kaW5nKCkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLl9jb250YWlubWVudDtcclxuICAgIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgaWYgKGNvbXB1dGVkKSB7XHJcbiAgICAgIGxldCBwID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcclxuXHJcbiAgICAgIHRoaXMuX2JvdW5kaW5nID0ge307XHJcbiAgICAgIHRoaXMuX2JvdW5kaW5nLndpZHRoID0gZWwuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuX2JvdW5kaW5nLmhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcclxuICAgICAgdGhpcy5fYm91bmRpbmcucHIgPSBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JyksIDEwKTtcclxuICAgICAgdGhpcy5fYm91bmRpbmcucGIgPSBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpLCAxMCk7XHJcbiAgICAgIHRoaXMuX2JvdW5kaW5nLnBvc2l0aW9uID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcclxuXHJcbiAgICAgIGlmIChwID09PSAnc3RhdGljJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0Qm91bmRpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5fYm91bmRpbmcgJiYgdGhpcy5fYm91bmRpbmcucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fY29udGFpbm1lbnQsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYm91bmRpbmcgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckRyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vYW5ndWxhci1kcmFnZ2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFuZ3VsYXJSZXNpemFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2FuZ3VsYXItcmVzaXphYmxlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQW5ndWxhckRyYWdnYWJsZURpcmVjdGl2ZSxcbiAgICBBbmd1bGFyUmVzaXphYmxlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBbmd1bGFyRHJhZ2dhYmxlRGlyZWN0aXZlLFxuICAgIEFuZ3VsYXJSZXNpemFibGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRHJhZ2dhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFLQTtJQUNFLGtCQUFtQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtLQUFLOzs7OztJQUU1QyxrQkFBUzs7OztJQUFoQixVQUFpQixDQUEwQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxVQUFVLEVBQUU7WUFDM0IsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9FO0tBQ0Y7Ozs7O0lBRU0sb0JBQVc7Ozs7SUFBbEIsVUFBbUIsR0FBRztRQUNwQixPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztLQUM5Qzs7Ozs7SUFFTSxtQkFBVTs7OztJQUFqQixVQUFrQixFQUFXO1FBQzNCLHFCQUFJLEdBQUcsR0FBRyxJQUFJ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

/***/ }),

/***/ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js ***!
  \********************************************************************/
/*! exports provided: Cmyk, Hsla, Hsva, Rgba, TextDirective, SliderDirective, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    var /** @type {?} */ ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    var /** @type {?} */ msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var /** @type {?} */ numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    TextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[text]'
                },] }
    ];
    TextDirective.propDecorators = {
        rg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerMove = function (event) { return _this.move(event); };
        this.listenerStop = function () { return _this.stop(); };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ position = this.elRef.nativeElement.getBoundingClientRect();
        var /** @type {?} */ pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ position = this.elRef.nativeElement.getBoundingClientRect();
        var /** @type {?} */ pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ width = this.elRef.nativeElement.offsetWidth;
        var /** @type {?} */ height = this.elRef.nativeElement.offsetHeight;
        var /** @type {?} */ x = Math.max(0, Math.min(this.getX(event), width));
        var /** @type {?} */ y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[slider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rgY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ColorPickerService.prototype.setActive = /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsva2hsla = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        var /** @type {?} */ h = hsva.h, /** @type {?} */ s = hsva.s, /** @type {?} */ v = hsva.v, /** @type {?} */ a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            var /** @type {?} */ l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * @param {?} hsla
     * @return {?}
     */
    ColorPickerService.prototype.hsla2hsva = /**
     * @param {?} hsla
     * @return {?}
     */
    function (hsla) {
        var /** @type {?} */ h = Math.min(hsla.h, 1), /** @type {?} */ s = Math.min(hsla.s, 1);
        var /** @type {?} */ l = Math.min(hsla.l, 1), /** @type {?} */ a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            var /** @type {?} */ v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsvaToRgba = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        var /** @type {?} */ r, /** @type {?} */ g, /** @type {?} */ b;
        var /** @type {?} */ h = hsva.h, /** @type {?} */ s = hsva.s, /** @type {?} */ v = hsva.v, /** @type {?} */ a = hsva.a;
        var /** @type {?} */ i = Math.floor(h * 6);
        var /** @type {?} */ f = h * 6 - i;
        var /** @type {?} */ p = v * (1 - s);
        var /** @type {?} */ q = v * (1 - f * s);
        var /** @type {?} */ t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
            default:
                r = 0, g = 0, b = 0;
        }
        return new Rgba(r, g, b, a);
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToCmyk = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        var /** @type {?} */ k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        else {
            var /** @type {?} */ c = (1 - rgba.r - k) / (1 - k);
            var /** @type {?} */ m = (1 - rgba.g - k) / (1 - k);
            var /** @type {?} */ y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k);
        }
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHsva = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        var /** @type {?} */ h, /** @type {?} */ s;
        var /** @type {?} */ r = Math.min(rgba.r, 1), /** @type {?} */ g = Math.min(rgba.g, 1);
        var /** @type {?} */ b = Math.min(rgba.b, 1), /** @type {?} */ a = Math.min(rgba.a, 1);
        var /** @type {?} */ max = Math.max(r, g, b), /** @type {?} */ min = Math.min(r, g, b);
        var /** @type {?} */ v = max, /** @type {?} */ d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    };
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHex = /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        var /** @type {?} */ hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeRGBA = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.stringToHsva = /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        var /** @type {?} */ hsva = null;
        colorString = (colorString || '').toLowerCase();
        var /** @type {?} */ stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            }
        });
        for (var /** @type {?} */ key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                var /** @type {?} */ parser = stringParsers[key];
                var /** @type {?} */ match = parser.re.exec(colorString), /** @type {?} */ color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    ColorPickerService.prototype.outputFormat = /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    function (hsva, outputFormat, alphaChannel) {
        switch (outputFormat) {
            case 'hsla':
                var /** @type {?} */ hsla = this.hsva2hsla(hsva);
                var /** @type {?} */ hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                var /** @type {?} */ rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                var /** @type {?} */ allowHex8 = (alphaChannel === 'always' || alphaChannel === 'hex8');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    };
    ColorPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.useRootViewContainer = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onCancelColor(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onAcceptColor(event);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider = new SliderPosition(0, 0, 0, 0);
        var /** @type {?} */ hueWidth = this.hueSlider.nativeElement.offsetWidth;
        var /** @type {?} */ alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        if (this.cpOutputFormat === 'rgba') {
            this.format = 1;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cpWidth !== 230) {
            var /** @type {?} */ hueWidth = this.hueSlider.nativeElement.offsetWidth;
            var /** @type {?} */ alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    ColorPickerComponent.prototype.openDialog = /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.closeColorPicker();
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    ColorPickerComponent.prototype.setupDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'hex8') {
            this.cpAlphaChannel = 'disabled';
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.setInitialColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.initialColor = color;
    };
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    ColorPickerComponent.prototype.setPresetConfig = /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorFromString = /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        var /** @type {?} */ hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            this.updateColorPicker(emit, update);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragEnd = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragStart = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onAcceptColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onCancelColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onFormatToggle = /**
     * @return {?}
     */
    function () {
        this.format = (this.format + 1) % 3;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onColorChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHexInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            this.setColorFromString(value, true, false);
            this.directiveInstance.inputChanged({
                input: 'hex',
                value: value,
                color: this.outputColor
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRedInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({ input: 'red', value: rgba.r, color: this.outputColor });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({ input: 'blue', value: rgba.b, color: this.outputColor });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onGreenInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'green',
            value: rgba.g,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rg;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rg;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onLightnessInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'lightness',
            value: hsla.l,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onSaturationInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'saturation',
            value: hsla.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAddPresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter(function (color) { return (color === value); }).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRemovePresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter(function (color) { return (color !== value); });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.hidden = false;
                _this.setDialogPosition();
                _this.cdRef.detectChanges();
            }, 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeColorPicker = /**
     * @return {?}
     */
    function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    };
    /**
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.updateColorPicker = /**
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (this.sliderDimMax) {
            var /** @type {?} */ lastOutput = this.outputColor;
            var /** @type {?} */ hsla = this.service.hsva2hsla(this.hsva);
            var /** @type {?} */ rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            var /** @type {?} */ hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                var /** @type {?} */ allowHex8 = this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
            }
            this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = /**
     * @return {?}
     */
    function () {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            var /** @type {?} */ position = 'static', /** @type {?} */ transform = '', /** @type {?} */ style = void 0;
            var /** @type {?} */ parentNode = null, /** @type {?} */ transformNode = null;
            var /** @type {?} */ node = this.directiveElementRef.nativeElement.parentNode;
            var /** @type {?} */ dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            var /** @type {?} */ boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' && !parentNode)) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                var /** @type {?} */ boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            if (this.cpPosition === 'left') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else if (this.cpPosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (this.cpPosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    ColorPickerComponent.prototype.isDescendant = /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        var /** @type {?} */ node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createDialogBox = /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'color-picker',
                    template: "<div #dialogPopup class=\"color-picker\" [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider.v\" [style.left.px]=\"slider.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider.h\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput\" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\"/>\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\"/>\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\"/>\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\"/>\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput\" class=\"hex-text\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput\" class=\"type-policy\" (click)=\"onFormatToggle()\"></div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n  cursor: default;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: #fff; }\n  .color-picker * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    font-size: 11px; }\n  .color-picker input {\n    height: 26px;\n    min-width: 0;\n    font-size: 13px;\n    text-align: center;\n    color: #000; }\n    .color-picker input:invalid {\n      box-shadow: none; }\n    .color-picker input:-moz-ui-invalid {\n      box-shadow: none; }\n    .color-picker input:-moz-submit-invalid {\n      box-shadow: none; }\n    .color-picker input::-webkit-inner-spin-button, .color-picker input::-webkit-outer-spin-button {\n      margin: 0;\n      -webkit-appearance: none; }\n  .color-picker .arrow {\n    position: absolute;\n    z-index: 999999;\n    width: 0;\n    height: 0;\n    border-style: solid; }\n    .color-picker .arrow.arrow-top {\n      left: 8px;\n      border-width: 10px 5px;\n      border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n    .color-picker .arrow.arrow-left {\n      top: 8px;\n      left: 100%;\n      border-width: 5px 10px;\n      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777; }\n    .color-picker .arrow.arrow-right {\n      top: 8px;\n      left: -20px;\n      border-width: 5px 10px;\n      border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n    .color-picker .arrow.arrow-bottom {\n      top: -20px;\n      left: 8px;\n      border-width: 10px 5px;\n      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0); }\n  .color-picker .cursor {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    border: #222 solid 2px;\n    border-radius: 50%;\n    cursor: default; }\n  .color-picker .box {\n    display: flex;\n    padding: 4px 8px; }\n    .color-picker .box .left {\n      position: relative;\n      padding: 16px 8px; }\n    .color-picker .box .right {\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      padding: 12px 8px; }\n  .color-picker .button-area {\n    padding: 0 16px 16px;\n    text-align: right; }\n  .color-picker .preset-area {\n    padding: 4px 15px; }\n    .color-picker .preset-area .preset-label {\n      overflow: hidden;\n      width: 100%;\n      padding: 4px;\n      font-size: 11px;\n      white-space: nowrap;\n      text-align: left;\n      text-overflow: ellipsis;\n      color: #555; }\n    .color-picker .preset-area .preset-color {\n      position: relative;\n      display: inline-block;\n      width: 18px;\n      height: 18px;\n      margin: 4px 6px 8px;\n      border: #a9a9a9 solid 1px;\n      border-radius: 25%;\n      cursor: pointer; }\n    .color-picker .preset-area .preset-empty-message {\n      min-height: 18px;\n      margin-top: 4px;\n      margin-bottom: 8px;\n      font-style: italic;\n      text-align: center; }\n  .color-picker .hex-text {\n    width: 100%;\n    padding: 4px 8px;\n    font-size: 11px; }\n    .color-picker .hex-text .box {\n      padding: 0 24px 8px 8px; }\n      .color-picker .hex-text .box div {\n        float: left;\n        -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        text-align: center;\n        color: #555;\n        clear: left; }\n      .color-picker .hex-text .box input {\n        -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        padding: 1px;\n        border: #a9a9a9 solid 1px; }\n  .color-picker .hsla-text,\n  .color-picker .rgba-text {\n    width: 100%;\n    padding: 4px 8px;\n    font-size: 11px; }\n    .color-picker .hsla-text .box,\n    .color-picker .rgba-text .box {\n      padding: 0 24px 8px 8px; }\n      .color-picker .hsla-text .box div,\n      .color-picker .rgba-text .box div {\n        -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n        margin-right: 8px;\n        text-align: center;\n        color: #555; }\n        .color-picker .hsla-text .box div:last-child,\n        .color-picker .rgba-text .box div:last-child {\n          margin-right: 0; }\n      .color-picker .hsla-text .box input,\n      .color-picker .rgba-text .box input {\n        float: left;\n        -webkit-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n        min-width: 0;\n        padding: 1px;\n        margin: 0 8px 0 0;\n        border: #a9a9a9 solid 1px; }\n        .color-picker .hsla-text .box input:last-child,\n        .color-picker .rgba-text .box input:last-child {\n          margin-right: 0; }\n  .color-picker .hue-alpha {\n    margin-bottom: 3px; }\n  .color-picker .hue {\n    direction: ltr;\n    width: 100%;\n    height: 16px;\n    margin-bottom: 16px;\n    border: none;\n    cursor: pointer;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\"); }\n  .color-picker .alpha {\n    direction: ltr;\n    width: 100%;\n    height: 16px;\n    border: none;\n    cursor: pointer;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\"); }\n  .color-picker .type-policy {\n    position: absolute;\n    top: 218px;\n    right: 12px;\n    width: 16px;\n    height: 24px;\n    background-size: 8px 16px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");\n    background-repeat: no-repeat;\n    background-position: center; }\n  .color-picker .selected-color {\n    position: absolute;\n    top: 16px;\n    left: 8px;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #a9a9a9;\n    border-radius: 50%; }\n  .color-picker .selected-color-background {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\"); }\n  .color-picker .saturation-lightness {\n    direction: ltr;\n    width: 100%;\n    height: 130px;\n    border: none;\n    cursor: pointer;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,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\"); }\n  .color-picker .cp-add-color-button-class {\n    position: absolute;\n    display: inline;\n    padding: 0;\n    margin: 3px -3px;\n    border: 0;\n    cursor: pointer;\n    background: transparent; }\n    .color-picker .cp-add-color-button-class:hover {\n      text-decoration: underline; }\n    .color-picker .cp-add-color-button-class:disabled {\n      cursor: not-allowed;\n      color: #999; }\n      .color-picker .cp-add-color-button-class:disabled:hover {\n        text-decoration: none; }\n  .color-picker .cp-remove-color-button-class {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    cursor: pointer;\n    text-align: center;\n    background: #fff;\n    box-shadow: 1px 1px 5px #333; }\n    .color-picker .cp-remove-color-button-class::before {\n      content: 'x';\n      position: relative;\n      bottom: 3.5px;\n      display: inline-block;\n      font-size: 10px; }\n\n/*# sourceMappingURL=color-picker.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        hueSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['hueSlider',] }],
        alphaSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['alphaSlider',] }],
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup',] }],
        handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpDisableInput = false;
        this.cpAlphaChannel = 'enabled';
        this.cpOutputFormat = 'hex';
        this.cpFallbackColor = '#fff';
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputFocus(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputFocus(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialogCreated) {
            var /** @type {?} */ vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                var /** @type {?} */ classOfRootComponent = this.appRef.componentTypes[0];
                var /** @type {?} */ appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            var /** @type {?} */ compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
            this.dialog.closeDialog();
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ColorPickerDirective.prototype.stateChanged = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.colorPickerCancel.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPickerSelect.emit(value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ element = this.elRef.nativeElement;
        var /** @type {?} */ ignored = this.cpIgnoredElements.filter(function (item) { return item === element; });
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.colorPicker = event.target.value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[colorPicker]',
                    exportAs: 'ngxColorPicker'
                },] }
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerDirective.propDecorators = {
        colorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpIgnoredElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAlphaChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOutputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpFallbackColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpSaveClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpMaxPresetColorsLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessageClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpRemoveColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpToggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpPresetColorsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        handleFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus', ['$event'],] }],
        handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                },] }
    ];
    return ColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-color-picker.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-font-picker/dist/ngx-font-picker.es5.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-font-picker/dist/ngx-font-picker.es5.js ***!
  \******************************************************************/
/*! exports provided: FontPickerComponent, FontPickerDirective, FONT_PICKER_CONFIG, Font, GoogleFontsInterface, FontPickerConfig, FontPickerModule, FontPickerService, FontSizePipe, FontStylesPipe, StatefulSlicePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontPickerComponent", function() { return FontPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontPickerDirective", function() { return FontPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_PICKER_CONFIG", function() { return FONT_PICKER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleFontsInterface", function() { return GoogleFontsInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontPickerConfig", function() { return FontPickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontPickerModule", function() { return FontPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontPickerService", function() { return FontPickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizePipe", function() { return FontSizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStylesPipe", function() { return FontStylesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSlicePipe", function() { return StatefulSlicePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FONT_PICKER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FONT_PICKER_CONFIG');
var GoogleFontsInterface = /** @class */ (function () {
    function GoogleFontsInterface() {
    }
    return GoogleFontsInterface;
}());
var Font = /** @class */ (function () {
    function Font(props) {
        this.size = '16px';
        this.style = 'regular';
        this.family = 'monospace';
        this.files = null;
        this.styles = ['regular'];
        if (props) {
            this.size = props.size || '16px';
            this.style = props.style || 'regular';
            this.family = props.family || 'monospace';
            this.files = props.files || null;
            this.styles = props.styles || ['regular'];
        }
    }
    /**
     * @return {?}
     */
    Font.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        return {
            'font-size': this.size || '16px',
            'font-style': this.style.includes('italic') ?
                'italic' : 'normal',
            'font-family': this.family || 'monospace',
            'font-weight': isNaN(Number(this.style.slice(0, 3))) ?
                'normal' : this.style.slice(0, 3)
        };
    };
    return Font;
}());
var FontPickerConfig = /** @class */ (function () {
    function FontPickerConfig(config) {
        if (config === void 0) { config = {}; }
        this.apiKey = '';
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FontPickerConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var /** @type {?} */ key in config) {
            this[key] = config[key];
        }
    };
    return FontPickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontPickerService = /** @class */ (function () {
    function FontPickerService(http, _config) {
        this.http = http;
        this._config = _config;
        this.apiKey = '';
        this.baseUrl = 'https://www.googleapis.com/webfonts/v1/webfonts';
        this.apiKey = _config.apiKey;
    }
    /**
     * Loads the given font from Google Web Fonts.
     * @param {?} font
     * @return {?}
     */
    FontPickerService.prototype.loadFont = /**
     * Loads the given font from Google Web Fonts.
     * @param {?} font
     * @return {?}
     */
    function (font) {
        try {
            Object(webfontloader__WEBPACK_IMPORTED_MODULE_1__["load"])({
                google: {
                    families: [font.family + ':' + font.style]
                }
            });
        }
        catch (/** @type {?} */ e) {
            console.warn('Failed to load the font:', font);
        }
    };
    /**
     * Returns list of all fonts with given sort option:
     * date || alpha || style || trending || popularity
     * @param {?} sort
     * @return {?}
     */
    FontPickerService.prototype.getAllFonts = /**
     * Returns list of all fonts with given sort option:
     * date || alpha || style || trending || popularity
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        var /** @type {?} */ requestUrl = this.baseUrl + '?key=' + this.apiKey;
        if (sort) {
            requestUrl = requestUrl.concat('&sort=' + sort);
        }
        return /** @type {?} */ (this.http.get(requestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHttpError)));
    };
    /**
     * Returns font object for the requested font family.
     * @param {?} family
     * @return {?}
     */
    FontPickerService.prototype.getRequestedFont = /**
     * Returns font object for the requested font family.
     * @param {?} family
     * @return {?}
     */
    function (family) {
        var /** @type {?} */ requestUrl = 'https://fonts.googleapis.com/css?family=' + family;
        return /** @type {?} */ (this.http.get(requestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHttpError)));
    };
    /**
     * Handler method for all possible http request errors.
     * @param {?} error
     * @return {?}
     */
    FontPickerService.prototype.handleHttpError = /**
     * Handler method for all possible http request errors.
     * @param {?} error
     * @return {?}
     */
    function (error) {
        console.error(error);
        var /** @type {?} */ errMsg = (error.error instanceof Error) ?
            error.error.message : (error.status || 'Unknown error');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(errMsg);
    };
    FontPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    FontPickerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [FONT_PICKER_CONFIG,] }] }
    ]; };
    return FontPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontPickerComponent = /** @class */ (function () {
    function FontPickerComponent(cdRef, elRef, service) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.service = service;
        this.useRootViewContainer = false;
        this.fontAmount = 10;
        this.loadedFonts = 0;
        this.presetFonts = [];
        this.googleFonts = [];
        this.currentFonts = [];
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.renderMore = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.config = {
            suppressScrollX: true,
            wheelPropagation: false
        };
        this.loading = true;
        this.selectedFont = false;
        this.presetVisible = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.open && this.fpDialogDisplay === 'popup') {
            this.onCancelSelect(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.open && this.fpDialogDisplay === 'popup') {
            this.onAcceptSelect(event);
        }
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderMore.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(150)).subscribe(function () { return _this.loadMoreFonts(); });
        this.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (text) {
            if (!text) {
                _this.presetVisible = true;
                _this.listLabel = 'Popular fonts';
            }
            else {
                _this.presetVisible = false;
                _this.listLabel = 'Search results';
            }
            _this.searchGoogleFonts(text);
        });
        this.testContainer = document.createElement('span');
        this.testContainer.innerHTML = Array(100).join('wi');
        this.testContainer.style.cssText = [
            'position: absolute',
            'left: -99999px',
            'width: auto',
            'font-size: 128px'
        ].join(' !important;');
        this.listenerResize = function (event) { return _this.onResize(event); };
        this.listenerMouseDown = function (event) { return _this.onMouseDown(event); };
        this.openFontPicker();
    };
    /**
     * @param {?} index
     * @param {?} font
     * @return {?}
     */
    FontPickerComponent.prototype.trackFont = /**
     * @param {?} index
     * @param {?} font
     * @return {?}
     */
    function (index, font) {
        return font.family;
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} defaultFont
     * @param {?} fpUseRootViewContainer
     * @param {?} fpPosition
     * @param {?} fpPositionOffset
     * @param {?} fpPositionRelativeToArrow
     * @param {?} fpPresetLabel
     * @param {?} fpPresetFonts
     * @param {?} fpUploadButton
     * @param {?} fpUploadButtonClass
     * @param {?} fpUploadButtonText
     * @param {?} fpStyleSelect
     * @param {?} fpSizeSelect
     * @param {?} fpCancelButton
     * @param {?} fpCancelButtonClass
     * @param {?} fpCancelButtonText
     * @param {?} fpDialogDisplay
     * @param {?} fpHeight
     * @param {?} fpWidth
     * @return {?}
     */
    FontPickerComponent.prototype.setDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} defaultFont
     * @param {?} fpUseRootViewContainer
     * @param {?} fpPosition
     * @param {?} fpPositionOffset
     * @param {?} fpPositionRelativeToArrow
     * @param {?} fpPresetLabel
     * @param {?} fpPresetFonts
     * @param {?} fpUploadButton
     * @param {?} fpUploadButtonClass
     * @param {?} fpUploadButtonText
     * @param {?} fpStyleSelect
     * @param {?} fpSizeSelect
     * @param {?} fpCancelButton
     * @param {?} fpCancelButtonClass
     * @param {?} fpCancelButtonText
     * @param {?} fpDialogDisplay
     * @param {?} fpHeight
     * @param {?} fpWidth
     * @return {?}
     */
    function (instance, elementRef, defaultFont, fpUseRootViewContainer, fpPosition, fpPositionOffset, fpPositionRelativeToArrow, fpPresetLabel, fpPresetFonts, fpUploadButton, fpUploadButtonClass, fpUploadButtonText, fpStyleSelect, fpSizeSelect, fpCancelButton, fpCancelButtonClass, fpCancelButtonText, fpDialogDisplay, fpHeight, fpWidth) {
        var _this = this;
        this.listLabel = 'Loading fonts...';
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.useRootViewContainer = fpUseRootViewContainer;
        this.updateDialog(defaultFont, fpPosition, fpPositionOffset, fpPositionRelativeToArrow, fpPresetLabel, fpPresetFonts, fpUploadButton, fpUploadButtonClass, fpUploadButtonText, fpStyleSelect, fpSizeSelect, fpCancelButton, fpCancelButtonClass, fpCancelButtonText, fpDialogDisplay, fpHeight, fpWidth);
        this.service.getAllFonts('popularity').subscribe(function (fonts) {
            _this.loading = false;
            if (fonts.items) {
                _this.googleFonts = fonts.items.map(function (font) {
                    return new Font({
                        files: font.files,
                        family: font.family,
                        styles: font.variants
                    });
                });
            }
            // Find styles for initial font
            var /** @type {?} */ searchFont = _this.findFont(_this.initialFont.family, true);
            if (searchFont) {
                _this.font.files = searchFont.files;
                _this.font.styles = searchFont.styles;
                _this.loadGoogleFonts([_this.font]);
            }
            // Load Open Sans if available
            var /** @type {?} */ openSans = _this.googleFonts.find(function (font) { return font.family === 'Open sans'; });
            if (openSans) {
                _this.loadGoogleFonts([openSans]);
            }
            _this.setDisplayedFontSource();
        }, function (error) { return console.error(error); });
    };
    /**
     * @param {?} font
     * @param {?} fpPosition
     * @param {?} fpPositionOffset
     * @param {?} fpPositionRelativeToArrow
     * @param {?} fpPresetLabel
     * @param {?} fpPresetFonts
     * @param {?} fpUploadButton
     * @param {?} fpUploadButtonClass
     * @param {?} fpUploadButtonText
     * @param {?} fpStyleSelect
     * @param {?} fpSizeSelect
     * @param {?} fpCancelButton
     * @param {?} fpCancelButtonClass
     * @param {?} fpCancelButtonText
     * @param {?} fpDialogDisplay
     * @param {?} fpHeight
     * @param {?} fpWidth
     * @return {?}
     */
    FontPickerComponent.prototype.updateDialog = /**
     * @param {?} font
     * @param {?} fpPosition
     * @param {?} fpPositionOffset
     * @param {?} fpPositionRelativeToArrow
     * @param {?} fpPresetLabel
     * @param {?} fpPresetFonts
     * @param {?} fpUploadButton
     * @param {?} fpUploadButtonClass
     * @param {?} fpUploadButtonText
     * @param {?} fpStyleSelect
     * @param {?} fpSizeSelect
     * @param {?} fpCancelButton
     * @param {?} fpCancelButtonClass
     * @param {?} fpCancelButtonText
     * @param {?} fpDialogDisplay
     * @param {?} fpHeight
     * @param {?} fpWidth
     * @return {?}
     */
    function (font, fpPosition, fpPositionOffset, fpPositionRelativeToArrow, fpPresetLabel, fpPresetFonts, fpUploadButton, fpUploadButtonClass, fpUploadButtonText, fpStyleSelect, fpSizeSelect, fpCancelButton, fpCancelButtonClass, fpCancelButtonText, fpDialogDisplay, fpHeight, fpWidth) {
        this.font = new Font(font);
        this.initialFont = new Font(font);
        this.fpPosition = fpPosition;
        this.fpPositionOffset = parseInt(fpPositionOffset, 10);
        if (!fpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (fpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        this.fpPresetLabel = fpPresetLabel;
        this.fpPresetFonts = fpPresetFonts;
        this.fpStyleSelect = fpStyleSelect;
        this.fpSizeSelect = fpSizeSelect;
        this.fpCancelButton = fpCancelButton;
        this.fpCancelButtonText = fpCancelButtonText;
        this.fpCancelButtonClass = fpCancelButtonClass;
        this.fpUploadButton = fpUploadButton;
        this.fpUploadButtonText = fpUploadButtonText;
        this.fpUploadButtonClass = fpUploadButtonClass;
        this.autoWidth = fpWidth === 'auto';
        this.fpWidth = parseInt(fpWidth, 10);
        this.fpHeight = parseInt(fpHeight, 10);
        this.fpDialogDisplay = fpDialogDisplay;
        this.setDisplayedFontSource();
        this.searchTerm.reset({ disabled: (this.fpPresetFonts.length > 0) });
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.openFontPicker = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.setDialogPosition();
            this.searchTerm.setValue('');
            window.addEventListener('resize', this.listenerResize);
            document.addEventListener('mousedown', this.listenerMouseDown);
            this.open = true;
        }
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.closeFontPicker = /**
     * @return {?}
     */
    function () {
        this.open = false;
        window.removeEventListener('resize', this.listenerResize);
        document.removeEventListener('mousedown', this.listenerMouseDown);
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FontPickerComponent.prototype.isFontAvailable = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        if (!this.testWidth) {
            this.testContainer.style.fontFamily = 'monospace';
            document.body.appendChild(this.testContainer);
            this.testWidth = this.testContainer.clientWidth;
            document.body.removeChild(this.testContainer);
        }
        this.testContainer.style.fontFamily = font.family + ', monospace';
        document.body.appendChild(this.testContainer);
        var /** @type {?} */ width = this.testContainer.clientWidth;
        document.body.removeChild(this.testContainer);
        return width !== this.testWidth;
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.getPresetFonts = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ presetFonts = [];
        if (this.googleFonts && this.fpPresetFonts && this.fpPresetFonts.length) {
            this.fpPresetFonts.forEach(function (font) {
                var /** @type {?} */ fontClass = _this.findFont(font, true);
                if (!fontClass) {
                    fontClass = new Font({
                        family: font,
                        styles: ['regular', 'italic']
                    });
                }
                presetFonts.push(fontClass);
            });
            this.presetFonts = presetFonts;
        }
        return presetFonts;
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.setDisplayedFontSource = /**
     * @return {?}
     */
    function () {
        if (this.fpPresetFonts && this.fpPresetFonts.length) {
            this.setCurrentFonts(this.getPresetFonts());
        }
        else {
            this.setCurrentFonts(this.googleFonts);
        }
    };
    /**
     * @param {?} target
     * @return {?}
     */
    FontPickerComponent.prototype.setCurrentFonts = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        if (target !== this.currentFonts) {
            this.currentFonts = target;
            this.loadedFonts = this.fontAmount;
            var /** @type {?} */ initialFonts = this.currentFonts.slice(0, this.fontAmount);
            this.loadGoogleFonts(initialFonts);
            this.cdRef.markForCheck();
            setTimeout(function () {
                if (_this.scrollbar && _this.scrollbar.directiveRef) {
                    _this.scrollbar.directiveRef.scrollToY(0);
                }
            }, 0);
        }
    };
    /**
     * @param {?} searchVal
     * @param {?=} exactMatch
     * @return {?}
     */
    FontPickerComponent.prototype.findFont = /**
     * @param {?} searchVal
     * @param {?=} exactMatch
     * @return {?}
     */
    function (searchVal, exactMatch) {
        if (exactMatch === void 0) { exactMatch = false; }
        return this.findFonts(searchVal, exactMatch)[0];
    };
    /**
     * @param {?} searchVal
     * @param {?=} exactMatch
     * @return {?}
     */
    FontPickerComponent.prototype.findFonts = /**
     * @param {?} searchVal
     * @param {?=} exactMatch
     * @return {?}
     */
    function (searchVal, exactMatch) {
        if (exactMatch === void 0) { exactMatch = false; }
        var /** @type {?} */ fullmatchFonts = [];
        var /** @type {?} */ candidateFonts = [];
        searchVal = searchVal.toLowerCase();
        this.googleFonts.forEach(function (font) {
            if (searchVal === font.family.toLowerCase()) {
                fullmatchFonts.push(font);
                return;
            }
            if (!exactMatch && font.family.toLowerCase().indexOf(searchVal) > -1) {
                candidateFonts.push(font);
            }
        });
        var /** @type {?} */ resultFonts = fullmatchFonts.concat(candidateFonts);
        return resultFonts;
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.loadMoreFonts = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.open && !this.loading && this.loadedFonts < this.currentFonts.length) {
            var /** @type {?} */ moreFonts = this.currentFonts.slice(this.loadedFonts, this.loadedFonts + this.fontAmount);
            this.loadGoogleFonts(moreFonts);
            this.loadedFonts += moreFonts.length;
            setTimeout(function () {
                if (_this.scrollbar && _this.scrollbar.directiveRef) {
                    _this.scrollbar.directiveRef.update();
                }
            }, 0);
            this.cdRef.markForCheck();
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} fonts
     * @return {?}
     */
    FontPickerComponent.prototype.loadGoogleFonts = /**
     * @param {?} fonts
     * @return {?}
     */
    function (fonts) {
        var _this = this;
        fonts.slice(0, this.fontAmount).forEach(function (font) {
            if (font && font.files && !_this.isFontAvailable(font)) {
                var /** @type {?} */ style = (font.styles.indexOf('regular') > -1) ?
                    '' : ':' + font.styles.find(function (x) { return !isNaN(x); });
                _this.service.loadFont({ family: font.family, style: style, size: font.size });
            }
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FontPickerComponent.prototype.searchGoogleFonts = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this.searchTerm.setValue('');
            this.setCurrentFonts(this.googleFonts);
        }
        else {
            value = value.toLowerCase();
            if (this.googleFonts) {
                this.loadedFonts = this.fontAmount;
                var /** @type {?} */ searchResult = this.findFonts(value, false);
                this.setCurrentFonts(searchResult);
                this.cdRef.markForCheck();
            }
        }
    };
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    FontPickerComponent.prototype.isDescendant = /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        var /** @type {?} */ node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    FontPickerComponent.prototype.createDialogBox = /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    /**
     * @return {?}
     */
    FontPickerComponent.prototype.setDialogPosition = /**
     * @return {?}
     */
    function () {
        if (this.fpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            var /** @type {?} */ position = 'static', /** @type {?} */ transform = '', /** @type {?} */ style = void 0;
            var /** @type {?} */ parentNode = null, /** @type {?} */ transformNode = null;
            var /** @type {?} */ node = this.directiveElementRef.nativeElement.parentNode;
            var /** @type {?} */ dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            var /** @type {?} */ boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.autoWidth) {
                this.fpWidth = this.directiveElementRef.nativeElement.offsetWidth;
            }
            if (this.useRootViewContainer || (position === 'fixed' && !parentNode)) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                var /** @type {?} */ boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            if (this.fpPosition === 'left') {
                this.top += boxDirective.height * this.fpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.fpWidth + this.dialogArrowSize - 2;
            }
            else if (this.fpPosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.fpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (this.fpPosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.fpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else {
                this.top += boxDirective.height * this.fpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.fpDialogDisplay !== 'inline') {
            this.closeFontPicker();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.fpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target)) {
            this.closeFontPicker();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onUploadFont = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.directiveInstance.uploadFont();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onAcceptSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.directiveInstance.fontChanged(this.font);
        if (this.fpDialogDisplay === 'popup') {
            this.closeFontPicker();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onCancelSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.selectedFont = false;
        this.font.size = this.initialFont.size;
        this.font.files = this.initialFont.files;
        this.font.style = this.initialFont.style;
        this.font.family = this.initialFont.family;
        this.font.styles = this.initialFont.styles;
        this.directiveInstance.fontChanged(this.font);
        if (this.fpDialogDisplay === 'popup') {
            this.closeFontPicker();
        }
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FontPickerComponent.prototype.onSelectFont = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        this.selectedFont = true;
        this.font.files = font.files;
        this.font.family = font.family;
        this.font.styles = font.styles;
        this.font.style = (font.styles.indexOf('regular') !== -1) ?
            'regular' : font.styles[0];
        this.directiveInstance.fontChanged(this.font);
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerComponent.prototype.onSearchReset = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.searchTerm.setValue('');
        this.setCurrentFonts(this.googleFonts);
    };
    /**
     * @param {?} event
     * @param {?} font
     * @return {?}
     */
    FontPickerComponent.prototype.onFontSizeChange = /**
     * @param {?} event
     * @param {?} font
     * @return {?}
     */
    function (event, font) {
        this.font.size = event.target.value + 'px';
        this.directiveInstance.fontChanged(this.font);
    };
    /**
     * @param {?} event
     * @param {?} font
     * @return {?}
     */
    FontPickerComponent.prototype.onFontStyleChange = /**
     * @param {?} event
     * @param {?} font
     * @return {?}
     */
    function (event, font) {
        var /** @type {?} */ str = this.font.family + ':' + event.target.value;
        if (font.files) {
            Object(webfontloader__WEBPACK_IMPORTED_MODULE_1__["load"])({
                google: {
                    families: [str]
                }
            });
        }
        this.directiveInstance.fontChanged(this.font);
    };
    FontPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'font-picker',
                    template: "<div #dialogPopup [hidden]=\"!open\" class=\"font-picker\" [style.height.px]=\"fpHeight\" [style.width.px]=\"fpWidth\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\">\n  <div *ngIf=\"fpDialogDisplay=='popup'\" class=\"arrow arrow-{{fpPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div class=\"search-box\">\n    <input class=\"search-field\" placeholder=\"Search from Google Web Fonts...\" [formControl]=\"searchTerm\" />\n\n    <div class=\"search-reset\" [hidden]=\"!searchTerm.value\" (click)=\"onSearchReset($event)\">\u00D7</div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"load-text\">Loading fonts list...</div>\n\n  <perfect-scrollbar #dialogScrollbar class=\"font-list\" [config]=\"config\" [attr.fxFlex]=\"'auto'\" (psYReachEnd)=\"renderMore.next($event)\">\n    <div *ngIf=\"presetVisible && fpPresetFonts.length\">\n      <div class=\"font-group\">\n        <div class=\"group-text\">{{fpPresetLabel}}</div>\n        <div class=\"group-line\"></div>\n      </div>\n\n      <div *ngFor=\"let fontItem of presetFonts | StatefulSlice:0:loadedFonts; trackBy:trackFont\" class=\"font-item\" [ngClass]=\"{active: fontItem.family.toLowerCase() == font.family.toLowerCase(), selected: selectedFont}\" [ngStyle]=\"{'font-family': fontItem.family}\" (click)=\"onSelectFont(fontItem)\">\n        <div class=\"font-info\">\n          <span class=\"font-name\">{{fontItem.family}}</span>\n\n          <div *ngIf=\"!fontItem.files\" class=\"not-available\">!</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"font-group\">\n      <div class=\"group-text black\">{{listLabel}}</div>\n      <div class=\"group-line black\"></div>\n    </div>\n\n    <div *ngFor=\"let fontItem of (currentFonts | StatefulSlice:0:loadedFonts)\" class=\"font-item\" [ngClass]=\"{'active': fontItem.family.toLowerCase() == font.family.toLowerCase(), selected: selectedFont}\" [ngStyle]=\"{'font-family': fontItem.family}\" (click)=\"onSelectFont(fontItem)\">\n      <div class=\"font-info\">\n        <span class=\"font-name\">{{fontItem.family}}</span>\n      </div>\n    </div>\n  </perfect-scrollbar>\n\n  <div *ngIf=\"selectedFont && (fpStyleSelect || fpSizeSelect)\">\n    <div  class=\"font-options\">\n      <div *ngIf=\"fpStyleSelect\" class=\"left\">\n        <select class=\"style-select\" [disabled]=\"!font.styles\" (change)=\"onFontStyleChange($event, font)\" [(ngModel)]=\"font.style\">\n          <option *ngFor=\"let style of font.styles\" [value]=\"style\">{{style | FontStyles}}</option>\n        </select>\n      </div>\n\n      <div *ngIf=\"fpSizeSelect\" class=\"right\">\n        <input type=\"number\" pattern=\"[0-9]*\" min=\"1\" max=\"100\" (change)=\"onFontSizeChange($event, font)\" [ngClass]=\"{'size-select': fpStyleSelect}\" [ngModel]=\"font.size | FontSize\" />\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"fpUploadButton || fpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"fpUploadButton\" type=\"button\" class=\"{{fpUploadButtonClass}}\" (click)=\"onUploadFont($event)\">{{fpUploadButtonText}}</button>\n\n    <button *ngIf=\"fpCancelButton\" type=\"button\" class=\"{{fpCancelButtonClass}}\" (click)=\"onCancelSelect($event)\">{{fpCancelButtonText}}</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".font-picker {\n  position: absolute;\n  z-index: 1000;\n  top: 250px;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  height: 320px;\n  min-width: 200px;\n  min-height: 240px;\n  border: #777 solid 1px;\n  cursor: default;\n  user-select: none;\n  font-family: 'Open Sans', sans-serif;\n  background-color: #fff; }\n  .font-picker[hidden] {\n    display: none; }\n  .font-picker input,\n  .font-picker select {\n    width: 100%;\n    padding: 4px;\n    border: none;\n    border-bottom: 2px solid #cfcfcf;\n    outline: none;\n    font-size: 14px;\n    line-height: 18px;\n    text-align: left;\n    background: none;\n    transition: border 300ms ease; }\n    .font-picker input:hover, .font-picker input:focus, .font-picker input:active,\n    .font-picker select:hover,\n    .font-picker select:focus,\n    .font-picker select:active {\n      border-bottom: 2px solid #999; }\n    .font-picker input:invalid,\n    .font-picker select:invalid {\n      border-bottom: 2px solid #e74c3c;\n      box-shadow: none; }\n    .font-picker input::-webkit-inner-spin-button, .font-picker input::-webkit-outer-spin-button,\n    .font-picker select::-webkit-inner-spin-button,\n    .font-picker select::-webkit-outer-spin-button {\n      margin: 0;\n      -webkit-appearance: none; }\n  .font-picker .arrow {\n    position: absolute;\n    z-index: 999999;\n    width: 0;\n    height: 0;\n    border-style: solid; }\n  .font-picker .arrow-left {\n    top: 10px;\n    left: 231px;\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777; }\n  .font-picker .arrow-right {\n    top: 10px;\n    left: -20px;\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n  .font-picker .arrow-top {\n    top: 0;\n    left: 10px;\n    border-width: 10px 5px;\n    border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); }\n  .font-picker .arrow-bottom {\n    top: -20px;\n    left: 10px;\n    border-width: 10px 5px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0); }\n  .font-picker .search-box {\n    position: relative; }\n  .font-picker .search-field {\n    box-sizing: border-box;\n    padding: 10px 48px 10px 16px; }\n    .font-picker .search-field:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n      background-color: #888; }\n  .font-picker .search-reset {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 1px 12px;\n    cursor: pointer;\n    font-size: 31px;\n    color: #777;\n    transition: color 300ms ease; }\n    .font-picker .search-reset:hover {\n      color: #555; }\n  .font-picker .load-text {\n    padding: 16px;\n    font-size: 12px;\n    text-align: center;\n    color: #000; }\n  .font-picker .font-list {\n    position: relative;\n    overflow: hidden;\n    flex: 1 1 auto; }\n    .font-picker .font-list .font-item {\n      position: relative;\n      padding: 8px 16px;\n      cursor: pointer; }\n      .font-picker .font-list .font-item.active {\n        font-weight: bold; }\n        .font-picker .font-list .font-item.active.selected {\n          cursor: default;\n          font-weight: normal;\n          background: #e6e6e6; }\n      .font-picker .font-list .font-item .font-info {\n        margin: 4px 0; }\n        .font-picker .font-list .font-item .font-info .font-name {\n          font-size: 14px;\n          text-transform: capitalize;\n          color: #555; }\n        .font-picker .font-list .font-item .font-info .not-available {\n          float: right;\n          width: 24px;\n          margin: -8px -8px 0 0;\n          font-size: 24px;\n          font-weight: 900;\n          font-family: 'Open Sans', sans-serif;\n          text-align: center;\n          text-transform: none;\n          color: #ef8b80; }\n          .font-picker .font-list .font-item .font-info .not-available::after {\n            content: 'This font is not from Google Fonts. If you select it, you might have to import it manually in your CSS rules.';\n            position: absolute;\n            z-index: 10;\n            top: 0;\n            right: 12px;\n            left: 12px;\n            opacity: 0;\n            padding: 12px 16px;\n            margin: 0 auto;\n            border-radius: 2px;\n            pointer-events: none;\n            font-size: 13px;\n            font-weight: normal;\n            text-align: left;\n            color: #fff;\n            background: rgba(60, 60, 60, 0.8);\n            transition: opacity 150ms ease; }\n          .font-picker .font-list .font-item .font-info .not-available:hover {\n            color: #ea6153; }\n            .font-picker .font-list .font-item .font-info .not-available:hover::after {\n              opacity: 1; }\n      .font-picker .font-list .font-item .font-text {\n        padding: 4px 0;\n        font-size: 16px;\n        text-align: right;\n        color: #999; }\n    .font-picker .font-list .font-group {\n      display: flex;\n      flex: none; }\n      .font-picker .font-list .font-group .group-line {\n        flex: 1 1 auto;\n        height: 2px;\n        margin-top: 14px;\n        margin-right: 12px;\n        background: #e74c3c; }\n        .font-picker .font-list .font-group .group-line.black {\n          background: #000; }\n      .font-picker .font-list .font-group .group-text {\n        overflow: hidden;\n        box-sizing: border-box;\n        max-width: 75%;\n        padding: 8px 12px;\n        font-size: 11px;\n        font-weight: bold;\n        white-space: nowrap;\n        text-align: left;\n        text-overflow: ellipsis;\n        color: #e74c3c; }\n        .font-picker .font-list .font-group .group-text.black {\n          color: #000; }\n  .font-picker .font-options {\n    display: flex;\n    box-sizing: border-box;\n    padding: 8px;\n    border-top: 2px solid #cfcfcf; }\n    .font-picker .font-options .left {\n      flex: 1 1 auto;\n      padding: 0 2px; }\n      .font-picker .font-options .left .style-select {\n        text-transform: capitalize; }\n        .font-picker .font-options .left .style-select:disabled {\n          background-color: #777; }\n    .font-picker .font-options .right {\n      padding: 0 2px; }\n      .font-picker .font-options .right .size-select {\n        width: 48px;\n        text-align: center; }\n  .font-picker .button-area {\n    padding: 0 4px 4px;\n    border-top: 1px solid #aaa;\n    text-align: right; }\n    .font-picker .button-area .fp-cancel-button-class,\n    .font-picker .button-area .fp-upload-button-class {\n      display: inline-block;\n      margin: 8px;\n      text-align: center;\n      text-transform: uppercase; }\n\n/*# sourceMappingURL=font-picker.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    FontPickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: FontPickerService }
    ]; };
    FontPickerComponent.propDecorators = {
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup',] }],
        scrollbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogScrollbar',] }],
        handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
    };
    return FontPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontPickerDirective = /** @class */ (function () {
    function FontPickerDirective(injector, resolver, appRef, vcRef, elRef, service) {
        this.injector = injector;
        this.resolver = resolver;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this.service = service;
        this.fpWidth = '280px';
        this.fpHeight = '320px';
        this.fpFallbackFont = {
            family: 'Roboto',
            size: '16px',
            style: 'regular',
            styles: ['regular']
        };
        this.fpAutoLoad = true;
        this.fpPresetLabel = '';
        this.fpPresetFonts = [];
        this.fpSizeSelect = true;
        this.fpStyleSelect = true;
        this.fpDialogDisplay = 'popup';
        this.fpUseRootViewContainer = false;
        this.fpPosition = 'bottom';
        this.fpPositionOffset = '0%';
        this.fpPositionRelativeToArrow = false;
        this.fpCancelButton = false;
        this.fpCancelButtonText = 'Cancel';
        this.fpCancelButtonClass = 'fp-cancel-button-class';
        this.fpUploadButton = false;
        this.fpUploadButtonText = 'Upload';
        this.fpUploadButtonClass = 'fp-upload-button-class';
        this.fontPickerUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fontPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FontPickerDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.toggleDialog();
    };
    /**
     * @return {?}
     */
    FontPickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.fontPicker = this.fontPicker || this.fpFallbackFont;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FontPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["fontPicker"]) {
            this.fontPicker = this.fontPicker || this.fpFallbackFont;
            if (this.fpAutoLoad) {
                this.loadFont(this.fontPicker);
            }
        }
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FontPickerDirective.prototype.loadFont = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        this.service.loadFont(font);
    };
    /**
     * @return {?}
     */
    FontPickerDirective.prototype.uploadFont = /**
     * @return {?}
     */
    function () {
        this.fontPickerUpload.emit();
    };
    /**
     * @return {?}
     */
    FontPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialog || !this.dialog.open) {
            this.toggleDialog();
        }
    };
    /**
     * @return {?}
     */
    FontPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.dialog.open) {
            this.toggleDialog();
        }
    };
    /**
     * @return {?}
     */
    FontPickerDirective.prototype.toggleDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialog) {
            var /** @type {?} */ vcRef = this.vcRef;
            if (this.fpUseRootViewContainer && this.fpDialogDisplay !== 'inline') {
                var /** @type {?} */ classOfRootComponent = this.appRef.componentTypes[0];
                var /** @type {?} */ appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using fpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            var /** @type {?} */ compFactory = this.resolver.resolveComponentFactory(FontPickerComponent);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
            this.dialog = vcRef.createComponent(compFactory, 0, injector, []).instance;
            this.dialog.setDialog(this, this.elRef, this.fontPicker, this.fpUseRootViewContainer, this.fpPosition, this.fpPositionOffset, this.fpPositionRelativeToArrow, this.fpPresetLabel, this.fpPresetFonts, this.fpUploadButton, this.fpUploadButtonClass, this.fpUploadButtonText, this.fpStyleSelect, this.fpSizeSelect, this.fpCancelButton, this.fpCancelButtonClass, this.fpCancelButtonText, this.fpDialogDisplay, this.fpHeight, this.fpWidth);
        }
        else if (!this.dialog.open) {
            this.dialog.updateDialog(this.fontPicker, this.fpPosition, this.fpPositionOffset, this.fpPositionRelativeToArrow, this.fpPresetLabel, this.fpPresetFonts, this.fpUploadButton, this.fpUploadButtonClass, this.fpUploadButtonText, this.fpStyleSelect, this.fpSizeSelect, this.fpCancelButton, this.fpCancelButtonClass, this.fpCancelButtonText, this.fpDialogDisplay, this.fpHeight, this.fpWidth);
            this.dialog.openFontPicker();
        }
        else {
            this.dialog.closeFontPicker();
        }
    };
    /**
     * @param {?} font
     * @return {?}
     */
    FontPickerDirective.prototype.fontChanged = /**
     * @param {?} font
     * @return {?}
     */
    function (font) {
        this.fontPickerChange.emit(font);
    };
    FontPickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[fontPicker]',
                    exportAs: 'ngxFontPicker'
                },] }
    ];
    /** @nocollapse */
    FontPickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: FontPickerService }
    ]; };
    FontPickerDirective.propDecorators = {
        fontPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fontPicker',] }],
        fpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpWidth',] }],
        fpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpHeight',] }],
        fpFallbackFont: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpFallbackFont',] }],
        fpAutoLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpAutoLoad',] }],
        fpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpPresetLabel',] }],
        fpPresetFonts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpPresetFonts',] }],
        fpSizeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpSizeSelect',] }],
        fpStyleSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpStyleSelect',] }],
        fpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpDialogDisplay',] }],
        fpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpUseRootViewContainer',] }],
        fpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpPosition',] }],
        fpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpPositionOffset',] }],
        fpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpPositionRelativeToArrow',] }],
        fpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpCancelButton',] }],
        fpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpCancelButtonText',] }],
        fpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpCancelButtonClass',] }],
        fpUploadButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpUploadButton',] }],
        fpUploadButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpUploadButtonText',] }],
        fpUploadButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['fpUploadButtonClass',] }],
        fontPickerUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fontPickerUpload',] }],
        fontPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['fontPickerChange',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return FontPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontSizePipe = /** @class */ (function () {
    function FontSizePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FontSizePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return parseInt(value.replace(/[^-\d\.]/g, '') || '16', 10);
    };
    FontSizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'FontSize',
                    pure: true
                },] }
    ];
    return FontSizePipe;
}());
var FontStylesPipe = /** @class */ (function () {
    function FontStylesPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FontStylesPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ lookup = {
            '100': 'Thin',
            '200': 'Extra-Light',
            '300': 'Light',
            '400': 'Regular',
            '500': 'Medium',
            '600': 'Semi-bold',
            '700': 'Bold',
            '800': 'Extra-bold',
            '900': 'Black'
        };
        for (var /** @type {?} */ style in lookup) {
            var /** @type {?} */ found = value.search(style);
            if (found >= 0) {
                value = value.replace(style, lookup[style] + ' ');
                break;
            }
        }
        return value;
    };
    FontStylesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'FontStyles',
                    pure: true
                },] }
    ];
    return FontStylesPipe;
}());
var StatefulSlicePipe = /** @class */ (function () {
    function StatefulSlicePipe() {
        this.slicedArray = [];
        this.previousArrayRef = [];
        this.previousEndValue = 0;
    }
    /**
     * @param {?} arr
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    StatefulSlicePipe.prototype.transform = /**
     * @param {?} arr
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (arr, start, end) {
        if (arr && (this.previousEndValue !== end || this.previousArrayRef !== arr)) {
            this.slicedArray = arr.slice(start, end);
            this.previousArrayRef = arr;
            this.previousEndValue = end;
        }
        return this.slicedArray || arr;
    };
    StatefulSlicePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'StatefulSlice',
                    pure: false
                },] }
    ];
    return StatefulSlicePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FontPickerModule = /** @class */ (function () {
    function FontPickerModule() {
    }
    FontPickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    entryComponents: [FontPickerComponent],
                    declarations: [FontPickerComponent, FontPickerDirective, FontSizePipe, FontStylesPipe, StatefulSlicePipe],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]],
                    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], FontPickerDirective, FontSizePipe, FontStylesPipe, StatefulSlicePipe],
                    providers: [FontPickerService]
                },] }
    ];
    return FontPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-font-picker.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js ***!
  \******************************************************************************/
/*! exports provided: PerfectScrollbarComponent, PerfectScrollbarDirective, Geometry, Position, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function() { return PerfectScrollbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function() { return PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function() { return PerfectScrollbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function() { return PerfectScrollbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
var /** @type {?} */ PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var /** @type {?} */ key in config) {
            this[/** @type {?} */ (key)] = config[/** @type {?} */ (key)];
        }
    };
    return PerfectScrollbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function (entries, observer) {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    var /** @type {?} */ eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this.elementRef.nativeElement, eventType)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        _this[eventName].emit(event);
                    });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            });
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular(function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        });
                    }
                    catch (/** @type {?} */ error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var /** @type {?} */ element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var /** @type {?} */ elementPos = element.getBoundingClientRect();
            var /** @type {?} */ scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollLeft'];
                var /** @type {?} */ position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollTop'];
                var /** @type {?} */ position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            var /** @type {?} */ oldValue = this.elementRef.nativeElement[target];
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var /** @type {?} */ newValue_1 = 0;
            var /** @type {?} */ scrollCount_1 = 0;
            var /** @type {?} */ oldTimestamp_1 = performance.now();
            var /** @type {?} */ oldValue_1 = this.elementRef.nativeElement[target];
            var /** @type {?} */ cosParameter_1 = (oldValue_1 - value) / 2;
            var /** @type {?} */ step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] }
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['perfectScrollbar',] }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PerfectScrollbarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (a, b) { return (a === b && !_this.stateTimeout); }))
                .subscribe(function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout(function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
                if (_this.directiveRef) {
                    var /** @type {?} */ element = _this.directiveRef.elementRef.nativeElement;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'wheel')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var /** @type {?} */ scrollDeltaX = event.deltaX;
                            var /** @type {?} */ scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'touchmove')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var /** @type {?} */ scrollPositionX = event.touches[0].clientX;
                            var /** @type {?} */ scrollPositionY = event.touches[0].clientY;
                            var /** @type {?} */ scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            var /** @type {?} */ scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-x')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-y')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])('top')))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (state) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                });
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var /** @type {?} */ element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        var /** @type {?} */ scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var /** @type {?} */ scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    PerfectScrollbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto; }\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent; }\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6; }\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9; }\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px; }\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important; } }\n\n/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\nperfect-scrollbar {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  perfect-scrollbar[hidden] {\n    display: none; }\n  perfect-scrollbar[fxflex] {\n    display: flex;\n    flex-direction: column;\n    -webkit-box-orient: column;\n    -webkit-box-direction: column;\n    height: auto;\n    min-width: 0;\n    min-height: 0; }\n    perfect-scrollbar[fxflex] > .ps {\n      flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n      width: auto;\n      height: auto;\n      min-width: 0;\n      min-height: 0; }\n  perfect-scrollbar[fxlayout] > .ps,\n  perfect-scrollbar[fxlayout] > .ps > .ps-content {\n    display: flex;\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    -webkit-box-flex: 1;\n    align-item: inherit;\n    place-content: inherit;\n    -webkit-box-pack: inherit;\n    -webkit-box-align: inherit;\n    flex-direction: inherit;\n    -webkit-box-orient: inherit;\n    -webkit-box-direction: inherit;\n    width: 100%;\n    height: 100%; }\n  perfect-scrollbar[fxlayout=\"row\"] > .ps,\n  perfect-scrollbar[fxlayout=\"row\"] > .ps > .ps-content {\n    flex-direction: row !important;\n    -webkit-box-orient: row !important;\n    -webkit-box-direction: row !important; }\n  perfect-scrollbar[fxlayout=\"column\"] > .ps,\n  perfect-scrollbar[fxlayout=\"column\"] > .ps > .ps-content {\n    flex-direction: column !important;\n    -webkit-box-orient: column !important;\n    -webkit-box-direction: column !important; }\n  perfect-scrollbar > .ps {\n    position: static;\n    display: block;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit; }\n    perfect-scrollbar > .ps > .ps-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: block;\n      overflow: hidden;\n      pointer-events: none; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        position: absolute;\n        opacity: 0;\n        transition: opacity 300ms ease-in-out; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        left: 0;\n        min-width: 100%;\n        min-height: 24px; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        top: 0;\n        min-width: 24px;\n        min-height: 100%; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n        top: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n        left: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        right: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        bottom: 0; }\n    perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n      top: 0 !important;\n      right: 0 !important;\n      left: auto !important;\n      width: 10px;\n      cursor: default;\n      transition: width 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {\n        width: 15px; }\n    perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n      top: auto !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      height: 10px;\n      cursor: default;\n      transition: height 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {\n        height: 15px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n      margin: 0 0 10px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n      margin: 0 10px 0 0; }\n    perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {\n      opacity: 0.9;\n      background-color: #eee; }\n    perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n      opacity: 0.9;\n      background-color: #eee; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n    opacity: 1;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n    opacity: 1;\n    background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n    opacity: 1;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n    opacity: 1;\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n    background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n    background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n    background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n    background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n      opacity: 1; }\n\n/*# sourceMappingURL=perfect-scrollbar.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        usePSClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-limits',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        psScrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psScrollRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psYReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psYReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psXReachEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        psXReachStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [PerfectScrollbarDirective,] }]
    };
    return PerfectScrollbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule() {
    }
    PerfectScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
                },] }
    ];
    return PerfectScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-perfect-scrollbar.es5.js.map


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "./src/app/classes/horizontalResizer.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/horizontalResizer.ts ***!
  \**********************************************/
/*! exports provided: HorizontalResizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalResizer", function() { return HorizontalResizer; });
var HorizontalResizer = /** @class */ (function () {
    function HorizontalResizer(containerElement, resizerElement, lowerBoundElement) {
        var _this = this;
        this.resizeGrid = function (e) {
            var viewportHeight = document.documentElement.offsetHeight;
            var offset = viewportHeight - _this.containerElement.offsetHeight;
            var topHeight = e.pageY - offset - _this.resizerElement.offsetHeight / 2;
            var bottomHeight = viewportHeight - e.pageY - _this.resizerElement.offsetHeight / 2;
            _this.containerElement.style.gridTemplateRows = topHeight + 'fr ' + _this.resizerElement.offsetHeight + 'px ' + bottomHeight + 'fr';
            // Upper boundary 
            if (e.pageY < offset + _this.resizerElement.offsetHeight / 2) {
                _this.containerElement.style.gridTemplateRows = '0px ' + _this.resizerElement.offsetHeight + 'px ' + '1fr';
            }
            // Lower boundary
            if (e.pageY >= viewportHeight - _this.resizerElement.offsetHeight / 2 - _this.lowerBoundElement.offsetHeight) {
                _this.containerElement.style.gridTemplateRows = '1fr ' + _this.resizerElement.offsetHeight + 'px ' + _this.lowerBoundElement.offsetHeight + 'px';
            }
        };
        this.containerElement = containerElement;
        this.resizerElement = resizerElement;
        this.lowerBoundElement = lowerBoundElement;
    }
    HorizontalResizer.prototype.init = function () {
        var _this = this;
        var startResize = function () {
            document.addEventListener('mousemove', _this.resizeGrid);
            document.addEventListener('mouseup', stopResize);
        };
        var stopResize = function () {
            document.removeEventListener('mousemove', _this.resizeGrid);
            document.removeEventListener('mouseup', stopResize);
        };
        if (this.resizerElement) {
            // Resizer is rendered based on *ngIf condition
            // Wrapping in an IF statement prevents the following line
            // from running before the resizer has rendered.
            this.resizerElement.addEventListener('mousedown', startResize);
        }
    };
    return HorizontalResizer;
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

/***/ "./src/app/image-sandbox/image-sandbox.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-sandbox/image-sandbox.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  Layout  */\r\n.sandbox-container  {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 500px 10px 1fr;\r\n        grid-template-rows: 500px 10px 1fr;\r\n        grid-template-areas:\r\n        \"previewArea\"\r\n        \"resizer\"\r\n        \"bottom\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.preview-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: previewArea;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(to bottom right, rgb(179, 179, 179), rgb(241, 241, 241));\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n}\r\n.resizer {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: resizer;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: gray;\r\n    cursor: row-resize;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.middle-bar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: middleBar;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgb(65, 65, 65);\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-columns: 1fr 100px;\r\n        grid-template-rows: 75px 25px;\r\n        grid-template-areas:\r\n        \"imageInput addBtn\"\r\n        \"menuTabs addBtn\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.sandbox-bottom {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: bottom;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgb(235, 235, 235);\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 100px 1fr;\r\n        grid-template-rows: 100px 1fr;\r\n        grid-template-areas:\r\n        \"middleBar\"\r\n        \"gallery\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    box-sizing: border-box;\r\n}\r\n#image-preview-container {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    min-width: 200px;\r\n}\r\n#image-preview {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n/* Middle bar  */\r\n.image-input-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: imageInput;\r\n    min-width: 100px;\r\n    resize: none;\r\n    outline: none;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    font-family: 'Helvetica', sans-serif;\r\n    background: silver;\r\n    color: rgb(34, 34, 34);\r\n    flex-wrap: wrap;\r\n}\r\n.image-input-area h3 {\r\n    font-size: 1rem;\r\n    margin: 0 10px;\r\n}\r\n#search-form {\r\n    width: 200px;\r\n    height: 20px;\r\n    border: 2px solid rgb(65, 65, 65);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    margin: 0;\r\n}\r\n#search-bar {\r\n    outline: none;\r\n    width: 70%;\r\n    height: 100%;\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0 5px;\r\n    box-sizing: border-box;\r\n}\r\n#search-bar-btn {\r\n    background: rgb(65, 65, 65);\r\n    color: silver;\r\n    width: 30%;\r\n    height: 100%;\r\n    border: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n#search-bar-btn:hover {\r\n    background: rgb(104, 104, 104);\r\n}\r\n#sandbox-add-btn-group {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: addBtn;\r\n    background: rgb(94, 94, 94);\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    margin: 5px 5px 5px 0;\r\n}\r\n#sandbox-add-btn-group:hover{\r\n    background: rgb(119, 119, 119);\r\n}\r\n#sandbox-add-btn-group fa {\r\n    font-size: 3vh;\r\n}\r\n#sandbox-add-btn-group p {\r\n    font-size: 0.7rem;\r\n    text-align: center;\r\n    margin: 3px 2px;\r\n    word-wrap: break-word;\r\n    box-sizing: border-box;\r\n    max-width: 90%;\r\n}\r\n#menu-tab-container {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: menuTabs;\r\n    padding: 0 10px;\r\n    box-sizing: border-box;\r\n}\r\n#menu-tab-container a,\r\n#pixabay-logo {\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n    background: silver;\r\n    color: rgb(65, 65, 65);\r\n    height: 100%;\r\n    width: 150px;\r\n    box-sizing: border-box;\r\n    padding: 4px 0;\r\n    text-align: center;\r\n    margin-right: 7px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.tab-selected {\r\n    background: rgb(233, 233, 233) !important;\r\n}\r\n/*  Gallery */\r\n.gallery {\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    border-top: 7px solid rgb(233, 233, 233);\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1rem;\r\n    font-family: 'Helvetica', sans-serif;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: gallery;\r\n    box-sizing: border-box;\r\n    background: rgb(233, 233, 233); \r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    overflow: auto;\r\n}\r\n.gallery-message {\r\n    width: 100%;\r\n    min-width: 150px;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    color: rgb(65, 65, 65);\r\n}\r\n.gallery-img-container {\r\n    background: #000;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n    margin: 7px;\r\n    height: 75px;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.gallery-img {\r\n    height: 100%;\r\n    opacity: 0.8;\r\n}\r\n.gallery-img:hover {\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n.delete-icon {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: #FFF;\r\n    border-radius: 50%;\r\n    height: 12px;\r\n    width: 12px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    border: 2px #FFF solid;\r\n    opacity: 0.6;\r\n    font-size: 0.8rem\r\n}\r\n.delete-icon:hover {\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/image-sandbox/image-sandbox.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-sandbox/image-sandbox.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"sandbox-container\" id=\"image-sandbox\">\r\n  <div class=\"preview-area flex-row-center\">\r\n    <div id=\"image-preview-container\">\r\n    <img id=\"image-preview\" *ngIf=\"selectedImage\" [src]=\"selectedImage.url\" [ngStyle]=\"selectedImageStyle.getCss()\">\r\n  </div>\r\n  </div>\r\n\r\n  <div #resizer class=\"resizer\"></div>\r\n\r\n  <div class=\"sandbox-bottom\">\r\n    <div #middlebar class=\"middle-bar\">\r\n      <div class=\"flex-row-center image-input-area\" *ngIf=\"viewGallery\">\r\n          <h3>Import an image:</h3>\r\n\r\n          <input type=\"file\" (change)=\"this.sandbox.uploadImage($event)\">\r\n      </div>\r\n\r\n      <div class=\"flex-row-center image-input-area\" *ngIf=\"viewSearchResults\">\r\n          <h3>Search for an image:</h3>\r\n          <div id=\"search-form\">\r\n          <input id=\"search-bar\" type=\"text\" [(ngModel)]=\"this.sandbox.imageSearchQuery\">\r\n          <button id=\"search-bar-btn\" type=\"submit\" (click)=\"this.sandbox.searchPixabay()\">Search</button></div>\r\n\r\n      </div>\r\n\r\n      <a (click)=\"this.sandbox.addToSlide('imageObject')\" id=\"sandbox-add-btn-group\" class=\"grayAccent02 flex-col-center\">\r\n        <fa name=\"share\"></fa>\r\n        <p>Add image object to slide</p>\r\n      </a>\r\n\r\n      <div id=\"menu-tab-container\" class=\"flex-row-start\">\r\n        <a (click)=\"showContent('gallery')\" [class.tab-selected]=\"viewGallery\">Gallery <fa name=\"th-large\"></fa></a>\r\n\r\n        <img (click)=\"showContent('search')\" id=\"pixabay-logo\" src=\"https://pixabay.com/static/img/logo.svg\"\r\n          [class.tab-selected]=\"viewSearchResults\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"gallery\" *ngIf=\"viewGallery\">\r\n\r\n      <h5 class=\"gallery-message\" *ngIf=\"!images.length\">There are no images in your gallery.</h5>\r\n\r\n      <div *ngFor=\"let image of images\" class=\"gallery-img-container\">\r\n        <img src=\"{{image.url}}\" (click)=\"this.sandbox.selectImage(image)\" class=\"gallery-img\">\r\n        <fa name=\"trash\" class=\"delete-icon flex-row-evenly\" (click)=\"this.sandbox.deleteImage(image)\"></fa>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"gallery\" *ngIf=\"viewSearchResults\">\r\n\r\n        <h5 class=\"gallery-message\">Image search powered by: <a href=\"https://pixabay.com/\" target=\"__blank\">Pixabay</a></h5>\r\n\r\n        <div *ngFor=\"let image of this.sandbox.imageSearchResults\" class=\"gallery-img-container\">\r\n            <img src=\"{{image.previewURL}}\" class=\"gallery-img\">\r\n            <fa name=\"plus\" class=\"delete-icon flex-row-evenly\" (click)=\"this.sandbox.pixabayToGallery(image.largeImageURL)\"></fa>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/image-sandbox/image-sandbox.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-sandbox/image-sandbox.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageSandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSandboxComponent", function() { return ImageSandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_horizontalResizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/horizontalResizer */ "./src/app/classes/horizontalResizer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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





var ImageSandboxComponent = /** @class */ (function () {
    function ImageSandboxComponent(store, sandbox) {
        this.store = store;
        this.sandbox = sandbox;
        this.viewGallery = true;
        this.viewSearchResults = false;
    }
    ImageSandboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enableResizer();
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.selectedImage = projectState.selectedImage;
            _this.selectedImageStyle = projectState.selectedImageStyle;
            _this.images = projectState.images;
        });
    };
    ImageSandboxComponent.prototype.showContent = function (view) {
        switch (view) {
            case 'gallery':
                this.viewGallery = true;
                this.viewSearchResults = false;
                break;
            case 'search':
                this.viewGallery = false;
                this.viewSearchResults = true;
                break;
        }
    };
    ImageSandboxComponent.prototype.enableResizer = function () {
        var containerElement = this.container.nativeElement;
        var resizerElement = this.resizer.nativeElement;
        var lowerBoundElement = this.middlebar.nativeElement;
        var horizontalResizer = new _classes_horizontalResizer__WEBPACK_IMPORTED_MODULE_1__["HorizontalResizer"](containerElement, resizerElement, lowerBoundElement);
        horizontalResizer.init();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageSandboxComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('middlebar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageSandboxComponent.prototype, "middlebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageSandboxComponent.prototype, "container", void 0);
    ImageSandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-sandbox',
            template: __webpack_require__(/*! ./image-sandbox.component.html */ "./src/app/image-sandbox/image-sandbox.component.html"),
            styles: [__webpack_require__(/*! ./image-sandbox.component.css */ "./src/app/image-sandbox/image-sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["SandboxAppLogicService"]])
    ], ImageSandboxComponent);
    return ImageSandboxComponent;
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

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-container {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 0;\r\n        -ms-grid-rows: auto 0 auto 0 1fr;\r\n        grid-template-rows: auto auto 1fr;\r\n        -ms-grid-columns: 275px 0 1fr 0 10px 0 1fr;\r\n        grid-template-columns: 275px 1fr 10px 1fr;\r\n        grid-template-areas:\r\n        \"toolbar toolbar toolbar toolbar\"\r\n        \"styler toolbar2 toolbar2 toolbar2\"\r\n        \"styler sandbox resizer editor\"\r\n}\r\n\r\n#toolbar {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 7;\r\n    grid-area: toolbar;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#toolbar-secondary {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 5;\r\n    grid-area: toolbar2;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#styler {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-row-span: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: styler;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n#sandbox {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 3;\r\n    grid-area: sandbox;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#slide-editor {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 7;\r\n    grid-area: editor;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#resizer {\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 5;\r\n    grid-area: resizer;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: silver;\r\n}\r\n\r\n#resizer:hover {\r\n    cursor: col-resize;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\" #appContainer class=\"grayAccent01\">\r\n\r\n  <div id=\"toolbar\" #toolbar>\r\n    <toolbar></toolbar>\r\n  </div>\r\n\r\n  <div id=\"toolbar-secondary\">\r\n    <toolbar-secondary></toolbar-secondary>\r\n  </div>\r\n\r\n  <div id=\"styler\" #styler>\r\n    <styler></styler>\r\n  </div>\r\n\r\n  <div id=\"sandbox\" #sandbox>\r\n    <text-sandbox *ngIf=\"viewTextElements\"></text-sandbox>\r\n    <image-sandbox *ngIf=\"viewImageElements\"></image-sandbox>\r\n  </div>\r\n\r\n  <div id=\"resizer\" #resizer></div>\r\n\r\n  <div id=\"slide-editor\" #slideEditor>\r\n    <slide-editor></slide-editor>\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-dialog></app-dialog>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(elementRef, data, store) {
        var _this = this;
        this.elementRef = elementRef;
        this.data = data;
        this.store = store;
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
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enableResizer();
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.viewTextElements = projectState.viewTextElements;
            _this.viewImageElements = projectState.viewImageElements;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "appContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('styler'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "styler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sandbox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "sandbox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideEditor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "slideEditor", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-font-picker */ "./node_modules/ngx-font-picker/dist/ngx-font-picker.es5.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _styler_styler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styler/styler.component */ "./src/app/styler/styler.component.ts");
/* harmony import */ var _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slide-editor/slide-editor.component */ "./src/app/slide-editor/slide-editor.component.ts");
/* harmony import */ var _text_style_card_text_style_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../text-style-card/text-style-card.component */ "./src/app/text-style-card/text-style-card.component.ts");
/* harmony import */ var _image_style_card_image_style_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image-style-card/image-style-card.component */ "./src/app/image-style-card/image-style-card.component.ts");
/* harmony import */ var _image_sandbox_image_sandbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-sandbox/image-sandbox.component */ "./src/app/image-sandbox/image-sandbox.component.ts");
/* harmony import */ var _text_sandbox_text_sandbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../text-sandbox/text-sandbox.component */ "./src/app/text-sandbox/text-sandbox.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../toolbar-app-logic.service */ "./src/app/toolbar-app-logic.service.ts");
/* harmony import */ var _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../toolbar2-app-logic.service */ "./src/app/toolbar2-app-logic.service.ts");
/* harmony import */ var _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styler-app-logic.service */ "./src/app/styler-app-logic.service.ts");
/* harmony import */ var _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sandbox-app-logic.service */ "./src/app/sandbox-app-logic.service.ts");
/* harmony import */ var _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../slide-editor-app-logic.service */ "./src/app/slide-editor-app-logic.service.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _toolbar_secondary_toolbar_secondary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../toolbar-secondary/toolbar-secondary.component */ "./src/app/toolbar-secondary/toolbar-secondary.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
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
var routes = [
    { path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"] } // default route of the module
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__["FontPickerModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_19__["AngularDraggableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                _styler_styler_component__WEBPACK_IMPORTED_MODULE_6__["StylerComponent"],
                _text_sandbox_text_sandbox_component__WEBPACK_IMPORTED_MODULE_11__["TextSandboxComponent"],
                _image_sandbox_image_sandbox_component__WEBPACK_IMPORTED_MODULE_10__["ImageSandboxComponent"],
                _slide_editor_slide_editor_component__WEBPACK_IMPORTED_MODULE_7__["SlideEditorComponent"],
                _text_style_card_text_style_card_component__WEBPACK_IMPORTED_MODULE_8__["TextStyleCardComponent"],
                _image_style_card_image_style_card_component__WEBPACK_IMPORTED_MODULE_9__["ImageStyleCardComponent"],
                _toolbar_secondary_toolbar_secondary_component__WEBPACK_IMPORTED_MODULE_20__["ToolbarSecondaryComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DialogComponent"],
                _main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"]
            ],
            providers: [_toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_13__["ToolbarAppLogicService"], _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_14__["Toolbar2AppLogicService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_15__["StylerAppLogicService"], _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_16__["SandboxAppLogicService"], _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_17__["SlideEditorAppLogicService"], _dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"], {
                    provide: ngx_font_picker__WEBPACK_IMPORTED_MODULE_3__["FONT_PICKER_CONFIG"],
                    useValue: DEFAULT_FONT_PICKER_CONFIG
                }],
        })
    ], MainModule);
    return MainModule;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
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
    function SandboxAppLogicService(http, data, dialog, store) {
        this.http = http;
        this.data = data;
        this.dialog = dialog;
        this.store = store;
        this.imageSearchQuery = "";
    }
    SandboxAppLogicService.prototype.getProjectState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.store.select('projectReducer')
                .subscribe(function (projectState) {
                if (!projectState)
                    reject();
                resolve(projectState);
            });
        })
            .catch(function (error) { console.log(error); });
    };
    SandboxAppLogicService.prototype.pixabayToGallery = function (url) {
        var _this = this;
        this.data.getProjectState().then(function (projectState) {
            var galleryImage = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_3__["GalleryImage"]();
            galleryImage.url = url;
            galleryImage.id = projectState['images'].length;
            _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["ADD_IMAGE"], payload: { galleryImage: galleryImage } });
            _this.dialog.toast('Added to gallery.');
        });
    };
    SandboxAppLogicService.prototype.searchPixabay = function () {
        var _this = this;
        var url = 'https://pixabay.com/api/?';
        var apiKey = '7780146-3f3faea2d00a0e8da80a92f14';
        this.http.get(url + 'key=' + apiKey + '&q=' + this.imageSearchQuery).subscribe(function (res) {
            _this.imageSearchResults = res['hits'];
        });
    };
    SandboxAppLogicService.prototype.addToSlide = function (type) {
        switch (type) {
            case 'textObject':
                this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["ADD_TEXTOBJECT"] });
                break;
            case 'imageObject':
                this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["ADD_IMAGEOBJECT"] });
                break;
        }
    };
    SandboxAppLogicService.prototype.uploadImage = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var url = e.target.result;
            _this.data.getProjectState().then(function (projectState) {
                var galleryImage = new _classes_galleryImage__WEBPACK_IMPORTED_MODULE_3__["GalleryImage"]();
                galleryImage.url = url.toString();
                galleryImage.id = projectState['images'].length;
                _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["ADD_IMAGE"], payload: { galleryImage: galleryImage } });
            })
                .catch(function (error) { console.log(error); });
        };
    };
    SandboxAppLogicService.prototype.selectImage = function (galleryImage) {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["SELECT_GALLERY_IMAGE"], payload: { galleryImage: galleryImage } });
    };
    SandboxAppLogicService.prototype.deleteImage = function (image) {
        var _this = this;
        var callback = function () {
            _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_6__["DEL_IMAGE"], payload: { galleryImage: image } });
        };
        this.dialog.alert("Are you sure you want to delete this image from your project?", 'danger', callback);
    };
    SandboxAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], SandboxAppLogicService);
    return SandboxAppLogicService;
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
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
    function SlideEditorAppLogicService(data, dialog, store) {
        this.data = data;
        this.dialog = dialog;
        this.store = store;
    }
    SlideEditorAppLogicService.prototype.layerUp = function (slideObject) {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["SLIDEOBJECT_LAYER_UP"], payload: { slideObject: slideObject } });
    };
    SlideEditorAppLogicService.prototype.layerDown = function (slideObject) {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["SLIDEOBJECT_LAYER_DOWN"], payload: { slideObject: slideObject } });
    };
    SlideEditorAppLogicService.prototype.deleteSlideOjbect = function (slideObject) {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["DEL_SLIDEOBJECT"], payload: { slideObject: slideObject } });
    };
    SlideEditorAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
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

module.exports = "#slide-editor-workspace {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: 375px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 500px 10px 1fr;\r\n        grid-template-rows: 500px 10px 1fr;\r\n        grid-template-areas:\r\n        \"render\"\r\n        \"editorResizer\"\r\n        \"control\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n} \r\n\r\n#slide-render-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: render;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    background: linear-gradient(to bottom right, rgb(16, 16, 17), rgb(53, 53, 53));\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n} \r\n\r\n#slide-editor-resizer {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: editorResizer;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: gray;\r\n    position: relative;\r\n} \r\n\r\n#slide-editor-resizer:hover {\r\n    cursor: row-resize;\r\n} \r\n\r\n#slide-control {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: control;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: auto 1fr;\r\n        grid-template-rows: auto 1fr;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n} \r\n\r\n.slide-object {\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n} \r\n\r\n.slide-object img {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n} \r\n\r\n/*  Styling of slideObjects while being dragged or resized is controlled from within the SlideObjects class */ \r\n\r\n.slide-object:hover{\r\n    cursor: move;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    border: 2px dashed gray;\r\n    margin-top: -2px;\r\n    margin-left: -2px;\r\n} \r\n\r\n#slide-control-toolbar {\r\n    width: 100%;\r\n    padding: 5px;\r\n    background: rgb(46, 46, 46);\r\n    flex-wrap: wrap;\r\n} \r\n\r\n#slide-control-toolbar > div {\r\n    margin: 2px 7px;\r\n} \r\n\r\n#slide-control-toolbar fa {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n} \r\n\r\n#slide-control-toolbar fa:hover {\r\n    background: rgb(87, 87, 87);\r\n} \r\n\r\n#slide-control-toolbar p {\r\n    font-size: 0.7rem;\r\n    margin: 0 5px;\r\n} \r\n\r\ninput[type=\"range\"]{\r\n    width: 5vw;\r\n} \r\n\r\ninput[type=\"number\"]{\r\n    width: 45px;\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #FFF;\r\n    border: 1px #FFF solid;\r\n    text-align: center;\r\n} \r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n} \r\n\r\ninput[type=\"text\"]{\r\n    width: 85%;\r\n} \r\n\r\n#heirarchy {\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    position: relative;\r\n} \r\n\r\n.heirarchy-control-group {\r\n    font-size: 0.7rem;\r\n    overflow: hidden;\r\n    padding: 2px 0;\r\n    margin: 0 5px;\r\n    font-weight: normal;\r\n    position: relative;\r\n} \r\n\r\n.heirarchy-control-group h5 {\r\n    font-weight: normal;\r\n} \r\n\r\n.heirarchy-control-group fa {\r\n    font-size: 0.75rem;\r\n    padding: 5px;\r\n} \r\n\r\n.heirarchy-control-group fa:hover {\r\n    background-color: rgb(100, 100, 100);\r\n    cursor: pointer;\r\n} \r\n\r\n#heirarchy\r\ninput[type=\"text\"]{\r\n    margin: 0 3px;\r\n    padding: 2px;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    color: #FFF;\r\n    border: 1px #FFF solid;\r\n} \r\n\r\n.heirarchy-name {\r\n    width: 125px;\r\n} \r\n\r\n.heirarchy-content {\r\n    width:125px;\r\n} \r\n\r\n.heirarchy-dim {\r\n    width: 250px;\r\n} \r\n\r\n.heirarchy-content-misc {\r\n    width: 150px;\r\n} \r\n\r\n.slide-control-row {\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n    padding: 2px 0;\r\n    border-bottom: 3px rgb(81, 133, 81) solid; \r\n    position: relative;\r\n} \r\n\r\n.md-color-selector {\r\n    width: 100px;\r\n    height: 10px;\r\n    border: 1px #D6F9DD solid;\r\n    outline: none;\r\n} \r\n\r\n.md-color-selector:hover {\r\n    cursor: pointer;\r\n} \r\n\r\n@media screen and (min-width: 1200px) {\r\n    .slide-editor-toolbar-btn-group p {\r\n       font-size: 0.8rem;\r\n    }\r\n\r\n    #slide-number {\r\n        font-size: 1.5rem;\r\n    }\r\n  }\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/slide-editor/slide-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/slide-editor/slide-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slide-editor-workspace\" #workspace>\r\n  <div id=\"slide-render-area\" #slideRenderArea>\r\n    <div id=\"slide-render\" #slideRender [ngStyle]=\"getSlideRenderCss()\">\r\n      <div *ngFor=\"let slideObject of slides[currentSlideIndex].slideObjects\" \r\n      class=\"slide-object\"\r\n        [ngStyle]=\"slideObject.getCss()\" \r\n        (mousedown)=\"selectObject(slideObject)\" \r\n        ngResizable \r\n        [rzHandles]=\"'all'\"\r\n        (rzStart)=\"slideObject.setProperty('isResizing', true)\" \r\n        (rzStop)=\"slideObject.setSize($event); slideObject.setProperty('isResizing', false)\"\r\n        ngDraggable \r\n        (started)=\"slideObject.setProperty('isDragging', true)\" \r\n        (stopped)=\"slideObject.setProperty('isDragging', false)\"\r\n        (endOffset)=\"slideObject.setTranslation($event)\" \r\n        [position]=\"slideObject.getTranslation()\"\r\n        [rzAspectRatio]=\"slideObject.constructor.name==='ImageObject'? true: false\">\r\n\r\n        <p *ngIf=\"slideObject.constructor.name==='TextObject'\" [ngStyle]=\"slideObject.style.getCss()\">{{slideObject.textValue}}</p>\r\n        <img *ngIf=\"slideObject.constructor.name==='ImageObject'\" [ngStyle]=\"slideObject.style.getCss()\"\r\n          [src]=\"slideObject.imagePath\" crossOrigin=\"anonymous\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"slide-editor-resizer\" #resizer>\r\n    \r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"slides.length > 0\" id=\"slide-control\" class=\"grayAccent02\">\r\n\r\n    <div id=\"slide-control-toolbar\" #controlToolbar class=\"grayAccent02 flex-row-center\">\r\n      <div class=\"flex-row-evenly\">\r\n        <p>Set background color: </p>\r\n        <div class=\"md-color-selector\" [(colorPicker)]=\"slides[currentSlideIndex].backgroundColor\"\r\n          [style.background]=\"slides[currentSlideIndex].backgroundColor\"></div>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <fa name=\"search-minus\" class=\"flex-row-evenly\" (click)=\"this.zoom('out')\"></fa>\r\n\r\n        <input type='range' [(ngModel)]=\"slideRenderMagnification\" min=\"0\" max=\"200\" (ngModelChange)=\"this.renderZoomController()\">\r\n\r\n        <fa name=\"search-plus\" class=\"flex-row-evenly\" (click)=\"this.zoom('in')\"></fa>\r\n\r\n        <p>\r\n          <input type=\"number\" [(ngModel)]=\"slideRenderMagnification\">%</p>\r\n      </div>\r\n\r\n      <div class=\"flex-row-evenly\">\r\n        <p>{{documentSize.width}}px X {{documentSize.height}}px</p>\r\n\r\n      <fa class=\"flex-row-evenly\" [name]=\"this.showRenderOverflow ? 'object-ungroup' : 'object-group'\" (click)=\"this.toggleRenderOverflow()\"></fa>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"heirarchy\">\r\n      <div *ngFor=\"let slideObject of slides[currentSlideIndex].slideObjects.reverse()\" class=\"slide-control-row flex-row-center grayAccent02\"\r\n        [style.background]=\"isSlideObjectSelected(slideObject) ? 'green' : 'none'\">\r\n        <div class=\"flex-row-evenly heirarchy-control-group heirarchy-name\">\r\n          <div *ngIf=\"!slideObject.editNameMode\" class=\"flex-row-evenly\">\r\n            <h5>{{slideObject.name}}</h5>\r\n            <fa name=\"edit\" (click)=\"slideObject.toggleProperty('editNameMode')\"></fa>\r\n          </div>\r\n          <div *ngIf=\"slideObject.editNameMode\" class=\"flex-row-evenly\">\r\n            <input type=\"text\" [(ngModel)]=\"slideObject.name\" (placeholder)=\"slideObject.name\">\r\n            <fa name=\"save\" (click)=\"slideObject.toggleProperty('editNameMode')\"></fa>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.constructor.name==='TextObject'\" class=\"flex-row-evenly heirarchy-content heirarchy-control-group\">\r\n          <div *ngIf=\"!slideObject.editTextMode\" class=\"flex-row-evenly\">\r\n            <h5>{{slideObject.textValue.substring(0, 15) + '...'}}</h5>\r\n            <fa name=\"edit\" (click)=\"slideObject.toggleProperty('editTextMode')\"></fa>\r\n          </div>\r\n\r\n          <div *ngIf=\"slideObject.editTextMode\" class=\"flex-row-evenly\">\r\n            <input type=\"text\" [(ngModel)]=\"slideObject.textValue\" (placeholder)=\"slideObject.textValue\">\r\n            <fa name=\"save\" (click)=\"slideObject.toggleProperty('editTextMode')\"></fa>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"slideObject.constructor.name==='ImageObject'\" class=\"flex-row-evenly heirarchy-control-group heirarchy-content\">\r\n          <h5>ImageObject</h5>\r\n        </div>\r\n\r\n        <div class=\"heirarchy-control-group heirarchy-content-misc flex-row-evenly\">\r\n          <fa (click)=\"this.slideEditor.layerUp(slideObject)\" name=\"arrow-up\"></fa>\r\n          <fa (click)=\"this.slideEditor.layerDown(slideObject)\" name=\"arrow-down\"></fa>\r\n          <fa (click)=\"slideObject.toggleProperty('display')\" [name]=\"slideObject.display ? 'eye' : 'eye-slash'\"></fa>\r\n          <fa (click)=\"this.slideEditor.deleteSlideOjbect(slideObject)\" name=\"trash\"></fa>\r\n        </div>\r\n\r\n        <div class=\"heirarchy-control-group heirarchy-dim flex-row-evenly\">\r\n          <h5>X:</h5>\r\n          <input type=\"number\" [(ngModel)]=\"slideObject.xTranslation\">\r\n          <h5>Y:</h5>\r\n          <input type=\"number\" [(ngModel)]=\"slideObject.yTranslation\">\r\n\r\n          <h5>H:</h5>\r\n          <input type=\"number\" #heightInput [ngModel]=\"slideObject.height\" (change)=\"maintainRatio(slideObject, 'height', heightInput.value)\">\r\n\r\n          <h5>W:</h5>\r\n          <input type=\"number\" #widthInput [ngModel]=\"slideObject.width\" (change)=\"maintainRatio(slideObject, 'width', widthInput.value)\">\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function SlideEditorComponent(data, dialog, slideEditor, store) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.slideEditor = slideEditor;
        this.store = store;
        this.slideRenderMagnification = 50;
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
        var _this = this;
        this.enableSlideEditorResizer();
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.slides = projectState.slides;
            _this.currentSlideIndex = projectState.currentSlideIndex;
            _this.documentSize = projectState.documentSize;
            _this.textStyles = projectState.textStyles;
            _this.imageStyles = projectState.imageStyles;
        });
    };
    // Resizer functions
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
        var render = this.slideRender.nativeElement;
        var renderHeight = render.offsetHeight * this.slideRenderMagnification / 100;
        var renderWidth = render.clientWidth * this.slideRenderMagnification / 100;
        var renderArea = this.slideRenderArea.nativeElement;
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
        var backgroundColor = this.slides[this.currentSlideIndex].getProperty('backgroundColor');
        var width = this.documentSize['width'];
        var height = this.documentSize['height'];
        var render = this.slideRender.nativeElement;
        var renderHeight = render.offsetHeight * this.slideRenderMagnification / 100;
        var renderWidth = render.clientWidth * this.slideRenderMagnification / 100;
        var renderArea = this.slideRenderArea.nativeElement;
        var renderAreaHeight = renderArea.offsetHeight;
        var renderAreaWidth = renderArea.clientWidth;
        var css = {
            'background': backgroundColor,
            'height': height + 'px',
            'width': width + 'px',
            'transform-origin': '0 0',
            'transform': 'scale(' + this.slideRenderMagnification / 100 + ')',
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
    SlideEditorComponent.prototype.getSlideObjectStyle = function (slideObject) {
        var slideObjectType = slideObject.constructor.name;
        switch (slideObjectType) {
            case 'TextObject':
                return this.textStyles[0];
            case 'ImageObject':
                return this.imageStyles[0];
        }
    };
    // Slide editor control panel functions
    SlideEditorComponent.prototype.selectObject = function (slideObject) {
        this.selectedSlideObject = slideObject;
    };
    SlideEditorComponent.prototype.isSlideObjectSelected = function (slideObject) {
        if (slideObject === this.selectedSlideObject)
            return true;
        return false;
    };
    // User clicks zoom in/out
    SlideEditorComponent.prototype.zoom = function (direction) {
        var magnification = this.slideRenderMagnification;
        var increment = 5;
        switch (direction) {
            case 'in':
                if (magnification > 200 - increment) {
                    magnification = 200;
                }
                else {
                    magnification += increment;
                }
                this.slideRenderMagnification = magnification;
                break;
            case 'out':
                if (magnification < increment) {
                    magnification = 0;
                }
                else {
                    magnification -= increment;
                }
                this.slideRenderMagnification = magnification;
                break;
        }
    };
    // This controls the image size when user inputs a value in the heirarchy
    SlideEditorComponent.prototype.maintainRatio = function (slideObject, dimension, value) {
        // Get original aspect ratio of this slide object
        var ratio;
        if (slideObject.width || slideObject.height === "auto") {
            // Get ratio 
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideRender'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideEditorComponent.prototype, "slideRender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slideRenderArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideEditorComponent.prototype, "slideRenderArea", void 0);
    SlideEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-editor',
            template: __webpack_require__(/*! ./slide-editor.component.html */ "./src/app/slide-editor/slide-editor.component.html"),
            styles: [__webpack_require__(/*! ./slide-editor.component.css */ "./src/app/slide-editor/slide-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _slide_editor_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["SlideEditorAppLogicService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
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
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function StylerAppLogicService(data, dialog, store) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.store = store;
        this.deleteStyle = function (style) {
            _this.data.getProjectState()
                .then(function (projectState) {
                if (!_this.isStyleInUse(style, projectState))
                    _this.confirmedDelete(style);
                else
                    console.log('Style is in use.');
            })
                .catch(function (error) { console.log(error); });
        };
        this.confirmedDelete = function (style) {
            var styleType = style.constructor.name;
            switch (styleType) {
                case 'TextStyle':
                    _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_3__["DEL_TEXTSTYLE"], payload: { textStyle: style } });
                    break;
                case 'ImageStyle':
                    _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_3__["DEL_IMAGESTYLE"], payload: { imageStyle: style } });
                    break;
            }
        };
        this.isStyleInUse = function (style, projectState) {
            var styleType = style.constructor.name;
            var slides = projectState['slides'];
            if (!slides)
                return false;
            slides.forEach(function (slide) {
                for (var i = 0; i < slide.slideObjects.length; i++) {
                    var slideObject = slide.slideObjects[i];
                    var slideObjectType = slideObject.constructor.name;
                    switch (styleType) {
                        case 'TextStyle': if (slideObjectType === 'TextObject' && style.id === slideObject.styleId)
                            return true;
                        case 'ImageStyle': if (slideObjectType === 'ImageObject' && style.id === slideObject.styleId)
                            return true;
                        default: return false;
                    }
                }
            });
        };
    }
    StylerAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
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

module.exports = "<!-- <a (click)=\"test()\">TEST</a> -->\r\n<div class=\"style-card-container accent05\" *ngIf=\"viewTextElements\">\r\n  <text-style-card [textStyle]=\"textStyle\" *ngFor=\"let textStyle of textStyles\"></text-style-card>\r\n</div>\r\n\r\n<div class=\"style-card-container accent05\" *ngIf=\"viewImageElements\">\r\n  <image-style-card [imageStyle]=\"imageStyle\" *ngFor=\"let imageStyle of imageStyles\"></image-style-card>\r\n</div>\r\n\r\n "

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function StylerComponent(data, styler, store) {
        this.data = data;
        this.styler = styler;
        this.store = store;
    }
    StylerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.imageStyles = projectState.imageStyles;
            _this.textStyles = projectState.textStyles;
            _this.viewTextElements = projectState.viewTextElements;
            _this.viewImageElements = projectState.viewImageElements;
        });
    };
    StylerComponent.prototype.test = function () {
        console.log('imageStyles:', this.imageStyles);
        console.log('textStyles:', this.textStyles);
        console.log('viewTextElements:', this.viewTextElements);
        console.log('viewImageElements:', this.viewImageElements);
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
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _styler_app_logic_service__WEBPACK_IMPORTED_MODULE_2__["StylerAppLogicService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], StylerComponent);
    return StylerComponent;
}());



/***/ }),

/***/ "./src/app/text-sandbox/text-sandbox.component.css":
/*!*********************************************************!*\
  !*** ./src/app/text-sandbox/text-sandbox.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  Layout  */\r\n.sandbox-container  {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n        -ms-grid-rows: 500px 10px 1fr;\r\n        grid-template-rows: 500px 10px 1fr;\r\n        grid-template-areas:\r\n        \"previewArea\"\r\n        \"resizer\"\r\n        \"bottom\";\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.preview-area {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: previewArea;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(to bottom right, rgb(179, 179, 179), rgb(241, 241, 241));\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n}\r\n.resizer {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: resizer;\r\n    height: 10px;\r\n    width: 100%;\r\n    background: gray;\r\n    cursor: row-resize\r\n}\r\n.middle-bar {\r\n    width: 100%;\r\n    height: 100px;\r\n    background: rgb(65, 65, 65);\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-columns: 1fr 100px;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: middleBar;\r\n}\r\n.sandbox-bottom {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: bottom;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgb(235, 235, 235);\r\n        -ms-grid-rows: 100px 1fr;\r\n        grid-template-rows: 100px 1fr;\r\n        grid-template-areas:\r\n        \"middleBar\"\r\n        \"notes\";\r\n    position: absolute;\r\n   \r\n}\r\n/* Preview area */\r\n#text-preview-container {\r\n    border: 2px dashed rgba(0, 0, 0, 0.3);\r\n    min-width: 75px;\r\n    word-wrap: break-word;\r\n}\r\n/* Middle bar  */\r\n#main-textarea {\r\n    min-width: 100px;\r\n    resize: none;\r\n    outline: none;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    font-family: 'Helvetica', sans-serif;\r\n}\r\n#sandbox-add-btn-group {\r\n    background: rgb(94, 94, 94);\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    margin: 5px 5px 5px 0;\r\n}\r\n#sandbox-add-btn-group:hover{\r\n    background: rgb(119, 119, 119);\r\n}\r\n#sandbox-add-btn-group fa {\r\n    font-size: 3vh;\r\n}\r\n#sandbox-add-btn-group p {\r\n    font-size: 0.7rem;\r\n    text-align: center;\r\n    margin: 3px auto;\r\n    max-width: 90%;\r\n    word-wrap: break-word;\r\n}\r\n/*  Notes */\r\n#notes-textarea {\r\n    resize: none;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    border: 0;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1rem;\r\n    font-family: 'Helvetica', sans-serif;\r\n    position: relative;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: notes;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/text-sandbox/text-sandbox.component.html":
/*!**********************************************************!*\
  !*** ./src/app/text-sandbox/text-sandbox.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"sandbox-container\" id=\"text-sandbox\">\r\n    <div class=\"preview-area flex-row-center\">\r\n        <div id=\"text-preview-container\" *ngIf=\"sandboxText\">\r\n            <p [ngStyle]=\"selectedTextStyle.getCss()\">{{sandboxText}}</p>\r\n          </div>\r\n    </div>\r\n  \r\n    <div #resizer class=\"resizer\"></div>\r\n  \r\n    <div class=\"sandbox-bottom\">\r\n      <div #middlebar class=\"middle-bar\">\r\n        <textarea id=\"main-textarea\" [(ngModel)]=\"sandboxText\"></textarea>\r\n        <a (click)=\"this.sandbox.addToSlide('textObject')\" id=\"sandbox-add-btn-group\" class=\"grayAccent02 flex-col-center\">\r\n            <fa name=\"share\"></fa>\r\n            <p>Add text object to slide</p>\r\n          </a>\r\n      </div>\r\n      \r\n      <textarea id=\"notes-textarea\" [(ngModel)]=\"textNotes\"></textarea>\r\n      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/text-sandbox/text-sandbox.component.ts":
/*!********************************************************!*\
  !*** ./src/app/text-sandbox/text-sandbox.component.ts ***!
  \********************************************************/
/*! exports provided: TextSandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSandboxComponent", function() { return TextSandboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_horizontalResizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/horizontalResizer */ "./src/app/classes/horizontalResizer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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





var TextSandboxComponent = /** @class */ (function () {
    function TextSandboxComponent(store, sandbox) {
        this.store = store;
        this.sandbox = sandbox;
    }
    TextSandboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enableResizer();
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.sandboxText = projectState.sandboxText;
            _this.selectedTextStyle = projectState.selectedTextStyle;
            _this.textNotes = projectState.textNotes;
        });
    };
    TextSandboxComponent.prototype.enableResizer = function () {
        var containerElement = this.container.nativeElement;
        var resizerElement = this.resizer.nativeElement;
        var lowerBoundElement = this.middlebar.nativeElement;
        var horizontalResizer = new _classes_horizontalResizer__WEBPACK_IMPORTED_MODULE_1__["HorizontalResizer"](containerElement, resizerElement, lowerBoundElement);
        horizontalResizer.init();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TextSandboxComponent.prototype, "resizer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('middlebar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TextSandboxComponent.prototype, "middlebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TextSandboxComponent.prototype, "container", void 0);
    TextSandboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-sandbox',
            template: __webpack_require__(/*! ./text-sandbox.component.html */ "./src/app/text-sandbox/text-sandbox.component.html"),
            styles: [__webpack_require__(/*! ./text-sandbox.component.css */ "./src/app/text-sandbox/text-sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _sandbox_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["SandboxAppLogicService"]])
    ], TextSandboxComponent);
    return TextSandboxComponent;
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ToolbarAppLogicService(router, data, dialog, store, user, http) {
        this.router = router;
        this.data = data;
        this.dialog = dialog;
        this.store = store;
        this.user = user;
        this.http = http;
    }
    ToolbarAppLogicService.prototype.dashboard = function () {
        this.data.saveProject();
        this.router.navigate(['dashboard']);
    };
    ToolbarAppLogicService.prototype.createTextStyle = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["ADD_TEXTSTYLE"] });
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["SET_MODE"], payload: { mode: 'text' } });
    };
    ToolbarAppLogicService.prototype.createImageStyle = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["ADD_IMAGESTYLE"] });
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["SET_MODE"], payload: { mode: 'image' } });
    };
    ToolbarAppLogicService.prototype.selectStyle = function (style) {
        var styleType = style.constructor.name;
        switch (styleType) {
            case 'TextStyle':
                this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["SELECT_TEXTSTYLE"], payload: { textStyle: style } });
                break;
            case 'ImageStyle':
                this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_5__["SELECT_IMAGESTYLE"], payload: { imageStyle: style } });
                break;
        }
    };
    ToolbarAppLogicService.prototype.save = function () {
        this.data.saveProject().then(function (res) {
            console.log(res);
            // let message = 'Your project has been saved!';
            // this.dialog.alert(message, 'success')
        });
    };
    ToolbarAppLogicService.prototype.saveAsPng = function () {
        // // Parent container must be set to overflow: visible to capture entire canvas
        // let slideEditor = document.getElementById('slide-editor');
        // slideEditor.style.overflow = "visible";
        // html2canvas(document.getElementById("slide-render"), {
        //   height: this.data.documentSize.height,
        //   width: this.data.documentSize.width,
        //   scale: 2,
        //   allowTaint: true
        // }).then(canvas => {
        //   let imgElement = document.createElement('a');
        //   let imgData = canvas.toDataURL("image/png");
        //   imgElement.href = imgData;
        //   imgElement.download = "slide.png";
        //   imgElement.click();
        //   // Change styleEditor overflow back to original value
        //   slideEditor.style.overflow = "hidden";
        // });
    };
    ToolbarAppLogicService.prototype.exportAsPDF = function () {
        // this.data.slideRenderMagnification = 100;
        // this.data.currentSlideIndex = 0;
        // let slideRender = document.getElementById('slide-render');
        // let originalOverflowSR = slideRender.style.overflow;
        // slideRender.style.overflow = "visible";
        // // Parent container must be set to overflow: visible to capture entire canvas
        // let slideRenderArea = document.getElementById('slide-render-area');
        // let originalWidth = slideRenderArea.style.width;
        // let originalOverflowSRA = slideRenderArea.style.overflow;
        // slideRenderArea.style.width = "auto";
        // slideRenderArea.style.overflow = "visible";
        // let doc = new jsPDF({
        //   orientation: "landscape",
        //   unit: "in",
        //   format: [16, 9]
        // });
        // let pdfWidth = doc.internal.pageSize.width;
        // let pdfHeight = doc.internal.pageSize.height;
        // // To make the img output size match the pdf size, make sure that:
        // // canvas output size * scale factor === pdf document size converted to px
        // let addSlides = () => {
        //   // Adds slides to jsPdf document recursively and saves when last slide has been added
        //   setTimeout(() => {
        //     if (this.data.currentSlideIndex === this.data.slides.length) {
        //       this.data.currentSlideIndex = 0;
        //       doc.save("a4.pdf");
        //       // Change styleEditor overflow back to original value
        //       slideRenderArea.style.width = originalWidth;
        //       slideRenderArea.style.overflow = originalOverflowSRA;
        //       slideRender.style.overflow = originalOverflowSR;
        //       return;
        //     } else {
        //       html2canvas(slideRender, {
        //         height: this.data.documentSize.height,
        //         width: this.data.documentSize.width,
        //         scale: 2,
        //         allowTaint: false,
        //         useCORS: true
        //       }).then(canvas => {
        //         let imgData = canvas.toDataURL("image/png");
        //         doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        //         this.data.currentSlideIndex += 1;
        //         if (this.data.currentSlideIndex < this.data.slides.length) {
        //           doc.addPage();
        //         }
        //         addSlides();
        //       });
        //     }
        //   }, 1000);
        // }
        // addSlides();
    };
    ToolbarAppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
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

module.exports = "  <div id=\"toolbar2\" class=\"grayAccent02 flex-row-evenly\">\r\n    <a (click)=\"this.toolbar2.newTextObject()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"font\" class=\"dashed-border\"></fa>\r\n      <p>New text object</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar2.newImageObject()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"image\" class=\"dashed-border\"></fa>\r\n      <p>New image object</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar2.newSlide()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"plus-square\"></fa>\r\n      <p>New slide</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar2.preview()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"play\"></fa>\r\n      <p>Preview</p>\r\n    </a>\r\n\r\n    <div class=\"flex-row-evenly\" id=\"slide-nav-group\">\r\n    <a (click)=\"this.toolbar2.prevSlide()\" class=\"flex-row-evenly\">\r\n      <fa name=\"step-backward\"></fa>\r\n    </a>\r\n\r\n    <div>\r\n      <h1 style=\"padding: 10px;\" (click)=\"this.dialog.toast('toast works')\" id=\"slide-number\">{{currentSlideIndex + 1}}/{{slides.length}}</h1>\r\n    </div>\r\n\r\n    <a (click)=\"this.toolbar2.nextSlide()\" class=\"flex-row-evenly\">\r\n      <fa name=\"step-forward\"></fa>\r\n    </a>\r\n  </div>\r\n\r\n    <a (click)=\"this.toolbar2.deleteSlide()\" class=\"flex-row-evenly toolbar2-btn-group\">\r\n      <fa name=\"trash\"></fa>\r\n      <p>Delete slide</p>\r\n    </a>\r\n  </div>\r\n\r\n"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function ToolbarSecondaryComponent(data, dialog, toolbar2, store) {
        this.data = data;
        this.dialog = dialog;
        this.toolbar2 = toolbar2;
        this.store = store;
    }
    ToolbarSecondaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.slides = projectState.slides;
            _this.currentSlideIndex = projectState.currentSlideIndex;
        });
    };
    ToolbarSecondaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar-secondary',
            template: __webpack_require__(/*! ./toolbar-secondary.component.html */ "./src/app/toolbar-secondary/toolbar-secondary.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-secondary.component.css */ "./src/app/toolbar-secondary/toolbar-secondary.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _toolbar2_app_logic_service__WEBPACK_IMPORTED_MODULE_3__["Toolbar2AppLogicService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
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

module.exports = "#toolbar-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows:  minmax(50px, 7vh);\r\n        grid-template-rows:  minmax(50px, 7vh);\r\n    -ms-grid-columns: 1fr 50vw 1fr;\r\n        grid-template-columns: 1fr 50vw 1fr;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.toolbar-button-group-container {\r\n    width: 100%;\r\n}\r\n\r\n.toolbar-btn-group {\r\n    height: 100%;\r\n    width: 75px;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n}\r\n\r\n.toolbar-btn-group:hover {\r\n    background: rgb(80, 80, 80);\r\n}\r\n\r\n.toolbar-btn-group fa {\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.toolbar-btn-group p {\r\n    text-align: center;\r\n    font-size: 0.7rem;\r\n    margin: 3px auto 0 auto;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n#toolbar-style-selector {\r\n    box-sizing: border-box;\r\n    height: 90%;\r\n    width: auto;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    padding: 5px;\r\n    flex-grow: 1;\r\n    margin: 0 5px;\r\n}\r\n\r\n.toolbar-style-btn {\r\n    text-decoration: none;\r\n    width: 125px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    margin-right: 7px;\r\n    margin-bottom: 7px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    font-size: 0.7rem;\r\n    border: 2px transparent solid;\r\n    outline: none;\r\n}\r\n\r\n.toolbar-style-btn:hover {\r\n    background: rgb(156, 172, 149);\r\n}\r\n\r\n.selected {\r\n    background: rgb(156, 172, 149);\r\n    border: 2px white solid;\r\n}\r\n\r\n@media only screen and (max-width: 999px) {\r\n    .toolbar-btn-group p {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbar-container\">\r\n\r\n  <div class=\"flex-row-evenly toolbar-button-group-container\">\r\n      <a (click)=\"this.toolbar.dashboard()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n          <fa name=\"arrow-left\"></fa>\r\n          <p>Dashboard</p>\r\n        </a>\r\n\r\n    <a (click)=\"this.toolbar.createTextStyle()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"font\"></fa>\r\n      <p>New text style</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.createImageStyle()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"image\"></fa>\r\n      <p>New image style</p>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"toolbar-style-selector\" class=\"greenAccent02\">\r\n    <!-- Text styles -->\r\n    <div *ngIf=\"viewTextElements\">\r\n      <button *ngFor=\"let textStyle of textStyles\" (click)=\"this.toolbar.selectStyle(textStyle)\" class=\"greenAccent01 toolbar-style-btn\"\r\n        [class.selected]=\"isSelected(textStyle)\">\r\n        <p>{{textStyle.name.substring(0,\r\n          20)}}</p>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Image styles -->\r\n    <div *ngIf=\"viewImageElements\">\r\n      <button *ngFor=\"let imageStyle of imageStyles\" (click)=\"this.toolbar.selectStyle(imageStyle)\" class=\"greenAccent01 toolbar-style-btn\"\r\n        [class.selected]=\"isSelected(imageStyle)\">\r\n        <p>{{imageStyle.name.substring(0,\r\n          20)}}</p>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row-evenly toolbar-button-group-container\">\r\n    <a (click)=\"this.toolbar.saveAsPng()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"file-image\"></fa>\r\n      <p>Save As PNG</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.exportAsPDF()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"file-pdf\"></fa>\r\n      <p>Export to PDF</p>\r\n    </a>\r\n\r\n    <a (click)=\"this.toolbar.save()\" class=\"flex-col-evenly toolbar-btn-group\">\r\n      <fa name=\"save\"></fa>\r\n      <p>Save</p>\r\n    </a>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function ToolbarComponent(data, toolbar, store) {
        this.data = data;
        this.toolbar = toolbar;
        this.store = store;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('projectReducer')
            .subscribe(function (projectState) {
            _this.imageStyles = projectState.imageStyles;
            _this.textStyles = projectState.textStyles;
            _this.viewTextElements = projectState.viewTextElements;
            _this.viewImageElements = projectState.viewImageElements;
            _this.selectedTextStyle = projectState.selectedTextStyle;
            _this.selectedImageStyle = projectState.selectedImageStyle;
        });
    };
    ToolbarComponent.prototype.isSelected = function (style) {
        var styleType = style.constructor.name;
        switch (styleType) {
            case 'TextStyle':
                if (style === this.selectedTextStyle)
                    return true;
                return false;
            case 'ImageStyle':
                if (style === this.selectedImageStyle)
                    return true;
                return false;
        }
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _toolbar_app_logic_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarAppLogicService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-management/actions/projectActions */ "./src/app/state-management/actions/projectActions.ts");
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
    function Toolbar2AppLogicService(data, dialog, store) {
        this.data = data;
        this.dialog = dialog;
        this.store = store;
    }
    Toolbar2AppLogicService.prototype.newTextObject = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["SET_MODE"], payload: { mode: 'text' } });
    };
    Toolbar2AppLogicService.prototype.newImageObject = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["SET_MODE"], payload: { mode: 'image' } });
    };
    Toolbar2AppLogicService.prototype.newSlide = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["ADD_SLIDE"] });
    };
    Toolbar2AppLogicService.prototype.prevSlide = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["PREV_SLIDE"] });
    };
    Toolbar2AppLogicService.prototype.nextSlide = function () {
        this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["NEXT_SLIDE"] });
    };
    Toolbar2AppLogicService.prototype.deleteSlide = function () {
        var _this = this;
        this.data.getProjectState().then(function (projectState) {
            if (projectState['slides'].length > 1) {
                var message = 'Are you sure you want to delete this slide?';
                _this.dialog.alert(message, 'danger', function () {
                    _this.store.dispatch({ type: _state_management_actions_projectActions__WEBPACK_IMPORTED_MODULE_4__["DEL_SLIDE"] });
                });
            }
        });
    };
    Toolbar2AppLogicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], Toolbar2AppLogicService);
    return Toolbar2AppLogicService;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map