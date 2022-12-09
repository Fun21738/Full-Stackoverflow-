CREATE PROCEDURE getAnswers (@id varchar(100))
AS
BEGIN
SELECT *FROM Answers WHERE id=@id

END