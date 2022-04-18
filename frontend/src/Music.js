import React, { Component} from "react";
import SongModal from "./components/songModal";
import RatingModal from "./components/ratingModal";

import axios from "axios";

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {
            songsList:[],
            ratingsList:[],
            activeSong:{
                id: null,
                song: '',
                artist: '',
            },
            activeRating: {
                id: null,
                username: '',
                song: '',
                rating: '',
            },
            songModal: false,
            ratingModal: false,
            errorFlag: false,
        }
    };

    componentDidMount() {
        this.refreshList();
    };

    refreshList = () => {
        this.setState({errorMessage: null})
        axios
            .get("http://localhost:8000/api/songs/")
            .then((res) => this.setState({songsList: res.data}))
            .catch((err) => console.log(err))

        axios
            .get("http://localhost:8000/api/ratings/")
            .then((res) => this.setState({ratingsList: res.data}))
            .catch((err) => console.log(err))
        console.log('ratings', this.state.ratingsList)
        // console.log(this.state.songsList)
    };
    
    toggleSongModal = () => {
        this.setState({songModal: !this.state.songModal});
    };

    toggleRatingModal = () => {
        this.setState({ratingModal: !this.state.ratingModal});
    };

    handleSubmit = (item, type) => {
        if (type == 'songs') {
            this.toggleSongModal();
        } else {
            this.toggleRatingModal();
            item.username = "test_user"
        }
        item.song_artist = item.song + '_'+item.artist
        // create method 
        if (!item.id) {
            axios
                .post(`http://localhost:8000/api/${type}/`, item)
                .then((res) => this.refreshList())
                .catch((e) => this.setState({errorFlag:true, errorMessage: 'this song and artist combination already exists'}))
            return;
        }
        // update method
        axios 
            .put(`http://localhost:8000/api/${type}/${item.id}/`, item)
            .then((res) => this.refreshList());

    }

    handleDelete = (item, type) => {
        axios
            .delete(`http://localhost:8000/api/${type}/${item.id}/`, item)
            .then((res) => this.refreshList());
    };



    createSong = () => {
        // console.log("new song")
        const item = { song_artist: "", song: "", artist: "", genre: "" };
        this.setState({activeSong: item, songModal: !this.state.songModal})
        if (this.state.ratingModal) {
            this.setState({ratingModal: !this.state.ratingModal})
        }
    };

    editSong = (item) => {
        // console.log(item)
        this.setState({ activeSong: item, songModal: !this.state.songModal });
    };

    editRating = (item) => {
        // console.log(item)
        this.setState({ activeRating: item, ratingModal: !this.state.ratingModal });
        if (this.state.songModal) {
            this.setState({songModal: !this.state.songModal})
        }
    };

    renderSongs = () => {
        var songs = this.state.songsList
        // console.log(songs)
        return songs.map((item,i) => (
            <li
                key={i}
                className=""
            >
                <span
                    className=""
                    title={item.song}
                >
                    {item.song} {item.artist} {item.genre} {item.rating_average}
                </span>
                <span>
                    <button
                        className=""
                        onClick={()=>this.editSong(item)}
                    >
                        edit
                    </button>
                    <button
                        className=""
                        onClick={()=>this.editRating(item)}
                    >
                        rate
                    </button>
                    <button
                        className=""
                        onClick={()=> this.handleDelete(item, 'songs')}
                    >
                        delete
                    </button>
                </span>
            </li>
        ));
    };
    
    render() {
        return(
            <main className="container">
                <h1>song app</h1>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <div className="">
                                <button
                                    className=""
                                    onClick={this.createSong}
                                >
                                    add song
                                </button>
                            </div>
                            {this.state.songModal ? (
                                <SongModal
                                    activeItem = {this.state.activeSong}
                                    toggle = {this.toggleSongModal}
                                    onSave = {this.handleSubmit}
                                />
                            ): null}
                            {this.state.ratingModal ? (
                                <RatingModal
                                    activeItem = {this.state.activeRating}
                                    toggle = {this.toggleRatingModal}
                                    onSave = {this.handleSubmit}
                                />
                            ): null}
                            {this.state.errorFlag ? (
                                <p>{this.state.errorMessage}</p>
                            ): null}
                            {this.renderSongs()}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
};

export default Music;
