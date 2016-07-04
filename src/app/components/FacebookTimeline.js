import React from 'react';
import THREE from 'three';

import FacebookActions from 'actions/FacebookActions';

import LoginStatus from './facebook/LoginStatus';
import Post from './facebook/Post';

export default class FacebookTimeline extends React.Component
{
    static propTypes = {
        frameNumber: React.PropTypes.number,
        FacebookStore: React.PropTypes.object,
        PostStore: React.PropTypes.object
    };

    static defaultProps = {
        frameNumber: 0
    };

    componentDidMount() {
        setTimeout(() => {
            FacebookActions.login();
        }, 2000);
    }

    render() {
        let rotationY = (this.props.frameNumber % (360 * 10)) / 4000;
        let rotation = new THREE.Euler(0, rotationY, 0);

        let posts = [];

        // Create Facebook posts
        this.props.PostStore.posts.forEach((post, index) => {
            const angleOffset = 35;
            const distance = 1000;

            const angle = angleOffset * index * (Math.PI / 180);

            let position = new THREE.Vector3(
                -distance  * Math.cos(angle),
                0,
                -distance  * Math.sin(angle)
            );

            let rotation = new THREE.Euler(0, -(angleOffset * index - 90) * (Math.PI/180), 0);

            posts.push(
                <Post
                    key={post.id}
                    post={post}
                    position={position}
                    rotation={rotation}
                />
            );
        });

        return (
            <group ref="facebook-timeline">
                {posts}

                <LoginStatus
                    frameNumber={this.props.frameNumber}
                    position={new THREE.Vector3(0, 400, 0)}
                    rotation={rotation}
                    isConnected={this.props.FacebookStore.connected}
                />
            </group>
        );
    }
}