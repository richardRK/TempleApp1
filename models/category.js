import PropTypes from "prop-types";

class Category {
  constructor(id, title, color, image) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.image = image;
  }
}

Category.propTypes = {
  image: PropTypes.any,
};

export default Category;
