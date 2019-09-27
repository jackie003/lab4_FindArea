import React from 'react';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import AreaCal from './components/AreaCal';
import Areainformation from './components/Areainformation';
import test from './components/test';
const RootStack = createStackNavigator({
  Cal: AreaCal,
  Information: Areainformation,
  test : test
 },{
  initialRouteName: 'Cal',
  initialRouteParams: 'test'
 })
 
 export default createAppContainer(RootStack);
 