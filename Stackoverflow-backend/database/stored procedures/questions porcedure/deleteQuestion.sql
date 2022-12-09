CREATE PROCEDURE deletequestion(@id varchar(100))
AS
BEGIN
DELETE FROM Questions  WHERE id=@id
END

