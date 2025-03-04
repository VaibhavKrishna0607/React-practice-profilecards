import React from 'react';
import Profiledetails from './components/profile.jsx'; 
import './app.css';

const profilesData = [
    { name: "Jon", age: 18, number: 7, language: "Java" },
    { name: "Robb", age: 25, number: 10, language: "Python" },
    { name: "Tywin", age: 22, number: 15, language: "JavaScript" }
    
];

const ProfilesList = () => {
    return (
        <div className="profiles-container">
            {profilesData.map((profile, index) => (
                <Profiledetails
                    key={index}
                    name={profile.name}
                    age={profile.age}
                    number={profile.number}
                    language={profile.language}
                />
            ))}
        </div>
    );
};

export default ProfilesList;
