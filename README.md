# SayHello

SayHello is a mini library that will help with giving greetings in different languages. It's an easy way to provide your application with a default greeting.

## What does this SayHello do?
- When given a first name, last name, and optionally a language, it generates formal and informal greetings
- It supports next languages
  - English, Spanish, Chinese, German, French, Portuguese, Italian, Russian, Japanese and Greek.
- Reusable (it won't interfere with any of the other Javascript code in your app)
- Easy to type 'SH$()' structure, i.e. kind of JQuery-like
- Supports JQuery, i.e. it returns a greeting wrapped in a JQuery object that points at your desired HTML element, filling that element with the greeting. So for instance, you could pass SayHello a div or a span in your HTML that just just contains text, and it will fill that with the appropiate greeting text.

## Why
This mini-library is inteneded to apply some Javascript core concepts than in providing some advanced functionality.
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

## References
I'd like to thank [Anthony Alicea](https://twitter.com/anthonypalicea) for being such a brillian Udemy instructor. Many of the concepts I applied here, I learnt them from one of his Best Sellers, [Javascript: Understanding the weird parts](https://www.udemy.com/understand-javascript/)


Questions?
----------

If you have any questions, please feel free to ask via email to
[gisjuanklunaster@gmail.com](mailto:gisjuanklunaster@gmail.com?Subject=SayHello%20JS)
