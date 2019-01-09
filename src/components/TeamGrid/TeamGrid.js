import React, { Component } from 'react';
import api from '../../services/api';
//import Member from './Member';
import './TeamGrid.css';

export default class TeamGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
        members: [],
        loading: false
    };
  }
  
    async loadMembers() {
        try {
            await api.get('/team.json')
                .then(payload => payload.json())
                .then(result => {
                    this.setState({
                        members: result
                    });
                    console.log(this.state.members);
                });
        } catch (err) {
            console.log('Error loading team members: ', err);
        }
    }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="grid">
        
      </div>
    )
  }
}
