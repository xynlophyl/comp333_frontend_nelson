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
            },
        }
    };

    handleSubmit = (item) => {

        item.song_artist = item.song + '_'+item.artist
        // create method 
        axios
            .get(`http://localhost:8000/api/users/`, item)
            .then((res) => this.refreshList())
            .catch((e) => this.setState({errorFlag:true, errorMessage: 'User Does Not Exist'}))
        return;

    }


    render() {
        return(
            <main>
                <LoginModal
                    activeItem = {this.state.activeInfo}
                    onSave = {this.handleSubmit}
                />
            </main>
        );
    }
}

export default Login;