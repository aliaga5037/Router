import React from "react";

class ShopItem extends React.Component {
  state = {
    item: {},
  };
  componentDidMount() {
    const {
      match: {
        params: { slug },
      },
    } = this.props;
    // const slug = this.props.match.params.slug;
    this.fetchData(slug);
  }

  fetchData = async (id) => {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const { data } = await response.json();
    this.setState({ item: data });
  };
  render() {
    return <h1>{this.state.item.name}</h1>;
  }
}

export default ShopItem;
