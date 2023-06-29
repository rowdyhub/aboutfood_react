import { rerenderDOM } from './rerenderdom';

let state = {
    user:{
        userAuth: false,
        curentUser: 87421,
        userInfo: {
            userID: 87421,
            userName: 'ADMIN',
            userPic: './images/userPics/Bcmp3qvswRr9ojjou7VNjk9E9SOInZ25GUyKabeIcvNpRDsuAAZ0Q2bEZEtXJkdaAQvY7NEm.jpg',
            userToken: '4f2gh3f4h2g3f4h2g3f4h2g3'
        }
    },

    recipeResolve: {
        id: 1,
        userId: 763,
        userAvatar: '',
        userName: 'Dari',
        liked: true,
        name: 'Сырный суп по-французски с курицей (место для второй строки при длинном названии)',
        cuisine: 'Французская кухня',
        category: 'Супы',
        persones: 1,
        time: 2,    /* only minutes */
        likes: 3,
        mainImageUrl: '../images/p_O.jpg',
        description: 'Нежный суп с приятным сливочным вкусом перенесет Вас прямиком на улицы Парижа. Превосходное сочетание сырного супа и хрустящихсухариков никого не оставит равнодушным.',
        ingridients: [
            {
                ingridientID: 64,
                name: 'Вода',
                value: 1,
                unitID: 7,
                unit: 'л.'
            },
            {
                ingridientID: 52,
                name: 'Кортофель',
                value: 700,
                unitID: 2,
                unit: 'гр.'
            },
            {
                ingridientID: 53,
                name: 'Лук',
                value: 100,
                unitID: 2,
                unit: 'гр.'
            },
            {
                ingridientID: 33,
                name: 'Соль',
                value: 5,
                unitID: 7,
                unit: 'гр.'
            }
        ],
        steps: [
            {
                inID: 1,
                outID: 1,
                imageURL: '../images/p_O.jpg',
                text: 'Описание ШАГ 1'
            },
            {
                inID: 2,
                outID: 1,
                imageURL: '../images/b79c442b.jpg',
                text: 'Описание ШАГ 2'
            },
            {
                inID: 3,
                outID: 1,
                imageURL: '../images/1006224708.jpg',
                text: 'Описание ШАГ 3'
            },
            {
                inID: 4,
                outID: 1,
                imageURL: '../images/p_O.jpg',
                text: 'Описание ШАГ 4'
            },
        ]
    },


    /* Посты на главной */
    posts: [
        {
            id: 51,
            name: 'Какое то длинное название записи, нужно еще длиннее, еще чуть-чуть',
            discrition: 'Какое то описание для перовоо поста. Много какого то текста, Много какого то текста, Много какого то текста, Много какого то текста, Много какого то текста, Много какого то текста, Много какого то текста, Много какого то текста, ',
            image: '1006224708.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 22,
            name: 'Запись 2',
            discrition: 'Какое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго постаКакое то описание для второго поста',
            image: 'p_O.jpg',
            hashtags: '#хештеги #новости #вкусно #еда #волгоград #текст #путешествие #мясо'
        },
        {
            id: 36,
            name: 'Запись 3',
            discrition: 'Какое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего постаКакое то описание для третьего поста',
            image: 'b79c442b.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 42,
            name: 'Запись 4',
            discrition: 'Какое то описание для четвертого поста',
            image: '1006224708.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 5,
            name: 'Запись 5',
            discrition: 'Какое то описание для поста',
            image: 'b79c442b.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 63,
            name: 'Запись 6',
            discrition: 'Какое то описание для поста',
            image: '1006224708.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 79,
            name: 'Запись 7',
            discrition: 'Какое то описание для поста',
            image: '1006224708.jpg',
            hashtags: '#хештеги'
        },
        {
            id: 98,
            name: 'Запись 8',
            discrition: 'Какое то описание для поста',
            image: '1006224708.jpg',
            hashtags: '#хештеги'
        },
    ],

    /* Полный список рецептов для вывода списка */
    recipes: [
        {
            id: 1,
            userId: 763,
            userAvatar: '',
            userName: 'Dari',
            liked: true,
            name: 'Сырный суп по-французски с курицей (место для второй строки при длинном названии)',
            cuisine: 'Французская кухня',
            category: 'Супы',
            persones: 1,
            time: 2,    /* only minutes */
            likes: 3,
            mainImageUrl: '../images/p_O.jpg',
            description: 'Нежный суп с приятным сливочным вкусом перенесет Вас прямиком на улицы Парижа. Превосходное сочетание сырного супа и хрустящихсухариков никого не оставит равнодушным.'
        },
        {
            id: 2,
            userId: 763,
            userAvatar: '',
            userName: 'Dari',
            liked: false,
            name: 'Японский салат с рисом',
            cuisine: 'Японская кухня',
            category: 'Салаты',
            persones: 4,
            time: 5,    /* only minutes */
            likes: 6,
            mainImageUrl: '../images/rice.jpg',
            description: 'Совмещая в себе простоту в приготовлении и пользу, этот салат станет прекрасным началом дня. Питательный рис с кисло сладкой заправкой поднимут Ваше настроение в начале дня и дадут достатчно энергии.'
        },
        {
            id: 3,
            userId: 764,
            userAvatar: '',
            userName: 'Serg',
            liked: true,
            name: 'Баклажаны в томате',
            cuisine: 'Кутукская кухня',
            category: 'Второе блюдо',
            persones: 7,
            time: 8,    /* only minutes */
            likes: 9,
            mainImageUrl: '../images/b79c442b.jpg',
            description: 'Ну шо скозать, не знаю даже. Куцна.'
        }
    ],

    /* Signup */
    signup: {
        usernameinput: '',
        useremailinput: '',
        userpasswordainput: '',
        userpasswordbinput: '',
        changevalue: (inputname, value) => {
            switch (inputname) {
                case 'username':
                    state.signup.usernameinput = value;
                    console.log(state.signup);
                    rerenderDOM(state);
                    break;
                case 'useremail':
                    state.signup.useremailinput = value;
                    console.log(state.signup);
                    rerenderDOM(state);
                    break;
                case 'userpassworda':
                    state.signup.userpasswordainput = value;
                    console.log(state.signup);
                    rerenderDOM(state);
                    break;
                case 'userpasswordb':
                    state.signup.userpasswordbinput = value;
                    console.log(state.signup);
                    rerenderDOM(state);
                    break;
            
                default:
                    break;
            }
        },
        dosignup: () => {
            state.signup.usernameinput = '';
            state.signup.useremailinput = '';
            state.signup.userpasswordainput = '';
            state.signup.userpasswordbinput = '';
            rerenderDOM(state);
        }
    },

    /* Logon */
    login: {
        useremailinput: '',
        userpasswordinput: '',
        changevalue: (inputname, value) => {
            switch (inputname) {
                case 'useremail':
                    state.login.useremailinput = value;
                    console.log(state.login);
                    rerenderDOM(state);
                    break;
                case 'userpassword':
                    state.login.userpasswordinput = value;
                    console.log(state.login);
                    rerenderDOM(state);
                    break;
            
                default:
                    break;
            }
        },
        dologin: () => {
            state.login.useremailinput = '';
            state.login.userpasswordinput = '';
            rerenderDOM(state);
        }
    }
}

export default state;