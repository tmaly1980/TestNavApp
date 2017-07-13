import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation'

// Styles
import styles from './Styles/Test2ScreenStyle'

class Test2Screen extends React.Component {
  constructor (params) {
    super(params)
    this.state = {
      id: Math.random()
    }
    console.log('CONSTRUCT Test2=' + this.state.id)
  }
  componentWillMount () {
    console.log('WILLMOUNT Test2=' + this.state.id)
  }
  componentWillReceiveProps () {
    console.log('RECEIVE PROPS Test2=' + this.state.id)
  }
  componentWillUnmount () {
    console.log('UNMOUNT Test2=' + this.state.id)
  }
  gotoOther (route, params) {
    var action = NavigationActions.navigate({ routeName: route, params: params })
    var reset = NavigationActions.reset({ index: 0, actions: [action] })
    this.props.navigation.dispatch(reset)
  }
  render () {
    console.log('RENDER Test2=' + this.state.id)
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Test2Screen</Text>
          <TouchableOpacity onPress={() => this.gotoOther('Test1Screen', {stuff: 'test1y'})} >
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

export default connect(mapStateToProps, mapDispatchToProps)(Test2Screen)
