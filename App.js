import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableHighlight, TextInput, Vibration, } from 'react-native';
import { useState, useEffect } from 'react';


import styles from './styles.js'



export default function App() {

  const [display, setDisplay] = useState('')
  const [preview, setPreview] = useState('')
  const [operation, setOperation] = useState('')

  useEffect(() => {

  }, [display, preview, operation]);

  function handleMultiplication() {
    const lastPreview = preview,lastDisplay = display;
    setPreview(preview == '' ? display : parseInt(preview) * parseInt(display))
    setDisplay(lastPreview)

    console.log(operation)
    console.log('Display: ' + display);
    console.log('Preview: ' + preview);
  }
  function handleSubtraction() {

    setPreview(preview == '' ? display : parseInt(preview) - parseInt(display))


    console.log(operation)
    console.log('Display: ' + display);
    console.log('Preview: ' + preview);
  }
  function handleDivision() {

    setPreview(preview == '' ? display : parseInt(preview) / parseInt(display))


    console.log(operation)
    console.log('Display: ' + display);
    console.log('Preview: ' + preview);
  }
  function handleSum() {

    setPreview(preview == '' ? display : parseInt(preview) + parseInt(display))


    console.log(operation)
    console.log('Display: ' + display);
    console.log('Preview: ' + preview);
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
          onChange={e => setDisplay(e.target.value)}
          style={styles.displayFont}
          placeholder='0'
          placeholderTextColor="#000"
          keyboardType={'numeric'} />

        <Text style={{ width: 275, marginTop: -83, textAlign: 'right' }}>
          {preview}
        </Text>
        <Text style={{ marginTop: -20, marginLeft: 10 }}>
          {operation}
        </Text>

      </View>

      <View style={styles.packs}>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>CE</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>%</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setOperation('/'), handleDivision() }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>/</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setOperation('*'), handleMultiplication()}}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>X</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.packs}>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>7</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>8</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>9</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setOperation('-'), handleSubtraction() }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>-</Text>
          </View>
        </TouchableHighlight>
      </View>


      <View style={styles.packs}>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>4</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>5</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>6</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { setOperation('+'), handleSum() }}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>+</Text>
          </View>
        </TouchableHighlight>

      </View>

      <View style={styles.packs}>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>1</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>2</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
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

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button0} >
            <Text style={styles.fontsize}>0</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button} >
            <Text style={styles.fontsize}>,</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.buttonEquals} >
            <Text style={styles.fontsize}>=</Text>
          </View>
        </TouchableHighlight>

      </View>

    </View>
  );
}



const onPress = () => Vibration.vibrate(50)
