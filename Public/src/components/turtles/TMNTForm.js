import Component from '../Component.js';
import { addCharacter } from '../../services/tmnt-api.js';

class TMNTForm extends Component {
    
    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const character = {
                name: formData.get('name'),
                hero: formData.get('is-hero') === 'on',
                animaltype: +formData.get('animal-type-id'),
                weapon: formData.get('weapon-id'),
                url: formData.get('url'),
            };


            addCharacter(character)
                .then((/*saved*/) => {
                    // window.location = `tmnt-list.html`;
                })
                .catch(err => {
                    console.log('character not saved :(', err);
                });
        });
    }

    renderHTML() {
        const types = this.props.types;
        const optionsList = types.map(type => {
            return /*html*/`
                <option value="${type.id}"> ${type.name}</option>
            `;
        });

        return /*html*/`
        <form class="turtle-form">
            <p>
                <label for="name">Name </label>
                <input id="name" name="name" required placeholder="tmnt character">
            </p>
            <p>
                <fieldset for="is-hero">
                    <legend>Is a Hero?</legend>
                    <label class="horizontally-centered">
                        <input id="is-hero" name="is-hero" type="checkbox"> Yes
                    </label>
                </fieldset>
            </p>
            <p>
                <label for="animal-type">Animal-Type </label>
                <select id="animal-type" name="animal-type-id" required>
                    <option disabled selected>&lt:select a animal type&gt</option>
                    ${optionsList.join('')}
                </select>
            </p>
            <p>
                <label for="weapon">Weapon-Type </label>
                <input id="weapon" name="weapon-id">
            </p>
            <p>
                <label for="url">Image Url </label>
                <input id="url" name="url" required placeholder="http://turtle.jpg">
            </p>
            <p>
                <button>Add This Character</button>
            </p>
        </form>
        `;
    }
}

export default TMNTForm;