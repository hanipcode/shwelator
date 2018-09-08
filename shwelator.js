// this function is credit to david walsh on his blog
// https://davidwalsh.name/query-string-javascript
function shwelatorGetUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function shawelatorGetUrlLangParam(defaultLang) {
  var urlLangParam = shwelatorGetUrlParameter('lang');
  console.log(urlLangParam);
  if (
    !shwelatorTranslateByClassDictionary ||
    !shwelatorTranslateByWordDictionary
  ) {
    console.error(
      'You are not adding shwelatorDictionary.js! please import the module for shwelator to work propperly !'
    );
    throw new Error(
      'You are not adding shwelatorDictionary.js! please import the module for shwelator to work propperly !'
    );
  }
  if (!urlLangParam && !defaultLang) {
    console.error(
      "There is no query string in the url and you don't set default lang ! please use defaultLang to handle this condition"
    );
    return (
      Object.keys(shwelatorTranslateByClassDictionary)[0] ||
      Object.keys(shwelatorTranslateByWordDictionary)[0]
    );
  }
  if (
    !shwelatorTranslateByClassDictionary[urlLangParam] ||
    !shwelatorTranslateByWordDictionary[urlLangParam]
  ) {
    console.warn(
      'The lang parameter ' +
        urlLangParam +
        ' is not found in your dictonary class. do you not set it up propperly ?'
    );
    return defaultLang;
  }
  if (!urlLangParam) {
    urlLangParam = defaultLang;
  }
  return urlLangParam;
}

var shwelatorTranslateByWord = function shwelatorTranslateByWord(
  identifierClassName,
  defaultLang = null,
  withHyphen = false
) {
  var urlLangParam = shawelatorGetUrlLangParam(defaultLang);
  $('.' + identifierClassName).each(function(elem) {
    if (withHyphen) {
      var regex = /[\s\-]/;
    } else {
      var regex = /\s/;
    }
    var textPerWord = $(this)
      .text()
      .split(regex);
    var translatedWordList = textPerWord.map(function(text) {
      var originalText = text;
      var strippedText = text.replace('/[.!?<>/]/', '');
      var getTranslated =
        shwelatorTranslateByWordDictionary[urlLangParam][
          strippedText.toLowerCase()
        ];
      if (!getTranslated) {
        console.warn(
          'the word ' +
            strippedText.toLowerCase() +
            ' is not in your dictionary key !'
        );
        return text;
      }
      return text.replace(strippedText, getTranslated);
    });
    $(this).text(translatedWordList.join(' '));
  });
};
var shwelatorTranslateByClass = function shwelatorTranslateByClass(
  identifierClassName,
  defaultLang
) {
  var urlLangParam = shawelatorGetUrlLangParam();
  $('.' + identifierClassName).each(function() {
    var classJoinedNames = $(this).attr('class');
    var text = $(this).text();
    var classNameList = classJoinedNames.split(' ');
    console.log(classNameList);
    if (classNameList.length === 1) {
      console.error(
        "There is an error in which You don't provide any class name after " +
          identifierClassName +
          '!'
      );
      return $(this).text(text);
    }
    var classNameListFiltered = classNameList.filter(function(className) {
      if (className.toLowerCase() !== identifierClassName.toLowerCase())
        return true;
      return false;
    });
    var classNameFilteredLength = classNameListFiltered.length;

    if (classNameFilteredLength > 1) {
      console.warn(
        'We detect that you have more than 1 class added on the element beside ' +
          identifierClassName +
          ' class. currently we only support 1 className to check with class dictionary.'
      );
      console.warn(
        'because of this conflict we will use the last class name which is ' +
          classNameListFiltered[classNameFilteredLength - 1]
      );
    }
    if (classNameFilteredLength === 0) {
      return $(this).text(text);
    }
    var lastClassName = classNameListFiltered[classNameFilteredLength - 1];
    if (!shwelatorTranslateByClassDictionary[urlLangParam][lastClassName]) {
      console.warn(
        'YOU not adding ' +
          lastClassName +
          ' into the shwelatorTranslateByClassDictionary , so we fallback to default text !'
      );
      return $(this).text(text);
    }
    return $(this).text(
      shwelatorTranslateByClassDictionary[urlLangParam][lastClassName]
    );
  });
};
