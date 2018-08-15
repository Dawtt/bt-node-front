import React from 'react';
import Select from 'react-select';





class SimpleAutosearch extends React.Component {
    state = {
        selectedOption: null,
        artistlisttest: [
            { label: 'Botswana' },
            { label: 'Bouvet Island' },
            { label: 'Brazil' },
        ].map(suggestion => ({
            heyday: suggestion.label,
            happydoda: suggestion.label,
            label: suggestion.label,
        })),
        artistlistinput: {},
        isLoaded: false,
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

                    this.state.artistlisttest = result.map(suggestion => ({
                        value: suggestion.artist,
                        label: suggestion.artist,
                    }));
                    this.setState(
                        {isLoaded: true}
                    );
                    console.log("after mapping in componentdidmoutn")
                    console.log(this.state.artistlistinput)

/*                    this.setState({
                        isLoaded: true,
                        artistlist: artistlisttest,
                    });*/
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
/*            .then(
                this.updateArtistList()
            )*/
    }

    updateArtistList() {
        this.setState({
            artistlisttest: this.artistlistinput
        })
        console.log("updateArtistList() called")
        console.log(this.state.artistlisttest)
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
                    options={this.state.artistlisttest}
                />
            )
    }
}


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];



export default SimpleAutosearch