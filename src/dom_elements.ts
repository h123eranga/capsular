import { Style } from "./styles";
import { InputAcceptAttribute, InputAlignAttribute, InputAutoFocusAttribute, InputCheckedAtrribute, InputDisabledAttribute, InputFormEncTypeAttribute, InputFormMethod, InputFormNoValidateAttribute, InputFormTargetAttirbute, InputAutoCompleteAttribute, InputTypeAttribute, AnchorRelAttribute, AnchorShapeAttribute, AnchorTargetAttribute, ImageCrossOriginAttribute, VideoPreLoadAttribute } from "./attributes";

// TODO
// create a base element without common fields and extend custom elemens by extending that
export abstract class DomElement {
    id: string | undefined;
    className: string | undefined;
    source: string;
    isNative: boolean = true;
    constructor(isNative: boolean, source: string, id?: string, className?: string, ) {
        this.isNative = isNative;
        this.id = id;
        this.className = className;
        this.source = source;
    }
}

// export abstract class NativeBaseElement extends DomElement {
//     source: string;
//     content: string;
//     style: Style;
//     events: any[];
//     children: Array<DomElement>;
//     constructor(element: { source?: string, id?: string, className?: string, content?: string, style?: Style, events?: any[], children?: Array<DomElement> }) {
//         super(true, element.id, element.className, element.source);
//         this.source = this.constructor["name"];
//         this.content = element.content;
//         this.style = element.style;
//         this.events = element.events;
//         this.children = element.children;
//     }
// }

abstract class NativeBaseElement extends DomElement {
    content: string | undefined;
    style: Style | undefined;
    events: any[] | undefined;
    children: Array<DomElement> | undefined;
    constructor(element: { source: string }) {
        super(true, element.source);
    }
}

/**
 * START STRUCTURAL TAG ELEMENT CLASSES
 */

abstract class StructuralBaseElement extends NativeBaseElement {

}

// HTML5
export class A extends StructuralBaseElement {
    download: string | undefined;
    href: string | undefined;
    hrefLang: string | undefined;
    media: string | undefined;
    name: string | undefined;
    rel: AnchorRelAttribute | undefined;
    rev: string | undefined;
    shape: AnchorShapeAttribute | undefined;
    target: AnchorTargetAttribute | undefined;
    type: string | undefined;
    // constructor(element: { href?: string, source?: string, id?: string, className?: string, content?: string, style?: Style, events?: any[], children?: Array<DomElement> }) {
    //     super(element);
    //     this.href = element.href;
    //     this.source = this.constructor["name"];
    //     this.content = element.content;
    //     this.style = element.style;
    //     this.events = element.events;
    //     this.children = element.children;
    // }
    constructor(element: {
        id?: string,
        className?: string,
        content?: string,
        style?: Style,
        events?: any[],
        children?: Array<DomElement>
        download?: string,
        href?: string,
        hrefLang?: string,
        media?: string,
        name?: string,
        rel?: AnchorRelAttribute,
        rev?: string,
        shape?: AnchorShapeAttribute,
        target?: AnchorTargetAttribute,
        type?: string,
    }) {
        super({ source: "a" });
        this.id = element.id;
        this.className = element.className;
        this.content = element.content;
        this.style = element.style;
        this.events = element.events;
        this.children = element.children;
        this.download = element.download;
        this.href = element.href;
        this.hrefLang = element.hrefLang;
        this.media = element.media;
        this.name = element.name;
        this.rel = element.rel;
        this.rev = element.rev;
        this.shape = element.shape;
        this.target = element.target;
        this.type = element.type;
    }
}
export class Article extends NativeBaseElement { }
export class Aside extends NativeBaseElement { }
// export class Body extends NativeBaseElement { }
export class Br extends NativeBaseElement { }
export class Details extends NativeBaseElement { }
export class Div extends StructuralBaseElement {
    constructor(element: {
        id?: string,
        className?: string,
        content?: string,
        style?: Style,
        events?: any[],
        children?: Array<DomElement>
    }) {
        super({ source: "div" });
        this.id = element.id;
        this.className = element.className;
        this.content = element.content;
        this.style = element.style;
        this.events = element.events;
        this.children = element.children;
    }
}
export class H1 extends NativeBaseElement { }
export class H2 extends NativeBaseElement { }
export class H3 extends NativeBaseElement { }
export class H4 extends NativeBaseElement { }
export class H5 extends NativeBaseElement { }
export class H6 extends NativeBaseElement { }
// export class Head extends NativeBaseElement { }
// export class Header extends NativeBaseElement { }
// export class Hgroup extends NativeBaseElement { }
// export class Hr extends NativeBaseElement { }
// export class Html extends NativeBaseElement { }
export class Footer extends NativeBaseElement { }
export class Nav extends NativeBaseElement { }
export class P extends NativeBaseElement { }
export class Section extends NativeBaseElement { }
export class Span extends NativeBaseElement { }
export class Summary extends NativeBaseElement { }
/**
 * END STRUCTURAL TAG ELEMENT CLASSES
 */

