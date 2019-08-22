import Component from '../Component.js';
import Turtle from './turtle.js';

class TMNTlist extends Component {
    
    onRender(dom) {
        const tmnt = this.props.turtle;
        console.log(this.props);
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

export default TMNTlist;