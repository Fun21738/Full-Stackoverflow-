CREATE PROCEDURE getComments (@id varchar(100))
AS
BEGIN
SELECT *FROM Comments WHERE id=@id

END