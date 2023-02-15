import {genres} from '../assets/constants'
import { SongCard, Error, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Pop';
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    
    if(isFetching) return <Loader />;
    if(error) return <Error/>;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>Discover {genreTitle}</h2>
        <select onChange={() => {}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {
            genres.map((genre) => (
              <option key={genre.value} value={genre.value}>{genre.title}</option>
            ))
          }
        </select>
      </div>
      <div className='grid gap-4 lg:grid-cols-5 sm:grid-cols-3  mt-6'>
        {
            data?.map((song, i) => (
                <SongCard 
                key = {song.key}
                song={song}
                isPlaying = {isPlaying}
                activeSong={activeSong}
                data={data}
                i= {i}
                />
            ))
        }
      </div>
    </div>
  );
};

export default Discover;