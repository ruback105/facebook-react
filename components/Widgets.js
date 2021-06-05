import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const Widgets = () => {
  const contacts = [
    {
      src: "https://i.ibb.co/Nj3qq0W/k0j-GY0nt24.jpg",
      name: "Arturs Pusko",
    },
    {
      src: "https://i.ibb.co/b1Hy9zR/E-s-Wa-J9z-BFA.jpg",
      name: "Edwards Kovalenko",
    },
    {
      src: "https://i.ibb.co/0tqWjf9/n-Q5-Jbdx-RR68.jpg",
      name: "Vladis Fedotovs",
    },
    {
      src: "https://i.ibb.co/9WZryKk/sub-buzz-1096-1579879662-3.jpg",
      name: "The Rock",
    },
    {
      src: "https://i.ibb.co/7JdXsVt/famous.jpg",
      name: "John Cena",
    },
    {
      src: "https://i.ibb.co/dDhpxq4/f7d99deb0cda9c0cb7352e3de87df813.jpg",
      name: "The Rat",
    },
    {
      src: "https://i.ibb.co/Q8SYnyJ/Getty-Images-1173478201.jpg",
      name: "The Weekend",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 pt-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5 pr-2">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6 text-blue-500 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer" />
          <DotsHorizontalIcon className="h-6 text-blue-500 cursor-pointer" />
        </div>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        );
      })}
    </div>
  );
};

export default Widgets;
