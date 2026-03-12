import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function PokemonData() {
  const params = useLocalSearchParams();
  const [pokemonData, setpokemonData] = useState(null);
  useEffect(() => {
    (getpokemonData(), []);
  });
  const getpokemonData = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
    const response = await fetch(URL);
    const data = await response.json();
    setpokemonData(data);
  };
  return (
    <ScrollView>
      <View>
        <Text>{params.name}</Text>
        <Text>{JSON.stringify(pokemonData, null, 2)}</Text>
      </View>
    </ScrollView>
  );
}
