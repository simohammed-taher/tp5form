import React, { useState } from "react";

function Form() {
    const [formErrors, setFormErrors] = useState({});

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
        setFormErrors(validate(formState));

        alert(
            `${formState.nom} ${formState.password} ${formState.dateNaissance} ${formState.ville} ${formState.genre} ${formState.loisirs.join(
                ","
            )}`
        );
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.nom) {
            errors.nom = "Username is required!";
        } if (!values.dateNaissance) {
            errors.dateNaissance = "dateNaissance is required!";
        } if (!values.ville) {
            errors.ville = "ville is required!";
        } if (!values.genre) {
            errors.genre = "genre is required!";
        } if (!values.ville) {
            errors.ville = "ville is required!";
        } if (!values.loisirs) {
            errors.loisirs = "loisirs is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };


    return (
        <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify(formState, undefined, 2)}</pre>
            <p>
                <label>Nom</label>
                <input type="text" name="nom" onChange={handleInputChange} />
            </p>
            <p>{formErrors.username}</p>
            <p>
                <label>Mot de passe</label>
                <input type="password" name="password" onChange={handleInputChange} />
            </p>
            <p>{formErrors.password}</p>
            <p>
                <label>Date de naissance</label>
                <input type="date" name="dateNaissance" onChange={handleInputChange} />
            </p>
            <p>{formErrors.dateNaissance}</p>

            <p>
                <label>Ville</label>
                <select name="ville" onChange={handleInputChange}>
                    <option>Choisir une ville</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Tiznit">Tiznit</option>
                </select>
            </p>
            <p>{formErrors.ville}</p>
            <p>
                <label>Genre</label>
                <input type="radio" name="genre" value="Homme" onChange={handleInputChange} />Homme
                <input type="radio" name="genre" value="Femme" onChange={handleInputChange} />Femme
            </p>
            <p>{formErrors.genre}</p>
            <p>
                <label>Loisirs</label>
                <input type="checkbox" name="Loisirs" value="Sport" onChange={(e) => handleLoisirs(e)} />Sport
                <input type="checkbox" name="Loisirs" value="Lecture" onChange={(e) => handleLoisirs(e)} />Lecture
                <input type="checkbox" name="Loisirs" value="Musique" onChange={(e) => handleLoisirs(e)} />Musique
            </p>
            <p>{formErrors.Loisirs}</p>
            <p>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default Form;
