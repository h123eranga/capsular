/**
 * GLOBAL ATTRIBUTES
 */
export enum AttributeName {
    accessKey = "accesskey",
    class = "class",
    content$Editable = "contenteditable",
    contextMenu = "contextmenu",
    data = "data-*",
    dir = "dir",
    rtl = "rtl",
    draggable = "draggable",
    dropZone = "dropzone",
    move = "move",
    link = "link",
    hidden = "hidden",
    id = "id",
    lang = "lang",
    spellcheck = "spellcheck",
    false = "false",
    style = "style",
    tabIndex = "tabindex",
    title = "title",
    translate = "translate",
    no = "no",
    xmlLang = "xml: lang",
}

export const enum AnchorRelAttribute {
    alternate = "alternate",
    author = "author",
    bookmark = "bookmark",
    help = "help",
    license = "license",
    next = "next",
    noFollow = "nofollow",
    noReferrer = "noreferrer",
    preFetch = "prefetch",
    prev = "prev",
    search = "search",
    tag = "tag"
}

export const enum AnchorShapeAttribute {
    rect = "rect",
    circle = "circle",
    poly = "poly",
    default = "default"
}

export const enum AnchorTargetAttribute {
    blank = "_blank",
    self = "_self",
    parent = "_parent",
    top = "_top"
}

// structural content tags
export const enum ImageCrossOriginAttribute {
    anonymous = "anonymous",
    useCredentials = "use-credentials"
}
export const enum VideoPreLoadAttribute {
    auto = "auto",
    metaData = "metadata",
    none = "none"
}


export const enum InputTypeAttribute {
    button = "button",
    checkbox = "checkbox",
    color = "color",
    date = "date",
    dateTime = "datetime",
    dateTimeLocal = "datetime-local",
    email = "email",
    file = "file",
    hidden = "hidden",
    image = "image",
    month = "month",
    number = "number",
    password = "password",
    radio = "radio",
    range = "range",
    reset = "reset",
    search = "search",
    submit = "submit",
    tel = "tel",
    text = "text",
    time = "time",
    url = "url",
    week = "week"
}

export const enum InputAcceptAttribute {
    audio = "audio/*",
    video = "video/*",
    image = "image/*"
}

export const enum InputAlignAttribute {
    left = "left",
    right = "right",
    top = "top",
    middle = "middle",
    bottom = "bottom",
}

export const enum InputAltAttribute {
    text = "text"
}

export const enum InputAutoCompleteAttribute {
    on = "on",
    off = "off"
}

export const enum InputAutoFocusAttribute { autofocus = "autofocus" }

export const enum InputCheckedAtrribute { checked = "checked" }

export const enum InputDisabledAttribute {
    disabled = "disabled"
}

export const enum InputFormEncTypeAttribute {
    unlencoded = "application/x-www-form-urlencoded",
    formData = "multipart/form-data",
    textPlain = "text/plain"
}
export const enum InputFormMethod {
    get = "get",
    post = "post"
}

export const enum InputFormNoValidateAttribute {
    formnovalidate = "formnovalidate"
}

export const enum InputFormTargetAttirbute {
    blank = "_blank",
    self = "_self",
    parent = "_parent",
    top = "_top"
}