import React from 'react';
import THREE from 'three';

export default class FacebookTimeline extends React.Component
{

    render() {

        return (
            <group ref="facebook-timeline">
                <mesh
                    ref="box"
                    position={new THREE.Vector3(0, 2, 0)}
                >
                    <boxGeometry
                        width={1}
                        height={1}
                        depth={1}
                    />

                    <meshBasicMaterial />
                </mesh>
            </group>
        );
    }
}
