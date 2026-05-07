/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const LOGO_URL = "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/662566595_122105282282947238_589692692124519148_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF7H0MRnjpVcYgcAiP9nqW-CXqUMaxrcbwJepQxrGtxvOOy85_KoHNYImMqYDpbBwl2rCGOIphtD6EUjq5GpV44&_nc_ohc=sdhAnj_tnxEQ7kNvwHIueLJ&_nc_oc=AdoRhSYjSmOqjueLP_-Dr2ECWgWSal1-OSASAHdR60PIImye2sQdmDCeu75NVBRjw0o&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=4zxWn7UmVKltWMA0XQPj4g&_nc_ss=7b2a8&oh=00_Af6CK_vKjYRN4oBURTCVHUHwftEImM8HrZWz9c245oICew&oe=6A026EB1";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Rose Glow Bottle',
    description: 'A beautiful handcrafted bottle lamp with delicate roses and warm LED lights, creating a romantic atmosphere.',
    price: 850,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/689659444_122111488106947238_6777461065683426258_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF_tfiyur66rIEDE5RVk-cMSOJHFMKzS1JI4kcUwrNLUqMyi862aj-7-FL7QyStRT59cfqvdtHYV15t1BEQDpvO&_nc_ohc=uFYHAjqpkskQ7kNvwGybv_I&_nc_oc=Adqldr0QZhYm69NaiAkYGa_bSfBz1euWZGmHSpvqy76Gz2-mkau7jTlqjbnT_1nHufw&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=P2Ufbj-dGHmmYZtH2-gW_g&_nc_ss=7b2a8&oh=00_Af5CRmfbXFgtoyyM2soSJ2X4erPZ3tDz2Ofvd3DwE5ps5w&oe=6A0270B6',
    category: 'Floral',
    stock: 15
  },
  {
    id: '2',
    name: 'White Cherry Blossom Bottle',
    description: 'Elegant white blossoms illuminated from within, perfect for minimalist home decor.',
    price: 950,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/689182986_122111488052947238_7754945141088241505_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFK1Xi7Sehg2FMs75S1nFkyWlT-EqmuYpdaVP4Sqa5il_0ZWJbczFhS-tWTAVJOdy6GJ4J1FHocxwsZfssNlNpQ&_nc_ohc=r6mQdvgMjNIQ7kNvwEAYwB9&_nc_oc=Ado4WBJiU1beGrrBWvQRfhmKog83UkDa2u4Ms6SwxSi6aoRSN4MaP88kYVSyDFvoRmA&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=2cIbB3kU711tqveRDFrd_Q&_nc_ss=7b2a8&oh=00_Af7uCXflsJnfR52aH-oPcoPBv4vdGUBh1bZsI1PRkCYflQ&oe=6A027F7F',
    category: 'Floral',
    stock: 12
  },
  {
    id: '3',
    name: 'Multi-Flower Lantern Bottle',
    description: 'A variety of colorful dried flowers inside a sleek bottle, glowing with magical light.',
    price: 1200,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/689475032_122111488004947238_4541871985164558343_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHCPaoztzOwlPx4H__kfOLk4KFRUax5byXgoVFRrHlvJWjRgT7n4LYhr8zgYWj307ksVeUkMcwCn4zz5MfH1zqi&_nc_ohc=f2JqWgQBYBkQ7kNvwFPtDV8&_nc_oc=AdrbsUDuj39tu83WJwouPE_NkT7ii5t8U5MSBjSI6pEh0zks_yhxKBJeNWvCJrOi4c0&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=YnPAE9wkz5gM-y4vnZlI1Q&_nc_ss=7b2a8&oh=00_Af6o_12XZFAEzpdR1Hx102BgmGSyfv-KysUqZ94V-OJogw&oe=6A02820B',
    category: 'Floral',
    stock: 8
  },
  {
    id: '4',
    name: 'Silhouette Forest Bottle',
    description: 'Hand-painted silhouettes of trees and forests that come alive when the light is turned on.',
    price: 1400,
    image: 'https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/690651976_122111487956947238_8583967971119016507_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGHMdhSi6uup_WbCAiatJFtjKr0QQjpBAaMqvRBCOkEBtt0wpQJxWzpDgUOv82awRXi6FyAVMp4K2zEOCtcx8Be&_nc_ohc=nhN8hb33dRsQ7kNvwGmSQ5L&_nc_oc=AdowprqTWRtmWj8-KVFy2GEG9HJHsVjExkGp0BaHMYFb8Fl6YnljiL5xE5BpV9-TqDs&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=_427IOMxAWesFh7wYPK8vA&_nc_ss=7b2a8&oh=00_Af6tN4ikutfg9Hj2_3zUsxR3Gko_m1EAufSpbBonAIKKqA&oe=6A028D5D',
    category: 'Artistic',
    stock: 5
  },
  {
    id: '5',
    name: 'Blossom Silhouette Bottle',
    description: 'A fusion of silhouette art and floral patterns, creating a unique layered visual effect.',
    price: 1100,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/689031708_122111487890947238_2348470539499234758_n.jpg?stp=dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFCeMaFp4rFcX8kdfbi6K1OGmUStHH3kc8aZRK0cfeRz3k5Labp0YyjkfmZvk6HXuwCuymcIWTEllbW9hA9yEtU&_nc_ohc=nbkRVFePU8EQ7kNvwEyFwzC&_nc_oc=Adq6yzPRJVwII0nABtOMK2urFmob_bPdhOrzyn6qPd_LmeqbHUlhRI0pDbYH8j6EsgE&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=nSUafJ1sdb2KK3aneTyNuA&_nc_ss=7b2a8&oh=00_Af7NSX3QPKMHEG-TJIy9RnjPpjc7cT74cT2IH6QK2J-Lbg&oe=6A028ED1',
    category: 'Artistic',
    stock: 10
  },
  {
    id: '6',
    name: 'Lantern Art Bottle',
    description: 'Detailed painting of traditional lanterns, casting beautiful shadows in your room.',
    price: 1300,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/690521706_122111487848947238_7637693492590561372_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGWdmZg1ljsI79uIevjGQUOANsSbnLE4DMA2xJucsTgM1TMf5iS_qoio3F8ggW99znX3Xq_zhHi6wW8BdnhuCiY&_nc_ohc=ewlXEz3gCf8Q7kNvwF2luo3&_nc_oc=AdrV8WuNI-IaMoYD6LKx-3NfrKqvzZr4RXJI5twnKDtGS40r6pDAav0hZ5TKsDlKDCU&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=yUNofgi_xPos8U7Fr3xRfg&_nc_ss=7b2a8&oh=00_Af7ya9MQYet-BZT0dZvW4UmTZfPOvfZ5lxTecqCiqys4GA&oe=6A02840F',
    category: 'Artistic',
    stock: 7
  },
  {
    id: '7',
    name: 'Firefly Sparkle Bottle',
    description: 'Dozens of tiny LED points mimicking fireflies in a dark forest, enchanting and peaceful.',
    price: 750,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/688922016_122111487704947238_134615475770922707_n.jpg?stp=dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEL5cqJ2oe_oK76MyCGSX4fsL1tmFjUFkywvW2YWNQWTEO3L7BsTWpYoUL0E786h7dswwTP571scR4NhgnKj40w&_nc_ohc=g1TCpS37fscQ7kNvwHUlOQL&_nc_oc=Adrlkzfsef648VtBw63MW-twiMbQdicY397slIcjUFX8RCaRyLKEG8P0C1O1WhsHVAc&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=JIN5zo2P2GVj5-kM8WQSlA&_nc_ss=7b2a8&oh=00_Af6pIXrJxxN0jpQi91zxJSmuqj0MFeRP2ngDpkFEdHHD7Q&oe=6A02A0BD',
    category: 'Classic',
    stock: 20
  },
  {
    id: '8',
    name: 'Pink Blossom Night Bottle',
    description: 'Vibrant pink blossoms captured in a glowing bottle, a perfect gift for any occasion.',
    price: 900,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/689007504_122111487500947238_8117774560400756381_n.jpg?stp=dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFs7aPrZsuGMlVSdgv6Klkl5_g9GcQhn-nn-D0ZxCGf6eP5wQTSK6Fam8KxwakiKp0Iy_Oa00swqavFh02Ne-w_&_nc_ohc=-w22Z5Mwm5QQ7kNvwHzZRjp&_nc_oc=AdqyW7IRgiaXbyFaG3FpKOjdjfLY2YAILfZH1mySDzh_f6slLj1yaTXRSMEeVB71lCk&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=sxdOSTfJs9cIHExITqnh6w&_nc_ss=7b2a8&oh=00_Af7hv3icx35uHVfcYDFoBHHSCvlXfQfRxlaJF55TBinEvg&oe=6A028395',
    category: 'Floral',
    stock: 14
  },
  {
    id: '9',
    name: 'Midnight Bloom',
    description: 'A dark, elegant design featuring nocturnal flowers that shimmer under soft lighting.',
    price: 1150,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/690203749_122111487386947238_3779062394667325239_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFkBf2q_DmfNtf0JVimProBQUYkZkimbYVBRiRmSKZthejqvbKmP8xsSZ4oSgJUV3q7p8U-6yFhXcLyaKP2AxoM&_nc_ohc=FIaqc1dp41oQ7kNvwGXbIYp&_nc_oc=AdqHf9UFbS9R6y2kq8jg5j_mm8enrLq88BAnqm-5Ek57RXVC4xRVoQmmD9G4CAhv_YA&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=q4KzD_lN4slwOUbJoga7pQ&_nc_ss=7b2a8&oh=00_Af5sK7uPB7nTNaP1Jn-AkoyRVqLj7P3EuguXyqVJ6ylcqg&oe=6A02847E',
    category: 'Floral',
    stock: 6
  },
  {
    id: '10',
    name: 'Golden Petals',
    description: 'Golden accents meet delicate petals in this premium handcrafted masterpiece.',
    price: 1550,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/688865906_122111487344947238_8114762979060418100_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF62c7fPYC72n-Qz41AEPAX6fX7ODyswwHp9fs4PKzDAfjUKqCU9bji00C5awzDBOJXfdXtp_nhqfZFRdZxRcTE&_nc_ohc=0EJ4O9yb-eIQ7kNvwG17Ggb&_nc_oc=Adp8eHsCd8GSoNsr-98IVLm9TxS1vXe8C8-7x6w_Je8ORsy3NnqY_ph-n7mhHraxeQQ&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ojbzzPLxv0V5uv_6whvnxA&_nc_ss=7b2a8&oh=00_Af4U51vNMhxSwEFdcaoGuypIlHyt6FM-zpvz_BtKBV77KQ&oe=6A02A6C7',
    category: 'Floral',
    stock: 4
  },
  {
    id: '11',
    name: 'Celestial Flora',
    description: 'A heavenly arrangement of flowers inspired by the night sky and starry constellations.',
    price: 1250,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/688902276_122111487296947238_1867782469606645375_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFth7gzygXzhAuw0LQPwx5SYVElIowlXEZhUSUijCVcRuIjkaMPGCWhjOC9eE4pVLPI0VDOelDmtEy3h0jEtspV&_nc_ohc=cqZMbcHCE-oQ7kNvwE5uXsr&_nc_oc=AdqmQbTOOBYm0exbytWqQ3UtP1Vw4q7c_FKjroITFcoJ6M8VlSi3y9zpwwiIvHgmopw&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=DJgyrUtpnGZ1-NaTDUpwXA&_nc_ss=7b2a8&oh=00_Af5ox7e96x1ArX07RNaljhdU9XRtb8mWZV_Pn9TliS3E4w&oe=6A02760A',
    category: 'Floral',
    stock: 9
  },
  {
    id: '12',
    name: 'Ethereal Vines',
    description: 'Trailing vines and glowing buds create a mystical forest feel in any room.',
    price: 1350,
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/690634123_122111486978947238_4316120177181666973_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGBp2zZywsa0gjAfNDUpRnK-7EhpHNkNjn7sSGkc2Q2OdpZSxNXbuR6TIvGpBbt8rFz0Qhv2_q8xVj_uMtBFdBS&_nc_ohc=GLT6UGK1QlQQ7kNvwFCd2o5&_nc_oc=Adqek7acsvxRGksQwPhI-TXciIQtYkxFZwcHBOj_BMGU31vZI2H5XpVXq0eGLdA2_zw&_nc_zt=23&se=-1&_nc_ht=scontent.fdac41-1.fna&_nc_gid=QyfS_MttXgCKvv7j06svzQ&_nc_ss=7b2a8&oh=00_Af6iEM-2-s62cmqrURdjrNtDlfOLKYoxlSetqdBbDF7sxQ&oe=6A02AAD4',
    category: 'Artistic',
    stock: 3
  }
];
