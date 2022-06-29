import React from 'react';
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import Color from '../utils/Color';

const DetailMovie = props => {
  const route = props.route.params;
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
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${route.backdrop}`,
          }}
        />
      </View>
      <View style={styles.synopsisContainer}>
        <View style={styles.titleCard}>
          <View style={styles.title}>
            <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit>
              {route.title}
            </Text>
            <View style={styles.genre}>
              {route.genreIDs.map((item, idx) => {
                return (
                  <View key={idx.toString()}>
                    <Text style={styles.txtGenre}>{`${listGenre[item]}`}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={styles.releaseDate}>{route.release}</Text>
            <Rating
              ratingCount={5}
              imageSize={15}
              startingValue={route.ratings}
            />
          </View>
        </View>
        <View style={styles.containerDesc}>
          <Text style={[styles.text, {fontSize: 19}]}>Synopsis</Text>
          <Text style={styles.txtSynopsis}>{route.overview}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  text: {
    fontSize: 20,
    color: Color.black,
    fontWeight: 'bold',
  },
  imgContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.lightGrey,
  },
  synopsisContainer: {
    flex: 3,
  },
  titleCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -30,
    marginHorizontal: 40,
    backgroundColor: Color.white,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 8,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 2,
  },
  rating: {
    flex: 1,
    alignItems: 'flex-end',
  },
  genre: {
    fontSize: 13,
    color: 'grey',
    flexDirection: 'row',
  },
  containerDesc: {
    paddingTop: 30,
    marginHorizontal: 40,
  },
  txtGenre: {
    paddingHorizontal: 3,
    color: 'grey',
    fontSize: 13,
  },
  txtSynopsis: {
    color: 'grey',
    fontSize: 18,
    paddingTop: 7,
  },
  releaseDate: {
    color: 'grey',
    fontSize: 13,
    paddingBottom: 5,
  },
});

export default DetailMovie;
