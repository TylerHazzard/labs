import { useState } from "react"

interface Pets {
    name: string
    type: string
    id: number
}

const ArraysEx = () => {
    const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"])
    const [pets, setPets] = useState<Pets[]>([
        { name: "Rover", type: "Dog", id: 1 },
        { name: "Fluffy", type: "Cat", id: 2 },
        { name: "Thor", type: "Bird", id: 3 }
    ])

    const addColor = (color: string) => {
        setColors(prevColors => [...prevColors, color]);
    }

    const deletePet = (id: number) => {
        setPets(prevPets => prevPets.filter(pet => pet.id !== id));
      };

	return (
        <>
            <div>
      <h2>Colors</h2>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <div>
        <button onClick={() => addColor('Green')}>Add Green</button>
        <button onClick={() => addColor('Blue')}>Add Blue</button>
        <button onClick={() => addColor('Violet')}>Add Violet</button>
      </div>
      
      <h2>Pets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <button onClick={() => deletePet(pet.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
	)
}

export default ArraysEx