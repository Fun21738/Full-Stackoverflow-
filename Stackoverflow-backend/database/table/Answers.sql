create  table Opinions
(
id varchar(20) primary key not null,
Clientsid varchar(30) foreign key references Clients(id) not null, 
Quizesid varchar(30) foreign key references Quizes (id) not null,
comments varchar(250) NOT NULL,
likes int,
dislikes int,
)