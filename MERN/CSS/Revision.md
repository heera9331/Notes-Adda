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


```- If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. ```


**Cascading Order**

- Inline style (inside an HTML element)
- External and internal style sheets (in the head section)
- Browser default

- So, an inline style has the highest priority, and will override external and internal styles and browser defaults.
