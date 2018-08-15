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

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));


var artistlisttest = [
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
].map(suggestion => ({
    heyday: suggestion.label,
    happydoda: suggestion.label,
    label: suggestion.label,
}));







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
    console.log("placeholder function running")
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
    console.log("outside function ValueConatainer called")
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
    console.log("outside function Multivalue called")
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

class AutosearchArtist2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single: null,
            multi: null,
            artistlist: {},
            selectedOption: null,
            isLoaded: false
        };
}



    fetchTheArtistList() {
        console.log("fetchTheArtistList() called, about to fetch");
        fetch("http://127.0.0.1:5000/getartistlist/")
            .then(console.log("past the fetch"))
            .then(res => res.json())
            .then(
                (result) => {
                    artistlisttest = result.map(suggestion => ({
                        value: suggestion.artist,
                        label: suggestion.artist,
                    }))
                    console.log("after mapping artistlisttest")
                    console.log(artistlisttest)
                }
            )
            .then(this.setArtistListState)
    }

    setArtistListState() {
        console.log("before this.setState")
        console.log("isLoaded & artistlist")
        console.log(this.state.isLoaded)
        console.log(this.state.artistlist)

        this.setState({
            isLoaded: true,

            artistlist: artistlisttest,

        });
        console.log("after this.setSTate")
    }

    componentDidMount() {
        console.log("componentDidMount running, aristlist = ")
        console.log(this.artistlist)

/*                if (!this.artistlist) {
                    this.fetchTheArtistList();
                    this.setArtistListState();
                    console.log("component did mount comint to an end")
                }*/

        this.fetchTheArtistList()
                console.log("final line of componentDidMount()")

        }

    handleChange = name => value => {
                console.log("handleChange has been called")
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div id="AutosearchArtist"
                 className={classes.root}>
                <p> {console.log(this.state.artistlist)}</p>
                <p> {console.log(artistlisttest)} </p>
                <NoSsr>
                    <Select

                        classes={classes}

                        options={artistlisttest}
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Search a country (start with a)"
                    />

                </NoSsr>
            </div>
        );
    }
}

AutosearchArtist2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutosearchArtist2);