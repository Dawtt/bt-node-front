import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';


var suggestions = []

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        fontSize: 16,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
});







function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    ref: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={event => {
                props.removeProps.onClick();
                props.removeProps.onMouseDown(event);
            }}
        />
    );
}

const components = {
    Option,
    Control,
    NoOptionsMessage,
    Placeholder,
    SingleValue,
    MultiValue,
    ValueContainer,
};

class AutosearchArtist extends React.Component {
    state = {
        single: null,
        multi: null,
        comments: [],
        artistlist: {}
    };

    handleChange = name => value => {
        this.setState({
            [name]: value,
        });
    };

    componentDidMount() {
        fetch("http://127.0.0.1:5000/getartistlist/")
            .then(console.log("past the fetch"))
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    console.log("here is test data")
                    console.log(typeof result)
                    console.log(result[3])
                    console.log(result[3].artist)
                    this.setState({
                        isLoaded: true,
                        artistlist: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            .then(
                this.setState(
                    suggestions = this.state.artistlist
                )
            )
    }



    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <NoSsr>
                    <Select
                        classes={classes}
                        options={suggestions}
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Search a country (start with a)"
                    />
                    <Select
                        classes={classes}
                        options={this.state.artistlist}
                        components={components}
                        value={this.state.multi}
                        onChange={this.handleChange('multi')}
                        placeholder="Select multiple countries"
                        isMulti
                    />
                </NoSsr>
            </div>
        );
    }
}

AutosearchArtist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutosearchArtist);
