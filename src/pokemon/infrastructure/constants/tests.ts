const testConstant = Object.freeze({
    pokemon:{
        id:'5386324c-d611-436a-b76c-36ecce753a07',
        name:"pidgeotto",
        moves:[
            {name:"razor-wind"},
            {name:"gust"},
            {name:"wing-attack"},
            {name:"whirlwind"},
        ],
        types:[
            {name:"normal"},
            {name:"flying"}
        ]
    },
    endpoint:{
        pokemons:'http://localhost:3000/api/v1/pokemons/'
    }
})

export default testConstant