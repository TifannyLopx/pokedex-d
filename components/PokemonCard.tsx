import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  function getPokemonImage(url: string) {
    const id = url.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  const pokemonImageURL = getPokemonImage(props.url);

  return (
    <View>
      <Pressable onPress={() => router.push(`../pokemon/${props.name}`)}>
        <Image
          source={{ uri: pokemonImageURL }}
          style={{ width: 100, height: 100 }}
        ></Image>
      </Pressable>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </View>
  );
}
