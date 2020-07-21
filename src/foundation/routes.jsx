import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component'

const Entrance = loadable(() => import( '../pages/entrance'), {
  resolveComponent: (components) => components.Entrance,
});
const BlogHome = loadable(() => import( '../pages/blog_home'), {
  resolveComponent: (components) => components.BlogHome,
});
const Entry = loadable(() => import( '../pages/entry'), {
  resolveComponent: (components) => components.Entry,
});
const NotFound = loadable(() => import( '../pages/not_found'), {
  resolveComponent: (components) => components.NotFound,
});

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
