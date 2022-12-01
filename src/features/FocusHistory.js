import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';

export const FocusHistory = ({history}) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
});
