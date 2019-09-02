/* global module */

import React, {Component} from 'react';
import ARScene from './js/ARScene.js';

import {View, Button, StyleSheet} from 'react-native';

import {ViroARSceneNavigator} from 'react-viro';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navigatorProps: {
        apiKey: '1E250084-FB3D-4E19-9866-05258CA018F4',
        autofocus: true,
        numberOfTrackedImages: 1,
      },
      pauseUpdates: false,
    };
  }

  toggleUpdates() {
    this.setState({pauseUpdates: !this.state.pauseUpdates});
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ViroARSceneNavigator
          {...this.state.navigator}
          initialScene={{
            scene: () => <ARScene pauseUpdates={this.state.pauseUpdates} />,
          }}
        />
        <Button
          style={styles.text}
          onPress={this.toggleUpdates.bind(this)}
          title={`pauseUpdates is ${this.state.pauseUpdates}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  text: {
    padding: 10,
    color: 'white',
    backgroundColor: 'red',
  },
});

module.exports = App;
