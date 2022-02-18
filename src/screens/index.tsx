import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useDispatch} from "react-redux";

import {AboutScreen} from './About/About';
import QuotesScreen from "./Quotes/Quotes";
import {HomeStackParams, MainStackParams} from './navigation-types';
import {startUpdate, stopUpdate} from "../store/actions";

const Tab = createBottomTabNavigator<HomeStackParams>();
const Stack = createStackNavigator<MainStackParams>();

const BottomTabNavigator =  () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'О программе'}}
        listeners={() => ({
          tabPress: () => {
            dispatch(stopUpdate());
          },
        })}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={{title: 'Котировки'}}
        listeners={() => ({
          tabPress: () => {
            dispatch(startUpdate());
          },
        })}
      />
    </Tab.Navigator>
  )
};

export const MainStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => null,
        headerTransparent: true,
        headerTitle: () => null,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{}}
      />
    </Stack.Navigator>
  )
};
