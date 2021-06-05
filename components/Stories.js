import StoryCard from "./StoryCard";

const Stories = () => {
  const stories = [
    {
      name: "Arturs Pusko",
      src: "https://i.ibb.co/Nj3qq0W/k0j-GY0nt24.jpg",
      profile: "https://i.ibb.co/Nj3qq0W/k0j-GY0nt24.jpg",
    },
    {
      name: "Edwards Kovalenko",
      src: "https://i.ibb.co/b1Hy9zR/E-s-Wa-J9z-BFA.jpg",
      profile: "https://i.ibb.co/b1Hy9zR/E-s-Wa-J9z-BFA.jpg",
    },
    {
      name: "Vladislavs Fedotov",
      src: "https://i.ibb.co/0tqWjf9/n-Q5-Jbdx-RR68.jpg",
      profile: "https://i.ibb.co/0tqWjf9/n-Q5-Jbdx-RR68.jpg",
    },
    {
      name: "Naruto Uzumaki",
      src: "https://i.ibb.co/7JdXsVt/famous.jpg",
      profile: "https://i.ibb.co/7JdXsVt/famous.jpg",
    },
    {
      name: "Hello World",
      src: "https://i.ibb.co/Q8SYnyJ/Getty-Images-1173478201.jpg",
      profile: "https://i.ibb.co/Q8SYnyJ/Getty-Images-1173478201.jpg",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => {
        return (
          <StoryCard
            name={story.name}
            src={story.src}
            profile={story.profile}
            key={story.src}
          />
        );
      })}
    </div>
  );
};

export default Stories;
