import React from 'react';
import {useState} from 'react';
import Card from '../Card/Card'
import Cardlist from '../Cardlist/Cardlist';

function Data() {
    const [list, setList] = useState([
        {
          image: 'https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg',
          text: 'Котик Мяо',
          age: '2 года',
          id: 1,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5b40PX9A-DdVpc6XaQzPoTuOnEZrypll57w&usqp=CAU',
          text: 'Кошечка Мяоми',
          age: '4 года',
          id: 2,
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3NiVxwb4ln1J06GY3GIxlJo3QsAw5yDgsQ&usqp=CAU',
          text: 'Кошечка Мур Мянь',
          age: '8 лет',
          id: 3,
        },
        {
            image: 'https://www.sostav.ru/images/news/2019/04/01/9iithyjt_md.jpg',
            text: 'Котик Котяо',
            age: '5 лет',
            id: 4   
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_3QwFAuIb8LBCWuAsv8wTycrmPpbdU3n1A&usqp=CAU',
            text: 'Котик Мурчао',
            age: '3 года',
            id: 5   
        }
      ]);
      const [text,setText] = useState('input text');
      const [image, setImage] = useState('input img');
    
      function handleSubmit(event){
        event.preventDefault()
    
        const post = {
          image,
          text,
          id: Date.now()
        }
    
        setList((prev) => [...prev, post])
        setText('')
        setImage('')
      }
  return (
    <>
    <main className="container my-5">
      <Cardlist posts={list}/>
    </main>
  </>

  )
}
export default Data;
