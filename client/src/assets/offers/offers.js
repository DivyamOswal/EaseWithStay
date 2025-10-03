import earlyBirdImage from './early_bird.jpg';
import lastMinuteImage from './last_minute_deals.jpg';
import weekendGetawayImage from './weekend_getaway_special.jpg';
import stayLongerImage from './stay_longer_save_more.jpg';

export const offers = [
  {
    id: 'deal-01',
    title: 'Early Bird Offer 🦜',
    subtitle: 'Plan Ahead, Pay Less!',
    buttonText: 'Get 30% OFF',
    image: earlyBirdImage,
  },
  {
    id: 'deal-02',
    title: 'Last-Minute Deals ⏳',
    subtitle: 'Spontaneous Trips, Big Savings!',
    buttonText: 'Upto ₹2000 OFF',
    image: lastMinuteImage,
  },
  {
    id: 'deal-03',
    title: 'Weekend Getaway Special 🌴',
    subtitle: 'Weekend Mode: Activated!',
    buttonText: 'Save Upto 25%',
    image: weekendGetawayImage,
  },
  {
    id: 'deal-04',
    title: 'Stay Longer, Save More 🎁',
    subtitle: 'More Nights, More Savings!',
    buttonText: 'Get 40% OFF',
    image: stayLongerImage,
  },
  
];

export default offers

