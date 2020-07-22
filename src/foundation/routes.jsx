import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Entrance = React.lazy(() => import('../pages/entrance/Entrance'));
const BlogHome = React.lazy(() => import('../pages/blog_home/BlogHome'));
const Entry = React.lazy(() => import('../pages/entry/Entry'));
const NotFound = React.lazy(() => import('../pages/not_found/NotFound'));

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return (
      <React.Suspense fallback={null}>
        <NotFound />
      </React.Suspense>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <React.Suspense fallback={null}>
          <Entrance />
        </React.Suspense>
      </Route>
      <Route exact path="/:blogId">
        <React.Suspense fallback={null}>
          <BlogHome />
        </React.Suspense>
      </Route>
      <Route exact path="/:blogId/entry/:entryId">
        <React.Suspense fallback={null}>
          <Entry />
        </React.Suspense>
      </Route>
      <Route path="*">
        <React.Suspense fallback={null}>
          <NotFound />
        </React.Suspense>
      </Route>
    </Switch>
  );
}
