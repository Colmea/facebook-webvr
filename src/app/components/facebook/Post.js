import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import THREE from 'three';
import Html3D from '../utils/Html3D';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import * as Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import AccountFace from 'material-ui/lib/svg-icons/action/account-circle';
import LikeIcon from 'material-ui/lib/svg-icons/action/thumb-up';
import CommentIcon from 'material-ui/lib/svg-icons/communication/message';
import Shareicon from 'material-ui/lib/svg-icons/social/share';


export default class Post extends React.Component
{
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

    render() {

        return (
            <Html3D {...this.props}>
                <ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName="post" transitionAppear={true} transitionAppearTimeout={500}>
                        <Card style={{width: '500px', opacity: 0.9 }} initiallyExpanded={true}>
                            <CardHeader
                                title="Arthur Schwaiger"
                                subtitle="13 min"
                                actAsExpander={true}
                                showExpandableButton={true}
                                initiallyExpanded={true}
                                avatar="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/c16.19.155.155/s32x32/380108_2617196464115_1292327190_n.jpg?oh=f3e5a7f5e96e5f7851f5b09e85010bbe&oe=57A276FF"
                            />
                            <CardText expandable={true} initiallyExpanded={true}>
                                So you're saying I can add almost any React component in my 3D world, huh ?<br />
                                Mmyeah, pretty cool...
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
                </ReactCSSTransitionGroup>
            </Html3D>
        );
    }
}
