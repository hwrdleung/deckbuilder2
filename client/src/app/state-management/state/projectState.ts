import { TextStyle } from '../../classes/textStyle';
import { ImageStyle } from '../../classes/imageStyle';
import { Slide } from '../../classes/slide';
import { GalleryImage } from '../../classes/galleryImage';
import { DocumentSize } from 'src/app/classes/documentSize';


export interface ProjectState {
    name: string;
    created: Date;
    lastSaved: Date;
    thumbnailUrl: string;
    thumbnailFileName: string;

    slides: Array<Slide>;
    textStyles: TextStyle[];
    imageStyles: ImageStyle[];

    selectedTextStyle: TextStyle;
    selectedImageStyle: ImageStyle;

    currentSlideIndex: number;
    selectedSlideObjectId: number;
    images: GalleryImage[];

    sandboxText: string;

    viewTextElements: boolean;
    viewImageElements: boolean;

    textNotes: string;
    selectedImage: GalleryImage;

    documentSize: DocumentSize;
}

// Create defaults
let defaultTextStyle = new TextStyle;
defaultTextStyle.isDefault = true;
defaultTextStyle.name = "Default Text Style";

let defaultImageStyle = new ImageStyle;
defaultImageStyle.isDefault = true;
defaultImageStyle.name = "Default Image Style";

let defaultSlide = new Slide;
defaultSlide.isDefault = true;

export const initialState: ProjectState = {
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

    viewTextElements: true,
    viewImageElements: false,

    textNotes: 'Notes...',

    documentSize: new DocumentSize({
        height: 864,
        width: 1536,
        jsPdfFormat: [16, 9],
        orientation: 'landscape'
    }),
};
