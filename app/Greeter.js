/**
 * Created by admin on 2017/8/18.
 */

import React,{Component} from 'react'
import config from './config.json'
import './greeter.css'

class Greeter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {config.text}
            </div>
        )
    }
}

export default Greeter;