# WebVR Facebook

![](http://g.recordit.co/z45OEieGbt.gif)

This repository is an experiment for a WebVR Facebook world in 3D with React.js, Three.js and WebVR API.

## How it works

webvr-fb is a full (es6) Javascript app and uses these technologies:
* React.js
* Three.js (with [react-three-renderer](https://github.com/toxicFork/react-three-renderer) package)
* CSS3D with the React HTML3D component (see my [react-three-renderer-html3d](https://github.com/Colmea/react-three-renderer-html3d) package)
* Alt.js (Flux library)

### Display a post in the Facebook timeline

This is a basic example of the webvr-facebook app. We use the React3 component to render a basic Three.js scene,
 then use the *Post* 3D component to display a facebook post (from facebook API).


```
import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import Post from 'src/components/facebook/Post';

export default class FacebookTimeline extends React.Component {

    state = {
        cameraPosition: new THREE.Vector3(0, 200, 600),
        cameraRotation: new THREE.Euler(0, 0, 0),
    };


    customOnAnimate = () => {
        // Custom process on each frame (move camera, for instance)
    }


    render() {
        const width = window.innerWidth; // canvas width
        const height = window.innerHeight; // canvas height

        return (
            <div id="container-app">
                <React3
                    mainCamera="camera"
                    width={width}
                    height={height}
                    antialias={true}
                    onAnimate={this.customOnAnimate}
                >
                    <scene ref="scene">
                        <perspectiveCamera
                            name="camera"
                            ref="camera"
                            fov={75}
                            aspect={width / height}
                            near={1}
                            far={10000}
                            position={this.state.cameraPosition}
                            rotation={this.state.cameraRotation}
                        >
                            <pointLight
                                color={0xffffff}
                                intensity={0.5}
                            />
                        </perspectiveCamera>

                        <Post
                            key='postId'
                            post={postObjectFromFacebookAPI}
                            position={new THREE.Vector3(0, 0, 0}
                            rotation={new THREE.Euler(0, 0, 0}
                        />
                    </scene>
                </React3>
            </div>
        );
    }
}
```

## Work in progress

This repository is still a work in progress:

* [x] React + Three.js environment
* [x] HTML3D component (CSS3D transformation in a React component)
* [x] Alt.js structure
* [x] Facebook API
* [ ] Facebook's Post, Video, Comment and Notifications
* [ ] WebVR
