interface ICards {
  background: string;
  title: string;
  hours: number;
  previousHours: number;
  previousState: 'Yesterday' | 'Last Week' | 'Last Month';
}

const backgroundVariants: any = {
  work: 'bg-work',
  play: 'bg-play',
  study: 'bg-study',
  exercise: 'bg-exercise',
  social: 'bg-social',
  selfcare: 'bg-selfcare',
};

const buttonHoverVariants: any = {
  work: 'group-hover:stroke-work',
  play: 'group-hover:stroke-play',
  study: 'group-hover:stroke-study',
  exercise: 'group-hover:stroke-exercise',
  social: 'group-hover:stroke-social',
  selfcare: 'group-hover:stroke-selfcare',
};

const textHoverVariants: any = {
  work: 'hover:text-work',
  play: 'hover:text-play',
  study: 'hover:text-study',
  exercise: 'hover:text-exercise',
  social: 'hover:text-social',
  selfcare: 'hover:text-selfcare',
};

const delayBounce = {
  0: 'group-hover:animate-[pulse_1s_ease-in-out_infinite] ',
  1: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_100ms] ',
  2: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_150ms] ',
  3: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_200ms] ',
  4: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_250ms] ',
  5: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_300ms] ',
  6: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_350ms] ',
  7: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_400ms] ',
  8: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_450ms] ',
  9: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_500ms] ',
  10: 'group-hover:animate-[pulse_1s_ease-in-out_infinite_550ms] ',
};

const Cards = ({
  background,
  title,
  hours,
  previousHours,
  previousState,
}: ICards) => {
  return (
    <>
      <div
        className={`w-full h-36 row-span-3  rounded-2xl  flex items-end justify-end flex-col overflow-hidden ${
          backgroundVariants[title.toLowerCase().replace(' ', '')]
        } lg:h-full  `}
        key={title}
      >
        <img
          className='mb-[-10%] mt-[-5%] h-20 w-20 lg:mb-[-5%]'
          src={background}
          alt={`${background} icon`}
        />
        <div className=' w-full h-[80%] lg:h-[75%] text-white bg-neutralDarkBlue gap-1  rounded-t-2xl grid grid-cols-[100px,1fr] md:grid-cols-3 lg:grid-cols-[100px,1fr]  self-end grid-rows-2 lg:grid-rows-3 p-6 z-10 group/card hover:opacity-80 transition duration-500 ease-in'>
          <h3
            className={`self-end  font-cardHeavyWeight  font-rubikMedium md:col-start-1 md:row-start-1 md:row-end-3 md:self-center md:justify-self-center md:text-3xl lg:text-xl lg:row-span-1 lg:col-span-1 lg:justify-self-start lg:whitespace-nowrap flex group `}
          >
            {title.split('').map((text, key) => {
              return (
                <div key={key}>
                  <p
                    className={`transition-all ease-in-out ${delayBounce[key]}`}
                  >
                    {text === 'f' ? `${text}\u00A0` : text}
                  </p>
                </div>
              );
            })}
          </h3>
          <button className='group justify-self-end'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className={`w-9 h-9 stroke-neutralPaleBlue transition duration-500 ${
                buttonHoverVariants[title.toLowerCase().replace(' ', '')]
              } group-hover:animate-pulse`}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
          </button>
          <h1 className='self-start  font-cardLightWeight font-rubikLight  text-3xl md:col-start-2 md:row-start-1 md:row-end-3 md:self-center md:justify-self-start md:text-4xl lg:row-span-2 lg:col-span-2 lg:justify-self-start lg:text-5xl'>
            {hours}hrs
          </h1>
          <h4 className='justify-self-end self-center text-neutralPaleBlue font-rubikRegular text-xs lg:row-span-3 lg:col-span-2 lg:justify-self-start'>
            {`${previousState} - ${previousHours}hrs`}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
