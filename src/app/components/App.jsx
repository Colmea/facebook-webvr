import React from 'react';
import ReactDOM from 'react-dom';
import React3 from 'react-three-renderer';
import THREE from 'three';
import FacebookTimeline from 'components/FacebookTimeline';

export default class AppComponent extends React.Component {

    state = {
        frameNumber: 0
    };

    componentDidMount() {
        this._createDefaultEnvironment();

        // Create CSS3D Renderer
        this.cssRenderer = new THREE.CSS3DRenderer();
        this.cssRenderer.setSize( window.innerWidth, window.innerHeight );
        this.cssRenderer.domElement.style.position = 'absolute';
        this.cssRenderer.domElement.style.top = 0;

        document.body.appendChild(this.cssRenderer.domElement);

        let HTMLElement = this.refs.button;

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

        return (
            <div id="container-app">
                <React3
                    mainCamera="camera"
                    width={width}
                    height={height}
                    clearColor={0xf0f0f0}
                    gammaInput
                    gammaOutput
                    shadowMapEnabled
                    antialias={true}
                    onAnimate={this._onAnimate}

                >
                    <scene ref="scene">
                        <perspectiveCamera
                            name="camera"
                            ref="camera"
                            fov={75}
                            aspect={width / height}
                            near={1}
                            far={1000000}
                            position={new THREE.Vector3(-1, 300, 500)}
                            lookAt={new THREE.Vector3(0, 2, 0)}
                        >
                            <pointLight
                                color={0xffffff}
                                intensity={0.5}
                                position={this.lightPosition}
                            />
                        </perspectiveCamera>
                        <ambientLight color={0x505050} />

                        <object3D ref="gridHelper" />
                        <axisHelper
                            name="axisHelper"
                            position={new THREE.Vector3()}
                        />

                        <FacebookTimeline ref="facebookTimeline" callbackElement={this.callbackElement} frameNumber={this.state.frameNumber} />
                    </scene>
                </React3>
            </div>
        );
    }
}