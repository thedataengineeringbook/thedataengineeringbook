---
title: Database Fundamentals
---

## [1] SQL

Structured Query Language (SQL) คือคำสั่งบริหารจัดการฐานข้อมูล (Database) โดยเฉพาะ Relational Database เช่น Oracle, MySQL, PostgreSQL, BigQuery เป็นต้น

โดย SQL commands สามารถแบ่งได้เป็น 4 ประเภท คือ
* [DDL – Data Definition Language](#11-ddl-data-definition-language)
* DQL – Data Query Language
* DML – Data Manipulation Language
* DCL – Data Control Language

ปล. บางที่เพิ่ม TCL – Transaction Control Language เป็นประเภทที่ 5

!["fig1"](https://media.geeksforgeeks.org/wp-content/uploads/20210920153429/new.png)

### [1.1] DDL (Data Definition Language)

เป็นกลุ่มคำสั่งที่เอาไว้กำหนด database structure เช่น การสร้าง ลบ database schema

* CREATE: ทำการ<u>สร้าง</u> database หรือ objects เช่น table, index, function, view, store procedure, trigger

```sql
CREATE DATABASE database_name;
```

```sql
CREATE TABLE table_name
    (
        column1 data_type(size),
        column2 data_type(size),
        column3 data_type(size),
        ....
    );
```

* DROP: ใช้<u>ทิ้ง</u> database หรือ objects ใน database

```sql
DROP DATABASE database_name;
```

```sql
DROP TABLE table_name;
```

* ALTER: ใช้ในการ<u>เปลี่ยนแปลง</u> structure เช่น ทำการเพิ่ม ลด column ใน table

```sql
ALTER TABLE table_name
            ADD (column_1  data_type(size),
            column_2  data_type(size),
            …
            column_n  data_type(size));
```

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

```sql
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;
```

* TRUNCATE: เป็นการ<u>ลบ</u> records ทุกอันใน table ทำให้เหลือเพียง table เปล่า แต่ยังมี structure เหมือนเดิม

```sql
TRUNCATE TABLE table_name;
```
