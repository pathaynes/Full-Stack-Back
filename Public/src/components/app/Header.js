import Component from '../Component.js';

class Header extends Component {

    renderHTML() {
        return /*html*/`
            <header>
             <h1> TURTLE TIME </h1>
               <nav>
                 <a href="./">Home</a>
                 <a href="./tmnt-list.html">Turtles</a>
                 <a href="./tmnt-form.html">New Turtles</a>
              <nav>
            </header>
        `;
    }
}

export default Header;