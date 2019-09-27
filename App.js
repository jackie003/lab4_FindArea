import React from 'react';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import AreaCal from './components/AreaCal';
import Areainformation from './components/Areainformation';
import Areainfor from './components/Areainfor';
const RootStack = createStackNavigator({
  AreaCal: AreaCal,
  Areainfor : Areainfor
 },{
  initialRouteName: 'AreaCal',
  initialRouteParams: 'Areainfor'
 })
 
 export default createAppContainer(RootStack);
 