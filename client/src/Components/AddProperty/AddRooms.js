import React, { Component } from "react";
import Imagecard from "./addImage3.png";
import "./AddRooms.css";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from "axios";

const initialState = {
  availability: 0,
  roomDesc: "",
  numberOfRooms: 0,
  roomImage: Imagecard,
  roomType: "",
  food: "",
  availabilityErr: "",
  roomDescErr: "",
  roomTypeErr: "",
  numberOfRoomsErr: "",
};
export class AddRooms extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }
  handlenumberOfRooms = (e) => {
    this.setState({
      numberOfRooms: e.target.value,
      numberOfRoomsErr: "",
    });
  };
  handleRoomType = (e) => {
    this.setState({
      roomType: e.target.value,
      roomTypeErr: "",
    });
  };
  handleRoomPrice = (e) => {
    this.setState({
      // roomType: e.target.value,
      // roomTypeErr: "",
    });
  };
  handleAvailable = (e) => {
    this.setState({
      availability: e.target.value,
      availabilityErr: "",
    });
  };
  handleRoomDesc = (e) => {
    this.setState({
      roomDesc: e.target.value,
      roomDescErr: "",
    });
  };

  isValidForm = () => {
    let availabilityErr = "";
    let roomDescErr = "";
    let roomTypeErr = "";
    let numberOfRoomsErr = "";
    if (!this.state.availability) {
      availabilityErr = "Enter Total Rooms";
    }
    if (availabilityErr) {
      this.setState({ availabilityErr });
    }
    if (this.state.roomDesc == "") {
      roomDescErr = "Enter Address";
    }
    if (roomDescErr) {
      this.setState({ roomDescErr });
      // return false;
    }
    if (!this.state.numberOfRooms) {
      numberOfRoomsErr = "Enter Total Rooms";
    }
    if (numberOfRoomsErr) {
      this.setState({ numberOfRoomsErr });
    }
    if (!this.state.roomType) {
      roomTypeErr = "Enter Location";
    }
    if (roomTypeErr) {
      this.setState({ roomTypeErr });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.isValidForm();
    if (isValid) {
      const roomData = {
        PropertyId: 22,
        roomType: this.state.roomType,
        roomImage: this.state.roomImage,
        description: this.state.roomDesc,
        numberofRooms: this.state.numberOfRooms,
        availability: this.state.availability,
        _v: 0,
      };
      console.log("this.state = ", roomData);

      axios
        .post("http://localhost:5000/rooms/addRoomType", roomData)
        .then((res) => {
          console.log("Response from room = ", res);
        })
        .catch((error) => {
          console.log("Response from room = ", error);
        });
    }
  };
  handleRoomChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleRoomImage = (e) => {
    this.setState({
      roomImage: URL.createObjectURL(e.target.files[0]),
    });
    console.log("imge func room = ", e.target.files);
  };
  render() {
    return (
      <div>
        <div className="sectionTwo">
          <div className="firstHeading">
            <h1>Room Details</h1>
          </div>
          <div className="roomTypeContainer">
            <div>
              <form>
                <div className="roomDivide">
                  <div className="roomImage">
                    <div className="setroomImage">
                      <input
                        type="file"
                        name="image-uploadRoom"
                        id="inputRoom"
                        accept="image/*"
                        multiple="true"
                        onChange={this.handleRoomImage}
                      ></input>
                      <div className="labelRoom" id="chooseroom">
                        <label htmlFor="inputRoom" className="image-uploadRoom">
                          <AddPhotoAlternateIcon /> Choose Images
                        </label>
                      </div>
                      <div className="imageDivRoom">
                        <img
                          src={this.state.roomImage}
                          className="imageRoom"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="roomDataOne">
                    <div className="roomData">
                      <label for="cars"></label>
                      <select name="roomType">
                        <option value="AC">AC</option>
                        <option value="Non-AC">Non-AC</option>
                        <option value="Delux">Delux</option>
                        <option value="Junior Suit">Junior Suit</option>
                      </select>
                      {/* <input
                        name="roomType"
                        type="text"
                        onChange={this.handleRoomType}
                        placeholder="Room Type"
                        className={`${
                          this.state.roomTypeErr !== "" ? "inputError" : ""
                        }`}
                      ></input> */}
                      <input
                        name="price"
                        type="text"
                        onChange={this.handleRoomPrice}
                        placeholder="RoomPrice"
                        required
                      ></input>
                      <input
                        name="numberOfRooms"
                        type="text"
                        onChange={this.handleAvailable}
                        placeholder="RoomAvailable"
                        className={`${
                          this.state.availabilityErr !== "" ? "inputError" : ""
                        }`}
                      ></input>
                      <input
                        name="numberOfRooms"
                        type="text"
                        onChange={this.handlenumberOfRooms}
                        placeholder="numberOfRooms"
                        className={`${
                          this.state.numberOfRoomsErr !== "" ? "inputError" : ""
                        }`}
                      ></input>
                      <textarea
                        id="adjustHeight"
                        name="roomDesc"
                        type="text"
                        onChange={this.handleRoomDesc}
                        placeholder="RoomDesc"
                        className={`${
                          this.state.roomDescErr !== "" ? "inputError" : ""
                        }`}
                      ></textarea>
                      <input
                        name="food"
                        type="text"
                        onChange={this.handleRoomChange}
                        placeholder="FoodOption"
                      ></input>
                    </div>
                    <div className="submit">
                      <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRooms;
