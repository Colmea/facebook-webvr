import React from 'react';
import CSS3DRenderer from '../../../../library/CSS3DRenderer';
import THREE from 'three';

export default class Html3D extends React.Component
{
    static propTypes = {
        position: React.PropTypes.instanceOf(THREE.Vector3),
        rotation: React.PropTypes.instanceOf(THREE.Euler),
        HTMLElement: React.PropTypes.any,
    };

    static defaultProps = {
        position: new THREE.Vector3(),
        rotation: new THREE.Euler(),
        HTMLElement: document.createElement('div')
    };

    constructor(props, context) {
        super(props, context);

        let element = document.createElement( 'img' );
        element.src = 'images/texture.jpg';

        this.HTMLElement = element;
    }

    componentDidMount() {
        this._createCSS3DObject();

    }


    _createCSS3DObject() {
        let CSS3DObject = new THREE.CSS3DObject(this.HTMLElement);
        this.refs.group.add(CSS3DObject);

    }



    render() {

        return (
            <group ref="group">
                <mesh
                    ref="mesh"
                    position={this.props.position}
                    rotation={this.props.rotation}
                >
                    <planeGeometry
                        width={3}
                        height={3}
                        widthSegments={10}
                        heightSegments={10}
                    />

                    <meshBasicMaterial wireframe={true} />
                </mesh>

                <mesh
                    ref="CSS3D"
                    position={this.props.position}
                    rotation={this.props.rotation}
                >
                    <planeGeometry
                        width={1}
                        height={1}
                        widthSegments={10}
                        heightSegments={10}
                    />

                    <meshBasicMaterial wireframe={true} />
                </mesh>
            </group>
        );
    }
}
