import { DomElement, Div, Img, H1, H2, Button, P, A } from "./dom_elements";
import { Style } from "./styles";
import { ClassName } from "./enums";

export abstract class CustomBaseElement extends DomElement {

}

export class Row extends DomElement {
    style: Style | undefined;
    children: DomElement[] | undefined;
    constructor(element: { style?: Style, children?: DomElement[] }) {
        super(false, ClassName.Row);
        this.className = ClassName.Row;
        this.style = element.style;
        this.children = element.children;
    }
    build() {
        return new Div({
            style: new Style({
                width: "100%",
                height: "100%",
                background: "red",
            })
        })
    }
}

export class List extends DomElement {
    style: Style | undefined;
    items: Array<any>;
    builder: Function;
    constructor(element: { items: Array<any>, builder: Function, style?: Style }) {
        super(false, ClassName.List);
        this.className = ClassName.List;
        this.items = element.items;
        this.builder = element.builder;
        this.style = element.style;
    }
}

export class Card extends DomElement {
    private avatar: Img | undefined;
    private header: DomElement | undefined;
    private subHeader: DomElement | undefined;
    private image: Img | undefined;
    private content: DomElement | undefined;
    private buttons: Button[] | undefined;
    constructor(element: { avatar?: Img, header?: DomElement, subHeader?: DomElement, image?: Img, content?: DomElement, buttons?: Button[] }) {
        super(false, ClassName.Card);
        this.className = ClassName.Card;
        this.avatar = element.avatar;
        this.header = element.header;
        this.subHeader = element.subHeader;
        this.image = element.image;
        this.content = element.content;
        this.buttons = element.buttons;
    }

    build() {
        return new Div({
            style: new Style({
                height: "400px",
                width: "400px",
                background: "#ffffff",
                boxShadow: "2px 2px 6px 0px #b7b7b7"
            }),
            children: [
                new Div({
                    style: new Style({
                        width: "100%",
                        height: "100px",
                        display: "flex",
                        background: "#ffffff"
                    }),
                    children: [
                        new Div({
                            style: new Style({
                                width: "25%",
                                float: "left",
                                borderRadius: "50%",
                                background: "#ffffff"
                            }),
                            children: [
                                this.avatar
                            ],
                        }),
                        new Div({
                            style: new Style({
                                width: "75%",
                                float: "right",
                                background: "#ffffff"
                            }),
                            children: [
                                this.header,
                                this.subHeader
                            ]
                        })
                    ]
                }),
                new Div({
                    children: [
                        this.image,
                        this.content
                    ]
                }),
                new Div({
                    children: [
                        // new List({
                        //     items: this.buttons,
                        //     builder: (items, index) => {
                        //         return this.buttons[index]
                        //     }
                        // })
                    ]
                })
            ]
        })
    }
}

export class NavBar extends DomElement {
    style: Style | undefined;
    navItems: any[];
    constructor(element: { navItems: any[], style?: Style }) {
        super(false, ClassName.NavBar);
        this.className = ClassName.NavBar;
        this.navItems = element.navItems;
        this.style = element.style;
    }

    build() {
        return new List({
            style: new Style({
                padding: "10px",
                display: "flex"
            }),
            items: this.navItems,
            builder: (items, i) => {
                return new Div({
                    children: [
                        new A({
                            content: items[i],
                            href: items[i]
                        })
                    ]
                })
            }
        })
    }
}