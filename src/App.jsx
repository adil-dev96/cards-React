import React from 'react'
import Cards from './components/Cards'

const App = () => {

 const profiles = [
  {
    name: "Noah Thompson",
    role: "Product Designer who focuses on simplicity & usability.",
    cover: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    avatar: "https://i.pravatar.cc/150?img=11",
    likes: "72.9K",
    posts: "828",
    views: "342.9K",
  },
  {
    name: "Emma Wilson",
    role: "UI Designer creating clean and modern interfaces.",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    avatar: "https://i.pravatar.cc/150?img=32",
    likes: "54.1K",
    posts: "612",
    views: "198.4K",
  },
  {
    name: "Liam Anderson",
    role: "Frontend Developer passionate about animations.",
    cover: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    avatar: "https://i.pravatar.cc/150?img=45",
    likes: "88.3K",
    posts: "945",
    views: "401.7K",
  },
  {
    name: "Olivia Martin",
    role: "UX Researcher focused on user behaviour & flow.",
    cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    avatar: "https://i.pravatar.cc/150?img=47",
    likes: "61.7K",
    posts: "502",
    views: "229.6K",
  },
  {
    name: "James Carter",
    role: "Creative Director with a strong visual sense.",
    cover: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
    avatar: "https://i.pravatar.cc/150?img=56",
    likes: "103.2K",
    posts: "1103",
    views: "510.8K",
  },
  {
    name: "Sophia Brown",
    role: "Brand Designer & visual storyteller.",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    avatar: "https://i.pravatar.cc/150?img=65",
    likes: "47.6K",
    posts: "388",
    views: "175.2K",
  },
  {
    name: "William Harris",
    role: "Mobile UI expert building smooth app experiences.",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    avatar: "https://i.pravatar.cc/150?img=68",
    likes: "69.4K",
    posts: "721",
    views: "294.1K",
  },
  {
    name: "Ava Johnson",
    role: "Visual Designer who loves colors & layouts.",
    cover: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
    avatar: "https://i.pravatar.cc/150?img=70",
    likes: "58.9K",
    posts: "640",
    views: "216.3K",
  },
  {
    name: "Benjamin Lee",
    role: "Interaction Designer crafting smooth UX.",
    cover: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    likes: "91.5K",
    posts: "987",
    views: "433.9K",
  },
  {
    name: "Mia Rodriguez",
    role: "Digital Artist blending art & technology.",
    cover: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    likes: "76.2K",
    posts: "834",
    views: "359.4K",
  },
];



  return (
    <div  className='p-[2rem] flex justify-center flex-wrap  ' >
      
      {profiles.map(function(elem){
        return <Cards profiles = {elem} />
      })}
    </div>
  )
}

export default App
