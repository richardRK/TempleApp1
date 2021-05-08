import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
  FlatList,
} from "react-native";

import { Images, nowTheme, articles, tabs } from "../constants";

import Articles from "../screens/Articles";

import { Block, Text, Button as GaButton, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

import { Card1 } from "../components";

import PropTypes from "prop-types";

const FavoritesScreen = (props) => {
  const scrollX = new Animated.Value(0);
  const cards = [articles];

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, width }}
      >
        <Block flex style={styles.group}>
          {/* <Articles /> */}
          <Block flex card center shadow style={styles.category}>
            <ImageBackground
              source={Images.Products["path"]}
              style={[
                styles.imageBlock,
                { width: width - theme.SIZES.BASE * 2, height: 152 },
              ]}
              imageStyle={{
                width: width - theme.SIZES.BASE * 2,
                height: 252,
              }}
            >
              <Block style={styles.categoryTitle}>
                <Text size={18} bold color={theme.COLORS.WHITE}>
                  View article
                </Text>
              </Block>
            </ImageBackground>
          </Block>
          <ScrollView
            horizontal={true}
            style={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={{
              width: width * 2,
            }}
          ></ScrollView>
        </Block>
      </ScrollView>
    </Block>
  );
};

FavoritesScreen.propTypes = {};

const styles = StyleSheet.create({
  title: {
    fontFamily: "montserrat-bold",
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
    marginHorizontal: 10,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  productTitle: {
    color: nowTheme.COLORS.PRIMARY,
    textAlign: "center",
    fontFamily: "montserrat-bold",
    fontSize: 18,
  },
});

export default FavoritesScreen;
