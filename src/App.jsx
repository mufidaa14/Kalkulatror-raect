import React, { useState } from 'react';
import { SafeAreaView,View,Text,TouchableOpacity,StyleSheet } from 'react-native';

const buttons = [
  ['C', 'DEL', '/', '*'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['0', '.'],
];

const App = () => {
  const [display, setTampilan] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (button) => {
    if (button === 'C') {
      setTampilan('');
      setResult('');
    } else if (button === 'DEL') {
      setTampilan(display.slice(0, -1));
    } else if (button === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setTampilan(display + button);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#FDD9E5',
  },
  displayText: {
    fontSize: 40,
    color: '#FFF',
  },
  resultText: {
    fontSize: 20,
    color: '#888',
  },
  buttonsContainer: {
    flex: 2,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC2D6',
    margin: 5,
    marginBottom: 20,
    padding: 5,
    height: 60,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 30,
    color: '#282C34',
    fontWeight: 'bold',
  },
});

export default App;