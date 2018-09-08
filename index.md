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

### Example HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Jquery Shwelator Example</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <style>
    .red {
      color: red;
    }
    </style>
</head>

<body>
  <h1 class="translated">This is per word Translated Title</h1>
  <p class="translated">This is per word Translated Paragraph</p>
  <p>You <span class="translated">can even translate</span> a part of paragraph</p>
  <p class="translate-class red home">You can have a full even different (not litarate) translation too ! by using
    translate-all classname followed by a class name</p>
  <!-- Please use camel case and avoid using hypen ! -->
  <p class="translate-class anotherParagraph">This is another translated paragraph but using class translation feature</p>
  <p class="translate-class">This paragraph will provide error because only one class is defined, see your console
    (F12) for more
    info !</p>

  <ul>
    <li>Languages: </li>
    <ul>
      <li><a href="?lang=en">English</a></li>
      <li><a href="?lang=id">Indonesian</a></li>
      <li><a href="/example.html">Default (Indonesian)</a></li>
    </ul>
    <li>
      <p>HTML Source Code is written in english, see source for more detail</p>
    </li>
    <li>
      <p>Don't Forget to follow me on github at <a href="https://github.com/hanipcode">@hanipcode</a></p>
    </li>
    <li>
      <p>You might think I am some geeky-bearded-man who don't know about writting aesthetic frontend. but well this is
        just an example man, to see my real work you can visit my Linkedin <a href="https://linkedin.com/in/hanifeij">@hanifeij</a></p>
    </li>
  </ul>

</body>

<script src="./shwelatorDictionary.js" type="text/javascript"></script>
<script src="./shwelator.js" type="text/javascript"></script>
<script type="text/javascript">

  $(document).ready(function () {
    var withHypen = true;
    shwelatorTranslateByWord("translated");
    shwelatorTranslateByClass("translate-class")
  })
</script>

</html>
```
