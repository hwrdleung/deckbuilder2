import { Action } from "@ngrx/store";
import { ProjectState } from "../state/projectState";
import { Slide } from "src/app/classes/slide";
import { SlideObject } from "src/app/classes/slideObject";
import { TextStyle } from "src/app/classes/textStyle";
import { ImageStyle } from "src/app/classes/imageStyle";
import { GalleryImage } from "src/app/classes/galleryImage";
import { TextObject } from "src/app/classes/textObject";
import { ImageObject } from "src/app/classes/imageObject";

// UserState actions
export const NEW_PROJECT:string = "NEW_PROJECT";
export const LOAD_PROJECT:string = "LOAD_PROJECT";

export const ADD_SLIDE:string = "ADD_SLIDE";
export const DEL_SLIDE:string = "DEL_SLIDE";
export const NEXT_SLIDE:string = "NEXT_SLIDE";
export const PREV_SLIDE:string = "PREV_SLIDE";

export const ADD_IMAGEOBJECT:string = "ADD_IMAGEOBJECT";
export const ADD_TEXTOBJECT:string = "ADD_TEXTOBJECT";
export const DEL_SLIDEOBJECT:string = "DEL_SLIDEOBJECT";

export const ADD_TEXTSTYLE:string = "ADD_TEXTSTYLE";
export const DEL_TEXTSTYLE:string = "DEL_TEXTSTYLE";

export const ADD_IMAGESTYLE:string = "ADD_IMAGESTYLE";
export const DEL_IMAGESTYLE:string = "DEL_IMAGESTYLE";

export const ADD_IMAGE:string = "ADD_IMAGE";
export const DEL_IMAGE:string = "DEL_IMAGE";

export const SET_MODE:string = "SET_MODE";

export const SELECT_TEXTSTYLE:string = "SELECT_TEXTSTYLE";
export const SELECT_IMAGESTYLE:string = "SELECT_IMAGESTYLE";
export const SELECT_GALLERY_IMAGE:string = "SELECT_GALLERY_IMAGE";
export const SELECT_SLIDEOBJECT:string = "SELECT_SLIDEOBJECT";

export const SLIDEOBJECT_LAYER_UP: string = 'SLIDEOBJECT_LAYER_UP';
export const SLIDEOBJECT_LAYER_DOWN: string = 'SLIDEOBJECT_LAYER_DOWN';

export class NewProject implements Action {
    readonly type = NEW_PROJECT
    constructor(public payload: any){}
}

export class LoadProject implements Action {
    readonly type = LOAD_PROJECT
    constructor(public payload: any){}
}

export class AddTextObject implements Action {
    readonly type = ADD_TEXTOBJECT
    constructor(public payload: any){}
}

export class AddImageObject implements Action {
    readonly type = ADD_IMAGEOBJECT
    constructor(public payload: any){}
}

export class DelSlideObject implements Action {
    readonly type = DEL_SLIDEOBJECT
    constructor(public payload: any){}
}

export class DelTextStyle implements Action {
    readonly type = DEL_TEXTSTYLE
    constructor(public payload: any){}
}

export class DelImageStyle implements Action {
    readonly type = DEL_IMAGESTYLE
    constructor(public payload: any){}
}

export class AddImage implements Action {
    readonly type = ADD_IMAGE
    constructor(public payload: any){}
}

export class DelImage implements Action {
    readonly type = DEL_IMAGE
    constructor(public payload: any){}
}

export class SetMode implements Action {
    readonly type = SET_MODE
    constructor(public payload: any){}
}

export class SelectTextStyle implements Action {
    readonly type = SELECT_TEXTSTYLE
    constructor(public payload: any){}
}

export class SelectImageStyle implements Action {
    readonly type = SELECT_IMAGESTYLE
    constructor(public payload: any){}
}

export class SelectGalleryImage implements Action {
    readonly type = SELECT_GALLERY_IMAGE
    constructor(public payload: any){}
}

export class SlideObjectLayerUp implements Action {
    readonly type = SLIDEOBJECT_LAYER_UP
    constructor(public payload: any){}
}

export class SlideObjectLayerDown implements Action {
    readonly type = SLIDEOBJECT_LAYER_DOWN
    constructor(public payload: any){}
}

export type Actions = LoadProject | AddImageObject | AddTextObject | DelSlideObject | DelTextStyle | DelImageStyle | AddImage | DelImage | SetMode | SelectTextStyle | SelectImageStyle | SelectGalleryImage | SlideObjectLayerUp | SlideObjectLayerDown;