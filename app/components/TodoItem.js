import React, { PropTypes } from 'react';
import { Text, Icon, ListItem, CheckBox } from 'native-base';

const TodoItem = ({ toggle, remove, item }) => (
  <ListItem style={{ flex: 1 }}>
    <CheckBox onPress={toggle} checked={item.completed} />
    <Text style={{ alignSelf: 'center' }}>
      {item.text}
    </Text>
    <Icon name="md-trash" style={{ color: '#000000' }} onPress={remove} />
  </ListItem>
);

TodoItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired, //eslint-disable-line
};

export default TodoItem;
