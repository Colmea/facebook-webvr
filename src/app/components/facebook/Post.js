import React from 'react';
import HTML3D from 'react-three-renderer-html3d/lib/HTML3D';

import FlatButton from 'material-ui/lib/flat-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import LikeIcon from 'material-ui/lib/svg-icons/action/thumb-up';
import CommentIcon from 'material-ui/lib/svg-icons/communication/message';
import Shareicon from 'material-ui/lib/svg-icons/social/share';

export default class Post extends React.Component
{
    static propTypes = {
        post: React.PropTypes.object.isRequired
    };

    static defaultProps = {
        frameNumber: 0,
    };

    styleButton = {
        color: '#ddd'
    };

    onLike = () => {
        alert('Like event');
    };

    onComment = () => {
        alert('Comment event');
    };

    onShare = () => {
        alert('Share event');
    };

    /**
     * Render post content
     * @returns {*[]}
     */
    renderPostContent() {
        const {post} = this.props;
        let content = [this.props.post.message];

        if (post.link) {
            content.push(
                <iframe width="465" height="315" src={post.link} frameBorder="0" allowFullScreen></iframe>
            );
        }

        return content;
    }

    render() {
        const post = this.props.post;
        const timeElapsed = Math.ceil((Date.now() - new Date(post['created_time'])) / (60000 * 3600));

        return (
            <HTML3D {...this.props}>
                <Card style={{width: '500px', opacity: 0.9 }} initiallyExpanded={true}>
                    <CardHeader
                        title={post.from.name}
                        subtitle={timeElapsed + " h"}
                        actAsExpander={true}
                        showExpandableButton={true}
                        initiallyExpanded={true}
                        avatar="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/c16.19.155.155/s32x32/380108_2617196464115_1292327190_n.jpg?oh=f3e5a7f5e96e5f7851f5b09e85010bbe&oe=57A276FF"
                        />
                        <CardText expandable={true} initiallyExpanded={true}>
                            {this.renderPostContent()}
                        </CardText>
                        <CardActions expandable={true}>
                            <FlatButton
                                label="Like"
                                onClick={this.onLike}
                                icon={<LikeIcon />}
                                style={this.styleButton}
                            />
                        <FlatButton
                            label="Comment"
                            onClick={this.onComment}
                            icon={<CommentIcon />}
                            style={this.styleButton}
                        />
                        <FlatButton
                            label="Share"
                            onClick={this.onShare}
                            icon={<Shareicon />}
                            style={this.styleButton}
                        />
                    </CardActions>
                </Card>
            </HTML3D>
        );
    }
}
