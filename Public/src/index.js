import App from './components/app/app.js';

const root = document.getElementById('root');
const app = new App();

root.prepend(app.renderDOM());