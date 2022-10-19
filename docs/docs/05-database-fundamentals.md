---
title: Database Fundamentals
---

## [1] SQL

Structured Query Language (SQL) คือคำสั่งบริหารจัดการฐานข้อมูล (Database) โดยเฉพาะ Relational Database เช่น Oracle, MySQL, PostgreSQL, BigQuery เป็นต้น

โดย SQL commands สามารถแบ่งได้เป็น 4 ประเภท คือ
* [DDL – Data Definition Language](#11-ddl-data-definition-language)
* [DQL – Data Query Language](#12-dql-data-query-language)
* [DML – Data Manipulation Language](#13-dml-data-manipulation-language)
* [DCL – Data Control Language](#14-dcl-data-control-language)

ปล. บางที่เพิ่ม TCL – Transaction Control Language เป็นประเภทที่ 5

!["fig1"](https://media.geeksforgeeks.org/wp-content/uploads/20210920153429/new.png)

### [1.1] DDL (Data Definition Language)

เป็นกลุ่มคำสั่งที่เอาไว้กำหนด database structure เช่น การสร้าง ลบ database schema

* CREATE: ทำการ**สร้าง** database หรือ objects เช่น table, index, function, view, store procedure, trigger

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

* DROP: ใช้**ทิ้ง** database หรือ objects ใน database

```sql
DROP DATABASE database_name;
```

```sql
DROP TABLE table_name;
```

* ALTER: ใช้ในการ**เปลี่ยนแปลง** structure เช่น ทำการเพิ่ม ลด column ใน table

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

* TRUNCATE: เป็นการ**ลบ** records ทุกอันใน table ทำให้เหลือเพียง table เปล่า แต่ยังมี structure เหมือนเดิม

```sql
TRUNCATE TABLE table_name;
```

### [1.2] DQL (Data Query Language)

เป็นกลุ่มคำสั่งสำหรับช่วยในการเรียกค้นข้อมูลที่อยู่ใน Schema objects ต่าง ๆ เช่น ตาราง (Table), วิว (View) เป็นต้น โดยคำสั่งประเภท DQL จะใช้เพื่อเรียกค้นข้อมูลตามความสัมพันธ์ทางโครงสร้าง (Schema Relation) โดยอาศัยการส่งข้อกำหนดของการค้นหาที่เรียกว่า Query

โดยเราจะใช้คำสั่ง SELECT เพื่อเรียกค้นข้อมูล โดยอาจจะอิงกับตารางเดียวหรือหลาย ๆ ตาราง ผลลัพท์จะถูกเก็บไว้ในลักษณะตารางชั่วคราว ซึ่งมักจะเอาไปแสดงผลหรือส่งไปยังโปรแกรมเพื่อไปใช้งานต่อไป

#### Syntax
```sql
SELECT expression FROM table_name WHERE code_conditions;
```

#### ตัวอย่าง
```sql
SELECT first_name FROM customer WHERE phone = '0891234567';
```
* คำสั่งนี้หมายถึงให้ดึงข้อมูล first_name จากตาราง customer ที่มี phone เท่ากับ 0891234567

### [1.3] DML (Data Manipulation Language)
เป็นกลุ่มคำสั่งที่ใช้ในการเพิ่ม (insert) ลบ (delete) และแก้ไข (update) ข้อมูลในฐานข้อมูล โดยหน้าที่หลักของกลุ่มคำสั่งนี้คือการปรับปรุงข้อมูลนั้นเอง โดยมีคำสั่งดังนี้

* INSERT INTO: คำสั่งสำหรับเพิ่มข้อมูลลงในฐานข้อมูล
```sql
INSERT INTO table_name (column_1, column_2, …. column_N)
VALUES (value_1, value_2, …, value_N);
```

หรือ

```sql
INSERT INTO table_name
VALUES (value_1, value_2, …, value_N);
```

#### ตัวอย่าง
```sql
INSERT INTO customer (first_name, last_name, phone)
VALUES ('John', 'Farmer', '0891234567');
```

* UPDATE: คำสั่งสำหรับเพิ่มข้อมูลลงในฐานข้อมูล
#### Syntax
```sql
UPDATE table_name
SET column_1 = value_1, column_2 = value_2, column_N = value_N [WHERE condition];
```
#### ตัวอย่าง
```sql
UPDATE customer
SET first_name = 'Tiger' WHERE phone = '0891234567';
```

* DELETE: คำสั่งสำหรับลบข้อมูลออกจากฐานข้อมูล มักใช้คู่กับคำสั่ง WHERE เพราะกำหนดเงื่อนไขในการลบ

#### Syntax
```sql
DELETE FROM table_name [WHERE condition];
```

#### ตัวอย่าง
```sql
DELETE FROM customer WHERE phone = '0891234567';
```

### [1.4] DCL (Data Control Language)
เป็นกลุ่มคำสั่งที่จะช่วยให้ผู้บริหารฐานข้อมูล (DBA)
สามารถควบคุมฐานข้อมูลเพื่อ *กำหนดสิทธิการอนุญาต* (Grant)  หรือ *การยกเลิกการเข้าใช้* (Revoke) ฐานข้อมูล ซึ่งเป็นกระบวนการป้องกันความปลอดภัยในฐานข้อมูล

* GRANT: คำสั่งนี้**ให้สิทธิ์** users ในการเข้าถึงฐานข้อมูล

```sql
GRANT privileges_names ON object TO user;
```

* REVOKE: คำสั่งนี้จะ**ถอนสิทธิ์**การเข้าถึงของ users

```sql
REVOKE privileges_names ON object FROM user;
```

โดย `privileges_names` คือชื่อ privilege ที่เราต้องการ `GRANT` หรือ `REVOKE` ส่วน `object` คือชื่อสิ่งที่เราต้องการจะปรับเปลี่ยนสิทธิ์ของผู้ใช้งานนั้น ๆ เช่น ชื่อตาราง และ `user` คือ ชื่อผู้ใช้งาน

privileges_names ที่ GRANT หรือ REVOKE ได้

| **Privilege** |                         **Desciption**                        |
|:-------------:|:-------------------------------------------------------------:|
|     SELECT    | select statement on tables                                    |
|     INSERT    | insert statement on tables                                    |
|     DELETE    | delete statement on tables                                    |
|     INDEX     | create an index on an exiting tables                          |
|     CREATE    | create table statements                                       |
|     ALTER     | ability to perform alter table to change the table definition |
|      DROP     | drop table statements                                         |
|      ALL      | grant all permission except GRANT OPTION                      |
|     UPDATE    | update statement on tables                                    |
|     GRANT     | allow to grant the privilege that                             |
