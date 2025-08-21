const questionBank = {
    css: {
        junior: [
            {
                question: "Which CSS property is used to change the text color of an element?",
                options: ["color", "font-color", "text-color", "foreground-color"],
                answer: "color",
                category: "css"
            },
            {
                question: "Which CSS property controls the size of text?",
                options: ["font-style", "font-size", "text-size", "size"],
                answer: "font-size",
                category: "css"
            },
            {
                question: "Which property is used to change the background color of an element?",
                options: ["background", "background-color", "color", "bgcolor"],
                answer: "background-color",
                category: "css"
            },
            {
                question: "How do you make text bold in CSS?",
                options: ["font-weight: bold", "text-style: bold", "font-bold", "weight: bold"],
                answer: "font-weight: bold",
                category: "css"
            },
            {
                question: "Which CSS property controls the space between lines of text?",
                options: ["letter-spacing", "line-height", "word-spacing", "text-spacing"],
                answer: "line-height",
                category: "css"
            },
            {
                question: "Which CSS property is used to set the space between letters?",
                options: ["letter-spacing", "line-height", "spacing", "text-indent"],
                answer: "letter-spacing",
                category: "css"
            },
            {
                question: "What is the default position value of an HTML element in CSS?",
                options: ["absolute", "relative", "static", "fixed"],
                answer: "static",
                category: "css"
            },
            {
                question: "Which property is used to create space inside an element’s border?",
                options: ["margin", "padding", "spacing", "border-spacing"],
                answer: "padding",
                category: "css"
            },
            {
                question: "Which CSS property is used to create space outside an element’s border?",
                options: ["margin", "padding", "spacing", "border-spacing"],
                answer: "margin",
                category: "css"
            },
            {
                question: "Which CSS unit is relative to the root element's font size?",
                options: ["em", "px", "rem", "%"],
                answer: "rem",
                category: "css"
            },
            {
                question: "Which CSS property is used to set the style of the list item marker?",
                options: ["list-style-type", "list-marker", "marker-style", "list-type"],
                answer: "list-style-type",
                category: "css"
            },
            {
                question: "Which CSS property makes an element completely hidden and removes it from the layout?",
                options: ["visibility: hidden", "display: none", "opacity: 0", "hide: true"],
                answer: "display: none",
                category: "css"
            },
            {
                question: "Which property is used to make rounded corners in CSS?",
                options: ["corner-radius", "border-style", "border-radius", "round-corner"],
                answer: "border-radius",
                category: "css"
            },
            {
                question: "Which CSS property specifies the stack order of elements?",
                options: ["order", "stack", "z-index", "index"],
                answer: "z-index",
                category: "css"
            },
            {
                question: "Which CSS property is used to set an image as the background?",
                options: ["background", "background-image", "image-background", "bg-image"],
                answer: "background-image",
                category: "css"
            },
            {
                question: "Which property controls the transparency of an element?",
                options: ["visibility", "opacity", "alpha", "transparent"],
                answer: "opacity",
                category: "css"
            },
            {
                question: "Which value of the position property keeps an element in the same place even when scrolling?",
                options: ["absolute", "relative", "fixed", "sticky"],
                answer: "fixed",
                category: "css"
            },
            {
                question: "Which CSS property is used to change the typeface of text?",
                options: ["font", "font-family", "typeface", "font-style"],
                answer: "font-family",
                category: "css"
            },
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                answer: "Cascading Style Sheets",
                category: "css"
            },
            {
                question: "Which CSS property is used to control how text is aligned inside an element?",
                options: ["text-style", "text-align", "align-text", "horizontal-align"],
                answer: "text-align",
                category: "css"
            }

        ],
        mid: [
            {
                question: "Which CSS property controls the stacking order of elements?",
                options: ["z-index", "position", "order", "stack"],
                answer: "z-index",
                category: "css"
            },
            {
                question: "What is the difference between `relative` and `absolute` positioning?",
                options: [
                    "`relative` positions an element relative to itself; `absolute` positions it relative to the nearest positioned ancestor",
                    "`absolute` is relative to itself; `relative` is relative to the parent",
                    "`relative` fixes an element; `absolute` scrolls with the page",
                    "`relative` removes the element from flow; `absolute` does not"
                ],
                answer: "`relative` positions an element relative to itself; `absolute` positions it relative to the nearest positioned ancestor",
                category: "css"
            },
            {
                question: "What does the `flex-grow` property do?",
                options: [
                    "Specifies how much a flex item will grow relative to others",
                    "Specifies the size of a flex container",
                    "Specifies the order of flex items",
                    "Specifies the gap between flex items"
                ],
                answer: "Specifies how much a flex item will grow relative to others",
                category: "css"
            },
            {
                question: "What is the difference between `em` and `rem` units in CSS?",
                options: [
                    "`em` is relative to the parent element's font size; `rem` is relative to the root element's font size",
                    "`em` is absolute; `rem` is relative",
                    "`em` is always 16px; `rem` changes with viewport size",
                    "`em` changes with viewport; `rem` is fixed"
                ],
                answer: "`em` is relative to the parent element's font size; `rem` is relative to the root element's font size",
                category: "css"
            },
            {
                question: "Which CSS property is used to create a grid layout?",
                options: ["display", "grid-template-columns", "grid", "grid-area"],
                answer: "display",
                category: "css"
            },
            {
                question: "What is the default value of the `position` property?",
                options: ["static", "relative", "absolute", "inherit"],
                answer: "static",
                category: "css"
            },
            {
                question: "Which pseudo-class selects an element when the mouse pointer is over it?",
                options: [":hover", ":focus", ":active", ":visited"],
                answer: ":hover",
                category: "css"
            },
            {
                question: "What is the purpose of the `clip-path` property?",
                options: [
                    "To define a visible portion of an element",
                    "To crop an image file",
                    "To add a shadow to an element",
                    "To round the corners of an element"
                ],
                answer: "To define a visible portion of an element",
                category: "css"
            },
            {
                question: "What does the `object-fit` property control?",
                options: [
                    "How content of replaced elements like images or videos should be resized",
                    "The fit of an object inside a div",
                    "The object's margin size",
                    "The object's padding size"
                ],
                answer: "How content of replaced elements like images or videos should be resized",
                category: "css"
            },
            {
                question: "Which value of the `display` property makes an element a flex container?",
                options: ["flex", "block", "inline", "grid"],
                answer: "flex",
                category: "css"
            },
            {
                question: "What does the `transition` property do?",
                options: [
                    "Animates property changes over a given duration",
                    "Changes the position of an element",
                    "Transforms an element's shape",
                    "Adds delay to page loading"
                ],
                answer: "Animates property changes over a given duration",
                category: "css"
            },
            {
                question: "What is the difference between `inline` and `inline-block` elements?",
                options: [
                    "`inline-block` allows setting width/height; `inline` does not",
                    "`inline` allows setting width/height; `inline-block` does not",
                    "They are exactly the same",
                    "`inline` forces block-level styling"
                ],
                answer: "`inline-block` allows setting width/height; `inline` does not",
                category: "css"
            },
            {
                question: "What does the `overflow: hidden` property do?",
                options: [
                    "Clips content that overflows an element's box",
                    "Hides the element",
                    "Adds a scrollbar to the element",
                    "Prevents element from loading"
                ],
                answer: "Clips content that overflows an element's box",
                category: "css"
            },
            {
                question: "Which CSS property sets the space between lines of text?",
                options: ["line-height", "letter-spacing", "word-spacing", "spacing"],
                answer: "line-height",
                category: "css"
            },
            {
                question: "What is the purpose of `min-width` in responsive design?",
                options: [
                    "To set the smallest width an element can be",
                    "To set the largest width an element can be",
                    "To set the default width of an element",
                    "To make an element full width"
                ],
                answer: "To set the smallest width an element can be",
                category: "css"
            },
            {
                question: "What does the `calc()` function in CSS allow you to do?",
                options: [
                    "Perform calculations to determine CSS property values",
                    "Calculate JavaScript variables",
                    "Perform arithmetic in HTML",
                    "Automatically adjust image sizes"
                ],
                answer: "Perform calculations to determine CSS property values",
                category: "css"
            },
            {
                question: "Which property controls the alignment of flex items along the main axis?",
                options: ["justify-content", "align-items", "align-content", "flex-wrap"],
                answer: "justify-content",
                category: "css"
            },
            {
                question: "What is the difference between `absolute` and `fixed` positioning?",
                options: [
                    "`fixed` positions relative to the viewport; `absolute` positions relative to the nearest positioned ancestor",
                    "`absolute` positions relative to the viewport; `fixed` positions relative to the nearest ancestor",
                    "They behave the same",
                    "`fixed` moves with scroll; `absolute` does not"
                ],
                answer: "`fixed` positions relative to the viewport; `absolute` positions relative to the nearest positioned ancestor",
                category: "css"
            },
            {
                question: "Which media query rule applies styles when the screen width is 768px or less?",
                options: [
                    "@media (max-width: 768px)",
                    "@media (min-width: 768px)",
                    "@media screen and (768px)",
                    "@media (width: 768px)"
                ],
                answer: "@media (max-width: 768px)",
                category: "css"
            },
            {
                question: "What does the `aspect-ratio` property do?",
                options: [
                    "Sets the preferred width-to-height ratio of an element",
                    "Sets the scale of an image",
                    "Adjusts font size based on screen size",
                    "Changes the ratio of padding to margin"
                ],
                answer: "Sets the preferred width-to-height ratio of an element",
                category: "css"
            }
        ],
        senior: [
            {
                question: "Which CSS property is used to create a flexible container for flex items?",
                options: ["flex", "display", "flex-direction", "justify-content"],
                answer: "display",
                category: "css"
            },
            {
                question: "What is the effect of `will-change: transform` in CSS?",
                options: [
                    "Improves performance by notifying the browser of likely changes",
                    "Changes the transform property instantly",
                    "Resets transformations",
                    "Prevents transformations"
                ],
                answer: "Improves performance by notifying the browser of likely changes",
                category: "css"
            },
            {
                question: "Which pseudo-class targets an element that is the first child of its parent?",
                options: [":first-child", ":nth-child(1)", ":first-of-type", ":nth-of-type(1)"],
                answer: ":first-child",
                category: "css"
            },
            {
                question: "What does `position: sticky` do?",
                options: [
                    "Acts like relative until a scroll threshold is reached, then acts like fixed",
                    "Fixes the element in viewport permanently",
                    "Positions element relative to parent only",
                    "Is ignored in most browsers"
                ],
                answer: "Acts like relative until a scroll threshold is reached, then acts like fixed",
                category: "css"
            },
            {
                question: "Which unit is relative to the root element's font-size?",
                options: ["em", "rem", "%", "vw"],
                answer: "rem",
                category: "css"
            },
            {
                question: "What is the difference between `absolute` and `fixed` positioning?",
                options: [
                    "Absolute is relative to nearest positioned ancestor, fixed is relative to viewport",
                    "Absolute is relative to viewport, fixed is relative to parent",
                    "They behave identically",
                    "Absolute ignores z-index, fixed respects it"
                ],
                answer: "Absolute is relative to nearest positioned ancestor, fixed is relative to viewport",
                category: "css"
            },
            {
                question: "Which CSS property defines the spacing between flex items along the main axis?",
                options: ["justify-content", "align-items", "align-content", "gap"],
                answer: "justify-content",
                category: "css"
            },
            {
                question: "What is the difference between `inline`, `inline-block`, and `block` elements?",
                options: [
                    "Inline doesn’t break lines, block breaks lines, inline-block is like inline but allows width/height",
                    "All behave the same in modern browsers",
                    "Block is deprecated",
                    "Inline-block always floats"
                ],
                answer: "Inline doesn’t break lines, block breaks lines, inline-block is like inline but allows width/height",
                category: "css"
            },
            {
                question: "Which CSS property controls whether content is clipped or visible outside an element's box?",
                options: ["overflow", "clip", "hidden", "visibility"],
                answer: "overflow",
                category: "css"
            },
            {
                question: "What is the purpose of `contain: layout` in CSS?",
                options: [
                    "Limits the browser's rendering and layout calculations to the element itself",
                    "Makes element hidden",
                    "Forces element to use GPU",
                    "Stops event propagation"
                ],
                answer: "Limits the browser's rendering and layout calculations to the element itself",
                category: "css"
            },
            {
                question: "Which CSS property allows you to create a grid layout?",
                options: ["display: grid", "display: flex", "display: table", "position: grid"],
                answer: "display: grid",
                category: "css"
            },
            {
                question: "What does `minmax()` do in CSS Grid?",
                options: [
                    "Sets a minimum and maximum size for a grid track",
                    "Defines margins dynamically",
                    "Adjusts font size based on viewport",
                    "Prevents grid items from resizing"
                ],
                answer: "Sets a minimum and maximum size for a grid track",
                category: "css"
            },
            {
                question: "Which pseudo-element is used to insert content before an element’s actual content?",
                options: ["::before", "::after", ":first-line", ":first-letter"],
                answer: "::before",
                category: "css"
            },
            {
                question: "What is the difference between `auto-fill` and `auto-fit` in CSS Grid?",
                options: [
                    "Both repeat as many columns as possible; auto-fit collapses empty tracks, auto-fill leaves them",
                    "Auto-fill fills empty space with colors",
                    "Auto-fit centers items, auto-fill left-aligns",
                    "They are identical"
                ],
                answer: "Both repeat as many columns as possible; auto-fit collapses empty tracks, auto-fill leaves them",
                category: "css"
            },
            {
                question: "Which CSS property allows smooth transitions of property changes?",
                options: ["transition", "animation", "transform", "keyframes"],
                answer: "transition",
                category: "css"
            },
            {
                question: "Which function in CSS allows you to define a color using hue, saturation, and lightness?",
                options: ["hsl()", "rgb()", "hsla()", "cmyk()"],
                answer: "hsl()",
                category: "css"
            },
            {
                question: "What is the difference between `relative`, `sticky`, and `fixed` positioning?",
                options: [
                    "Relative moves relative to normal position, sticky acts like relative until threshold, fixed relative to viewport",
                    "They all behave identically",
                    "Sticky is deprecated",
                    "Relative is same as absolute"
                ],
                answer: "Relative moves relative to normal position, sticky acts like relative until threshold, fixed relative to viewport",
                category: "css"
            },
            {
                question: "What does `clamp()` do in CSS?",
                options: [
                    "Restricts a value between a defined minimum and maximum",
                    "Clamps overflowed content",
                    "Rounds numeric values",
                    "Freezes animation"
                ],
                answer: "Restricts a value between a defined minimum and maximum",
                category: "css"
            },
            {
                question: "Which property controls the stacking order of elements that have the same z-index?",
                options: ["order", "z-index", "position", "stacking-context"],
                answer: "stacking-context",
                category: "css"
            },
            {
                question: "What is the purpose of `mix-blend-mode`?",
                options: [
                    "Defines how an element's content blends with the background",
                    "Mixes colors in gradients",
                    "Blends borders",
                    "Combines text shadows"
                ],
                answer: "Defines how an element's content blends with the background",
                category: "css"
            }
        ]
    },
    javascript: {
        junior: [
            {
                question: "What is the correct way to declare a variable in JavaScript (ES6)?",
                options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
                answer: "All of the above",
                category: "javascript"
            },
            {
                question: "Which of the following is NOT a JavaScript data type?",
                options: ["String", "Number", "Boolean", "Character"],
                answer: "Character",
                category: "javascript"
            },
            {
                question: "What is the result of '2' + 2 in JavaScript?",
                options: ["4", "'22'", "NaN", "Error"],
                answer: "'22'",
                category: "javascript"
            },
            {
                question: "Which symbol is used for comments in JavaScript?",
                options: ["// for single-line", "#", "/* for multi-line */", "Both // and /* */"],
                answer: "Both // and /* */",
                category: "javascript"
            },
            {
                question: "What does '===' check in JavaScript?",
                options: [
                    "Equality of value only",
                    "Equality of value and type",
                    "Only type equality",
                    "Nothing"
                ],
                answer: "Equality of value and type",
                category: "javascript"
            },
            {
                question: "What will console.log(typeof null) output?",
                options: ["null", "undefined", "object", "string"],
                answer: "object",
                category: "javascript"
            },
            {
                question: "Which method is used to remove the last element from an array?",
                options: ["shift()", "pop()", "remove()", "spliceLast()"],
                answer: "pop()",
                category: "javascript"
            },
            {
                question: "How do you write an if statement in JavaScript?",
                options: [
                    "if condition then",
                    "if (condition) { }",
                    "if { condition }",
                    "if condition { }"
                ],
                answer: "if (condition) { }",
                category: "javascript"
            },
            {
                question: "Which keyword stops the execution of a loop?",
                options: ["stop", "break", "exit", "halt"],
                answer: "break",
                category: "javascript"
            },
            {
                question: "How do you create a function in JavaScript?",
                options: [
                    "function myFunction() { }",
                    "def myFunction() { }",
                    "func myFunction() { }",
                    "create function myFunction() { }"
                ],
                answer: "function myFunction() { }",
                category: "javascript"
            },
            {
                question: "Which array method adds one or more elements to the end?",
                options: ["push()", "pop()", "unshift()", "append()"],
                answer: "push()",
                category: "javascript"
            },
            {
                question: "What does NaN stand for in JavaScript?",
                options: ["No actual number", "Not a number", "Negative and null", "Not a null"],
                answer: "Not a number",
                category: "javascript"
            },
            {
                question: "Which operator is used to assign a value to a variable?",
                options: ["-", "=", "==", "==="],
                answer: "=",
                category: "javascript"
            },
            {
                question: "How do you convert a string to an integer in JavaScript?",
                options: ["parseInt()", "toString()", "Number()", "Both parseInt() and Number()"],
                answer: "Both parseInt() and Number()",
                category: "javascript"
            },
            {
                question: "What will 'typeof []' return?",
                options: ["object", "array", "list", "undefined"],
                answer: "object",
                category: "javascript"
            },
            {
                question: "Which method joins array elements into a string?",
                options: ["concat()", "join()", "toString()", "merge()"],
                answer: "join()",
                category: "javascript"
            },
            {
                question: "Which keyword declares a block-scoped variable?",
                options: ["var", "let", "const", "Both let and const"],
                answer: "Both let and const",
                category: "javascript"
            },
            {
                question: "What is the default value of a variable that is declared but not assigned?",
                options: ["null", "undefined", "0", "false"],
                answer: "undefined",
                category: "javascript"
            },
            {
                question: "Which symbol is used for strict equality in JavaScript?",
                options: ["==", "===", "!=", "!=="],
                answer: "===",
                category: "javascript"
            },
            {
                question: "What will 'Boolean(0)' return?",
                options: ["true", "false", "undefined", "null"],
                answer: "false",
                category: "javascript"
            }
        ],
        mid: [
            {
                question: "What is the difference between `let` and `var`?",
                options: [
                    "`let` is block-scoped, `var` is function-scoped",
                    "`var` is block-scoped, `let` is function-scoped",
                    "Both are function-scoped",
                    "Both are block-scoped"
                ],
                answer: "`let` is block-scoped, `var` is function-scoped",
                category: "javascript"
            },
            {
                question: "What will `console.log(typeof NaN)` output?",
                options: ["number", "NaN", "undefined", "object"],
                answer: "number",
                category: "javascript"
            },
            {
                question: "What is the result of `[] + {}` in JavaScript?",
                options: ["'[object Object]'", "'[object Object]{}'", "NaN", "Error"],
                answer: "'[object Object]'",
                category: "javascript"
            },
            {
                question: "What is the difference between `==` and `===`?",
                options: [
                    "`==` compares value only, `===` compares value and type",
                    "`==` compares type only, `===` compares value only",
                    "Both compare value and type",
                    "Both compare value only"
                ],
                answer: "`==` compares value only, `===` compares value and type",
                category: "javascript"
            },
            {
                question: "Which method is used to create a new array with results of calling a function on every element?",
                options: ["map()", "forEach()", "filter()", "reduce()"],
                answer: "map()",
                category: "javascript"
            },
            {
                question: "What is a closure in JavaScript?",
                options: [
                    "A function having access to its outer scope even after outer function has executed",
                    "A function without a return value",
                    "A function that executes immediately",
                    "A function defined inside an object"
                ],
                answer: "A function having access to its outer scope even after outer function has executed",
                category: "javascript"
            },
            {
                question: "What will be the output of `0.1 + 0.2 === 0.3`?",
                options: ["false", "true", "undefined", "NaN"],
                answer: "false",
                category: "javascript"
            },
            {
                question: "Which array method reduces all elements to a single value?",
                options: ["reduce()", "map()", "filter()", "forEach()"],
                answer: "reduce()",
                category: "javascript"
            },
            {
                question: "What is the difference between `call`, `apply`, and `bind`?",
                options: [
                    "`call` and `apply` invoke a function immediately, `bind` returns a new function",
                    "`call` binds context permanently, `apply` temporarily, `bind` never",
                    "They all behave identically",
                    "`bind` invokes immediately, `call` and `apply` return functions"
                ],
                answer: "`call` and `apply` invoke a function immediately, `bind` returns a new function",
                category: "javascript"
            },
            {
                question: "Which of these is NOT a primitive type in JavaScript?",
                options: ["object", "string", "number", "boolean"],
                answer: "object",
                category: "javascript"
            },
            {
                question: "What will `typeof null` return?",
                options: ["object", "null", "undefined", "NaN"],
                answer: "object",
                category: "javascript"
            },
            {
                question: "What is event delegation in JavaScript?",
                options: [
                    "Attaching a single event listener to a parent to handle events for its children",
                    "Delegating tasks to web workers",
                    "Assigning multiple listeners to the same element",
                    "Using setTimeout to delay event handling"
                ],
                answer: "Attaching a single event listener to a parent to handle events for its children",
                category: "javascript"
            },
            {
                question: "What does the spread operator `...` do?",
                options: [
                    "Expands an iterable into individual elements",
                    "Merges objects only",
                    "Creates a copy of function",
                    "Combines arrays into a string"
                ],
                answer: "Expands an iterable into individual elements",
                category: "javascript"
            },
            {
                question: "Which of these will NOT create a new object in JavaScript?",
                options: [
                    "Object.create(null)",
                    "{}",
                    "new Object()",
                    "Object.assign(null)"
                ],
                answer: "Object.assign(null)",
                category: "javascript"
            },
            {
                question: "What is the difference between synchronous and asynchronous code?",
                options: [
                    "Synchronous runs sequentially, asynchronous can run without blocking",
                    "Synchronous runs in background, asynchronous blocks execution",
                    "They are identical",
                    "Asynchronous is faster than synchronous always"
                ],
                answer: "Synchronous runs sequentially, asynchronous can run without blocking",
                category: "javascript"
            },
            {
                question: "What will `typeof NaN === 'number'` evaluate to?",
                options: ["true", "false", "undefined", "NaN"],
                answer: "true",
                category: "javascript"
            },
            {
                question: "Which method converts a JSON string to a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS()"],
                answer: "JSON.parse()",
                category: "javascript"
            },
            {
                question: "What is the difference between `null` and `undefined`?",
                options: [
                    "`null` is assigned value, `undefined` means variable is declared but not assigned",
                    "`undefined` is assigned, `null` means not declared",
                    "Both are identical",
                    "Both represent zero"
                ],
                answer: "`null` is assigned value, `undefined` means variable is declared but not assigned",
                category: "javascript"
            },
            {
                question: "What does `Promise.all()` do?",
                options: [
                    "Waits for all promises to resolve or any to reject",
                    "Runs first promise only",
                    "Resolves promises sequentially",
                    "Cancels unresolved promises"
                ],
                answer: "Waits for all promises to resolve or any to reject",
                category: "javascript"
            },
            {
                question: "What is a generator function in JavaScript?",
                options: [
                    "A function that can pause and resume execution using `yield`",
                    "A function that runs asynchronously",
                    "A function that always returns a Promise",
                    "A function that clones objects"
                ],
                answer: "A function that can pause and resume execution using `yield`",
                category: "javascript"
            }
        ],
        senior: [
            {
                question: "What will be the output of the following code?\n\nconsole.log([] == ![]);",
                options: ["true", "false", "TypeError", "undefined"],
                answer: "true",
                category: "javascript"
            },
            {
                question: "Which of these statements about JavaScript's event loop is TRUE?",
                options: [
                    "Microtasks have higher priority than macrotasks",
                    "Macrotasks are executed before microtasks",
                    "Event loop blocks UI updates always",
                    "Call stack and event loop are the same"
                ],
                answer: "Microtasks have higher priority than macrotasks",
                category: "javascript"
            },
            {
                question: "What is the difference between `for...in` and `for...of` loops?",
                options: [
                    "`for...in` iterates keys, `for...of` iterates values",
                    "`for...in` iterates values, `for...of` iterates keys",
                    "They are identical",
                    "`for...in` only works on arrays"
                ],
                answer: "`for...in` iterates keys, `for...of` iterates values",
                category: "javascript"
            },
            {
                question: "What will the following code output?\n\nlet a = [1,2,3];\nlet b = a;\nb.push(4);\nconsole.log(a);",
                options: [
                    "[1,2,3,4]",
                    "[1,2,3]",
                    "[4]",
                    "Error"
                ],
                answer: "[1,2,3,4]",
                category: "javascript"
            },
            {
                question: "What is a WeakMap in JavaScript?",
                options: [
                    "A collection of key-value pairs where keys are objects and references are weakly held",
                    "A Map that cannot be iterated",
                    "A Map that allows primitive keys only",
                    "A global map shared across all functions"
                ],
                answer: "A collection of key-value pairs where keys are objects and references are weakly held",
                category: "javascript"
            },
            {
                question: "Which of these is true about JavaScript’s `this` keyword in strict mode?",
                options: [
                    "In global context, `this` is undefined",
                    "In functions, `this` always refers to global object",
                    "Arrow functions bind their own `this` dynamically",
                    "`this` is immutable"
                ],
                answer: "In global context, `this` is undefined",
                category: "javascript"
            },
            {
                question: "What will this code print?\n\nconsole.log(typeof (function(){}));",
                options: ["function", "object", "undefined", "null"],
                answer: "function",
                category: "javascript"
            },
            {
                question: "Which of the following will NOT create a new execution context?",
                options: [
                    "Calling a function",
                    "Global scope execution",
                    "Arrow function invocation",
                    "Eval()"
                ],
                answer: "Arrow function invocation",
                category: "javascript"
            },
            {
                question: "What is the difference between `Object.freeze()` and `Object.seal()`?",
                options: [
                    "Freeze makes object immutable, seal prevents adding/removing properties but allows modification",
                    "Seal makes object immutable, freeze prevents adding/removing properties",
                    "They are identical",
                    "Freeze only works on arrays"
                ],
                answer: "Freeze makes object immutable, seal prevents adding/removing properties but allows modification",
                category: "javascript"
            },
            {
                question: "What will the following code output?\n\nconsole.log(0 || '0' && []);",
                options: ["[]", "0", "'0'", "false"],
                answer: "[]",
                category: "javascript"
            },
            {
                question: "What is the primary difference between `setTimeout(fn, 0)` and `Promise.resolve().then(fn)`?",
                options: [
                    "`Promise` callback runs in microtask queue, `setTimeout` runs in macrotask queue",
                    "Both run in microtask queue",
                    "Both run in macrotask queue",
                    "`setTimeout` runs immediately, Promise waits"
                ],
                answer: "`Promise` callback runs in microtask queue, `setTimeout` runs in macrotask queue",
                category: "javascript"
            },
            {
                question: "Which of these is NOT a method of controlling asynchronous execution in JavaScript?",
                options: ["async/await", "Generators", "setImmediate", "Hoisting"],
                answer: "Hoisting",
                category: "javascript"
            },
            {
                question: "What is the difference between shallow copy and deep copy in JavaScript?",
                options: [
                    "Shallow copy copies references of nested objects, deep copy duplicates nested objects",
                    "Shallow copy duplicates everything, deep copy copies references only",
                    "They are identical",
                    "Deep copy only works on arrays"
                ],
                answer: "Shallow copy copies references of nested objects, deep copy duplicates nested objects",
                category: "javascript"
            },
            {
                question: "Which statement about JavaScript modules is TRUE?",
                options: [
                    "ES modules are statically analyzed, CommonJS modules are dynamically loaded",
                    "CommonJS modules are statically analyzed, ES modules are dynamic",
                    "Modules cannot import other modules",
                    "Modules automatically merge global scope"
                ],
                answer: "ES modules are statically analyzed, CommonJS modules are dynamically loaded",
                category: "javascript"
            },
            {
                question: "What will the following code output?\n\nlet x = 10;\n(function(){ console.log(x); var x = 20; })();",
                options: ["undefined", "10", "20", "ReferenceError"],
                answer: "undefined",
                category: "javascript"
            },
            {
                question: "Which statement about JavaScript Prototypes is TRUE?",
                options: [
                    "Every object has an internal [[Prototype]] reference that can be accessed via __proto__",
                    "Functions cannot have prototypes",
                    "Prototypes are immutable",
                    "Prototypes are only for arrays"
                ],
                answer: "Every object has an internal [[Prototype]] reference that can be accessed via __proto__",
                category: "javascript"
            },
            {
                question: "What is the output of:\n\nconsole.log([] + []);\nconsole.log([] + {});\nconsole.log({} + []);",
                options: [
                    "'', '[object Object]', 0",
                    "'', '[object Object]', '[object Object]'",
                    "'', '[object Object]', '[object Object]'",
                    "Error"
                ],
                answer: "'', '[object Object]', '[object Object]'",
                category: "javascript"
            },
            {
                question: "What is the difference between `function f(){}` and `const f = () => {}` regarding hoisting?",
                options: [
                    "Function declarations are hoisted, arrow function expressions are not",
                    "Both are hoisted",
                    "Arrow functions are hoisted, regular functions are not",
                    "Neither are hoisted"
                ],
                answer: "Function declarations are hoisted, arrow function expressions are not",
                category: "javascript"
            },
            {
                question: "What is a Symbol in JavaScript?",
                options: [
                    "A unique, immutable primitive used as object keys",
                    "A number type",
                    "A string type",
                    "A reference type that can be modified"
                ],
                answer: "A unique, immutable primitive used as object keys",
                category: "javascript"
            },
            {
                question: "What will the following code output?\n\nconst obj = { a: 1 };\nObject.defineProperty(obj, 'b', { value: 2, enumerable: false });\nconsole.log(Object.keys(obj));",
                options: [
                    "['a']",
                    "['a', 'b']",
                    "['b']",
                    "[]"
                ],
                answer: "['a']",
                category: "javascript"
            }
        ]
    },
    react: {
        junior: [
            {
                question: "What is React primarily used for?",
                options: [
                    "Building user interfaces",
                    "Managing databases",
                    "Server-side rendering only",
                    "Creating mobile operating systems"
                ],
                answer: "Building user interfaces",
                category: "react"
            },
            {
                question: "Which method is used to create components in React using functions?",
                options: [
                    "FunctionComponent",
                    "createFunction",
                    "Functional components",
                    "renderFunction"
                ],
                answer: "Functional components",
                category: "react"
            },
            {
                question: "What is JSX?",
                options: [
                    "A JavaScript syntax extension that allows writing HTML in JavaScript",
                    "A CSS preprocessor",
                    "A type of JSON file",
                    "A package manager"
                ],
                answer: "A JavaScript syntax extension that allows writing HTML in JavaScript",
                category: "react"
            },
            {
                question: "Which hook is used for state management in a functional component?",
                options: [
                    "useState",
                    "useEffect",
                    "useContext",
                    "useReducer"
                ],
                answer: "useState",
                category: "react"
            },
            {
                question: "What is the purpose of the `useEffect` hook?",
                options: [
                    "To handle side effects in functional components",
                    "To define CSS styles",
                    "To create new components",
                    "To store global state"
                ],
                answer: "To handle side effects in functional components",
                category: "react"
            },
            {
                question: "What is the correct syntax to pass a prop named `name` to a component?",
                options: [
                    "<MyComponent name='John' />",
                    "<MyComponent {name} />",
                    "<MyComponent name: 'John' />",
                    "<MyComponent prop='name:John' />"
                ],
                answer: "<MyComponent name='John' />",
                category: "react"
            },
            {
                question: "How do you create a new React app using Create React App?",
                options: [
                    "npx create-react-app my-app",
                    "npm install react",
                    "react new app my-app",
                    "npm init react-app"
                ],
                answer: "npx create-react-app my-app",
                category: "react"
            },
            {
                question: "What is a key in React lists used for?",
                options: [
                    "To identify each element uniquely",
                    "To encrypt list data",
                    "To define CSS styles",
                    "To store element values"
                ],
                answer: "To identify each element uniquely",
                category: "react"
            },
            {
                question: "Which prop is used to pass data from parent to child components?",
                options: [
                    "props",
                    "state",
                    "data",
                    "context"
                ],
                answer: "props",
                category: "react"
            },
            {
                question: "What does the Virtual DOM do in React?",
                options: [
                    "Improves performance by updating only changed parts of the UI",
                    "Stores application data permanently",
                    "Controls CSS animations",
                    "Manages HTTP requests"
                ],
                answer: "Improves performance by updating only changed parts of the UI",
                category: "react"
            },
            {
                question: "Which of these is a correct way to handle events in React?",
                options: [
                    "<button onClick={handleClick}>Click</button>",
                    "<button onclick='handleClick()'>Click</button>",
                    "<button onClick='handleClick'>Click</button>",
                    "<button click={handleClick}>Click</button>"
                ],
                answer: "<button onClick={handleClick}>Click</button>",
                category: "react"
            },
            {
                question: "What does `npm start` do in a Create React App project?",
                options: [
                    "Starts the development server",
                    "Builds the project for production",
                    "Installs dependencies",
                    "Deploys the app to the server"
                ],
                answer: "Starts the development server",
                category: "react"
            },
            {
                question: "How can you conditionally render content in React?",
                options: [
                    "Using JavaScript conditional expressions inside JSX",
                    "Using CSS media queries only",
                    "Using HTML if attributes",
                    "Using React templates"
                ],
                answer: "Using JavaScript conditional expressions inside JSX",
                category: "react"
            },
            {
                question: "Which tool is commonly used to manage routing in React?",
                options: [
                    "React Router",
                    "Redux",
                    "React Switch",
                    "React Path"
                ],
                answer: "React Router",
                category: "react"
            },
            {
                question: "What is the default port for a React app started with Create React App?",
                options: [
                    "3000",
                    "8080",
                    "5000",
                    "4000"
                ],
                answer: "3000",
                category: "react"
            },
            {
                question: "Which statement about props is correct?",
                options: [
                    "Props are immutable",
                    "Props can be directly modified in the child component",
                    "Props are only available in class components",
                    "Props store local component state"
                ],
                answer: "Props are immutable",
                category: "react"
            },
            {
                question: "What is the correct way to import React in a file?",
                options: [
                    "import React from 'react';",
                    "require('react');",
                    "include React;",
                    "import 'react';"
                ],
                answer: "import React from 'react';",
                category: "react"
            },
            {
                question: "How do you update state in a functional component?",
                options: [
                    "By calling the updater function from useState",
                    "By directly assigning to the state variable",
                    "By modifying this.state",
                    "By changing props"
                ],
                answer: "By calling the updater function from useState",
                category: "react"
            },
            {
                question: "Which of the following is NOT a React hook?",
                options: [
                    "useData",
                    "useState",
                    "useEffect",
                    "useReducer"
                ],
                answer: "useData",
                category: "react"
            },
            {
                question: "What is React's main advantage?",
                options: [
                    "Efficient UI updates via Virtual DOM",
                    "Built-in database",
                    "Server-side language support",
                    "Native CSS preprocessor"
                ],
                answer: "Efficient UI updates via Virtual DOM",
                category: "react"
            }
        ],
        mid: [
            {
                question: "What is the difference between a controlled and uncontrolled component in React?",
                options: [
                    "Controlled components have state managed by React, uncontrolled manage their own state",
                    "Controlled components manage their own state, uncontrolled are managed by React",
                    "Both are identical",
                    "Only class components can be controlled"
                ],
                answer: "Controlled components have state managed by React, uncontrolled manage their own state",
                category: "react"
            },
            {
                question: "Which hook should you use to perform side effects in functional components?",
                options: ["useEffect", "useState", "useMemo", "useCallback"],
                answer: "useEffect",
                category: "react"
            },
            {
                question: "What will happen if you call `setState` multiple times synchronously in a class component?",
                options: [
                    "React may batch updates for performance",
                    "Each setState will immediately update state separately",
                    "It throws an error",
                    "The last setState is ignored"
                ],
                answer: "React may batch updates for performance",
                category: "react"
            },
            {
                question: "What is the difference between `React.memo` and `useMemo`?",
                options: [
                    "React.memo memoizes a component, useMemo memoizes a value",
                    "useMemo memoizes a component, React.memo memoizes a value",
                    "They are identical",
                    "React.memo only works in class components"
                ],
                answer: "React.memo memoizes a component, useMemo memoizes a value",
                category: "react"
            },
            {
                question: "Which hook is used to access a DOM element directly?",
                options: ["useRef", "useEffect", "useState", "useCallback"],
                answer: "useRef",
                category: "react"
            },
            {
                question: "What is the default behavior of React’s `useEffect` with no dependencies?",
                options: [
                    "Runs after every render",
                    "Runs only on mount",
                    "Runs only on unmount",
                    "Never runs"
                ],
                answer: "Runs after every render",
                category: "react"
            },
            {
                question: "What is the difference between `React.PureComponent` and `React.Component`?",
                options: [
                    "PureComponent implements shallow prop and state comparison to prevent unnecessary renders",
                    "Component automatically implements shouldComponentUpdate",
                    "PureComponent cannot have state",
                    "There is no difference"
                ],
                answer: "PureComponent implements shallow prop and state comparison to prevent unnecessary renders",
                category: "react"
            },
            {
                question: "Which hook allows you to share logic between components without repeating code?",
                options: ["Custom Hooks", "useContext", "useReducer", "useEffect"],
                answer: "Custom Hooks",
                category: "react"
            },
            {
                question: "What is the difference between `useReducer` and `useState`?",
                options: [
                    "useReducer is useful for complex state logic, useState for simple state",
                    "useState is only for objects, useReducer for primitives",
                    "They are identical",
                    "useReducer cannot update nested state"
                ],
                answer: "useReducer is useful for complex state logic, useState for simple state",
                category: "react"
            },
            {
                question: "Which method is used to update state in class components?",
                options: ["this.setState", "this.updateState", "this.state()", "this.forceUpdate"],
                answer: "this.setState",
                category: "react"
            },
            {
                question: "What is the purpose of `React.Fragment`?",
                options: [
                    "To group multiple elements without adding extra nodes to the DOM",
                    "To create portals",
                    "To memoize children",
                    "To define default props"
                ],
                answer: "To group multiple elements without adding extra nodes to the DOM",
                category: "react"
            },
            {
                question: "What is the difference between `useLayoutEffect` and `useEffect`?",
                options: [
                    "useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously",
                    "useEffect runs before DOM updates, useLayoutEffect runs after render",
                    "They are identical",
                    "useLayoutEffect only works in class components"
                ],
                answer: "useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously",
                category: "react"
            },
            {
                question: "How does React handle keys in lists?",
                options: [
                    "Keys help React identify which items have changed, added, or removed",
                    "Keys are used only for styling",
                    "Keys are optional and have no effect",
                    "Keys prevent re-rendering completely"
                ],
                answer: "Keys help React identify which items have changed, added, or removed",
                category: "react"
            },
            {
                question: "What is a React Portal used for?",
                options: [
                    "Rendering children into a DOM node outside of parent hierarchy",
                    "Memoizing expensive computations",
                    "Suspense fallback rendering",
                    "Managing Redux state"
                ],
                answer: "Rendering children into a DOM node outside of parent hierarchy",
                category: "react"
            },
            {
                question: "Which hook is useful for optimizing performance by memoizing a function?",
                options: ["useCallback", "useMemo", "useEffect", "useState"],
                answer: "useCallback",
                category: "react"
            },
            {
                question: "What happens if you update state based on previous state incorrectly?",
                options: [
                    "You may get stale state due to asynchronous updates",
                    "State always updates correctly",
                    "It throws an error",
                    "Component unmounts"
                ],
                answer: "You may get stale state due to asynchronous updates",
                category: "react"
            },
            {
                question: "What is the difference between `React.Suspense` and `ErrorBoundary`?",
                options: [
                    "Suspense handles loading states, ErrorBoundary handles runtime errors",
                    "Suspense handles errors, ErrorBoundary handles loading",
                    "They are identical",
                    "Suspense works only in class components"
                ],
                answer: "Suspense handles loading states, ErrorBoundary handles runtime errors",
                category: "react"
            },
            {
                question: "Which hook is useful for global state management in React without Redux?",
                options: ["useContext", "useReducer", "useMemo", "useCallback"],
                answer: "useContext",
                category: "react"
            },
            {
                question: "What is the difference between `React.lazy` and `React.Suspense`?",
                options: [
                    "React.lazy dynamically imports components, Suspense shows fallback while loading",
                    "Suspense dynamically imports components, lazy shows fallback",
                    "They are identical",
                    "React.lazy only works in class components"
                ],
                answer: "React.lazy dynamically imports components, Suspense shows fallback while loading",
                category: "react"
            },
            {
                question: "What will happen if you forget the `key` prop in a list?",
                options: [
                    "React may re-render unnecessarily and lose element state",
                    "Nothing, it works fine",
                    "The component will not render",
                    "React throws a runtime error"
                ],
                answer: "React may re-render unnecessarily and lose element state",
                category: "react"
            }
        ],
        senior: [
            {
                question: "What is the difference between concurrent mode and legacy mode in React?",
                options: [
                    "Concurrent mode allows interruptible rendering for better responsiveness, legacy mode does not",
                    "Legacy mode is faster than concurrent mode",
                    "They are identical",
                    "Concurrent mode only works with class components"
                ],
                answer: "Concurrent mode allows interruptible rendering for better responsiveness, legacy mode does not",
                category: "react"
            },
            {
                question: "What is the purpose of `useImperativeHandle` hook?",
                options: [
                    "Customizes the instance value exposed when using `ref`",
                    "Updates state imperatively",
                    "Handles errors inside components",
                    "Prevents re-rendering"
                ],
                answer: "Customizes the instance value exposed when using `ref`",
                category: "react"
            },
            {
                question: "What is the difference between `ReactDOM.createRoot` and `ReactDOM.render`?",
                options: [
                    "createRoot enables concurrent features, render is legacy",
                    "They are identical",
                    "render enables concurrent features, createRoot is legacy",
                    "createRoot only works for class components"
                ],
                answer: "createRoot enables concurrent features, render is legacy",
                category: "react"
            },
            {
                question: "Which statement about React Fiber is TRUE?",
                options: [
                    "Fiber allows interruptible and incremental rendering of components",
                    "Fiber is a new virtual DOM library",
                    "Fiber replaces JSX parsing",
                    "Fiber automatically optimizes Redux state"
                ],
                answer: "Fiber allows interruptible and incremental rendering of components",
                category: "react"
            },
            {
                question: "What is the difference between `useEffect` cleanup and `componentWillUnmount`?",
                options: [
                    "Cleanup function runs when effect is re-run or component unmounts, componentWillUnmount runs only on unmount",
                    "They are identical",
                    "componentWillUnmount runs after each render",
                    "Cleanup only runs on mount"
                ],
                answer: "Cleanup function runs when effect is re-run or component unmounts, componentWillUnmount runs only on unmount",
                category: "react"
            },
            {
                question: "What is the difference between server-side rendering (SSR) and static site generation (SSG) in React?",
                options: [
                    "SSR generates HTML on each request, SSG generates HTML at build time",
                    "SSG generates HTML on each request, SSR at build time",
                    "Both generate HTML at runtime",
                    "SSR only works with class components"
                ],
                answer: "SSR generates HTML on each request, SSG generates HTML at build time",
                category: "react"
            },
            {
                question: "How does `React.memo` work with complex objects as props?",
                options: [
                    "Shallow comparison is used; new object references will trigger re-render",
                    "Deep comparison is automatic",
                    "It always prevents re-render",
                    "React.memo cannot be used with objects"
                ],
                answer: "Shallow comparison is used; new object references will trigger re-render",
                category: "react"
            },
            {
                question: "What is the difference between `forwardRef` and `useRef`?",
                options: [
                    "forwardRef passes a ref to child component, useRef creates a ref inside a component",
                    "useRef passes ref to child, forwardRef creates ref inside",
                    "They are identical",
                    "forwardRef only works with class components"
                ],
                answer: "forwardRef passes a ref to child component, useRef creates a ref inside a component",
                category: "react"
            },
            {
                question: "What is the main advantage of Suspense for data fetching in concurrent mode?",
                options: [
                    "Suspense allows React to pause rendering until data is ready, improving UX",
                    "Suspense prevents errors",
                    "Suspense memoizes values",
                    "Suspense replaces useEffect"
                ],
                answer: "Suspense allows React to pause rendering until data is ready, improving UX",
                category: "react"
            },
            {
                question: "What is the difference between `hydrate` and `render` in React DOM?",
                options: [
                    "hydrate attaches event listeners to SSR markup, render creates fresh markup",
                    "render attaches listeners, hydrate creates fresh markup",
                    "They are identical",
                    "hydrate only works with class components"
                ],
                answer: "hydrate attaches event listeners to SSR markup, render creates fresh markup",
                category: "react"
            },
            {
                question: "Which of these is true about React context performance?",
                options: [
                    "Updating a context value triggers re-render for all consuming components",
                    "Context updates are always batched automatically",
                    "Context only updates class components",
                    "Context updates do not trigger re-render"
                ],
                answer: "Updating a context value triggers re-render for all consuming components",
                category: "react"
            },
            {
                question: "How does React handle state updates in concurrent mode?",
                options: [
                    "State updates can be interrupted and resumed, prioritizing higher priority updates",
                    "State updates are always synchronous",
                    "Concurrent mode disables setState",
                    "Updates are discarded if async"
                ],
                answer: "State updates can be interrupted and resumed, prioritizing higher priority updates",
                category: "react"
            },
            {
                question: "What is the difference between `useDeferredValue` and `useTransition`?",
                options: [
                    "useDeferredValue defers a value update, useTransition defers a state update",
                    "They are identical",
                    "useTransition defers a value, useDeferredValue defers a state",
                    "useDeferredValue only works in class components"
                ],
                answer: "useDeferredValue defers a value update, useTransition defers a state update",
                category: "react"
            },
            {
                question: "What is React’s `Profiler` used for?",
                options: [
                    "Measures rendering performance of components",
                    "Handles errors",
                    "Suspends component rendering",
                    "Memoizes expensive calculations"
                ],
                answer: "Measures rendering performance of components",
                category: "react"
            },
            {
                question: "How does React differentiate between controlled and uncontrolled forms internally?",
                options: [
                    "Controlled inputs use value prop, uncontrolled inputs use defaultValue",
                    "They are treated identically",
                    "Uncontrolled forms cannot update state",
                    "Controlled forms cannot use refs"
                ],
                answer: "Controlled inputs use value prop, uncontrolled inputs use defaultValue",
                category: "react"
            },
            {
                question: "Which hook is designed to prevent unnecessary expensive computations?",
                options: ["useMemo", "useCallback", "useRef", "useEffect"],
                answer: "useMemo",
                category: "react"
            },
            {
                question: "What is the difference between `key` and `ref` in React?",
                options: [
                    "key helps React identify elements in lists, ref provides access to DOM nodes or component instances",
                    "key is same as ref",
                    "ref is used only for styling",
                    "key prevents re-rendering"
                ],
                answer: "key helps React identify elements in lists, ref provides access to DOM nodes or component instances",
                category: "react"
            },
            {
                question: "How does React handle errors inside event handlers?",
                options: [
                    "Errors in event handlers are not caught by Error Boundaries",
                    "They are caught by Error Boundaries",
                    "They prevent the component from re-rendering",
                    "React automatically retries the handler"
                ],
                answer: "Errors in event handlers are not caught by Error Boundaries",
                category: "react"
            },
            {
                question: "What is the purpose of `useId` hook in React 18+?",
                options: [
                    "Generates a unique ID for accessibility and SSR consistency",
                    "Creates a new state variable",
                    "Memoizes component props",
                    "Handles error boundaries"
                ],
                answer: "Generates a unique ID for accessibility and SSR consistency",
                category: "react"
            },
            {
                question: "What is the difference between lazy loading a component with React.lazy and dynamic import without React.lazy?",
                options: [
                    "React.lazy integrates with Suspense for fallback UI, plain dynamic import does not",
                    "They are identical",
                    "Dynamic import cannot load components",
                    "React.lazy only works in class components"
                ],
                answer: "React.lazy integrates with Suspense for fallback UI, plain dynamic import does not",
                category: "react"
            },
            {
                question: "What is the main purpose of React’s `startTransition` API?",
                options: [
                    "Marks state updates as low priority to avoid blocking UI",
                    "Starts concurrent rendering automatically",
                    "Suspends updates immediately",
                    "Prevents re-renders"
                ],
                answer: "Marks state updates as low priority to avoid blocking UI",
                category: "react"
            }
        ]
    },
    principles: {
        junior: [
            {
                question: "What does DRY stand for in software development?",
                options: [
                    "Don't Repeat Yourself",
                    "Do Repeat Yourself",
                    "Debug Regularly Yourself",
                    "Deploy Rapidly Yourself"
                ],
                answer: "Don't Repeat Yourself",
                category: "principles"
            },
            {
                question: "Which principle suggests keeping a function or module focused on one task?",
                options: [
                    "Single Responsibility Principle",
                    "Open/Closed Principle",
                    "KISS Principle",
                    "Dependency Inversion"
                ],
                answer: "Single Responsibility Principle",
                category: "principles"
            },
            {
                question: "What does KISS stand for in software engineering?",
                options: [
                    "Keep It Simple, Stupid",
                    "Keep It Super Short",
                    "Keep It Secure and Safe",
                    "Keep It Strictly Structured"
                ],
                answer: "Keep It Simple, Stupid",
                category: "principles"
            },
            {
                question: "Which of these is NOT part of the SOLID principles?",
                options: [
                    "Dependency Injection Principle",
                    "Single Responsibility Principle",
                    "Interface Segregation Principle",
                    "Liskov Substitution Principle"
                ],
                answer: "Dependency Injection Principle",
                category: "principles"
            },
            {
                question: "What does YAGNI stand for?",
                options: [
                    "You Aren’t Gonna Need It",
                    "Yes And Get New Ideas",
                    "Your Application Gets New Integrations",
                    "You Are Great, No Issues"
                ],
                answer: "You Aren’t Gonna Need It",
                category: "principles"
            },
            {
                question: "Which principle advises against adding features before they are needed?",
                options: [
                    "YAGNI",
                    "DRY",
                    "KISS",
                    "Open/Closed"
                ],
                answer: "YAGNI",
                category: "principles"
            },
            {
                question: "What is the goal of the Open/Closed Principle?",
                options: [
                    "Software entities should be open for extension but closed for modification",
                    "Code should be open source",
                    "Code should be closed for public use",
                    "Classes should be easy to modify directly"
                ],
                answer: "Software entities should be open for extension but closed for modification",
                category: "principles"
            },
            {
                question: "Which principle promotes writing code that can be reused in different contexts?",
                options: [
                    "Reusability",
                    "KISS",
                    "DRY",
                    "Coupling"
                ],
                answer: "Reusability",
                category: "principles"
            },
            {
                question: "What does 'high cohesion' in code mean?",
                options: [
                    "Related tasks are kept together in the same module",
                    "Modules depend heavily on each other",
                    "Functions have multiple unrelated purposes",
                    "The code is very tightly coupled"
                ],
                answer: "Related tasks are kept together in the same module",
                category: "principles"
            },
            {
                question: "What is 'loose coupling'?",
                options: [
                    "Reducing dependencies between modules",
                    "Making modules dependent on each other",
                    "Combining multiple classes into one",
                    "Removing all functions from modules"
                ],
                answer: "Reducing dependencies between modules",
                category: "principles"
            },
            {
                question: "Which principle focuses on writing code that is easy to understand and maintain?",
                options: [
                    "Clean Code",
                    "Dependency Injection",
                    "Liskov Substitution",
                    "Interface Segregation"
                ],
                answer: "Clean Code",
                category: "principles"
            },
            {
                question: "What is 'code refactoring'?",
                options: [
                    "Improving the structure of code without changing its behavior",
                    "Rewriting the entire codebase",
                    "Adding new features to the code",
                    "Fixing only syntax errors"
                ],
                answer: "Improving the structure of code without changing its behavior",
                category: "principles"
            },
            {
                question: "Which SOLID principle deals with replacing objects with subtypes without affecting correctness?",
                options: [
                    "Liskov Substitution Principle",
                    "Open/Closed Principle",
                    "Interface Segregation Principle",
                    "Dependency Inversion Principle"
                ],
                answer: "Liskov Substitution Principle",
                category: "principles"
            },
            {
                question: "What is the main purpose of version control systems like Git?",
                options: [
                    "To track and manage changes in code",
                    "To write cleaner code",
                    "To test applications",
                    "To compile code faster"
                ],
                answer: "To track and manage changes in code",
                category: "principles"
            },
            {
                question: "Which principle suggests that modules should depend on abstractions rather than concrete implementations?",
                options: [
                    "Dependency Inversion Principle",
                    "Interface Segregation Principle",
                    "KISS Principle",
                    "DRY Principle"
                ],
                answer: "Dependency Inversion Principle",
                category: "principles"
            },
            {
                question: "What is the purpose of unit testing?",
                options: [
                    "To verify that individual pieces of code work as expected",
                    "To test the entire system",
                    "To optimize code performance",
                    "To deploy the application"
                ],
                answer: "To verify that individual pieces of code work as expected",
                category: "principles"
            },
            {
                question: "What does 'technical debt' refer to?",
                options: [
                    "The future cost of fixing shortcuts or poor code decisions",
                    "Money owed for software licenses",
                    "Unpaid developer salaries",
                    "The total cost of hardware for the project"
                ],
                answer: "The future cost of fixing shortcuts or poor code decisions",
                category: "principles"
            },
            {
                question: "Which of the following helps prevent bugs and makes code easier to change?",
                options: [
                    "Writing automated tests",
                    "Avoiding version control",
                    "Skipping code reviews",
                    "Writing complex one-liners"
                ],
                answer: "Writing automated tests",
                category: "principles"
            },
            {
                question: "What does 'readable code' mean?",
                options: [
                    "Code that is easy to understand for humans",
                    "Code that only the compiler understands",
                    "Code with no comments",
                    "Code that runs faster"
                ],
                answer: "Code that is easy to understand for humans",
                category: "principles"
            },
            {
                question: "Why is documentation important in software development?",
                options: [
                    "It helps developers understand and maintain the code",
                    "It increases code execution speed",
                    "It replaces the need for comments",
                    "It makes the code run without bugs"
                ],
                answer: "It helps developers understand and maintain the code",
                category: "principles"
            }
        ],
        mid: [
            {
                question: "What does SOLID stand for in software engineering?",
                options: [
                    "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
                    "Simple, Object-Oriented, Lightweight, Integrated, Declarative",
                    "Structure, Object, Logic, Interface, Design",
                    "None of the above"
                ],
                answer: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
                category: "principles"
            },
            {
                question: "What is the primary benefit of using the Single Responsibility Principle?",
                options: [
                    "It makes classes easier to understand and maintain",
                    "It improves runtime performance",
                    "It reduces memory usage",
                    "It ensures all classes inherit from a base class"
                ],
                answer: "It makes classes easier to understand and maintain",
                category: "principles"
            },
            {
                question: "What does the Open/Closed Principle state?",
                options: [
                    "Software entities should be open for extension but closed for modification",
                    "Classes should be open for inheritance but closed for interfaces",
                    "Modules should never be extended",
                    "Code should be rewritten frequently"
                ],
                answer: "Software entities should be open for extension but closed for modification",
                category: "principles"
            },
            {
                question: "Which principle is violated if a subclass cannot be used interchangeably with its parent class?",
                options: [
                    "Liskov Substitution Principle",
                    "Dependency Inversion Principle",
                    "Interface Segregation Principle",
                    "Single Responsibility Principle"
                ],
                answer: "Liskov Substitution Principle",
                category: "principles"
            },
            {
                question: "What is the main idea behind Interface Segregation Principle?",
                options: [
                    "Clients should not be forced to depend on interfaces they do not use",
                    "Classes should only implement one interface",
                    "Interfaces should be abstract",
                    "Interfaces should be sealed"
                ],
                answer: "Clients should not be forced to depend on interfaces they do not use",
                category: "principles"
            },
            {
                question: "What does Dependency Inversion Principle emphasize?",
                options: [
                    "High-level modules should not depend on low-level modules; both should depend on abstractions",
                    "Low-level modules should control high-level modules",
                    "Classes should avoid interfaces",
                    "Dependencies should be hard-coded"
                ],
                answer: "High-level modules should not depend on low-level modules; both should depend on abstractions",
                category: "principles"
            },
            {
                question: "What is coupling in software design?",
                options: [
                    "Degree of interdependence between software modules",
                    "Number of methods in a class",
                    "Size of the codebase",
                    "Frequency of code comments"
                ],
                answer: "Degree of interdependence between software modules",
                category: "principles"
            },
            {
                question: "What is cohesion in software design?",
                options: [
                    "Degree to which elements of a module belong together",
                    "Number of modules in a system",
                    "Amount of duplicate code",
                    "Number of dependencies"
                ],
                answer: "Degree to which elements of a module belong together",
                category: "principles"
            },
            {
                question: "Which design pattern is used to provide a simplified interface to a complex system?",
                options: ["Facade", "Decorator", "Singleton", "Observer"],
                answer: "Facade",
                category: "principles"
            },
            {
                question: "Which principle encourages writing small functions that do one thing?",
                options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Principle", "DRY Principle"],
                answer: "Single Responsibility Principle",
                category: "principles"
            },
            {
                question: "What does DRY stand for?",
                options: [
                    "Don't Repeat Yourself",
                    "Direct Resource Yield",
                    "Data Redundancy Yield",
                    "Design Rules Yet"
                ],
                answer: "Don't Repeat Yourself",
                category: "principles"
            },
            {
                question: "What is the KISS principle?",
                options: [
                    "Keep It Simple, Stupid",
                    "Keep It Secure, Stable",
                    "Key Interface Security Standards",
                    "Keep Iterating Simple Syntax"
                ],
                answer: "Keep It Simple, Stupid",
                category: "principles"
            },
            {
                question: "What does YAGNI stand for in agile development?",
                options: [
                    "You Aren’t Gonna Need It",
                    "Your Algorithm Generates New Ideas",
                    "Your Application Gets New Interfaces",
                    "You Always Get New Iterations"
                ],
                answer: "You Aren’t Gonna Need It",
                category: "principles"
            },
            {
                question: "Which principle suggests that code should be written to be easily changed without breaking existing functionality?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "Liskov Substitution Principle",
                    "Interface Segregation Principle"
                ],
                answer: "Open/Closed Principle",
                category: "principles"
            },
            {
                question: "What is the main purpose of the Law of Demeter?",
                options: [
                    "Minimize knowledge of other modules, promoting loose coupling",
                    "Enforce method naming conventions",
                    "Avoid deep inheritance",
                    "Guarantee immutability"
                ],
                answer: "Minimize knowledge of other modules, promoting loose coupling",
                category: "principles"
            },
            {
                question: "What is the difference between high coupling and low coupling?",
                options: [
                    "High coupling means modules are highly dependent; low coupling means modules are independent",
                    "High coupling is better for reuse",
                    "Low coupling increases complexity",
                    "Coupling refers to memory usage"
                ],
                answer: "High coupling means modules are highly dependent; low coupling means modules are independent",
                category: "principles"
            },
            {
                question: "Which principle emphasizes writing code that is easy to understand and maintain?",
                options: ["Clean Code", "KISS", "YAGNI", "DRY"],
                answer: "Clean Code",
                category: "principles"
            },
            {
                question: "What is the main idea of the Composition over Inheritance principle?",
                options: [
                    "Favor combining small, reusable components rather than deep inheritance hierarchies",
                    "Always use inheritance instead of functions",
                    "Composition should be avoided",
                    "It is only applicable in functional programming"
                ],
                answer: "Favor combining small, reusable components rather than deep inheritance hierarchies",
                category: "principles"
            },
            {
                question: "What is the SOLID principle most closely associated with reducing code fragility?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "Dependency Inversion Principle",
                    "Interface Segregation Principle"
                ],
                answer: "Open/Closed Principle",
                category: "principles"
            },
            {
                question: "Which principle helps prevent tight coupling and improves modularity?",
                options: [
                    "Dependency Inversion Principle",
                    "DRY",
                    "KISS",
                    "YAGNI"
                ],
                answer: "Dependency Inversion Principle",
                category: "principles"
            }
        ],
        senior: [
            {
                question: "Which of these is a correct interpretation of the Liskov Substitution Principle violation?",
                options: [
                    "A subclass changes expected behavior of the parent class",
                    "A subclass adds new methods",
                    "A subclass uses private methods",
                    "A subclass has more properties"
                ],
                answer: "A subclass changes expected behavior of the parent class",
                category: "principles"
            },
            {
                question: "In terms of software architecture, what is the primary risk of tight coupling?",
                options: [
                    "Changes in one module can propagate and break others",
                    "It improves performance",
                    "It simplifies testing",
                    "It increases readability"
                ],
                answer: "Changes in one module can propagate and break others",
                category: "principles"
            },
            {
                question: "Which design pattern is best suited for decoupling an abstraction from its implementation?",
                options: ["Bridge", "Decorator", "Factory Method", "Singleton"],
                answer: "Bridge",
                category: "principles"
            },
            {
                question: "What is a common problem with deep inheritance hierarchies?",
                options: [
                    "They are hard to maintain and prone to fragility",
                    "They improve flexibility",
                    "They reduce memory usage",
                    "They prevent polymorphism"
                ],
                answer: "They are hard to maintain and prone to fragility",
                category: "principles"
            },
            {
                question: "What is the main purpose of the Dependency Injection pattern?",
                options: [
                    "To invert control of dependencies for better modularity and testability",
                    "To increase coupling between modules",
                    "To create singletons automatically",
                    "To replace inheritance"
                ],
                answer: "To invert control of dependencies for better modularity and testability",
                category: "principles"
            },
            {
                question: "Which principle is most directly related to writing code that is resilient to changes in other modules?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "YAGNI",
                    "DRY"
                ],
                answer: "Open/Closed Principle",
                category: "principles"
            },
            {
                question: "What is the main advantage of programming to an interface rather than an implementation?",
                options: [
                    "It reduces coupling and allows easier substitution",
                    "It increases performance",
                    "It enforces inheritance",
                    "It avoids using abstract classes"
                ],
                answer: "It reduces coupling and allows easier substitution",
                category: "principles"
            },
            {
                question: "Which principle is violated when a module knows too much about other modules’ internal structures?",
                options: [
                    "Law of Demeter",
                    "Single Responsibility Principle",
                    "Dependency Inversion Principle",
                    "DRY"
                ],
                answer: "Law of Demeter",
                category: "principles"
            },
            {
                question: "What is the difference between functional cohesion and sequential cohesion?",
                options: [
                    "Functional cohesion performs a single well-defined task; sequential cohesion performs tasks where output of one is input to another",
                    "Sequential cohesion is always better than functional",
                    "Functional cohesion increases coupling",
                    "They are identical"
                ],
                answer: "Functional cohesion performs a single well-defined task; sequential cohesion performs tasks where output of one is input to another",
                category: "principles"
            },
            {
                question: "What is the primary goal of using SOLID principles together?",
                options: [
                    "Create maintainable, flexible, and scalable software",
                    "Maximize runtime performance",
                    "Minimize memory usage",
                    "Enforce strict typing"
                ],
                answer: "Create maintainable, flexible, and scalable software",
                category: "principles"
            },
            {
                question: "Which principle is most relevant when designing microservices?",
                options: [
                    "Single Responsibility Principle",
                    "Liskov Substitution Principle",
                    "Open/Closed Principle",
                    "Interface Segregation Principle"
                ],
                answer: "Single Responsibility Principle",
                category: "principles"
            },
            {
                question: "Which design pattern is best for managing object creation when instantiation is expensive?",
                options: ["Factory", "Singleton", "Prototype", "Observer"],
                answer: "Prototype",
                category: "principles"
            },
            {
                question: "How does Interface Segregation Principle affect API design?",
                options: [
                    "APIs should provide small, specific interfaces to avoid forcing clients to implement unused methods",
                    "APIs should be monolithic for simplicity",
                    "APIs should never be versioned",
                    "APIs must use inheritance"
                ],
                answer: "APIs should provide small, specific interfaces to avoid forcing clients to implement unused methods",
                category: "principles"
            },
            {
                question: "What is the main reason to favor composition over inheritance?",
                options: [
                    "Composition increases flexibility and reduces tight coupling",
                    "Inheritance always improves performance",
                    "Inheritance is easier to test",
                    "Composition avoids polymorphism"
                ],
                answer: "Composition increases flexibility and reduces tight coupling",
                category: "principles"
            },
            {
                question: "Which principle helps prevent fragile base class problems?",
                options: [
                    "Liskov Substitution Principle",
                    "Single Responsibility Principle",
                    "Dependency Inversion Principle",
                    "YAGNI"
                ],
                answer: "Liskov Substitution Principle",
                category: "principles"
            },
            {
                question: "What is the main trade-off of following strict SOLID principles?",
                options: [
                    "More classes and abstractions may increase complexity",
                    "Code runs slower",
                    "Memory usage increases drastically",
                    "They eliminate all bugs"
                ],
                answer: "More classes and abstractions may increase complexity",
                category: "principles"
            },
            {
                question: "Which principle ensures that modules or classes can evolve independently without breaking clients?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "KISS",
                    "DRY"
                ],
                answer: "Open/Closed Principle",
                category: "principles"
            },
            {
                question: "What is the primary purpose of the Observer pattern?",
                options: [
                    "Allow objects to be notified of state changes in other objects without tight coupling",
                    "Ensure only one instance exists",
                    "Create objects on demand",
                    "Replace inheritance"
                ],
                answer: "Allow objects to be notified of state changes in other objects without tight coupling",
                category: "principles"
            },
            {
                question: "How does the Principle of Least Knowledge reduce system fragility?",
                options: [
                    "By restricting each module’s knowledge about others to a minimum",
                    "By forcing modules to know all internal structures",
                    "By eliminating the need for interfaces",
                    "By using inheritance extensively"
                ],
                answer: "By restricting each module’s knowledge about others to a minimum",
                category: "principles"
            },
            {
                question: "Which principle is most directly associated with maintainable dependency management in software?",
                options: [
                    "Dependency Inversion Principle",
                    "Open/Closed Principle",
                    "DRY",
                    "Single Responsibility Principle"
                ],
                answer: "Dependency Inversion Principle",
                category: "principles"

            }]
    }
}
export default questionBank;