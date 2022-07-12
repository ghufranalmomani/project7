import React, { Component } from 'react';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//     name: yup.string().required("This field is required"),
//     email: yup.string().required("This field is required"),
//     // phone: yup.number().email("Invalid Email").min(10, "phone number should be btween 10-14 diget").max(50, "phone number should be btween 10-14 diget").required("This field is required"),
//     // pass:yup.string().yup.min(8, 'The length of pass should be 8 or more').required() ,
//     cpass: yup.string().oneOf([yup.ref("pass"), null]) ,
// });




// function Reg(){
//     const [name,setname]=useState('')
//     const [email,setemail]=useState(null)
//     const [phone,setphone]=useState(null)
//     const [pass,setpass]=useState(null)
//     const[cpass,setcpass]=useState([])


//     const nameHandel = (e)=>{setname(e.target.value)}
//     const emailHandel = (e)=>{setemail(e.target.value)}
//     const phoneHandel = (e)=>{setphone(e.target.value)} 
//     const passHandel = (e)=>{setpass(e.target.value)}
//     const cpassHandel = (e)=>{setcpass(e.target.value)}



// ////////////regex///////////////////
// let letters = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i; ///name
// let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; ///// email
// let pass1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; /// pass contain at least one digit one lower case one upper case 8 lenght

// const { register , handelSubmit, errors}= useForm({
//     resolver: yupResolver(schema),
// });
// const submitForm = (data)=>{};


//     const clickHandel = ()=>{
//         axios.post('http://localhost/project7/seaneighbor/php/insertuser.php?name='+name+'&email='+email+'&phone='+phone+'&pass='+pass)
//         .then((data) => {
            
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }


//     return(
//         <div className="register-photo">
//         <div className="form-container">
//           <div className="image-holder" />
//           <form method="post" onSubmit={ handelSubmit(submitForm)}>
//             <h2 className="text-center"><strong>Create</strong> an account.</h2>
//             <div className="form-group">
//                 <input className="form-control" type="text" name="name" placeholder="Name" onChange={nameHandel} ref={register}/>
//                 <p className='error-text' id='e1'>{errors.name?.message}</p>
//                 </div>
//             <div className="form-group">
//                 <input className="form-control" type="email" name="email" placeholder="Email" onChange={emailHandel} ref={register} />
//                 <p className='error-text' id='e2'>{errors.email?.message}</p>
//                 </div>
//             <div className="form-group">
//                 <input className="form-control" type="number" name="phone" placeholder="phon number" onChange={phoneHandel} ref={register}/>
//                 <p className='error-text' id='e3'>{errors.phone?.message}</p>
//                 </div>
//             <div className="form-group">
//                 <input className="form-control" type="pass" name="pass" placeholder="pass" onChange={passHandel} ref={register}/>
//                 <p className='error-text' id='e4'>{errors.pass?.message}</p>
//                 </div>
//             <div className="form-group">
//                 <input className="form-control" type="pass" name="cpass" placeholder="pass (repeat)" onChange={cpassHandel}  ref={register}/>
//                 <p className='error-text' id='e4'>{errors.cpass?.message}</p>
//                 </div>
//             <div className="form-group">
//               <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />I agree to the license terms.</label></div>
//             </div>
//             <div className="form-group">
//                 <button className="btn btn-primary btn-block" type="submit" onClick={clickHandel}>Sign Up</button>
//                 </div><a href="#" className="already">You already have an account? Login here.</a>
//                 </form>
//         </div>
//       </div>
//     )
// }

// export default Reg;




const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegex= RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)
const phoneRegex= RegExp(
    /^[0-9]*$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = true;

    Object.values(rest).forEach(val => {
        if (val === '') {
            isValid = false
        }
    });

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        }
    });

    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            pass: '',
            phone:'',
            isError: {
                name: '',
                email: '',
                pass: '',
                phone:''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log("form Valid");
            let name=this.state.name
            let email=this.state.email
            let pass=this.state.pass
            let phone=this.state.phone



          axios.post('http://localhost/project7/seaneighbor/php/insertuser.php?name='+name+'&email='+email+'&phone='+phone+'&pass='+pass)

          window.location.href = "/Login";

            
        } else {
            console.log("Form is invalid!");
            
        }
    };



    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "At least 4 characaters required" : "";
                break;

            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;

            case "pass":
                isError.pass = passRegex.test(value)
                    ? "" 
                    : "Minimum eight characters, at least one letter and one number";
                break;

                case "phone":
                  isError.phone  = phoneRegex.test(value) && value.length == 10 
                      ? "" 
                      : "Must be 10 digits";
                  break;
                
            default:
                break;
                
        }


        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
      console.log("hello regester");
        const { isError } = this.state;


        
        return (
            <div className="register-photo " style={{marginTop: '110px'}}>
          <div className="form-container " > 
          <div className="image-holder" />
            <form id='regForm' className="d" onSubmit={this.onSubmit} noValidate>
              <h2 className="text-center">Sign Up</h2>
                <div className="form-group">
                  <div className="form2">
                    <label>Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.pass.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="pass"
                        onChange={this.formValChange}
                    />
                    {isError.pass.length > 0 && (
                        <span className="invalid-feedback">{isError.pass}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="number"
                        className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone"
                        onChange={this.formValChange}
                    />
                    {isError.phone.length > 0 && (
                        <span className="invalid-feedback">{isError.phone}</span>
                        
                    )}
                </div>

                <button type="submit" className="btn btn-block " style={{backgroundColor: '#FDBE33'}} >Sign Up </button> 
                <p id='regP' className='mt-4'>Already have an account? <a href="/Login">Login</a></p>
                
                </div>
                

            </form>
            
            </div>
            </div>
            
           
        );
    }
}