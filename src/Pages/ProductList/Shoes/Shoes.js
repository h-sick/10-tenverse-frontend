import React from "react";
import Nav from "../../../Components/Nav/Nav";
import Banner from "../../../Components/Nav/Banner/Banner";
import Header from "../Components/Header/Header";
import TopFilterBar from "../Components/TopfilterBar/TopFilterBar";
import SideFilterBar from "../Components/SideFilterBar/SideFilterBar";
import ItemList from "../Components/ItemList/ItemList";
import Footer from "../../../Components/Footer/Footer";
import { shoesListAPI, filterAPI, gif } from "../../../config";
import "./Shoes.scss";

const headerData = {
  links: [
    { linkText: "Home", linkTo: "/" },
    { linkText: "신발", linkTo: "/shoes" },
  ],
  title: "SHOES",
  imgUrl:
    "https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg",
};
const limit = 20;
let filterQueryString = [];

class Shoes extends React.Component {
  constructor() {
    super();
    this.state = {
      itemDatas: [],
      filterDatas: [],
      sortedByHighPrice: true,
      offset: 0,
      loading: false,
    };
  }

  handleList = (i) => {
    this.setState({ sortedByHighPrice: !Boolean(i) });
  };

  handleColorNumber = (e) => {
    this.setState({ clickedColorNumber: e });
  };

  onScroll = (e) => {
    const { offset, itemDatas } = this.state;
    const scroll = e.srcElement.scrollingElement.scrollTop;

    let queryString = this.props.location.search;
    let splitString = queryString.split("&");

    splitString.splice(0, 2);
    splitString = splitString.join("&");
    splitString = "&".concat(splitString);

    const fetchUrl = queryString ? filterAPI : shoesListAPI;
    const scrollCondition = scroll > 1500 + 2000 * offset;

    if (scrollCondition) {
      this.setState({ offset: offset + 1, loading: true });
      fetch(
        `${fetchUrl}?page=${offset}&limit=${limit}${
          queryString.length ? splitString : ""
        }`
      )
        .then((res) => res.json())
        .then(({ products }) => {
          this.setState(
            {
              itemDatas: [...itemDatas, ...products],
            },
            () => {
              this.setState({ loading: false });
            }
          );
        })
        .catch(
          (error) => console.error("Error:", error),
          this.setState({ fetchErr: true })
        );
    }
  };

  handleFilterUrl = (name, value) => {
    const newString = `&${name}=${value}`;

    filterQueryString.includes(newString)
      ? filterQueryString.splice(filterQueryString.indexOf(newString), 1)
      : filterQueryString.push(`${newString}`);

    const joinString = filterQueryString.join("");
    const newUrl = `?page=0&limit=20${joinString}`;
    this.props.history.push(`/category/shoes${newUrl}`);
  };

  componentDidMount() {
    fetch(`${shoesListAPI}?page=${this.state.offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ itemDatas: json.products, filterDatas: json.filters });
      });
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  componentDidUpdate(prevProps) {
    const queryString = this.props.location.search;

    if (prevProps.location.search !== queryString) {
      fetch(`${shoesListAPI}/filter${queryString}`)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            itemDatas: json.products,
            filterDatas: json.filters,
          });
        });
      this.setState({ offset: 0 });
    }
  }

  render() {
    const { itemDatas, loading } = this.state;
    const { sortedByHighPrice, filterDatas } = this.state;
    // console.log(this.state.scroll);

    return (
      <section className="Shoes">
        <div className={`loadingModal ${loading ? "" : "hidden"}`}>
          <img src={gif} alt="preloader gif" />
        </div>
        <Banner />
        <Nav />
        <Header
          links={headerData.links}
          title={headerData.title}
          imgUrl={headerData.imgUrl}
        />
        {itemDatas && (
          <TopFilterBar
            dataNumber={itemDatas.length}
            sortedByPrice={this.handleList}
          />
        )}
        <main>
          <div className="mainBox">
            <SideFilterBar
              filterDatas={filterDatas}
              handleFilterChange={this.handleFilterUrl}
            />
            {itemDatas && (
              <ItemList datas={itemDatas} handleSort={sortedByHighPrice} />
            )}
          </div>
        </main>
        <Footer />
      </section>
    );
  }
}

export default Shoes;
