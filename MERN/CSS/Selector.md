# CSS Selectors

A CSS selector selects the HTML element(s) you want to style.
- Selectors are patterns used to select and style HTML elements on a web page
 
## Types of selectors

1. Universal selector
2. Type selector (Element selector)
3. class selector
4. id selector


### 5. Descendant Selector (Whitespace)


6. Child Selector (>):
7. Adjacent Sibling Selector (+):

### 8. Attribute Selector ([attribute]):

Selects elements with a specific attribute.

```css  
input[type="text"] {
  border: 1px solid #ccc;
}

```


### 9. Attribute Starts With Selector ([attribute^="value"]):

Selects elements with an attribute that starts with a specific value.

```css
a[href^="https://"] {
  color: green;
}
 

```


### 10. Pseudo-classes (:pseudo-class):

Selects elements based on their state or position.

```css
a:hover {
  text-decoration: underline;
}

```

### 11. Pseudo-elements (::pseudo-element):

Selects and styles a part of an element.

```css
p::first-line {
  font-weight: bold;
}

```