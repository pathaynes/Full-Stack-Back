import Component from '../Component.js';

class Turtle extends Component {

    renderHTML() {
        const tmnt = this.props.tmnt;
        return /*html*/`
    <li>
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