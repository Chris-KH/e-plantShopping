export const plants = [
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 22,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae5b7f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 26,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2dd6f4f4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    price: 18,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    price: 20,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    price: 17,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    price: 19,
    category: "Low Maintenance",
    image:
      "https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "fiddle-leaf",
    name: "Fiddle Leaf Fig",
    price: 48,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    price: 54,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    price: 36,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 42,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1611211232932-da3113c7b8f8?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "money-tree",
    name: "Money Tree",
    price: 34,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "dracaena-marginata",
    name: "Dracaena Marginata",
    price: 31,
    category: "Statement Plants",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "calathea",
    name: "Calathea Medallion",
    price: 29,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "parlor-palm",
    name: "Parlor Palm",
    price: 24,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "peperomia",
    name: "Peperomia Green",
    price: 21,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "boston-fern",
    name: "Boston Fern",
    price: 27,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "prayer-plant",
    name: "Prayer Plant",
    price: 25,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "african-violet",
    name: "African Violet",
    price: 16,
    category: "Pet Friendly",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=700&q=80",
  },
];

export const groupedPlants = plants.reduce((groups, plant) => {
  if (!groups[plant.category]) {
    groups[plant.category] = [];
  }

  groups[plant.category].push(plant);
  return groups;
}, {});
