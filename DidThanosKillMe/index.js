/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'

class App extends Component {
  constructor() {
    super()

    this.state = {
      thanosNumber: null
    }

    this.execute()
  }
  result = () => {
    let resultText = ''
    if (this.state.thanosNumber === null) {
      resultText = ''
    } else if (this.state.thanosNumber < 0.5) {
      resultText = '우주의 균형을 위해 먼지가..'
    } else {
      resultText = '당신은 살아남았습니다.'
    }
    return <Text style={styles.text}>{resultText}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.result()}
        <View>
          <Button title={'click'} onPress={this.click} />
        </View>
      </View>
    )
  }
  click = () => {
    // 기록이 없으면 새로 생성하고 저장
    const newNumber = Math.random()
    this.setState({ thanosNumber: newNumber })
    AsyncStorage.setItem('thanosNumber', newNumber.toString())
  }
  execute = async () => {
    // 데이터를 가져온 다음
    const result = await AsyncStorage.getItem('thanosNumber')
    if (result) {
      // 기록이 있으면 기록을 활용함
      this.setState({ thanosNumber: Number(result) })
    } else {
      this.click()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20
  }
})

export default App
