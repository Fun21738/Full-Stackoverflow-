create or alter procedure addQuestion(@id varchar(30), @Clientsid varchar(30), @questions varchar(250))
as
begin
insert into Quizes(id,Clientsid,questions)
values (@id,@Clientsid,@questions);

end

