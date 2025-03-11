# Inception 🤞🤞

This is the first chapter of our React learning journey. In this chapter, I learned what React is, why it is useful, and how to create a simple Hello World program using React. To compare different methods, we built two sample projects: one using only HTML and another using only JavaScript.

## Key Learnings

- In the end, React is just JavaScript.
- Changing parts of the DOM tree is one of the most costly operations, and React was made to make this task efficient.
- The render method in ReactDOM converts objects into HTML elements.

## Assignments

- [Make a basic Hello World project using HTML](./projectUsingHTML.html)
- [Make a basic Hello World project using JavaScript](./projectUsingJavaScript.html)
- [Make a basic Hello World project using React](./projectUsingReact.html)

## Project
- [A Simple Project Using React](./project%201/)

    * Created Using React.createElement Method.
    * Used CSS with React

## Questions

* What is `Emmet?`

    `Emmet` is a tool that helps you write HTML and CSS code faster. It lets you type short abbreviations that automatically expand into full code. For example, if you type `div.container` and press Tab, it becomes:

    ```html
    <div class="container"></div>
    ```

    `Emmet` works in many popular code editors like VS Code, Sublime Text, and Atom.

* What is `CDN?`
    A `CDN (Content Delivery Network)` is a group of servers around the world that store copies of files like images, CSS, JavaScript, and videos. This helps your website load faster because the files come from a server that is closer to the user.

    For example, instead of hosting Bootstrap on your own server, you can use a CDN:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    ```

* What is `Cross-Origin?`

    `Cross-origin` means getting files or data from a different website than the one you are on. Web browsers have rules that stop websites from taking data from other sites without permission. These rules help keep your data safe.

* What is the Difference Between `react.development.js` and `react.production.js` via CDN?

    * `react.development.js`
        * Use this file while you are building your app.
        * It shows extra warnings and messages to help you fix mistakes.
        * It is larger in size because it has extra checks.

    Example:

    ```html
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    ```

    * `react.production.js`

        * Use this file when your app is live for users.
        * It is smaller and faster because it does not include extra warnings.

    Example:

    ```html
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    ```

* What is the Difference Between `React` and `ReactDOM`?

    * `React` is the main tool for building parts of a web page. It helps you create small pieces (components) that you can reuse to build your user interface.

    * `ReactDOM` connects React to the web page. It makes sure the React components are shown as HTML elements in the browser.

*  What is the Difference Between a `Library` and a `Framework`?

    * Library:

        * A library is a collection of code that helps you perform specific tasks.
        * You call the library’s functions when you need them.
        * For example, React is a library that helps you build user interfaces.

    * Framework:

        * A framework is a full set of tools and rules that helps you build an entire application.
        * The framework controls the flow of your app, and you work within its structure.
        * For example, Angular is a framework that helps you build full web applications.