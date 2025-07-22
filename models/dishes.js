const dishes = [
    {
        id: 1,
        nameKey: 'borsch',
        imageName: 'borscht.jpg',
        descriptionKey: 'borsch_description',
        recipeKey: 'borsch_recipe',
        ingredients: [
            { name: 'beet', amount: '200 г' },
            { name: 'cabbage', amount: '150 г' },
            { name: 'potato', amount: '200 г' },
            { name: 'carrot', amount: '100 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'meat', amount: '300 г' },
            { name: 'tomato_paste', amount: '2 ст.л.' }
        ],
        cuisine: 'Ukraine',
        cookTime: 90,
        videoUrl: 'https://www.youtube.com/watch?v=9pqj05Z-h44'
    },
    {
        id: 2,
        nameKey: 'plov',
        imageName: 'plov.jpeg',
        descriptionKey: 'plov_description',
        recipeKey: 'plov_recipe',
        ingredients: [
            { name: 'rice', amount: '300 г' },
            { name: 'meat', amount: '200 г' },
            { name: 'carrot', amount: '100 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'garlic', amount: '1 зубчик' },
            { name: 'spices', amount: 'по вкусу' }
        ],
        cuisine: 'Uzbekistan',
        cookTime: 60,
        videoUrl: 'https://youtu.be/6D29vjegWIM?si=hAWw2mVLb8vxMGah'
    },
    {
        id: 3,
        nameKey: 'olivier',
        imageName: 'olivier.jpg',
        descriptionKey: 'olivier_description',
        recipeKey: 'olivier_recipe',
        ingredients: [
            { name: 'potato', amount: '300 г' },
            { name: 'carrot', amount: '100 г' },
            { name: 'eggs', amount: '2 шт.' },
            { name: 'peas', amount: '100 г' },
            { name: 'sausage', amount: '100 г' },
            { name: 'cucumber', amount: '100 г' },
            { name: 'mayonnaise', amount: '50 г' }
        ],
        cuisine: 'Russia',
        cookTime: 45,
        videoUrl: 'https://www.youtube.com/watch?v=RnsWwHcpKiY'
    },
    {
        id: 4,
        nameKey: 'pasta',
        imageName: 'pasta.jpg',
        descriptionKey: 'pasta_description',
        recipeKey: 'pasta_recipe',
        ingredients: [
            { name: 'pasta', amount: '200 г' },
            { name: 'tomato_sauce', amount: '200 г' },
            { name: 'cheese', amount: '100 г' },
            { name: 'basil', amount: 'по вкусу' }
        ],
        cuisine: 'Italy',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=D_2DBLAt57c'
    },
    {
        id: 5,
        nameKey: 'caesar',
        imageName: 'salat.jpg',
        descriptionKey: 'caesar_description',
        recipeKey: 'caesar_recipe',
        ingredients: [
            { name: 'chicken', amount: '200 г' },
            { name: 'lettuce', amount: '100 г' },
            { name: 'croutons', amount: '50 г' },
            { name: 'parmesan', amount: '50 г' },
            { name: 'caesar_sauce', amount: '50 г' }
        ],
        cuisine: 'USA',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=IGlWE4AFQ5Q'
    },
    {
        id: 6,
        nameKey: 'puree',
        imageName: 'puree.jpg',
        descriptionKey: 'puree_description',
        recipeKey: 'puree_recipe',
        ingredients: [
            { name: 'vegetables', amount: '300 г' },
            { name: 'cream', amount: '100 г' },
            { name: 'salt', amount: 'по вкусу' },
            { name: 'pepper', amount: 'по вкусу' }
        ],
        cuisine: 'France',
        cookTime: 15,
        videoUrl: 'https://www.youtube.com/watch?v=sQx1tOw0Qds'
    },
    {
        id: 7,
        nameKey: 'chicken_potato',
        imageName: 'chicken_potato.jpeg',
        descriptionKey: 'chicken_potato_description',
        recipeKey: 'chicken_potato_recipe',
        ingredients: [
            { name: 'chicken', amount: '200 г' },
            { name: 'potato', amount: '300 г' },
            { name: 'spices', amount: 'по вкусу' },
            { name: 'oil', amount: '2 ст.л.' }
        ],
        cuisine: 'Belarus',
        cookTime: 40,
        videoUrl: 'https://www.youtube.com/watch?v=3b4cyBEvUPE'
    },
    {
        id: 8,
        nameKey: 'buckwheat_veggies',
        imageName: 'buckwheat_veggies.jpg',
        descriptionKey: 'buckwheat_veggies_description',
        recipeKey: 'buckwheat_veggies_recipe',
        ingredients: [
            { name: 'buckwheat', amount: '200 г' },
            { name: 'carrot', amount: '100 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'bell_pepper', amount: '1 шт.' },
            { name: 'spices', amount: 'по вкусу' }
        ],
        cuisine: 'Russia',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=awjemhA-Nl4'
    },
    {
        id: 9,
        nameKey: 'sushi',
        imageName: 'sushi.jpg',
        descriptionKey: 'sushi_description',
        recipeKey: 'sushi_recipe',
        ingredients: [
            { name: 'rice', amount: '200 г' },
            { name: 'nori', amount: '1 шт.' },
            { name: 'salmon', amount: '100 г' },
            { name: 'avocado', amount: '1 шт.' },
            { name: 'soy_sauce', amount: '50 г' }
        ],
        cuisine: 'Japan',
        cookTime: 25,
        videoUrl: 'https://www.youtube.com/watch?v=RiLcleNSuig'
    },
    {
        id: 10,
        nameKey: 'ratatouille',
        imageName: 'ratatouille.jpg',
        descriptionKey: 'ratatouille_description',
        recipeKey: 'ratatouille_recipe',
        ingredients: [
            { name: 'eggplant', amount: '1 шт.' },
            { name: 'zucchini', amount: '1 шт.' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'bell_pepper', amount: '1 шт.' },
            { name: 'onion', amount: '80 г' },
            { name: 'garlic', amount: '1 зубчик' }
        ],
        cuisine: 'France',
        cookTime: 45,
        videoUrl: 'https://www.youtube.com/watch?v=RQlp-p_Qcsw'
    },
    {
        id: 11,
        nameKey: 'tacos',
        imageName: 'tacos.jpg',
        descriptionKey: 'tacos_description',
        recipeKey: 'tacos_recipe',
        ingredients: [
            { name: 'tortilla', amount: '2 шт.' },
            { name: 'beef', amount: '150 г' },
            { name: 'lettuce', amount: '100 г' },
            { name: 'cheese', amount: '50 г' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'salsa', amount: '50 г' }
        ],
        cuisine: 'Mexico',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=vmuLzYet9K4'
    },
    {
        id: 12,
        nameKey: 'paella',
        imageName: 'paella.jpg',
        descriptionKey: 'paella_description',
        recipeKey: 'paella_recipe',
        ingredients: [
            { name: 'rice', amount: '300 г' },
            { name: 'seafood', amount: '200 г' },
            { name: 'chicken', amount: '150 г' },
            { name: 'peas', amount: '100 г' },
            { name: 'saffron', amount: '1 пакетик' },
            { name: 'bell_pepper', amount: '1 шт.' }
        ],
        cuisine: 'Spain',
        cookTime: 60,
        videoUrl: 'https://www.youtube.com/watch?v=vNBuXsTY15E'
    },
    {
        id: 13,
        nameKey: 'tom_yum',
        imageName: 'tom_yum.jpg',
        descriptionKey: 'tom_yum_description',
        recipeKey: 'tom_yum_recipe',
        ingredients: [
            { name: 'shrimp', amount: '200 г' },
            { name: 'lemongrass', amount: '1 шт.' },
            { name: 'lime', amount: '1 шт.' },
            { name: 'mushroom', amount: '1 шт.' },
            { name: 'chili', amount: '1 шт.' },
            { name: 'coconut_milk', amount: '200 г' }
        ],
        cuisine: 'Thailand',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=TLl8n5WJJfI'
    },
    {
        id: 14,
        nameKey: 'falafel',
        imageName: 'falafel.jpeg',
        descriptionKey: 'falafel_description',
        recipeKey: 'falafel_recipe',
        ingredients: [
            { name: 'chickpeas', amount: '200 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'garlic', amount: '1 зубчик' },
            { name: 'parsley', amount: 'по вкусу' },
            { name: 'spices', amount: 'по вкусу' },
            { name: 'flour', amount: '100 г' }
        ],
        cuisine: 'Middle East',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=NZcWedPKysk'
    },
    {
        id: 15,
        nameKey: 'ramen',
        imageName: 'ramen.jpg',
        descriptionKey: 'ramen_description',
        recipeKey: 'ramen_recipe',
        ingredients: [
            { name: 'noodles', amount: '200 г' },
            { name: 'pork', amount: '150 г' },
            { name: 'egg', amount: '1 шт.' },
            { name: 'nori', amount: '1 шт.' },
            { name: 'green_onion', amount: '50 г' },
            { name: 'soy_sauce', amount: '50 г' }
        ],
        cuisine: 'Japan',
        cookTime: 25,
        videoUrl: 'https://www.youtube.com/watch?v=r3_tcQiyGG8'
    },
    {
        id: 16,
        nameKey: 'moussaka',
        imageName: 'moussaka.jpg',
        descriptionKey: 'moussaka_description',
        recipeKey: 'moussaka_recipe',
        ingredients: [
            { name: 'eggplant', amount: '2 шт.' },
            { name: 'potato', amount: '300 г' },
            { name: 'beef', amount: '200 г' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'onion', amount: '80 г' },
            { name: 'bechamel', amount: '200 г' }
        ],
        cuisine: 'Greece',
        cookTime: 70,
        videoUrl: 'https://www.youtube.com/watch?v=Z_GcsR7Q99s'
    },
    {
        id: 17,
        nameKey: 'chili_con_carne',
        imageName: 'chili_con_carne.jpeg',
        descriptionKey: 'chili_con_carne_description',
        recipeKey: 'chili_con_carne_recipe',
        ingredients: [
            { name: 'beef', amount: '200 г' },
            { name: 'beans', amount: '100 г' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'onion', amount: '80 г' },
            { name: 'chili', amount: '1 шт.' },
            { name: 'spices', amount: 'по вкусу' }
        ],
        cuisine: 'Mexico',
        cookTime: 45,
        videoUrl: 'https://www.youtube.com/watch?v=QfjbGlsAq6A'
    },
    {
        id: 18,
        nameKey: 'croissant',
        imageName: 'croissant.jpeg',
        descriptionKey: 'croissant_description',
        recipeKey: 'croissant_recipe',
        ingredients: [
            { name: 'flour', amount: '100 г' },
            { name: 'butter', amount: '50 г' },
            { name: 'yeast', amount: '10 г' },
            { name: 'milk', amount: '100 мл' },
            { name: 'sugar', amount: '10 г' },
            { name: 'salt', amount: '5 г' }
        ],
        cuisine: 'France',
        cookTime: 15,
        videoUrl: 'https://www.youtube.com/watch?v=djnNkLi_K6E'
    },
    {
        id: 19,
        nameKey: 'goulash',
        imageName: 'goulash.jpg',
        descriptionKey: 'goulash_description',
        recipeKey: 'goulash_recipe',
        ingredients: [
            { name: 'beef', amount: '200 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'paprika', amount: '1 ст.л.' },
            { name: 'potato', amount: '300 г' },
            { name: 'carrot', amount: '100 г' },
            { name: 'tomato', amount: '1 шт.' }
        ],
        cuisine: 'Hungary',
        cookTime: 60,
        videoUrl: 'https://www.youtube.com/watch?v=-C_J958HyGU'
    },
    {
        id: 20,
        nameKey: 'kimchi',
        imageName: 'kimchi.jpeg',
        descriptionKey: 'kimchi_description',
        recipeKey: 'kimchi_recipe',
        ingredients: [
            { name: 'cabbage', amount: '500 г' },
            { name: 'radish', amount: '100 г' },
            { name: 'chili', amount: '1 шт.' },
            { name: 'garlic', amount: '1 зубчик' },
            { name: 'ginger', amount: '1 зубчик' },
            { name: 'salt', amount: '50 г' }
        ],
        cuisine: 'Korea',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=eTucCw1w6Ak'
    },
    {
        id: 21,
        nameKey: 'samosa',
        imageName: 'samosa.jpg',
        descriptionKey: 'samosa_description',
        recipeKey: 'samosa_recipe',
        ingredients: [
            { name: 'potato', amount: '150 г' },
            { name: 'peas', amount: '100 г' },
            { name: 'flour', amount: '100 г' },
            { name: 'spices', amount: 'по вкусу' },
            { name: 'oil', amount: '2 ст.л.' },
            { name: 'onion', amount: '80 г' }
        ],
        cuisine: 'India',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=3OZn-iCGf5s'
    },
    {
        id: 22,
        nameKey: 'cheeseburger',
        imageName: 'cheeseburger.jpg',
        descriptionKey: 'cheeseburger_description',
        recipeKey: 'cheeseburger_recipe',
        ingredients: [
            { name: 'beef', amount: '150 г' },
            { name: 'cheese', amount: '50 г' },
            { name: 'bun', amount: '1 шт.' },
            { name: 'lettuce', amount: '100 г' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'onion', amount: '80 г' }
        ],
        cuisine: 'USA',
        cookTime: 15,
        videoUrl: 'https://www.youtube.com/watch?v=_6BrRB8VCvo'
    },
    {
        id: 23,
        nameKey: 'caesar_salad',
        imageName: 'salat.jpg',
        descriptionKey: 'caesar_salad_description',
        recipeKey: 'caesar_salad_recipe',
        ingredients: [
            { name: 'lettuce', amount: '100 г' },
            { name: 'croutons', amount: '50 г' },
            { name: 'parmesan', amount: '50 г' },
            { name: 'chicken', amount: '150 г' },
            { name: 'caesar_sauce', amount: '50 г' }
        ],
        cuisine: 'Italy',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=uyB_GZNpCQE'
    },
    {
        id: 24,
        nameKey: 'draniki',
        imageName: 'draniki.jpeg',
        descriptionKey: 'draniki_description',
        recipeKey: 'draniki_recipe',
        ingredients: [
            { name: 'potato', amount: '150 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'egg', amount: '1 шт.' },
            { name: 'flour', amount: '100 г' },
            { name: 'salt', amount: '5 г' },
            { name: 'oil', amount: '2 ст.л.' }
        ],
        cuisine: 'Belarus',
        cookTime: 15,
        videoUrl: 'https://www.youtube.com/watch?v=DnaGamrxwQs'
    },
    {
        id: 25,
        nameKey: 'pizza_margherita',
        imageName: 'pizza_margherita.jpeg',
        descriptionKey: 'pizza_margherita_description',
        recipeKey: 'pizza_margherita_recipe',
        ingredients: [
            { name: 'flour', amount: '200 г' },
            { name: 'tomato', amount: '1 шт.' },
            { name: 'mozzarella', amount: '100 г' },
            { name: 'basil', amount: 'по вкусу' },
            { name: 'olive_oil', amount: '2 ст.л.' }
        ],
        cuisine: 'Italy',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=x4bphIdEc3E'
    },
    {
        id: 26,
        nameKey: 'pelmeni',
        imageName: 'pelmeni.jpeg',
        descriptionKey: 'pelmeni_description',
        recipeKey: 'pelmeni_recipe',
        ingredients: [
            { name: 'flour', amount: '150 г' },
            { name: 'beef', amount: '100 г' },
            { name: 'pork', amount: '50 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'egg', amount: '1 шт.' },
            { name: 'salt', amount: '5 г' }
        ],
        cuisine: 'Russia',
        cookTime: 20,
        videoUrl: 'https://www.youtube.com/watch?v=EXOC7J3nvb4'
    },
    {
        id: 27,
        nameKey: 'draniki_meat',
        imageName: 'draniki_meat.jpg',
        descriptionKey: 'draniki_meat_description',
        recipeKey: 'draniki_meat_recipe',
        ingredients: [
            { name: 'potato', amount: '150 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'egg', amount: '1 шт.' },
            { name: 'flour', amount: '100 г' },
            { name: 'salt', amount: '5 г' },
            { name: 'oil', amount: '2 ст.л.' },
            { name: 'meat', amount: '100 г' }
        ],
        cuisine: 'Belarus',
        cookTime: 15,
        videoUrl: 'https://www.youtube.com/watch?v=YlkiEnBR1Xo'
    },
    {
        id: 28,
        nameKey: 'shashlik',
        imageName: 'shashlik.jpg',
        descriptionKey: 'shashlik_description',
        recipeKey: 'shashlik_recipe',
        ingredients: [
            { name: 'pork', amount: '150 г' },
            { name: 'onion', amount: '80 г' },
            { name: 'vinegar', amount: '2 ст.л.' },
            { name: 'spices', amount: 'по вкусу' },
            { name: 'oil', amount: '2 ст.л.' }
        ],
        cuisine: 'Caucasus',
        cookTime: 30,
        videoUrl: 'https://www.youtube.com/watch?v=ea5gKD7mb0I'
    }
];

module.exports = { dishes };
