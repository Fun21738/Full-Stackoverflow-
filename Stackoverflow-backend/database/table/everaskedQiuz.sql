create table EverAskedQuiz 
(
id int,
Clientsid varchar(30) foreign key references Clients(id) not null,
quiz varchar (250) NOT NULL,
)