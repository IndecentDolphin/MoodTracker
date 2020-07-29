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
    let moodTypes = [];
   
    
    moods.forEach(mood => {
      moodTypes.push(mood.mood_type)})

    const listMoods = moodTypes.map((moodType, index) =>
  <li key={index}>{moodType}</li>)
   

    return (
      <Wrapper>
        <div>{moods && <p>These are the moods </p>}</div>
        <ul>{listMoods}</ul>
      </Wrapper>
    );
  }
}

export default MoodsList;