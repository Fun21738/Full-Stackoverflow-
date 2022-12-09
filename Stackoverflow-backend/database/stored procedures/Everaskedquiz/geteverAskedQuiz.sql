CREATE PROCEDURE getAskedQuiz (@id varchar(100))
AS
BEGIN
SELECT *FROM AskedQuiz WHERE id=@id

END