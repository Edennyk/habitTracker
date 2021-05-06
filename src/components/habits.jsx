import React, { Component } from 'react';
import Habit from './habit';

export default class Habits extends Component {
    state = {
        habits:[{name: 'Reading', count:0},
                {name: 'Eating', count:0},
                {name: 'Walking', count:0},
        ],
    };
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit habit={habit} />
                ))}
            </ul>
        );
    }
}
