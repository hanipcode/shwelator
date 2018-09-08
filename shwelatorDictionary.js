// case is ignored
// object key should be the same with the words written in the html !
// Strucure your language like this:

/**
 *
 */
var shwelatorTranslateByWordDictionary = {
  id: {
    this: 'ini',
    is: 'adalah',
    translated: 'diterjemahkan',
    title: 'judul',
    paragraph: 'paragraf',
    you: 'anda',
    can: 'dapat',
    even: 'bahkan',
    translate: 'menerjemahkan',
    word: 'kata',
  },
  en: {
    this: 'this',
    is: 'is',
    translated: 'translated',
    title: 'title',
    paragraph: 'paragraph',
    you: 'you',
    can: 'can',
    even: 'even',
    translate: 'translate',
    word: 'word',
  },
};
// use ` (literal template) if you want to use symbols
var shwelatorTranslateByClassDictionary = {
  id: {
    home: `Kamu bahkan dapat menghasilkan translasi yang tidak literal ! dengan menggunakan fitur translate class diikuti dengan nama kelas`,
    anotherParagraph: `Ini adalah paragraf lain yang di translate dengan menggunkan fitur translate class`,
  },
  en: {
    home: `You can have a full even different (not litarate) translation too ! by using translate-all classname followed by a class name`,
    anotherParagraph: `This is another translated paragraph but using class translation feature`,
  },
};
