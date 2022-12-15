create or alter procedure deleteQuestion(@id varchar(30))
as
begin
update Quizes set isdeleted=1 where id=@id
end
