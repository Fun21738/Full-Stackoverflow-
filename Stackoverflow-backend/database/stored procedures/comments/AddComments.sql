CREATE PROCEDURE insertcomment (@id varchar(100),@username varchar(100),@comments varchar(100))
AS
BEGIN

INSERT INTO  Comments (id ,username,comments)VALUES(@Id,@username,@comments)

END