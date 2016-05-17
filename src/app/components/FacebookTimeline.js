import React from 'react';
import THREE from 'three';
import Html3D from './utils/Html3D';
// Material UI
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import * as Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import AccountFace from 'material-ui/lib/svg-icons/action/account-circle';

import Post from './facebook/Post';

export default class FacebookTimeline extends React.Component
{
    render() {

        let rotationY = (this.props.frameNumber % (360 * 10))/10;
        let rotation = new THREE.Euler(0, rotationY*Math.PI/180, 0);

        return (
            <group ref="facebook-timeline">
                <Post position={new THREE.Vector3(0, 100, -100)} rotation={rotation} />
            </group>
        );
    }
}
