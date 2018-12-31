import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class MyButton extends Component {
  onPress = () => {
    if (this.props.onPress) this.props.onPress()
  }
  render() {
    return (
      <View style={this.style.button} borderRaius={8}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={this.style.text}>{this.props.label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  style = StyleSheet.create({
    button: { padding: 12, backgroundColor: '#999999' },
    text: { textAlign: 'center', color: '#ffffff' }
  })
}

export default MyButton
