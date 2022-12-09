create or alter procedure addComments(@id varchar(30), @userid varchar(30), @answersid varchar(30), @comments varchar(250))
as
begin
insert into Comments(id, userid, answersid, comments)
values(@id, @userid, @answersid, @comments)
end



