import { useEffect,useState } from "react";
import { Text, View } from "react-native";

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
    <View>
      <Text>{results[250]?.name}</Text>
      {
        results.map((item)=>{
          return <Text key={item.name}>{item.name}</Text>
        })
      }
    </View>
  );
}
