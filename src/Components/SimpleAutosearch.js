import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

var artistlisttest = [
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
].map(suggestion => ({
    heyday: suggestion.label,
    happydoda: suggestion.label,
    label: suggestion.label,
}));

class SimpleAutosearch extends React.Component {
    state = {
        selectedOption: null,
    }

    componentDidMount() {
        console.log("componenentdidMount() called, about to fetch");
        fetch("http://127.0.0.1:5000/getartistlist/")
            .then(console.log("past the fetch"))
            .then(res => res.json())
            /*          .then((result) => {
                          console.log(result)
                      })*/


            .then(
                (result) => {
                    // console.log(result)
                    console.log("here is test data")
                    console.log(typeof result)
                    console.log("type for suggestions: ")
                    console.log(typeof suggestions)
                    console.log(result[3])
                    console.log(result[3].artist)
                    console.log('artistlisttest before map')
                    console.log(artistlisttest)
                    console.log('artistlisttest after map')
                    artistlisttest = result.map(suggestion => ({
                        value: suggestion.artist,
                        label: suggestion.artist,
                    }));
                    console.log(artistlisttest)
                    this.setState({
                        isLoaded: true,
                        artistlist: artistlisttest,
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
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={artistlisttest}
            />
        );
    }
}

export default SimpleAutosearch