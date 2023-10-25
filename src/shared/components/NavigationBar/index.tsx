// Dependencies
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// StyleSheet
import styles from './styles';

// Types
import {NavigationItem} from './types';

// Utils
import {optionItems} from './utils';

function NavigationBar({
  state: {index: tabIndex},
  navigation,
}: BottomTabBarProps): JSX.Element {
  return (
    <View style={styles.body}>
      {optionItems.map((option: NavigationItem, index: number) => {
        const isActive = tabIndex === index;
        return (
          <TouchableOpacity
            key={`--navigation-icon-${index.toString()}`}
            style={[styles.button, isActive && styles.active]}
            onPress={() => navigation.navigate(option.path)}>
            <Text style={[styles.text, isActive && styles.activeText]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default NavigationBar;
