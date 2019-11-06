const makeSpeaker = (name, language) => {
  const verbDictionary = {
    french: 'dit',
    german: 'sagt',
    english: 'says'
  };
  let verb = verbDictionary[language];
  return {
    speak: phrase => `${name} ${verb}: ${phrase}`,
    changeLanguage: newLanguage => {
      verb = verbDictionary[newLanguage];
    }
  };
};

const colin = makeSpeaker('Colin', 'french');
console.log(colin.speak('Bonjour!'));
colin.changeLanguage('english');
console.log(colin.speak('Hello!'));


