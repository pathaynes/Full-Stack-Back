import Component from '../Component.js';

class Turtle extends Component {

    renderHTML() {
        const tmnt = this.props.turtle;
        return /*html*/`
    <li>
       <a href="details.html?id=${tmnt.id}">
            <h2>${tmnt.name}</h2>
            <img class="character-img" src="${tmnt.url}">
        <div>
            <h3>Attributes:</h3>
            <p>Weapon:${tmnt.weapon}</p>
            <p>Animal:${tmnt.animaltype}</p>
        </div>
    </li>
        `;
    }
}

export default Turtle;