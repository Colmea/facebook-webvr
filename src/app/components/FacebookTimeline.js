import React from 'react';
import THREE from 'three';
import Html3D from './utils/Html3D';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import * as Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import AccountFace from 'material-ui/lib/svg-icons/action/account-circle';


export default class FacebookTimeline extends React.Component
{
    onClick = () => {
        alert('on click');
    }

    render() {

        let rotationY = (this.props.frameNumber % 720)/2;
        let rotation = new THREE.Euler(0, rotationY*Math.PI/180, 0);

        return (
            <group ref="facebook-timeline">
                <Html3D ref="html3D" rotation={rotation}>
                    <div>
                        <List ref="button" subheader="Timeline">
                            <ListItem
                                ref="listItem"
                                key={0}
                                primaryText="Heey that's working, huh ?"
                                secondaryText="from Colmea"
                                initiallyOpen={true}
                                primaryTogglesNestedList={true}
                                leftAvatar={<Avatar
                                icon={<AccountFace />}
                                color={Colors.blue200}
                                backgroundColor={Colors.grey200}
                                onClick={this.onClick}
                            />}
                            />
                            <ListItem
                                ref="listItem"
                                key={1}
                                primaryText="Hello World !"
                                secondaryText="from Colmea"
                                initiallyOpen={true}
                                primaryTogglesNestedList={true}
                                leftAvatar={<Avatar
                              icon={<AccountFace />}
                              color={Colors.blue200}
                              backgroundColor={Colors.grey200}
                            />}
                            />
                        </List>
                    </div>
                </Html3D>
            </group>
        );
    }
}
