import React from 'react';


class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      addUrl : "Add your url here"
    }
  }

  updateUrl = (event) => {
    this.setState({addUrl : event.target.value});
  }

  render() {

    const headerStyle = {
      height : "90px",
      backgroundColor : "#16a085"
    };

    const homeIconeStyle = {
      height : "64px",
      width : "64px",
      paddingTop : "10px"
    };

    const headerTitleStyle = {
      font : "60px",
      color : "white",
      paddingLeft : "10px",
      paddingRight : "10px"
    }

    const headerControlsStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }


    return(
      <div style={headerStyle}>
        <div style = {headerControlsStyle}>
          <img id = "homeIcone" alt="Puppies dancing" style = {homeIconeStyle} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuMzY1IDQyNi4zNjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi4zNjUgNDI2LjM2NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiMwMUNCM0U7IiBkPSJNMzQ3LjY4MywwaC04NS45NTZsLTM1LjQxOCw2OC41NTRjLTQuMjc4LDguMjgxLTEyLjgyLDEzLjQ4My0yMi4xNDEsMTMuNDgzSDc4LjY4M3YxMDguODgyaDY3LjkyNCAgYzcuNTIsMCwxMi4zNyw3Ljk2NCw4LjkxOCwxNC42NDVMNzguNjgzLDM1NC4yOTl2NzIuMDY2aDg1LjgxbDM1LjQxOC02OC41NTRjNC4yNzgtOC4yODEsMTIuODItMTMuNDgzLDIyLjE0MS0xMy40ODNoMTI1LjYzMSAgVjIzNS40NDZoLTY4LjA3Yy03LjUyLDAtMTIuMzctNy45NjQtOC45MTgtMTQuNjQ1bDc2Ljk4OC0xNDkuMDE2TDM0Ny42ODMsMEwzNDcuNjgzLDB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /> 
          <span style = {headerTitleStyle}>
            ArtWall
          </span>
          <input type="text" value = {this.state.addUrl} onChange = {this.updateUrl.bind(this)} />
          <button onClick = {() => {this.props.takeDeviantArtPost(this.state.addUrl)}} >Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
