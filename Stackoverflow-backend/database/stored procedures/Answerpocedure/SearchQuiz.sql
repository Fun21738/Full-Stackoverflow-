CREATE  or alter PROCEDURE  SearchQuiz (@questions varchar(250))
AS
BEGIN
SELECT questions from Quizes where questions like '%' + @questions + '%'
END
