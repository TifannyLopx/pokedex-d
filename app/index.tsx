import { useEffect,useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PokemonCard from "../components/PokemonCard";

export default function Index() {
  const [results,setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);
  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <ScrollView>
    <View>
      <Text>{results[250]?.name}</Text>
      {
        results.map((item)=>{
          return <PokemonCard key={item.name} name={item.name} url={item.url}/>
        })
      }
    </View>
    </ScrollView>
  );
}
