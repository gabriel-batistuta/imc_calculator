import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  let app_title = "ONEBITHEALTH"

  return (
    <View style={styles.container}>
      <Title text={app_title} />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
