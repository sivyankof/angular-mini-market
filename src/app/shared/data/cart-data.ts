import { Cart } from '../interface/cart.interface';

export const CART_LIST: Cart[] = [
    {
        product: {
            id: '1',
            title: 'Soap',
            descriptions:
                'Duis et aliquip reprehenderit in in anim velit duis irure labore. Anim velit est qui ullamco aute consectetur incididunt ullamco commodo do. Do pariatur nulla deserunt eu Lorem consequat officia. Nostrud nisi esse cupidatat reprehenderit do pariatur veniam id consequat nulla pariatur enim incididunt. Anim ipsum reprehenderit esse mollit id Lorem consequat aliqua proident anim. Culpa esse fugiat deserunt laborum tempor. Minim dolore reprehenderit ad veniam aute amet pariatur commodo adipisicing do excepteur.',
            img: ['../../../assets/img/soap.jpg', '../../../assets/img/soap-1.jpg', '../../../assets/img/soap-2.jpg'],
            price: 1,
            moreInfo: [
                {
                    name: 'Color',
                    text: 'white, yellow, black',
                },
                {
                    name: 'Types',
                    text: 'liquid, strong, powdery',
                },
                {
                    name: 'Production',
                    text: 'USSR',
                },
                {
                    name: 'Number of products',
                    text: '123',
                },
            ],
            count: 0,
        },
        count: 2,
    },
    {
        product: {
            id: '2',
            title: 'Vacuum cleaner',
            descriptions:
                'Duis et aliquip reprehenderit in in anim velit duis irure labore. Anim velit est qui ullamco aute consectetur incididunt ullamco commodo do. Do pariatur nulla deserunt eu Lorem consequat officia. Nostrud nisi esse cupidatat reprehenderit do pariatur veniam id consequat nulla pariatur enim incididunt. Anim ipsum reprehenderit esse mollit id Lorem consequat aliqua proident anim. Culpa esse fugiat deserunt laborum tempor. Minim dolore reprehenderit ad veniam aute amet pariatur commodo adipisicing do excepteur.',
            img: [
                '../../../assets/img/vacuun-cleaner.jpg',
                '../../../assets/img/vacuun-cleaner-3.jpg',
                '../../../assets/img/vacuun-cleaner-2.jpg',
            ],
            price: 150,
            moreInfo: [
                {
                    name: 'Color',
                    text: 'red, black, blue, white',
                },
                {
                    name: 'Strong',
                    text: '350 w',
                },
                {
                    name: 'Containment volume',
                    text: '5l',
                },
                {
                    name: 'Noise level',
                    text: '80Db',
                },
                {
                    name: 'Weight',
                    text: '5.5 kg (cylinder only)',
                },
                {
                    name: 'Operation Radius',
                    text: '15 m',
                },
                {
                    name: 'Number of products',
                    text: '20',
                },
            ],
            count: 0,
        },
        count: 2,
    },
];
