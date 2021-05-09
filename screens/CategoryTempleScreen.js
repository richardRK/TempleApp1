import React from "react";
import { useSelector } from "react-redux";

import { TEMPLES } from "../data/dummy-data";
import TempleList from "../components/TempleList";

const CategoryTempleScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableTemples = useSelector(
    (state) => state.temples.filteredTemples
  );

  const displayedTemples = availableTemples.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <TempleList listData={displayedTemples} navigation={props.navigation} />
  );
};

CategoryTempleScreen.navigationOptions = (navigationData) => {
  //   const catId = navigationData.navigation.getParam("categoryId");

  //   const selectedCategory = TEMPLES.find((x) =>
  //     String(x.categoryIds).includes(catId)
  //   );

  //   if (!selectedCategory) return null;

  return {
    headerTitle: "Near By Temples",
  };
};

export default CategoryTempleScreen;
