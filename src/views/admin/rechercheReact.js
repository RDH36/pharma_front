import React from "react";
import axios from "axios";
import { values } from "lodash";

const REQUEST_URL = "https://jonasjacek.github.io/colors/data.json";
const REQUEST_URL2 = "http://localhost:8083/pharmacie/listPharmacieAttente";

export class Search extends React.Component {
  state = {
    data: null,
    search: "",
    color: "",
    persons: [],
  };
  // fetch data
  componentDidMount() {
    fetch(REQUEST_URL2)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  /*
  componentDidMount() {
    const user={
      nomMedecin:this.state.search,
    }
    axios.post("http://localhost:8080/api/rechercheMedecin", user)
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
            })
  }*/
  //recherche
  onSearch = (e) => {
    e.preventDefault();

    const mot = this.state.search;
    axios
      .get(`http://localhost:8080/api/rechercheMedecin?mot=${mot}`)
      .then((response) => {
        if (response.data != null) {
          this.setState({ [e.target.id]: e.target.value });
        }
      });
  };
  // Search input
  onInput = (e) => this.setState({ [e.target.id]: e.target.value });
  // Select the wrapper and toggle class 'focus'
  onFocus = (e) => e.target.parentNode.parentNode.classList.add("focus");
  onBlur = (e) => e.target.parentNode.parentNode.classList.remove("focus");
  // Select item
  onClickItem = (item) =>
    this.setState({
      search: "",
      color: item,
    });

  render() {
    let { data, search, color } = this.state;
    if (!data) {
      return <p>Loading</p>;
    }
    const mots = search.split(" ");

    let query =
      "item => item.nomMedecin.toLowerCase().includes(" +
      mots[0] +
      ".toLowerCase()) || item.prenomMedecin.toLowerCase().includes(" +
      mots[0] +
      ".toLowerCase()) || item.adresseID.quartier.toLowerCase().includes(" +
      mots[0] +
      ".toLowerCase()) || item.adresseID.commune.toLowerCase().includes(" +
      mots[0] +
      ".toLowerCase())";

    let filtered = data.filter(
      (item) =>
        item.nomMedecin.toLowerCase().includes(search.toLowerCase()) ||
        item.prenomMedecin.toLowerCase().includes(search.toLowerCase()) ||
        item.adresseID.quartier.toLowerCase().includes(search.toLowerCase()) ||
        item.adresseID.commune.toLowerCase().includes(search.toLowerCase())
    );

    /* if(mots.length>1){
      for (let i=1;i<mots.length;i++){
        query =query+" && item => item.nomMedecin.toLowerCase().includes("+mots[i]+".toLowerCase()) || item.prenomMedecin.toLowerCase().includes("+mots[i]+".toLowerCase()) || item.adresseID.quartier.toLowerCase().includes("+mots[i]+".toLowerCase()) || item.adresseID.commune.toLowerCase().includes("+mots[i]+".toLowerCase())"
      }
    }*/
    //let filtered = data.filter(query);

    return (
      <div>
        <div className="wrapper">
          <div className="search">
            <input
              id="search"
              type="search"
              value={this.state.search}
              placeholder="Chercher un docteur"
              onChange={this.onInput}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoComplete="off"
            />
            <i className="bx bx-search"></i>
          </div>
          {search.length > 1 && filtered.length > 0 && (
            <ul className="list">
              {filtered.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <li onClick={() => this.onClickItem(item)}>
                  {" "}
                  {item.nomMedecin} {item.adresseID.commune}{" "}
                  {item.adresseID.quartier}{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
        {color && (
          <p className="result">
            <b>Color:</b>
            {color.name}
            <span
              className="box"
              style={{ backgroundColor: color.hexString }}
            />
            {color.hexString}
          </p>
        )}
      </div>
    );
  }
}

export default Search;
