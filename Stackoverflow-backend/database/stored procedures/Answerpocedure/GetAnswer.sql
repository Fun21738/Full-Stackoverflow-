CREATE or alter PROCEDURE getOpinions(@Quizesid varchar(255))
AS
BEGIN
SELECT * FROM Opinions  where Quizesid=@Quizesid

END