
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();


const data = {
    users: [
        {
            _id: user1Id,
            avatar: "https://gravatar.com/avatar/749d54309560f05b6f754bb45eed9e77?s=400&d=robohash&r=x",
            email: "oguzhan@gmail.com",
            name: "Oguzhan Yilmaz",
            username: "forthecode",
            info: "Hello im oguzhan and i am a developer",
            password: "123456",
            role: "admin"
        },
        {
            _id: user2Id,
            avatar: "https://gravatar.com/avatar/749d54309560f05b6f754bb45eed9e77?s=400&d=robohash&r=x",
            email: "test@gmail.com",
            name: "Test",
            username: "Test",
            info: "Hello im Test and i am a developer",
            password: "testtest"
        },

    ],
    portfolios: [
        {
            title: 'Job in Netcentric',
            company: 'Netcentric',
            companyWebsite: 'www.google.com',
            location: 'Spain, Barcelona',
            jobTitle: 'Engineer',
            description: 'Doing something, programing....',
            startDate: '01/01/2014',
            endDate: '01/01/2016',
            user: user1Id
        },
        {
            title: 'Job in Siemens',
            company: 'Siemens',
            companyWebsite: 'www.google.com',
            location: 'Slovakia, Kosice',
            jobTitle: 'Software Engineer',
            description: 'Responsoble for parsing framework for JSON medical data.',
            startDate: '01/01/2011',
            endDate: '01/01/2013',
            user: user1Id
        },
        {
            title: 'Job in Netcentric',
            company: 'Netcentric',
            companyWebsite: 'www.google.com',
            location: 'Spain, Barcelona',
            jobTitle: 'Engineer',
            description: 'Doing something, programing....',
            startDate: '01/01/2014',
            endDate: '01/01/2016',
            user: user1Id
        }
    ]
};

module.exports = data;