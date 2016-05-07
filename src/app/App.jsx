import React from 'react';
import { render } from 'react-dom';
import AppComponent from 'components/App.jsx';

export default class Bootstrap {

    constructor() {

        render(
            <AppComponent />,
            document.getElementById('app')
        );

    }
}
