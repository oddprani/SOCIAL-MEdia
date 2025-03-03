
export interface User {
  id: number;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  following: number;
  followers: number;
  posts: number;
  isVerified?: boolean;
  isFollowing?: boolean;
}

export interface Post {
  id: number;
  userId: number;
  username: string;
  userImage?: string;
  location?: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface Comment {
  id: number;
  userId?: number;
  username: string;
  text: string;
  timestamp: string;
  likes?: number;
}

// Mock user data
export const mockUsers: User[] = [
  {
    id: 1,
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    bio: 'Travel enthusiast | Photographer | Coffee lover',
    location: 'New York, USA',
    website: 'johndoe.com',
    following: 325,
    followers: 1240,
    posts: 42,
    isVerified: true,
  },
  {
    id: 2,
    username: 'sarah_smith',
    fullName: 'Sarah Smith',
    avatar: 'https://source.unsplash.com/random/100x100?face=2',
    bio: 'Digital artist | Nature lover',
    location: 'Los Angeles, USA',
    following: 215,
    followers: 890,
    posts: 28,
  },
  {
    id: 3,
    username: 'mike_johnson',
    fullName: 'Mike Johnson',
    avatar: 'https://source.unsplash.com/random/100x100?face=3',
    bio: 'Fitness freak | Food blogger',
    location: 'Chicago, USA',
    website: 'mikejfitness.com',
    following: 178,
    followers: 543,
    posts: 15,
  },
  {
    id: 4,
    username: 'emma_wilson',
    fullName: 'Emma Wilson',
    avatar: 'https://source.unsplash.com/random/100x100?face=4',
    bio: 'Fashion designer | Travel addict',
    location: 'London, UK',
    following: 512,
    followers: 1500,
    posts: 56,
    isVerified: true,
  },
  {
    id: 5,
    username: 'alex_brown',
    fullName: 'Alex Brown',
    avatar: 'https://source.unsplash.com/random/100x100?face=5',
    bio: 'Music producer | Guitar player',
    location: 'Austin, USA',
    website: 'alexbrownmusic.com',
    following: 320,
    followers: 980,
    posts: 34,
  }
];

// Mock posts data
export const mockPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    username: 'john_doe',
    userImage: 'https://source.unsplash.com/random/100x100?face=1',
    location: 'New York, USA',
    content: 'Just exploring the new ODIE platform. The interface is super clean!',
    image: 'https://source.unsplash.com/random/600x600?city=1',
    timestamp: '2 hours ago',
    likes: 124,
    comments: [
      {
        id: 1,
        username: 'sarah_smith',
        text: 'Looks amazing! I need to try it too.',
        timestamp: '1 hour ago',
        likes: 5
      },
      {
        id: 2,
        username: 'mike_johnson',
        text: 'Great shot! Which filter did you use?',
        timestamp: '45 minutes ago',
        likes: 2
      }
    ]
  },
  {
    id: 2,
    userId: 4,
    username: 'emma_wilson',
    userImage: 'https://source.unsplash.com/random/100x100?face=4',
    location: 'London Fashion Week',
    content: 'Behind the scenes at today\'s fashion show #fashion #design',
    image: 'https://source.unsplash.com/random/600x600?fashion=1',
    timestamp: '5 hours ago',
    likes: 357,
    comments: [
      {
        id: 1,
        username: 'alex_brown',
        text: 'The collection looks stunning!',
        timestamp: '4 hours ago',
        likes: 8
      }
    ]
  },
  {
    id: 3,
    userId: 3,
    username: 'mike_johnson',
    userImage: 'https://source.unsplash.com/random/100x100?face=3',
    content: 'Morning workout done! Starting the day with positive energy. #fitness #motivation',
    image: 'https://source.unsplash.com/random/600x600?fitness=1',
    timestamp: '8 hours ago',
    likes: 89,
    comments: []
  },
  {
    id: 4,
    userId: 2,
    username: 'sarah_smith',
    userImage: 'https://source.unsplash.com/random/100x100?face=2',
    location: 'Grand Canyon',
    content: 'Nature\'s masterpiece. Breathtaking views at every turn. #travel #nature #adventure',
    image: 'https://source.unsplash.com/random/600x600?canyon=1',
    timestamp: '1 day ago',
    likes: 213,
    comments: [
      {
        id: 1,
        username: 'john_doe',
        text: 'Wow! This is on my bucket list.',
        timestamp: '23 hours ago',
        likes: 3
      },
      {
        id: 2,
        username: 'emma_wilson',
        text: 'The colors are amazing! Great photo.',
        timestamp: '20 hours ago',
        likes: 5
      }
    ]
  },
  {
    id: 5,
    userId: 5,
    username: 'alex_brown',
    userImage: 'https://source.unsplash.com/random/100x100?face=5',
    content: 'New track dropping next week! Stay tuned. #music #newrelease',
    image: 'https://source.unsplash.com/random/600x600?music=1',
    timestamp: '2 days ago',
    likes: 175,
    comments: [
      {
        id: 1,
        username: 'mike_johnson',
        text: 'Can\'t wait to hear it!',
        timestamp: '1 day ago',
        likes: 2
      }
    ]
  }
];
