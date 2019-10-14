import React, {Component} from 'react';
import './css/side-menu.css';
import './css/pure-min.css';
import './css/gnstyle.css';
import $ from 'jquery';
import { Link } from 'react-router-dom'

class App extends Component {

    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount(){
        $.ajax({
            url: "https://localhost:8443/students",
            dataType: 'json',
            type: "GET",
            success:function(response) {
                this.setState({list:response});
            }.bind(this)
        });
    }

    componentWillMount(){
        
    }

    render() {
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
                <div id="header">
                    headerbar
                </div>
                <div id="menu">
                    <div className="pure-menu">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item menu-item-divided pure-menu-selected">
                                <Link to="/" className="pure-menu-link">Home</Link>
                            </li>
                            <li className="pure-menu-item">
                                <Link to="/student" className="pure-menu-link">Alunos</Link>
                            </li>
                            <li className="pure-menu-item">
                                <Link to="/classroom" className="pure-menu-link">Turmas</Link>
                            </li>
                            <li className="pure-menu-item">
                                <Link to="/test" className="pure-menu-link">Provas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="main">
                    <div id="content">
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
