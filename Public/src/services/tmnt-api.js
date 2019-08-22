const URL = '/api';

export function getTurtles() {

    const url = `${URL}/turtles`;

    return fetch(url)
        .then(response => response.json());
}