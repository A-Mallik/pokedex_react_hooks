import React, {Component, useState, useEffect } from 'react';

const Card = (props) => {

// console.log('props',props)

const [spriteArr, setSpriteArr] = useState({});


// const {front_shiny} = props.pokemon.sprites;

const { pokemon = {} } = props;
const {name = '', sprites = {}} = pokemon
console.log('Sprites',sprites);
const {front_shiny} = sprites;
let initialCount = 0;
const maxLength = 9;
// let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png';
// console.log('shiny',front_shiny)
// console.log(sprites)
const [imgUrl, setImgUrl] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');
useEffect(()=> {
    setSpriteArr({...sprites})
},[])

function clickHandler() {
    console.log(Object.values(spriteArr));
    
    // console.log(maxLength);
    let imgArr = Object.keys(sprites).map((k) => sprites[k])
 //   console.log('imgArr', sprites);
    console.log('Img Arr Count',imgArr)
  
    if(initialCount > maxLength){
        initialCount = 0;
    }
    else if(typeof imgArr[initialCount] === 'string') {
    // if(imgArr[initialCount]) {
            setImgUrl(imgArr[initialCount]);
        //     console.log('Index',imgArr[1]);
             initialCount++;
          //   console.log(initialCount);
    }
    else{
        initialCount++;
    }

    //  else{
    //      setImgUrl('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');
    //  }
    // initialCount++;

 }

   
 return (
    <div>
        <h2 className="name" > {  name  }<br/><p className="order"></p></h2>
        <img src={imgUrl} width='200px' onClick={clickHandler}/>
        <p className="id"></p>
        <p className="baseEXP"> </p>
        <p className="url">  </p>
    </div>
    )
//  }    
}

export default Card;