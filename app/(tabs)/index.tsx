import { Image, StyleSheet, Platform, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    
  
  <Text style={{margin:45}}>Data

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam officia voluptates labore deleniti blanditiis deserunt quo aut, sapiente aliquid laudantium est modi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, inventore. Veniam unde, blanditiis eum, velit possimus laboriosam nesciunt excepturi fuga officiis omnis quasi animi mollitia voluptas itaque nisi. Alias dolore ratione quisquam dolorem explicabo eum maiores veritatis, numquam odit, hic quis cupiditate quos ullam. Architecto at magnam reiciendis porro et eaque labore officia, aspernatur eveniet autem? Dolores esse reiciendis, natus at quasi voluptatem a alias! Consectetur, dolor! Nemo sint iusto beatae, ipsam itaque vitae quis architecto illum repudiandae autem hic recusandae quasi quidem molestiae, ex libero quae doloremque voluptates excepturi saepe ipsum voluptas deserunt voluptate fuga. Et molestias sunt eius.
  
  
  </Text>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
