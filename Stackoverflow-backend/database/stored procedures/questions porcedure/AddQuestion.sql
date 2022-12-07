CREATE PROCEDURE addquestion (@id varchar(100),@username varchar(100),@questions varchar(100))
AS
BEGIN

INSERT INTO  Questions (id ,username,questions)VALUES(@Id,@username,@questions)

END