import React from 'react'

const Member = props => {
  return (
    <div className="card">
      <div className="card-content">
        <figure className="image">
          <img src={props.avatar} alt={props.name} />
        </figure>
        <h3 className="name">{props.name}</h3>
        <a href={props.twitter} className="twitter">Member</a>
        <span className="role">{props.role}</span>
        <p className="tweet">{props.tweet}</p>
      </div>
  </div>
  )
}

export default Member;
