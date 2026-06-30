class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    minPrice(prices: number[]): number {
        let currentElement: number;
        let minIndex: number = 0;
        let minElement: number = prices[0];
        for (let i: number = 0; i < prices.length; i++) {
            //find total maximum
            currentElement = prices[i];
            if (minElement > currentElement) {
                minIndex = i;
                minElement = currentElement;
            }
        }

        return minIndex;
    }
    maxProfit(prices: number[]): number {
        //gledas razliku izmedju danas i jedan od buducih dana
        // znaci sve prije tog dana je nebitno
        //gledas samo desno od buy dana i trazis sto veci broj da prodas
        let minIndex = this.minPrice(prices);
        let maxElement: number = prices[minIndex];
        let currentElement: number = prices[minIndex];

        for (let i: number = minIndex; i < prices.length; i++) {
            //find the largest to the right of minIndex
            //znaci array shrinks to arr[i-minIndex] (duzina)
            // onda hocemo nac maximum tog arraya, to ce bit najveca razlika
            currentElement = prices[i];
            if (currentElement > maxElement) {
                maxElement = currentElement;
            }
        }

        return maxElement - prices[minIndex];
    }
}
