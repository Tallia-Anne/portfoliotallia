const projet1 = "https://afro-dream.fr/img/header%20(1).03800f06.jpg"

const projets = [

    {
        id: 1,
        title: 'Afro-dream',
        image: projet1,
        category: 'SiteWeb',
        année: 2021,
        description: 'Le projet est un siteweb qui est un site e-commerce qui vend des produits pour les cheveux qui concerne tous les femmes. Qui permet de les aider à trouver tes bons produits',
        lien1: 'https://afro-dream.fr/',
        lien2: 'https://github.com/Tallia-Anne/dream'
    },
    {
        id: 2,
        title: 'Myessentials',
        année: 2021,
        image: require('../assets/myessentialsbg.JPG'),
        category: 'SiteWeb',
        description: 'Le projet est un siteweb qui est un site gestion de donnée et un blog. Ce blog qui donne des conseils beauté sur les cheveux et les soins de la peau. De plus de frabriquer des produits cosmétiques.',
        lien1: 'https://myessentialsblog.fr/',
        lien2: ''
    },
    {
        id: 3,
        title: 'Youtubemusic application',
        année: 2022,
        image: require('../assets/mockup.jpg'),
        category: 'Design',
        description: 'Le projet est un design UX réaliser par figma',
        lien1: 'https://www.behance.net/gallery/141731711/Youtube-premium',
        lien2: ''
    },
    {
        id: 4,
        title: 'FreshComesty',
        image: require('../assets/commerce.png'),
        category: 'SiteWeb',
        description: 'Découvrez notre gamme exclusive de produits cosmétiques, soigneusement sélectionnés pour sublimer votre beauté naturelle. Chez FreshComesty, nous croyons que chaque personne mérite des soins de qualité, adaptés à ses besoins spécifiques.  ',
        lien1: 'https://commerce-five-xi-70.vercel.app/',
        lien2: '',
    }
    , 
     {
        id: 5,
        title: 'Inhouse',
        image: require('../assets/inhouse.png'),
        category: 'SiteWeb',
        description: 'Découvrez notre gamme exclusive de produits electromaneger Chez Inhouse.  ',
        lien1: '',
        lien2: '',
    }
    , 
    
    {
        id: 6,
        title: 'Mango',
        année: 2022,
        image: require('../assets/Mangomaquette_page-0001.jpg'),
        category: 'Design',
        description: 'Le projet est une Maquette sur Mango',
        lien1: 'https://www.behance.net/gallery/141730757/Mango',
        lien2: ''
    },
    {
        id: 7,
        title: 'Maquette de stranger thing',
        année: 2022,
        image: require('../assets/strangerthings.jpg'),
        category: 'Design',
        description: 'Le projet est un siteweb qui est un site gestion de donnée et un blog. Ce blog qui donne des conseils beauté sur les cheveux et les soins de la peau. De plus de frabriquer des produits cosmétiques.',
        lien1: 'https://www.behance.net/gallery/145297433/Stranger-thing-App-maquettes',
        lien2: ''
    },
    {
        id: 8,
        title: 'Poste sur pinterest1',
        année: 2021,
        image: require('../assets/Floral Photo Fiançailles Faire-part Idées Blog Image (1).jpg'),
        category: 'Design',
        description: 'Le projet est un siteweb qui est un site gestion de donnée et un blog. Ce blog qui donne des conseils beauté sur les cheveux et les soins de la peau. De plus de frabriquer des produits cosmétiques.',
        lien1: 'https://www.behance.net/erinawambiekele',
        lien2: ''
    },


    {

        id: 9,
        title: 'Harry Potter',
        année: 2022,
        image: require('../assets/harryordi.jpg'),
        category: 'SiteWeb',
        description: 'Le projet est un siteweb qui est un site gestion de donnée et un blog. Ce blog qui donne des conseils beauté sur les cheveux et les soins de la peau. De plus de frabriquer des produits cosmétiques.',
        lien1: 'https://harrypottertallia.netlify.app/',
        lien2: '',
        video: require('../assets/video/harrypotter.webm'),
    },

    {
        id: 10,
        title: 'Carte de visite Serge',
        année: 2021,
        image: require('../assets/285e0c127604347.Y3JvcCw5MjIsNzIxLDAsMTg.webp'),
        category: 'Design',
        description: 'Ce projet est une carte de visite pour le traiteur au nom Serge Thierry. Vous pouvez découvir ses plates sur instagram. le lien esy en bas',
        lien1: 'https://www.instagram.com/sergethierrytraiteur/?hl=fr',
        lien2: ''
    },
    {
        id: 11,
        title: 'Sois ta propre vérité',
        année: 2021,
        image: require('../assets/mockupsoisverite.jpg'),
        category: 'Design',
        description: 'Le projet est un maquette sur un blog de cuisine ',
        lien1: 'https://www.behance.net/gallery/123329999/Sois-ta-propre-verit',
        lien2: ''
    },
    {
        id: 12,
        title: 'Holigreen Charlie',
        année: 2022,
        image: require('../assets/logoholi.webp'),
        category: 'Design',
        description: 'Le logo pour une influence sur instagramme  ',
        lien1: 'https://www.behance.net/gallery/137655791/holigreenCharlie-Logo',
        lien2: ''
    },
    {
        id: 13,
        title: 'Digital School France',
        année: 2021,
        image: require('../assets/c61e94119064397.6095907157344.jpg'),
        category: 'Design',
        description: 'Le logo pour une influence sur instagramme  ',
        lien1: 'https://www.behance.net/gallery/119064397/Projet-de-digital',
        lien2: ''
    },
    {
        id: 14,
        title: 'Dyslogie',
        image: require('../assets/dyslogieweb.JPG'),
        category: 'SiteWeb',
        description: 'Ce site va permet de trouver des sites ou logiciels pour aider les personnes qui souffrent d’un trouble apprentissage facilité au travail et à lécole. Et prendre du plaisir pour d’apprendre les cours ou la lecture. À progresser au niveau des études. Et de prendre facilement les prises de notes.Cela permet daider aux parents de montrer à leur enfants de travailler ensemble',
        lien1: 'dyslogiereact.vercel.app',
        lien2: 'https://github.com/Tallia-Anne/Dyslogiereact',
    },
    {
        id: 15,
        title: 'Jeuxhtml',
        image: require('../assets/jeuxhtml.JPG'),
        category: 'SiteWeb',
        description: 'un jeux',
        lien1: 'https://tallia-anne.github.io/jeuxhtml/',
        lien2: 'https://github.com/Tallia-Anne/jeuxhtml',
    },



    {
        id: 16,
        title: 'Carte de viste de Tallia',
        image: require('../assets/cartevisitetallia.jpg'),
        category: 'Design',
        description: 'Voici ma carte de visite ',
        lien1: 'https://www.behance.net/gallery/127604347/Serge-Thierry-international',
        lien2: '',
    }
    , {
        id: 17,
        title: 'Initiative243',
        image: require('../assets/initiativesphoto.jpg'),
        category: 'SiteWeb',
        description: 'Initiative 243 est une association internationale fondée en France selon la loi 1901 et dont l’objectif est de fédérer des compétences internationales dans la promotion et la réalisation, en France et en République Démocratique du Congo, des projets éducatifs, culturels et socio-économiques durables. ',
        lien1: 'https://initiative243.org/',
        lien2: '',
    }, {
        id: 18,
        title: 'Quiz anime',
        image: require('../assets/manga.JPG'),
        category: 'SiteWeb',
        description: 'Quiz sur les mangas ',
        lien1: 'http://quizreact-gamma.vercel.app/',
        lien2: '',
    },

    {
        id: 19,
        title: 'Legal Team Management',
        image: require('../assets/legalteam.JPG'),
        category: 'SiteWeb',
        description: 'LTM vous accompagne dans votre projet d’entreprise, de l’idée de création jusqu’à la réalisation des formalités nécessaires pour mettre en place votre structure. Quelle que soit la forme juridique envisagée, vous bénéficiez d’un accompagnement personnalisé et adapté à votre projet de création. ',
        lien1: 'http://www.legalteam-management.fr/index.php/about-us/',
        lien2: '',
    }
    , {
        id: 20,
        title: 'SakuraFlower',
        image: require('../assets/sakuraflower.JPG'),
        category: 'SiteWeb',
        description: 'Le site web est entierement faire en Boostrap',
        lien1: 'https://btpprojet03.vercel.app/',
        lien2: '',
    }
    , {
        id: 21,
        title: 'changer-le-fond',
        image: require('../assets/fond.JPG'),
        category: 'SiteWeb',
        description: 'Mini projet en javascript qui consiste de changer le fond',
        lien1: 'https://changer-le-fond-js.vercel.app/',
        lien2: '',
    }
    , {
        id: 22,
        title: 'Blog de podcast',
        image: require('../assets/seo.JPG'),
        category: 'SiteWeb',
        description: 'Projet sur seo pour utiliser les bonnes balises HTML5 et CSS3 ',
        lien1: 'https://seo-projet.vercel.app/',
        lien2: 'https://github.com/Tallia-Anne/Seo_projet',
    }
    , {
        id: 23,
        title: 'Application mobile UI E-commerce',
        image: require('../assets/14figmag2r.jpg'),
        category: 'Design',
        description: 'Ce projet était réaliser par le logiciel Figma permit de faire des maquettes  ',
        lien1: 'https://www.behance.net/gallery/168339867/e-commerce',
        lien2: '',
    }
    , {
        id: 24,
        title: 'Application de Bureau de Trading',
        image: require('../assets/14figmag2r.jpg'),
        category: 'Application Bureau',
        description: 'Ce projet est un application de bureau sur Electron.js  ',
        lien1: '',
        lien2: '',
    },
    {
        id: 25,
        title: 'Application de Bureau de Generateur de mot de passe',
        image: require('../assets/generateurmtp.JPG'),
        category: 'Application Bureau',
        description: 'Ce projet est un application de bureau sur Electron.js  ',
        lien1: '',
        lien2: '',
    }
    , {
        id: 26,
        title: 'Meteo',
        image: require('../assets/meteo.JPG'),
        category: 'SiteWeb',
        description: "Projet sur la meteo d'une API ",
        lien1: 'https://meteo-ecru-psi.vercel.app/',
        lien2: 'https://github.com/Tallia-Anne/meteo',
    }
    , {
        id: 27,
        title: 'Dé App',
        image: require('../assets/gif/ezgif.com-video-to-gif.gif'),
        category: 'Application mobile',
        description: "Projet sur un jeu de dé avec le framework React native ",
        lien1: '',
        lien2: 'https://github.com/Tallia-Anne/Dice-roll',
    }
 , {
        id: 28,
        title: 'RIZE 4 U',
        image: require('../assets/RIZE4U.png'),
        category: 'Design',
        description: "Projet sur un site web de e-commerce de sport ",
        lien1: '',
        lien2: 'https://www.behance.net/gallery/207696331/RIZE-4-U',
    }
]

export default projets
