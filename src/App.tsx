import { useState } from 'react';
import Profile from './assets/image-jeremy.png';
import work from './assets/icon-work.svg';
import play from './assets/icon-play.svg';
import study from './assets/icon-study.svg';
import exercise from './assets/icon-exercise.svg';
import social from './assets/icon-social.svg';
import selfcare from './assets/icon-self-care.svg';
import cardData from '../db/data.json';
import Cards from './components/Cards';

type IconMap = {
  [key: string]: string;
};

const iconMap: IconMap = {
  work,
  play,
  study,
  exercise,
  social,
  selfcare,
};

const timeFrames: string[] = ['daily', 'weekly', 'monthly'];

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('daily');
  const handleTimeFrameChange = (timeframe: string) =>
    setSelectedTimeframe(timeframe);

  return (
    <div className='h-screen bg-neutralVeryDarkBlue flex items-start justify-center overflow-auto lg:items-center '>
      <div className='grid  grid-cols-1 lg:grid-cols-[0.25fr,repeat(3,0.175fr)] lg:grid-rows-2 gap-y-4 w-[80%] lg:w-full lg:h-[55%] lg:mb-0 lg:gap-8 lg:content-center lg:items-center lg:justify-center'>
        <div className='w-full h-40 row-span-3 relative bg-neutralDarkBlue rounded-2xl lg:mt-0 lg:h-[94%] lg:w-[55%] lg:justify-self-end lg:self-start'>
          <div className='h-28 bg-neutralDesaturatedBlue relative grid grid-cols-[0.5fr,1fr] md:grid-cols-[0.75fr,1fr] grid-rows-2 justify-end items-end rounded-2xl lg:flex lg:justify-start lg:items-start lg:flex-col lg:gap-2 lg:h-[65%] lg:px-8 '>
            <img
              className='w-16 h-16  row-span-2 m-4 self-center justify-self-end border-2 border-white rounded-full lg:h-[5.5rem] lg:w-[5.5rem] lg:self-start lg:mx-0 lg:my-6 '
              src={Profile}
              alt='Profile Picture'
            />
            <h3 className='text-xs font-rubikRegular text-neutralPaleBlue lg:text-lg lg:mt-4'>
              Report for
            </h3>
            <h1 className='self-start font-thin text-2xl font-rubikLight text-white lg:text-2xl xl:text-3xl'>
              Jeremy Robson
            </h1>
          </div>
          <div className=' w-full h-[30%] flex justify-evenly items-center gap-2 lg:flex-col lg:items-start lg:ml-8 lg:my-3 lg:text-lg'>
            {timeFrames.map((items, i) => {
              return (
                <button
                  key={i}
                  className={`text-neutralDesaturatedBlue hover:text-neutralPaleBlue active:text-white cursor-pointer font-rubikRegular ${
                    selectedTimeframe === items && 'text-neutralPaleBlue'
                  }`}
                  onClick={() => handleTimeFrameChange(items)}
                >
                  {items.charAt(0).toUpperCase() + items.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
        {cardData.map((dataItem: any, key) => {
          return (
            <li key={key} className='list-none p-0 m-0 lg:h-full '>
              <Cards
                background={
                  iconMap[dataItem.title.toLowerCase().replace(/\s+/g, '')]
                }
                hours={dataItem.timeframes[selectedTimeframe].current}
                previousHours={dataItem.timeframes[selectedTimeframe].previous}
                previousState={
                  selectedTimeframe === 'daily'
                    ? 'Yesterday'
                    : selectedTimeframe === 'weekly'
                    ? 'Last Week'
                    : 'Last Month'
                }
                title={dataItem.title}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default App;
