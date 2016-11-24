import React, { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Icon } from 'native-base';
import { View, Text, Dimensions } from 'react-native';

import TodoItem from './TodoItem';

const { width } = Dimensions.get('window');

export default class Todo extends Component {

  static propTypes = {
    removeTodo: React.PropTypes.func,
    setVisibilityFilter: React.PropTypes.func,
    toggleTodo: React.PropTypes.func,
    todos: React.PropTypes.array,
    displayType: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { inputText: '', displayType: 'all' };
  }

  onSubmit() {
    if (this.state.inputText.length > 0) {
    this.props.addTodo(this.state.inputText);//eslint-disable-line
      this.setState({
        inputText: '',
      });
    }
  }

  remove(id) {
    this.props.removeTodo(id);
  }

  toggle(id) {
    this.props.toggleTodo(id);
  }

  renderTodoList() {
    if ((this.props.displayType === 'all')) {
      return this.props.todos.map((item, index) =>
        <TodoItem
          toggle={() => this.toggle(index)}
          remove={() => this.remove(index)}
          item={item}
          key={index}
        />
      );
    } else if (this.props.displayType === 'completed') {
      const completed = this.props.todos.filter(item => item.completed).length;
      if (completed > 0) {
        return this.props.todos.map((item, index) => {
          if (item.completed === true) {
            return (<TodoItem
              toggle={() => this.toggle(index)}
              remove={() => this.remove(index)}
              item={item}
              key={index}
            />);
          }

          return null;
        });
      }
      return <View style={{ alignItems: 'center', paddingTop: 10 }}><Text>No Completed Data</Text></View>;
    }

    return this.props.todos.map((item, index) => {
      if (item.completed === false) {
        return (
          <TodoItem
            toggle={() => this.toggle(index)}
            remove={() => this.remove(index)}
            item={item}
            key={index}
          />
        );
      }
      return null;
    });
  }

  render() {
    return (
      <Container>
        <Header >
          <Title>NativeBase To-do App</Title>
        </Header>

        <Content contentContainerStyle={{ justifyContent: 'space-between' }} >
          <View >
            <List>
              {this.renderTodoList()}
            </List>

            {this.props.todos.length > 0 && <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-around',
                width,
                marginTop: 50 }}
            >
              <Button
                transparent
                bordered={this.props.displayType === 'all'}
                onPress={() => this.props.setVisibilityFilter('all')}
              >All</Button>

              <Button
                transparent
                bordered={this.props.displayType === 'completed'}
                onPress={() => this.props.setVisibilityFilter('completed')}
              >Completed</Button>

              <Button
                transparent
                bordered={this.props.displayType === 'active'}
                onPress={() => this.props.setVisibilityFilter('active')}
              >Active</Button>

            </View>}
          </View>
        </Content>

        <View
          style={{
            alignSelf: 'flex-end',
            flex: 0,
            padding: 5,
            flexDirection: 'row',
          }}
        >
          <InputGroup
            borderType="underline"
            style={{ flex: 0.9 }}
          >
            <Input
              placeholder="Type Your Text Here"
              value={this.state.inputText}
              onChangeText={inputText => this.setState({ inputText })}
              onSubmitEditing={() => this.onSubmit()}
              maxLength={35}
            />
          </InputGroup>
          <Button
            style={{ flex: 0.1, marginLeft: 15 }}
            onPress={() => this.onSubmit()}
          > Add </Button>
        </View>
      </Container>
    );
  }
}
