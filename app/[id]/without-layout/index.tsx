import { View, Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";

export default function WithoutLayout() {
    const { id } = useLocalSearchParams();

    return (
        <View><Text>{(typeof id).toString()}</Text></View>
    )
}