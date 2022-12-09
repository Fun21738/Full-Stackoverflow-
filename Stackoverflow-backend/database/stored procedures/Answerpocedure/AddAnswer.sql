CREATE PROCEDURE insertanswers (@id varchar(100),@username varchar(100),@answers varchar(100))
AS
BEGIN

INSERT INTO  Answers (id ,username,answers)VALUES(@Id,@username,@answers)

END