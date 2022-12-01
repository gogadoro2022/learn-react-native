import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import {Focus} from './src/features/Focus';
import {colors} from './src/utils/colors';
import {spacing} from './src/utils/sizes';
import {Timer} from './src/features/Timer';

export default function App() {
  const [currentSubjet, setCurrentSubject] = useState('test');
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubjet ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubjet}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
