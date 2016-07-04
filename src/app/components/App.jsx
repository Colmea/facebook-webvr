import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import AltContainer from 'alt-container';

import FacebookStore from 'stores/FacebookStore';
import PostStore from 'stores/PostStore';
import EditorControls from 'library/EditorControls';
import FacebookTimeline from 'components/FacebookTimeline';

export default class AppComponent extends React.Component {

    state = {
        frameNumber: 0,
        cameraPosition: new THREE.Vector3(0, 200, 600),
        cameraRotation: new THREE.Euler(0, 0, 0),
    };

    groundQuaternion = new THREE.Quaternion()
        .setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

    fog = new THREE.Fog(0xf0f0f0, 500, 10000);

    componentDidMount() {
        this._createDefaultEnvironment();

        // Create CSS3D Renderer
        this.cssRenderer = new THREE.CSS3DRenderer();
        this.cssRenderer.setSize( window.innerWidth, window.innerHeight );
        this.cssRenderer.domElement.style.position = 'absolute';
        this.cssRenderer.domElement.style.top = 0;
        document.body.appendChild(this.cssRenderer.domElement);

        // Attach controls
        const {camera} = this.refs;
        this.controls = new EditorControls(camera);
        this.controls.addEventListener('change', this._onControlsChange);
    }

    /**
     * Create default 3D environment (grid, skybox, ...)
     * @private
     */
    _createDefaultEnvironment(): void {
        // Create grid Helper
        let gridHelper = new THREE.GridHelper( 50000, 100);
        this.refs.gridHelper.add(gridHelper);
    }

    /**
     * Fired when controls is updated
     */
    _onControlsChange = () => {
        let newState = this.state;

        // Clone new cam position/rotation to state
        newState.cameraPosition = this.refs.camera.position.clone();
        newState.cameraRotation =  this.refs.camera.rotation.clone();

        this.setState(newState);
    };

    _onAnimate = () => {
        this.setState({
            frameNumber: this.state.frameNumber + 1
        })

        let scene = this.refs.scene;
        let camera = this.refs.camera;

        this.cssRenderer.render(scene, camera);
    };

    render() {

        const width = window.innerWidth; // canvas width
        const height = window.innerHeight; // canvas height
        const d = 20;

        return (
            <div id="container-app">
                <React3
                    mainCamera="camera"
                    width={width}
                    height={height}
                    clearColor={this.fog.color}
                    gammaInput
                    gammaOutput
                    shadowMapEnabled={true}
                    shadowMapDebug={true}
                    antialias={true}
                    onAnimate={this._onAnimate}

                >
                    <scene ref="scene" fog={this.fog}>
                        <resources>
                            <texture
                                resourceId="basicTexture"
                                url="images/texture.jpg"
                                wrapS={THREE.RepeatWrapping}
                                wrapT={THREE.RepeatWrapping}
                                repeat={new THREE.Vector2(1, 1)}
                            />
                            <texture
                            resourceId="groundTexture"
                            url="images/ground.jpg"
                            wrapS={THREE.RepeatWrapping}
                            wrapT={THREE.RepeatWrapping}
                            repeat={new THREE.Vector2(5, 5)}
                            />
                            <texture
                                resourceId="facebookTexture"
                                url="images/textures/facebook.png"
                                wrapS={THREE.RepeatWrapping}
                                wrapT={THREE.RepeatWrapping}
                                repeat={new THREE.Vector2(1, 1)}
                            />

                            <meshPhongMaterial
                                resourceId="groundMaterial"
                                side={THREE.DoubleSide}
                            >
                                <textureResource resourceId="groundTexture" />
                            </meshPhongMaterial>

                            <meshPhongMaterial
                                resourceId="basicMaterial"
                                side={THREE.DoubleSide}
                            >
                                <textureResource resourceId="basicTexture" />
                            </meshPhongMaterial>

                            <meshPhongMaterial
                                resourceId="facebookMaterial"
                                side={THREE.DoubleSide}
                            >
                                <textureResource resourceId="facebookTexture" />
                            </meshPhongMaterial>
                        </resources>

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
                                position={this.lightPosition}
                            />
                        </perspectiveCamera>

                        <directionalLight
                            color={0xffffff}
                            intensity={1.75}

                            castShadow={true}

                            shadowMapWidth={1024}
                            shadowMapHeight={1024}
                            shadowCameraLeft={-d}
                            shadowCameraRight={d}
                            shadowCameraTop={d}
                            shadowCameraBottom={-d}

                            shadowCameraFar={100 * d}
                            shadowCameraNear={d}

                            position={new THREE.Vector3(200, 200, 0)}
                        />

                        <object3D ref="gridHelper" />
                        <axisHelper
                            name="axisHelper"
                            position={new THREE.Vector3()}
                        />

                        <AltContainer stores={{ FacebookStore: FacebookStore, PostStore: PostStore }}>
                            <FacebookTimeline ref="facebookTimeline" frameNumber={this.state.frameNumber} />
                        </AltContainer>
                    </scene>
                </React3>
            </div>
        );
    }
}

//<mesh
//    castShadow={false}
//    receiveShadow={true}
//    quaternion={this.groundQuaternion}
//    position={new THREE.Vector3(0, 1, 0)}
//>
//    <planeBufferGeometry
//        width={1000}
//        height={1000}
//        widthSegments={1}
//        heightSegments={1}
//    />
//    <materialResource resourceId="groundMaterial" />
//</mesh>