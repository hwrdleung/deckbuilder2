import { BorderControl } from "./borderControl";
import { ShadowControl } from "./shadowControl";

export class TextStyle {

    static textStyleCounter: number = 0;
    name: string;
    id: number;
    editNameMode: boolean;
    showExtraOptions: boolean;
    fontPickerData: object; // Google font picker defines this format.  It includes family, size, and style
    color: string;
    backgroundColor: string;
    underline: boolean;
    overline: boolean;
    lineThrough: boolean;
    hAlign: string;
    vAlign: string;
    uppercase: boolean;
    lowercase: boolean;
    lineHeight: number;
    wordSpacing: number;
    letterSpacing: number;
    padding: number;
    breakWord: boolean;
    border: BorderControl;
    textShadow: ShadowControl;
    isDefault: Boolean;

    constructor() {
        this.id = TextStyle.textStyleCounter++;
        this.name = 'TextStyle' + this.id;
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

        this.border = new BorderControl();
        this.border.revive(obj.border);

        this.textShadow = new ShadowControl();
        this.textShadow.revive(obj.textShadow);
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
            'padding': this.padding + 'px',
            'display': 'flex',
            'justify-content': this.convertAlignToFlex(this.hAlign),
            'align-items': this.convertAlignToFlex(this.vAlign),
            'text-shadow': this.textShadow.getShadowCss(),
            'box-sizing': 'border-box'
        }

        // Border styles had to be seperated because in some UI configurations, 'border:none' would negate the other border styles
        if (this.border.getProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        } else if (!this.border.getProperty('showFullBorder')) {
            css['border-top'] = this.border.getProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
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

    // Getter, setter, toggler
    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }

    toggleProperty(propertyName:string){
        if(typeof this[propertyName] === 'boolean')
        this[propertyName] = !this[propertyName];
    }
}