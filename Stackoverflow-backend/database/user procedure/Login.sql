CREATE  OR ALTER PROCEDURE checkLogins (@id varchar (20),@username varchar(250),@email varchar(250),@password varchar (250))
AS
BEGIN
 select * from Clients where username = @username 
END



