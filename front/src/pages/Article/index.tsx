import { Chip } from '@material-ui/core';

const ArticlePage = () => {
  const article =     {
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
    },
    body: `Do you want to spend you time with profit and pleasure? 
      So, just learn a new framework. This article describes the top 3 front-end frameworks`
  };

  return (
    <>
      <h1>{article.title}</h1>
      <img src={article.img} />
      {article.tags.map((tag) => (
        <Chip key={tag} label={tag} />
      ))}
      <div>
        {article.body}
      </div>
    </>
  );
};

export default ArticlePage;
