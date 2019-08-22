import Component from '../Component.js';
import Turtle from '../app/turtle.js';

class Halfshell extends Component {
    
    onRender(dom) {
        const tmnt = this.props.tmnt;
        console.log(tmnt);
        tmnt.forEach(tmnt => {
            const props = { turtle: tmnt };
            const turtleItem = new Turtle(props);
            const turtleDOM = turtleItem.renderDOM();
            dom.appendChild(turtleDOM);
            
        });
    }


    renderHTML() {
        return /*html*/`
    <ul class="turtles"></ul>
        `;
    }
}

export default Halfshell;