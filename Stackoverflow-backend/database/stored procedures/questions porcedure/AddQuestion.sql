create or alter procedure addQuestion(@id varchar(30), @userid varchar(30), @questions varchar(250))
as
begin
insert into Questions(id, userid, questions)
values(@id, @userid, @questions)
end



