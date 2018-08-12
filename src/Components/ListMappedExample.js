import React from 'react';



/*
const ListMappedExample = ({ comments }) =>
    <ul>
        {comments.map(comment =>
            <li>{comment.body}-{comment.author}</li>
        )}
    </ul>
*/


class ListMappedExample extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: [],
            artistlist: {}

        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/getartistlist/")
            .then(console.log("past the fetch"))
            .then(res => res.json())
/*            .then((result) => {
                console.log(result)
            })*/


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
    }

    render() {
        const { error, isLoaded, artistlist } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (artistlist){
            return (
                    <ul>
                        {artistlist.map((artistlist, index) => (
                            <li key={index} value = {artistlist.artist}>
                                {artistlist.artist}

                            </li>
                        ))}
                    </ul>
            );
        } else
            return (
                <p>The list of artists did not Load, please contact customer support.</p>
            )
    }
}

export default ListMappedExample;