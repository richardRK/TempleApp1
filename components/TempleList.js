import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import TempleItem from "./TempleItem";

const TempleList = (props) => {
  const renderTempleItem = (itemData) => {
    return (
      <TempleItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        timings={itemData.item.timings}
        address={itemData.item.address}
        details={itemData.item.details}
        onSelectMeal={() => {
          props.navigation.navigate("TempleDetail", {
            param1: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderTempleItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default TempleList;
