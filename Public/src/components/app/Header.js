import Component from '../Component.js';

class Header extends Component {

    renderHTML() {
        return /*html*/`
            <header>
            <div id="upper-face">
           </div> 
           <div id="mask">
                <div id="left-eye"></div>
                <div id="right-eye"></div>
           </div>
           <div id="lower-face">
           <nav>
             <a href="./">Home</a>
             <a href="./tmnt-list.html">Turtles</a>
             <a href="./tmnt-form.html">New Turtles</a>
          </nav>
           </div>
           </header>
        `;
    }
}

export default Header;