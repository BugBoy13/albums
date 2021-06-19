import React from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import Header from '../components/Header';

const HomeScreen = () => {

    return (
        <View
            style={{
                flex: 1
            }} >
            <Header
                headerText={'Albums'} />
            <AlbumList />
        </View>
    )
}

HomeScreen.navigationOptions = {
    headerShown: false
}

export default HomeScreen;