import React                  from 'react';
import ReactDOM               from 'react-dom';
import App                    from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StudentBox             from './student/StudentBox';
import HomeBox                from './home/HomeBox';
import './index.css';

ReactDOM.render(
    (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/student" component={StudentBox}/>
                    <Route path="/classroom"/>
                    <Route path="/test"/>
                    <Route component={HomeBox}/>
                </Switch>
            </App>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
