CREATE PROCEDURE addLogins (@id varchar (20),@username varchar(250),@email varchar(250),@password varchar (250))
AS
BEGIN

INSERT INTO addLogins (id, username,email,password)
VALUES (@id,@username,@email,@password)

END