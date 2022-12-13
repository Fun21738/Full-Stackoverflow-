CREATE PROCEDURE addOpinions (@id varchar(20),@Clientsid varchar(30),@Quizesid varchar(30),@comments varchar(250),
@likes int,@dislikes int)
AS
BEGIN

INSERT INTO  addOpinions(id,Clientsid,Quizesid, comments, likes, dislikes)
VALUES(@id,@clientsid, @Quizesid,@comments,@likes,@dislikes)

END