create table Clients
(
id varchar(30) primary key not null,
username varchar (250) NOT NULL,
email varchar(250) NOT NULL unique,
password varchar(250) NOT NULL,
confirm varchar(250) NOT NULL,
)
