// import React, { Component } from "react";
// import Imagecard from "./addImage3.png";
// import "./AddRooms.css";
// import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
// import axios from "axios";
// import AddRooms from "./AddRooms";

// const initialState = {
//   availability: 0,
//   roomDesc: "",
//   numberOfRooms: 0,
//   roomImage: Imagecard,
//   roomType: "",
//   food: "",
//   availabilityErr: "",
//   roomDescErr: "",
//   roomTypeErr: "",
//   numberOfRoomsErr: "",
//   url11: "",
//   url12: "",
//   url13: "",
//   url14: "",
//   addNew: true,
// };
// export class AddNewRoom2 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = initialState;
//   }
//   handlenumberOfRooms = (e) => {
//     this.setState({
//       numberOfRooms: e.target.value,
//       numberOfRoomsErr: "",
//     });
//   };
//   handleRoomType = (e) => {
//     this.setState({
//       roomType: e.target.value,
//       roomTypeErr: "",
//     });
//   };
//   handleRoomPrice = (e) => {
//     this.setState({});
//   };
//   handleAvailable = (e) => {
//     this.setState({
//       availability: e.target.value,
//       availabilityErr: "",
//     });
//   };
//   handleRoomDesc = (e) => {
//     this.setState({
//       roomDesc: e.target.value,
//       roomDescErr: "",
//     });
//   };

//   isValidForm = () => {
//     let availabilityErr = "";
//     let roomDescErr = "";
//     let roomTypeErr = "";
//     let numberOfRoomsErr = "";
//     if (!this.state.availability) {
//       availabilityErr = "Enter Total Rooms";
//     }
//     if (availabilityErr) {
//       this.setState({ availabilityErr });
//     }
//     if (this.state.roomDesc == "") {
//       roomDescErr = "Enter Address";
//     }
//     if (roomDescErr) {
//       this.setState({ roomDescErr });
//     }
//     if (!this.state.numberOfRooms) {
//       numberOfRoomsErr = "Enter Total Rooms";
//     }
//     if (numberOfRoomsErr) {
//       this.setState({ numberOfRoomsErr });
//     }
//     if (!this.state.roomType) {
//       roomTypeErr = "Enter Location";
//     }
//     if (roomTypeErr) {
//       this.setState({ roomTypeErr });
//       return false;
//     }
//     return true;
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const isValid = this.isValidForm();
//     if (isValid) {
//       const roomData = {
//         PropertyId: 22,
//         roomType: this.state.roomType,
//         roomImage: this.state.roomImage,
//         description: this.state.roomDesc,
//         numberofRooms: this.state.numberOfRooms,
//         availability: this.state.availability,
//         _v: 0,
//       };
//       console.log("this.state = ", roomData);

//       axios
//         .post("http://localhost:5000/rooms/addRoomType", roomData)
//         .then((res) => {
//           console.log("Response from room = ", res);
//         })
//         .catch((error) => {
//           console.log("Response from room = ", error);
//         });
//     }
//   };
//   handleRoomChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleRoomImage = (e) => {
//     this.setState({
//       roomImage: URL.createObjectURL(e.target.files[0]),
//     });
//     console.log("imge func room = ", e.target.files);
//   };
//   handleUrl11 = (e) => {
//     this.setState({
//       url11: e.target.value,
//     });
//   };
//   handleUrl12 = (e) => {
//     this.setState({
//       url12: e.target.value,
//     });
//   };
//   handleUrl13 = (e) => {
//     this.setState({
//       url13: e.target.value,
//     });
//   };
//   handleUrl14 = (e) => {
//     this.setState({
//       url4: e.target.value,
//     });
//   };
//   handleAddNewRoom = (e) => {
//     this.setState({
//       addNew: !this.state.addNew,
//     });
//     console.log("addnew = ", this.state.addNew);
//   };
//   render() {
//     return (
//       <div>
//         <div className="sectionTwo">
//           <div className="firstHeading">
//             <h1>Room Details</h1>
//           </div>
//           <div className="roomTypeContainer">
//             <div>
//               <form>
//                 <div className="roomDivide">
//                   <div className="roomImage">
//                     <div className="setroomImage">
//                       <div className="insideAddImagesRoom">
//                         <div className="imageHeightRoom">
//                           <input
//                             type="url"
//                             name="url11"
//                             placeholder="Add Image URL"
//                             value={this.state.url11}
//                             onChange={this.handleUrl11}
//                           ></input>
//                           <div className="imageDivRoom">
//                             <img src={this.state.url11}></img>
//                           </div>
//                         </div>
//                         <div className="imageHeightRoom">
//                           <input
//                             type="url"
//                             name="url12"
//                             value={this.state.url12}
//                             placeholder="Add Image URL"
//                             onChange={this.handleUrl12}
//                           ></input>
//                           <div className="imageDivRoom">
//                             <img src={this.state.url12}></img>
//                           </div>
//                         </div>
//                         <div className="imageHeightRoom">
//                           <input
//                             type="url"
//                             name="url13"
//                             value={this.state.url13}
//                             placeholder="Add Image URL"
//                             onChange={this.handleUrl13}
//                           ></input>
//                           <div className="imageDivRoom">
//                             <img src={this.state.url13}></img>
//                           </div>
//                         </div>
//                         <div className="imageHeightRoom">
//                           <input
//                             type="url"
//                             name="url14"
//                             value={this.state.url14}
//                             placeholder="Add Image URL"
//                             onChange={this.handleUrl14}
//                           ></input>
//                           <div className="imageDivRoom">
//                             <img src={this.state.url14}></img>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="roomDataOne">
//                     <div className="roomData">
//                       <label for="cars"></label>
//                       <select name="roomType">
//                         <option value="AC">AC</option>
//                         <option value="Non-AC">Non-AC</option>
//                         <option value="Delux">Delux</option>
//                         <option value="Junior Suit">Junior Suit</option>
//                       </select>

//                       <input
//                         name="price"
//                         type="text"
//                         onChange={this.handleRoomPrice}
//                         placeholder="RoomPrice"
//                         required
//                       ></input>
//                       <input
//                         name="numberOfRooms"
//                         type="text"
//                         onChange={this.handleAvailable}
//                         placeholder="RoomAvailable"
//                         className={`${
//                           this.state.availabilityErr !== "" ? "inputError" : ""
//                         }`}
//                       ></input>
//                       <input
//                         name="numberOfRooms"
//                         type="text"
//                         onChange={this.handlenumberOfRooms}
//                         placeholder="numberOfRooms"
//                         className={`${
//                           this.state.numberOfRoomsErr !== "" ? "inputError" : ""
//                         }`}
//                       ></input>
//                       <textarea
//                         id="adjustHeight"
//                         name="roomDesc"
//                         type="text"
//                         onChange={this.handleRoomDesc}
//                         placeholder="RoomDesc"
//                         className={`${
//                           this.state.roomDescErr !== "" ? "inputError" : ""
//                         }`}
//                       ></textarea>
//                       <input
//                         name="food"
//                         type="text"
//                         onChange={this.handleRoomChange}
//                         placeholder="FoodOption"
//                       ></input>
//                     </div>
//                     <div className="submit">
//                       <button onClick={this.handleSubmit}>Submit</button>
//                     </div>

//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         {this.state.addNew ? <AddRooms /> : null}
//       </div>
//     );
//   }
// }

// export default AddNewRoom2;

import React, { Component } from "react";
import AddRooms from "./AddRooms";

export class AddNewRoom2 extends Component {
  render() {
    return (
      <div>
        <AddRooms />
      </div>
    );
  }
}

export default AddNewRoom2;
