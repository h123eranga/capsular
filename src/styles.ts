export class Style {
    styles: any;
    // constructor(styles: any) {
    //     this.styles = styles;
    // }
    constructor(styles: {
        // Animation Properties
        animation?: string, // Specifies the keyframe-based animations.
        animationDelay?: string, // Specifies when the animation will start.
        animationDirection?: string, // Specifies whether the animation should play in reverse on alternate cycles or not.
        animationDuration?: string, // Specifies the number of seconds or milliseconds an animation should take to complete one cycle.
        animationFillMode?: string, // Specifies how a CSS animation should apply styles to its target before and after it is executing.
        animationIterationCount?: string, // Specifies the number of times an animation cycle should be played before stopping.
        animationName?: string, // Specifies the name of @keyframes defined animations that should be applied to the selected element.
        animationPlayState?: string, // Specifies whether the animation is running or paused.
        animationTimingFunction?: string, // Specifies how a CSS animation should progress over the duration of each cycle.

        // Background Properties
        background?: string, // Defines a variety of background properties within one declaration.
        backgroundAttachment?: string, // Specify whether the background image is fixed in the viewport or scrolls.
        backgroundClip?: string, // Specifies the painting area of the background.
        backgroundColor?: string, // Defines an element's background color.
        backgroundImage?: string, // Defines an element's background image.
        backgroundOrigin?: string, // Specifies the positioning area of the background images.
        backgroundPosition?: string, // Defines the origin of a background image.
        backgroundRepeat?: string, // Specify whether/how the background image is tiled.
        backgroundSize?: string, // Specifies the size of the background images.

        // Border Properties
        border?: string, // Sets the width, style, and color for all four sides of an element's border.
        borderbottom?: string, // Sets the width, style, and color of the bottom border of an element.
        borderBottomColor?: string, // Sets the color of the bottom border of an element.
        borderBottomLeftRadius?: string, // Defines the shape of the bottom-left border corner of an element.
        borderBottomRightRadius?: string, // Defines the shape of the bottom-right border corner of an element.
        borderBottomStyle?: string, // Sets the style of the bottom border of an element.
        borderBottomWidth?: string, // Sets the width of the bottom border of an element.
        borderColor?: string, // Sets the color of the border on all the four sides of an element.
        borderImage?: string, // Specifies how an image is to be used in place of the border styles.
        borderImageOutset?: string, // Specifies the amount by which the border image area extends beyond the border box.
        borderImageRepeat?: string, // Specifies whether the image-border should be repeated, rounded or stretched.
        borderImageSlice?: string, // Specifies the inward offsets of the image-border.
        borderImageSource?: string, // Specifies the location of the image to be used as a border.
        borderImageWidth?: string, // Specifies the width of the image-border.
        borderLeft?: string, // Sets the width, style, and color of the left border of an element.
        borderLeftColor?: string, // Sets the color of the left border of an element.
        borderLeftStyle?: string, // Sets the style of the left border of an element.
        borderLeftWidth?: string, // Sets the width of the left border of an element.
        borderRadius?: string, // Defines the shape of the border corners of an element.
        borderRight?: string, // Sets the width, style, and color of the right border of an element.
        borderRightColor?: string, // Sets the color of the right border of an element.
        borderRightStyle?: string, // Sets the style of the right border of an element.
        borderRightWidth?: string, // Sets the width of the right border of an element.
        borderStyle?: string, // Sets the style of the border on all the four sides of an element.
        borderTop?: string, // Sets the width, style, and color of the top border of an element.
        borderTopColor?: string, // Sets the color of the top border of an element.
        borderTopLeftRadius?: string, // Defines the shape of the top-left border corner of an element.
        borderTopRightRadius?: string, // Defines the shape of the top-right border corner of an element.
        borderTopStyle?: string, // Sets the style of the top border of an element.
        borderTopWidth?: string, // Sets the width of the top border of an element.
        borderWidth?: string, // Sets the width of the border on all the four sides of an element.

        // Color Properties
        color?: string, // Specify the color of the text of an element.
        opacity?: string, // Specifies the transparency of an element.

        // Dimension Properties
        height?: string, // Specify the height of an element.
        maxHeight?: string, // Specify the maximum height of an element.
        maxWidth?: string, // Specify the maximum width of an element.
        minHeight?: string, // Specify the minimum height of an element.
        minWidth?: string, // Specify the minimum width of an element.
        width?: string, // Specify the width of an element.

        // Generated Content Properties
        content?: string, // Inserts generated content.
        quotes?: string, // Specifies quotation marks for embedded quotations.
        counterReset?: string, // Creates or resets one or more counters.
        counterIncrement?: string, // Increments one or more counter values.

        // Flexible Box Layout
        alignContent?: string, // Specifies the alignment of flexible container's items within the flex container.
        alignItems?: string, // Specifies the default alignment for items within the flex container.
        alignSelf?: string, // Specifies the alignment for selected items within the flex container.
        flex?: string, // Specifies the components of a flexible length.
        flexBasis?: string, // Specifies the initial main size of the flex item.
        flexDirection?: string, // Specifies the direction of the flexible items.
        flexflow?: string, // A shorthand property for the flex-direction and the flex-wrap properties.
        flexGrow?: string, // Specifies how the flex item will grow relative to the other items inside the flex container.
        flexshrink?: string, // Specifies how the flex item will shrink relative to the other items inside the flex container.
        flexWrap?: string, // Specifies whether the flexible items should wrap or not.
        justifyContent?: string, // Specifies how flex items are aligned along the main axis of the flex container after any flexible lengths and auto margins have been resolved.
        order?: string, // Specifies the order in which a flex items are displayed and laid out within a flex container.

        // Font Properties
        font?: string, // Defines a variety of font properties within one declaration.
        fontFamily?: string, // Defines a list of fonts for element.
        fontSize?: string, // Defines the font size for the text.
        fontSizeAdjust?: string, // Preserves the readability of text when font fallback occurs.
        fontStretch?: string, // Selects a normal, condensed, or expanded face from a font.
        fontStyle?: string, // Defines the font style for the text.
        fontVariant?: string, // Specify the font variant.
        fontWeight?: string, // Specify the font weight of the text.

        // List Properties
        listStyle?: string, // Defines the display style for a list and list elements.
        listStyleImage?: string, // Specifies the image to be used as a list-item marker.
        listStylePosition?: string, // Specifies the position of the list-item marker.
        listStyleType?: string, // Specifies the marker style for a list-item.

        // Margin Properties
        margin?: string, // Sets the margin on all four sides of the element.
        marginBottom?: string, // Sets the bottom margin of the element.
        marginLeft?: string, // Sets the left margin of the element.
        marginRight?: string, // Sets the right margin of the element.
        marginTop?: string, // Sets the top margin of the element.

        // Multi-column Layout Properties
        columnCount?: string, // Specifies the number of columns in a multi-column element.
        columnFill?: string, // Specifies how columns will be filled.
        columnGap?: string, // Specifies the gap between the columns in a multi-column element.
        columnRule?: string, // Specifies a straight line, or "rule", to be drawn between each column in a multi-column element.
        columnRuleColor?: string, // Specifies the color of the rules drawn between columns in a multi-column layout.
        columnRuleStyle?: string, // Specifies the style of the rule drawn between the columns in a multi-column layout.
        columnRuleWidth?: string, // Specifies the width of the rule drawn between the columns in a multi-column layout.
        columnSpan?: string, // Specifies how many columns an element spans across in a multi-column layout.
        columnWidth?: string, // Specifies the optimal width of the columns in a multi-column element.
        columns?: string, // A shorthand property for setting column-width and column-count properties.

        // Outline Properties
        outline?: string, // Sets the width, style, and color for all four sides of an element's outline.
        outlineColor?: string, // Sets the color of the outline.
        outlineOffset?: string, // Set the space between an outline and the border edge of an element.
        outlineStyle?: string, // Sets a style for an outline.
        outlineWidth?: string, // Sets the width of the outline.

        // Padding Properties
        padding?: string, // Sets the padding on all four sides of the element.
        paddingBottom?: string, // Sets the padding to the bottom side of an element.
        paddingLeft?: string, // Sets the padding to the left side of an element.
        paddingRight?: string, // Sets the padding to the right side of an element.
        paddingTop?: string, // Sets the padding to the top side of an element.

        // Print Properties
        pageBreakAfter?: string, // Insert a page breaks after an element.
        pageBreakBefore?: string, // Insert a page breaks before an element.
        pageBreakInside?: string, // Insert a page breaks inside an element.

        // Table Properties
        borderCollapse?: string, // Specifies whether table cell borders are connected or separated.
        borderSpacing?: string, // Sets the spacing between the borders of adjacent table cells.
        captionSide?: string, // Specify the position of table's caption.
        emptyCells?: string, // Show or hide borders and backgrounds of empty table cells.
        tableLayout?: string, // Specifies a table layout algorithm.

        // Text Properties
        direction?: string, // Define the text direction/writing direction.
        tabSize?: string, // Specifies the length of the tab character.
        textAlign?: string, // Sets the horizontal alignment of inline content.
        textAlignLast?: string, // Specifies how the last line of a block or a line right before a forced line break is aligned when text-align is justify.
        textDecoration?: string, // Specifies the decoration added to text.
        textDecorationColor?: string, // Specifies the color of the text-decoration-line.
        textDecorationLine?: string, // Specifies what kind of line decorations are added to the element.
        textDecorationStyle?: string, // Specifies the style of the lines specified by the text-decoration-line property
        textIndent?: string, // Indent the first line of text.
        textJustify?: string, // Specifies the justification method to use when the text-align property is set to justify.
        textOverflow?: string, // Specifies how the text content will be displayed, when it overflows the block containers.
        textShadow?: string, // Applies one or more shadows to the text content of an element.
        textTransform?: string, // Transforms the case of the text.
        lineHeight?: string, // Sets the height between lines of text.
        verticalAlign?: string, // Sets the vertical positioning of an element relative to the current text baseline.
        letterSpacing?: string, // Sets the extra spacing between letters.
        wordSpacing?: string, // Sets the spacing between words.
        whiteSpace?: string, // Specifies how white space inside the element is handled.
        wordBreak?: string, // Specifies how to break lines within words.
        wordWrap?: string, // Specifies whether to break words when the content overflows the boundaries of its container.

        // Transform Properties
        backfaceVisibility?: string, // Specifies whether or not the "back" side of a transformed element is visible when facing the user.
        perspective?: string, // Defines the perspective from which all child elements of the object are viewed.
        perspectiveOrigin?: string, // Defines the origin (the vanishing point for the 3D space) for the perspective property.
        transform?: string, // Applies a 2D or 3D transformation to an element.
        transformOrigin?: string, // Defines the origin of transformation for an element.
        transformStyle?: string, // Specifies how nested elements are rendered in 3D space.

        // Transitions Properties
        transition?: string, // Defines the transition between two states of an element.
        transitionDelay?: string, // Specifies when the transition effect will start.
        transitionDuration?: string, // Specifies the number of seconds or milliseconds a transition effect should take to complete.
        transitionProperty?: string, // Specifies the names of the CSS properties to which a transition effect should be applied.
        transitionTimingfunction?: string, // Specifies the speed curve of the transition effect.

        // Visual formatting Properties
        display?: string, // Specifies how an element is displayed onscreen.
        position?: string, // Specifies how an element is positioned.
        top?: string, // Specify the location of the top edge of the positioned element.
        right?: string, // Specify the location of the right edge of the positioned element.
        bottom?: string, // Specify the location of the bottom edge of the positioned element.
        left?: string, // Specify the location of the left edge of the positioned element.
        float?: string, // Specifies whether or not a box should float.
        clear?: string, // Specifies the placement of an element in relation to floating elements.
        zIndex?: string, // Specifies a layering or stacking order for positioned elements.
        overflow?: string, // Specifies the treatment of content that overflows the element's box.
        overflowX?: string, // Specifies how to manage the content when it overflows the width of the element's content area.
        overflowY?: string, // Specifies how to manage the content when it overflows the height of the element's content area.
        resize?: string, // Specifies whether or not an element is resizable by the user.
        clip?: string, // Defines the clipping region.
        visibility?: string, // Specifies whether or not an element is visible.
        cursor?: string, // Specify the type of cursor.
        boxShadow?: string, // Applies one or more drop-shadows to the element's box.
        boxSizing?: string, // Alter the default CSS box model.
    }) {
        this.styles = styles;
    }
}