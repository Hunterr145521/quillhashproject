import React from 'react';
import TodoContextProvider from "./components/todo";

import Login from "./components/login";
import AuthContextProvider from "./components/auth";
import {BrowserRouter, Route} from "react-router-dom";
import All from "./components/TodoWork/allinone";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <TodoContextProvider>
          <AuthContextProvider>
              <Route exact path ='/' component={Login} />
            <Route path ='/all' component={All} />
          </AuthContextProvider>
      </TodoContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
