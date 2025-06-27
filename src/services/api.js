export const fetchArtists = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Frida Kahlo",
          style: "Surrealism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/330px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
          bio: "Frida Kahlo was a Mexican painter known for her self-portraits and works inspired by nature and Mexican folk art.",
        },
        {
          id: 2,
          name: "Vincent van Gogh",
          style: "Postimpressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
          bio: "Van Gogh was a Dutch painter, one of the main exponents of post-impressionism.",
        },
        {
          id: 3,
          name: "Claude Monet",
          style: "Impressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
          bio: "Monet was a founder of French Impressionist painting, known for his landscape series.",
        },
        {
          id: 4,
          name: "Georgia O'Keeffe",
          style: "Modernism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Georgia_O%27Keeffe_MET_DP230868.jpg/960px-Georgia_O%27Keeffe_MET_DP230868.jpg",
          bio: "O'Keeffe was an American modernist artist known for her paintings of enlarged flowers and New Mexico landscapes.",
        },
        {
          id: 5,
          name: "Pablo Picasso",
          style: "Cubism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/330px-Pablo_picasso_1.jpg",
          bio: "Picasso was a Spanish painter and sculptor, co-founder of the Cubist movement.",
        },
        {
          id: 6,
          name: "Yayoi Kusama",
          style: "Contemporary Art",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yayoi_Kusama_wax_model_at_Louis_Vitton.jpg/330px-Yayoi_Kusama_wax_model_at_Louis_Vitton.jpg",
          bio: "Kusama is a Japanese contemporary artist known for her polka dots and immersive installations.",
        },
        {
          id: 7,
          name: "Salvador Dalí",
          style: "Surrealism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/330px-Salvador_Dal%C3%AD_1939.jpg",
          bio: "Dalí was a Spanish surrealist artist known for his eccentric and dreamlike imagery.",
        },
        {
          id: 8,
          name: "Henri Matisse",
          style: "Fauvism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Portrait_of_Henri_Matisse_1933_May_20.jpg/330px-Portrait_of_Henri_Matisse_1933_May_20.jpg",
          bio: "Matisse was a French artist known for his use of color and fluid draftsmanship.",
        },
        {
          id: 9,
          name: "Leonardo da Vinci",
          style: "Renaissance",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/500px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
          bio: "Leonardo da Vinci was an Italian polymath of the Renaissance, known for masterpieces like the Mona Lisa and The Last Supper.",
        },
        {
          id: 10,
          name: "Rembrandt",
          style: "Baroque",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
          bio: "Rembrandt was a Dutch painter and etcher, widely considered one of the greatest visual artists in history.",
        },
        {
          id: 11,
          name: "Andy Warhol",
          style: "Pop Art",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/330px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg",
          bio: "Warhol was an American artist and leading figure in the visual art movement known as Pop Art.",
        },
        {
          id: 12,
          name: "Jackson Pollock",
          style: "Abstract Expressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jackson_Pollock%27s_passport_%28cropped_2%29.jpg/330px-Jackson_Pollock%27s_passport_%28cropped_2%29.jpg",
          bio: "Pollock was an American painter known for his unique style of drip painting.",
        },
        {
          id: 13,
          name: "Edvard Munch",
          style: "Expressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_1921.jpg/330px-Edvard_Munch_1921.jpg",
          bio: "Munch was a Norwegian painter best known for his iconic work 'The Scream'.",
        },
        {
          id: 14,
          name: "Joan Miró",
          style: "Surrealism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Joan_Miro_%28cropped%29.jpg",
          bio: "Miró was a Spanish painter, sculptor, and ceramicist known for his abstract and surrealist works.",
        },
        {
          id: 15,
          name: "Keith Haring",
          style: "Street Art",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Keith_Haring_%281986%29.jpg/500px-Keith_Haring_%281986%29.jpg",
          bio: "Haring was an American artist and social activist known for his graffiti-inspired artwork.",
        },
        {
          id: 16,
          name: "Jean-Michel Basquiat",
          style: "Neo-Expressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/aa/Jean-Michel_Basquiat_passport_%28cropped%29.jpg",
          bio: "Basquiat was an American artist known for his raw, expressive style and commentary on race and identity.",
        },
        {
          id: 17,
          name: "Mary Cassatt",
          style: "Impressionism",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mary_Cassatt_photograph_1913.jpg/500px-Mary_Cassatt_photograph_1913.jpg",
          bio: "Cassatt was an American painter and printmaker, known for her depictions of women and children.",
        },
        {
          id: 18,
          name: "Wassily Kandinsky",
          style: "Abstract Art",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vassily_Kandinsky_by_Adolf_Elnain_2.png/500px-Vassily_Kandinsky_by_Adolf_Elnain_2.png",
          bio: "Kandinsky was a Russian painter and art theorist credited with painting one of the first purely abstract works.",
        },
        {
          id: 19,
          name: "Tamara de Lempicka",
          style: "Art Deco",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/L2890841_rze%C5%BAbiarz_S%C5%82awomir_Micek_popiersie_malarka_Tamara_%C5%81empicka.jpg/330px-L2890841_rze%C5%BAbiarz_S%C5%82awomir_Micek_popiersie_malarka_Tamara_%C5%81empicka.jpg",
          bio: "Tamara de Lempicka was a Polish painter known for her bold, stylized portraits and nudes that epitomized the Art Deco movement.",
        },
        {
          id: 20,
          name: "Kara Walker",
          style: "Contemporary Art",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kara_Walker_Interview_Camden_Arts_Centre_01.47_%28cropped%29.jpg/330px-Kara_Walker_Interview_Camden_Arts_Centre_01.47_%28cropped%29.jpg",
          bio: "Kara Walker is an American contemporary artist known for her candid exploration of race, gender, and identity through silhouetted figures and large-scale installations.",
        },
      ]);
    }, 1000);
  });
};
