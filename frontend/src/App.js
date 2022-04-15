import React, { Component } from "react";
import Modal from "./components/Modal";
import RatingModal from "./components/ratingModal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        ratingsList:[],
        activeItem:{
          id: null,
          title: '',
          artist: '',
          genre: '',
          rating: '',
        },
        modal: false,
        ratingModal: false,
      }
  };  

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/ratings/")
      .then((res) => this.setState({ ratingsList: res.data }))
      .catch((err) => console.log(err));
  };

  toggleSong = () => {
    // We have a modal view below in the render() function.
    // Upon toggle, set the modal to false, i.e., do not show the modal.
    this.setState({ modal: !this.state.modal });
  };

  toggleRating = () => {
    this.setState({ratingModal: !this.state.ratingModal })
  };

  handleSubmit = (item) => {
    if (item.id) {
      this.toggleRating();
      console.log("song rating already exists")
      console.log(item)
      axios
        .put(`http://localhost:8000/api/ratings/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    this.toggleSong();
    console.log('new song')
    axios
      .post("http://localhost:8000/api/songs/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item, id) => {
    console.log("DELETING", item)
    axios
      .delete(`http://localhost:8000/api/ratings/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", artist: "", genre: "" };
    if (this.state.ratingModal) {
      this.toggleRating();
    }
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    console.log(item)
    if (this.state.modal) {
      this.toggleSong();
    }
    this.setState({ activeItem: item, ratingModal: !this.state.ratingModal });
  };

  renderSongs = () => {
    var songs = this.state.ratingsList
    return songs.map((item, idx) => (
      <li
        key={idx}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2`}
          title={item.song}
        >
          {item.song} {item.rating}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  }

  render() {
    return (
      <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Song app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={this.createItem}
              >
                Add rating
              </button>
            </div>
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggleSong}
                onSave={this.handleSubmit}
              />
            ) : null}
            {this.state.ratingModal ? (
              <RatingModal
                activeItem={this.state.activeItem}
                toggle={this.toggleRating}
                onSave={this.handleSubmit}
              />
            ) : null}

            {this.renderSongs()}
          </div>
        </div>
      </div>
    </main>
    )
  }
}

export default App;
