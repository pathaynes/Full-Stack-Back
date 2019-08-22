import htmlToDom from './htmlToDOM.js';

class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};
        console.log(`Component "${this.constructor.name}" got props:` + `\n` + JSON.stringify(this.props, true, 2));
    }
    onRender(/*dom*/) {

    }
    rendorDOM() {
        const html = this.renderHTML();
        if(typeof(html) !== 'string') {
            throw new Error(`Component "${this.constructor.name}" needs to return an HTML string from renderHTML`);
        }
        const dom = htmlToDom(html);


        //remember the root element for Replacing/Removing
        this.rootElement = dom;
        //call onRender for callback options
        this.onRender(dom);
        return dom;
    }
    renderHTML() {
        throw new Error(`Component "${this.constructor.name}" needs to implement renderHTML`);
    }
    update(props) {
        props = props || {};
        Object.assign(this.props, props);

        const oldRoot = this.rootElement;

        if(!oldRoot) {
            throw new Error(`"update()" was called on Component "${this.constructor.name}", but no prior render has happened. call ".renderDOM() before using ".update()"`);

        }
        const newDOM = this.renderDOM();
        oldRoot.replaceWith(newDOM);
    }
}
export default Component;