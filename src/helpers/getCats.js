const BASE_URL = 'https://api.thecatapi.com/v1/';

const catsListMock = [
  {
    id: 'h19-vtIeX',
    url: 'https://cdn2.thecatapi.com/images/h19-vtIeX.jpg',
    width: 4272,
    height: 2848,
  },
  {
    id: 'bTo6m3PVg',
    url: 'https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg',
    width: 2000,
    height: 1138,
  },
  {
    id: 'byQhFO7iV',
    url: 'https://cdn2.thecatapi.com/images/byQhFO7iV.jpg',
    width: 1795,
    height: 2397,
  },
  {
    id: 'YyLhgyzy5',
    url: 'https://cdn2.thecatapi.com/images/YyLhgyzy5.jpg',
    width: 1280,
    height: 959,
  },
  {
    id: 'GwRBXx7-w',
    url: 'https://cdn2.thecatapi.com/images/GwRBXx7-w.jpg',
    width: 1280,
    height: 853,
  },
  {
    id: 'CeQSKi526',
    url: 'https://cdn2.thecatapi.com/images/CeQSKi526.jpg',
    width: 1200,
    height: 1366,
  },
  {
    id: 'p46ys1bGF',
    url: 'https://cdn2.thecatapi.com/images/p46ys1bGF.jpg',
    width: 1620,
    height: 1080,
  },
  {
    id: '5dF28H7__',
    url: 'https://cdn2.thecatapi.com/images/5dF28H7__.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '5C9ONTPeY',
    url: 'https://cdn2.thecatapi.com/images/5C9ONTPeY.jpg',
    width: 1482,
    height: 1658,
  },
  {
    id: 'MJWtDz75E',
    url: 'https://cdn2.thecatapi.com/images/MJWtDz75E.jpg',
    width: 1024,
    height: 1024,
  },
];

const getCats = async () => {
  //   const data = await fetch(`${BASE_URL}images/search?limit=20&has_breeds=1`, {
  //     headers: {
  //       'x-api-key':
  //         'live_D5fHsYnbm5OuVsCXU5gMkN5fhbCBjOiTza3dvD6bhBwcMhSH6WvzrnMivvawMET6',
  //     },
  //   });
  //   const res = data.json();

  return new Promise((res, rej) => {
    res(catsListMock);
  });
  return res;
};

export { getCats, catsListMock };
