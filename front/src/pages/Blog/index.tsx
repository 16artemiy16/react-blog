import { Avatar, Card, CardContent, CardHeader, Chip, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    article: {
      width: 345,
      marginBottom: theme.spacing(3),
    },
    articlesList: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    articleTagsList: {
      display: 'flex',
      marginBottom: theme.spacing(2),
    },
    articleTag: {
      marginRight: theme.spacing(1),
    },
    articleTitle: {
      fontWeight: 'bold',
    },
  });
});

export const BlogPage = () => {
  const classes = useStyles();
  const articles = [
    {
      _id: 1,
      title: 'Top 3 Front-end frameworks in the World',
      img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      description: `Do you want to spend you time with profit and pleasure? 
      So, just learn a new framework. This article describes the top 3 front-end frameworks`,
      tags: ['front-end', 'top'],
      user: {
        _id: 1,
        img: 'https://image.flaticon.com/icons/png/512/21/21104.png',
        email: 'user@test.com'
      }
    },
    {
      _id: 2,
      title: 'Top 3 Front-end frameworks in the World',
      img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      description: `Do you want to spend you time with profit and pleasure? 
      So, just learn a new framework. This article describes the top 3 front-end frameworks`,
      tags: ['front-end', 'top'],
      user: {
        _id: 1,
        img: 'https://image.flaticon.com/icons/png/512/21/21104.png',
        email: 'user@test.com'
      }
    },
    {
      _id: 3,
      title: 'Top 3 Front-end frameworks in the World',
      img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      description: `Do you want to spend you time with profit and pleasure? 
      So, just learn a new framework. This article describes the top 3 front-end frameworks`,
      tags: ['front-end', 'top'],
      user: {
        _id: 1,
        img: 'https://image.flaticon.com/icons/png/512/21/21104.png',
        email: 'user@test.com'
      }
    },
    {
      _id: 4,
      title: 'Top 3 Front-end frameworks in the World',
      img: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      description: `Do you want to spend you time with profit and pleasure? 
      So, just learn a new framework. This article describes the top 3 front-end frameworks`,
      tags: ['front-end', 'top'],
      user: {
        _id: 1,
        img: 'https://image.flaticon.com/icons/png/512/21/21104.png',
        email: 'user@test.com'
      }
    },
  ];

  return (
    <Container className={classes.articlesList}>
      {articles.map((article) => (
        <Card className={classes.article} key={article._id}>
          <CardHeader
            title={article.user.email}
            avatar={<Avatar>R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="September 14, 2016"
          />

          <CardContent>
            <div className={classes.articleTagsList}>
              {article.tags.map((tag) => (
                <Chip className={classes.articleTag} label={tag} key={tag} />
              ))}
            </div>
            <Link to={`/articles/${article._id}`}>
              <h2 className={classes.articleTitle}>{article.title}</h2>
            </Link>
            <div>{article.description}</div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default BlogPage;
