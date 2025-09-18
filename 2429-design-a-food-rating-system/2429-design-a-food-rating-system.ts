type pair = [number, string];

const cmp = (a, b) => {
    if (a[0] != b[0]) return b[0] - a[0];
    return a[1].localeCompare(b[1]);
};

class FoodRatings {
    cuisineMap: Map<string, string>;
    foodRatingMap: Map<string, number>;
    mp: Map<string, PriorityQueue<pair>>

    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.cuisineMap = new Map();
        this.foodRatingMap = new Map();
        this.mp = new Map();

        for (let i = 0; i < foods.length; i++) {
            this.cuisineMap.set(foods[i], cuisines[i]);
            this.foodRatingMap.set(foods[i], ratings[i]);
            
            if (!this.mp.has(cuisines[i])) {
                this.mp.set(cuisines[i], new PriorityQueue<pair>(cmp));
            }
            this.mp.get(cuisines[i])!.enqueue([ratings[i], foods[i]]);
        }    
    }

    changeRating(food: string, newRating: number): void {
        const cuisine = this.cuisineMap.get(food);
        this.foodRatingMap.set(food, newRating);
        this.mp.get(cuisine)!.enqueue([newRating, food]);
    }

    highestRated(cuisine: string): string {
        const pq = this.mp.get(cuisine);
        while (!pq.isEmpty()) {
            const [rating, food] = pq.front();
            if (rating == this.foodRatingMap.get(food)) {
                return food;
            }
            pq.dequeue();
        }
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */