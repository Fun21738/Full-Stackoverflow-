create table Questions
(
id varchar(30) primary key not null,
userid varchar(30) FOREIGN KEY REFERENCES users not null, 
questions varchar(250) NOT NULL,
)


