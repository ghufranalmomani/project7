import React, { Component } from 'react'

class Messege extends Component {
    state = 
    { 
        'smessage': sessionStorage.getItem('smessage'),  
        'message': sessionStorage.getItem('message'),  
    } 
    
    render() { 
        console.log(this.state.message, 'message');
        if (this.state.message != '' || this.state.smessage !== '') {
            setTimeout(() => {
                sessionStorage.setItem('message', '');
                sessionStorage.setItem('smessage', '');
                this.setState({'message': ''});
                this.setState({'smessage': ''});
            }, 2500);
          
        return (
            <>
                <div className={`alert alert-danger container ${this.state.message === '' || this.state.message === null? '' : 'd-flex'} justify-content-center`} style={{display: this.state.message === '' || this.state.message === null? 'none' : 'block'}}>
                    {this.state.message}
                </div>
                <div className={`alert alert-success container ${this.state.smessage === '' || this.state.smessage === null? '' : 'd-flex'} justify-content-center`} style={{display: this.state.smessage === '' || this.state.smessage === null? 'none' : 'block'}}>
                    {this.state.smessage}
                </div>
            </>
        );}
    }
}
 
export default Messege;