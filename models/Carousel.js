import PropTypes from "prop-types";

class Carousel {
  constructor(id, title, url, description) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
  }
}

Carousel.propTypes = {
    url: PropTypes.any,
};

export default Carousel;
