import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
import { fetchChars } from '../actions';

import './Views.css';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching ? <Loader type='TailSpin' color='#3498db' height='100' width='100' /> : <CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchChars
  }
)(CharacterListView);
