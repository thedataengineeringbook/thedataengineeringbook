---
title: Data Engineering Roadmap
---

เส้นทางสู่สายอาชีพทางด้านวิศวกรรมข้อมูล

## ความรู้พื้นฐานที่จำเป็น

* Software Engineering
* Linux
* Docker
* Cloud
* Security

## ความรู้ต่อยอดที่สำคัญ

* Distributed Systems
* Processing Frameworks
* Big Data Platforms
* Batch Processing
* Real-Time Processing

## Overview

[!["Roadmap"](https://github.com/datastacktv/data-engineer-roadmap/raw/master/img/roadmap.png)](https://github.com/datastacktv/data-engineer-roadmap)

### Software Engineering

อาชีพวิศวกรซอฟแวร์เป็นอีกอาชีพหนึ่งที่มีความใกล้ชิดกับอาชีพวิศวกรข้อมูลเป็นอย่างมาก เพราะหนึ่งในสกิลที่เชื่อมโยงทั้งสองอาชีพอยู่เรียกว่า **วิศวกรรมซอฟแวร์ (Software Engineering)** หรือสกิลการเขียนโปรแกรมนั่นเอง ดังนั้น การที่จะเป็นวิศวกรข้อมูล (Data Engineer) ที่ดีจำเป็นที่จะต้องเป็นวิศวกรซอฟแวร์ (Software Engineer) ที่ดีก่อนนั่นเอง

**ภาษาไพธอน (Python)** เป็นภาษาโปรแกรมมิ่งที่ได้รับความนิยมอย่างมากในงานด้านวิทยาศาสตร์ข้อมูล (Data Science) เพราะเป็นภาษาระดับสูง (High Level Language) ที่มนุษย์สามารถเข้าใจได้ง่าย ไพธอนจึงเป็นภาษาเหมาะกับมือใหม่ที่ต้องการย้ายอาชีพเข้ามาในสายงานวิศวกรข้อมูล (Data Engineer) ในหัวข้อนี้เราจะมาพูดถึงองค์ประกอบต่าง ๆ ที่เป็นพื้นฐานของภาษาไพธอน ดังนี้
* Variable
* Data Type
* Data Structure
* Function
* Control Flow
* OOP(Object Oriented Programming)

#### Variable
ตัวแปร (Variable) คือ **กล่อง**ที่ใช้เก็บค่าของข้อมูลต่าง ๆ ไม่ว่าจะเป็นค่าที่เป็นตัวเลข ตัวอักษร หรือค่าบูลีน
การประกาศตัวแปรในภาษาไพธอนทำได้โดยใช้เครื่องหมาย "=" ในการบันทึกค่าใส่ในตัวแปร โดยวิธีการตั้งชื่อตัวแปรจะประกอบด้วยตัวอักษร ตัวเลข หรือเครื่องหมายขีดเส้นใต้ (Underscore) ตัวอักษรใหญ่ 
* Numeric Variable คือ ตัวแปรที่รับค่าเป็นตัวเลข
```
a = 23
a = b = 48
```
* String Variable คือ ตัวแปรที่รับค่าเป็นตัวอักษร
```
my_name = 'marry'
my_dog = "mootoo"
```
* Boolean Variable คือ ตัวแปรที่รับค่าเป็นบูลีน
```
movie_lover = True
popcorn_lover = False
```

นอกจากนี้ยังสามารถใช้ตัวดำเนินการ (Operator) ในการคำนวณได้อีกด้วย
```
apple = 500
orange = 200
total_fruit = apple + orange
print(total_fruit) # 500 + 200 = 700
```
#### Data Type
ประเภทของข้อมูลชนิดต่าง ๆ ที่อยู่ในภาษาไพธอนแบ่งออกเป็น 3 ประเภทใหญ่ ดังนี้
* Number Types : int, float
* Text Type : string
* Boolean Types : bool

#### Data Structure
* List
* Dictionary
* Set
#### Function
ฟังก์ชัน คือ การนำโค้ดเดิมมาใช้ซ้ำในส่วนที่เราต้องการ 

วิธีการเขียนฟังก์ชันจะเริ่มต้นด้วย **def** ย่อมาจากคำว่า define ตามด้วยการเคาะช่องว่างหนึ่งช่อง และตามด้วยชื่อฟังก์ชันที่เปิดวงเล็บอยู่ซึ่งสามารถมีพารามิเตอร์ (parameter) หรือไม่มีก็ได้ จากนั้นปิดท้ายด้วยเครื่องหมายทวิภาค (Colon)

การประกาศฟังก์ชันแบบไม่มีพารามิเตอร์
```
def greeting():
    print("Hello World")
```
การประกาศฟังก์ชันแบบมีพารามิเตอร์ 1 ตัว
```
def greeting(name):
    print(f"Hello {name}")
```
การประกาศฟังก์ชันแบบมีพารามิเตอร์ 2 ตัว
```
def sum(a, b):
    total = a + b
    print(f"total number is {total}")
```
#### Control Flow
* if
* for
* while

#### OOP(Object Oriented Programming)
**OOP** คือ **การเขียนโปรแกรมเชิงวัตถุ**เป็นวิธีการเขียนโปรแกรมที่เปรียบเทียบโค้ดกับวัตถุ ในแต่ละคลาส (Class) หรือวัตถุ (Object)ที่เราสนใจก็จะประกอบด้วย เมธอด (method) และแอตทริบิวต์ (Attributes)