import React, { Component } from "react";
import Imagecard from "./addImage3.png";
import "./AddProperty.css";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
class AddProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageFile: Imagecard,
      hotelName: "",
      city: "",
      description: "",
      contact: "",
      address: "",
      rating: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("this.state = ", data);
  };
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleImage = (e) => {
    this.setState({
      ImageFile: URL.createObjectURL(e.target.files[0]),
    });
    console.log("imge func = ", e.target.files);
  };
  // handleUpload = () => {};
  render() {
    return (
      <div>
        <div className="propertyCard">
          <div className="firstHeading">
            <h1>Enter your Property Details</h1>
          </div>
          <form>
            <div className="ContainerTwo">
              <div className="addImages">
                <div className="setImage">
                  <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    multiple="true"
                    onChange={this.handleImage}
                  ></input>
                  <div className="label" id="choose">
                    <label htmlFor="input" className="image-upload">
                      <AddPhotoAlternateIcon /> Choose Images
                    </label>
                  </div>
                  <div className="imageDiv">
                    <img src={this.state.ImageFile} className="image"></img>
                  </div>
                </div>
              </div>
              {/* <p>hotel Name = {this.state.hotelName}</p>
            <p>Address = {this.state.address}</p>
            <p>City = {this.state.city}</p>
            <p>Descriptoin = {this.state.description}</p>
            <p>rating = {this.state.rating}</p>
            <p>contct = {this.state.contact}</p> */}

              <div className="addDetails">
                <div className="detailsContainer">
                  <input
                    name="hotelName"
                    placeholder="Hotel Name"
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    onChange={this.handleInputChange}
                  ></input>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={this.handleInputChange}
                  ></input>
                  <textarea
                    id="adjustHeight"
                    name="description"
                    type="text"
                    placeholder="Hotel Description"
                    onChange={this.handleInputChange}
                  ></textarea>
                  <div className="ratingAndContact">
                    <input
                      id="rating"
                      name="rating"
                      type="number"
                      // pattern="\d*"
                      max="5"
                      min="1"
                      placeholder="Rating"
                      onChange={this.handleInputChange}
                    ></input>
                    <input
                      id="contact"
                      name="contact"
                      type="number"
                      // pattern="\d*"
                      min="6000000000"
                      maxLength="9999999999"
                      placeholder="Contact Number"
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
                <div className="facilities">
                  <p>CheckBox 1</p>
                  <p>CheckBox 2</p>

                  <p>CheckBox 3</p>
                </div>
                <div className="submit">
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProperty;
