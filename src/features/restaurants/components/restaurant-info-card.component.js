import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]}
  background-color: ${props => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
  padding: ${props => props.theme.space[3]}
  color: ${props => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {name = 'soho', photos = [], address = 'majoro street'} = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
