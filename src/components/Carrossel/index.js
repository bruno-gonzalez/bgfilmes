// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Carrossel() {

   const moviesUrl = "https://api.themoviedb.org/3/movie/";
   const apiKey = "api_key=2614c0610e38f94c58dec4968f6b4736";

   const [topFilmes, setTopFilmes] = useState([]);

   const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

   useEffect(() => {
      const topFilmesUrl = `${moviesUrl}top_rated?${apiKey}`;

      axios.get(topFilmesUrl)
         .then((resposta) => {
            const res = resposta.data;
            setTopFilmes(res.results)
            console.log(topFilmes);
         })
   }, [])

   return (
      <Swiper
         // install Swiper modules
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      > 
            {topFilmes.map(filme => {
               <SwiperSlide>
                  <p>{filme.original_title}</p>
                  <Card key={filme.id} imgFilme={`${baseImgUrl + filme.poster_path}`} tituloFilme={filme.original_title} />
               </SwiperSlide>
            })}
      </Swiper>
   );
};