import React from "react";
import { View, Text, Button } from "react-native";

const Settings = (props) => {
    return(
        <View>
            <Text>Settings</Text>
            <Button title="Go to Home" 
                onPress={()=>props.navigation.navigate("Home")}
            />
            <Button title="Go Back" 
                onPress={()=>props.navigation.goBack()}
            />
        </View>
    )
}

export default Settings