function makeSpeaker(name, language) {
  let verb = 'says';
  if (language === 'french') verb = 'dit';
  if (language === 'german') verb = 'sagt';
  function say(phrase) {
    return name + ' ' + verb + ': ' + phrase;
  }
  return say;
}

const speak = makeSpeaker('Jason', 'french');

speak('Hello!');
