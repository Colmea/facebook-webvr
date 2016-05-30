import React from 'react';
import THREE from 'three';
import Post from './facebook/Post';

export default class FacebookTimeline extends React.Component
{
    render() {

        let rotationY = (this.props.frameNumber % (360 * 10))/10;
        let rotation = new THREE.Euler(0, rotationY*Math.PI/180, 0);

        return (
            <group ref="facebook-timeline">
                <Post position={new THREE.Vector3(0, 100, -100)} rotation={rotation} />
                <Post position={new THREE.Vector3(600, 300, -1000)} rotation={rotation} />
                <Post position={new THREE.Vector3(-800, 500, -800)} rotation={rotation} />
            </group>
        );
    }
}
