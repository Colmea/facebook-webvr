import Dispatcher from 'app/Dispatcher';
import PostActions from 'actions/PostActions';

class PostStoreDefinition {

    posts = [
        {
            id: '1',
            type: 'status',
            content: "Inception :o",
            url: 'http://localhost:3000'
        },
        {
            id: '2',
            type: 'status',
            content: 'Foo Fighter FTW',
            url: 'https://www.youtube.com/embed/SBjQ9tuuTJQ'
        }

    ];

    constructor() {
        // Listen to actions
        this.bindListeners({
            add: PostActions.ADD,
            remove: PostActions.REMOVE
        });
    }

    add(data) {

    }

    remove(id: string) {

    }

}

export default Dispatcher.createStore(PostStoreDefinition, 'PostStore');