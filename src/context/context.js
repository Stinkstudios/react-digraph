import React from "react";

const Context = React.createContext();

class DigraphContext extends React.Component {
  state = {
    focussedNode: null
  };

  setFocussedNode = () => {};

  render = () => {
    const { focussedNode } = this.state;

    return (
      <Context.Provider
        value={{
          focussedNode
        }}
      >
        {children}
      </Context.Provider>
    );
  };
}

export default DigraphContext;
