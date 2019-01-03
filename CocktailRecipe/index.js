import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CocktailList from './CocktailList'
import CocktailDetail from './CocktailDetail'

const AppNavigator = createStackNavigator({
  List: {
    screen: CocktailList,
    navigationOptions: {
      title: '칵테일 목록'
    }
  },
  Detail: {
    screen: CocktailDetail,
    navigationOptions: {
      title: '상세'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

class CocktailRecipe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CocktailRecipe
