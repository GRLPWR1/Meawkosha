import React from 'react';
import Data from '../DataForCardlist/Data';
import CardApp from '../Card/Card'

function Cardlist({posts}) {
    
    return (
    <div className="row my-5">{posts.map((post) => (
      <div key={post.id} className="col-3">
        <CardApp image={post.image} text={post.text}/>           
        </div>
    ))}
  </div>
  )
}


export default Cardlist;