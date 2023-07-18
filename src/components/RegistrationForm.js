import { useState } from "react";
const RegistrationForm = ()=>{
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
    const [password,setPassword] = useState({
        isTouched: false,
        value:''
    });
    const isFormValid = ()=>{
        return (firstname && email && password.value.length>6 && role !=='role');
    }
    const clearForm = ()=>{
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword({value:'', isTouched:false});
        setRole("role");
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Account created!");
        clearForm();
    }
    return(
    <div className="wrapper">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="firstname">
                    <label for="firstname">First Name</label>
                    <input name="firstname" id="firstname" type="text" placeholder="Type your first name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                </div>
                <div className="lastname">
                    <label for="lastname">Last Name</label>
                    <input name="lastname" id="lastname" type="text" placeholder="Type your last name" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                </div>
                <div className="email">
                    <label for="email">Email</label>
                    <input name="email" id="email" type="email" placeholder="Type your first name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <label for="password">Password</label>
                    <input name="password" id="password" type="password" placeholder="Type your Password" value={password.value} onChange={(e)=>setPassword({...password,value: e.target.value})}/>
                </div>
                <div>
                    <label for="role">Role</label>
                    <select value={role} onChange = {(e)=> setRole(e.target.value)}>
                        <option value="role">Select Role</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="Button">
                    <button type="submit" disabled= {!isFormValid()}>Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;