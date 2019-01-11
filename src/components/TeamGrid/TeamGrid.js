import React, { Component } from 'react';
import api from '../../services/api';
import Heart from '../../assets/logos/heart.svg';
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
      this.setState({ loading: true }); 
      try {
          await api.get('/team.json')
                    .then(result => {
                  this.setState({
                      members: result.data
                  });
              });
      } catch (err) {
          console.log('Error loading response: ', err);
      }
  }
  
  componentDidMount() {
    this.loadMembers();
  }

  render() {
    const { members } = this.state
    return (
      <section className="bg-red">
        <div className="grid-wrapper">
            <div className="grid container is-fluid">
              {
                members.map(member => (  
                    <div className="card">
                      <div className="card-content">
                        <figure className="avatar">
                          <img src={member.avatar} alt={member.name} />
                        </figure>
                        <h3 className="member-name" key={member.name}>{member.name}</h3>
                        <div><a href={member.twitter} className="member-twitter">@{member.name}</a></div>
                        <span className="member-role">{member.role}</span>
                        <p className="member-tweet"><i>"{member.tweet}"</i></p>
                        <figure className="icon-heart is-pulled-right"><img src={Heart} alt="Heart icon" />1</figure>
                      </div>
                  </div>  
                ))
              }
          </div>
        </div>
      </section>
    )
  }
}


 