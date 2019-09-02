/* global require module */

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {
  ViroNode,
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const log = context => content => console.log(context, content);

    ViroARTrackingTargets.createTargets({
      target: {
        source: require('./res/patterina_anchor.png'),
        orientation: 'UP',
        physicalWidth: 0.138,
        type: 'Image',
      },
    });

    console.log(this.props.pauseUpdates);

    return (
      <ViroARScene onTrackingUpdated={log('tracking')}>
        <ViroAmbientLight color="#ff0000" />
        <ViroARImageMarker
          target={'target'}
          pauseUpdates={this.props.pauseUpdates}>
          <ViroNode>
            <Viro3DObject
              source={require('./res/latzhose-png.obj')}
              resources={[require('./res/latzhose-72dpi.png')]}
              type="OBJ"
            />
          </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

HelloWorldSceneAR.propTypes = {
  pauseUpdates: PropTypes.bool,
};

module.exports = HelloWorldSceneAR;
