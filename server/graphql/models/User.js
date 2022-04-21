

class User {
    constructor(model) {
        this.Model = model;
    }
    signUp(signUpData) {
        if (signUpData.password !== signUpData.passwordConfirmation) {
            throw new Error('Passwords do not match!');
        }
        return this.Model.create(signUpData);
    }
    signIn(signInData, ctx) {
        const isAuthenticated = ctx.authenticate(signInData);
        if (isAuthenticated) {
            console.log('User is Authenticated');
        }
        return `Signing In Output!`;
    }

    signOut() {
        return "Signing Out...";
    }
}

module.exports = User;