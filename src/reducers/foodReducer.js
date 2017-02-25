export const addFood = 'ADD_FOOD_TO_LIST';


const addFood = function(food) {
	return{
        type:action,
        // dados da interface q o usuario esta pegando
        payload: {
            food: food,
        }
    }
};



function reducer(state, action){
    switch (action.type){
        case 'ADD_FOOD_TO_LIST':
            return state;
    }

}