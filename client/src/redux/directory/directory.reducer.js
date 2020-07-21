const INITIAL_STATE = {
    categories : [
        {
            title: "hats",
            imageUrl: "https://oxbloodandwolf.files.wordpress.com/2014/11/screen-shot-2014-11-05-at-12-15-45.png",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpZP9Wc1ve8FxI8ysTS7QFF2qoxmXbRqa4_w&usqp=CAU",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQAebwEr-LsSCPT9aIZWAJAlIp79p0wLn5Bg&usqp=CAU",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
    ],
};

const directoryReducer=(state = INITIAL_STATE,action)=>{
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;