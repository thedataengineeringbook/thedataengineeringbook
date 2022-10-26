# The Data Engineering Book

หนังสือ Data Engineering เพื่อ Data Engineer ชาวไทย 😎 (สายงานอื่นก็อ่านได้นะ)

## Pre-requisites

```bash
$ brew install pre-commit
$ pre-commit install
```

## Local dev

```sh
$ yarn install
$ yarn start # http://localhost:3000
```

## Run in Docker

```sh
$ docker compose up # http://localhost:3000
```

ปล. หากมีการแก้ไข `sidebar.js` ต้องทำการ build image และสร้าง container ใหม่

## Run in Docker พร้อมกับ Search Functionality

```sh
$ docker compose -f docker-compose.with-search.yml up # http://locahost:3000
```

ป.ล. หากมีการแก้ไขไฟล์ docs/\*.md จะต้อง build index ใหม่ ด้วยคำสั่ง

```sh
$ docker compose -f docker-compose.with-search.yml build
```

## อยากช่วยเขียน?

ยินดีมากเลย ทำตามนี้นะครับ 👉🏻 [Contributing to Data Engineering Book](CONTRIBUTING.md)

## อ้างอิง

- [Thai Glossary](http://glossary.in.th/)

## todo

- [ ] apply for official algolia docsearch: https://docusaurus.io/docs/search#using-algolia-docsearch
