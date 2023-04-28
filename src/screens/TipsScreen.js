import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Tips } from '../database/data';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../themes/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../routes/RouteName';
import styles from '../styles/TipsScreenStyles';

const TipsScreen = ({ route, navigation }) => {
  const category = route.params?.category;
  const [tipsData, setTipsData] = useState(Tips);

  const getCategoryName = (index) => {
    const categories = [
      "Leadership and Management",
      "Marketing and Sales",
      "Productivity and Time Management",
      "Financial Planning and Budgeting",
      "Customer Service and Satisfaction",
      "HR and Employee Relations",
      "Business Strategy and Planning",
      "Technology and Innovation",
      "Networking and Relationship Building",
      "Personal Development and Growth"
    ];
    return categories[index - 1];
  };

  const filteredTips = category ? tipsData.filter(tip => tip.category === getCategoryName(category)) : tipsData;

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.container}>
      <Text style={styles.title}>{category ? getCategoryName(category) : "All Categories"}</Text>
      <ScrollView>
        {filteredTips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(RouteName.TIP_DETAIL_SCREEN, { title: tip.title, description: tip.description })}
            style={styles.sectionContainer}
          >
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default TipsScreen;