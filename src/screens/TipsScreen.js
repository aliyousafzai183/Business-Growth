import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Tips } from '../database/data';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../themes/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../routes/RouteName';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: colors.text,
    textAlign: 'center',
    marginBottom:20
  },
  tipContainer: {
    padding: 10
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color:colors.text
  },
  author: {
    fontSize: 14
  },
  sectionContainer: {
    marginBottom: 20,
    backgroundColor: colors.center,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
