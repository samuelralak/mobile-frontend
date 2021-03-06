import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content, Container, Footer ,List} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class PriceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <List>
                <ListItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' }} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20 }}>BitCoin</Text>
                    </Body>
                    <Right>
                        <Text style={{ fontSize: 14 }} >
                            BTC
              </Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Grid>
                        <Col>
                            <Text>1.000</Text>
                            <Text style={{ fontSize: 10 }} >
                                BTC
              </Text>
                        </Col>
                        <Col>
                            <Text>$5,942.78</Text>
                            <Text style={{ fontSize: 10 }} >
                                USD
              </Text>
                        </Col>
                    </Grid>
                </ListItem>
            </List>
        );
    }
}
