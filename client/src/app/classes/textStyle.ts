import { BorderControl } from "./borderControl";
import { ShadowControl } from "./shadowControl";
import { text } from "@angular/core/src/render3/instructions";

export class TextStyle {

    private static textStyleCounter: number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private showExtraOptions: boolean;
    private fontPickerData: object; // Google font picker defines this format.  It includes family, size, and style
    private color: string;
    private backgroundColor: string;
    private underline: boolean;
    private overline: boolean;
    private lineThrough: boolean;
    private hAlign: string;
    private vAlign: string;
    private uppercase: boolean;
    private lowercase: boolean;
    private lineHeight: number;
    private wordSpacing: number;
    private letterSpacing: number;
    private margin: number;
    private padding: number;
    private breakWord: boolean;
    private border: BorderControl;
    private textShadow: ShadowControl;
    private isDefault: Boolean;

    constructor() {
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
        this.margin = 0;
        this.padding = 0;
        this.wordSpacing = 0;
        this.letterSpacing = 0;
        this.breakWord = false;
        this.border = new BorderControl();
        this.textShadow = new ShadowControl();
        this.fontPickerData = {
            family: 'Helvetica',
            style: 'regular',
            size: '25px'
        }
        this.isDefault = false;
    }

    revive(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    getCss() {
        let css = {
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
            'margin': this.margin + 'px',
            'padding': this.padding + 'px',
            'display': 'flex',
            'justify-content': this.convertAlignToFlex(this.hAlign),
            'align-items': this.convertAlignToFlex(this.vAlign),
            'text-shadow': this.textShadow.getShadowCss(),
            'box-sizing': 'border-box'
        }

        // Border styles had to be seperated because in some UI configurations, 'border:none' would negate the other border styles
        if (this.border.getBorderProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        } else if (!this.border.getBorderProperty('showFullBorder')) {
            css['border-top'] = this.border.getBorderProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getBorderProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getBorderProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getBorderProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
        }
        return css;
    }

    // CSS helper functions
    convertAlignToFlex(align: string) {
        let flexAlignment = "";

        switch (align) {
            case 'left': flexAlignment = 'flex-start'; break;
            case 'right': flexAlignment = 'flex-end'; break;
            case 'center': flexAlignment = 'center'; break;
            case 'top': flexAlignment = 'flex-start'; break;
            case 'bottom': flexAlignment = 'flex-end'; break;
        }
        return flexAlignment;
    }

    getTextTransform() {
        if (this.uppercase){
            return 'uppercase';
        } else if (this.lowercase){
            return 'lowercase';
        } else {
            return 'none';
        }
    }

    getTextDecoration() {
        let textDecoration = "";

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
    }

    // Getters, setters, togglers
    getStyleProperty(propertyName) {
        return this[propertyName];
    }

    setStyleProperty(propertyName: string, propertyValue: any) {
        this[propertyName] = propertyValue;
    }

    toggleStyleProperty(propertyName: string) {
        if(typeof this[propertyName] === 'boolean'){
            this[propertyName] = !this[propertyName];
        }
    }

    toggleEditNameMode() {
        this.editNameMode = !this.editNameMode;
    }

    toggleExtraOptions() {
        this.showExtraOptions = !this.showExtraOptions;
    }
}