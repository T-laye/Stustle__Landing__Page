import { RiRunLine } from 'react-icons/ri';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { GiComb } from 'react-icons/gi';
import { BiTask } from 'react-icons/bi';

const serviceDetails = [
  {
    title: 'Errands',
    icon: <RiRunLine size={24} />,
    description:
      'We are available to run errands for you i.e gas refill, dirt disposal, deliveries e.t.c',
  },
  {
    title: 'Food services',
    icon: <IoFastFoodOutline size={24} />,
    description:
      'Lets get your favourite foods cooked and delivered to your doorstep.',
  },
  {
    title: 'Market Shopping',
    icon: <FiShoppingBag size={24} />,
    description: 'Hey, lets take stress off your day by shopping for you. ',
  },
  {
    title: 'Cleaning Services',
    icon: <MdOutlineCleaningServices size={24} />,
    description:
      'We can help you tidy up while you relax or get on with business.',
  },
  {
    title: 'Academic Stuff',
    icon: <SiBookstack size={24} />,
    description:
      'We have skilled personnels available to help with assignments and projects.',
  },
  {
    title: 'Tech',
    icon: <DiReact size={24} />,
    description:
      'Tasks such as CAD designs, web dev (tutoring or collaborations) etc. ',
  },
  {
    title: 'Saloon Services',
    icon: <GiComb size={24} />,
    description:
      'Need saloon services at home, get a nice hair cut, make your wigs or get your hair fixed.',
  },
  {
    title: 'Other Services',
    icon: <BiTask size={24} />,
    description: 'Any other basic non-skilled task you will need help with.',
  },
];

export default serviceDetails;
