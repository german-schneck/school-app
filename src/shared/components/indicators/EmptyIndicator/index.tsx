// Dependencies
import React from 'react';
import {Text, View} from 'react-native';

// Types
import {EmptyIndicatorProps} from './types';

// StyleSheet
import styles from './styles';

// Components
import Button from '../../Button';

function EmptyIndicator({
  title,
  description,
  action,
}: EmptyIndicatorProps): React.ReactElement {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      {action && (
        <View style={styles.actions}>
          <Button caption={action.text} onPress={action.onPress} />
        </View>
      )}
    </View>
  );
}

export default EmptyIndicator;
