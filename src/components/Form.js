import React, { useState } from 'react';



const Form = () => {

    let [data, setData] = useState({
        name: "",
        address: "",
        email: "",
        mobile: ""
    });

    let[error,setError] = useState({});

    console.log(error)
    

    function handleValues(e){
        let value = e.target.value;
        let name = e.target.name;

        setData({...data,[name] : value})
    }

    // function handleSubmit(e){
    //     e.preventDefault();

    //     let newErrors ={}

    //     let{name,address,email,mobile} = data;
       
    //     const hasLetter = /^[a-zA-Z]+$/.test(name);
    //     const hasAddress = /^[a-zA-Z0-9\s]+$/.test(address);

    //     if(!name || !address || !email || !mobile){
    //         alert("Fill all the fields")
    //         return
    //     }

    //     if(!hasLetter){
    //        newErrors.name = "Name should contain only letters";
         
    //     }

    //     if(!hasAddress){
    //       newErrors.address = "Address should not contain special characters";
    //     }

    //     if(!email.includes('@') || !email.includes('.com')){
    //         newErrors.email = "Email should contain @ and .com";
           
    //     }

    //     if(mobile.length>10){
    //         newErrors.mobile = "Mobile number should not be more than 10 characters";
            
    //     }

    //     if(Object.keys(newErrors).length>0){
    //         setError(newErrors);
    //     }
    //     else {
            
    //         setError({});
    //         alert("Form submitted successfully!");
    //     }

    // }

    function handleSubmit(e) {
        e.preventDefault();
    
        let { name, address, email, mobile } = data;
    
        const hasLetter = /^[a-zA-Z]+$/.test(name);
        const hasAddress = /^[a-zA-Z0-9\s]+$/.test(address);
    
        let newErrors = {}; // Reset errors every time
    
        if (!name) {
            newErrors.name = "Name is required";
        } else if (!hasLetter) {
            newErrors.name = "Name should contain only letters";
        }
    
        if (!address) {
            newErrors.address = "Address is required";
        } else if (!hasAddress) {
            newErrors.address = "Address should not contain special characters";
        }
    
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!email.includes('@') || !email.includes('.com')) {
            newErrors.email = "Email should contain @ and .com";
        }
    
        if (!mobile) {
            newErrors.mobile = "Mobile is required";
        } else if (mobile.length !== 10) {
            newErrors.mobile ='Mobile number should not be more than 10 characters';
        }
    
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
        } else {
            setError({});
            alert("Form submitted successfully!");
        }
    }
    

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br></br>
                <input type="text"
                    name="name"
                    onChange={handleValues}
                ></input>
                <p className="errorMessage">{error.name}</p>
                <br></br>
                <label>Address</label>
                <br></br>
                <input type="text"
                    name="address"
                    onChange={handleValues}></input>
                    <p className="errorMessage">{error.address}</p>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type="text"
                    name="email"
                    onChange={handleValues}></input>
                     <p className="errorMessage">{error.email}</p>
                <br></br>
                <label>Mobile</label>
                <br></br>
                <input type="number"
                    name="mobile"
                    onChange={handleValues}></input>
                     <p className="errorMessage">{error.mobile}</p>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}


export default Form;