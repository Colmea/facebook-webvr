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

        let posts = [];

        // Create Facebook posts
        this.props.posts.forEach((post, index) => {
            const angleOffset = 30;
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
            </group>
        );
    }
}