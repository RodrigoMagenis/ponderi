import React, {Component} from 'react';
import {PickList} from 'primereact/picklist';

export default class CustomPickList extends Component {

/*     constructor() {
        super();
        this.state = {
            picklistSource:[],
            picklistTarget:[]
        }
        this.pickListOnChange = this.pickListOnChange.bind(this);
    }

    componentDidUpdate() {
        if (this.state.picklistSource !== this.props.picklistSource) {
            this.props.picklistSource.then(data => this.setState({picklistSource: data}));
        }

        if (this.state.picklistTarget !== this.props.picklistTarget) {
            this.props.picklistTarget.then(data => this.setState({picklistTarget: data}));
        }
    } */


    // componentDidMount() {
    //     this.carService.getCarsMedium().then(data => this.setState({picklistSourceCars: data}));
    // }

    // pickListOnChange(event) {
    //     debugger;
    //     this.setState({picklistSource: event.source, picklistTarget: event.target})
    // }



    render() {
        return (
            <div className="p-col-12 p-md-8">
                <PickList {...this.props}
                    source={this.props.picklistSource}
                    target={this.props.picklistTarget}
                    sourceStyle={{height:250}}
                    targetStyle={{height:250}}
                    showSourceControls={false}
                    showTargetControls={false}
                    responsive={false}
                    //onChange={event => this.setState({picklistSource: event.source, picklistTarget: event.target})}
                />
            </div>
        );
    }
}
