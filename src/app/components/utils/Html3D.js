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
        rotation: new THREE.Euler(10*Math.PI/180 ,20*Math.PI/180 ,0),
        HTMLElement: document.createElement('div')
    };

    constructor(props, context) {
        super(props, context);

        let element = document.createElement( 'div' );
        element.innerHTML = 'Hellow World !';

        this.HTMLElement = element;
    }


    componentDidMount() {
        this._createCSS3DObject();

    }


    _createCSS3DObject() {
        let CSS3DObject = new THREE.CSS3DObject(this.HTMLElement);
        CSS3DObject.name = "css3D";

        this.refs.group.add(CSS3DObject);

    }



    render() {

        return (

            <group
                ref="group"
                position={this.props.position}
                rotation={this.props.rotation}
            >
                <mesh
                    ref="mesh"
                >
                    <planeGeometry
                        width={300}
                        height={300}
                        widthSegments={10}
                        heightSegments={10}
                    />

                    <meshBasicMaterial wireframe={true} />
                </mesh>

                <mesh
                    ref="CSS3D"
                >
                    <planeGeometry
                        width={100}
                        height={100}
                        widthSegments={10}
                        heightSegments={10}
                    />

                    <meshBasicMaterial wireframe={true} />
                </mesh>

            </group>


        );
    }
}
