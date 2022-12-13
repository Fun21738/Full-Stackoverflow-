create or alter procedure addQuizes(@id varchar(30), @Clientsid varchar(30), @questions varchar(250))
as
begin
insert into addQuizes(id, Clientsid, questions)
values(@id, @Clientsid, @questions)
end




