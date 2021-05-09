class Temple {
  constructor(
    id,
    categoryIds,
    title,
    address,
    timings,
    imageUrl,
    details,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.address = address;
    this.timings = timings;
    this.imageUrl = imageUrl;

    this.details = details;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Temple;
