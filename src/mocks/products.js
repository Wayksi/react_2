const productImages = import.meta.glob('@assets/product-card/*png', {
  eager: true,
  import: 'default',
});

const imageMap = Object.fromEntries(
  Object.entries(productImages).map(([path, src]) => {
    const filename = path.split('/').pop().replace('.png', '');
    return [filename, src]
  })
);

const products = [
    {
        id: 0,
        slug: "chicken-thigh",
        imageName: "chicken-thigh",        
        name: "Филе бедра цыпленка",
        description: "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
        price: 400,
        weight: 700,
        specification: [
            {
                property: "Масса",
                value: "0,7 кг. (595-805 г.)."
            },
            {
                property: "Срок годности",
                value: "6 суток"
            },
            {
                property: "Порода",
                value: "Кобб 500ю"
            },
            {
                property: "Место происхождения",
                value: "Тверская область"
            }
        ],
        properties: [
            {
                property: "Энергетическая ценность",
                value: "135 ккал./565 кДж"
            },
            {
                property: "Пищевая ценность",
                value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
            }
        ]
    },
    {
        id: 1,
        slug: "goose-thigh",
        imageName: "goose-thigh",        
        name: "Филе бедра гуся",
        description: "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
        price: 500,
        weight: 600,
        specification: [
            {
                property: "Масса",
                value: "0,6 кг. (495-705 г.)."
            },
            {
                property: "Срок годности",
                value: "5 суток"
            },
            {
                property: "Порода",
                value: "Кобб 200ю"
            },
            {
                property: "Место происхождения",
                value: "Тверская область"
            }
        ],
        properties: [
            {
                property: "Энергетическая ценность",
                value: "335 ккалю./765 кДж"
            },
            {
                property: "Пищевая ценность",
                value: "белки - 13,8 г., жиры - 18,7 г., углеводы - 0 г.; на 100 г."
            }
        ]
    },
    {
        id: 2,
        slug: "cheese-AMST",
        imageName: "cheese-AMST",        
        name: 'Сыр "Амст" с пажитником',
        description: "Базовый полутвердый сыр. Благодаря семенам пажитника, сыр приобретает ореховое послевкусие, которое идеально сочетается со сливочными нотками. Выдержка 1 месяц.",
        price: 400,
        weight: 300,
        specification: [
            {
                property: "Масса",
                value: "0,3 кг."
            },
            {
                property: "Срок годности",
                value: "30 суток"
            },
            {
                property: "Жирность",
                value: "45%"
            },
            {
                property: "Условия хранения",
                value: "от 0 до 10 °С."
            },
            {
                property: "Место происхождения",
                value: "Тверская область"
            }
        ],
        properties: [
            {
                property: "Энергетическая ценность",
                value: " 323 ккал. / 1407 кДж."
            },
            {
                property: "Пищевая ценность",
                value: "белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г."
            }
        ]
    },
    {
        id: 3,
        slug: "cheese-camamber",
        imageName: "cheese-camamber",        
        name: 'Сыр "Камамбер"',
        description: "Мягкий сыр из пастеризованного коровьего молока с добавлением культур белой плесени.",
        price: 390,
        weight: 200,
        specification: [
            {
                property: "Масса",
                value: "0,3 кг."
            },
            {
                property: "Срок годности",
                value: "30 суток"
            },
            {
                property: "Жирность",
                value: "45%"
            },
            {
                property: "Условия хранения",
                value: "от 0 до 10 °С."
            },
            {
                property: "Место происхождения",
                value: "Тверская область"
            }
        ],
        properties: [
            {
                property: "Энергетическая ценность",
                value: " 323 ккал. / 1407 кДж."
            },
            {
                property: "Пищевая ценность",
                value: "белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г."
            }
        ]
    },
    {
        id: 4,
        slug: "may-honey",
        imageName: "may-honey",        
        name: "Мед майский горный.",
        description: "Мед урожая 2021 года. Необычно нежный майский мед, собранный в субтропических рощах Северо-кавказского заповедника, раскрывается целой гаммой цитрусовых оттенков.",
        price: 590,
        weight: 200,
        specification: [
            {
                property: "Масса",
                value: "0,2 кг."
            },
            {
                property: "Срок годности",
                value: "24 месяца"
            },
            {
                property: "Условия хранения",
                value: "от 5 до 20 °С."
            }
        ],
        properties: [
            {
                property: "Энергетическая ценность",
                value: " 303 ккал. / 1407 кДж."
            },
            {
                property: "Пищевая ценность",
                value: "белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г."
            }
        ]
    }
];

const productsWithImages = products.map((product) => ({
  ...product,
  src: imageMap[product.imageName] || '',
}));

export default productsWithImages;
