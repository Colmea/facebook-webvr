import Dispatcher from 'app/Dispatcher';
import FacebookActions from 'actions/FacebookActions';

class FacebookDefinition {

    /**
     * Is connected to Facebook
     * @type {boolean}
     */
    isConnected = false;

    /**
     * User Access Token
     * @type {string}
     */
    accessToken;

    constructor() {
        // Listen to actions
        this.bindListeners({
            loginSucceed: FacebookActions.LOGIN_SUCCEED,
            loginFailed: FacebookActions.LOGIN_FAILED
        });
    }

    /**
     * Login succeed event
     * Store access token
     * @param response
     */
    loginSucceed(response) {
        this.connected = true;
        this.accessToken = response.authResponse.accessToken;
    }

    /**
     * Login failed event
     * @param response
     */
    loginFailed(response) {
        console.log('login failed');
    }
}

export default Dispatcher.createStore(FacebookDefinition, 'FacebookStore');