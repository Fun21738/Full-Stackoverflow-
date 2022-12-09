create table Answers
(
id varchar(20) primary key not null,
userid varchar(30) foreign key references users not null, 
questionid varchar(30) foreign key references Questions not null,
username varchar(250) NOT NULL,
answers varchar(250) NOT NULL,
likes int,
dislikes int,
)