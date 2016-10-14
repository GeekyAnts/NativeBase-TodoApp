import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, InputGroup, Input, CheckBox, ListItem } from 'native-base';

import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

let { width } = Dimensions.get('window');//eslint-disable-line
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', displayType: 'all' };
  }
  toggle(id) {//eslint-disable-line
    this.props.setVisibilityFilter(id);//eslint-disable-line
    // console.log(this.props);
  }
  listAll() {//eslint-disable-line
    // console.log(this.props.todos[0].completed);
    // console.log(this.props.todos.map(item => "Hello"));
    // this.props.todos.map(item =>  <Text>hELLO</Text>);
  }
  onSubmit() {
    //  console.log(textList);
    // textList.push(this.state.text);
    // console.log(textList);

    this.props.addTodo(this.state.text);//eslint-disable-line
    this.setState({

      // textList.push(this.state.text),
      text: '',
    });
  }
  render() {
    // {console.log(this.state.text)}
    // {console.log(this.props.done)}
    // console.log(this.props);
    return (
      <Container>
        <Header >
          <Button transparent>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>ToDo</Title>

          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }} >

          <View style={{ flex: 0.99 }}>

            {(this.state.displayType === 'all') ?   //eslint-disable-line
            // console.log("Hello")

            this.props.todos.map((item, index) => {//eslint-disable-line

              return (<View key={index} style={{ flexDirection: 'row' }}>
                <ListItem style={{ flex: 1 }}>
                  <CheckBox onPress={this.toggle.bind(this, index)}  checked={item.completed} />
                  <Text>
                    {item.text}</Text>
                </ListItem>
              </View>)//eslint-disable-line
            }) : (
              (this.state.displayType === 'completed') ?
            this.props.todos.map((item, index) => {//eslint-disable-line
              return (
              (item.completed === true) ?
              (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <ListItem style={{ flex: 1 }}>
                    <CheckBox checked={item.completed} />
                    <Text
                      onPress={this.toggle.bind(this, index)}>
                      {item.text}
                    </Text>
                  </ListItem>
                </View>
            ) : null
          ) })://eslint-disable-line
            this.props.todos.map((item, index) => {//eslint-disable-line
              return (
              (item.completed === false) ?
              (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <ListItem style={{ flex: 1 }}>
                    <CheckBox checked={item.completed} />
                    <Text
                    onPress={this.toggle.bind(this, index)}//eslint-disable-line
                    >
                      {item.text}
                    </Text>
                  </ListItem>
                </View>
            ) : null
            ); })
          )
         }
            {/* {console.log(this.props.done)} */}
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width,
                marginTop: 50 }}
            >
              <TouchableOpacity onPress={() => this.setState({ displayType: 'all' })}><Text>All</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ displayType: 'completed' })}><Text>Completed</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ displayType: 'active' })}><Text>Active</Text></TouchableOpacity>


            </View>
          </View>
          <View
            style={{ height: 100, width, alignSelf: 'flex-end', flex: 0.01 }}
          >
            <InputGroup
              borderType="rounded"
              style={{ margin: 20 }}
            >
              <Input
                placeholder="Type Your Text Here"
                style={{
                }}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                onEndEditing={this.onSubmit.bind(this)}//eslint-disable-line
              />
            </InputGroup>
          </View>


        </Content>
      </Container>
    );
  }
}
