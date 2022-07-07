import toDos from './toDos.js';

export default class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = Date.now().toString();
    this.index = toDos.length + 1;
  }
}
