// Dependencies
import React from 'react';
import {Text, View} from 'react-native';

// Types
import {StudentCardProps} from './types';

// StyleSheet
import styles from './styles';

// Utils
import {getAgeOfStudent} from '../../../utils/date';
import Button from '../../Button';

function StudentCard({
  id,
  firstName,
  lastName,
  email,
  age,
  onPress,
}: StudentCardProps): React.ReactElement {
  return (
    <View style={styles.layout}>
      <View style={styles.inline}>
        <View style={styles.title}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <View style={styles.container}>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{getAgeOfStudent(age)} years old</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            caption={'Remove'}
            style={styles.button}
            onPress={() => onPress(id)}
          />
        </View>
      </View>
    </View>
  );
}

export default StudentCard;
