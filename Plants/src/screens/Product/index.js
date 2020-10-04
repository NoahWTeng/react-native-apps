import React, {useState} from 'react';
import {Image, FlatList, ScrollView} from 'react-native';
import {Block, Typography as Text, Divider} from '../../components';
import {products, sizes} from '../../constants';
import {styles} from './styles';

export function Product() {
  const [state, changeState] = useState({
    product: products[0],
  });

  const renderGallery = () => {
    const {product} = state;
    return (
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={({item}) => (
          <Image source={item} resizeMode="contain" style={styles.gallery} />
        )}
      />
    );
  };

  return (
    <Block color="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderGallery()}
        <Block style={styles.product}>
          <Text h2 bold>
            {state.product.name}
          </Text>
          <Block flex={false} row margin={[sizes.base, 0]}>
            {state.product.tags.map((tag) => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>
            {state.product.description}
          </Text>
          <Divider margin={[sizes.padding * 0.9, 0]} />
          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[sizes.padding * 0.9, 0]}>
              {state.product.images.slice(1, 3).map((img, idx) => (
                <Image
                  key={`gallery-${idx}`}
                  source={img}
                  style={styles.image}
                />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}>
                <Text gray>+{state.product.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
