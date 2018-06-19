import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';

import { store } from './store';
import * as appActions from './store/action/app';
import Output from './components/Alpha.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCFFCC',
    },
});

class App extends Component {
    render() {
        return <View style={styles.container}>
            <Output />
        </View>;
    }
}

export default function AppContainer(props) {
    return <RuuiProvider>
        <Provider store={store}>
            <App/>
        </Provider>

        <Tooltip/>
    </RuuiProvider>;
}
