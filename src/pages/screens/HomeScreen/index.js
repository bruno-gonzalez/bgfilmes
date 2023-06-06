import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "../../../styles/HomeScreen.module.css"
import Card from '@/components/Card';



export default function HomeScreen() {

   const moviesUrl = "https://api.themoviedb.org/3/movie/";
   const seriesUrl = "https://api.themoviedb.org/3/tv/";
   const apiKey = "api_key=2614c0610e38f94c58dec4968f6b4736";

   const [topFilmes, setTopFilmes] = useState([]);
   const [popularFilmes, setPopularFilmes] = useState([]);
   const [popularSeries, setPopularSeries] = useState([]);

   const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

   useEffect(() => {
      const topFilmesUrl = `${moviesUrl}top_rated?language=pt-br&${apiKey}`;
      const popularFilmesUrl = `${moviesUrl}popular?language=pt-br&${apiKey}`;
      const popularSeriesUrl = `${seriesUrl}top_rated?language=pt-br&${apiKey}`;


      axios.get(topFilmesUrl)
         .then(async (resposta) => {
            const res = await resposta.data;
            setTopFilmes(res.results);
            console.log(topFilmes);
         })
      axios.get(popularFilmesUrl)
         .then(async (resposta) => {
            const res = await resposta.data;
            setPopularFilmes(res.results)
            console.log(popularFilmes)
         })
      axios.get(popularSeriesUrl)
         .then(async (resposta) => {
            const res = await resposta.data;
            setPopularSeries(res.results);
            console.log(popularSeries);
         })
   }, [])

   return (
      <main className={styles.homescreen}>
         <div className={styles.container}>
            <h1 className={styles.titulo__section}>Melhores Filmes</h1>
            <Swiper
               modules={[Autoplay]}
               autoplay
               spaceBetween={20}
               breakpoints={{
                  300: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  700: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                  },
                  1200: {
                     slidesPerView: 3,
                     spaceBetween: 40,
                  },
                  1600: {
                     slidesPerView: 4,
                     spaceBetween: 50,
                  },
               }}
               className={styles.carrossel}
            >
               {
                  topFilmes.map(filme =>
                     <SwiperSlide key={filme.id}>
                        <Card key={filme.id} imgFilme={`${baseImgUrl + filme.poster_path}`} tituloFilme={filme.title} />
                     </SwiperSlide>)
               }
            </Swiper>
         </div>
         <div className={styles.container}>
            <h2 className={styles.titulo__section}>Em Alta</h2>
            <Swiper
               modules={[Autoplay]}
               autoplay
               spaceBetween={20}
               slidesPerView={4}
               breakpoints={{
                  300: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  700: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                  },
                  1200: {
                     slidesPerView: 3,
                     spaceBetween: 40,
                  },
                  1600: {
                     slidesPerView: 4,
                     spaceBetween: 50,
                  },
               }}
               className={styles.carrossel}
            >
               {
                  popularFilmes.map(popFilme =>
                     <SwiperSlide key={popFilme.id}>
                        <Card key={popFilme.id} imgFilme={`${baseImgUrl + popFilme.poster_path}`} tituloFilme={popFilme.title} />
                     </SwiperSlide>)
               }
            </Swiper>
         </div>

         <div className={styles.container}>
            <h3 className={styles.titulo__section}>Series Tv</h3>
            <Swiper
               modules={[Autoplay]}
               autoplay
               spaceBetween={50}
               slidesPerView={4}
               breakpoints={{
                  300: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  700: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                  },
                  1200: {
                     slidesPerView: 3,
                     spaceBetween: 40,
                  },
                  1600: {
                     slidesPerView: 4,
                     spaceBetween: 50,
                  },
               }}
               className={styles.carrossel}
            >
               {popularSeries.map((serie) => <SwiperSlide key={serie.id}>
                  <Card
                     imgFilme={`${baseImgUrl + serie.poster_path}`}
                     tituloFilme={serie.name}
                     resumoFilme={serie.overview}
                     key={serie.id}
                  />

               </SwiperSlide>)}
            </Swiper>
         </div>
      </main>

   )
}

