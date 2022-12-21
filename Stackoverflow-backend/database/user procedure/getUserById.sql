create or alter procedure getUserById(@id varchar(30))
as
begin 
select *from Clients where id= @id
end