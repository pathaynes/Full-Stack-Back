import Component from '../Component.js';
import Header from '../app/Header.js';
import TMNTForm from '../turtles/TMNTForm.js';
import Loading from '../app/Loading.js';
import { getTypes } from '../../services/tmnt-api.js';


class TMNTFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a TMNT Character' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector ('main');

        const loading = new Loading ({ loading: true });
        main.appendChild(loading.renderDOM());

        getTypes()
            .then(types => {
                const tmntForm = new TMNTForm({ types });
                main.appendChild(tmntForm.renderDOM());
            })
            .finally(() => {
                setTimeout(() => {
                    loading.update({ loading: false });
                }, 500);
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

export default TMNTFormApp;