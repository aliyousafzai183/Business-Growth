import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../themes/colors';
import styles from '../styles/TipDetailScreenStyles';

const TipDetailScreen = ({ route }) => {
  const { title, description } = route.params;

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </LinearGradient>
  );
};

export default TipDetailScreen;