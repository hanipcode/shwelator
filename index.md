## Welcome to Shwelator GitHub Pages

Simple Translation library for human.
will detect language based on ?lang query string
for exapmle `yourdomain.com?lang=id`

### Example

see example at [here](/example.html)

### How to Install

1.  Download Source code from github.
2.  copy `shwelator.js` and `shwelatorDictionary.js` to your destinated folder
3.  add both `shwelator.js` and `shwelatorDictionary.js` to your html file.

### Limitation (IMPORANT!!)

This library still have some limitation:

1. can't translate text element that has another html inside


    ```html
      <p class="translate"><span class="anotherElement">This Won't</span> Translate</p>
    ```
    Would not work. the workaround is structuring your html like this
    ```html
      <p><span class="anotherElement translate">This will</span><span class="translate"> Translate</span></p>
    ```

### Available methods

#### shwelatorTranslateByWord(identifierClassName, defaultLang?)

Translate every word inside an element using words defined in `shwelatorTranslateByWordDictionary` inside `shwelatorDictionary.js`. This will translate per word. see [example](/example.html) or shwelatorTranslateByWordDictionary

##### Properties

- identifierClassName: class name that you intend to translate texts inside. for example 'translate'
- defaultLang: defaultLanguage property inside shwelatorTranslateByWordDictionary. default to the first property of the object.

#### shwelatorTranslateByClass(identifierClassName, defaultLang?)

Translate every word inside an element using words defined in `shwelatorTranslateByClassDictionary` inside `shwelatorDictionary.js`. This will translate per sentence, matching the className to `shwelatorTranslateByClassDictionary` . see [example](/example.html) or shwelatorTranslateByWordDictionary

#### Example

```javascript
// shweDictionary.js
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

// yourhtml.html
// ....
// this will translate to
// `Ini adalah paragraf lain yang di translate dengan menggunkan fitur translate class`
// on ?lang=id
<p class="translate-class anotherParagraph">This is another translated paragraph but using class translation feature</p>
// ...
<script type="text/javascript">

  $(document).ready(function () {
    var withHypen = true;
    shwelatorTranslateByClass("translate-class");
  })
</script>
```

##### Properties

- identifierClassName: class name that you intend to translate texts inside. for example 'translate'
- defaultLang: defaultLanguage property inside shwelatorTranslateByWordDictionary. default to the first property of the object.

### Support or Contact

Support ? just look through the code, I think it's not that messy.
Contact ? Don't ever think about contacting me, unless you are same office with me.
