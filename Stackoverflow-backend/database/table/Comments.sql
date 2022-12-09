create table Comments
(
id varchar(20) primary key not null,
userid varchar(30) foreign key references users not null, 
answersid varchar(20)  foreign key references Answers not null ,
comments varchar(250) NOT NULL,
)



