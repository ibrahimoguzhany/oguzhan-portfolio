
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';

const PortfolioForm = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { handleSubmit, register, setValue } = useForm();

    useEffect(() => {
        register('startDate');
        register('endDate');
    }, [register]);

    const handleStartDate = (date) => {
        setValue('startDate', date.toISOString());
        setStartDate(date);
    };

    const handleEndDate = (date) => {
        setValue('endDate', date.toISOString());
        setEndDate(date);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title")}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title" />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company</label>
                <input
                    {...register("company")}
                    name="company"
                    type="text"
                    className="form-control"
                    id="company" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Location</label>
                <input
                    {...register("location")}
                    name="location"
                    type="text"
                    className="form-control"
                    id="location" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Job Title</label>
                <input
                    {...register("jobTitle")}
                    name="jobTitle"
                    type="text"
                    className="form-control"
                    id="jobTitle" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    name="description"
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="street">Start Date</label>
                <DatePicker showYearDropdown selected={startDate} onChange={handleStartDate} />
            </div>

            <div className="form-group">
                <label htmlFor="street">End Date</label>
                <DatePicker showYearDropdown selected={endDate} onChange={handleEndDate} />
            </div>

            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
        </form>
    );
};

export default PortfolioForm;