# The Data Engineering Book

หนังสือ Data Engineering เพื่อ Data Engineer ชาวไทย 😎 (สายงานอื่นก็อ่านได้นะ)

## Contents

* [Introduction](sections/01-introduction.md)
* [Data Engineer](sections/02-data-engineer.md)
* [Data Engineering Roadmap](sections/03-data-engineering-roadmap.md)
* [Data Engineering Practices](sections/04-data-engineering-practices.md)
* [Data Pipelines](sections/05-data-pipelines.md)
* [Data Validation in Pipelines](sections/06-data-validation-in-pipelines.md)
* [Maintenance of Data Pipelines](sections/07-maintenance-of-data-pipelines.md)
* [Tools](sections/08-tools.md)
* [อภิธานศัพท์](sections/glossary.md)

## Creating PDF with Pandoc

ติดตั้ง Pandoc บนเครื่อง Mac

```sh
brew install pandoc
```
ติดตั้ง Pandoc โดยใช้การ npm
```sh
npm i pandoc
```

สร้างไฟล์ PDF โดยใช้คำสั่งตามนี้

```sh
pandoc --pdf-engine=xelatex -V 'mainfont:Thonburi' sections/*.md -s -o data-engineering-book.pdf
```

## อยากช่วยเขียน?

ยินดีมากเลย ทำตามนี้นะครับ 👉🏻 [Contributing to Data Engineering Book](CONTRIBUTING.md)

## อ้างอิง

* [Thai Glossary](http://glossary.in.th/)

## อยากเลี้ยงกาแฟ? ☕️

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zkan)
