import axios from 'axios';
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('http://10.0.2.2:3000/albums')
            .then(response => {
                this.setState({
                    albums: response.data
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return (
                <AlbumDetail
                    key={album.title}
                    album={album} />
            )
        })
    }

    render() {

        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;