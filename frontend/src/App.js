import './App.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_id: 0,
            q: 0
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/items/1?q=1')
            .then(response => response.json())
            .then(response => this.setState({
                item_id: response.item_id,
                q: response.q
            }))

    }

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                 <ul>
                    <li>{this.state.item_id} - {this.state.q}</li>
                 </ul>
            </div>
        );
    }
}

export default App;
