import React from 'react';
import ReactDOM from 'react-dom';
import CSS3DRenderer from '../../../../library/CSS3DRenderer';
import THREE from 'three';

export default class Html3D extends React.Component
{
    static propTypes = {
        position: React.PropTypes.instanceOf(THREE.Vector3),
        rotation: React.PropTypes.instanceOf(THREE.Euler)
    };

    static defaultProps = {
        position: new THREE.Vector3(),
        rotation: new THREE.Euler()
    };

    componentDidMount() {
        // Create DOM element with ReactDOM
        this.HTMLElement = document.createElement('div');
        ReactDOM.render(this.props.children, this.HTMLElement);

        this._createCSS3DObject();
    }

    /**
     * Create the CSS3D object from HTMLElement property
     * @private
     */
    _createCSS3DObject() {
        let CSS3DObject = new THREE.CSS3DObject(this.HTMLElement);
        this.refs.group.add(CSS3DObject);
    }

    render() {
        return (
            <group
                ref="group"
                position={this.props.position}
                rotation={this.props.rotation}
            >

            </group>
        );
    }
}
