import Button from "@material-ui/core/Button";
import { React, Component } from "react";
import fire from "../config/Fire";





class SpotifyLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loginUri: "",
            logoutUri: ""
        };
    }
    componentDidMount(){
        this.state.logged
    }
}

    render() {
        return(
            <div>
            {this.state.loggedIn ?
                (<Button target="_blank" href={process.env.REACT_APP_BACKEND_NODE_LOGOUT_URI}>Logout from
                    Spotify</Button>)
                : (<Button target="_blank" href={process.env.REACT_APP_BACKEND_NODE_LOGIN_URI}>Login with
                    Spotify</Button>)
            }
            </div>
}



export default SpotifyLoginButton