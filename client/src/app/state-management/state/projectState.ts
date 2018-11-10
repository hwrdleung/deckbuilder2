import { TextStyle } from '../../classes/textStyle';
import { ImageStyle } from '../../classes/imageStyle';
import { Slide } from '../../classes/slide';
import { GalleryImage } from '../../classes/galleryImage';


export interface ProjectState {
    name: string;
    created: Date;
    thumbnail: string;
    slideObjectIdCounter: number;
    styleIdCounter: number;

    slides: Array<Slide>;
    textStyles: TextStyle[];
    imageStyles: ImageStyle[];

    selectedTextStyle: TextStyle;
    selectedImageStyle: ImageStyle;

    currentSlideIndex: number;
    selectedSlideObjectId: number;
    images: GalleryImage[];

    sandboxText: string;
    sandboxImage: string;

    viewTextElements: boolean;
    viewImageElements: boolean;

    textNotes: string;
    selectedImage: GalleryImage;

    documentSize: object;
}

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
    thumbnail: 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg',
    slideObjectIdCounter: 0,
    styleIdCounter: 0,

    slides: [defaultSlide],
    textStyles: [defaultTextStyle],
    imageStyles: [defaultImageStyle],

    selectedTextStyle: defaultTextStyle,
    selectedImageStyle: defaultImageStyle,

    currentSlideIndex: 0,
    selectedSlideObjectId: 0,
    images: [],

    sandboxText: 'Lorem Ipsum',
    sandboxImage: '',

    viewTextElements: true,
    viewImageElements: false,

    textNotes: 'Notes...',
    selectedImage: null,

    documentSize: {
        height: 432,
        width: 768
    },
};