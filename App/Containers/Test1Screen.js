import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation'

// Styles
import styles from './Styles/Test1ScreenStyle'

class Test1Screen extends React.Component {
  constructor (params) {
    super(params)
    this.state = {
      id: Math.random()
    }
    console.log('CONSTRUCT Test1=' + this.state.id)
  }
  componentWillMount () {
    console.log('WILLMOUNT Test1=' + this.state.id)
  }
  componentWillReceiveProps () {
    console.log('RECEIVE PROPS Test1=' + this.state.id)
  }
  componentWillUnmount () {
    console.log('UNMOUNT Test1=' + this.state.id)
  }
  gotoOther (route, params) {
    var action = NavigationActions.navigate({ routeName: route, params: params })
    var reset = NavigationActions.reset({ index: 0, actions: [action] })
    this.props.navigation.dispatch(reset)
  }
  render () {
    console.log('RENDER Test1=' + this.state.id)
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Test1Screen</Text>
          <TouchableOpacity onPress={() => this.gotoOther('Test2Screen', {stuff: 'test2y'})} >
            <Text>GOTO Test2</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1Screen)
