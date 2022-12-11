import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
  padding: ${props => props.theme.space[3]};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
`;
const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;
export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'soho',
    photos = [],
    address = 'majoro street',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{color: 'red'}}>
              Contemporarily
            </Text>
          )}
          <View>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </View>
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
