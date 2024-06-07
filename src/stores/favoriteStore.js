import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    toggleFavorite(product) {
      const index = this.favorites.findIndex(fav => fav.img === product.img);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(product);
      }
    },
    isFavorite(img) {
      return this.favorites.some(fav => fav.img === img);
    },
    removeFavorite(img) {
      const index = this.favorites.findIndex(fav => fav.img === img);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    }
  }
});