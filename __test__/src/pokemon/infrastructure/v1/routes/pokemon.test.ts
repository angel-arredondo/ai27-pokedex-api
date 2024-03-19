import {test, expect} from '@playwright/test'

test.describe('Testing at pokemon routes',()=>{
    test.describe('Testing POST endpoint',()=>{
        test('Should respond status 201',async({request})=>{
            const response =  await request.post('http://localhost:3000/api/v1/pokemons/pidgeotto')
            
            expect(response.status()).toBe(201)
        })
        test('Should return the created pokemon',async({request})=>{
            const response =  await request.post('http://localhost:3000/api/v1/pokemons/pidgeotto')
            const json = await response.json()
           
            expect(json).toBeDefined()
            expect(json.registeredPokemon.name).toBe('pidgeotto')
        })
        test('Should respond status 404 width no pokemon name',async({request})=>{
            const response =  await request.post('http://localhost:3000/api/v1/pokemons/')
            expect(response.status()).toBe(404)
        })
        test('Should respond status 400 width invalid pokemon name',async({request})=>{
            const response =  await request.post('http://localhost:3000/api/v1/pokemons/4568')
            expect(response.status()).toBe(400)
        })
    })
    test.describe('Testing GET endpoint',()=>{
        test('Should respond status 200',async({request})=>{
            const response = await request.get('http://localhost:3000/api/v1/pokemons/')
            expect(response.status()).toBe(200)
        })
        test('Should respond whit pokemons',async({request})=>{
            const response = await request.get('http://localhost:3000/api/v1/pokemons/')
            const json = await response.json();
            
            expect(json.pokemons).toBeDefined();
            expect(json.pokemons).toHaveLength(1);
        })
    })
      
})