create or alter procedure addChats
(@id varchar(20), @Clientsid varchar(30), @Quizesid varchar(30), @Opinionsid varchar(20),@reply varchar (250))
as
begin
insert into addChats(id, Clientsid, Quizesid, Opinionsid,reply)
values(@id, @Clientsid, @Quizesid, @Opinionsid,@reply)
end
