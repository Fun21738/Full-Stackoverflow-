create or alter procedure addChats
(@id varchar(20), @Clientsid varchar(30),@Opinionsid varchar(20),@reply varchar (250))
as
begin
insert into Chats(id, Clientsid,Opinionsid,reply)
values(@id, @Clientsid, @Opinionsid,@reply)
end
