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

create table ������������([���������� ����� �������������] int primary key, [����� ��������] int not null, [����� ������������] text not null, [������ ������] int not null, [���� �������������� ������������] date not null, foreign key ([������ ������]) references [����� ������]([������ ������]))
create table ����������([����� ����������(������)] int primary key, [������ ����������] int not null, [������ ����] int not null, [��������� ����������] int not null, [��� ���������] int not null, [����� ������� ������] int not null, [����� �������] int not null, [����� � ���������] int not null, [������������������ ��������� ������] money not null, [���������] int not null, [����� �������] int not null, [����� �������������] int not null,[����� ��������] int not null, foreign key ([����� �������������]) references ������������([���������� ����� �������������]), foreign key ([������ ����]) references [��� ����������]([������ ����]), foreign key ([����� �������]) references [��������� �������]([����� ���������� �������]), foreign key ([����� ��������]) references [�������]([����� �������]), foreign key ([������ ����������]) references [���������� ����������]([������ ����������]))
create table �������([����� �������] int primary key, �������� int, [���������� ������������] text not null, [���������] bit not null, [����������] bit not null, [���������] bit not null, [����������] text not null)
create table ���������([����� ��������� � �����������] int primary key not null, [������ ���������] int, [������ ����������]  int not null, [������� ���������] int not null, [������ ���������] int not null, [���� ������������ ���������] int not null, [����� ����������] int not null, foreign key ([������ ���������]) references [�������� ����]([������ ���������]), foreign key ([����� ����������]) references [����������]([����� ����������(������)]), foreign key ([������ ����������]) references [���������� ���������]([������ ����������]))
create table [��������� �������]([����� ���������� �������] int primary key not null, [������� ���������� �������] int, [����������� ������� �������] int not null, [������� ���������] int not null, [������� �����] int not null, [������� ����������] int not null, [������� �������] int not null)
create table [��� ����������]([������ ����] int primary key not null, [��� ����������] text)
create table [����� ������]([������ ������] int primary key not null, [�����] text not null)
create table [�������� ����]([������ ���������] int primary key not null, [�������� ����] text not null)
create table [���������� ����������]([������ ����������] int primary key not null, [���������� ����������] text not null)
create table [���������� ���������]([������ ����������] int primary key not null, [���������� ���������] text not null)

