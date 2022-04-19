import React, { Component} from "react";
import LoginModal from "./components/loginModal";

import axios from "axios";


class Login extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            songsList:[],
            ratingsList:[],
            activeInfo:{
                id: null,
                username: '',
                password: '',
                passwordConfirm: '',
            },
            loginModal: false,
        }
    };

    handleSubmit = (item) => {
        // create method 
        axios
            .post(`http://localhost:8000/api/'users'/`, item)
            .then((res) => this.refreshList())
            .catch((e) => this.setState({errorFlag:true, errorMessage: 'user does not exist'}))
        return;

    }

    toggleModal = () => {
        this.setState({loginModal: !this.state.loginModal});
    };

    render() {
        return(
            <main>
                <div className="card">
                    <LoginModal
                        activeItem = {this.state.activeInfo}
                        toggle = {this.toggleModal}
                        onSave = {this.handleSubmit}
                    />
                </div>
            </main>
        );
    }
}

export default Login;