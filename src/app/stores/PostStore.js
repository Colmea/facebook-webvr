import Dispatcher from 'app/Dispatcher';
import PostActions from 'actions/PostActions';

class PostStoreDefinition {

    /**
     * User's posts
     * @type {Array}
     */
    posts = [];

    constructor() {
        // Listen to actions
        this.bindListeners({
            add: PostActions.ADD,
        });
    }

    /**
     * Add one (or more) post(s)
     * @param data
     */
    add(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }

        this.posts.push(...data);
    }
}

export default Dispatcher.createStore(PostStoreDefinition, 'PostStore');