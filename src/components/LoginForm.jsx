import React from 'react';

function LoginForm() {

    const handleFormSignInSubmit = (e) => {
        e.preventDefault();
        const jsonDataSignIn = Object.fromEntries(new FormData(e.target));
        alert("Vous êtes enregistré !");
        console.log(jsonDataSignIn);
        document.getElementById("form1").reset(); // Permet de réinitialiser les input
    }

    return (
        <form id="form1" onSubmit={handleFormSignInSubmit}  className="form-example w-50 text-center">
            <div className="form-example d-flex flex-column w-50">
                <label htmlFor="email">Adresse email </label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="form-example d-flex flex-column w-50">
                <label htmlFor="password">Mot de passe </label>
                <input type="password" name="password" id="password" required />
            </div>
            <div className="form-example mt-2 d-flex flex-column w-50">
                <input type="submit" value="Envoyer" />
            </div>
        </form>
    );
}

export default LoginForm;