import React from 'react';
import THREE from 'three';
import Post from './facebook/Post';

export default class FacebookTimeline extends React.Component
{
    render() {

        let rotationY = (this.props.frameNumber % (360 * 10))/10;
        let rotation = new THREE.Euler(0, 0, 0);

        return (
            <group ref="facebook-timeline">
                <Post position={new THREE.Vector3(0, 100, -100)} rotation={rotation}>
                    Foo Fighters FTW <br /><br />
                    <iframe width="465" height="315" src="http://localhost:3000" frameborder="0" allowfullscreen></iframe>
                </Post>
                <Post position={new THREE.Vector3(600, 300, -1000)} rotation={rotation}>
                    <iframe width="465" height="315" src="http://gopherwoodstudios.com/sandtrap/sand-trap.htm" frameborder="0" allowfullscreen></iframe>
                </Post>
                <Post position={new THREE.Vector3(-800, 500, -800)} rotation={rotation}>
                    Foo Fighter FTW<br /><br />
                    <iframe width="465" height="315" src="https://www.youtube.com/embed/SBjQ9tuuTJQ" frameborder="0" allowfullscreen></iframe>

                </Post>
            </group>
        );
    }
}
