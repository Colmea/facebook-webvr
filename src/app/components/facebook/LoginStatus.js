import React from 'react';
import THREE from 'three';

export default class LoginStatus extends React.Component
{
    static propTypes = {
        isConnected: React.PropTypes.bool,
        position: React.PropTypes.instanceOf(THREE.Vector3),
        frameNumber: React.PropTypes.number
    };

    static defaultProps = {
        isConnected: false,
        frameNumber: 0
    };

    render() {
        let size = 10;
        let rotation = new THREE.Euler();

        if (this.props.isConnected) {
            size = 40;

            let rotationY = (this.props.frameNumber % (360 * 10)) / 500;
            rotation = new THREE.Euler(0, rotationY, 0);
        }

        return (
            <mesh
                position={this.props.position}
                rotation={rotation}
                visible={this.props.isConnected}
            >
                <boxGeometry
                    width={size}
                    height={size}
                    depth={size}
                    widthSegments={20}
                    heightSegments={10}
                />
                <materialResource resourceId='facebookMaterial' />

            </mesh>
        );
    }
}