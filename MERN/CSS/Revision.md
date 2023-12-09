# Introduction

- CSS is the language we use to style a Web page.
- Used for styling the HTML webpage.
- CSS stands for cascading style sheet.
- CSS3 is the latest of version of css.

**Why Use CSS?**

for styling/designing of the web page.

- A CSS selector selects the HTML element(s) you want to style.

**We can divide CSS selectors into five categories:**

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or - attribute value)

````
Note: Do not add a space between the property value (20) and the unit (px):
Incorrect (space): margin-left: 20 px;
Correct (no space): margin-left: 20px; 
````

**Three Ways to Insert CSS**

There are three ways of inserting a style sheet:

1. External CSS - used to define multiple webpage style into a single css file. means same style of mutiple web pages
2. Internal CSS - An internal style sheet may be used if one single HTML page has a unique style.
3. Inline CSS - An inline style may be used to apply a unique style for a single element.


```
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 
```


**Cascading Order**

- Inline style (inside an HTML element)
- External and internal style sheets (in the head section)
- Browser default

- So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

## CSS Units

CSS supports various units for specifying lengths, sizes, and other measurements. Here are some commonly used CSS units

Absolute Length Units:

- px (pixels): A pixel is a single point on a screen.
- in (inches): 1 inch is equal to 2.54 centimeters.
- cm (centimeters): A centimeter is equal to 1/100th of a meter.
- mm (millimeters): A millimeter is equal to 1/1000th of a meter.
- pt (points): 1 point is equal to 1/72nd of an inch.
- pc (picas): 1 pica is equal to 12 points.


Relative Length Units:

- em: Relative to the font-size of the element.
- rem: Relative to the font-size of the root element (html).
- vw (viewport width): 1vw is equal to 1% of the viewport width.
- vh (viewport height): 1vh is equal to 1% of the viewport height.
- vmin: Relative to the smaller of vw and vh.
- vmax: Relative to the larger of vw and vh.


## Box-Sizing

- The box-sizing property in CSS is used to control how the total width and height of an element are calculated.

- It allows you to include or exclude the padding and border of an element from its total width and height.

***There are two possible values for the box-sizing property:***

1. Content-box (Default) - width and height of an html element is calculated excluding margin, padding and border
2. Border-box - the width and height of the element include both padding and border. 

This makes it easier to size elements without having to calculate the total dimensions yourself. 


## Selector Specificity

Selector specificity is a measure of how specific a selector is in determining which styles should be applied to an element. It is crucial in cases where conflicting styles are defined for the same element, as it determines which style rule takes precedence.

Selector specificity is calculated based on the following criteria


```markdown

Selector specificity is calculated based on the following criteria:

Inline Styles:

An inline style (e.g., <div style="color: red;">) has the highest specificity.
ID Selectors:

An ID selector (e.g., #myElement) has a higher specificity than class selectors and type selectors.
Class Selectors, Attribute Selectors, and Pseudo-Classes:

Class selectors (e.g., .myClass), attribute selectors (e.g., [type="text"]), and pseudo-classes (e.g., :hover) have the same specificity.
Type Selectors:

A type selector (e.g., div, p, etc.) has the lowest specificity.
To calculate the specificity of a selector, you assign a numerical value to each category mentioned above, and then combine these values. For example:

Inline styles: 1,0,0,0
ID selectors: 0,1,0,0
Class/attribute/pseudo-class selectors: 0,0,1,0
Type selectors: 0,0,0,1
So, a selector like div#myId.myClass would have a specificity of 0,1,1,1 because it has one ID selector, one class selector, and one type selector.

```


***Compare Pixles***

```markdown


```