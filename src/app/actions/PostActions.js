import Dispatcher from 'app/Dispatcher';

class PostAction {

    /**
     * Create a new post
     */
    add(post) {
        return post;
    }

    /**
     * Remove a component
     * @param id
     * @returns {string} id
     */
    remove(id: string) {
        return id;
    }
}

export default Dispatcher.createActions(PostAction);