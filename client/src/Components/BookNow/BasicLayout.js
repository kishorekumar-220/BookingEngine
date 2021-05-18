import React, { Component } from "react";
import "./BasicLayout.css";

import ImageOne from "../BookNow/Cover.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import DisplayTile from "../DisplayTile/DisplayTile";

export class BasicLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <div>
        <div className="wrapImage">
          <img src={ImageOne}></img>
        </div>
        {/* DatePicker */}
        <div>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="your_unique_start_date_id"
            endDate={this.state.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          />
        </div>
        <DisplayTile />
        <DisplayTile />
        <DisplayTile />
      </div>
    );
  }
}

export default BasicLayout;