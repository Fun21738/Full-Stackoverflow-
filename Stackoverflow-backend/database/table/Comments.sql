create table Chats
(
id varchar(20) primary key not null,
Clientsid varchar(30) foreign key references Clients(id) not null,
Quizesid varchar(30) foreign key references Quizes (id) not null,
Opinions varchar(20) foreign key references Opinions (id) not null,
reply varchar(250) NOT NULL,
)



