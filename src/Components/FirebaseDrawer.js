
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import FirebaseLogin from './FirebaseLogin';
import FirebaseHome from './FirebaseHome';
import fire from "../config/Fire";



const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SwipeableTemporaryDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
            firebaseUser: {},
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    authListener(){
        fire.auth().onAuthStateChanged((firebaseUser) => {
            //console.log(firebaseUser);
            if(firebaseUser){
                this.setState({firebaseUser});
                localStorage.setItem('firebaseUser', firebaseUser.uid);
            }else {
                this.setState({firebaseUser: null});
                //localStorage.removeItem('firebaseUser');
            }
        });
    }
    componentDidMount(){
        this.authListener();
    }
    render() {
        const { classes } = this.props;

        const fullList = (
            <div className={classes.fullList}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div>
                <Button onClick={this.toggleDrawer('bottom', true)}>Firebase Login</Button>

                <SwipeableDrawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer('bottom', false)}
                    onOpen={this.toggleDrawer('bottom', true)}
                >
                    <div
                        tabIndex={0}
/*
                        role="button"
*/
                    >
                        {this.state.firebaseUser ? (<FirebaseHome />) : (<FirebaseLogin/>)}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

SwipeableTemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
