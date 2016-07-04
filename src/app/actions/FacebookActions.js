import Dispatcher from 'app/Dispatcher';
import PostActions from 'actions/PostActions';

class FacebookAction {

    /**
     * Facebook login async action
     */
    login() {
        FB.login((response) => {
            if (response.authResponse) {
                this.loginSucceed.defer(response);

                // Fetch last user's posts
                FB.api(
                    "/me/feed?fields=link,message&limit=10",
                    function (response) {
                        if (response && !response.error) {
                            PostActions.add.defer(response.data);
                        }
                    }
                );

            } else {
                this.loginFailed.defer(response);
            }
        }, {scope: 'user_posts,publish_actions'});

        return;
    }

    /**
     * Triggered when facebook login succeed
     * @param response
     * @returns {*}
     */
    loginSucceed(response) {
        return response;
    }

    /**
     * Triggered when facebook login failed
     * @param response
     * @returns {*}
     */
    loginFailed(response) {
        return response;
    }

}

export default Dispatcher.createActions(FacebookAction);