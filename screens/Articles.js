import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card } from '../components/';

class Articles extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
      <Text size={16} style={styles.title}>
        Cards
      </Text>
        <Card item={articles} horizontal />
        <Block flex row>
          <Card item={articles} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles} />
        </Block>
        <Card item={articles} horizontal />
        <Card item={articles} full />
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }
});

export default Articles;
