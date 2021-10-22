import { Product } from '../interface/product.interface';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'Soap',
        descriptions:
            'Duis et aliquip reprehenderit in in anim velit duis irure labore. Anim velit est qui ullamco aute consectetur incididunt ullamco commodo do. Do pariatur nulla deserunt eu Lorem consequat officia. Nostrud nisi esse cupidatat reprehenderit do pariatur veniam id consequat nulla pariatur enim incididunt. Anim ipsum reprehenderit esse mollit id Lorem consequat aliqua proident anim. Culpa esse fugiat deserunt laborum tempor. Minim dolore reprehenderit ad veniam aute amet pariatur commodo adipisicing do excepteur.',
        img: ['../../../assets/img/soap.jpg', '../../../assets/img/soap-1.jpg', '../../../assets/img/soap-2.jpg'],
        price: 1,
        moreInfo: [
            { name: 'Color', text: 'white, yellow, black' },
            { name: 'Types', text: 'liquid, strong, powdery' },
            { name: 'Production', text: 'USSR' },
            { name: 'Number of products', text: '123' },
        ],
    },
    {
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
            { name: 'Color', text: 'red, black, blue, white' },
            { name: 'Strong', text: '350 w' },
            { name: 'Containment volume', text: '5l' },
            { name: 'Noise level', text: '80Db' },
            { name: 'Weight', text: '5.5 kg (cylinder only)' },
            { name: 'Operation Radius', text: '15 m' },
            { name: 'Number of products', text: '20' },
        ],
    },
    {
        id: '3',
        title: 'hadron-collider',
        descriptions:
            'Duis et aliquip reprehenderit in in anim velit duis irure labore. Anim velit est qui ullamco aute consectetur incididunt ullamco commodo do. Do pariatur nulla deserunt eu Lorem consequat officia. Nostrud nisi esse cupidatat reprehenderit do pariatur veniam id consequat nulla pariatur enim incididunt. Anim ipsum reprehenderit esse mollit id Lorem consequat aliqua proident anim. Culpa esse fugiat deserunt laborum tempor. Minim dolore reprehenderit ad veniam aute amet pariatur commodo adipisicing do excepteur.',
        img: [
            '../../../assets/img/hadron-collider.jpg',
            '../../../assets/img/hadron-collider-1.jpg',
            '../../../assets/img/hadron-collider-2.jpg',
        ],
        price: 23000000000,
        moreInfo: [
            { name: 'Long', text: '26,7 km' },
            { name: 'Deep tunnel', text: 'between 50 and 175 metres' },
            { name: 'Number of products', text: '1' },
        ],
    },
    {
        id: '4',
        title: 'PS 5',
        descriptions:
            'Duis et aliquip reprehenderit in in anim velit duis irure labore. Anim velit est qui ullamco aute consectetur incididunt ullamco commodo do. Do pariatur nulla deserunt eu Lorem consequat officia. Nostrud nisi esse cupidatat reprehenderit do pariatur veniam id consequat nulla pariatur enim incididunt. Anim ipsum reprehenderit esse mollit id Lorem consequat aliqua proident anim. Culpa esse fugiat deserunt laborum tempor. Minim dolore reprehenderit ad veniam aute amet pariatur commodo adipisicing do excepteur.',
        img: ['../../../assets/img/ps5.jpg', '../../../assets/img/ps5-1.jpg', '../../../assets/img/ps5-2.jpg'],
        price: 960,
        moreInfo: [
            {
                name: 'Processor',
                text: 'an eight-core AMD Ryzen 3rd generation on 7 nm Zen 2 microarchitecture with a clock variable of 3.5 GHz.',
            },
            {
                name: 'Graphics chip',
                text: 'is a custom one based on the AMD RDNA2 architecture. Characteristics 2.23 Hz. In theory, the PS5 will allow you to play in 8K resolution. However, now games with a resolution of this resolution, the available maximum is 4K. Also, the new product at the hardware level supports ray tracing technology in games',
            },
            {
                name: 'System memory',
                text: '16 GB GDDR6. The main memory on the disk is 825 GB. A slot is provided for expanding storage capacity using an external SSD',
            },
            {
                name: 'Drive',
                text: 'Blu-Ray 4K UHD',
            },
            {
                name: 'The total processing power of the console',
                text: 'is 10.28 teraflops',
            },
            { name: 'Number of products', text: '100' },
        ],
    },
    {
        id: '5',
        title: 'Macbook Apple M1 Max',
        descriptions:
            'Если вам нужен ноутбук Mac с максимальным уровнем производительности, выберите чип M1 Max. По сравнению с M1 Pro у него вдвое больше графических ядер и в два раза выше пропускная способность памяти. У него также более мощный медиапроцессор — он позволяет воспроизводить до 7 потоков видео 8K.⁸ При использовании чипа M1 Max на компьютер можно установить до 64 ГБ объединённой памяти — в такой конфигурации ваш MacBook Pro станет ещё быстрее и сможет с лёгкостью обрабатывать даже очень большие файлы.',
        img: ['../../../assets/img/mbp16.jpg', '../../../assets/img/mbp16-1.jpg', '../../../assets/img/mbp16-2.jpg'],
        price: 7500,
        moreInfo: [
            {
                name: 'Processor',
                text: 'M1 Max chip with 10-core CPU, 32-core GPU, and 16-core Neural Engine',
            },
            {
                name: 'Memory',
                text: '64GB unified memory',
            },
            {
                name: 'SSD',
                text: '8TB SSD storage',
            },
            {
                name: 'Display',
                text: '16-inch Liquid Retina XDR display',
            },
            {
                name: 'Ports',
                text: 'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
            },
            {
                name: 'Power',
                text: '140W USB-C Power Adapter',
            },
            {
                name: 'Keyboard',
                text: 'Backlit Magic Keyboard with Touch ID - US English',
            },
            { name: 'Number of products', text: '2000' },
        ],
    },
];
