import "../App.css"
import Button from './button';

const Profiledetails = ({ name, age, number, language }) =>{
    

    return(
        <>
        <div className="profiles">
            <h1>Name: {name}</h1>
            <h2>Number: {number}</h2>
            <h2>Age: {age}</h2>
            <h3>Language: {language}</h3>
            <Button/>
        </div>
            
        </>
    )
}

export default Profiledetails;