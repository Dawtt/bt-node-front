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
            items: {}
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
                    this.setState({
                        isLoaded: true,
                        items: result.items
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ListMappedExample;