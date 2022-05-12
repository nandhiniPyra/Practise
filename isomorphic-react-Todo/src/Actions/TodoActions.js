import Reflux from 'reflux'

const TodoAction = Reflux.createActions([
  'toggleItem',
  'toggleAllItems',
  'addItem',
  'removeItem',
  'clearCompleted',
  'editItem'
])

export default TodoAction
