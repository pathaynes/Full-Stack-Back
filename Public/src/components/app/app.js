import Component from '../Component.js';
import Header from './Header.js';
import Halfshell from './halfshell.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const halfshell = new Halfshell({ turtle: [] });
        const main = dom.querySelector('main');
        main.appendChild(halfshell.renderDOM());
    }

    renderHTML() {
        return /*html*/`
        <div>
            <!-- header goes here -->
            <main>
               <p>TURTLE POWER</p>
            </main>
        <div>   
     `;
    }
}

export default App;