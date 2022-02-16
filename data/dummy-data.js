import bcrypt from "bcryptjs";

export const books = [
  {
    title: "Ten Thousand Skies above You",
    author: "Claudia Gray",
    rating: [],
    description:
      "Ever since she used the Firebird, her parents' invention,to cross into alternate dimensions, Marguerite has caught the attention of enemies who will do anything to force her into helping them dominate the multiverse—even hurting the people she loves.",
    slug: "ten-thousand-skies-above-you",
    image: "/images/then-thousand-skies.jpg",
    price: 19.99,
    pages: 211,
    featured: true,
    genre: "Fantasy",
  },
  {
    title: "Big Magic",
    author: "Elizabeth Gilbert",
    rating: [],
    slug: "big-magic",
    description:
      "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. Now this beloved author digs deep into her own generative process to share her wisdom and unique perspective about creativity. ",
    image: "/images/big-magic.jpg",
    price: 23.55,
    pages: 128,
    featured: true,
    genre: "Motivational",
  },
  {
    title: "Act like it",
    author: "Lucy Parker",
    rating: [],
    slug: "act-like-it",
    description:
      "Richard Troy used to be the hottest actor in London, but the only thing firing up lately is his temper. We all love to love a bad boy, but Richard's antics have made him Enemy Number One, breaking the hearts of fans across the city.",
    image: "/images/act-like-it.jpg",
    price: 22.11,
    pages: 354,
    featured: true,
    genre: "Romance",
  },
  {
    title: "Enders Game",
    author: "Orson Scott Card",
    rating: [],
    slug: "enders-game",
    description:
      "Andrew Ender thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy.",
    image: "/images/enders-game.jpg",
    price: 29.99,
    pages: 274,
    featured: true,
    genre: "Fantasy",
  },
  {
    title: "Deadly Election",
    author: "Lindsay Davis",
    rating: [],
    slug: "deadly-election",
    description:
      "In the blazing July heat of imperial Rome, Flavia Albia inspects a decomposing corpse. It has been discovered in lots to be auctioned by her family business, so she's determined to identify the dead man.",
    image: "/images/deadly-election.jpg",
    price: 19.05,
    pages: 180,
    featured: true,
    genre: "Thriller",
  },
  {
    title: "The Revenant",
    author: "Michale Punke",
    rating: [],
    slug: "the-revenant",
    description:
      "A thrilling tale of betrayal and revenge set against the nineteenth-century American frontier, the astonishing story of real-life trapper and frontiersman Hugh Glass",
    image: "/images/the-revenant.jpg",
    price: 26.78,
    pages: 325,
    featured: true,
    genre: "Adventure",
  },
  {
    title: "The Blue Tower",
    author: "Thalia Blake",
    rating: [],
    slug: "the-fall-of-iromouth",
    description:
      "Just off the shore of the Jasper Belt is an island made of strange blue stones. Centuries ago, a great queen built a tower on that forbidding rock, and now it will keep the daughter of another great queen safe from an invading army that threatens everything she has worked so hard to build.",
    image: "/images/thebluetower.jpg",
    price: 18.78,
    pages: 222,
    featured: false,
    genre: "Fantasy",
  },
  {
    title: "Misery",
    author: "Stephen King",
    rating: [],
    slug: "misery",
    description:
      "Bestselling novelist Paul Sheldon thinks he’s finally free of Misery Chastain. In a controversial career move, he’s just killed off the popular protagonist of his beloved romance series in favor of expanding his creative horizons. But such a change doesn’t come without consequences.",
    image: "/images/misery.png",
    price: 28.88,
    pages: 290,
    featured: false,
    genre: "Horror",
  },
  {
    title: "Firestarter",
    author: "Stephen King",
    rating: [],
    slug: "firestarter",
    description:
      "Andy McGee and Vicky Tomlinson were once college students looking to make some extra cash, volunteering as test subjects for an experiment orchestrated by the clandestine government organization known as The Shop. But the outcome unlocked exceptional latent psychic talents for the two of them",
    image: "/images/firestarter.png",
    price: 21.99,
    pages: 311,
    featured: false,
    genre: "Horror",
  },
  {
    title: "Dolores Claiborne",
    author: "Stephen King",
    rating: [],
    slug: "dolores-claiborne",
    description:
      "Suspected of killing Vera Donovan, her wealthy employer, Dolores Claiborne tells police the story of her life, harkening back to her disintegrating marriage and the suspicious death of her violent husband, Joe St. George, thirty years earlier.",
    image: "/images/dolores.png",
    price: 24.24,
    pages: 245,
    featured: false,
    genre: "Horror",
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    rating: [],
    slug: "the-trial",
    description:
      "The story of The Trial's publication is almost as fascinating as the novel itself. Kafka intended his parable of alienation in a mysterious bureaucracy to be burned, along with the rest of his diaries and manuscripts, after his death in 1924. ",
    image: "/images/the-trial.jpg",
    price: 26.78,
    pages: 325,
    featured: false,
    genre: "Classic",
  },
  {
    title: "The Mefamorphosis",
    author: "Franz Kafka",
    rating: [],
    slug: "the-metamorphosis",
    description:
      "Gregor Samsa wakes up one morning to find himself transformed into a monstrous vermin. He initially considers the transformation to be temporary and slowly ponders the consequences of this metamorphosis. ",
    image: "/images/the-metamorphosis.jpg",
    price: 20.98,
    pages: 100,
    featured: false,
    genre: "Classic",
  },
  {
    title: "The Gambler",
    author: "Fyodor Dostoevsky",
    rating: [],
    slug: "the-gambler",
    description:
      "In this dark and compelling short novel, Dostoevsky tells the story of Alexey Ivanovitch, a young tutor working in the household of an imperious Russian general. Alexey tries to break through the wall of the established order in Russia. ",
    image: "/images/the-gambler.jpg",
    price: 26.78,
    pages: 325,
    featured: false,
    genre: "Classic",
  },
  {
    title: "Undercover",
    author: "Danielle Steel",
    rating: [],
    slug: "undercover",
    description:
      "A powerful novel from #1 New York Times bestselling author Danielle Steel, about an ambassador’s daughter who is kidnapped and the former undercover agent who comes to her aid, saving her life in more ways than one. ",
    image: "/images/undercover.jpg",
    price: 15.78,
    pages: 186,
    featured: false,
    genre: "Thriller",
  },
  {
    title: "The Best of Me",
    author: "Nicholas Sparks",
    rating: [],
    slug: "the-best-of-me",
    description:
      "In the spring of 1984, high school students Amanda Collier and Dawson Cole fell deeply, irrevocably in love. But as the summer of their senior year came to a close, unforeseen events would tear the young couple apart, setting them on radically divergent paths. ",
    image: "/images/the-best-of-me.jpg",
    price: 25.99,
    pages: 246,
    featured: false,
    genre: "Romance",
  },
  {
    title: "The Age of Light",
    author: "Whitney Scharer",
    rating: [],
    slug: "the-age-of-light",
    description:
      "A captivating debut novel by Whitney Scharer, The Age of Light tells the story of Vogue model turned renowned photographer Lee Miller, and her search to forge a new identity as an artist after a life spent as a muse. ",
    image: "/images/the-age-of-light.jpg",
    price: 20.78,
    pages: 145,
    featured: false,
    genre: "Romance",
  },
  {
    title: "Harry Potter The chamber of secrets ",
    author: "J.K. Rowling",
    rating: [],
    slug: "harry-potter-the-chamber-of-secrets",
    description:
      "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning. ",
    image: "/images/harry-potter-chamber.jpg",
    price: 26.78,
    pages: 325,
    featured: false,
    genre: "Fantasy",
  },
  {
    title: "The Mysteroius Island",
    author: "Jules Verne",
    rating: [],
    slug: "the-mysteroius-island",
    description:
      "In The Mysterious Island a group of men escape imprisonment during the American Civil War by stealing a balloon. Blown across the world, they are air-wrecked on a remote desert island.",
    image: "/images/the-mysterious-island.jpg",
    price: 19.99,
    pages: 269,
    featured: false,
    genre: "Classic",
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    rating: [],
    slug: "the-trial-4",
    description:
      "The story of The Trial's publication is almost as fascinating as the novel itself. Kafka intended his parable of alienation in a mysterious bureaucracy to be burned, along with the rest of his diaries and manuscripts, after his death in 1924. ",
    image: "/images/the-trial.jpg",
    price: 26.78,
    pages: 325,
    featured: false,
    genre: "Classic",
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    rating: [],
    slug: "the-trial-3",
    description:
      "The story of The Trial's publication is almost as fascinating as the novel itself. Kafka intended his parable of alienation in a mysterious bureaucracy to be burned, along with the rest of his diaries and manuscripts, after his death in 1924. ",
    image: "/images/the-trial.jpg",
    price: 26.78,
    pages: 325,
    featured: false,
    genre: "Classic",
  },
];

export const users = [
  {
    name: "John",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Malkov",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
