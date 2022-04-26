class User {
    constructor(model) {
        this.Model = model;
    }

    getAuthUser(ctx) {
        if (ctx.isAuthenticated()) {
            return ctx.getUser();
        }
        return null;
    }

    async signUp(signUpData) {
        if (signUpData.password !== signUpData.passwordConfirmation) {
            throw new Error('Passwords do not match!');
        }
        try {
            return await this.Model.create(signUpData);
        } catch (e) {
            if (e.code && e.code === 11000) {
                throw new Error("User with the provided email already exists!");
            }
            throw e;
        }

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