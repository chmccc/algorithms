const API_DELAY = 3000

// mock api
const api = {
  'shave-butter': {
    sku: 'SHAVE-BUTTER',
    name: 'Shave Butter',
    brand: 'shave',
  },
  'prep-scrub': {
    sku: 'PREP SCRUB',
    name: 'Prep Scrub',
    brand: 'shave'
  },
  shave: {
    name: "Dr. Carver's",
    products: ['shave-lather', 'shave-butter', 'prep-scrub'],
  },
};

const lookupData = string => {
  // only what comes after the final / matters, e.g.,
  // www.donkeyshaveclub.co.uk/foo/bar/baz/shave-butter
  const parts = string.split('/');
  const key = parts[parts.length - 1];
  return api[key];
};

const fetchBlocking = url => {
  // 500k loops ~= 1 second
  for (let i = 0; i < 2000000; i++) {
    JSON.parse(JSON.stringify([[[[[[[null]]]]]]]));
  }
  return lookupData(url);
};

const fetchCallback = (url, callback) => {
  setTimeout(() => {
    callback(lookupData(url));
  }, API_DELAY);
};

const fetchPromise = url =>
  new Promise((resolve, reject) => {
    const data = lookupData(url);
    setTimeout(() => {
      if (data) resolve(data);
      else reject(`404 - URL not found: ${url}`);
    }, API_DELAY);
  });

module.exports = { fetchBlocking, fetchCallback, fetchPromise };
