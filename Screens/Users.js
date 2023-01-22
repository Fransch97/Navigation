import React from "react";
import { View, Text, Button } from "react-native";

const Users = (props) => {
    return(
        <View>
            <Text>Users</Text>
            <Button title="Go to Settings" 
                onPress={()=>props.navigation.navigate("Settings")}
            />
            <Button title="Go Back" 
                onPress={()=>props.navigation.goBack()}
            />
        </View>
    )
}

export default Users;