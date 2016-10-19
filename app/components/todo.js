import React, { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, CheckBox, ListItem, Icon, Button } from 'native-base';

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
  remove(id){
    this.props.removeTodo(id);
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

          <Title>NativeBase To-do App</Title>


        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-between' }} >


          <View >

            {(this.state.displayType === 'all') ?   //eslint-disable-line
            // console.log("Hello")


            this.props.todos.map((item, index) => {//eslint-disable-line

              return (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <ListItem style={{ flex: 1, flexDirection: 'row' }}>
                    <CheckBox onPress={this.toggle.bind(this, index)}  checked={item.completed} />
                    <Text>
                      {item.text}</Text></ListItem>
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
                    <Text style={{alignSelf: 'center'}}
                      onPress={this.toggle.bind(this, index)}>
                      {item.text}
                    </Text>

                      <Icon name="md-trash" style={{ color: '#000000' }} onPress={this.remove.bind(this, index)}/>


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


        </Content>
        <View
          style={{ width, alignSelf: 'flex-end', flex: 0, padding: 5, flexDirection: 'row' }}
        >
          <InputGroup
            borderType="underline"
            style={{ flex: 0.9 }}
          >
            <Input
              placeholder="Type Your Text Here"
              style={{

              }}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              onSubmitEditing={this.onSubmit.bind(this)}//eslint-disable-line
            />
          </InputGroup>
          <Button
            style={{ flex: 0.1, marginLeft: 15 }}
            onPress={this.onSubmit.bind(this)} > Send </Button>
        </View>
      </Container>
    );
  }
}
