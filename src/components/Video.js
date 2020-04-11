import React from 'react';
import {Container} from '@material-ui/core';
import jsmpeg from 'jsmpeg'


class Video extends React.Component {
    constructor(props){
        super(props)
        this.streamCanvas = React.createRef()
    }
    componentDidMount  (){
        var url = 'wss://picamserver.herokuapp.com';
        this.streamVideo(url)
    }
    streamVideo(url) {
        this.websocket = new WebSocket(url)
        let player = new jsmpeg(this.websocket, {
            canvas: this.streamCanvas.current});
    }

  
    render() { 
        return (
            <iframe src="https://picamserver.herokuapp.com/"></iframe>
                //<canvas ref={this.streamCanvas} id="streamCanvas" width ="640" height="480"></canvas>
        );
    }
}
 
export default Video;