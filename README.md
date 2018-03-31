# SayHello JS

SayHello is a mini library that will help with giving greetings in different languages. It's an easy way to provide your application with a default greeting.

## What does this SayHello do?
- When given a first name, last name, and optionally a language, it generates formal and informal greetings
- It supports next languages
  - English, Spanish, Chinese, German, French, Portuguese, Italian, Russian, Japanese and Greek.
- Reusable (it won't interfere with any of the other Javascript code in your app)
- Easy to type 'SH$()' structure, i.e. kind of JQuery-like
- Supports JQuery, i.e. it returns a greeting wrapped in a JQuery object that points at your desired HTML element, filling that element with the greeting. So for instance, you could pass SayHello a div or a span in your HTML that just contains text, and it will fill that with the appropiate greeting text.

## Why
This mini-library is inteneded to apply some Javascript core concepts instead of providing some advanced functionality.
Next, the Javascript core concepts I seeked to apply by the implementation of this mini-library:
- Execution Contexts and Lexical environments
- Hoisting
- Scope chain
- Faking Namespacing
- Immediately Invoked Functional Expressions (IIFE)s
- Closures and Callbacks
- Functional programming
- Reflection and Extend
- Prototypal inheritance

## How it works?
All you need to import into your project is SayHello.js (inside src/). Source Folder contains an example in src/index.html. On the other hand, app.js contains two examples of how this library can be used.

It's so simple of using as the two following lines:
```
// create a 'SayHello' object
// by passing the firstName, lastName and (optionally) the two-letter iso language code
var sayHello = SH$('John', 'Doe', 'fr');

// invoke HTMLGreeting passing a jQuery selector and (optionally) a true flag for setting a formal greeting.
// the function will take care of injecting the message in the chosen place in the DOM
sayHello.setLanguage('es').HTMLGreeting('#greeting', true)
```

## References
I'd like to thank [Anthony Alicea](https://twitter.com/anthonypalicea) for being such a brillian Udemy instructor. Many of the concepts I applied here, I learnt them from one of his Best Sellers, [Javascript: Understanding the weird parts](https://www.udemy.com/understand-javascript/)


Questions?
----------

If you have any questions, please feel free to ask via email to
[gisjuanklunaster@gmail.com](mailto:gisjuanklunaster@gmail.com?Subject=SayHello%20JS)
