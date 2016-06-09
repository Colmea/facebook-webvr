import Dispatcher from 'app/Dispatcher';

class FacebookAction {

    /**
     * Facebook login async action
     */
    login() {
        FB.login((response) => {
            if (response.authResponse) {
                this.loginSucceed.defer(response);
            } else {
                this.loginFailed.defer(response);
            }
        }, {scope: 'publish_actions'});
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