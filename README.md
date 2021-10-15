# The Data Engineering Book

หนังสือ Data Engineering เพื่อ Data Engineer ชาวไทย 😎 (สายงานอื่นก็อ่านได้นะ)

## Contents

* [Introduction](sections/01-introduction.md)
* [Data Engineer?](sections/02-data-engineer.md)
* [Data Pipelines](sections/03-data-pipelines.md)
* [Data Validation in Pipelines](sections/04-data-validation-in-pipelines.md)
* [Data Engineering Practices](sections/05-data-engineering-practices.md)
* [Tools](sections/06-tools.md)

## Creating PDF with Pandoc

ติดตั้ง Pandoc บนเครื่อง Mac

```sh
brew install pandoc
```

สร้างไฟล์ PDF โดยใช้คำสั่งตามนี้

```sh
pandoc --pdf-engine=xelatex -V 'mainfont:Thonburi' sections/*.md -s -o data-engineering-book.pdf
```

## Contributing

อยากช่วยเขียน? ยินดีมาก! ทำตามนี้นะครับ 👉🏻 [Contributing to Data Engineering Book](CONTRIBUTING.md)

## Thai Glossary

http://glossary.in.th/

## Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zkan)
