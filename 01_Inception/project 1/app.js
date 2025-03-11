// How HTML going to look like.
/* <div class="card">
    <h2 class="card__title">My Hobbies</h2>
    <ul class="card__content">
        <li>Watching Movies</li>
        <li>Playing Cricket</li>
        <li>Reading Books</li>
    </ul>
</div> */


const rootElement = document.getElementById("root");
const card = React.createElement("div", {class:"card"}, [
    React.createElement("h2", {class: "card__title"}, "My Hobbies"),
    React.createElement("ul", {class: "card__content"}, [
        React.createElement("li", {}, "Watching Movies"),
        React.createElement("li", {}, "Playing Cricket"),
        React.createElement("li", {}, "Reading Books"),
    ])
]);

const root = ReactDOM.createRoot(rootElement);
root.render(card);