
import React from "react";
import { useForm } from 'react-hook-form';

const RegisterForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Avatar</label>
                <input
                    {...register("avatar")}
                    type="text"
                    className="form-control"
                    id="avatar"
                    name="avatar"
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    {...register("username")}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password" />
            </div>
            <div className="form-group">
                <label htmlFor="passwordConfirmation">Password Confirmation</label>
                <input
                    {...register("passwordConfirmation")}
                    type="password"
                    className="form-control"
                    id="passwordConfirmation"
                    name="passwordConfirmation" />
            </div>
            <button
                type="submit"
                className="btn btn-main bg-blue py-2 ttu">Submit</button>
        </form>);
};

export default RegisterForm;