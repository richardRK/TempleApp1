import React, { useState, useEffect, useCallback } from "react";

import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/temples";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const TempleDetailScreen = (props) => {
  const availableTemples = useSelector((state) => state.temples.temples);

  const templeId = props.route.params.param1;

  const currenttempleIsFavorite = useSelector((state) =>
    state.temples.favoriteTemples.some((temple) => temple.id === templeId)
  );

  const selectedtemple = availableTemples.find(
    (temple) => temple.id === templeId
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(templeId));
  }, [dispatch, templeId]);

  useEffect(() => {
    // props.navigation.setParams({ templeTitle: selectedtemple.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currenttempleIsFavorite });
  }, [currenttempleIsFavorite]);

  return (
    <ScrollView>
      <Image source={selectedtemple.imageUrl} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedtemple.details}</DefaultText>
        {/* <DefaultText>{selectedtemple.duration}m</DefaultText>
        <DefaultText>{selectedtemple.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedtemple.affordability.toUpperCase()}</DefaultText> */}
      </View>
      {/* <Text style={styles.title}>Ingredients</Text>
      {selectedtemple.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedtemple.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
};

TempleDetailScreen.propTypes = {};

TempleDetailScreen.navigationOptions = (navigationData) => {
  const i2 = navigationData;

  //   const templeId = navigationData.navigation.getParam("templeId");
  //   const templeTitle = navigationData.navigation.getParam("templeTitle");
  //   const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  //   const isFavorite = navigationData.navigation.getParam("isFav");

  //   //const selectedtemple = templeS.find((temple) => temple.id === templeId);
  //   return {
  //     headerTitle: templeTitle,
  //     headerRight: (
  //       <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //         <Item
  //           title="Favorite"
  //           iconName={isFavorite ? "ios-star" : "ios-star-outline"}
  //           onPress={toggleFavorite}
  //         />
  //       </HeaderButtons>
  //     ),
  //   };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default TempleDetailScreen;
