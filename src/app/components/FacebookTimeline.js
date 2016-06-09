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
            posts.push(
                <Post
                    key={post.id}
                    post={post}
                    position={new THREE.Vector3(index * 500, 0, (index+1) * -300)}
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