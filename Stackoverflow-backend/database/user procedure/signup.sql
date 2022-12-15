CREATE PROCEDURE addClient (@id varchar (20),@username varchar(250),@email varchar(250),@password varchar (250),@confirm varchar(250))
AS
BEGIN

INSERT INTO Clients(id, username,email,password ,confirm)
VALUES (@id,@username,@email,@password,@confirm)

END

