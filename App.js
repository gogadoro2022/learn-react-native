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
import {FocusHistory} from './src/features/FocusHistory';

export default function App() {
  const [currentSubjet, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubjet ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubjet}
          onTimerEnd={focusSubject => {
            setHistory([...history, focusSubject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
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
