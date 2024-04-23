import React, { Component } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>This is my budget tracker application</p>} />
        </Routes>
      </BrowserRouter>
    );
  }
}