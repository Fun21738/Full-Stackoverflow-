create  table Quizes
(
id varchar(30) primary key not null,
Clientsid varchar(30) foreign key references Clients(id) not null, 
questions varchar(250) NOT NULL,
)


