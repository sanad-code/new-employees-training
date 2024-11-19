# Welcome 🙋‍♂️ to CSS 🎨

### [🔙 Back To Main Readme](../../readme.md) 👈

### [🔙 Back To Front-end](../../readme/front-end.md) 👈

## Adding CSS to HTML

We can add css in 3 ways:

1. Inline css `<tag style="property: value;">`
2. Internal css `<style>css code</style>` in head tag
3. External css `<link rel="stylesheet" href="path">` in head tag and file live in separate file , for path remember relative path

Note the order of precedence of css (CSS Specificity):
1- Inline css
2- Internal css
3- External css

**So inline css will override internal css and internal css will override external css.** 📢

## CSS Selectors

Css selecto is a pattern to select the elements you want to style.

The pattern is like this:

```css
selector {
  property: value;
}
```

🛎️ **There are different types of selectors:**

- Element / Tag selector `tag { property: value; }`
  - ex: `p { color: red; }` will make **all paragraph** red
- Class selector (class used as group of elements)
  - ex: `.red-text { color: red; }` _no space between . and class name_ , will make **all elements with class red-text** red, remember to add class to element `<tag class="red-text">`
- ID selector (id used for unique element)
  - ex: `#title { color: red; }` _no space between # and id name_ , will make **element with id title** red, remember to add id to element `<tag id="title">`
  - Generally you should avoid using id in html because it is not reusable, use class instead.
- Attribute selector / Attribute value selector
  - ex: `tag[attribute] { color: red; }` will make **all elements of tag specified that contains specified attribute** red
  - ex: `a[href] { color: red; }` will make **all anchor tags that contains href attribute** red
  - ex: `a[href="https://www.google.com"] { color: red; }` will make **all anchor tags that contains href attribute with value https://www.google.com** red
- Universal selector `* { property: value; }`
  - ex: `* { color: red; }` will make **all elements** red

⚠️ **Combinining selectors:**

- Grouping selector, apply style to multiple selectors
  - ex: `h1, h2, h3 { color: red; }` will make **all h1, h2, h3** red
- Descendant selector / Nested selector
  - ex: `div p { color: red; }` will make **all p inside div** red
- Child selector
  - ex: `div > p { color: red; }` will make **all p that are direct child of div** red
  - Note the difference between descendant and child selector is that descendant will select all p inside div but child will select only direct child of div, so in descendant selector p inside div inside another div will be selected but in child selector it will not be selected.
- Adjacent sibling selector
  - ex: `h1 + p { color: red; }` will make **all p that are immediately after h1** red
  - This how the html should look like:
    ```html
    <h1>Heading</h1>
    <p>Paragraph</p>
    ```
- General sibling selector `h1 ~ p { color: red; }`
  - ex: `h1 ~ p { color: red; }` will make **all p that are siblings of h1** red
  - This how the html should look like:
    ```html
    <h1>Heading</h1>
    <p>Paragraph</p>
    <p>Paragraph</p>
    ```
- Pseudo class selector, used to style a special state of an element
  - ex: `a:hover { color: red; }` will make **all anchor tags that are hovered** red
  - ex: `a:visited { color: red; }` will make **all anchor tags that are visited** red
  - ex: `a:active { color: red; }` will make **all anchor tags that are active** red
  - ex: `a:focus { color: red; }` will make **all anchor tags that are focused** red
  - ex: `a:link { color: red; }` will make **all anchor tags that are linked** red
- Pseudo element selector, used to style a part of an element
  - ex: `p::first-line { color: red; }` will make **first line of all p** red
  - ex: `p::first-letter { color: red; }` will make **first letter of all p** red
  - ex: `p::before { content: "Hello"; }` will add **Hello before all p**
  - ex: `p::after { content: "Hello"; }` will add **Hello after all p**
- Chain selector, used to select element that has multiple classes, you just write selectors after each other without space
  - ex: `.red-text.bold-text { color: red; font-weight: bold; }` will make **all elements that have both red-text and bold-text classes** red and bold
  - ex: `h1#title.red-text { color: red; }` will make **h1 element with id title and red-text class** red
- Combine combiners, you can combine multiple selectors
  - ex: `div p.red-text { color: red; }` will make **all p with red-text class inside div** red
  - ex: `div > p.red-text { color: red; }` will make **all p with red-text class that are direct child of div** red
  - ex: `div + p.red-text { color: red; }` will make **all p with red-text class that are immediately after div** red
  - ex: `div ~ p.red-text { color: red; }` will make **all p with red-text class that are siblings of div** red
  - ex: `a:hover::before { content: "Hello"; }` will add **Hello before all anchor tags that are hovered**

## CSS Properties

Pattern of css property is like this:

```css
selector {
  property: value; //This is called declaration
}
```

## CSS Colors

There are different ways to specify color in css:

