import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text>pagina home</Text>
         <divider className="my-3 w-52"/>
        <Button className="bg-fuchsia-300">
          <ButtonText className='font-bold'>Primeiro pagina</ButtonText>
        </Button>
        <divider className="my-3 w-20"/>
         <Button className="bg-fuchsia-300">
          <ButtonText className='font-bold'>segunda pagina</ButtonText>
        </Button>
<divider className="my-3 w-20"/>
         <Button className="bg-fuchsia-300">
          <ButtonText className='font-bold'>terceira pagina</ButtonText>
        </Button>

      </View>
    </GluestackUIProvider>

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
