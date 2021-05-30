import {Text, View} from "react-native";
import * as React from "react";
import Layout from "../components/Layout";

function HomeScreen() {
    return (
        <Layout>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        </Layout>
    );
}

export default HomeScreen;
