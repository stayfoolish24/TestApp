import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import data from './data'

class CocktailList extends Component {
  style = StyleSheet.create({
    button: {
      padding: 12
    },
    text: {
      textAlign: 'center'
    }
  })

  go = key => {
    this.props.navigation.navigate('Detail', { key })
  }

  renderItem = dataItem => {
    return (
      <TouchableOpacity
        onPress={() => this.go(dataItem.item.key)}
        style={this.style.button}
      >
        <Text style={this.style.text}>{dataItem.item.label} </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={data} renderItem={this.renderItem} />
      </View>
    )
  }
}

export default CocktailList
