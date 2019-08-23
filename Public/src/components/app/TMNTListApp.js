import Component from '../Component.js';
import Header from './Header.js';
import TMNTlist from '../turtles/TMNT-list.js';
import { getTurtles } from '../../services/tmnt-api.js';


class TMNTListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Characters' });
        dom.prepend(header.renderDOM());

        const list = new TMNTlist({ turtles: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getTurtles().then(turtles => {
            list.update({ turtles });
        });
    }
    renderHTML() {
        return /*html*/`
            <div>
            <main>
            </main>
            </div>
        `;
    }
}

export default TMNTListApp;