// Script de validation des formulaires d'authentification

document.addEventListener('DOMContentLoaded', function() {
    // Valider le formulaire de connexion
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Valider l'email
            const emailInput = document.getElementById('email');
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, 'Veuillez entrer une adresse email valide');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            // Valider le mot de passe
            const passwordInput = document.getElementById('password');
            if (passwordInput.value.length < 6) {
                showError(passwordInput, 'Le mot de passe doit contenir au moins 6 caractères');
                isValid = false;
            } else {
                removeError(passwordInput);
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Valider le formulaire d'inscription
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Valider le nom
            const nomInput = document.getElementById('nom');
            if (nomInput.value.trim() === '') {
                showError(nomInput, 'Le nom est requis');
                isValid = false;
            } else {
                removeError(nomInput);
            }
            
            // Valider le prénom
            const prenomInput = document.getElementById('prenom');
            if (prenomInput.value.trim() === '') {
                showError(prenomInput, 'Le prénom est requis');
                isValid = false;
            } else {
                removeError(prenomInput);
            }
            
            // Valider l'email
            const emailInput = document.getElementById('email');
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, 'Veuillez entrer une adresse email valide');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            // Valider le téléphone
            const telephoneInput = document.getElementById('telephone');
            if (!validatePhone(telephoneInput.value)) {
                showError(telephoneInput, 'Veuillez entrer un numéro de téléphone valide');
                isValid = false;
            } else {
                removeError(telephoneInput);
            }
            
            // Valider le mot de passe
            const passwordInput = document.getElementById('password');
            if (passwordInput.value.length < 6) {
                showError(passwordInput, 'Le mot de passe doit contenir au moins 6 caractères');
                isValid = false;
            } else {
                removeError(passwordInput);
            }
            
            // Valider la confirmation du mot de passe
            const passwordConfirmInput = document.getElementById('password_confirm');
            if (passwordConfirmInput.value !== passwordInput.value) {
                showError(passwordConfirmInput, 'Les mots de passe ne correspondent pas');
                isValid = false;
            } else {
                removeError(passwordConfirmInput);
            }
            
            // Valider le type de compte
            const typeCompteInput = document.getElementById('type_compte');
            if (typeCompteInput.value === '') {
                showError(typeCompteInput, 'Veuillez sélectionner un type de compte');
                isValid = false;
            } else {
                removeError(typeCompteInput);
            }
            
            // Valider les conditions
            const termsInput = document.getElementById('terms');
            if (!termsInput.checked) {
                showError(termsInput, 'Vous devez accepter les conditions d\'utilisation');
                isValid = false;
            } else {
                removeError(termsInput);
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Fonctions utilitaires
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePhone(phone) {
        // Accepte les formats marocains: +212xxxxxxxxx ou 0xxxxxxxxx
        const re = /^(?:\+212|0)\d{9}$/;
        return re.test(String(phone).trim());
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        
        // Vérifier