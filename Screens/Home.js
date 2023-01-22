import React from "react";
import { View, Text, Button } from "react-native";

const Home = (props) => {
    console.log(props)
    return(
        <View>
            <Text>HOME</Text>
            <Button
                title="Go to users"
                onPress={()=>props.navigation.navigate("Users")}
            />
        </View>
    )
}

export default Home