// src/services/artistService.js
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
      ]);
    }, 1000);
  });
};
