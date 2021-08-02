import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Form = () => {
    
    const [person, setPerson] = useState({firstName: '', email: '', age: ''})
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        console.log('click')
        e.preventDefault();
        if(person.firstName && person.age && person.email){
            const newPerson = {...person, id: new Date().getTime().toString()}

            setPeople(newPerson)

            console.log('click 2')
        }

    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]:value})
        console.log(name, value)

    }
   
        return (
            <article style={{width:'300px', margin: '0 auto'}}>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id="email" name="email" value={person.email} onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age : </label>
                        <input type="text" id="age" name="age" value={person.age} onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleSubmit} >Enviar</button>
                </form>

                {console.log(people)}
            </article>
        );
   
}

export default Form;