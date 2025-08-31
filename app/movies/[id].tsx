import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import {useLocalSearchParams} from "expo-router";
import useFetch from "@/services/useFetch";
import {fetchMovieDetails} from "@/services/api";

const MovieDetails = () => {

    const{ id } = useLocalSearchParams()

    const {data: movie, loading } = useFetch(() =>
        fetchMovieDetails(id as string));

  return (
    <View className="bg-primary flex-1">
        <ScrollView contentContainerStyle={{
            paddingBottom: 80 }}>
            <View>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}/>
            </View>
        </ScrollView>
       </View>
  )
}

export default MovieDetails
