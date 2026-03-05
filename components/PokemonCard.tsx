
import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'

interface PokemonCardProps{
    name :string;
    url:string;
}


export default function PokemonCard(props:PokemonCardProps) {
    function getPokemonImage(url:string){
        const id =url.split('/')[6]

        return(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        }
    const pokemonImageURL = getPokemonImage(props.url)
    
  return (
    <View>
        <Image source={{uri : pokemonImageURL}} style = {{width:100,height:100}}></Image>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </View>

  )
}