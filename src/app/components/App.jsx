import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';

import FacebookTimeline from 'components/FacebookTimeline';

export default class AppComponent extends React.Component {

    componentDidMount() {
        this._createDefaultEnvironment();
    }

    /**
     * Create default 3D environment (grid, skybox, ...)
     * @private
     */
    _createDefaultEnvironment(): void {
        // Create grid Helper
        let gridHelper = new THREE.GridHelper( 50, 1);
        this.refs.gridHelper.add(gridHelper);
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
                    clearColor={0xf0f0f0}
                    gammaInput
                    gammaOutput
                    shadowMapEnabled
                    antialias={true}
                >
                    <scene ref="scene">
                        <perspectiveCamera
                            name="camera"
                            ref="camera"
                            fov={75}
                            aspect={width / height}
                            near={0.1}
                            far={1000}
                            position={new THREE.Vector3(-1, 3, 7)}
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

                        <FacebookTimeline scene={this.refs.scene} />
                    </scene>
                </React3>
            </div>
        );
    }
}