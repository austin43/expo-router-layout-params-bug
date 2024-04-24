import { View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";

export default function TestAnotherComponent() {
    const { id } = useLocalSearchParams();

    return (
        <View>{id}</View>
    )
}