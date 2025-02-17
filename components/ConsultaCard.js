import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@emotion/react';

const ConsultaCard = ({ title, name, image }) => {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.surface }]}>{title}</Text>
        <Text style={[styles.name, { color: theme.colors.surface }]}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: '2%',
    marginVertical: '2%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '100%', 
    width: '100%',
  },
  image: {
    width: '20%', 
    height: '80%', 
  },
  textContainer: {
    marginLeft: '5%',
    width: '75%', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
  },
});

export default ConsultaCard;
