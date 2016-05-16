import React from 'react';
import THREE from 'three';
import Html3D from './utils/Html3D';

export default class FacebookTimeline extends React.Component
{

    render() {

        return (
            <group ref="facebook-timeline">
                <Html3D scene={this.props.scene} />
            </group>
        );
    }
}
