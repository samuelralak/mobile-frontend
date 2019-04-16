import React, { Component } from 'react';
import { View, Image, Platform, StatusBar} from 'react-native';
import { ListItem , Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content,Container, Footer} from 'native-base';

export default class CoinsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <Header hasSegment style={{
            //backgroundColor:'green', 
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}} >
            <Left>
            <Button transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='menu' />
            </Button>
            </Left>
            <Body>
                <Segment>
                <Button first active>
                <Text>Overview</Text>
                </Button>
                <Button>
                <Text>News</Text>
                </Button>
                <Button last>
                <Text>Market</Text>
                </Button>
                </Segment>
            </Body>
            <Right></Right>
        </Header>
        <Content>
        <ListItem>
          <Left>
          <Thumbnail source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}}/>
          </Left>
          <Body>
          <Text>GarCoin</Text>
          </Body>
          <Right>
              <Text>
                  GHC
              </Text>
          </Right>
         </ListItem>
         <ListItem>
         <Left>
              <Text>BTC Price: $9000</Text>
              <Right>
              <Text>Price: $9999</Text>
              </Right>
          </Left>
         </ListItem>
         <Card>
            <CardItem header bordered>
              <Text>Coin Summary</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Gareth highly recommend this coin. Dont ask why, Just buy it! $$$$$$$ Can't Wait to Moon!
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://afinde-production.s3.amazonaws.com/uploads/eec74102-92bb-496a-995c-7ea4d64aa7af.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Negative Comment</Text>
            </CardItem>
            <CardItem>
            <Body>
                <Text>
                  This Coin is SHIT!
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Positive Comment</Text>
            </CardItem>
            <CardItem>
            <Body>
                <Text>
                  This Coin is AWESOME!
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Content>
          </Container>
    );
  }
}