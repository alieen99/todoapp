import React, {Component} from 'react';
import './App.css';
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";

import {observer} from "mobx-react";
import Footer from "./components/Footer";

@observer
class App extends Component{
  render() {
    return (
          <div id="todoapp" className="todoapp">
            <TodoEntry/>
            <TodoItems/>

          </div>

    );
  }
  }


export default App;
