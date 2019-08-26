// import Component from '../Component.js';
// import Header from './Header.js';
// import Loading from './Loading.js';
// import QUERY from '../../services/QUERY.js';
// import { getCharacter } from '../../services/tmnt-api.js';

// class DetailApp extends Component {
    
//     onRender(dom) {
//         const header = new Header();
//         dom.prepend(header.renderDOM());

//         const main = dom.querySelector('#details');
//         console.log(main);

//         const loading = new Loading({ loading: true });
//         main.appendChild(loading.renderDOM());
//         const params = QUERY.parse(window.location.search);
//         const id = params.id;

//         // if(!id) {
//         //     window.location = 'tmnt-list.html';
//         //     return;
//         // }

//         getCharacter(id)
//             .then(character => {
//                 console.log(character);
//             })
//             .finally(() => {
//                 setTimeout (() => {
//                     loading.update({ loading: false });
//                 }, 500);
//             });
//     }

//     renderHTML() {
//         return /*html*/`
//         <div>
//         <main id="details">
//         </main>
//         </div>
//         `;
//     }
// }

// export default DetailApp;