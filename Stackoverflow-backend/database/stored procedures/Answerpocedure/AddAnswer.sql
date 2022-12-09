CREATE PROCEDURE insertanswers (@id varchar(20),@userid varchar(30),@questionid varchar(30),@username varchar(250),@answers varchar(250),
@likes int,@dislikes int)
AS
BEGIN

INSERT INTO  Answers (id,userid, questionid, username, answers, likes, dislikes)
VALUES(@id,@userid, @questionid,@username,@answers,@likes,@dislikes)

END