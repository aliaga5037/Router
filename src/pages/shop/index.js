import { Component } from "react";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = async () => {
    const response = await fetch(
      "https://fortnite-api.com/v2/cosmetics/br/new"
    );
    const { data } = await response.json();
    this.setState({ items: data.items });
  };
  render() {
    return (
      <div>
        <h1>Shop</h1>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
