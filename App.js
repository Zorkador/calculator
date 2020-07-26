import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Vibration, } from 'react-native';
import { useState, useEffect } from 'react';


import styles from './styles.js'



export default function App() {

  const [display, setDisplay] = useState('')
  const [preview, setPreview] = useState('')
  const [operation, setOperation] = useState('')
  var op;
  const [history, setHistory] = useState([])


  /*  3 casos problemáticos
  #1 - quando inicia o programa e clica em algum botao de calculo a operação sobe
  #2 - quanto o display é vazio e clica em algum botao de calculo a operação é executada - resolvido
  #3 - apertar o igual e dar erro, sem nada no display e preview
  #4 - preview vazia e display com valor
  */
  function handleCalculation(buttonOperation) {
    setHistory(history+[display + ' ' +  buttonOperation + ' '])
    if (display == '' && preview != '') {//caso 2
      setOperation(buttonOperation)
      op = buttonOperation
 
    } else if (display == '' && preview == '') {//caso 1
      alert('Digite algum número')
    } else if (display != '' && preview == '') {
      setOperation(buttonOperation)
      op = buttonOperation
      setPreview(display.toString())
      setDisplay('')
    } else {
      op = buttonOperation
      setOperation(buttonOperation)
      setPreview(calculation().toString())
      setDisplay('')
    }

  }

  function handleEqual() {
    op = operation;
    setDisplay(calculation().toString())
    setPreview('')
    setOperation('')
  }

  function handlePercentage() {
    setDisplay(((parseFloat(preview) * parseFloat(display)) / 100).toString())
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>CALCULATOR</Text>
        <StatusBar style="auto" />

      </View>

      <View style={styles.display}>
        <TextInput
          className='first-input'
          value={display}
          onChangeText={(e) => setDisplay(e)}
          style={styles.displayFont}
          placeholderTextColor="#000" />

        <Text style={{ width: 275, marginTop: -83, textAlign: 'right' }}>
          {preview}
        </Text>
        <Text style={{ marginTop: -20, marginLeft: 10 }}>
          {operation}
        </Text>

      </View>

      <View style={styles.packs}>

        <TouchableHighlight onPress={() => { eraseEverything() }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>CE</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handlePercentage() }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>%</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handleCalculation('/') }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>/</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handleCalculation('*') }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>X</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.packs}>
        <TouchableHighlight onPress={() => { setDisplay(display + 7) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>7</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 8) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>8</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 9) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>9</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handleCalculation('-') }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>-</Text>
          </View>
        </TouchableHighlight>
      </View>


      <View style={styles.packs}>

        <TouchableHighlight onPress={() => { setDisplay(display + 4) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>4</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 5) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>5</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 6) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>6</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handleCalculation('+') }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>+</Text>
          </View>
        </TouchableHighlight>

      </View>

      <View style={styles.packs}>

        <TouchableHighlight onPress={() => { setDisplay(display + 1) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>1</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 2) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>2</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + 3) }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>3</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.buttonh} >
            <Text style={styles.fontsize}> </Text>
          </View>
        </TouchableHighlight>

      </View>
      <View style={styles.packs}>

        <TouchableHighlight onPress={() => { setDisplay(display + 0) }}>
          <View style={styles.button0} >
            <Text style={styles.fontsize}>0</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setDisplay(display + '.') }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>.</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { handleEqual() }}>
          <View style={styles.buttonEquals} >
            <Text style={styles.fontsize}>=</Text>
          </View>
        </TouchableHighlight>

      </View>
      <TouchableHighlight onPress={() => {alert(history)}}>
          <View style={styles.history} >
            <Text style={styles.fontsize}>History</Text>
          </View>
        </TouchableHighlight>
    </View>
  );
  function eraseEverything() {

    setDisplay('')
    setOperation('')
    setPreview('')
    setHistory('')
  }
  function eraseOperationPreview() {

    setOperation('')
    setPreview('')
  }
  function calculation() {
    var value
    switch (op) {
      case '+':
        value = parseFloat(preview) + parseFloat(display)
        break
      case '-':
        value = parseFloat(preview) - parseFloat(display)
        break
      case '*':
        value = parseFloat(preview) * parseFloat(display)
        break
      case '/':
        value = parseFloat(preview) / parseFloat(display)
        break
      default:
        alert(op)
        alert('invalido')
        value = ('')
        break
    }
    return value
    
  }
}
const onPress = () => Vibration.vibrate(50)