/**
 * START META ELEMENT CLASSES
 */
// export class Base extends NativeBaseElement { }
// export class Basefont extends NativeBaseElement { }
// export class Link extends NativeBaseElement { }
// export class Meta extends NativeBaseElement { }
// export class Style extends NativeBaseElement { }
// export class Title extends NativeBaseElement { }
/**
 * END META ELEMENT CLASSES
 */

/**
 * START FORM TAGS ELEMENT CLASSES
 */

abstract class FormBaseElement extends NativeBaseElement {

}

export class Button extends FormBaseElement { }
// export class Datalist extends NativeBaseElement { }
// export class Fieldset extends NativeBaseElement { }
// export class Form extends NativeBaseElement { }
export class Input extends FormBaseElement {
    type: InputTypeAttribute | undefined;
    accept: InputAcceptAttribute | undefined;
    align: InputAlignAttribute | undefined;
    alt: string | undefined;
    autocomplete: InputAutoCompleteAttribute | undefined;
    autofocus: InputAutoFocusAttribute | undefined;
    checked: InputCheckedAtrribute | undefined;
    disabled: InputDisabledAttribute | undefined;
    form: string | undefined;
    formaction: string | undefined;
    formenctype: InputFormEncTypeAttribute | undefined;
    formmethod: InputFormMethod | undefined;
    formnovalidate: InputFormNoValidateAttribute | undefined;
    formtarget: InputFormTargetAttirbute | undefined;
    height: string | undefined;
    list: string | undefined;
    max: string | undefined;
    maxlength: string | undefined;
    min: string | undefined;
    minlength: string | undefined;
    multiple: string | undefined;
    name: string | undefined;
    pattern: string | undefined;
    placeholder: string | undefined;
    readonly: string | undefined;
    required: string | undefined;
    size: string | undefined;
    src: string | undefined;
    step: string | undefined;
    value: string | undefined;
    width: string | undefined;
    constructor(element: {
        type?: InputTypeAttribute,
        accept?: InputAcceptAttribute,
        align?: InputAlignAttribute,
        alt?: string,
        autocomplete?: InputAutoCompleteAttribute,
        autofocus?: InputAutoFocusAttribute,
        checked?: InputCheckedAtrribute,
        disabled?: InputDisabledAttribute,
        form?: string,
        formaction?: string,
        formenctype?: InputFormEncTypeAttribute,
        formmethod?: InputFormMethod,
        formnovalidate?: InputFormNoValidateAttribute,
        formtarget?: InputFormTargetAttirbute,
        height?: string,
        list?: string,
        max?: string,
        maxlength?: string,
        min?: string,
        minlength?: string,
        multiple?: string,
        name?: string,
        pattern?: string,
        placeholder?: string,
        readonly?: string,
        required?: string,
        size?: string,
        src?: string,
        step?: string,
        value?: string,
        width?: string
    }) {
        super({ source: "input" });
        this.type = element.type;
        this.accept = element.accept;
        this.align = element.align;
        this.alt = element.alt;
        this.autocomplete = element.autocomplete;
        this.autofocus = element.autofocus;
        this.checked = element.checked;
        this.disabled = element.disabled;
        this.form = element.form;
        this.formaction = element.formaction;
        this.formenctype = element.formenctype;
        this.formmethod = element.formmethod;
        this.formnovalidate = element.formnovalidate;
        this.formtarget = element.formtarget;
        this.height = element.height;
        this.list = element.list;
        this.max = element.max;
        this.maxlength = element.maxlength;
        this.min = element.min;
        this.minlength = element.minlength;
        this.multiple = element.multiple;
        this.name = element.name;
        this.pattern = element.pattern;
        this.placeholder = element.placeholder;
        this.readonly = element.readonly;
        this.required = element.required;
        this.size = element.size;
        this.src = element.src;
        this.step = element.step;
        this.value = element.value;
        this.width = element.width;
    }
}
// export class Keygen extends NativeBaseElement { }
// export class Label extends NativeBaseElement { }
// export class Legend extends NativeBaseElement { }
// export class Meter extends NativeBaseElement { }
// export class Optgroup extends NativeBaseElement { }
// export class Option extends NativeBaseElement { }
// export class Select extends NativeBaseElement { }
// export class Textarea extends NativeBaseElement { }
/**
 * END FORM TAGS ELEMENT CLASSES
 */

