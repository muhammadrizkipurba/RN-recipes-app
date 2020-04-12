import Category from "../models/category";
import Recipe from "../models/recipe";

export const CATEGORIES = [
    new Category('c1', 'Nasi', '#828c9f', '../assets/img/Nasi.jpg'),
    new Category('c2', 'Ayam', '#2c96c0', '../assets/img/Ayam.jpg'),
    new Category('c3', 'Daging', '#7e3806', '../assets/img/Daging.jpg'),
    new Category('c4', 'Ikan', '#93ab5a', '../assets/img/Ikan.jpg'),
    new Category('c5', 'Udang', '#5cb3b7', '../assets/img/Udang.jpg'),
    new Category('c6', 'Mie', '#c4910a', '../assets/img/Mie.jpg'),
    new Category('c7', 'Sayur', '#5cb228', '../assets/img/Sayur.jpg'),
    new Category('c8', 'Sambal', '#c93030', '../assets/img/Sambal.jpg'),
    new Category('c9', 'Minuman', '#1c7ae1', '../assets/img/Minuman.jpg'),
    new Category('c10', 'Kue', '#5c75ba', '../assets/img/Kue.jpg)'),
];

export const RECIPES = [
    // AYAM
    new Recipe(
        'm1',
        ['c2'],
        'Richeese Fire Wings + Saus Keju',
        'affordable',
        'challenging',
        'https://resepkoki.co/wp-content/uploads/2019/03/richeese-fire-wings-05.jpg',
        60,
        [
            '1/2 kg sayap ayam',
            '1 sachet tepung bumbu sasa',
            '3 buah bawang putih',
            '4 sdm saos sambal',
            '2 sdm saos tomat',
            '4 sdm saos barbeque',
            '1 sdt minyak wijen',
            '1 sdm saos tiram',
            '1 sdm madu',
            '1/2 sdt garam',
            '1 sdm bon cabe (level 10)',
            '100 ml susu UHT, susu bubuk dan air',
            'Keju cheddar',
            '1 sachet bubur tabur kentang rasa keju',
            '1 sdm maizena',
            '1 sdm margarin',
        ],
        [
            'Baluri Ayam Dengan Tepung.',
            'Goreng Ayam hingga matang, tiriskan dan sisihkan.',
            'Panaskan 1 sdm margarin. Masukkan bawang putih, tumis hingga harum. Masukkan saus sambal, saus tomat, minyak wijen, saus tiram, garam, madu, dan boncabe.',
            'Masukkan ayam goreng ke dalam bahan saus pedas. Aduk hingga rata. Masak hingga bumbu meresap dengan api kecil.',
            'Panaskan 1 sdm margarin, masukkan susu cair, dan keju parut. Aduk hingga kental, biarkan keju meleleh jangan lupa masak dengan api kecil.',
            'Tambahkan bumbu keju tabur bubuk kemudian aduk hingga rata. Masukkan larutan air dan maizena, aduk hingga kental dan meletup.',
            'Siapkan ayam di atas piring kemudian taburi dengan biji wijen dan siapkan saos kejunya.',
        ],
        true
    ),
    new Recipe(
        'm2',
        ['c2'],
        'Ayam Bakar Happy Call',
        'pricey',
        'simple',
        'https://resepkoki.co/wp-content/uploads/2019/03/ayam-bakar-HP-07.jpg',
        40,
        [
            '1 ekor ayam',
            '2 batang serai (bagian putih)',
            '4 lembar daun salam',
            '20 gr asam jawa + 3sdm air panas',
            '500 ml air kelapa',
            '50 gr gula merah',
            '10 butir bawang merah',
            '5 siung bawang putih',
            '5 butir kemiri',
            '1 sdm ketumbar',
            '1 ruas kunyit',
            '1 ruas lengkuas',
            '1 sdt garam',
            '1 sdm gula pasir',
            '1/2 sdt merica bubuk',
            '1 sdm kecap manis',
        ],
        [
            'Haluskan bahan bumbu yang sudah disiapkan tadi',
            'Baluri ayam dengan bumbu yang sudah dihaluskan',
            'Panaskan wajan, masukkan bumbu halus tumis hingga wangi.',
            'Masukkan daun salam dan sereh aduk lagi hingga tercium aroma wangi.',
            'Tambahkan air asem jawa, aduk merata hingga tercampur ke bumbu.',
            'Masukkan potongan ayam, aduk merata dengan bumbu.',
            'Masukkan air kelapa aduk merata dan masak hingga bumbu meresap dan air mengering',
            'Siapkan Happy Call Jumbo 32cm olesi kedua sisi pan dengan sedikit mentega.',
            'Setelah panas masukkan potongan ayam bumbu tadi masak hingga matang.',
            'Setelah ayam matang kecokelatan, angkat dan siap untuk di hidangkan bersama lalap dan sambal',
        ],
        false
    ),
    new Recipe(
        'm3',
        ['c2'],
        'Chicken Karaage Jepang',
        'pricey',
        'simple',
        'https://resepkoki.co/wp-content/uploads/2017/03/00-chicken-karaage.jpg',
        35,
        [
            '350 gr daging ayam fillet',
            '150 gr tepung beras',
            '100 gr tepung terigu',
            '4 btr telur ayam',
            '1 sdt lada putih',
            '1 sdt garam',
        ],
        [
            'Masukkan daging ayam yang sudah di potong, tambahkan garam dan lada.',
            'Aduk rata dan diamkan hingga bumbu meresap.',
            'Di mangkok yang lain, masukkan tepung beras dan tepung terigu, aduk rata.',
            'Masukkan kocokan telur, aduk rata.',
            'Masukkan daging ayam yang sudah dibumbui, aduk hingga daging ayam terbalur tepung.',
            'Panaskan minyak cukup banyak. Masukkan daging ayam. Masak hingga matang.',
            'Lakukan hingga semua daging ayam habis.',
            'Sajikan dengan saus sambal atau saus tomat untuk pelengkapnya.',
        ],
        false
    ),
    new Recipe(
        'm4',
        ['c2'],
        'Ayam Krispi Saos Pedas',
        'pricey',
        'challenging',
        'https://craftlog.com/m/i/1940170=s1280=h960',
        60,
        [
            '2 potong dada ayam tanpa tulang',
            '2 sdm tepung maizena',
            '1 butir putih telur',
            '1 buah bawang pre',
            '4 buah daun bawang',
            '1 buah bawang merah',
            '1 buah lombok hijau',
            '2 buah lombok merah',
            '2 sdm kecap asin',
            '1 sdt gula palm',
            '1/2 sdt jahe parut',
            'Garam',
            'Lada',
        ],
        [
            'Potong tipis-tipis daging dada ayam.',
            'Campurkan dengan sedikit garam, lada, parutan jahe dan 1 sdm kecap asin aduk rata dan sisihkan',
            'Potong daun pre memanjang tipis-tipis. Goreng sebentar sampai kering kecoklatan. Angkat dan sisihkan',
            'Potong tipis cabe merah besar, cabe hijau besar dan daun bawang. Sisihkan',
            'Dalam mangkok terpisah masukkan kecap asin, sedikit air dan gula palm, diaduk hingga rata. Sisihkan dahulu.',
            'Tambahkan tepung maezena dan putih telur ke dalam wadah yang berisi ayam bumbu tadi, aduk semua hingga tercampur rata.',
            'Siapkan wajan, beri minyak secukupnya dan goreng daging ayam sampai matang kecoklatan dan terlihat krispi di kulitnya.',
            'Setelah kecokelatan angkat dan tiriskan minyak dari dari daging ayam. Sisihkan terlebih dahulu.',
            'Tumis bawang merah, cabe hijau dan cabe merah dan daun bawang yang tadi sudah dipotong tipis-tipis.',
            'Tambahkan 1 siung bawang putih cincang, dan saos yang sudah kita campur tadi.',
            'Lalu tambahkan ayam goreng krispinya, masak sampai bumbu tercampur rata.',
            'Sajikan di atas piring dan beri taburan bawang pre goreng.',
        ],
        false
    ),
    new Recipe(
        'm5',
        ['c2'],
        '',
        'affordable',
        'simple',
        'https://i.pinimg.com/474x/05/57/0a/05570abdaaaff39f18b3ecdea407301c.jpg',
        30,
        [
            '1/2 ekor ayam',
            '1 butir jeruk nipis',
            '3 sdm minyak makan',
            '3 butir kapulaga',
            '1 lembar daun salam',
            '2 batang serai',
            '500 ml santan kelapa',
            '1 mata asam jawa',
            'Garam secukupnya',
            'Bawang merah goreng',
        ],
        [
            'Siapkan ayam, potong menjadi 8 bagian',
            'Haluskan 6 butir bawang merah, 3 siung bawang putih, 4 buah cabai merah keriting, 1.5 sdt ketumbar, 1/2 sdt jintan, 1/4 sdt adas, 2 cm kunyit, 3 cm lengkuas',
            'Bersihkan ayam, lumuri dengan air jeruk nipis. Sisihkan.',
            'Panaskan minyak, tumis bumbu halus bersama kapulaga, daun salam dan serai hingga harum dan matang.',
            'Masukkan potongan ayam, aduk sampai kaku.',
            'Beri santan, aduk rata. Masak sampai mendidih. Kecilkan api.',
            'Tambahkan asam, garam. Aduk, masak sampai santan kental.',
            'Angkat. Sajikan gulai ayam dengan ditaburi bawang goreng.',
        ],
        true
    ),
    // NASI
    new Recipe(
        'm1',
        ['c1'],
        'Nasi Ayam Hainan',
        'luxurious',
        'challenging',
        'https://resepkoki.co/wp-content/uploads/2016/08/nasi-hainan-ayam.jpg',
        60,
        [
            '2 cup beras',
            '2 gr bawang goreng',
            '6 siung bawang putih',
            '35 liter kaldu ayam',
            'Garam',
            'Timun',
            'Minyak wijen ',
            '1 kg paha ayam',
            '4 batang daung bawang',
            '3 gelas air',
            '1 1/2 gelas air es',
            '6 ruas jahe',
            '35 gr cilantro',
            '100 gr bawang bombay',
            '2 1/2 sdt minyak zaitun',
            '2 sdt garam',
        ],
        [
            'Iris sesuai selera timun yang sudah disiapkan.',
            'Siapkan rice cooker lalu masukkan bawang putih, bawang bombai, ciliantro dan daun bawang. Lalu tambahkan 3 gelas air. Masak hingga mendidih.',
            'Lumuri ayam yang sudah disiapkan dengan bawang, lalu ratakan.',
            'Masukkan ayam yang sudah dilumuri garam kedalam rice cooker yang berisi daun bawang dan lainnya, lalu masak hingga matang. Sisihkan.',
            'Jika sudah matang, sisihkan ayam ke wadah berbeda, simpan sisa kaldu ayam.',
            'Siapkan air es dan siramkan kepada daging ayam.',
            'Pisahkan daging dan tulang ayam. Sisa tulang ayam disimpan untuk dibuat kaldu.',
            'Potongan daging ayam yang cukup besar tempatkan kedalam piring dan lumuri dengan minyak wijen.',
            'Didihkan kaldu yang sisa tadi lalu masukkan tulang ayam, tunggu sampai kaldu tersisa sekitar 2 gelas air.',
            'Saring kuah kaldu, buang bahan bumbu serta tulang. Sisihkan.',
            'Cuci bersih beras yang sudah disipakn, lalu tiriskan.',
            'Panaskan rice cooker, tambahkan sedikit minyak zaitun. Lalu masukkan jahe dan bawang putih yang sudah di parut.',
            'Masukkan nasi dan bawang goreng, aduk sampai harum.',
            'Setelah nasi cukup harum, tambahkan kaldu tadi dan masak nasi hingga matang sempurna.',
            'Setelah nasi matang, Nasi Ayam Hainan siap disajikan.',
        ],
        false
    ),
    // ------ continue from here
    new Recipe(
        'm2',
        ['c1'],
        'Ayam Bakar Happy Call',
        'pricey',
        'simple',
        'https://resepkoki.co/wp-content/uploads/2019/03/ayam-bakar-HP-07.jpg',
        40,
        [
            '1 ekor ayam',
            '2 batang serai (bagian putih)',
            '4 lembar daun salam',
            '20 gr asam jawa + 3sdm air panas',
            '500 ml air kelapa',
            '50 gr gula merah',
            '10 butir bawang merah',
            '5 siung bawang putih',
            '5 butir kemiri',
            '1 sdm ketumbar',
            '1 ruas kunyit',
            '1 ruas lengkuas',
            '1 sdt garam',
            '1 sdm gula pasir',
            '1/2 sdt merica bubuk',
            '1 sdm kecap manis',
        ],
        [
            'Haluskan bahan bumbu yang sudah disiapkan tadi',
            'Baluri ayam dengan bumbu yang sudah dihaluskan',
            'Panaskan wajan, masukkan bumbu halus tumis hingga wangi.',
            'Masukkan daun salam dan sereh aduk lagi hingga tercium aroma wangi.',
            'Tambahkan air asem jawa, aduk merata hingga tercampur ke bumbu.',
            'Masukkan potongan ayam, aduk merata dengan bumbu.',
            'Masukkan air kelapa aduk merata dan masak hingga bumbu meresap dan air mengering',
            'Siapkan Happy Call Jumbo 32cm olesi kedua sisi pan dengan sedikit mentega.',
            'Setelah panas masukkan potongan ayam bumbu tadi masak hingga matang.',
            'Setelah ayam matang kecokelatan, angkat dan siap untuk di hidangkan bersama lalap dan sambal',
        ],
        false
    ),
    new Recipe(
        'm3',
        ['c1'],
        'Chicken Karaage Jepang',
        'pricey',
        'simple',
        'https://resepkoki.co/wp-content/uploads/2017/03/00-chicken-karaage.jpg',
        35,
        [
            '350 gr daging ayam fillet',
            '150 gr tepung beras',
            '100 gr tepung terigu',
            '4 btr telur ayam',
            '1 sdt lada putih',
            '1 sdt garam',
        ],
        [
            'Masukkan daging ayam yang sudah di potong, tambahkan garam dan lada.',
            'Aduk rata dan diamkan hingga bumbu meresap.',
            'Di mangkok yang lain, masukkan tepung beras dan tepung terigu, aduk rata.',
            'Masukkan kocokan telur, aduk rata.',
            'Masukkan daging ayam yang sudah dibumbui, aduk hingga daging ayam terbalur tepung.',
            'Panaskan minyak cukup banyak. Masukkan daging ayam. Masak hingga matang.',
            'Lakukan hingga semua daging ayam habis.',
            'Sajikan dengan saus sambal atau saus tomat untuk pelengkapnya.',
        ],
        false
    ),
    new Recipe(
        'm4',
        ['c1'],
        'Ayam Krispi Saos Pedas',
        'pricey',
        'challenging',
        'https://craftlog.com/m/i/1940170=s1280=h960',
        60,
        [
            '2 potong dada ayam tanpa tulang',
            '2 sdm tepung maizena',
            '1 butir putih telur',
            '1 buah bawang pre',
            '4 buah daun bawang',
            '1 buah bawang merah',
            '1 buah lombok hijau',
            '2 buah lombok merah',
            '2 sdm kecap asin',
            '1 sdt gula palm',
            '1/2 sdt jahe parut',
            'Garam',
            'Lada',
        ],
        [
            'Potong tipis-tipis daging dada ayam.',
            'Campurkan dengan sedikit garam, lada, parutan jahe dan 1 sdm kecap asin aduk rata dan sisihkan',
            'Potong daun pre memanjang tipis-tipis. Goreng sebentar sampai kering kecoklatan. Angkat dan sisihkan',
            'Potong tipis cabe merah besar, cabe hijau besar dan daun bawang. Sisihkan',
            'Dalam mangkok terpisah masukkan kecap asin, sedikit air dan gula palm, diaduk hingga rata. Sisihkan dahulu.',
            'Tambahkan tepung maezena dan putih telur ke dalam wadah yang berisi ayam bumbu tadi, aduk semua hingga tercampur rata.',
            'Siapkan wajan, beri minyak secukupnya dan goreng daging ayam sampai matang kecoklatan dan terlihat krispi di kulitnya.',
            'Setelah kecokelatan angkat dan tiriskan minyak dari dari daging ayam. Sisihkan terlebih dahulu.',
            'Tumis bawang merah, cabe hijau dan cabe merah dan daun bawang yang tadi sudah dipotong tipis-tipis.',
            'Tambahkan 1 siung bawang putih cincang, dan saos yang sudah kita campur tadi.',
            'Lalu tambahkan ayam goreng krispinya, masak sampai bumbu tercampur rata.',
            'Sajikan di atas piring dan beri taburan bawang pre goreng.',
        ],
        false
    ),
    new Recipe(
        'm5',
        ['c1'],
        '',
        'affordable',
        'simple',
        'https://i.pinimg.com/474x/05/57/0a/05570abdaaaff39f18b3ecdea407301c.jpg',
        30,
        [
            '1/2 ekor ayam',
            '1 butir jeruk nipis',
            '3 sdm minyak makan',
            '3 butir kapulaga',
            '1 lembar daun salam',
            '2 batang serai',
            '500 ml santan kelapa',
            '1 mata asam jawa',
            'Garam secukupnya',
            'Bawang merah goreng',
        ],
        [
            'Siapkan ayam, potong menjadi 8 bagian',
            'Haluskan 6 butir bawang merah, 3 siung bawang putih, 4 buah cabai merah keriting, 1.5 sdt ketumbar, 1/2 sdt jintan, 1/4 sdt adas, 2 cm kunyit, 3 cm lengkuas',
            'Bersihkan ayam, lumuri dengan air jeruk nipis. Sisihkan.',
            'Panaskan minyak, tumis bumbu halus bersama kapulaga, daun salam dan serai hingga harum dan matang.',
            'Masukkan potongan ayam, aduk sampai kaku.',
            'Beri santan, aduk rata. Masak sampai mendidih. Kecilkan api.',
            'Tambahkan asam, garam. Aduk, masak sampai santan kental.',
            'Angkat. Sajikan gulai ayam dengan ditaburi bawang goreng.',
        ],
        true
    ),
    // 
]