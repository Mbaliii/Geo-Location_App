import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: -26.12226,
          longitude: 28.05355,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{
          latitude: -26.12226,
          longitude: 28.05355
        }}
          pinColor="gold"
        >
          <Callout>
            <Text>This is where you are</Text>
          </Callout>
        </Marker>

        <Circle center={{
          latitude: -26.12226,
          longitude: 28.05355,
        }} radius={100} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})
