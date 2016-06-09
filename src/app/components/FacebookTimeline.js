import React from 'react';
import THREE from 'three';
import Post from './facebook/Post';

export default class FacebookTimeline extends React.Component
{
    static propTypes = {
        frameNumber: React.PropTypes.number,
        posts: React.PropTypes.array
    };

    static defaultProps = {
        frameNumber: 0,
        posts: []
    };

    render() {
        let rotationY = (this.props.frameNumber % (360 * 10)) / 4000;
        let rotation = new THREE.Euler(0, rotationY, 0);

        let posts = [];

        // Create Facebook posts
        this.props.posts.forEach((post, index) => {
            posts.push(
                <Post
                    key={post.id}
                    post={post}
                    position={new THREE.Vector3(index * 500, index * 200, (index+1) * -300)}
                    rotation={rotation}
                />
            );
        });

        return (
            <group ref="facebook-timeline">
                {posts}
            </group>
        );
    }
}