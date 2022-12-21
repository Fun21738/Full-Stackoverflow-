CREATE  OR ALTER PROCEDURE checkLogins (@email varchar(250))
AS
BEGIN
 select * from Clients where email = @email
END
