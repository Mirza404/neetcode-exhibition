class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //peek at value before, we likely need hard-coding to spot the pattern
    isValid(s: string): boolean {
        let stek: number[] = [];
        for(let i: number = 0; i<s.length; i++){
            if(s[i]== "{" || s[i]== "(" || s[i]== "[" || s[i]=="}" || s[i]== ")" || s[i]=="]"){
                if(stek.length!==0){
                    stek.at(-1);
                    // stajem ovdje jer mi previse djeluje da if-am svaki case bas
                    
                }
            } 
        }
    }
}
