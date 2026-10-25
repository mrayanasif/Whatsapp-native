
import { Tabs, TabSlot } from 'expo-router/ui';
import { View, StyleSheet } from 'react-native';

export default function AppTabs() {
  return (
    <View style={styles.container}>
      <Tabs>
        <TabSlot style={styles.content} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    width: '100%',
  },
});
