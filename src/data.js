import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLink = [
    { id: 1, href: '#home', Text: 'home' },
    { id: 2, href: '#about', Text: 'about' },
    { id: 3, href: '#services', Text: 'services' },
    { id: 4, href: '#tours', Text: 'tours' },
]

export const socialLink = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores,officia' },
    { id: 1, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 1, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' }
]

export const tours = [
    { id: 1, image: tour1, title: 'Tibet Adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', date: 'august 26th, 2020', duration: 6, location: 'china', cost: '2100' },
    { id: 2, image: tour2, title: 'best of java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', date: 'october 1th, 2020', duration: 11, location: 'indonesia', cost: '1400' },
    { id: 3, image: tour3, title: 'explore hong kong', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', date: 'september 15th, 2020', duration: 8, location: 'hong kong', cost: '5000' },
    { id: 4, image: tour4, title: 'kenya highlights', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', date: 'december 5th, 2019', duration: 20, location: 'kenya', cost: '3300' },
]