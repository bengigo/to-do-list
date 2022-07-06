import _ from 'lodash';
import './style.css';
import displayList from './modules/displayList.js';

const toDos = [
    {
        description: 'Finish list structure',
        completed: false,
        index: 5,
    },
    {
        description: 'Load dishes',
        completed: false,
        index: 1,
    },
    {
        description: 'Put the soup to fridge',
        completed: false,
        index: 4,
    },
    {
        description: 'Check mails',
        completed: false,
        index: 3,
    },
    {
        description: 'Do yoga',
        completed: false,
        index: 2,
    },
    {
        description: 'Water plants',
        completed: false,
        index: 0,
    }
]

export default toDos;

displayList();