export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface PlantCategory {
  category: string;
  plants: Plant[];
}

export interface CartItem extends Plant {
  quantity: number;
}

export interface CartState {
  items: Record<string, CartItem>;
}
