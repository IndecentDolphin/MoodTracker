import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class MoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllMoods().then((moods) => {
      this.setState({
        moods: moods.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { moods } = this.state;
    console.log("TLC: MoodsList -> render -> moods", moods);

    return (
      <Wrapper>
        <div>{moods && <p>These are the moods {moods.mood_type}</p>}</div>
      </Wrapper>
    );
  }
}

export default MoodsList;
