const URL = '/api';

export function getTurtles() {

    const url = `${URL}/turtles`;

    return fetch(url)
        .then(response => response.json());
}

export function getCharacter(id) {
    const url = `${URL}/turtles/${id}`;
    return fetch(url)
        .then(response => response.json());
} 

export function addCharacter(character) {
    const url = `${URL}/turtles`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify(character)
    })
        .then(response => response.json());
}

export function getTypes() {
    const url = `${URL}/types`;
    return fetch(url)
        .then(response => response.json());
}