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
        fetch('http://127.0.0.1:8000/random')
            .then(response => response.json())
            .then(response => this.setState({
                rnd: response.rnd,
            }))

    }

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                 <ul>
                    <li>{this.state.rnd}</li>
                 </ul>
            </div>
        );
    }
}

export default App;
