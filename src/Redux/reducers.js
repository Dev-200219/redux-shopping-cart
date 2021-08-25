import{addToCart, remFromCart} from "./constants";

let initialState = [
    {
        id: 0,
        name: "OnePlus Phone",
        img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SL1500_.jpg",
        price: 10000,
        qty: 0,
      },
      {
        id: 1,
        name: "Kia Car",
        img: "https://www.kia.com/us/content/dam/kia/us/en/home/hero/sorento_2021/foreground/kia_homepage_mobile_hero_foreground.png",
        price: 1000000,
        qty: 0,
      },
      {
        id: 2,
        name: "PS4",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.png/1200px-PS4-Console-wDS4.png",
        qty: 0,
      },
]

let reducer = (state = initialState, action) => {

    switch(action.type){
    
    case addToCart:
        var cpState = [...state];
        var id = action.payload;
        cpState[id].qty++;
        return cpState;

    case remFromCart:
        var cpState = [...state];
        var id = action.payload;
        if(cpState[id].qty > 0)
        cpState[id].qty--;
        return cpState;
    
    default: return state;
    }

}

export default reducer;