import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <><><View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Título da aplicação</Text>
      <Text style={styles.p1}>|Texto aleatório|Texto aleatório|Texto aleatório|Texto aleatório|Texto aleatório|Texto aleatório|Texto aleatório|Texto aleatório|</Text>
    </View>
      <View style={styles.subview}>
        <Text style={styles.title2}>Outro Título</Text>
        <Text style={styles.p2}>Outro Texto</Text>
        <Text style={styles.title2}>Outro Título</Text>
        <Text style={styles.p2}>Outro Texto</Text>
        <Text style={styles.title2}>Outro Título</Text>
        <Text style={styles.p2}>Outro Texto</Text>
      </View>
    </>
      <View style={styles.pC}>
        <Text style={styles.p1}>Texto com fundo</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  p1: {
    marginTop: 20,
  },
  subview: {
    flex: 2,
    alignItems: 'flex-start',
    width: '100%',
    padding: 20,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  p2: {
    marginTop: 2,
    marginBottom: 20,
  },
  pC: {
    backgroundColor: 'red',
    width: 500,
    height: 400,
    paddingTop: 155,
    paddingLeft: 155,
  },
});