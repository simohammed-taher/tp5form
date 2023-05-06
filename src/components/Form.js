import React, { useState } from "react";

function Form() {
    const [formState, setFormState] = useState({
        nom: "",
        password: "",
        dateNaissance: "",
        ville: "",
        genre: "",
        loisirs: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleLoisirs = (e) => {
        const { value } = e.target;
        if (!formState.loisirs.includes(value)) {
            setFormState({ ...formState, loisirs: [...formState.loisirs, value] });
        } else {
            setFormState({ ...formState, loisirs: formState.loisirs.filter((item) => item !== value) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `${formState.nom} ${formState.password} ${formState.dateNaissance} ${formState.ville} ${formState.genre} ${formState.loisirs.join(
                ","
            )}`
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify(formState, undefined, 2)}</pre>
            <p>
                <label>Nom</label>
                <input type="text" name="nom" onChange={handleInputChange} />
            </p>
            <p>
                <label>Mot de passe</label>
                <input type="password" name="password" onChange={handleInputChange} />
            </p>
            <p>
                <label>Date de naissance</label>
                <input type="date" name="dateNaissance" onChange={handleInputChange} />
            </p>
            <p>
                <label>Ville</label>
                <select name="ville" onChange={handleInputChange}>
                    <option>Choisir une ville</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Tiznit">Tiznit</option>
                </select>
            </p>
            <p>
                <label>Genre</label>
                <input type="radio" name="genre" value="Homme" onChange={handleInputChange} />Homme
                <input type="radio" name="genre" value="Femme" onChange={handleInputChange} />Femme
            </p>
            <p>
                <label>Loisirs</label>
                <input type="checkbox" name="Loisirs" value="Sport" onChange={(e) => handleLoisirs(e)} />Sport
                <input type="checkbox" name="Loisirs" value="Lecture" onChange={(e) => handleLoisirs(e)} />Lecture
                <input type="checkbox" name="Loisirs" value="Musique" onChange={(e) => handleLoisirs(e)} />Musique
            </p>
            <p>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default Form;