- Color name
  - ex: `color: red;`
  - For a list of color names check [MDN color names](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- Hexadecimal
  - ex: `color: #ff0000;`
- RGB, Red Green Blue values between 0 and 255, where 0 is no color and 255 is full color
  - ex: `color: rgb(255, 0, 0);`
- RGBA, Red Green Blue Alpha, where alpha is transparency value between 0 and 1, where 0 is fully transparent and 1 is fully opaque
  - ex: `color: rgba(255, 0, 0, 0.5);`
- HSL, Hue Saturation Lightness, hue is color between 0 and 360, saturation is intensity of color between 0% and 100% where 0% is gray and 100% is full color, lightness is brightness between 0% and 100% where 0% is black and 100% is white
  - ex: `color: hsl(0, 100%, 50%);`
- HSLA, Hue Saturation Lightness Alpha, where alpha is transparency value between 0 and 1, where 0 is fully transparent and 1 is fully opaque
  - ex: `color: hsla(0, 100%, 50%, 0.5);`
- Gradient, used to create gradient color
  - ex: `background: linear-gradient(to right, red, yellow);` will create **gradient color from red to yellow from left to right**
  - ex: `background: linear-gradient(to right, red 0%, yellow 100%);` will create **gradient color from red to yellow from left to right with red at 0% and yellow at 100%**
  - ex: `background: linear-gradient(to right, red 0%, yellow 50%, green 100%);` will create **gradient color from red to yellow to green from left to right with red at 0%, yellow at 50% and green at 100%**
- Opacity, used to make element transparent
  - ex: `opacity: 0.5;` will make **element 50% transparent**
- Transparent, used to make element transparent
  - ex: `background: transparent;` will make **element background transparent**
- Check these web sites for easy color picking:
  - [Coolors](https://coolors.co/)
  - [Color Hunt](https://colorhunt.co/)
- Check foreground and background color contrast, it should be at least 4.5:1 for normal text and 3:1 for large text
  - [WebAIM](https://webaim.org/resources/contrastchecker/)

## CSS Text

- Text color, note it is not text-color
  - ex: `color: red;`
- Font size, note it is not text-size
  - ex: `font-size: 16px;`
- Font family, note it is not text-family
  - ex: `font-family: Arial, sans-serif, 'Times New Roman';`
  - serif is the font with the little feet at the end of the letters
  - sans-serif is the font without the little feet at the end of the letters
  - monospace is the font where all the letters have the same width
  - cursive is the font that looks like handwriting
  - Check [Google Fonts](https://fonts.google.com/) for free fonts
- Font weight, note it is not text-weight
  - ex: `font-weight: bold;`
  - 100 is thin, 400 is normal, 700 is bold, 900 is black
  - it can be normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900
  - ex: `font-weight: 700;`
  - ex: `font-weight: bolder;`
  - ex: `font-weight: lighter;`
  - The bolder and lighter values are relative to the parent element font weight value. So if the parent element font weight is 400 and the child element font weight is bolder then the child element font weight will be 500, it adds +100 for bolder and -100 for lighter.
- Font style, note it is not text-style
  - ex: `font-style: italic;`
  - it can be normal, italic, oblique
- Text align
  - ex: `text-align: center;`
  - it can be left, right, center, justify
  - There is start and end, start is left for left-to-right languages and right for right-to-left languages, end is right for left-to-right languages and left for right-to-left languages.
- Text transform
  - ex: `text-transform: uppercase;`
  - it can be uppercase, lowercase, capitalize, none
- Text decoration
  - ex: `text-decoration: underline;`
  - it can be underline, overline, line-through, none
- Line height
  - ex: `line-height: 1.5;`
  - it can be normal, number, length, percentage
  - normal is the default line height of the font with value 1.2
  - number is the multiple of the font size
  - length is the fixed line height
  - percentage is the percentage of the font size

## CSS Inspection Chrome dev tools

- Right click on element and click inspect
- Check the styles tab
- Check the computed tab
  - It shows the final style of the element after applying all the css rules
- Every element has default style, when you see property with value strikethrough it means it is default style and it is overridden by your css.
- If you like a web site styles you can go to the three dots in dev tools not chrome settings, and then got to more tools and click CSS overview, it will show you the css overview of the web site.

## CSS Box Model

Margin, Padding, Border, Content, as well as Width and Height are so important in CSS.

Every element in html is like box and if you want to increase or decrease its size you use width and height properties.

So by default the width and height of the element is the content of the element not including padding, border and margin.

The final width and height of the element will be the width of top border + top padding + content + bottom padding + bottom border. The height is the same.

If you want to include padding and border in the width and height of the element you can use box-sizing property with value border-box.

The content + padding is the fill area of the element. So colors and background images are applied to the fill area of the element.

Analogy of the box model is like a gift box, the content is the gift, the padding is the wrapping paper, the border is the ribbon and the margin is the space between the gift box and other gift boxes. Or like a picture frame on wall.

- Width
  - ex: `width: 100px;`
  - it can be auto, length, percentage
  - auto is the default width of the element
  - length is the fixed width of the element
  - percentage is the width of the element relative to the parent element width
  - ex: `width: 50%;` is 50% of the parent element width
- Border takes 3 values width style color space separated
  - ex: `border: 1px solid red;`
  - it can be width style color
  - width is the thickness of the border
  - style is the style of the border, it can be solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden
  - color is the color of the border
  - ex: `border: 1px solid red;`
  - ex: `border: 1px dashed red;`
  - border-top, border-right, border-bottom, border-left can be used to specify border for specific side, and if the come after border property they will override the border property
  - border-width
    - ex: `border-width: 1px;` this will set the width of all borders
    - it can be thin, medium, thick, length
    - ex: `border-width: 1px 2px 3px 4px;` this will set the width of top border to 1px, right border to 2px, bottom border to 3px, left border to 4px clock wise direction.
    - ex: `border-width: 1px 2px;` this will set the width of top and bottom borders to 1px, right and left borders to 2px
- Padding this can be easily understood when there is content
  - ex: `padding: 10px;` pushes the border 10 px from the content
  - it can be length, percentage
- Margin is the space outside the border
  - ex: `margin: 10px;` pushes the border 10 px from the margin of the parent element
  - it can be auto, length, percentage
  - auto is the default margin of the element
  - length is the fixed margin of the element
  - percentage is the margin of the element relative to the parent element width
  - ex: `margin: 10px;`
  - ex: `margin: 10px 20px;` top and bottom margin is 10px, right and left margin is 20px
  - ex: `margin: 10px 20px 30px 40px;` top margin is 10px, right margin is 20px, bottom margin is 30px, left margin is 40px clock wise direction
  - margin-top, margin-right, margin-bottom, margin-left can be used to specify margin for specific side, and if the come after margin property they will override the margin property
- In developers tools you can see the box model of the element by clicking on the element and going to the style tab
- div can work as invisible box to group elements together
- Extension Pesticide for chrome will show you the box model of the elements

## Type of Boxes

We have 3 types of boxes:

1. Block level box, occupy all space they can get

   - ex: `display: block;` and we can change the default display value
   - Takes the full width of **the parent element**
   - Starts from new line, you can't have 2 block level boxes on the same line
   - Can have margin, padding, border
   - ex: div, h1, p, ul, ol, li, form
   - elements are stacked on top of each other vertically

2. Inline level box

   - ex: `display: inline;` and we can change the default display value
   - Takes the width of **the content**, height and width are ignored.
   - Starts from the same line
   - Can have margin, padding, border **only horizontally**
   - ex: span, a, img, input, button

3. Inline block level box, it is inline from outside and behave as block from inside
   - ex: `display: inline-block;` and we can change the default display value
   - Takes the width of **the content**, height and width **are considered**.
   - Starts from the same line, cause no line breaks
   - Can have margin, padding, border
   - ex: input, button

## CSS Image

- Image can be added to html using img tag
  - ex: `<img src="path" alt="description">`
  - src is the path of the image
  - alt is the description of the image, it is used when the image is not loaded or for screen readers
- height and width can be used to specify the height and width of the image
  - ex: `<img src="path" alt="description" height="100" width="100">`
  - height auto to keep the aspect ratio of the image
  - percentage to specify the height and width of the image relative to the parent element

## CSS Container

- Container is a box that contains other boxes
- Container can be created using div tag
  - ex: `<div class="container"></div>`
- Container can be styled using css
  - ex: `.container { width: 100%; margin: 0 auto; }`
  - width 100% to take the full width of the parent element
  - margin 0 for top and bottom and auto for left and right to center the container horizontally
  - so auto in this case is like set margin-left and margin-right to auto which means make the left and right margin equal so the container will be centered horizontally

## CSS Cascading

When there are multiple css rules applies to the same element, which one will be applied?

All rules applied but which one wins?

4 factors determine which css rule will be applied: position, specificity, type, and important

- Position, the last rule will be applied
  - ex: `p { color: red; color:green; }` will make all p green
  - ex: `p { color: blue; }` will make all p blue if later in the file p is defined again
  - so all p will be blue
- Specificity is the weight of the css rule
  - Inline css has the highest specificity
  - ID selector has higher specificity than class, attribute selector
  - Attribute selector has higher specificity than class selector
  - Class selector or Pseudo selector has higher specificity than element selector
  - Universal selector has the lowest specificity
  - So if element has id, class, and element selector, the id selector will be applied.
  - ex: `p { color: red; }` has lower specificity than `p.red-text { color: green; }`
  - ex: `p { color: red; }` has lower specificity than `#title { color: green; }`
  - ex: `p { color: red; }` has lower specificity than `p { color: green; }`
  - ex: `p { color: red; }` has lower specificity than `* { color: green; }`
- Type we have 3 types external, internal, and inline
  - Inline css has the highest priority
  - Internal css has the second priority
  - External css has the lowest priority
  - So inline css will override internal css and internal css will override external css
- important is used to override all the rules
  - ex: `p { color: red !important; }` will make all p red no matter what other rules are applied
  - ex: `p { color: red; }` has lower priority than `p { color: green !important; }`

To summarize the order of precedence of css (CSS Specificity): from heighest to lowest
1- important
2- Inline css
3- ID selector
4- Attribute selector
5- Class selector or Pseudo selector
6- Element selector
7- Universal selector

### [🔙 Back To Front-end](../../readme/front-end.md) 👈

### [🔙 Back To Main Readme](../../readme.md) 👈
