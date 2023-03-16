import { RiRunLine } from 'react-icons/ri';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

const serviceDetails = [
  {
    title: 'Errands',
    icon: <RiRunLine size={24} />,
    description:
      'We are available to run errands for you i.e gas refill, deliveries e.t.c',
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
    description: 'Hey,  lets take stress off your day by shopping for you. ',
  },
  {
    title: 'Domestic chores',
    icon: <MdOutlineCleaningServices size={24} />,
    description:
      'We can help you tidy up while you relax or get on with business',
  },
  {
    title: 'Assignments',
    icon: <SiBookstack size={24} />,
    description:
      'We have skilled personnels available to help with assignments and projects.',
  },
  {
    title: 'Tech',
    icon: <DiReact size={24} />,
    description:
      'Lets handle your basic and complex tech tasks.We have skilled persons for this. ',
  },
];

export default serviceDetails;