/**
 * START FORMATTING TAGS ELEMENT CLASSES
 */
// export class Abbr extends NativeBaseElement { }
// export class Acronym extends NativeBaseElement { }
// export class Address extends NativeBaseElement { }
// export class B extends NativeBaseElement { }
// export class Bdi extends NativeBaseElement { }
// export class Bdo extends NativeBaseElement { }
// export class Big extends NativeBaseElement { }
// export class Blockquote extends NativeBaseElement { }
// export class Center extends NativeBaseElement { }
// export class Cite extends NativeBaseElement { }
// export class Code extends NativeBaseElement { }
// export class Del extends NativeBaseElement { }
// export class Dfn extends NativeBaseElement { }
// export class Em extends NativeBaseElement { }
// export class Font extends NativeBaseElement { }
// export class I extends NativeBaseElement { }
// export class Ins extends NativeBaseElement { }
// export class Kbd extends NativeBaseElement { }
// export class Mark extends NativeBaseElement { }
// export class Output extends NativeBaseElement { }
// export class Pre extends NativeBaseElement { }
// export class Progress extends NativeBaseElement { }
// export class Q extends NativeBaseElement { }
// export class Rp extends NativeBaseElement { }
// export class Rt extends NativeBaseElement { }
// export class Ruby extends NativeBaseElement { }
// export class S extends NativeBaseElement { }
// export class Samp extends NativeBaseElement { }
// export class Small extends NativeBaseElement { }
// export class Strike extends NativeBaseElement { }
// export class Strong extends NativeBaseElement { }
// export class Sub extends NativeBaseElement { }
// export class Sup extends NativeBaseElement { }
// export class Tt extends NativeBaseElement { }
// export class U extends NativeBaseElement { }
// export class Var extends NativeBaseElement { }
// export class Wbr extends NativeBaseElement { }
/**
 * END FORMATTING TAGS ELEMENT CLASSES
 */

/**
 * START LIST TAGS ELEMENT CLASSES
 */
// export class Dd extends NativeBaseElement { }
// export class Dir extends NativeBaseElement { }
// export class Dl extends NativeBaseElement { }
// export class Dt extends NativeBaseElement { }
// export class Li extends NativeBaseElement { }
// export class Ol extends NativeBaseElement { }
// export class Menu extends NativeBaseElement { }
// export class Ul extends NativeBaseElement { }
/**
 * END LIST TAGS ELEMENT CLASSES
 */

/**
 * START TABLE TAGS ELEMENT CLASSES
 */
abstract class StartTableBaseElement extends NativeBaseElement {

}
// export class Caption extends NativeBaseElement { }
// export class Col extends NativeBaseElement { }
// export class Colgroup extends NativeBaseElement { }
export class Table extends StartTableBaseElement {
    constructor(element: {
        id?: string,
        className?: string,
        content?: string,
        style?: Style,
        events?: any[],
        children?: Array<DomElement>
    }) {
        super({ source: "table" });
    }
}
export class Tbody extends StartTableBaseElement { }
export class Td extends StartTableBaseElement {
    constructor(element: {
        id?: string,
        className?: string,
        content?: string,
        style?: Style,
        events?: any[],
        children?: Array<DomElement>
    }) {
        super({ source: "td" });
    }
}
export class Tfoot extends StartTableBaseElement { }
export class Thead extends StartTableBaseElement { }
export class Th extends StartTableBaseElement { }
export class Tr extends StartTableBaseElement {
    constructor(element: {
        id?: string,
        className?: string,
        content?: string,
        style?: Style,
        events?: any[],
        children?: Array<DomElement>
    }) {
        super({ source: "tr" });
    }
}
/**
 * END TABLE TAGS ELEMENT CLASSES
 */

