import React from 'react';
import Data from '../DataForCardlist/Data';

const AddStoryForm = ({text, image, setText, setImage, handleSubmit}) => {
  return (
    <form className="mb-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>История: {text}</label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label>Фото: {image}</label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setImage(event.target.value)}
              value={image}
            />
          </div>
          <div className='my-3'>
          <button type="submit" className="btn btn-primary">
            Сохранить
          </button>
          </div>
        </form>
  )
}

export default AddStoryForm
