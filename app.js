// Get the element charactersList from html
const charactersList = document.getElementById('charactersList');


let hpCharacters = [];


// Get all the data from Harry Potter API
const loadCharacters = async () => {
    try {
        const res = await axios.get('https://hp-api.herokuapp.com/api/characters');
        displayCharacters(res.data);
    } catch (err) {
        console.error(err);
    }
};


// Function returs a card for the HP character
const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <div class="character-data">
                    <h2>${character.name}</h2>
                    <p>House: ${character.house}</p>                    
                </div>               
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

// Load Characters
loadCharacters();