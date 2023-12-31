import axiosClient from '../axiosClient'

export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        commit('setSearchedMeals',data.meals)
    })
}

export function searchedMealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setSearchedMealsByLetter',data.meals)
    })
}

export function searchedMealsByIngredients({commit}, ingredients){
    axiosClient.get(`filter.php?i=${ingredients}`)
    .then(({data})=>{
        commit('setSearchedMealsByIngredients',data.meals)
    })
}