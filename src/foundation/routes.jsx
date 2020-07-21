import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component'

const Entrance = loadable(() => import( '../pages/entrance'));
const BlogHome = loadable(() => import( '../pages/blog_home'));
const Entry = loadable(() => import( '../pages/entry'));
const NotFound = loadable(() => import( '../pages/not_found'));

export function Routes() {
  const error = useSelector((state) => state.error.toJS());

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Entrance />
      </Route>
      <Route exact path="/:blogId">
        <BlogHome />
      </Route>
      <Route exact path="/:blogId/entry/:entryId">
        <Entry />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
