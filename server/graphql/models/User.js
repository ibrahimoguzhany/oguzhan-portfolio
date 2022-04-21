

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
    async signIn(signInData, ctx) {
        try {
            const user = await ctx.authenticate(signInData);
            return user;
        } catch (error) {
            return error;
        }
    }

    signOut(ctx) {
        try {
            // console.log("BEFORE LOGOUT ________");
            // console.log('is authenticated', ctx.isAuthenticated());
            // console.log('User', ctx.getUser());
            ctx.logout();
            // console.log("AFTER LOGOUT ________");
            // console.log('is authenticated', ctx.isAuthenticated());
            // console.log('User', ctx.getUser());
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = User;