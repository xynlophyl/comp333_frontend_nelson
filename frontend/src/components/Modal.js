import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
  
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Song</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="song-title">Title</Label>
              <Input
                type="text"
                id="song-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Song Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="song-artist">artist</Label>
              <Input
                type="text"
                id="song-artist"
                name="artist"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter song artist"
              />
            </FormGroup>
            <FormGroup>
              <Label for="song-genre">genre</Label>
              <Input
                type="text"
                id="song-genre"
                name="genre"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter song genre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="song-rating">rating</Label>
              <Input
                type="text"
                id="song-rating"
                name="rating"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter rating"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}