create database KyharonokDatabase
on
(name = KyharonokDatabase,
filename = 'D:\BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASE\KyharonokDatabase.mdf',
size = 3,
maxsize = 100,
filegrowth = 1)
log on
(name = KyharonokDatabaseLog,
filename = 'D:\BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASE\KyharonokDatabase.ldf',
size = 1,
maxsize = 100,
filegrowth =1)

use KyharonokDatabase

create table Домовладелец([Уникальный номер домовладельца] int primary key, [Номер квартала] int not null, [Адрес домовладения] text not null, [Индекс района] int not null, [Дата инвентаризации домовладения] date not null, foreign key ([Индекс района]) references [Район города]([Индекс района]))
create table Сооружение([Номер сооружения(литеры)] int primary key, [Индекс назначения] int not null, [Индекс типа] int not null, [Возведено самовольно] int not null, [Год постройки] int not null, [Общая площадь литеры] int not null, [Жилая площадь] int not null, [Износ в процентах] int not null, [Инвентаризационная стоимость литеры] money not null, [Этажность] int not null, [Номер участка] int not null, [Номер домовладельца] int not null,[Номер факторов] int not null, foreign key ([Номер домовладельца]) references Домовладелец([Уникальный номер домовладельца]), foreign key ([Индекс типа]) references [Тип сооружения]([Индекс типа]), foreign key ([Номер участка]) references [Замельный участок]([Номер земельного участка]), foreign key ([Номер факторов]) references [Факторы]([Номер фактора]), foreign key ([Индекс назначения]) references [Назначение сооружения]([Индекс сооружения]))
create table Факторы([Номер фактора] int primary key, Неудобья int, [Фотография домовладения] text not null, [Освещение] bit not null, [Водопровод] bit not null, [Отопление] bit not null, [Примечания] text not null)
create table Помещение([Номер помещения в экспликации] int primary key not null, [Индекс материала] int, [Индекс назначения]  int not null, [Площадь помещения] int not null, [Высота помещения] int not null, [Этаж расположения помещения] int not null, [Номер сооружения] int not null, foreign key ([Индекс материала]) references [Материал стен]([Индекс материала]), foreign key ([Номер сооружения]) references [Сооружение]([Номер сооружения(литеры)]), foreign key ([Индекс назначения]) references [Назначение помещения]([Индекс назначения]))
create table [Замельный участок]([Номер земельного участка] int primary key not null, [Площадь земельного участка] int, [Фактическая площадь участка] int not null, [Площадь застройки] int not null, [Площадь двора] int not null, [Площадь озеленения] int not null, [Площадь огорода] int not null)
create table [Тип сооружения]([Индекс типа] int primary key not null, [Тип сооружения] text)
create table [Район города]([Индекс района] int primary key not null, [Район] text not null)
create table [Материал стен]([Индекс материала] int primary key not null, [Материал стен] text not null)
create table [Назначение сооружения]([Индекс сооружения] int primary key not null, [Назначение сооружения] text not null)
create table [Назначение помещения]([Индекс назначения] int primary key not null, [Назначение помещения] text not null)

