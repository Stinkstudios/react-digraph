import React from "react";

export const DigraphContext = React.createContext();

class DigraphContextProvider extends React.Component {
  state = {
    focussedNode: 200
  };

  setFocussedNode = focussedNode => {
    this.setState({
      focussedNode
    });
  };

  render = () => {
    const { focussedNode } = this.state;
    const { children } = this.props;

    return (
      <DigraphContext.Provider
        value={{
          focussedNode,
          setFocussedNode: this.setFocussedNode
        }}
      >
        {children}
      </DigraphContext.Provider>
    );
  };
}
export default DigraphContextProvider;
