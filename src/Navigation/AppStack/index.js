import React from "react";

import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Colors, GamesIcon, LeaderboardIcon, FindIcon, SettingsIcon } from "@Config";

import Games from './GameStack'
import Leaderboard from "@Screens/Leaderboard";
import Connect from "@Screens/Connect";
import Settings from "@Screens/Settings";

const ICON_WIDTH = 30
const ICON_HEIGHT = 30

const BottomTab = createBottomTabNavigator();

export default () => {

    return (
        <BottomTab.Navigator
            initialRouteName={'Games'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <BottomTab.Screen
                name={"Games"}
                component={Games}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <GamesIcon
                                width={ICON_WIDTH}
                                height={ICON_HEIGHT}
                                fill={focused ? Colors.primary : Colors.gray}
                            />
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Leaderboard"}
                component={Leaderboard}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <LeaderboardIcon
                                width={ICON_WIDTH}
                                height={ICON_HEIGHT}
                                fill={focused ? Colors.primary : Colors.gray}
                            />
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Connect"}
                component={Connect}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FindIcon
                                width={ICON_WIDTH}
                                height={ICON_HEIGHT}
                                fill={focused ? Colors.primary : Colors.gray}
                            />
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <SettingsIcon
                                width={ICON_WIDTH}
                                height={ICON_HEIGHT}
                                fill={focused ? Colors.primary : Colors.gray}
                            />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};