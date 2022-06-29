import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../utils/Color';
import {Rating} from 'react-native-ratings';

const CardList = props => {
  let listGenre = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={props.press}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{uri: `https://image.tmdb.org/t/p/w500${props.img}`}}
        />
      </View>

      <View style={styles.containerDesc}>
        <Text style={styles.text} adjustsFontSizeToFit numberOfLines={2}>
          {props.title}
        </Text>
        <Rating ratingCount={5} imageSize={15} startingValue={props.ratings} />
        <View style={styles.genre}>
          {props?.genreIDs?.map((item, idx) => {
            return (
              <View key={idx.toString()}>
                <Text style={styles.textDesc}>{`${listGenre[item]}`}</Text>
              </View>
            );
          })}
        </View>

        {props.popular && (
          <Text style={styles.textDesc}>{`Popularity : ${props.popular}`}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 15,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 6,
    borderRadius: 6,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDesc: {
    flex: 3,
    alignItems: 'flex-start',
    marginLeft: 25,
  },
  genre: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: Color.lightGrey,
    borderRadius: 6,
  },
  text: {
    color: Color.black,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 5,
  },
  textDesc: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'grey',
    padding: 4,
  },
});
