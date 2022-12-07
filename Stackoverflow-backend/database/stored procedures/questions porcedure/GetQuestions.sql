CREATE PROCEDURE getQuestion (@id varchar(100))
AS
BEGIN
SELECT *FROM Questions WHERE id=@id

END




