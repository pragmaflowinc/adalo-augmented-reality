import React, { useEffect, useState } from 'react'
import {
  ViroARSceneNavigator,
} from '@citychallenge/react-viro';
import { View } from 'react-native'
import AdaloARScene from './AdaloARScene'

const ViroAR = (props) => {
	return(
		<View style={{ height: props._height, width: props._width }}>
		<ViroARSceneNavigator
		worldAlignment={'GravityAndHeading'}
		autofocus={true}
		initialScene={{
			scene: AdaloARScene,
		}}
		style={{flex: 1}}
	/>
	</View>
	)
}

export default ViroAR
