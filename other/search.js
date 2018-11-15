/*
Given a list of keywords and a list of search words,
return a list of indices that indicate the beginning
of a sequence of adjacent keywords.


Examples:

search_list = ['hello', 'hi', 'hi', 'greetings', 'hi', 'greetings', 'hey', 'hi']
keywords = ['hi', 'hey', 'greetings']
# Output: [4, 5]

search_list = ['peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a',
               'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if',
               'peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers',
               'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
keywords = ['a', 'peter', 'picked', 'piper']
# Output: [0, 17]

search_list = ['i', 'saw', 'susie', 'sitting', 'in', 'a', 'shoe', 'shine', 'shop', 'where', 'she',
               'sits', 'she', 'shines', 'and', 'where', 'she', 'shines', 'she', 'sits']
keywords = ['she', 'sits', 'shines']
# Output: [11, 17]
*/

function findAdjacents(searchList, keywords) {
  if (!Array.isArray(searchList) || !Array.isArray(keywords)) {
    throw new Error(`Function "findAdjacents" requires arrays and got ${typeof searchList}, ${typeof keywords}`);
  }
  const validIndices = [];
  const keywordSet = new Set(keywords); // set for quick lookup
  
  // sliding window through searchList
  let start = 0;
  let end = 0;
  const foundSet = new Set(); // to store valid elements found
  while (start < searchList.length) {
    if (
      foundSet.has(searchList[end]) // already seen this element (no dupes)
      || !keywordSet.has(searchList[end]) // not a word we're searching for at pos end
      || foundSet.size === keywords.length // OR we have a valid set
    ) {
      if (foundSet.size === keywords.length) validIndices.push(start); // push the index if set is valid
      foundSet.clear();
      start += 1;
      end = start;
    } else if (keywordSet.has(searchList[end])) { // word at pos end is valid
      foundSet.add(searchList[end]); // add to the working set
      end += 1;
    }
  }
  return validIndices;
}

// const search_list = ['hello', 'hi', 'hi', 'greetings', 'hi', 'greetings', 'hey', 'hi'];
// const keywords = ['hi', 'hey', 'greetings'];

const search_list = ['i', 'saw', 'susie', 'sitting', 'in', 'a', 'shoe', 'shine', 'shop', 'where', 'she',
               'sits', 'she', 'shines', 'and', 'where', 'she', 'shines', 'she', 'sits']
const keywords = ['she', 'sits', 'shines']

// const search_list = ['peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a',
//                'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if',
//                'peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers',
//                'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
// const keywords = ['a', 'peter', 'picked', 'piper']

console.log(findAdjacents(search_list, keywords));