/**
 * START SCRIPTING TAGS ELEMENT CLASSES
 */
// export class NoScript extends NativeBaseElement { }
// export class Script extends NativeBaseElement { }
/**
 * END SCRIPTING TAGS ELEMENT CLASSES
 */

/**
 * START EMBEDDED CONTENT TAGS ELEMENT CLASSES
 */
abstract class EmbeddedContentBaseElement extends NativeBaseElement {

}
// export class Applet extends NativeBaseElement { }
// export class Area extends NativeBaseElement { }
// export class Audio extends NativeBaseElement { }
// export class Canvas extends NativeBaseElement { }
// export class Embed extends NativeBaseElement { }
// export class FigCaption extends NativeBaseElement { }
// export class Figure extends NativeBaseElement { }
// export class Frame extends NativeBaseElement { }
// export class Frameset extends NativeBaseElement { }
// export class Iframe extends NativeBaseElement { }
export class Img extends EmbeddedContentBaseElement {
    alt: string;
    src: string;
    crossOrigin: ImageCrossOriginAttribute;
    heigth: string;
    ismap: string;
    width: string;
    // constructor(element: { url?: string, content?: string, style?: Style, events?: any[], children?: Array<DomElement> }) {
    //     super(element);
    //     this.url = element.url;
    // }
    constructor(element: {
        alt: string,
        src: string,
        crossOrigin: ImageCrossOriginAttribute,
        heigth: string,
        ismap: string,
        width: string,
    }) {
        super({ source: "img" });
        this.alt = element.alt;
        this.src = element.src;
        this.crossOrigin = element.crossOrigin;
        this.heigth = element.heigth;
        this.ismap = element.ismap;
        this.width = element.width;
    }
}
export class Map extends EmbeddedContentBaseElement {
    name: string;
    constructor(element: { name: string }) {
        super({ source: "map" });
        this.name = element.name;
    }
}
export class ObjectElement extends EmbeddedContentBaseElement {
    data: string;
    type: string;
    declare: string;
    form: string;
    height: string;
    name: string;
    width: string;
    constructor(element: {
        data: string,
        type: string, declare?: string,
        form?: string, height?: string, name?: string, width?: string
    }) {
        super({ source: "object" });
        this.data = element.data;
        this.type = element.type;
        this.declare = element.declare;
        this.form = element.form;
        this.height = element.height;
        this.name = element.name;
        this.width = element.width;
    }
}
export class Param extends EmbeddedContentBaseElement {
    name: string;
    value: string;
    constructor(element: { name: string, value?: string }) {
        super({ source: 'param' });
        this.name = element.name;
        this.value = element.value;
    }
}
export class Source extends EmbeddedContentBaseElement {
    src: string;
    media: string;
    type: string;
    constructor(element: {
        src: string, media?: string
        type?: string
    }) {
        super({ source: "source" });
        this.src = element.src;
        this.media = element.media;
        this.type = element.type;
    }
}
export class Time extends EmbeddedContentBaseElement {
    dateTime: string;
    constructor(element: { dateTime: string }) {
        super({ source: "time" });
        this.dateTime = element.dateTime;
    }
}
export class Video extends EmbeddedContentBaseElement {
    autoPlay: string;
    controls: string;
    height: string;
    loop: string;
    muted: string;
    poster: string;
    preload: VideoPreLoadAttribute;
    src: string;
    width: string;
    constructor(element: {
        autoPlay?: string,
        controls?: string,
        height?: string,
        loop?: string,
        muted?: string,
        poster?: string,
        preload?: VideoPreLoadAttribute,
        src?: string,
        width?: string
    }) {
        super({ source: "video" });
        this.autoPlay = element.autoPlay;
        this.controls = element.controls;
        this.height = element.height;
        this.loop = element.loop;
        this.muted = element.muted;
        this.poster = element.poster;
        this.preload = element.preload;
        this.src = element.src;
        this.width = element.width;
    }
}
/**
 * END EMBEDDED CONTENT TAGS ELEMENT CLASSES
 */