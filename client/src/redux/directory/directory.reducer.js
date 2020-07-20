const INITIAL_STATE = {
    categories: [
        {
            title: "hats",
            imageUrl: "https://lh3.googleusercontent.com/proxy/_g6AVuPlSHRzqbJhsfE9cwyYs5IgoIHiBBvoISCMNfXiIv3Uzq99hrVSBEEy78I2Xq4M-6Ks_MlhVRkduM3Uxvqwix6ZJUxQWqYhfNl2zyMw0lIArsoxvJ6ZmJHb",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "https://lh3.googleusercontent.com/proxy/_g6AVuPlSHRzqbJhsfE9cwyYs5IgoIHiBBvoISCMNfXiIv3Uzq99hrVSBEEy78I2Xq4M-6Ks_MlhVRkduM3Uxvqwix6ZJUxQWqYhfNl2zyMw0lIArsoxvJ6ZmJHb",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "https://lh3.googleusercontent.com/proxy/_g6AVuPlSHRzqbJhsfE9cwyYs5IgoIHiBBvoISCMNfXiIv3Uzq99hrVSBEEy78I2Xq4M-6Ks_MlhVRkduM3Uxvqwix6ZJUxQWqYhfNl2zyMw0lIArsoxvJ6ZmJHb",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "womens",
            imageUrl: "https://lh3.googleusercontent.com/proxy/_g6AVuPlSHRzqbJhsfE9cwyYs5IgoIHiBBvoISCMNfXiIv3Uzq99hrVSBEEy78I2Xq4M-6Ks_MlhVRkduM3Uxvqwix6ZJUxQWqYhfNl2zyMw0lIArsoxvJ6ZmJHb",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "mens",
            imageUrl: "https://lh3.googleusercontent.com/proxy/_g6AVuPlSHRzqbJhsfE9cwyYs5IgoIHiBBvoISCMNfXiIv3Uzq99hrVSBEEy78I2Xq4M-6Ks_MlhVRkduM3Uxvqwix6ZJUxQWqYhfNl2zyMw0lIArsoxvJ6ZmJHb",
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