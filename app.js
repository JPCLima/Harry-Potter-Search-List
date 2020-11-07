// Get the element charactersList from html
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

// Add a event when typing
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        const regex = new RegExp(`^${searchString}`, 'gi');
        return character.name.match(regex) || character.house.match(regex);
    });
    displayCharacters(filteredCharacters);
});


// Get all the data from Harry Potter API
const loadCharacters = async () => {
    try {
        const res = await axios.get('https://hp-api.herokuapp.com/api/characters');
        // Store all the data in hpCharacters
        hpCharacters = await res.data;
        // Display all the characters
        displayCharacters(hpCharacters);
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