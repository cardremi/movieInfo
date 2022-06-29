import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../components/CardList';
import Color from '../utils/Color';
import {useNavigation} from '@react-navigation/native';

const ListMovie = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.dataReducer.ListData);

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=6503783ce94d65884cb2640ba68d4de9&language=en-US&page=1',
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        dispatch({type: 'SET_LIST_DATA', ListData: response});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data?.data?.results?.map((item, idx) => {
          return (
            <CardList
              key={idx.toString()}
              title={item.original_title.toString()}
              genreIDs={item.genre_ids}
              ratings={item.vote_average / 2}
              popular={item.popularity}
              img={item.poster_path}
              press={() =>
                navigation.navigate('detailmovie', {
                  overview: item.overview,
                  backdrop: item.backdrop_path,
                  ratings: item.vote_average / 2,
                  genreIDs: item.genre_ids,
                  title: item.original_title.toString(),
                  release: item.release_date,
                })
              }
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight / 2.5,
    backgroundColor: Color.white,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default ListMovie;
