import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeConext from "./ThemeContext";

const SearchParams = () => {
  //all hook uses with "use", default state
  //location = cur state, setLoc = updated state
  //also this is destructuring
  //hooks cannot go into for or if loop as the order are important,
  //if one statement is not called then it would mess up the order of returned value

  const [location, setLocation] = useState("Seattle WA");
  //const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]); //the breeds list
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  //const [breed, setBreed] = useState("");
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeConext);

  console.log("SearchParams");

  async function requestPets() {
    //wait for it to finish, and gives back the data
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    //if nothing returned then use [] instead of animals
    setPets(animals || []);
  }

  //scheduling to run after render happens, after searchparams runs, useeffect runs
  //because it allows user to see something(rendering) and make calls
  useEffect(() => {
    console.log("useEffect");
    //success to console, otherwise to error
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(
      ({ breeds }) => {
        const breedStr = breeds.map(({ name }) => name);
        setBreeds(breedStr);
      },
      (error) => console.error(error)
    );
    //and only if Animal change the API will be made
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            //when changed, onchange fired
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <AnimalDropdown></AnimalDropdown>
        <BreedDropdown></BreedDropdown>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="magenta">Magenta</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
};

/*
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <lable htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            //when changed, onchange fired
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </lable>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onchange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map((breedStr) => (
              <option key={breedStr} value={breedStr}>
                {breedStr}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
*/
export default SearchParams;
