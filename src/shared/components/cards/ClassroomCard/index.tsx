// Dependencies
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Types
import {ClassroomCardProps} from './types';

// StyleSheet
import styles from './styles';

function ClassroomCard({
  id,
  name,
  description,
  onPress,
}: ClassroomCardProps): React.ReactElement {
  return (
    <TouchableOpacity
      style={styles.layout}
      onPress={() => onPress(id)}
      activeOpacity={0.8}>
      <View style={styles.inline}>
        <View style={styles.icon}>
          <Text style={styles.iconTxt}>{name.charAt(0)}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ClassroomCard;
